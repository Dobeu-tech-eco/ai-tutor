export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-6xl px-6 pb-12 pt-16 text-center md:pt-24"
    >
      <span className="inline-block rounded-full bg-indigo-50 px-4 py-1 text-sm font-bold text-indigo-700">
        Hybrid AI + human coaching
      </span>
      <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-ink md:text-6xl">
        Grow every day with a coach in your corner.
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-lg text-ink/70">
        Practice with a 24/7 AI coach, then book time with a real Dobeu coach
        when it counts. Goals, reflection, and one clear next step — every time.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a href="#demo" className="ds-btn-primary">
          Try the AI coach
        </a>
        <a href="#book" className="ds-btn-accent">
          Book a human coach
        </a>
      </div>
    </section>
  );
}
