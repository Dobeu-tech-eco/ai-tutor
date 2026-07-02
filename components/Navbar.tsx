export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-indigo-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-xl font-extrabold text-indigo-700">
          Dobeu<span className="text-amber-500">.</span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-bold text-ink/70 md:flex">
          <a href="#how" className="hover:text-indigo-700">
            How it works
          </a>
          <a href="#who" className="hover:text-indigo-700">
            Who it&apos;s for
          </a>
          <a href="#book" className="hover:text-indigo-700">
            Book
          </a>
        </div>
        <a href="#book" className="ds-btn-primary text-sm">
          Book a session
        </a>
      </nav>
    </header>
  );
}
