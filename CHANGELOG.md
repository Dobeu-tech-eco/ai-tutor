# Changelog

All notable changes to the Dobeu AI Coaching site are documented here.

## [1.0.1] — 2026-07-15

### Security
- Upgrade Next.js 14.2.5 → 14.2.35, resolving 2 critical and 7 high advisories
  (RSC cache poisoning, CSP-nonce XSS, image-optimization DoS, SSRF via WebSocket
  upgrades, and i18n middleware bypass). `eslint-config-next` bumped to match.
- Add a Content-Security-Policy header alongside the existing HSTS, X-Frame-Options,
  X-Content-Type-Options, Referrer-Policy, and Permissions-Policy headers.
- Booking API: enforce the per-IP rate limit before parsing the request body, and
  return a `Retry-After` header on 429 responses.
- Strip control characters from the user-supplied name before it reaches the email
  subject line.

### Added
- Themed `not-found` (404) and `error` boundary pages matching the Dobeu design system.

### Notes
- Verified before release: `lint`, `typecheck`, 10/10 unit tests, and `next build` all pass.
