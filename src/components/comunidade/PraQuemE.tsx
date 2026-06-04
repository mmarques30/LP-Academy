import { motion } from "framer-motion";
import { Briefcase, Compass, Sparkles, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Persona {
  icon: LucideIcon;
  title: string;
  detail: string;
}

const personas: Persona[] = [
  {
    icon: Compass,
    title: "Quer começar do zero",
    detail:
      "Você ouve falar de IA todo dia, sente que está ficando pra trás, mas não sabe por onde começar. A comunidade gratuita é seu ponto de entrada.",
  },
  {
    icon: Wrench,
    title: "Já testou ChatGPT mas não foi adiante",
    detail:
      "Você abriu, fez umas perguntas, achou legal e parou aí. A comunidade te mostra como ir além sem afogar em curso longo.",
  },
  {
    icon: Briefcase,
    title: "Quer aplicar no trabalho atual",
    detail:
      "Você não quer virar dev, não quer mudar de carreira. Quer só usar IA pra ganhar tempo na rotina que já tem. A comunidade é prática, no contexto do trabalho.",
  },
];

export function PraQuemE() {
  return (
    <section className="relative overflow-hidden bg-[#141A0B] py-24 text-[var(--offwhite)] md:py-32">
      <div className="container-wide px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
            <Sparkles className="h-3 w-3" />
            Pra você que
          </p>
          <h2 className="mt-7 font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.1] tracking-tight text-[var(--offwhite)]">
            Está aqui por <span className="text-[#BDD64A]">algum desses motivos.</span>
          </h2>
        </motion.div>

        <ul className="mt-16 grid gap-5 md:grid-cols-3 md:gap-6">
          {personas.map((p, idx) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="relative flex flex-col rounded-[24px] border border-[var(--offwhite)]/10 bg-[var(--offwhite)]/[0.03] p-7 md:p-8"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand)]/15 text-[var(--brand)]">
                <p.icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <h3 className="mt-5 font-display text-xl text-[var(--offwhite)]">
                {p.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.55] text-[var(--offwhite)]/70">
                {p.detail}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
