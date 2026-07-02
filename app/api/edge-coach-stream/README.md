# POST `/api/edge-coach-stream`

Streaming AI coach backed by Anthropic (Claude), running on the Vercel **Edge** runtime.

## Request

```json
{ "prompt": "I keep procrastinating on a big goal.", "sessionId": "optional" }
```

- `prompt` — required, 1–4000 chars.
- `sessionId` — optional, ≤128 chars.

## Response

`Content-Type: text/event-stream`. Server-Sent Events; each event is a JSON delta,
terminated by a `[DONE]` sentinel:

```
data: {"text":"Let's start small. "}

data: {"text":"What is one step you could take today?"}

data: [DONE]
```

On a handled failure a single `data: {"error":"..."}` frame is sent.

## Status codes

| Code | Meaning |
|------|---------|
| 200  | Streaming response |
| 400  | Body is not JSON, or fails validation |
| 503  | `ANTHROPIC_API_KEY` not configured |

## Env

- `ANTHROPIC_API_KEY` (required)
- `ANTHROPIC_MODEL` (optional, defaults to a current Claude model)
