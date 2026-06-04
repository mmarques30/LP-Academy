import { useEffect, useState } from "react";
import { Logo } from "@/components/landing/Logo";

/**
 * Header minimal da LP /comunidade — só o logo, sem menu nem CTA.
 * Mesma identidade visual do Header da LP / (cream/cocoa light theme),
 * só que sem nav e sem botão "Entrar pro Academy" — o form já tá no
 * próprio hero, não precisa apontar pra ele.
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
      </div>
    </header>
  );
}
