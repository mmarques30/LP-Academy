import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/landing/Logo";

/**
 * Header da LP /comunidade — segue o MESMO padrão do Header da LP /:
 *  - Logo à esquerda
 *  - Menu de navegação no centro/direita com âncoras pras dobras
 *  - Botão CTA "Quero entrar grátis →" à direita (scroll suave pro form)
 *  - Mobile: hambúrguer expansível com mesmo conteúdo
 *
 * Os hrefs apontam pras IDs das seções da LP — quando a Mari adicionar
 * ou reorganizar dobras, basta atualizar essa lista.
 */

interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: "#comunidade", label: "O que tem" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#fundadora", label: "Fundadora" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "Dúvidas" },
];

export function HeaderComunidade() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click no botão CTA — scroll suave pro form do hero + foco automático
  // no primeiro input. Também é usado pelo botão CTA do menu mobile.
  function scrollToCadastro(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setOpen(false);
    const form = document.getElementById("cadastro");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        document.getElementById("comunidade-firstname")?.focus();
      }, 700);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--cocoa)]/8 bg-[var(--cream)]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between px-6 py-5">
        <a
          href="/comunidade"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5 text-[var(--cocoa)]"
          aria-label="IAplicada — voltar ao topo"
        >
          <Logo className="h-7 w-auto" />
          <span className="hidden text-[13px] font-medium text-[var(--cocoa-soft)] sm:inline">
            /Comunidade
          </span>
        </a>

        {/* Nav desktop */}
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

        {/* CTA desktop */}
        <div className="hidden lg:flex">
          <a
            href="#cadastro"
            onClick={scrollToCadastro}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-dark)] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(115,137,37,0.5)] transition-all hover:bg-[#5C6F1D]"
          >
            Quero entrar grátis
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Hambúrguer mobile */}
        <button
          type="button"
          className="text-[var(--cocoa)] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menu mobile expansível */}
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
              href="#cadastro"
              onClick={scrollToCadastro}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-dark)] px-6 py-3.5 text-sm font-semibold text-white"
            >
              Quero entrar grátis
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
