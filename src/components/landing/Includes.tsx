import { motion } from "framer-motion";
import {
  GraduationCap,
  CalendarClock,
  MessagesSquare,
  Wrench,
  FileText,
  Users2,
  Bot,
  PlayCircle,
} from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "18 trilhas estruturadas",
    desc: "Do zero ao avançado, organizadas por objetivo. Novas trilhas entram toda quinzena.",
  },
  {
    icon: CalendarClock,
    title: "Aulas ao vivo toda segunda",
    desc: "19h30, com convidados de mercado aplicando IA em casos reais. Fica gravado se você faltar.",
  },
  {
    icon: MessagesSquare,
    title: "Q&A semanal às quartas",
    desc: "Espaço de dúvida, destrave e implementação direto com a Mari. Sem fila, sem enrolação.",
  },
  {
    icon: Bot,
    title: "MarIAna 24/7",
    desc: "Agente IA treinado com toda a expertise da Mari pra te destravar na madrugada ou no meio do dia.",
  },
  {
    icon: FileText,
    title: "+100 prompts testados",
    desc: "Biblioteca viva de prompts que funcionam, por função e setor. Copia, adapta, aplica.",
  },
  {
    icon: Wrench,
    title: "+50 ferramentas catalogadas",
    desc: "Avaliadas, testadas e organizadas por caso de uso. Chega de testar 30 pra descobrir qual serve.",
  },
  {
    icon: Users2,
    title: "Comunidade Aplicados",
    desc: "Grupo exclusivo com +2.000 membros pra trocar cases, tirar dúvida e implementar em conjunto.",
  },
  {
    icon: PlayCircle,
    title: "Biblioteca de mentores",
    desc: "Gravações de aulas com convidados de referência. Consulta quando precisar.",
  },
];

export function Includes() {
  return (
    <section id="conteudo" className="section-pad bg-[var(--offwhite)]">
      <div className="container-narrow px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">O que vem dentro</span>
          <h2 className="mt-5 h-section">
            Uma plataforma viva. <span className="text-gradient-brand">Não um curso gravado.</span>
          </h2>
          <p className="mt-5 lede">
            Toda semana algo novo acontece: aula, Q&amp;A, trilha, prompt, ferramenta, case. Você entra
            e não fica parado esperando — entra num sistema que se move com o mercado.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 1, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className="group h-full rounded-3xl border border-[var(--border)] bg-[var(--cream)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--brand-dark)]/40 hover:shadow-[0_30px_60px_-40px_rgba(44,20,2,0.3)]"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand)]/20 ring-1 ring-[var(--brand-dark)]/20">
                <it.icon className="h-5 w-5 text-[var(--brand-dark)]" />
              </div>
              <h3 className="font-display text-lg font-extrabold text-[var(--cocoa)]">{it.title}</h3>
              <p className="mt-2 text-sm text-[var(--cocoa-soft)] leading-relaxed">{it.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
