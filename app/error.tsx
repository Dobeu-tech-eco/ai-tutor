"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface in logs/monitoring; digest links to Vercel's server-side log.
    console.error("app error boundary:", error);
  }, [error]);

  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        padding: "clamp(20px,5vw,80px)",
        background: "var(--bg-primary)",
        textAlign: "center",
      }}
    >
      <span
        style={{
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--brand-amber-warm)",
        }}
      >
        Something went wrong
      </span>
      <h1
        style={{
          margin: 0,
          font: "800 clamp(28px,5vw,44px)/1.12 var(--font-sans,Nunito,sans-serif)",
          letterSpacing: "-0.02em",
          color: "var(--fg-heading)",
        }}
      >
        We hit a snag.
      </h1>
      <p
        style={{
          margin: 0,
          font: "400 clamp(15px,1.8vw,18px)/1.6 var(--font-sans,Nunito,sans-serif)",
          color: "var(--fg-body)",
          maxWidth: "44ch",
        }}
      >
        An unexpected error occurred. Try again — if it keeps happening, email
        us and we&apos;ll sort it out.
      </p>
      <button
        type="button"
        onClick={reset}
        className="ds-btn-primary"
        style={{
          font: "700 15px/1 var(--font-sans,Nunito,sans-serif)",
          padding: "13px 24px",
          marginTop: 8,
        }}
      >
        Try again
      </button>
    </main>
  );
}
