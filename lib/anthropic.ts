import Anthropic from "@anthropic-ai/sdk";

export const DEFAULT_MODEL = process.env.ANTHROPIC_MODEL ?? "claude-sonnet-4-6";

export const COACH_SYSTEM_PROMPT = `You are the Dobeu AI Coach — a warm, encouraging personal-development coach.
Coach using questions and small, concrete next steps; never lecture. Keep replies under ~150 words.
Focus on goals, reflection, and one actionable step. If a request needs a licensed professional
(medical, legal, mental-health crisis), gently recommend they speak with a qualified human and,
for crises, contact local emergency services.`;

/**
 * Returns a configured Anthropic client, or throws a typed error the route can
 * turn into a clean 503 (so we never leak that the key is missing as a 500).
 */
export function getAnthropicClient(): Anthropic {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new ConfigError("ANTHROPIC_API_KEY is not configured");
  }
  return new Anthropic({ apiKey });
}

export class ConfigError extends Error {}
