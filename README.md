# Dobeu AI Tutor / Coach Connect

Official repository for the **dobeu.info** AI coaching platform — a hybrid AI + human
coaching experience. Practice with a 24/7 streaming AI coach, then book time with a
real coach. Built on the Dobeu Design System v3 (Nunito, indigo/amber).

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with DS v3 tokens
- **Anthropic SDK** — streaming AI coach (Edge runtime)
- **Resend** — booking email notifications
- **Zod** — request validation · **Vitest** — unit tests

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in your keys
npm run dev                  # http://localhost:3000
```

### Required environment variables

See [`.env.example`](./.env.example). At minimum:

- `ANTHROPIC_API_KEY` — powers the AI coach.
- `RESEND_API_KEY`, `BOOKING_FROM_EMAIL`, `BOOKING_TO_EMAIL` — power the booking form.

The app degrades gracefully: if a key is missing, the relevant endpoint returns a
clean `503` instead of crashing.

## Routes

| Path | Runtime | Purpose |
|------|---------|---------|
| `/` | — | Landing page (hero, live coach demo, testimonials, booking) |
| `POST /api/edge-coach-stream` | edge | Streaming AI coach — see [its README](./app/api/edge-coach-stream/README.md) |
| `POST /api/booking` | node | Validates and emails a coaching request via Resend |

## Scripts

```bash
npm run dev        # local dev server
npm run build      # production build
npm run typecheck  # tsc --noEmit
npm run test       # vitest unit tests
npm run lint       # next lint
```

## Deploy

Deploys to **Vercel**. Set the environment variables above in the Vercel project
settings. The coach endpoint uses the Edge runtime; the booking endpoint uses Node.

## Notes

- AI coaching is not a substitute for professional medical, legal, or mental-health care.
- The booking form includes a honeypot field for basic bot protection.
- `*.fig` design source files are git-ignored — keep them in design storage, not the repo.
