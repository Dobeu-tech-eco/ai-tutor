import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

type Options = { limit?: number; windowMs?: number };
type Result = { ok: boolean; retryAfterSec: number };

// In-memory fallback for dev/tests (per-instance; fine outside prod).
const mem = new Map<string, number[]>();

function memoryCheck(key: string, limit: number, windowMs: number): Result {
  const now = Date.now();
  const hits = (mem.get(key) ?? []).filter((t) => now - t < windowMs);
  if (hits.length === 0) mem.delete(key);
  if (hits.length >= limit) {
    const retryAfterSec = Math.ceil((windowMs - (now - hits[0])) / 1000);
    return { ok: false, retryAfterSec };
  }
  hits.push(now);
  mem.set(key, hits);
  return { ok: true, retryAfterSec: 0 };
}

const upstashConfigured =
  !!process.env.KV_REST_API_URL && !!process.env.KV_REST_API_TOKEN;

const limiters = new Map<string, Ratelimit>();

function upstashLimiter(limit: number, windowMs: number): Ratelimit {
  const id = `${limit}:${windowMs}`;
  let rl = limiters.get(id);
  if (!rl) {
    rl = new Ratelimit({
      redis: new Redis({
        url: process.env.KV_REST_API_URL!,
        token: process.env.KV_REST_API_TOKEN!,
      }),
      limiter: Ratelimit.slidingWindow(limit, `${Math.ceil(windowMs / 1000)} s`),
      prefix: "ai-tutor-rl",
    });
    limiters.set(id, rl);
  }
  return rl;
}

/** Sliding-window rate limit. Uses Upstash in prod, memory otherwise. */
export async function checkRateLimit(
  key: string,
  { limit = 10, windowMs = 60_000 }: Options = {},
): Promise<Result> {
  if (!upstashConfigured) return memoryCheck(key, limit, windowMs);
  try {
    const res = await upstashLimiter(limit, windowMs).limit(key);
    return {
      ok: res.success,
      retryAfterSec: res.success ? 0 : Math.ceil((res.reset - Date.now()) / 1000),
    };
  } catch (err) {
    console.error("ratelimit: upstash error, failing open:", err);
    return memoryCheck(key, limit, windowMs);
  }
}

/** Best client IP available on Vercel. */
export function clientIp(req: Request): string {
  return (
    req.headers.get("x-real-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}
