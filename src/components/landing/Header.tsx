import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#historia", label: "História" },
  { href: "#depoimentos", label: "Resultados" },
  { href: "#oferta", label: "Oferta" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "border-b border-white/8 bg-black/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center">
          <img src="/logo-iaplicada.svg" alt="IAplicada" className="h-7 w-auto md:h-8" />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#oferta" className="btn-primary !px-5 !py-2.5 !text-sm">
            Quero entrar
          </a>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/8 bg-black/95 px-6 py-4">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-white/80"
              >
                {l.label}
              </a>
            ))}
            <a href="#oferta" onClick={() => setOpen(false)} className="btn-primary">
              Quero entrar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
