import { motion } from "framer-motion";

const signals = [
  {
    n: "01",
    k: "Você assina ChatGPT",
    v: "e ainda perde 3h por semana em tarefas que IA faria em 10 minutos.",
  },
  {
    n: "02",
    k: "Você já viu 50 vídeos de prompt",
    v: "e mesmo assim trava na hora de aplicar no seu trabalho.",
  },
  {
    n: "03",
    k: "Seu time fala de IA em reunião",
    v: "mas ninguém — nem a TI — tá de fato aplicando no fluxo.",
  },
];

export function Problem() {
  return (
    <section className="relative border-y border-[var(--cocoa)]/10 bg-[var(--offwhite)] py-24 md:py-32">
      <div className="container-narrow px-6">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="h-section text-[var(--cocoa)]">
              Consumir conteúdo sobre IA
              <br />
              <span className="serif-italic text-[var(--brand-dark)]">não é aplicar IA.</span>
            </h2>
            <p className="mt-7 lede">
              A maioria dos profissionais está paralisada no mesmo lugar há dois anos —
              assinando ferramentas, consumindo tutorial e ainda fazendo tudo no braço.
            </p>
          </motion.div>

          <div>
            <ol className="divide-y divide-[var(--cocoa)]/10 border-y border-[var(--cocoa)]/10">
              {signals.map((s, i) => (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="grid gap-4 py-8 md:grid-cols-[auto_1fr] md:gap-8"
                >
                  <span className="font-mono text-[12px] font-medium tracking-[0.18em] text-[var(--brand-dark)]">
                    {s.n}
                  </span>
                  <div>
                    <p className="font-display text-xl text-[var(--cocoa)] md:text-[22px]">
                      {s.k}
                    </p>
                    <p className="mt-2 text-[15px] leading-relaxed text-[var(--cocoa-soft)]">
                      {s.v}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
