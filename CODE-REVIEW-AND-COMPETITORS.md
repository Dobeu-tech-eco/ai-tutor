# ai-tutor — Code Review, Skill Check & Competitor Research
_Reviewed June 26, 2026 · repo: github.com/dobeu-tech-eco/ai-tutor @ `ae44a32`_

---

## 1. Code Review: ai-tutor codebase

### Summary
The cloned repo contains **3 markdown files and a single 25-line Edge function** — no app, no booking form, no Resend integration, no tests, no `package.json`, no config. The docs (`PRODUCTION-READY.md`, `PHASE1-START.md`) claim a complete, shipped, "production-ready" platform, but none of that code is in the repository. The one real file streams hardcoded placeholder text. Treat this repo as a stub, not a launch candidate.

### Critical issues
| # | File | Issue | Severity |
|---|------|-------|----------|
| 1 | repo root | `PRODUCTION-READY.md` claims tests, env, resilience, SEO, CI, monitoring — **none exist in the repo**. Docs and reality are fully disconnected. | 🔴 Critical |
| 2 | `app/api/edge-coach-stream/route.ts` | The "AI coach" returns **4 hardcoded strings**, not model output. There is no LLM call, no Anthropic/OpenAI client, no `sessionId`/`prompt` use. | 🔴 Critical |
| 3 | `route.ts` | **No input validation** on `await req.json()`. A malformed/empty body throws an unhandled exception → 500 with a stack. Destructured `prompt`/`sessionId` are never used or sanitized. | 🔴 Critical |
| 4 | repo | **No `package.json`, lockfile, tsconfig, or framework config.** This is referenced as a Next.js Edge route but the project scaffolding is absent — it cannot build or deploy as-is. | 🔴 Critical |

### Suggestions
| # | File | Suggestion | Category |
|---|------|------------|----------|
| 1 | `route.ts` | Content-Type is `text/event-stream` but chunks aren't SSE-formatted (`data: ...\n\n`). Either send proper SSE frames or use `text/plain`; clients will mis-parse the current output. | Correctness |
| 2 | `route.ts` | `'Connection': 'keep-alive'` is ignored/invalid on Edge runtime — drop it. | Maintainability |
| 3 | `route.ts` | No `try/catch`, no timeout, no abort handling on the stream. Add error propagation and an `AbortSignal` tie-in. | Performance/Resilience |
| 4 | `route.ts` | No auth, rate limiting, or origin check on a public POST endpoint — once it calls a paid LLM, this is a cost/abuse vector. | Security |
| 5 | repo | `app/api/edge-coach-stream/README.md` is empty (0 bytes). Document the contract or remove. | Maintainability |
| 6 | repo | Commit messages and docs use celebratory claims ("SHIP IT ✅", "95% alignment") with no evidence. Tie status claims to actual tests/CI. | Process |

### Verdict
**Request changes — not production-ready.** Highest priority: (a) commit the actual application code (the booking form, Resend integration, and UI the README describes), (b) replace the placeholder stream with a real, validated, error-handled LLM call, and (c) correct the docs so "production-ready" reflects reality. If the real code lives elsewhere (Replit, another branch), point me at it and I'll review that instead.

---

## 2. Skill check: `parallel:parallel-cli-setup` (local)

- **Skill quality:** Clean, well-structured setup guide — install (brew/uv/npm/pipx), version gate (`>=0.4.0`), OAuth device-flow auth, balance check, skills install, first-run suggestions. No issues with the skill itself.
- **Local state:** `parallel-cli` was **not installed**. I installed it in the sandbox via pip → **v0.7.1** (meets the `>=0.4.0` requirement ✅).
- **Blocker:** `parallel-cli auth` returns `authenticated: false`, no stored credentials, no API key. Authentication requires the **interactive OAuth device flow plus a funded balance/payment method** on _your_ machine — it can't be completed autonomously from this ephemeral sandbox.
- **To finish setup yourself:** run `parallel-cli login` (add `--no-browser` if headless), then `parallel-cli balance get` (add funds at platform.parallel.ai/settings if zero), then `parallel-cli skills install`, and restart the agent.

Because real `parallel-deep-research` couldn't run without that auth, the competitor research below was produced with web search as a stand-in. Re-run it through Parallel once authenticated for source-cited deep reports.

---

## 3. Competitor research: AI coaching / AI tutoring

**Positioning read:** Dobeu "AI Tutor / Coach Connect" (dobeu.tech) — booking form + testimonials + AI examples — is a **hybrid AI + human-coach connect** product. That puts it primarily in the **AI coaching** market, with **AI tutoring** as an adjacency.

### Market context
- Global coaching market ≈ **$5.8B in 2026**; AI-specific coaching growing **~22–28%/yr**.
- AI career-coach segment alone projected **$5.48B (2025) → $6.69B (2026)**, ~22.3% CAGR.
- **Hybrid (human coach + AI practice)** is the dominant 2026 model for enterprise buyers; AI roleplay for hard conversations is now table-stakes, not a differentiator.

### Primary competitors — AI coaching
| Platform | Model | Note / pricing |
|---|---|---|
| **BetterUp** | Hybrid, enterprise | Biggest name; 5,000+ credentialed coaches, 80+ countries; BetterUp AICoach for 24/7. ~$300–$1,000+/employee/yr. |
| **CoachHub** | Hybrid, enterprise | Broadest reach — 80+ languages, 90+ countries; AIMY AI companion. Per-seat, enterprise pricing. |
| **Coachello** | Hybrid, embedded | Lives in Teams/Slack/Web; ICF coaches + AI roleplay; cites 3.2 coaching interactions/wk vs 0.7 traditional. |
| **Rocky.ai** | AI-only | Conversational soft-skills/leadership coach; lowest entry ~$10–13/user/mo. |
| **Valence (Nadia), Boon, Bunch.ai, Hone, Exec.com, LEADx** | Mixed | Standalone AI tools ~$5–50/person/mo; enterprise hybrids custom. |

### Adjacent competitors — AI tutoring
| Platform | Focus | Pricing |
|---|---|---|
| **Khanmigo** (Khan Academy) | All subjects, Socratic, GPT-4 | ~$44/yr; 700k+ K-12 students, 380+ districts |
| **Synthesis Tutor** | K-5 math, warm/multisensory | ~$99/yr family up to ~$300/yr |
| **Squirrel AI** | Ultra-granular knowledge mapping (10,000+ points) | China-origin, expanding globally |

### Takeaways for Dobeu
1. **The hybrid coach-connect model is the right market** — but it's crowded and enterprise-led. A booking-form + testimonials site competes more with solo-coach SaaS (Delenta, Coachello SMB) than with BetterUp.
2. **Differentiation is required, not optional.** Roleplay and "24/7 AI companion" are now baseline. Lean into a niche (e.g., a specific vertical, your design-system-driven brand experience, or AI tutoring for a defined subject) rather than competing head-on on breadth.
3. **Pricing anchor:** AI-only individual coaching clusters at **$10–50/user/mo**; that's the band a standalone Dobeu product would be benchmarked against.

---

### Sources
- [12 Best AI Coaching Platforms (Boon)](https://www.boon-health.com/learn/resources/best-ai-coaching-platforms)
- [Best AI Coaching Platforms 2026 (Risely)](https://risely.me/compare/best-ai-coaching-platforms/)
- [Rocky.ai](https://www.rocky.ai/)
- [Coachello — Human + AI](https://coachello.ai/)
- [AI Career Coach Global Market Report 2026 (GlobeNewswire)](https://www.globenewswire.com/news-release/2026/04/27/3281439/28124/en/ai-career-coach-global-market-report-2026-revenue-expected-to-reach-6-69b-in-2026-ai-driven-learning-fuels-exponential-growth.html)
- [Best AI Tutoring Tools 2026 (Awesome Agents)](https://awesomeagents.ai/tools/best-ai-tutoring-tools-2026/)
- [Synthesis Tutor vs Khanmigo](https://www.aitoolsforkids.com/blog/synthesis-tutor-vs-khanmigo-ai-math-tutor-comparison)
- [What AI Tutoring Actually Costs in 2026 (ibl.ai)](https://ibl.ai/blog/what-ai-tutoring-actually-costs-2026)
