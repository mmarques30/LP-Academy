import { motion } from "framer-motion";
import { CalendarDays, MessageCircle, Newspaper, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  detail: string;
}

const features: Feature[] = [
  {
    icon: CalendarDays,
    title: "Aula ao vivo mensal",
    detail:
      "Uma vez por mês, ao vivo no YouTube + comunidade. Tema prático, com aplicação no trabalho real. Fica gravada na plataforma gratuita pra quem não puder no horário.",
  },
  {
    icon: Sparkles,
    title: "Plataforma gratuita aberta",
    detail:
      "Acesso permanente à nossa plataforma com mini-trilhas introdutórias, prompts testados por categoria e nosso catálogo das ferramentas que valem a pena conhecer.",
  },
  {
    icon: MessageCircle,
    title: "Comunidade no WhatsApp",
    detail:
      "Grupo gigante de Aplicados. Dicas semanais, prompts da semana, ferramenta que vale testar, troca entre membros. Você sai quando quiser.",
  },
  {
    icon: Newspaper,
    title: "Newsletter de domingo",
    detail:
      "Resumo da semana, panorama de IA aplicada, leitura de 4 minutos pra começar a segunda já com IA do seu lado.",
  },
];

export function OQueVoceRecebe() {
  return (
    <section className="relative overflow-hidden bg-[#141A0B] py-24 text-[var(--offwhite)] md:py-32">
      <div className="container-wide px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
            <Sparkles className="h-3 w-3" />
            Tudo isso, sem pagar nada
          </p>
          <h2 className="mt-7 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] tracking-tight text-[var(--offwhite)]">
            A comunidade gratuita não é uma versão{" "}
            <span className="text-[#BDD64A]">"demo".</span>
            <br />
            É um caminho próprio de quem quer começar.
          </h2>
        </motion.div>

        <ul className="mt-16 grid gap-5 md:grid-cols-2 md:gap-6">
          {features.map((f, idx) => (
            <motion.li
              key={f.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="relative rounded-[24px] border border-[var(--offwhite)]/10 bg-[var(--offwhite)]/[0.03] p-7 md:p-8"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand)]/15 text-[var(--brand)]">
                <f.icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <h3 className="mt-5 font-display text-2xl text-[var(--offwhite)]">
                {f.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.55] text-[var(--offwhite)]/70">
                {f.detail}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
