import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { href: "#curriculo", label: "Currículo" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-[var(--border)] bg-[#141A0B]/90 backdrop-blur-md"
          : "border-transparent bg-[#141A0B]"
      }`}
    >
      <div className="container-narrow flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight">
          <Sparkles className="h-5 w-5 text-[var(--brand)]" aria-hidden />
          <span>
            IA<span className="text-[var(--brand-bright)]">plicada</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--sage)] transition-colors hover:text-[var(--brand-bright)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#oferta" className="btn-primary !py-2.5 !text-sm">
            Aplicar agora
          </a>
        </div>

        <button
          className="md:hidden text-[var(--offwhite)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[#141A0B] px-6 py-4">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[var(--sage)]"
              >
                {l.label}
              </a>
            ))}
            <a href="#oferta" onClick={() => setOpen(false)} className="btn-primary">
              Aplicar agora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
