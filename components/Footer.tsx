export default function Footer() {
  return (
    <footer className="border-t border-indigo-100 bg-indigo-50/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-ink/60 md:flex-row">
        <p>© {new Date().getFullYear()} Dobeu. Built with Design System v3.</p>
        <p>
          AI coaching is not a substitute for professional medical, legal, or
          mental-health care.
        </p>
      </div>
    </footer>
  );
}
