import {
  XCircle,
  CheckCircle2,
  X,
  Check,
  MessageSquare,
  Cpu,
  Zap,
  GraduationCap,
  PenLine,
  FileText,
  Globe,
  Mail,
  BarChart2,
  Terminal,
  Wrench,
} from "lucide-react";

/* ─── Comparison section ─── */
const WRONG_WAY = [
  "Start with a blank chatbox and no context about your work",
  "Copy-paste prompt packs that weren't written for your situation",
  "Spend weeks tinkering and still not sure if it's helping",
  "Generic advice that doesn't fit your actual tools or workflow",
];
const RIGHT_WAY = [
  "We learn how you work first, then build the setup around that",
  "Prompts, automations, and connections written for your real stack",
  "Leave session one with AI already running in your business",
  "Ongoing coaching — go further whenever you want to",
];

/* ─── How it works steps ─── */
const STEPS = [
  {
    n: "1",
    icon: MessageSquare,
    title: "Tell me what you want AI to do",
    body: "Request a session and describe your business and the work that eats your time. I'll come prepared with a plan tailored to your tools and goals.",
  },
  {
    n: "2",
    icon: Cpu,
    title: "We set it up together, live",
    body: "A hands-on 1-on-1 working session on your actual stack — choosing the right AI tools, connecting your apps, and building your first automations while you watch and learn.",
  },
  {
    n: "3",
    icon: Zap,
    title: "You leave with AI that works",
    body: "Real automations running in your business, a playbook you understand, and the confidence to keep building. Follow-up sessions available whenever you want to go further.",
  },
];

/* ─── AI tools marquee ─── */
const TOOLS_ROW_1 = [
  { name: "Claude",      mono: "Cl",  color: "#CC785C", fs: 15 },
  { name: "ChatGPT",     mono: "GP",  color: "#19C37D", fs: 13 },
  { name: "Grok",        mono: "Gk",  color: "#1DA1F2", fs: 15 },
  { name: "Perplexity",  mono: "Px",  color: "#20B2AA", fs: 13 },
  { name: "Gemini",      mono: "Gm",  color: "#4285F4", fs: 14 },
  { name: "Cursor",      mono: "Cu",  color: "#6B5CE7", fs: 15 },
  { name: "Notion AI",   mono: "No",  color: "#2D2D3A", fs: 14 },
  { name: "Zapier",      mono: "Za",  color: "#FF4A00", fs: 14 },
  { name: "Make",        mono: "Mk",  color: "#7B61FF", fs: 14 },
  { name: "n8n",         mono: "n8",  color: "#EA4B71", fs: 13 },
  { name: "Midjourney",  mono: "Mj",  color: "#0F0F1F", fs: 14 },
  { name: "Whisper",     mono: "Wh",  color: "#11A37F", fs: 13 },
];
const TOOLS_ROW_2 = [
  { name: "v0",          mono: "v0",  color: "#000000", fs: 14 },
  { name: "Bolt",        mono: "Bl",  color: "#F4A261", fs: 15 },
  { name: "Lovable",     mono: "Lv",  color: "#E74C3C", fs: 14 },
  { name: "Windsurf",    mono: "Ws",  color: "#0099CC", fs: 13 },
  { name: "Replit AI",   mono: "Re",  color: "#F26207", fs: 13 },
  { name: "Copilot",     mono: "Co",  color: "#2563EB", fs: 13 },
  { name: "Otter.ai",    mono: "Ot",  color: "#463BCC", fs: 13 },
  { name: "ElevenLabs",  mono: "EL",  color: "#1A1A2E", fs: 13 },
  { name: "Suno",        mono: "Su",  color: "#7B2D8B", fs: 14 },
  { name: "Runway",      mono: "Rw",  color: "#000000", fs: 14 },
  { name: "Phind",       mono: "Ph",  color: "#3B82F6", fs: 14 },
  { name: "You.com",     mono: "Yu",  color: "#4A3FA8", fs: 14 },
];

/* ─── What we cover ─── */
const CAPABILITIES = [
  {
    icon: PenLine,
    title: "Prompting & workflows",
    body: "Write prompts that actually get the output you need, and turn repeatable tasks into one-click workflows.",
  },
  {
    icon: FileText,
    title: "Docs, drafts & research",
    body: "Emails, proposals, reports, SOPs — let AI handle the first draft and the heavy reading while you keep the judgment.",
  },
  {
    icon: Globe,
    title: "Automation & integrations",
    body: "Connect AI to the apps you already use — CRMs, spreadsheets, calendars, and more — via Zapier, Make, or n8n.",
  },
  {
    icon: Mail,
    title: "Customer comms",
    body: "Replies, follow-ups, outreach sequences — trained on your tone, ready to send or review.",
  },
  {
    icon: BarChart2,
    title: "Data & reporting",
    body: "Summarize data, spot trends, and turn raw numbers into plain-English insights you can act on.",
  },
  {
    icon: GraduationCap,
    title: "Learning & upskilling",
    body: "Learn to use the right tools for your role — and walk away with skills you keep forever.",
  },
];

/* ─── Claude Code cards ─── */
const CLAUDE_CODE_FEATURES = [
  { icon: Terminal, term: "CLAUDE.md",        desc: "Your project context wired in — Claude reads your rules and conventions before it writes a single line." },
  { icon: Wrench,   term: "Skills",            desc: "Custom reusable patterns for your codebase that run on demand, like your own private commands." },
  { icon: Cpu,      term: "Hooks",             desc: "Pre/post tool hooks that automate checks, format on save, and enforce standards automatically." },
  { icon: Globe,    term: "Connectors",        desc: "Docs, Notion pages, Jira tickets — pulled straight into context so Claude knows the full picture." },
  { icon: Zap,      term: "Sub-agents",        desc: "Parallel agents working on different parts of the task, orchestrated and merged cleanly." },
  { icon: FileText, term: "Context windows",   desc: "Learn to manage context like a pro: what to keep, what to prune, when to compact." },
];

/* ─── Tool pill component ─── */
function ToolPill({ name, mono, color, fs }: { name: string; mono: string; color: string; fs: number }) {
  return (
    <div
      style={{
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        gap: 11,
        background: "var(--bg-secondary)",
        border: "1px solid var(--border-default)",
        borderRadius: 16,
        padding: "11px 18px 11px 12px",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" style={{ flexShrink: 0 }}>
        <rect width="40" height="40" rx="12" fill={color} />
        <text
          x="20"
          y="26"
          textAnchor="middle"
          fontFamily="Nunito,sans-serif"
          fontWeight="800"
          fontSize={fs}
          fill="#fff"
        >
          {mono}
        </text>
      </svg>
      <span
        style={{
          font: "700 15px var(--font-sans,Nunito,sans-serif)",
          color: "var(--fg-heading)",
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </span>
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="ds-eyebrow"
      style={{ color: "var(--brand-amber-warm)" }}
    >
      {children}
    </span>
  );
}

export default function HowItWorks() {
  const toolsRow1Double = [...TOOLS_ROW_1, ...TOOLS_ROW_1];
  const toolsRow2Double = [...TOOLS_ROW_2, ...TOOLS_ROW_2];

  return (
    <>
      {/* ══ COMPARISON ══ */}
      <section
        id="why"
        style={{
          background: "var(--bg-secondary)",
          borderTop: "1px solid var(--border-default)",
          padding: "clamp(56px,9vw,104px) clamp(20px,5vw,80px)",
        }}
        aria-labelledby="why-heading"
      >
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "40ch", margin: "0 auto" }}>
            <SectionEyebrow>Why it works</SectionEyebrow>
            <h2
              id="why-heading"
              style={{
                margin: "12px 0 0",
                font: "800 clamp(26px,4vw,40px)/1.12 var(--font-sans,Nunito,sans-serif)",
                letterSpacing: "-0.02em",
                color: "var(--fg-heading)",
              }}
            >
              One-size-fits-all is the wrong way to learn AI.
            </h2>
            <p
              style={{
                margin: "14px auto 0",
                font: "400 clamp(15px,1.8vw,18px)/1.6 var(--font-sans,Nunito,sans-serif)",
                color: "var(--fg-body)",
                maxWidth: "50ch",
              }}
            >
              A blank chatbot or a generic template can&apos;t know your work. A
              setup built around you does — and that difference is the whole point.
            </p>
          </div>

          <div
            style={{
              marginTop: 44,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: 20,
              alignItems: "stretch",
            }}
          >
            {/* Wrong */}
            <div
              style={{
                background: "var(--bg-primary)",
                border: "1px solid var(--border-default)",
                borderRadius: 20,
                padding: 28,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  color: "var(--semantic-error,#E07A5F)",
                  font: "800 13px/1 var(--font-sans,Nunito,sans-serif)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                <XCircle aria-hidden="true" style={{ width: 18, height: 18 }} />
                The one-size-fits-all way
              </div>
              <ul
                style={{
                  listStyle: "none",
                  margin: "20px 0 0",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {WRONG_WAY.map((w) => (
                  <li
                    key={w}
                    style={{
                      display: "flex",
                      gap: 11,
                      font: "400 clamp(15px,1.7vw,16px)/1.5 var(--font-sans,Nunito,sans-serif)",
                      color: "var(--fg-body)",
                    }}
                  >
                    <X
                      aria-hidden="true"
                      style={{
                        width: 18,
                        height: 18,
                        color: "var(--semantic-error,#E07A5F)",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div
              style={{
                background: "var(--bg-primary)",
                border: "1px solid var(--brand-indigo-primary)",
                borderRadius: 20,
                padding: 28,
                boxShadow: "var(--shadow-md)",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: -11,
                  left: 28,
                  background: "var(--brand-indigo-primary)",
                  color: "#fff",
                  font: "800 11px/1 var(--font-sans,Nunito,sans-serif)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "6px 11px",
                  borderRadius: "var(--radius-pill)",
                }}
              >
                The dobeu way
              </span>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  color: "var(--brand-indigo-primary)",
                  font: "800 13px/1 var(--font-sans,Nunito,sans-serif)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                <CheckCircle2 aria-hidden="true" style={{ width: 18, height: 18 }} />
                Your 1-on-1 setup
              </div>
              <ul
                style={{
                  listStyle: "none",
                  margin: "20px 0 0",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {RIGHT_WAY.map((r) => (
                  <li
                    key={r}
                    style={{
                      display: "flex",
                      gap: 11,
                      font: "600 clamp(15px,1.7vw,16px)/1.5 var(--font-sans,Nunito,sans-serif)",
                      color: "var(--fg-heading)",
                    }}
                  >
                    <Check
                      aria-hidden="true"
                      style={{
                        width: 18,
                        height: 18,
                        color: "var(--semantic-success,#4CAF50)",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ AI TOOLS MARQUEE ══ */}
      <section
        style={{
          background: "var(--bg-primary)",
          padding: "clamp(48px,7vw,84px) 0",
          overflow: "hidden",
        }}
        aria-label="AI tools we use"
      >
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(20px,5vw,80px)" }}>
          <div style={{ textAlign: "center", maxWidth: "42ch", margin: "0 auto 40px" }}>
            <SectionEyebrow>The toolkit</SectionEyebrow>
            <h2
              style={{
                margin: "12px 0 0",
                font: "800 clamp(26px,4vw,40px)/1.12 var(--font-sans,Nunito,sans-serif)",
                letterSpacing: "-0.02em",
                color: "var(--fg-heading)",
              }}
            >
              We set up the tools — and teach you to drive them.
            </h2>
            <p
              style={{
                margin: "14px auto 0",
                font: "400 clamp(15px,1.8vw,18px)/1.6 var(--font-sans,Nunito,sans-serif)",
                color: "var(--fg-body)",
                maxWidth: "52ch",
              }}
            >
              Claude, ChatGPT, Grok, Perplexity and more — picked for your work,
              not by fashion. You leave knowing which to reach for, and when.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Row 1 — scrolls left */}
          <div className="marquee-mask">
            <div
              className="marquee-left"
              style={{ display: "flex", gap: 14, width: "max-content" }}
            >
              {toolsRow1Double.map((t, i) => (
                <ToolPill key={`r1-${i}`} {...t} />
              ))}
            </div>
          </div>
          {/* Row 2 — scrolls right */}
          <div className="marquee-mask">
            <div
              className="marquee-right"
              style={{ display: "flex", gap: 14, width: "max-content" }}
            >
              {toolsRow2Double.map((t, i) => (
                <ToolPill key={`r2-${i}`} {...t} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS STEPS ══ */}
      <section
        id="how"
        style={{
          background: "var(--bg-primary)",
          borderTop: "1px solid var(--border-default)",
          padding: "clamp(56px,9vw,104px) clamp(20px,5vw,80px)",
        }}
        aria-labelledby="how-heading"
      >
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "34ch", margin: "0 auto" }}>
            <SectionEyebrow>How it works</SectionEyebrow>
            <h2
              id="how-heading"
              style={{
                margin: "12px 0 0",
                font: "800 clamp(26px,4vw,40px)/1.12 var(--font-sans,Nunito,sans-serif)",
                letterSpacing: "-0.02em",
                color: "var(--fg-heading)",
              }}
            >
              Three steps. One session. Real AI running.
            </h2>
          </div>

          <div
            style={{
              marginTop: 44,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 20,
            }}
          >
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="lift"
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-default)",
                  borderRadius: 20,
                  padding: 28,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "var(--brand-indigo-primary)",
                      color: "#fff",
                      font: "800 18px/1 var(--font-sans,Nunito,sans-serif)",
                      flexShrink: 0,
                    }}
                  >
                    {s.n}
                  </span>
                  <s.icon
                    aria-hidden="true"
                    style={{ width: 22, height: 22, color: "var(--brand-amber-warm)" }}
                  />
                </div>
                <h3
                  style={{
                    marginTop: 18,
                    font: "700 clamp(18px,2.2vw,22px)/1.25 var(--font-sans,Nunito,sans-serif)",
                    color: "var(--fg-heading)",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    font: "400 clamp(15px,1.7vw,16px)/1.55 var(--font-sans,Nunito,sans-serif)",
                    color: "var(--fg-body)",
                  }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHAT WE COVER ══ */}
      <section
        style={{
          background: "var(--bg-primary)",
          padding: "clamp(56px,9vw,104px) clamp(20px,5vw,80px)",
          borderTop: "1px solid var(--border-subtle,rgba(224,223,245,0.08))",
        }}
        aria-labelledby="cover-heading"
      >
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "34ch", margin: "0 auto" }}>
            <SectionEyebrow>What we cover</SectionEyebrow>
            <h2
              id="cover-heading"
              style={{
                margin: "12px 0 0",
                font: "800 clamp(26px,4vw,40px)/1.12 var(--font-sans,Nunito,sans-serif)",
                letterSpacing: "-0.02em",
                color: "var(--fg-heading)",
              }}
            >
              Real work, handled — from prompts to&nbsp;Office.
            </h2>
          </div>
          <div
            style={{
              marginTop: 44,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(258px,1fr))",
              gap: 20,
            }}
          >
            {CAPABILITIES.map((c) => (
              <div
                key={c.title}
                className="lift"
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-default)",
                  borderRadius: 20,
                  padding: 28,
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "var(--bg-tint-amber)",
                    color: "var(--brand-amber-warm)",
                  }}
                >
                  <c.icon aria-hidden="true" style={{ width: 25, height: 25 }} />
                </span>
                <h3
                  style={{
                    marginTop: 18,
                    font: "700 clamp(18px,2.1vw,21px)/1.25 var(--font-sans,Nunito,sans-serif)",
                    color: "var(--fg-heading)",
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    font: "400 clamp(15px,1.7vw,16px)/1.55 var(--font-sans,Nunito,sans-serif)",
                    color: "var(--fg-body)",
                  }}
                >
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CLAUDE CODE ══ */}
      <section
        style={{
          background: "var(--bg-primary)",
          padding: "clamp(20px,4vw,44px) clamp(20px,5vw,80px)",
        }}
        aria-labelledby="claude-heading"
      >
        <div
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            background: "#1A1A2E",
            borderRadius: 26,
            padding: "clamp(30px,5vw,56px)",
            boxShadow: "0 28px 64px rgba(26,26,46,0.32)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* amber top bar */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 4,
              background: "var(--brand-amber-warm)",
            }}
          />
          <div style={{ maxWidth: "56ch" }}>
            <span
              style={{
                font: "700 12px/1 var(--font-mono,JetBrains Mono,monospace)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#F4A261",
              }}
            >
              Claude Code
            </span>
            <h2
              id="claude-heading"
              style={{
                margin: "12px 0 0",
                font: "800 clamp(26px,4vw,40px)/1.12 var(--font-sans,Nunito,sans-serif)",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
              }}
            >
              Beyond chat — Claude Code, set up right.
            </h2>
            <p
              style={{
                margin: "14px 0 0",
                font: "400 clamp(15px,1.8vw,18px)/1.6 var(--font-sans,Nunito,sans-serif)",
                color: "#E0E0E0",
              }}
            >
              I set up Claude Code the way people who ship with it actually run
              it — skills, hooks, connectors and your own context wired in, so
              it works on your real projects.
            </p>
          </div>
          <div
            style={{
              marginTop: 30,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 14,
            }}
          >
            {CLAUDE_CODE_FEATURES.map((k) => (
              <div
                key={k.term}
                className="lift"
                style={{
                  background: "#242440",
                  border: "1px solid #2A2A45",
                  borderRadius: 14,
                  padding: "18px 18px 20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <k.icon aria-hidden="true" style={{ width: 19, height: 19, color: "#F4A261" }} />
                  <span
                    style={{
                      font: "700 13px/1 var(--font-mono,JetBrains Mono,monospace)",
                      letterSpacing: "0.02em",
                      color: "#FFFFFF",
                    }}
                  >
                    {k.term}
                  </span>
                </div>
                <p
                  style={{
                    margin: "9px 0 0",
                    font: "400 13px/1.5 var(--font-sans,Nunito,sans-serif)",
                    color: "#B8B8CC",
                  }}
                >
                  {k.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
