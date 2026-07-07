"use client";

const LINKS = {
  coaching: [
    { label: "How it works", href: "#how" },
    { label: "Who it's for", href: "#who" },
    { label: "Why it works", href: "#why" },
    { label: "Book a session", href: "#book" },
  ],
  dobeu: [
    { label: "dobeu.net",    href: "https://dobeu.net" },
    { label: "dobeu.dev",    href: "https://dobeu.dev" },
    { label: "dobeu.app",    href: "https://dobeu.app" },
  ],
  legal: [
    { label: "Privacy policy", href: "/privacy" },
    { label: "Terms of use",   href: "/terms" },
  ],
};

function DobeuMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-20 -12 520 520"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <defs>
        <mask id="ft-nm-a">
          <rect x="-50" y="-50" width="620" height="620" fill="#fff" />
          <circle cx="315" cy="235" r="78" fill="#000" />
        </mask>
        <mask id="ft-nm-c1">
          <rect x="-50" y="-50" width="620" height="620" fill="#fff" />
          <circle cx="175" cy="248" r="122" fill="#000" />
        </mask>
        <mask id="ft-nm-c1a">
          <rect x="-50" y="-50" width="620" height="620" fill="#fff" />
          <circle cx="175" cy="248" r="122" fill="#000" />
          <circle cx="315" cy="235" r="78" fill="#000" />
        </mask>
      </defs>
      <circle cx="322" cy="258" r="105" fill="#4A3FA8" mask="url(#ft-nm-c1a)" />
      <circle cx="175" cy="248" r="122" fill="#6B5CE7" mask="url(#ft-nm-a)" />
      <circle cx="315" cy="235" r="78"  fill="#F4A261" mask="url(#ft-nm-c1)" />
    </svg>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <p
        style={{
          font: "800 12px/1 var(--font-sans,Nunito,sans-serif)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--brand-amber-warm)",
          margin: 0,
        }}
      >
        {title}
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              style={{
                font: "600 14px/1 var(--font-sans,Nunito,sans-serif)",
                color: "var(--fg-body)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--brand-indigo-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--fg-body)";
              }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-default)",
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "clamp(40px,6vw,72px) clamp(20px,5vw,80px)",
        }}
      >
        {/* Top — brand + columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
            gap: "clamp(28px,4vw,48px)",
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <a
              href="#top"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
              }}
            >
              <DobeuMark size={28} />
              <span
                style={{
                  font: "800 18px/1 var(--font-sans,Nunito,sans-serif)",
                  letterSpacing: "-0.01em",
                }}
              >
                <span style={{ color: "var(--brand-indigo-slate)" }}>dobeu</span>
                <span style={{ color: "var(--brand-amber-warm)" }}>.tech</span>
              </span>
            </a>
            <p
              style={{
                font: "400 14px/1.55 var(--font-sans,Nunito,sans-serif)",
                color: "var(--fg-muted)",
                maxWidth: "26ch",
                margin: 0,
              }}
            >
              Personalized 1-on-1 AI coaching for real businesses.
            </p>
          </div>

          <FooterCol title="Coaching"    links={LINKS.coaching} />
          <FooterCol title="Dobeu"       links={LINKS.dobeu} />
          <FooterCol title="Legal"       links={LINKS.legal} />
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "clamp(32px,4vw,48px)",
            paddingTop: 20,
            borderTop: "1px solid var(--border-subtle,rgba(224,223,245,0.08))",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <p
            style={{
              font: "400 13px/1 var(--font-sans,Nunito,sans-serif)",
              color: "var(--fg-muted)",
              margin: 0,
            }}
          >
            &copy; {new Date().getFullYear()} Dobeu Tech Solutions LLC. All rights reserved.
          </p>
          <p
            style={{
              font: "400 13px/1 var(--font-sans,Nunito,sans-serif)",
              color: "var(--fg-muted)",
              margin: 0,
            }}
          >
            Built on the Dobeu Design System
          </p>
        </div>
      </div>
    </footer>
  );
}
