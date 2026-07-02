"use client";

import { useState } from "react";

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
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      goal: String(data.get("goal") ?? ""),
      company: String(data.get("company") ?? ""), // honeypot
    };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(body.error ?? "Could not submit. Please try again.");
      }
      setStatus("done");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage((err as Error).message);
    }
  }

  if (status === "done") {
    return (
      <div className="ds-card text-center">
        <h3 className="text-2xl font-extrabold text-indigo-700">
          Request received 🎉
        </h3>
        <p className="mt-2 text-ink/70">
          Jeremy will reach out shortly to schedule your session. Check your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="ds-card grid gap-4" noValidate>
      <h3 className="text-2xl font-extrabold text-ink">Book your 1-on-1 AI coaching session</h3>

      <div className="grid gap-1">
        <label htmlFor="name" className="text-sm font-bold text-ink/70">
          Name
        </label>
        <input id="name" name="name" required className="ds-input" />
      </div>

      <div className="grid gap-1">
        <label htmlFor="email" className="text-sm font-bold text-ink/70">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="ds-input"
        />
      </div>

      <div className="grid gap-1">
        <label htmlFor="goal" className="text-sm font-bold text-ink/70">
          What would you like AI to do for you?
        </label>
        <textarea
          id="goal"
          name="goal"
          required
          rows={4}
          className="ds-input"
        />
      </div>

      {/* Honeypot: hidden from users, catches bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <button
        type="submit"
        className="ds-btn-accent"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Request a session"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm font-bold text-amber-600">
          {message}
        </p>
      )}
    </form>
  );
}
