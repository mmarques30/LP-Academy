import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#metodo", label: "Método" },
  { href: "#academy", label: "Academy" },
  { href: "#fundadora", label: "Fundadora" },
  { href: "#investimento", label: "Investimento" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--cocoa)]/8 bg-[var(--cream)]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-2.5 text-[var(--cocoa)]" aria-label="IAplicada">
          <Logo className="h-7 w-auto" />
          <span className="hidden text-[13px] font-medium text-[var(--cocoa-soft)] sm:inline">
            /Academy
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-[var(--cocoa-soft)] transition-colors hover:text-[var(--cocoa)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#investimento"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-dark)] px-5 py-2.5 text-[13px] font-medium text-white transition-all hover:bg-[#5C6F1D]"
          >
            Entrar pro Academy
          </a>
        </div>

        <button
          className="text-[var(--cocoa)] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--cocoa)]/10 bg-[var(--cream)] px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-xl text-[var(--cocoa)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#investimento"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-[var(--brand-dark)] px-6 py-3.5 text-sm font-medium text-white"
            >
              Entrar pro Academy
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
