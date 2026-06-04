import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Você se cadastra",
    detail: "Email, nome e WhatsApp. 40 segundos. Sem cartão, sem assinatura.",
  },
  {
    num: "02",
    title: "Recebe acesso imediato",
    detail:
      "Já no próximo email, o link da comunidade no WhatsApp + login da plataforma gratuita.",
  },
  {
    num: "03",
    title: "Aplica no seu trabalho",
    detail:
      "Toda semana tem dica. Todo mês tem aula. Você usa o quanto fizer sentido pra você.",
  },
];

export function ComoFunciona() {
  return (
    <section className="section-pad bg-[var(--offwhite)]">
      <div className="container-wide px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-dark)]">
            <Sparkles className="h-3 w-3" />
            Como funciona
          </p>
          <h2 className="mt-7 h-section text-[var(--cocoa)]">
            Em{" "}
            <span className="serif-italic text-[var(--brand-dark)]">
              3 passos.
            </span>
          </h2>
        </motion.div>

        <ol className="mt-16 grid gap-5 md:grid-cols-3 md:gap-6">
          {steps.map((s, idx) => (
            <motion.li
              key={s.num}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="relative flex flex-col rounded-[24px] border border-[var(--cocoa)]/10 bg-[var(--cream)] p-7 md:p-8"
            >
              <span className="font-display text-[3.5rem] leading-[0.9] text-[var(--brand-dark)]/70">
                {s.num}
              </span>
              <h3 className="mt-5 font-display text-xl text-[var(--cocoa)]">
                {s.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.55] text-[var(--cocoa-soft)]">
                {s.detail}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
