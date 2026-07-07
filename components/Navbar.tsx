"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Monitor, ArrowRight, Menu, X } from "lucide-react";

type Theme = "dark" | "light" | "system";

const NAV_LINKS = [
  { label: "How it works", href: "#how" },
  { label: "Who it's for", href: "#who" },
  { label: "Why it works", href: "#why" },
];

const THEMES: { value: Theme; label: string; Icon: React.FC<{ className?: string }> }[] = [
  { value: "light",  label: "Light",  Icon: Sun },
  { value: "dark",   label: "Dark",   Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
];

function DobeuMark({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-20 -12 520 520"
      aria-label="dobeu symbol"
      style={{ display: "block" }}
    >
      <defs>
        <mask id="nm-a">
          <rect x="-50" y="-50" width="620" height="620" fill="#fff" />
          <circle cx="315" cy="235" r="78" fill="#000" />
        </mask>
        <mask id="nm-c1">
          <rect x="-50" y="-50" width="620" height="620" fill="#fff" />
          <circle cx="175" cy="248" r="122" fill="#000" />
        </mask>
        <mask id="nm-c1a">
          <rect x="-50" y="-50" width="620" height="620" fill="#fff" />
          <circle cx="175" cy="248" r="122" fill="#000" />
          <circle cx="315" cy="235" r="78" fill="#000" />
        </mask>
      </defs>
      <circle cx="322" cy="258" r="105" fill="#4A3FA8" mask="url(#nm-c1a)" />
      <circle cx="175" cy="248" r="122" fill="#6B5CE7" mask="url(#nm-a)" />
      <circle cx="315" cy="235" r="78"  fill="#F4A261" mask="url(#nm-c1)" />
    </svg>
  );
}

export default function Navbar() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Persist + apply theme */
  useEffect(() => {
    try {
      const saved = localStorage.getItem("dobeu-theme") as Theme | null;
      if (saved) setTheme(saved);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    let resolved: string = theme;
    if (theme === "system") {
      resolved = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    root.setAttribute("data-mode", resolved);
    try {
      localStorage.setItem("dobeu-theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* 4px amber accent bar */}
      <div aria-hidden="true" style={{ height: 4, background: "var(--brand-amber-warm)" }} />

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "0 clamp(18px,5vw,80px)",
          background: "color-mix(in srgb, var(--bg-primary) 72%, transparent)",
          backdropFilter: "blur(20px) saturate(1.6)",
          WebkitBackdropFilter: "blur(20px) saturate(1.6)",
          borderBottom: scrolled
            ? "1px solid var(--border-default)"
            : "1px solid transparent",
          boxShadow: scrolled ? "var(--shadow-sm)" : "none",
          transition: "box-shadow 0.2s, border-color 0.2s",
        }}
      >
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-[11px] flex-none no-underline"
          aria-label="Dobeu home"
        >
          <DobeuMark size={34} />
          <span
            style={{
              font: "800 22px/1 var(--font-sans,Nunito,sans-serif)",
              letterSpacing: "-0.01em",
            }}
          >
            <span style={{ color: "var(--brand-indigo-slate)" }}>dobeu</span>
            <span style={{ color: "var(--brand-amber-warm)" }}>.tech</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <nav
          className="hidden md:flex items-center"
          style={{ gap: "clamp(16px,2.6vw,30px)" }}
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((n) => (
            <a
              key={n.href}
              href={n.href}
              style={{
                font: "700 14px var(--font-sans,Nunito,sans-serif)",
                color: "var(--fg-body)",
                paddingBottom: 3,
                borderBottom: "2px solid transparent",
                transition: "color 0.15s, border-color 0.15s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--brand-indigo-primary)";
                (e.currentTarget as HTMLAnchorElement).style.borderBottomColor =
                  "var(--brand-amber-warm)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--fg-body)";
                (e.currentTarget as HTMLAnchorElement).style.borderBottomColor =
                  "transparent";
              }}
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-3 flex-none">
          {/* Theme segmented control */}
          <div
            role="group"
            aria-label="Theme"
            className="hidden sm:flex items-center gap-0.5 p-[3px] rounded-pill border"
            style={{
              background: "var(--bg-tint-indigo)",
              borderColor: "var(--border-default)",
            }}
          >
            {THEMES.map(({ value, label, Icon }) => {
              const active = theme === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => setTheme(value)}
                  aria-label={`${label} theme`}
                  title={label}
                  className="inline-flex items-center justify-center w-[30px] h-[28px] rounded-pill cursor-pointer border-none transition-all"
                  style={{
                    background: active ? "var(--bg-primary)" : "transparent",
                    color: active
                      ? "var(--brand-indigo-primary)"
                      : "var(--fg-muted)",
                    boxShadow: active ? "var(--shadow-xs)" : "none",
                  }}
                >
                  <Icon className="w-4 h-4" />
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <a
            href="#book"
            className="hidden sm:inline-flex items-center gap-2 ds-btn-primary"
            style={{ fontSize: 14 }}
          >
            Book a session <ArrowRight className="w-4 h-4" />
          </a>

          {/* Mobile burger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border cursor-pointer"
            style={{
              background: "var(--bg-secondary)",
              borderColor: "var(--border-default)",
              color: "var(--fg-heading)",
            }}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "sticky",
            top: 68,
            zIndex: 49,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            padding: "14px clamp(18px,5vw,80px) 18px",
            background: "var(--bg-primary)",
            borderBottom: "1px solid var(--border-default)",
            boxShadow: "var(--shadow-md)",
          }}
          role="navigation"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={closeMobile}
              style={{
                font: "700 16px var(--font-sans,Nunito,sans-serif)",
                color: "var(--fg-heading)",
                padding: "12px 4px",
                borderBottom: "1px solid var(--border-subtle)",
                textDecoration: "none",
                display: "block",
              }}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={closeMobile}
            className="mt-2.5 text-center ds-btn-primary"
            style={{ font: "700 16px/1 var(--font-sans,Nunito,sans-serif)", padding: "14px" }}
          >
            Book a 1-on-1 session
          </a>
        </div>
      )}
    </>
  );
}
