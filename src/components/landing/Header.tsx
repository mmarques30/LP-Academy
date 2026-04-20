import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#metodo", label: "Método" },
  { href: "#conteudo", label: "O que tem dentro" },
  { href: "#oferta", label: "Investimento" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--cream)]/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight text-[var(--cocoa)]">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand)] text-[var(--cocoa)] font-black">
            IA
          </span>
          <span>plicada</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--cocoa-soft)] transition-colors hover:text-[var(--cocoa)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#oferta" className="btn-primary !py-2.5 !px-5 !text-sm">
            Entrar na Academy
          </a>
        </div>

        <button
          className="md:hidden text-[var(--cocoa)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--cream)] px-6 py-4">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-[var(--cocoa)]"
              >
                {l.label}
              </a>
            ))}
            <a href="#oferta" onClick={() => setOpen(false)} className="btn-primary">
              Entrar na Academy
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
