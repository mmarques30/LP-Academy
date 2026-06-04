import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { trackEvent, EVENTS } from "@/lib/analytics";

export function FinalCTAComunidade() {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    trackEvent(EVENTS.COMUNIDADE_FINAL_CTA_CLICK);
    // Scroll suave pro form do hero
    const form = document.getElementById("cadastro");
    if (form) {
      e.preventDefault();
      form.scrollIntoView({ behavior: "smooth", block: "center" });
      // Foca o primeiro input do form depois do scroll (~700ms)
      setTimeout(() => {
        document.getElementById("comunidade-firstname")?.focus();
      }, 700);
    }
  }

  return (
    <section
      className="relative overflow-hidden py-24 text-[var(--offwhite)] md:py-32"
      style={{ background: "linear-gradient(180deg, #141A0B 0%, #0E1308 100%)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--brand) 16%, transparent) 0%, transparent 60%)",
        }}
      />

      <div className="container-wide relative px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
            <Sparkles className="h-3 w-3" />
            Próxima aula
          </p>

          <h2 className="mt-7 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-[var(--offwhite)]">
            Na próxima aula,
            <br />
            <span className="text-[#BDD64A]">você pode estar lá.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-[16px] leading-[1.55] text-[#D4DEB3] md:text-[18px]">
            Ou seguir esperando o momento certo pra "começar a aprender IA".
          </p>

          <div className="mt-12 flex flex-col items-center gap-4">
            <a
              href="#cadastro"
              onClick={handleClick}
              className="inline-flex items-center gap-2.5 rounded-full bg-[var(--brand)] px-9 py-4 text-base font-semibold text-[var(--ink)] shadow-[0_30px_80px_-20px_rgba(175,192,64,0.55)] transition-all hover:scale-[1.02] hover:bg-[var(--brand-bright)]"
            >
              Quero entrar gratuitamente
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="text-[13px] text-[var(--offwhite)]/55">
              Cadastro em menos de 1 minuto · 100% gratuito · Sem cartão
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
