import { useEffect, useState } from "react";
import { Logo } from "@/components/landing/Logo";

/**
 * Header minimal da LP /comunidade — só o logo, sem menu nem CTA.
 * Diferente do Header da LP / que tem navegação completa, porque na
 * /comunidade o form fica no próprio hero (não precisa de menu pra
 * apontar pra ele).
 */
export function HeaderComunidade() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--offwhite)]/8 bg-[var(--ink)]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between px-6 py-4">
        <a
          href="/comunidade"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5 text-[var(--offwhite)]"
          aria-label="IAplicada — voltar ao topo"
        >
          <Logo className="h-7 w-auto" />
          <span className="hidden text-[13px] font-medium text-[var(--offwhite)]/60 sm:inline">
            /Comunidade
          </span>
        </a>
      </div>
    </header>
  );
}
