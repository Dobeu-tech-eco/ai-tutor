import { describe, expect, it, beforeAll, afterAll, vi } from "vitest";
import { POST } from "@/app/api/booking/route";

function req(body: unknown): Request {
  return new Request("http://test/api/booking", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

describe("POST /api/booking", () => {
  beforeAll(() => {
    // Stub env vars as empty to simulate unset state for the 503 test
    vi.stubEnv("RESEND_API_KEY", "");
    vi.stubEnv("BOOKING_FROM_EMAIL", "");
    vi.stubEnv("BOOKING_TO_EMAIL", "");
  });

  afterAll(() => {
    vi.unstubAllEnvs();
  });

  it("returns stealth 200 for a filled honeypot without sending email", async () => {
    const res = await POST(
      req({ name: "Bot", email: "bot@x.com", goal: "spam", company: "spam co" }),
    );
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
  });

  it("returns 503 when Resend is unconfigured", async () => {
    const res = await POST(req({ name: "A", email: "a@b.com", goal: "focus" }));
    expect(res.status).toBe(503);
  });

  it("returns 400 for invalid JSON", async () => {
    const res = await POST(
      new Request("http://test/api/booking", { method: "POST", body: "{nope" }),
    );
    expect(res.status).toBe(400);
  });
});
