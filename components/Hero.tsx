import { ArrowRight, RotateCcw, Clock, TrendingDown, Repeat } from "lucide-react";

const DIVIDENDS = [
  { icon: Clock,        label: "Hours saved weekly" },
  { icon: TrendingDown, label: "Lower running costs" },
  { icon: Repeat,       label: "Workflows that stick" },
];

function DobeuHeroMark() {
  return (
    <div
      className="anim-pop-0"
      style={{ position: "relative", width: 140, height: 140, display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {/* Outer orbit ring — amber dot */}
      <div
        aria-hidden="true"
        className="anim-orbit-1"
        style={{ position: "absolute", inset: 0 }}
      >
        <span
          style={{
            position: "absolute",
            top: -2,
            left: "50%",
            width: 12,
            height: 12,
            marginLeft: -6,
            borderRadius: "50%",
            background: "var(--brand-amber-warm)",
            boxShadow: "0 0 12px var(--brand-amber-warm)",
          }}
        />
      </div>
      {/* Inner orbit ring — indigo dot */}
      <div
        aria-hidden="true"
        className="anim-orbit-2"
        style={{ position: "absolute", inset: 14 }}
      >
        <span
          style={{
            position: "absolute",
            bottom: -1,
            left: "50%",
            width: 8,
            height: 8,
            marginLeft: -4,
            borderRadius: "50%",
            background: "var(--brand-indigo-primary)",
            opacity: 0.7,
          }}
        />
      </div>
      {/* Logo with drift */}
      <div className="anim-drift">
        <svg
          width="118"
          height="118"
          viewBox="-20 -12 520 520"
          aria-label="dobeu symbol"
          style={{
            display: "block",
            filter: "drop-shadow(0 18px 44px rgba(107,92,231,0.30))",
          }}
        >
          <defs>
            <mask id="hm-a">
              <rect x="-50" y="-50" width="620" height="620" fill="#fff" />
              <circle cx="315" cy="235" r="78" fill="#000" />
            </mask>
            <mask id="hm-c1">
              <rect x="-50" y="-50" width="620" height="620" fill="#fff" />
              <circle cx="175" cy="248" r="122" fill="#000" />
            </mask>
            <mask id="hm-c1a">
              <rect x="-50" y="-50" width="620" height="620" fill="#fff" />
              <circle cx="175" cy="248" r="122" fill="#000" />
              <circle cx="315" cy="235" r="78" fill="#000" />
            </mask>
          </defs>
          <circle
            cx="322" cy="258" r="105"
            fill="#4A3FA8"
            mask="url(#hm-c1a)"
            className="anim-pop-2"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
          <circle
            cx="175" cy="248" r="122"
            fill="#6B5CE7"
            mask="url(#hm-a)"
            className="anim-pop-1"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
          <circle
            cx="315" cy="235" r="78"
            fill="#F4A261"
            mask="url(#hm-c1)"
            className="anim-pop-3"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        </svg>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "calc(100vh - 68px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "clamp(40px,7vh,86px) clamp(20px,5vw,80px) clamp(52px,8vh,96px)",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow blobs */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Animated mark */}
        <DobeuHeroMark />

        {/* Badge */}
        <div
          className="anim-rise-1"
          style={{
            marginTop: 26,
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            background: "var(--bg-tint-amber)",
            border: "1px solid var(--border-default)",
            color: "var(--fg-heading)",
            font: "800 12px/1 var(--font-sans,Nunito,sans-serif)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "8px 14px",
            borderRadius: "var(--radius-pill)",
          }}
        >
          <span
            className="anim-pulse"
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--brand-amber-warm)",
              display: "inline-block",
            }}
          />
          1-on-1 AI coaching &middot; no experience needed
        </div>

        {/* H1 */}
        <h1
          className="anim-rise-2"
          style={{
            margin: "22px 0 0",
            font: "800 clamp(34px,6.2vw,68px)/1.05 var(--font-sans,Nunito,sans-serif)",
            letterSpacing: "-0.025em",
            color: "var(--fg-heading)",
            maxWidth: "15ch",
          }}
        >
          Personalized 1-on-1 AI&nbsp;coaching.
        </h1>

        {/* Strikethrough lines */}
        <p
          style={{
            margin: "18px 0 0",
            font: "800 clamp(19px,3vw,32px)/1.25 var(--font-sans,Nunito,sans-serif)",
            letterSpacing: "-0.01em",
            maxWidth: "22ch",
          }}
        >
          <span
            className="anim-rise-3"
            style={{
              color: "var(--fg-muted)",
              textDecoration: "line-through",
              textDecorationColor: "var(--semantic-error,#E07A5F)",
              textDecorationThickness: 2,
            }}
          >
            Not a template.{" "}
          </span>
          <span
            className="anim-rise-4"
            style={{
              color: "var(--fg-muted)",
              textDecoration: "line-through",
              textDecorationColor: "var(--semantic-error,#E07A5F)",
              textDecorationThickness: 2,
            }}
          >
            Not one-size-fits-all.{" "}
          </span>
          <span
            className="anim-rise-5"
            style={{ color: "var(--brand-indigo-primary)" }}
          >
            Built around you.
          </span>
        </p>

        {/* Body copy */}
        <p
          className="anim-rise-6"
          style={{
            margin: "24px 0 0",
            font: "400 clamp(15px,1.9vw,19px)/1.6 var(--font-sans,Nunito,sans-serif)",
            color: "var(--fg-body)",
            maxWidth: "56ch",
          }}
        >
          One-size-fits-all is the wrong way to approach AI. Sit down with an
          expert, one on one, and set it up properly on the tools you already
          use — it pays dividends: results built around you, and lower costs
          that compound over time.
        </p>

        {/* Dividend pills */}
        <div
          className="anim-rise-7"
          style={{
            marginTop: 24,
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
          }}
        >
          {DIVIDENDS.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="lift"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-default)",
                borderRadius: "var(--radius-pill)",
                padding: "9px 16px",
                font: "700 14px var(--font-sans,Nunito,sans-serif)",
                color: "var(--fg-heading)",
                boxShadow: "var(--shadow-xs)",
              }}
            >
              <Icon
                aria-hidden="true"
                style={{ width: 17, height: 17, color: "var(--brand-amber-warm)", flexShrink: 0 }}
              />
              {label}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          className="anim-rise-8"
          style={{
            marginTop: 32,
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href="#book"
            className="lift ds-btn-primary"
            style={{ font: "700 16px/1 var(--font-sans,Nunito,sans-serif)", padding: "15px 26px" }}
          >
            Book a 1-on-1 session <ArrowRight aria-hidden="true" style={{ width: 18, height: 18 }} />
          </a>
          <a
            href="#how"
            className="ds-btn-ghost"
            style={{ font: "700 16px/1 var(--font-sans,Nunito,sans-serif)", padding: "15px 22px" }}
          >
            <RotateCcw aria-hidden="true" style={{ width: 17, height: 17 }} /> See how it works
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: "absolute",
          bottom: 22,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          color: "var(--fg-muted)",
        }}
      >
        <span
          style={{
            font: "700 11px var(--font-sans,Nunito,sans-serif)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          See how
        </span>
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="anim-drift"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
