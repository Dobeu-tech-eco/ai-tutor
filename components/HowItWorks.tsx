const STEPS = [
  {
    n: "1",
    title: "Tell me what you want AI to do",
    body: "Request a session and describe your business and the work that eats your time. I'll come prepared with a plan tailored to your tools and goals.",
  },
  {
    n: "2",
    title: "We set it up together, live",
    body: "A hands-on 1-on-1 working session on your actual stack — choosing the right AI tools, connecting your apps, and building your first automations while you watch and learn.",
  },
  {
    n: "3",
    title: "You leave with AI that works",
    body: "Real automations running in your business, a playbook you understand, and the confidence to keep building. Follow-up sessions available whenever you want to go further.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center text-3xl font-extrabold text-ink">
        How it works
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {STEPS.map((s) => (
          <div key={s.n} className="ds-card text-left">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-lg font-extrabold text-white">
              {s.n}
            </span>
            <h3 className="mt-4 text-xl font-extrabold text-ink">{s.title}</h3>
            <p className="mt-2 text-ink/70">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
