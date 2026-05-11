import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-[var(--cocoa)]/10 bg-[var(--cream)]/95 px-4 py-3 backdrop-blur-xl transition-transform duration-500 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="mono-label text-[var(--cocoa-soft)]">Academy</p>
          <p className="mt-0.5 truncate font-display text-lg text-[var(--cocoa)]">
            A partir de R$ 146<span className="text-sm text-[var(--cocoa-soft)]">/mês</span>
            <span className="ml-2 text-[11px] text-[var(--cocoa-soft)]">· 7 dias de garantia</span>
          </p>
        </div>
        <a
          href="#investimento"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--cocoa)] px-5 py-3 text-sm font-medium text-[var(--offwhite)]"
        >
          Entrar <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
