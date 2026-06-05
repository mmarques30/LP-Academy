import { motion } from "framer-motion";
import { CalendarDays, LayoutDashboard, MessageCircle, Newspaper } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
}

const features: Feature[] = [
  {
    icon: CalendarDays,
    title: "Aula ao vivo mensal",
    desc: "Toda primeira quarta do mês, 19h30, ao vivo no YouTube + comunidade. Tema prático com aplicação direta no trabalho. Fica gravada na plataforma gratuita pra rever depois.",
    tag: "1ª quarta · 19h30",
  },
  {
    icon: LayoutDashboard,
    title: "Acesso à plataforma gratuita",
    desc: "Login permanente em plataforma.iaplicada.com — mini-trilhas introdutórias, prompts testados por categoria e nosso catálogo das ferramentas que valem a pena conhecer.",
    tag: "dentro da plataforma",
  },
  {
    icon: MessageCircle,
    title: "Comunidade no WhatsApp",
    desc: "Grupo de +700 Aplicados. Dicas, prompt da semana, ferramenta que vale testar, troca entre membros. Você sai quando quiser.",
    tag: "grupo · ao vivo",
  },
  {
    icon: Newspaper,
    title: "Newsletter quinzenal",
    desc: "Leitura de 4 minutos pra começar a quinzena já com IA do seu lado. Panorama, casos práticos, nada de hype.",
    tag: "quinzenal · email",
  },
];

/**
 * Cards do que tem na comunidade — replicam o mesmo padrão visual dos
 * pilares do Includes.tsx (LP /):
 *  - Grid com gap-px + bg cocoa/10 = divisores finos entre cards
 *  - Cada card é só bg-offwhite sem rounded individual (o rounded é
 *    do container externo)
 *  - Ícone em círculo cocoa escuro com brand color
 *  - Tag em mono-label no canto direito superior
 *  - Title em font-display, desc em texto cocoa-soft
 */
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

        {/* Grid de cards no padrão dos pilares do Includes — divisores
            finos entre cards, ícone em círculo escuro, tag à direita */}
        <div className="mt-16 grid gap-px rounded-[24px] border border-[var(--cocoa)]/10 bg-[var(--cocoa)]/10 md:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
              className="group relative flex flex-col gap-5 bg-[var(--offwhite)] p-8 md:p-10"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--cocoa)] text-[var(--brand)]">
                  <f.icon className="h-5 w-5" />
                </div>
                <span className="mono-label text-[var(--cocoa-soft)]">
                  {f.tag}
                </span>
              </div>
              <div>
                <p className="font-display text-2xl text-[var(--cocoa)] md:text-[26px]">
                  {f.title}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--cocoa-soft)]">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
