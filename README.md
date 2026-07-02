# Dobeu AI Coaching — 1-on-1 help setting up AI

Official repository for **dobeu.tech** — personalized, hands-on 1-on-1 coaching on
putting AI to work in your business: choosing the right tools, building real
automations, and learning workflows that stick. Built on the Dobeu Design System v3
(Nunito, indigo/amber).

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with DS v3 tokens
- **Resend** — booking email notifications
- **Zod** — request validation · **Vitest** — unit tests

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in your keys
npm run dev                  # http://localhost:3000
```

### Required environment variables

See [`.env.example`](./.env.example):

- `RESEND_API_KEY`, `BOOKING_FROM_EMAIL`, `BOOKING_TO_EMAIL` — power the booking form.
- `KV_REST_API_URL`, `KV_REST_API_TOKEN` — optional Upstash rate limiting (fails open without).

The app degrades gracefully: if a key is missing, the booking endpoint returns a
clean `503` instead of crashing.

## Routes

| Path | Runtime | Purpose |
|------|---------|---------|
| `/` | — | Landing page (hero, how it works, who it's for, booking) |
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

Deploys to **Vercel** (project `ai-tutor`, domain **dobeu.tech**). Set the environment
variables above in the Vercel project settings.

## Notes

- The booking form includes a honeypot field and per-IP rate limiting for bot protection.
- `*.fig` design source files are git-ignored — keep them in design storage, not the repo.
