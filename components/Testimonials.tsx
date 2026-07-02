const TESTIMONIALS = [
  {
    quote:
      "The AI coach kept me accountable between sessions. Small steps, every day — it added up fast.",
    name: "Maya R.",
    role: "Product Manager",
  },
  {
    quote:
      "I practiced a tough conversation with the AI, then refined it with my Dobeu coach. Went in calm.",
    name: "Daniel K.",
    role: "Engineering Lead",
  },
  {
    quote:
      "Booking was effortless and the reflection prompts genuinely shifted how I plan my week.",
    name: "Priya S.",
    role: "Founder",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center text-3xl font-extrabold text-ink">
        People grow with Dobeu
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="ds-card">
            <blockquote className="text-ink/80">“{t.quote}”</blockquote>
            <figcaption className="mt-4 font-bold text-indigo-700">
              {t.name}
              <span className="block text-sm font-normal text-ink/50">
                {t.role}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
