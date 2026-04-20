import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/8 bg-black/95 px-4 py-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.14em] text-white/50">
            Academy
          </p>
          <p className="font-display text-base font-bold text-white">
            R$ 147<span className="text-sm font-normal text-white/60">/mês</span>
          </p>
        </div>
        <a href="#oferta" className="btn-primary shrink-0 !px-5 !py-3 !text-sm">
          Entrar <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
