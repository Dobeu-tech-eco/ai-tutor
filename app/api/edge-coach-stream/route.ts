// Vercel Edge — streaming AI coach backed by Anthropic (Claude).
// Streams Server-Sent Events: each `data:` line carries a JSON {text} delta,
// terminated by a final `data: [DONE]` sentinel.

import {
  COACH_SYSTEM_PROMPT,
  ConfigError,
  DEFAULT_MODEL,
  getAnthropicClient,
} from "@/lib/anthropic";
import { coachRequestSchema } from "@/lib/validation";
import { checkRateLimit, clientIp } from "@/lib/ratelimit";

export const runtime = "edge";

const SSE_HEADERS = {
  "Content-Type": "text/event-stream; charset=utf-8",
  "Cache-Control": "no-cache, no-transform",
  "X-Accel-Buffering": "no",
};

function json(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function sse(data: string): string {
  return `data: ${data}\n\n`;
}

export async function POST(req: Request): Promise<Response> {
  // 1. Parse + validate input (never let a bad body become an unhandled 500).
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return json(400, { error: "Request body must be valid JSON" });
  }

  const parsed = coachRequestSchema.safeParse(payload);
  if (!parsed.success) {
    return json(400, {
      error: "Invalid request",
      details: parsed.error.flatten().fieldErrors,
    });
  }
  const { prompt } = parsed.data;

  const rl = await checkRateLimit(`coach:${clientIp(req)}`, {
    limit: 10,
    windowMs: 60_000,
  });
  if (!rl.ok) {
    return json(429, {
      error: "Too many requests — give it a moment.",
      retryAfterSec: rl.retryAfterSec,
    });
  }

  // 2. Acquire the client (missing key => clean 503, not a 500 leak).
  let client;
  try {
    client = getAnthropicClient();
  } catch (err) {
    if (err instanceof ConfigError) {
      return json(503, { error: "AI coach is not configured yet" });
    }
    throw err;
  }

  const encoder = new TextEncoder();
  const abort = req.signal;

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        const messageStream = client.messages.stream(
          {
            model: DEFAULT_MODEL,
            max_tokens: 600,
            system: COACH_SYSTEM_PROMPT,
            messages: [{ role: "user", content: prompt }],
          },
          { signal: abort },
        );

        for await (const event of messageStream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            controller.enqueue(
              encoder.encode(sse(JSON.stringify({ text: event.delta.text }))),
            );
          }
        }
        controller.enqueue(encoder.encode(sse("[DONE]")));
      } catch (err) {
        if (!abort.aborted) {
          console.error("coach stream error:", err);
          controller.enqueue(
            encoder.encode(
              sse(JSON.stringify({ error: "The coach hit a snag. Please retry." })),
            ),
          );
        }
      } finally {
        controller.close();
      }
    },
    cancel() {
      // Reader went away; nothing else to clean up.
    },
  });

  return new Response(stream, { headers: SSE_HEADERS });
}
