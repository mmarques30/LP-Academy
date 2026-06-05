import { motion } from "framer-motion";
import { CalendarDays, LayoutDashboard, MessageCircle, Newspaper } from "lucide-react";
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
      "Toda primeira quarta do mês, 19h30, ao vivo no YouTube + comunidade. Tema prático com aplicação direta no trabalho. Fica gravada na plataforma gratuita pra rever depois.",
  },
  {
    icon: LayoutDashboard,
    title: "Acesso à plataforma gratuita",
    detail:
      "Login permanente em plataforma.iaplicada.com — mini-trilhas introdutórias, prompts testados por categoria e nosso catálogo das ferramentas que valem a pena conhecer. Tudo organizado, sem custo.",
  },
  {
    icon: MessageCircle,
    title: "Comunidade no WhatsApp",
    detail:
      "Grupo de +700 Aplicados. Dicas, prompt da semana, ferramenta que vale testar, troca entre membros. Você sai quando quiser.",
  },
  {
    icon: Newspaper,
    title: "Newsletter quinzenal",
    detail:
      "Leitura de 4 minutos pra começar a quinzena já com IA do seu lado. Panorama, casos práticos, nada de hype.",
  },
];

export function OQueVoceRecebe() {
  return (
    <section id="comunidade" className="section-pad bg-[var(--cream)]">
      <div className="container-wide px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mono-label text-[var(--brand-dark)]">
            Tudo isso, sem pagar nada
          </span>
          <h2 className="mt-5 h-section text-[var(--cocoa)]">
            A comunidade gratuita{" "}
            <span className="serif-italic text-[var(--brand-dark)]">
              não é uma versão "demo".
            </span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-[17px] leading-[1.55] text-[var(--cocoa-soft)] md:text-[19px]">
            É um caminho próprio de quem quer começar.
          </p>
        </motion.div>

        <ul className="mt-16 grid gap-5 md:grid-cols-2 md:gap-6">
          {features.map((f, idx) => (
            <motion.li
              key={f.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="relative rounded-[24px] border border-[var(--cocoa)]/10 bg-[var(--offwhite)] p-7 shadow-[0_20px_60px_-30px_rgba(13,13,13,0.12)] md:p-8"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand)]/15 text-[var(--brand-dark)]">
                <f.icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <h3 className="mt-5 font-display text-2xl text-[var(--cocoa)]">
                {f.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.55] text-[var(--cocoa-soft)]">
                {f.detail}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
