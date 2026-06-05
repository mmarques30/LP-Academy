import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/landing/Logo";

/**
 * Header da LP /comunidade — light theme igual ao Header da LP /,
 * com botão CTA "Quero entrar grátis" à direita que faz scroll
 * suave pro form do hero (#cadastro).
 *
 * Opção B do briefing: form fica no hero (não inline no header),
 * mas o botão do header serve como atalho permanente — sempre
 * visível em qualquer scroll, garante que a pessoa nunca fica
 * sem CTA visível.
 */
export function HeaderComunidade() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToCadastro(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
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

        <a
          href="#cadastro"
          onClick={scrollToCadastro}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-dark)] px-4 py-2 text-[12px] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(115,137,37,0.5)] transition-all hover:bg-[#5C6F1D] sm:px-5 sm:py-2.5 sm:text-[13px]"
        >
          Quero entrar grátis
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}
