import { motion } from "framer-motion";

const aplica = [
  { letter: "A", title: "Analisar", desc: "Mapeamos onde IA gera valor real no seu trabalho." },
  { letter: "P", title: "Priorizar", desc: "Escolhemos juntos o que implementar primeiro." },
  { letter: "L", title: "Levantar", desc: "A ferramenta certa pra cada caso — nada de testar 30." },
  { letter: "I", title: "Implementar", desc: "Você aplica na rotina com acompanhamento." },
  { letter: "C", title: "Compartilhar", desc: "Documenta e repassa pro time ganhar escala." },
  { letter: "A", title: "Automatizar", desc: "Transforma o que repete em fluxo que roda sozinho." },
];

export function Solution() {
  return (
    <section id="metodo" className="section-pad bg-[var(--cream)]">
      <div className="container-narrow px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">O método</span>
          <h2 className="mt-5 h-section">
            O <span className="text-gradient-brand">APLICA</span> — seis passos pra transformar IA em
            resultado no seu dia a dia
          </h2>
          <p className="mt-5 lede">
            Um sistema testado com +2.000 Aplicados. Você deixa de colecionar prompts e passa a ter um
            processo claro do diagnóstico à automação.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {aplica.map((a, i) => (
            <motion.div
              key={a.title + i}
              initial={{ opacity: 1, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--offwhite)] p-7 transition-shadow hover:shadow-[0_30px_70px_-40px_rgba(44,20,2,0.25)]"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand)]/20 font-display text-2xl font-black text-[var(--brand-dark)] ring-1 ring-[var(--brand-dark)]/20">
                  {a.letter}
                </span>
                <h3 className="font-display text-xl font-extrabold text-[var(--cocoa)]">{a.title}</h3>
              </div>
              <p className="mt-5 text-[var(--cocoa-soft)] leading-relaxed">{a.desc}</p>
              <span className="pointer-events-none absolute -right-8 -bottom-8 font-display text-[120px] font-black leading-none text-[var(--brand)]/10">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#oferta" className="btn-primary">
            Quero aplicar o método APLICA
          </a>
        </div>
      </div>
    </section>
  );
}
