import { describe, expect, it } from "vitest";
import { parseSseFrame } from "@/lib/sse";

describe("parseSseFrame", () => {
  it("parses a text delta", () => {
    expect(parseSseFrame('data: {"text":"hi"}')).toEqual({ text: "hi" });
  });
  it("parses an error frame", () => {
    expect(parseSseFrame('data: {"error":"boom"}')).toEqual({ error: "boom" });
  });
  it("flags the DONE sentinel", () => {
    expect(parseSseFrame("data: [DONE]")).toEqual({ done: true });
  });
  it("returns null for malformed frames", () => {
    expect(parseSseFrame("data: {nope")).toBeNull();
    expect(parseSseFrame("")).toBeNull();
  });
});
