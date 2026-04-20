import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="section-pad bg-[var(--cocoa)] text-[var(--offwhite)]">
      <div className="container-narrow px-6">
        <motion.div
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow-dark">
            <CalendarDays className="h-3.5 w-3.5" />
            Próxima aula ao vivo · segunda, 19h30
          </span>
          <h2 className="mt-6 h-hero !text-[var(--offwhite)]">
            Na próxima segunda,
            <br />
            <span className="text-gradient-brand">você pode estar aplicando.</span>
          </h2>
          <p className="mt-6 text-lg text-[var(--offwhite)]/75">
            Ou começar mais uma semana repetindo tarefa que IA já faz sozinha há dois anos.
            <br className="hidden md:block" />
            A escolha é de um botão.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3">
            <a href="#oferta" className="btn-primary-xl">
              Entrar pro Academy agora
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="text-sm text-[var(--offwhite)]/60">
              R$ 147/mês · Sem fidelidade · 7 dias de garantia · Suporte humano
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
