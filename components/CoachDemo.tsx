"use client";

import { useRef, useState } from "react";
import { parseSseFrame } from "@/lib/sse";

const SUGGESTIONS = [
  "I keep procrastinating on a big goal.",
  "Help me prep for a hard conversation.",
  "I want a simple weekly reflection habit.",
];

export default function CoachDemo() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const abortRef = useRef<AbortController | null>(null);

  async function ask(text: string) {
    const q = text.trim();
    if (!q || loading) return;
    setLoading(true);
    setError("");
    setReply("");

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch("/api/edge-coach-stream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: q }),
        signal: controller.signal,
      });

      if (!res.ok || !res.body) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "The coach is unavailable right now.");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const frames = buffer.split("\n\n");
        buffer = frames.pop() ?? "";
        for (const frame of frames) {
          const parsed = parseSseFrame(frame);
          if (!parsed || parsed.done) continue;
          if (parsed.error) throw new Error(parsed.error);
          if (parsed.text) setReply((prev) => prev + parsed.text);
        }
      }
    } catch (err) {
      if ((err as Error).name !== "AbortError") {
        setError((err as Error).message || "Something went wrong.");
      }
    } finally {
      setLoading(false);
      abortRef.current = null;
    }
  }

  return (
    <section id="demo" className="mx-auto max-w-3xl px-6 py-16">
      <div className="ds-card">
        <h2 className="text-2xl font-extrabold text-ink">Try the AI coach</h2>
        <p className="mt-1 text-ink/60">
          Ask anything you&apos;re working on. Responses stream live.
        </p>

        <form
          className="mt-5 flex flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            ask(prompt);
          }}
        >
          <label htmlFor="coach-prompt" className="sr-only">
            Your question for the coach
          </label>
          <input
            id="coach-prompt"
            className="ds-input"
            placeholder="What would you like coaching on?"
            value={prompt}
            maxLength={4000}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            type="submit"
            className="ds-btn-primary whitespace-nowrap"
            disabled={loading || prompt.trim().length === 0}
          >
            {loading ? "Coaching…" : "Ask"}
          </button>
        </form>

        <div className="mt-3 flex flex-wrap gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              className="rounded-full bg-indigo-50 px-3 py-1 text-sm text-indigo-700 hover:bg-indigo-100"
              onClick={() => {
                setPrompt(s);
                ask(s);
              }}
            >
              {s}
            </button>
          ))}
        </div>

        {error && (
          <p role="alert" className="mt-4 text-sm font-bold text-amber-600">
            {error}
          </p>
        )}
        {reply && (
          <div className="mt-5 rounded-ds bg-indigo-50/60 p-4 text-ink/90 whitespace-pre-wrap">
            {reply}
          </div>
        )}
      </div>
    </section>
  );
}
