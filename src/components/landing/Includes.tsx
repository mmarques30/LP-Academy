import { motion } from "framer-motion";
import { Calendar, Users, Sparkles, Library } from "lucide-react";

const pillars = [
  {
    icon: Calendar,
    title: "Aula ao vivo, toda segunda",
    desc: "Uma aplicação nova por semana — do diagnóstico ao workflow rodando.",
    tag: "19h30 · ao vivo",
  },
  {
    icon: Users,
    title: "Mentoria em grupo, toda quarta",
    desc: "Você joga seu caso, a gente destrava. Saia com 2-3 implementações prontas.",
    tag: "Q&A ao vivo",
  },
  {
    icon: Sparkles,
    title: "MarIAna · 24/7",
    desc: "A agente IA treinada no método APLICA. Disponível quando você precisa.",
    tag: "dentro da plataforma",
  },
  {
    icon: Library,
    title: "18 trilhas + conteúdo novo quinzenal",
    desc: "Prompts, templates e workflows testados em Claude, Zapier e Manus. Sem código.",
    tag: "acesso total",
  },
];

const showcase = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    cap: "Comunidade que aplica junto",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    cap: "Mentoria semanal ao vivo",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    cap: "Workflows rodando sozinhos",
  },
];

export function Includes() {
  return (
    <section id="academy" className="section-pad bg-[var(--offwhite)]">
      <div className="container-wide px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">03 — O Academy</span>
            <h2 className="mt-7 h-section text-[var(--cocoa)]">
              Um sistema, não
              <br />
              <span className="serif-italic text-[var(--brand-dark)]">mais um curso.</span>
            </h2>
          </div>
          <p className="max-w-md text-[16px] leading-relaxed text-[var(--cocoa-soft)]">
            Tudo que você precisa pra sair do "eu uso ChatGPT de vez em quando" pra
            <em className="serif-italic">"eu aplico IA no meu trabalho toda semana"</em>.
          </p>
        </div>

        {/* Galeria lifestyle */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {showcase.map((s, i) => (
            <motion.figure
              key={s.cap}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`overflow-hidden rounded-[22px] ${i === 1 ? "sm:translate-y-8" : ""}`}
            >
              <div className="aspect-[4/5] overflow-hidden bg-[var(--cream-dark)]">
                <img
                  src={s.src}
                  alt={s.cap}
                  className="img-warm h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-[1.05]"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--cocoa-soft)]">
                <span className="text-[var(--brand-dark)]">0{i + 1}</span> — {s.cap}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* 4 pilares */}
        <div className="mt-20 grid gap-px rounded-[24px] border border-[var(--cocoa)]/10 bg-[var(--cocoa)]/10 md:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
              className="group relative flex flex-col gap-5 bg-[var(--offwhite)] p-8 md:p-10"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--cocoa)] text-[var(--brand)]">
                  <p.icon className="h-5 w-5" />
                </div>
                <span className="mono-label text-[var(--cocoa-soft)]">{p.tag}</span>
              </div>
              <div>
                <p className="font-display text-2xl text-[var(--cocoa)] md:text-[26px]">
                  {p.title}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--cocoa-soft)]">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
