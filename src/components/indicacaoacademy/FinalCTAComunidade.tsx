import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import { trackEvent, EVENTS } from "@/lib/analytics";

/**
 * CTA final — segue o mesmo padrão visual do FinalCTA da LP / (seção
 * dark com radial gradient brand). Botão faz scroll suave de volta
 * pro form do hero (#cadastro).
 */
export function FinalCTAComunidade() {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    trackEvent(EVENTS.COMUNIDADE_FINAL_CTA_CLICK);
    const form = document.getElementById("cadastro");
    if (form) {
      e.preventDefault();
      form.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        document.getElementById("comunidade-firstname")?.focus();
      }, 700);
    }
  }

  return (
    <section className="bg-section-dark relative overflow-hidden px-6 pt-28 pb-36 text-[var(--offwhite)] md:pt-36 md:pb-48">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(80% 60% at 50% 0%, color-mix(in oklab, var(--brand) 18%, transparent) 0%, transparent 60%)",
        }}
      />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="eyebrow-dark justify-center">
            <CalendarDays className="h-3.5 w-3.5" />
            Próxima aula
          </span>

          <h2 className="mt-8 h-display text-[var(--offwhite)]">
            Na próxima aula,
            <br />
            <span className="serif-italic text-[var(--brand)]">
              você pode estar lá.
            </span>
          </h2>

          <p className="mx-auto mt-9 max-w-2xl text-[17px] leading-[1.55] text-[var(--offwhite)]/70 md:text-[19px]">
            Ou seguir esperando o momento certo pra "começar a aprender IA".
          </p>

          <div className="mt-12 flex flex-col items-center gap-4">
            <a
              href="#cadastro"
              onClick={handleClick}
              className="inline-flex items-center gap-2.5 rounded-full bg-[var(--brand)] px-9 py-4 text-base font-medium text-[var(--cocoa)] shadow-[0_30px_80px_-20px_rgba(175,192,64,0.5)] transition-all hover:scale-[1.02] hover:bg-[var(--brand-bright)]"
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
