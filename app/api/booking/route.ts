// Booking endpoint — validates the request and emails a notification via Resend.
import { Resend } from "resend";
import { bookingRequestSchema } from "@/lib/validation";
import { checkRateLimit, clientIp } from "@/lib/ratelimit";

export const runtime = "nodejs";

function json(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request): Promise<Response> {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return json(400, { error: "Request body must be valid JSON" });
  }

  const parsed = bookingRequestSchema.safeParse(payload);
  if (!parsed.success) {
    return json(400, {
      error: "Invalid request",
      details: parsed.error.flatten().fieldErrors,
    });
  }

  const rl = await checkRateLimit(`booking:${clientIp(req)}`, {
    limit: 5,
    windowMs: 300_000,
  });
  if (!rl.ok) {
    return json(429, {
      error: "Too many requests — give it a moment.",
      retryAfterSec: rl.retryAfterSec,
    });
  }

  // Honeypot tripped — pretend success so bots don't learn anything.
  if (parsed.data.company) {
    return json(200, { ok: true });
  }

  const { name, email, goal } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.BOOKING_FROM_EMAIL;
  const to = process.env.BOOKING_TO_EMAIL;
  if (!apiKey || !from || !to) {
    return json(503, { error: "Booking is not configured yet" });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New coaching request from ${name}`,
      html: `<h2>New Coach Connect request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Goal:</strong></p>
        <p>${escapeHtml(goal)}</p>`,
    });

    if (error) {
      console.error("resend error:", error);
      return json(502, { error: "Could not send your request. Please retry." });
    }
    return json(200, { ok: true });
  } catch (err) {
    console.error("booking error:", err);
    return json(500, { error: "Unexpected error. Please retry." });
  }
}
