import { afterAll, afterEach, describe, expect, it, vi } from "vitest";
import { checkRateLimit } from "@/lib/ratelimit";

describe("checkRateLimit (in-memory fallback)", () => {
  it("allows up to the limit then blocks", async () => {
    const key = `t-${Date.now()}`;
    for (let i = 0; i < 5; i++) {
      expect((await checkRateLimit(key, { limit: 5, windowMs: 60_000 })).ok).toBe(true);
    }
    const blocked = await checkRateLimit(key, { limit: 5, windowMs: 60_000 });
    expect(blocked.ok).toBe(false);
    expect(blocked.retryAfterSec).toBeGreaterThan(0);
  });
});

describe("checkRateLimit (Upstash-configured branch)", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.resetModules();
    vi.doUnmock("@upstash/ratelimit");
    vi.doUnmock("@upstash/redis");
  });

  afterAll(() => {
    vi.unstubAllEnvs();
    vi.resetModules();
  });

  it("returns blocked result with retryAfterSec when Upstash denies", async () => {
    vi.stubEnv("KV_REST_API_URL", "https://fake.upstash.io");
    vi.stubEnv("KV_REST_API_TOKEN", "fake");
    vi.resetModules();

    vi.doMock("@upstash/redis", () => ({
      Redis: class {},
    }));
    vi.doMock("@upstash/ratelimit", () => {
      class Ratelimit {
        static slidingWindow = vi.fn(() => ({}));
        limit = vi.fn(async () => ({
          success: false,
          reset: Date.now() + 30_000,
        }));
      }
      return { Ratelimit };
    });

    const { checkRateLimit: checkRateLimitConfigured } = await import("@/lib/ratelimit");
    const result = await checkRateLimitConfigured("k-denied", { limit: 5, windowMs: 60_000 });
    expect(result.ok).toBe(false);
    expect(result.retryAfterSec).toBeGreaterThan(0);
  });

  it("fails open to the in-memory limiter when Upstash throws", async () => {
    vi.stubEnv("KV_REST_API_URL", "https://fake.upstash.io");
    vi.stubEnv("KV_REST_API_TOKEN", "fake");
    vi.resetModules();

    vi.doMock("@upstash/redis", () => ({
      Redis: class {},
    }));
    vi.doMock("@upstash/ratelimit", () => {
      class Ratelimit {
        static slidingWindow = vi.fn(() => ({}));
        limit = vi.fn(async () => {
          throw new Error("network error");
        });
      }
      return { Ratelimit };
    });

    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const { checkRateLimit: checkRateLimitConfigured } = await import("@/lib/ratelimit");
    const result = await checkRateLimitConfigured("k-fail-open", { limit: 5, windowMs: 60_000 });
    expect(result.ok).toBe(true);
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "ratelimit: upstash error, failing open:",
      expect.any(Error),
    );
    consoleErrorSpy.mockRestore();
  });
});
