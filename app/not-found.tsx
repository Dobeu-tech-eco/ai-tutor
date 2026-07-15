import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        padding: "clamp(20px,5vw,80px)",
        background: "var(--bg-primary)",
        textAlign: "center",
      }}
    >
      <span
        style={{
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--brand-amber-warm)",
        }}
      >
        404
      </span>
      <h1
        style={{
          margin: 0,
          font: "800 clamp(28px,5vw,44px)/1.12 var(--font-sans,Nunito,sans-serif)",
          letterSpacing: "-0.02em",
          color: "var(--fg-heading)",
        }}
      >
        That page doesn&apos;t exist.
      </h1>
      <p
        style={{
          margin: 0,
          font: "400 clamp(15px,1.8vw,18px)/1.6 var(--font-sans,Nunito,sans-serif)",
          color: "var(--fg-body)",
          maxWidth: "44ch",
        }}
      >
        The link may be old or mistyped. Head back home and we&apos;ll get you
        where you need to go.
      </p>
      <Link
        href="/"
        className="ds-btn-primary"
        style={{
          font: "700 15px/1 var(--font-sans,Nunito,sans-serif)",
          padding: "13px 24px",
          marginTop: 8,
          display: "inline-flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        Back to home
      </Link>
    </main>
  );
}
