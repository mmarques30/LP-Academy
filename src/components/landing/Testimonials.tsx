import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula Ferreira",
    role: "Analista de Marketing · Ambev",
    text: "Em 3 semanas automatizei 70% do meu reporting com Claude. Meu gestor me chamou pra liderar a iniciativa de IA do time. O Academy se pagou no primeiro mês.",
    highlight: "15 horas por semana, recuperadas.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80",
  },
  {
    name: "Rodrigo Santos",
    role: "Head Comercial · Suzano",
    text: "Eu achei que já sabia IA porque usava ChatGPT todo dia. O Academy mostrou o tanto que eu deixava na mesa. Hoje tenho 3 workflows rodando em Zapier — sozinhos.",
    highlight: "3 workflows rodando sozinhos.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80",
  },
  {
    name: "Júlia Costa",
    role: "Fundadora · Agência digital",
    text: "Entrei em janeiro. Em 4 meses dobrei a capacidade da agência sem contratar ninguém. A Mari ensina com uma clareza que não existe em outro lugar.",
    highlight: "Dobrou a capacidade em 4 meses.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&q=80",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="section-pad bg-[var(--cream)]">
      <div className="container-wide px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">05 — Quem aplica</span>
            <h2 className="mt-7 h-section text-[var(--cocoa)]">
              Histórias de quem parou
              <br />
              <span className="serif-italic text-[var(--brand-dark)]">de adiar a IA.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-[15px] text-[var(--cocoa-soft)]">
            <div>
              <p className="font-display text-3xl text-[var(--cocoa)]">4,9<span className="text-lg text-[var(--cocoa-soft)]">/5</span></p>
              <p className="mt-0.5 text-[12px] uppercase tracking-[0.18em]">satisfação</p>
            </div>
            <div className="h-10 w-px bg-[var(--cocoa)]/15" />
            <div>
              <p className="font-display text-3xl text-[var(--cocoa)]">93%</p>
              <p className="mt-0.5 text-[12px] uppercase tracking-[0.18em]">ativos após 3m</p>
            </div>
            <div className="h-10 w-px bg-[var(--cocoa)]/15" />
            <div>
              <p className="font-display text-3xl text-[var(--cocoa)]">+2.000</p>
              <p className="mt-0.5 text-[12px] uppercase tracking-[0.18em]">Aplicados</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative flex flex-col overflow-hidden rounded-[24px] border border-[var(--cocoa)]/10 bg-[var(--offwhite)] p-8 transition-all duration-500 hover:border-[var(--cocoa)]/25 hover:shadow-[0_30px_70px_-30px_rgba(13,13,13,0.15)] ${
                i === 1 ? "lg:translate-y-10" : ""
              }`}
            >
              <div className="flex items-center gap-1 text-[var(--brand-dark)]">
                {[0, 1, 2, 3, 4].map((k) => (
                  <Star key={k} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>

              <p className="mt-7 font-display text-[22px] leading-[1.2] text-[var(--cocoa)]">
                "{t.highlight}"
              </p>

              <p className="mt-5 text-[15px] leading-[1.6] text-[var(--cocoa-soft)]">
                {t.text}
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-[var(--cocoa)]/10 pt-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="img-warm h-12 w-12 rounded-full border border-[var(--cocoa)]/10 object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-display text-[17px] text-[var(--cocoa)]">{t.name}</p>
                  <p className="text-[13px] text-[var(--cocoa-soft)]">{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
