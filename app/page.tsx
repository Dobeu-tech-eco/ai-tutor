import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhoItsFor from "@/components/WhoItsFor";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhoItsFor />

        {/* ── Booking section ── */}
        <section
          id="book"
          style={{
            background: "var(--bg-secondary)",
            borderTop: "1px solid var(--border-default)",
            padding: "clamp(56px,9vw,104px) clamp(20px,5vw,80px)",
          }}
          aria-labelledby="book-heading"
        >
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
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
                Book
              </span>
              <h2
                id="book-heading"
                style={{
                  margin: "12px 0 0",
                  font: "800 clamp(26px,4vw,40px)/1.12 var(--font-sans,Nunito,sans-serif)",
                  letterSpacing: "-0.02em",
                  color: "var(--fg-heading)",
                }}
              >
                Book a 1-on-1 session.
              </h2>
              <p
                style={{
                  margin: "12px auto 0",
                  font: "400 clamp(15px,1.8vw,18px)/1.6 var(--font-sans,Nunito,sans-serif)",
                  color: "var(--fg-body)",
                  maxWidth: "44ch",
                }}
              >
                Tell us a little about your work. We&apos;ll reply within a day
                with a time.
              </p>
            </div>
            <BookingForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
