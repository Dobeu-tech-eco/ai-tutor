export type SseFrame = { text?: string; error?: string; done?: boolean };

/** Parse one SSE frame ("data: ..."). Returns null for empty/malformed frames. */
export function parseSseFrame(frame: string): SseFrame | null {
  const line = frame.replace(/^data:\s?/, "").trim();
  if (!line) return null;
  if (line === "[DONE]") return { done: true };
  try {
    const data = JSON.parse(line) as SseFrame;
    if (typeof data.text === "string") return { text: data.text };
    if (typeof data.error === "string") return { error: data.error };
    return null;
  } catch {
    return null;
  }
}
