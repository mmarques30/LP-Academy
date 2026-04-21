import { motion } from "framer-motion";

const aplica = [
  { letter: "A", title: "Analisar", desc: "Onde IA gera valor real no seu trabalho." },
  { letter: "P", title: "Priorizar", desc: "Qual workflow destravar primeiro." },
  { letter: "L", title: "Limpar", desc: "Cortar ruído e criar o prompt certo." },
  { letter: "I", title: "Implementar", desc: "Rodar na semana, não no próximo tri." },
  { letter: "C", title: "Calibrar", desc: "Afinar até virar rotina que entrega." },
  { letter: "A", title: "Automatizar", desc: "Tirar você da operação e multiplicar." },
];

export function Solution() {
  return (
    <section id="metodo" className="section-pad bg-[var(--cream)]">
      <div className="container-wide px-6">
        <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Lado copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <span className="eyebrow">02 — A solução</span>
            <h2 className="mt-7 h-section text-[var(--cocoa)]">
              Método <span className="serif-italic text-[var(--brand-dark)]">APLICA</span>.
              <br />
              6 passos. Toda semana.
            </h2>
            <p className="mt-7 lede">
              O sistema que destrava profissionais brilhantes do medo de IA —
              e transforma cada aula em uma entrega concreta na sua rotina.
            </p>

            {/* Imagem lifestyle */}
            <div className="mt-10 overflow-hidden rounded-[24px] border border-[var(--cocoa)]/10 bg-[var(--offwhite)]">
              <div className="aspect-[5/4] overflow-hidden bg-[var(--cream)]">
                <img
                  src="/dashboard-aula47-v2.jpg"
                  alt="Dashboard de projeções operacionais construído em aula da IAplicada"
                  width="1200"
                  height="960"
                  className="h-full w-full object-cover object-top transition-transform duration-[1200ms] hover:scale-[1.04]"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
              <div className="flex items-center justify-between border-t border-[var(--cocoa)]/10 p-5">
                <p className="text-sm text-[var(--cocoa-soft)]">
                  <span className="font-display text-[var(--cocoa)]">Aula 47</span>{" "}
                  · <em className="serif-italic">Reporting com Claude em 12 min</em>
                </p>
                <span className="mono-label text-[var(--cocoa-soft)]">seg · 19h30</span>
              </div>
            </div>
          </motion.div>

          {/* Grid APLICA — clean 2×3 */}
          <div className="grid gap-4 sm:grid-cols-2">
            {aplica.map((p, i) => (
              <motion.article
                key={`${p.letter}-${i}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.06 + Math.floor(i / 2) * 0.04 }}
                className="group relative overflow-hidden rounded-[22px] border border-[var(--cocoa)]/10 bg-white p-7 transition-all duration-500 hover:border-[var(--brand-dark)]/40 hover:shadow-[0_30px_60px_-30px_rgba(13,13,13,0.15)]"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--cocoa-soft)]">
                    0{i + 1}
                  </span>
                  <span
                    className="font-display text-[76px] leading-none text-[var(--brand-dark)] opacity-80 transition-all duration-500 group-hover:opacity-100"
                    aria-hidden
                  >
                    {p.letter}
                  </span>
                </div>
                <p className="mt-6 font-display text-2xl text-[var(--cocoa)]">{p.title}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--cocoa-soft)]">
                  {p.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
