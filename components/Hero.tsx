export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-6xl px-6 pb-12 pt-16 text-center md:pt-24"
    >
      <span className="inline-block rounded-full bg-indigo-50 px-4 py-1 text-sm font-bold text-indigo-700">
        1-on-1 AI coaching for real businesses
      </span>
      <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-ink md:text-6xl">
        Learn to put AI to work — with an expert in your corner.
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-lg text-ink/70">
        Personalized, hands-on coaching on setting up AI for your business —
        the right tools, real automations, and workflows that stick. No hype,
        no jargon: we build it together on your actual stack.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a href="#book" className="ds-btn-primary">
          Book a 1-on-1 session
        </a>
        <a href="#how" className="ds-btn-accent">
          See how it works
        </a>
      </div>
    </section>
  );
}
