import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#autoridade", label: "Mariana" },
  { href: "#academy", label: "Academy" },
  { href: "#oferta", label: "Investimento" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-[var(--ink)]/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        <a href="#" aria-label="IAplicada" className="flex items-center text-white">
          <Logo className="h-6 sm:h-7 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#oferta" className="btn-primary !px-5 !py-2.5 !text-sm">
            Entrar na Academy
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/[0.08] bg-[var(--ink)]/95 backdrop-blur-xl px-4 py-5 sm:px-6">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#oferta"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 w-full"
            >
              Entrar na Academy
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
