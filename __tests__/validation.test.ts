import { describe, expect, it } from "vitest";
import { bookingRequestSchema, coachRequestSchema } from "@/lib/validation";

describe("coachRequestSchema", () => {
  it("accepts a valid prompt", () => {
    const r = coachRequestSchema.safeParse({ prompt: "How do I focus?" });
    expect(r.success).toBe(true);
  });

  it("rejects an empty prompt", () => {
    const r = coachRequestSchema.safeParse({ prompt: "   " });
    expect(r.success).toBe(false);
  });

  it("rejects an over-long prompt", () => {
    const r = coachRequestSchema.safeParse({ prompt: "x".repeat(4001) });
    expect(r.success).toBe(false);
  });
});

describe("bookingRequestSchema", () => {
  it("accepts a valid booking", () => {
    const r = bookingRequestSchema.safeParse({
      name: "Maya",
      email: "maya@example.com",
      goal: "Build a reflection habit",
    });
    expect(r.success).toBe(true);
  });

  it("rejects an invalid email", () => {
    const r = bookingRequestSchema.safeParse({
      name: "Maya",
      email: "not-an-email",
      goal: "x",
    });
    expect(r.success).toBe(false);
  });

  it("accepts a filled honeypot (route handles it silently)", () => {
    const r = bookingRequestSchema.safeParse({
      name: "Bot",
      email: "bot@example.com",
      goal: "spam",
      company: "spammy co",
    });
    expect(r.success).toBe(true);
  });
});
