import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";

export function FinalCTA() {
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
            Próxima aula · segunda, 19h30
          </span>

          <h2 className="mt-8 h-display text-[var(--offwhite)]">
            Na próxima segunda,
            <br />
            <span className="serif-italic text-[var(--brand)]">você pode estar aplicando.</span>
          </h2>

          <p className="mx-auto mt-9 max-w-2xl text-[17px] leading-[1.55] text-[var(--offwhite)]/70 md:text-[19px]">
            Ou começar mais uma semana repetindo tarefa que IA já faz sozinha
            <em className="serif-italic"> há dois anos.</em> A escolha é de um botão.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4">
            <a
              href="#investimento"
              className="inline-flex items-center gap-2.5 rounded-full bg-[var(--brand)] px-9 py-4 text-base font-medium text-[var(--cocoa)] shadow-[0_30px_80px_-20px_rgba(175,192,64,0.5)] transition-all hover:scale-[1.02] hover:bg-[var(--brand-bright)]"
            >
              Entrar pro Academy agora
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="text-[13px] text-[var(--offwhite)]/55">
              A partir de R$ 146/mês · 7 dias de garantia · Suporte humano · Pix ou cartão
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
