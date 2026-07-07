"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "sending" | "done" | "error";

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name:    String(data.get("name")    ?? ""),
      email:   String(data.get("email")   ?? ""),
      goal:    String(data.get("goal")    ?? ""),
      company: String(data.get("company") ?? ""), // honeypot
    };

    try {
      const res  = await fetch("/api/booking", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error ?? "Could not submit. Please try again.");
      setStatus("done");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage((err as Error).message);
    }
  }

  /* ── Success state ── */
  if (status === "done") {
    return (
      <div
        style={{
          background: "var(--bg-primary)",
          border: "1px solid var(--border-default)",
          borderRadius: 20,
          padding: "clamp(28px,5vw,48px)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "var(--bg-tint-indigo)",
            color: "var(--brand-indigo-primary)",
          }}
        >
          <CheckCircle2 aria-hidden="true" style={{ width: 28, height: 28 }} />
        </span>
        <h3
          style={{
            font: "800 clamp(22px,3vw,28px)/1.2 var(--font-sans,Nunito,sans-serif)",
            color: "var(--fg-heading)",
          }}
        >
          Request received
        </h3>
        <p
          style={{
            font: "400 clamp(15px,1.8vw,17px)/1.6 var(--font-sans,Nunito,sans-serif)",
            color: "var(--fg-body)",
            maxWidth: "40ch",
          }}
        >
          Jeremy will reach out within a day with a time that works. Check your
          inbox — sometimes it lands in spam.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="ds-btn-ghost"
          style={{ font: "700 14px/1 var(--font-sans,Nunito,sans-serif)", marginTop: 4 }}
        >
          Submit another request
        </button>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <form
      onSubmit={onSubmit}
      noValidate
      style={{
        background: "var(--bg-primary)",
        border: "1px solid var(--border-default)",
        borderRadius: 20,
        padding: "clamp(22px,4vw,32px)",
        display: "flex",
        flexDirection: "column",
        gap: 18,
      }}
    >
      <label className="ds-label">
        Your name
        <input
          name="name"
          required
          placeholder="Alex Rivera"
          className="ds-input"
        />
      </label>

      <label className="ds-label">
        Email
        <input
          name="email"
          type="email"
          required
          placeholder="alex@company.com"
          className="ds-input"
        />
      </label>

      <label className="ds-label">
        What would you like AI to do for you?
        <textarea
          name="goal"
          required
          rows={4}
          placeholder="e.g. Automate my weekly client reports and draft email follow-ups"
          className="ds-input"
          style={{ resize: "vertical" }}
        />
      </label>

      {/* Honeypot — hidden from real users, traps bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {status === "error" && (
        <div
          role="alert"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 9,
            background: "rgba(224,122,95,0.12)",
            border: "1px solid rgba(224,122,95,0.3)",
            borderRadius: 12,
            padding: "12px 14px",
            font: "600 14px/1.5 var(--font-sans,Nunito,sans-serif)",
            color: "var(--semantic-error,#E07A5F)",
          }}
        >
          <AlertCircle aria-hidden="true" style={{ width: 16, height: 16, flexShrink: 0, marginTop: 1 }} />
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="ds-btn-primary"
        style={{
          font: "700 16px/1 var(--font-sans,Nunito,sans-serif)",
          padding: "15px 26px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 9,
          width: "100%",
        }}
      >
        {status === "sending" ? (
          "Sending\u2026"
        ) : (
          <>
            Request a session
            <ArrowRight aria-hidden="true" style={{ width: 18, height: 18 }} />
          </>
        )}
      </button>
    </form>
  );
}
