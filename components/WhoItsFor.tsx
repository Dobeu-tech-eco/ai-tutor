import {
  Briefcase,
  Store,
  Laptop,
  Clock,
  TrendingDown,
  Repeat,
} from "lucide-react";

const AUDIENCES = [
  {
    icon: Briefcase,
    title: "Founders & solopreneurs",
    body: "You wear every hat. We set up AI assistants and automations that handle the repetitive work — drafting, research, follow-ups — so you can focus on building.",
    win: "Get 5+ hours back every week",
  },
  {
    icon: Store,
    title: "Small business owners",
    body: "From quotes and invoices to customer replies and scheduling, we connect AI to the tools you already use so your operation runs smoother without new headcount.",
    win: "Automate your daily admin",
  },
  {
    icon: Laptop,
    title: "Busy professionals",
    body: "Learn a practical, personal AI workflow — the tools worth your time, how to prompt well, and how to automate your own week. Skills you keep forever.",
    win: "Leave with skills that compound",
  },
];

const VALUES = [
  {
    icon: Clock,
    title: "Hours saved every week",
    body: "Clients routinely reclaim 5–10 hours a week from drafting, research, and repetitive admin — from the very first session.",
  },
  {
    icon: TrendingDown,
    title: "Lower running costs",
    body: "Replacing SaaS subscriptions and manual hours with lean AI workflows cuts monthly overhead for most businesses within 30 days.",
  },
  {
    icon: Repeat,
    title: "Workflows that compound",
    body: "Unlike a one-off tool tip, a properly set-up workflow gets faster and more capable every time you use it and every time the models improve.",
  },
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "var(--brand-amber-warm)",
      }}
    >
      {children}
    </span>
  );
}

export default function WhoItsFor() {
  return (
    <>
      {/* ══ WHO IT'S FOR ══ */}
      <section
        id="who"
        style={{
          background: "var(--bg-secondary)",
          borderTop: "1px solid var(--border-default)",
          padding: "clamp(56px,9vw,104px) clamp(20px,5vw,80px)",
        }}
        aria-labelledby="who-heading"
      >
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "40ch", margin: "0 auto" }}>
            <SectionEyebrow>Who it&apos;s for</SectionEyebrow>
            <h2
              id="who-heading"
              style={{
                margin: "12px 0 0",
                font: "800 clamp(26px,4vw,40px)/1.12 var(--font-sans,Nunito,sans-serif)",
                letterSpacing: "-0.02em",
                color: "var(--fg-heading)",
              }}
            >
              If AI feels like homework, start here.
            </h2>
            <p
              style={{
                margin: "14px auto 0",
                font: "400 clamp(15px,1.8vw,18px)/1.6 var(--font-sans,Nunito,sans-serif)",
                color: "var(--fg-body)",
                maxWidth: "50ch",
              }}
            >
              You don&apos;t need to be technical. You just need an hour and
              the work you&apos;d love to hand off.
            </p>
          </div>

          <div
            style={{
              marginTop: 44,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 20,
            }}
          >
            {AUDIENCES.map((a) => (
              <div
                key={a.title}
                className="lift"
                style={{
                  background: "var(--bg-primary)",
                  border: "1px solid var(--border-default)",
                  borderRadius: 20,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "var(--bg-tint-indigo)",
                    color: "var(--brand-indigo-primary)",
                    flexShrink: 0,
                  }}
                >
                  <a.icon aria-hidden="true" style={{ width: 24, height: 24 }} />
                </span>
                <h3
                  style={{
                    marginTop: 18,
                    font: "700 clamp(18px,2.2vw,22px)/1.25 var(--font-sans,Nunito,sans-serif)",
                    color: "var(--fg-heading)",
                  }}
                >
                  {a.title}
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    font: "400 clamp(15px,1.7vw,16px)/1.55 var(--font-sans,Nunito,sans-serif)",
                    color: "var(--fg-body)",
                    flex: 1,
                  }}
                >
                  {a.body}
                </p>
                {/* Win line */}
                <div
                  style={{
                    marginTop: 18,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    background: "var(--bg-tint-amber)",
                    border: "1px solid var(--border-default)",
                    borderRadius: "var(--radius-pill)",
                    padding: "6px 12px",
                    font: "700 12px/1 var(--font-sans,Nunito,sans-serif)",
                    color: "var(--brand-amber-warm)",
                    letterSpacing: "0.01em",
                    alignSelf: "flex-start",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--brand-amber-warm)",
                      display: "inline-block",
                    }}
                  />
                  {a.win}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY IT PAYS ══ */}
      <section
        style={{
          background: "var(--bg-primary)",
          padding: "clamp(56px,9vw,104px) clamp(20px,5vw,80px)",
        }}
        aria-labelledby="pays-heading"
      >
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "32ch", margin: "0 auto" }}>
            <SectionEyebrow>The payoff</SectionEyebrow>
            <h2
              id="pays-heading"
              style={{
                margin: "12px 0 0",
                font: "800 clamp(26px,4vw,40px)/1.12 var(--font-sans,Nunito,sans-serif)",
                letterSpacing: "-0.02em",
                color: "var(--fg-heading)",
              }}
            >
              A proper setup pays dividends.
            </h2>
          </div>

          <div
            style={{
              marginTop: 44,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 20,
            }}
          >
            {VALUES.map((v) => (
              <div
                key={v.title}
                style={{
                  textAlign: "center",
                  padding: "12px 8px",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: "var(--bg-tint-amber)",
                    color: "var(--brand-amber-warm)",
                  }}
                >
                  <v.icon aria-hidden="true" style={{ width: 26, height: 26 }} />
                </span>
                <h3
                  style={{
                    marginTop: 16,
                    font: "700 clamp(18px,2.2vw,22px)/1.25 var(--font-sans,Nunito,sans-serif)",
                    color: "var(--fg-heading)",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    margin: "8px auto 0",
                    font: "400 clamp(15px,1.7vw,16px)/1.55 var(--font-sans,Nunito,sans-serif)",
                    color: "var(--fg-body)",
                    maxWidth: "34ch",
                  }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
