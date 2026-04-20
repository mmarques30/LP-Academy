import { Reveal } from "@/components/Reveal";

const steps = [
  {
    n: "01",
    title: "Mapeie onde IA gera valor",
    desc: "A gente parte do SEU trabalho, não de tutorial genérico.",
  },
  {
    n: "02",
    title: "Aplique com mentoria semanal",
    desc: "Aulas ao vivo toda segunda + Q&A com a Mari a cada 15 dias.",
  },
  {
    n: "03",
    title: "Vire referência no seu time",
    desc: "Em 90 dias você já implementou, documentou e ensinou alguém.",
  },
];

export function Solution() {
  return (
    <section className="section-pad bg-[var(--surface)]">
      <div className="container-narrow">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">O método</span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-5xl">
              Um caminho só.{" "}
              <span className="text-[var(--accent)]">Do zero à referência.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/65">
              Sem hype, sem promessa mágica. O método APLICA já formou mais de 2.000
              pessoas em empresas como Ambev, Natura e Nubank.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/8 bg-black/40 p-7">
                <p className="font-display text-sm font-bold text-[var(--accent)]">
                  {s.n}
                </p>
                <h3 className="mt-3 text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-3 text-white/65 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
