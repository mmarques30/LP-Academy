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
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border)] bg-[#0E1308]/95 px-4 py-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-widest text-[var(--muted-foreground)]">
            Academy
          </p>
          <p className="truncate font-display text-base font-extrabold text-[var(--offwhite)]">
            <span className="text-[var(--muted-foreground)] line-through mr-1.5 text-sm font-normal">
              R$ 297
            </span>
            R$ 147
            <span className="ml-1 text-sm font-normal text-[var(--sage)]">/mês</span>
          </p>
        </div>
        <a
          href="#oferta"
          className="btn-primary shrink-0 !px-4 !py-3 !text-sm"
        >
          Aplicar <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
