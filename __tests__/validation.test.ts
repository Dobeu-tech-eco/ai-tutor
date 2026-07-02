import { describe, expect, it } from "vitest";
import { bookingRequestSchema } from "@/lib/validation";

describe("bookingRequestSchema", () => {
  it("accepts a valid booking", () => {
    const r = bookingRequestSchema.safeParse({
      name: "Maya",
      email: "maya@example.com",
      goal: "Automate my client follow-ups with AI",
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

  it("rejects an empty goal", () => {
    const r = bookingRequestSchema.safeParse({
      name: "Maya",
      email: "maya@example.com",
      goal: "   ",
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
