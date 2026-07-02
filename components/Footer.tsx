export default function Footer() {
  return (
    <footer className="border-t border-indigo-100 bg-indigo-50/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-ink/60 md:flex-row">
        <p>© {new Date().getFullYear()} Dobeu Tech Solutions. Built with Design System v3.</p>
        <p>Personalized 1-on-1 coaching on putting AI to work in your business.</p>
      </div>
    </footer>
  );
}
