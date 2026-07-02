const AUDIENCES = [
  {
    title: "Founders & solopreneurs",
    body: "You wear every hat. We set up AI assistants and automations that handle the repetitive work — drafting, research, follow-ups — so you can focus on building.",
  },
  {
    title: "Small business owners",
    body: "From quotes and invoices to customer replies and scheduling, we connect AI to the tools you already use so your operation runs smoother without new headcount.",
  },
  {
    title: "Busy professionals",
    body: "Learn a practical, personal AI workflow — the tools worth your time, how to prompt well, and how to automate your own week. Skills you keep forever.",
  },
];

export default function WhoItsFor() {
  return (
    <section id="who" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center text-3xl font-extrabold text-ink">
        Who it&apos;s for
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-ink/70">
        If AI feels like something you should be using but haven&apos;t figured
        out how — this is for you.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {AUDIENCES.map((a) => (
          <div key={a.title} className="ds-card">
            <h3 className="text-xl font-extrabold text-indigo-700">
              {a.title}
            </h3>
            <p className="mt-2 text-ink/70">{a.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
