import { Reveal } from "@/components/Reveal";

const pains = [
  "Você já tentou aprender IA sozinho — e se perdeu em tutoriais.",
  "Tem medo de virar \"o(a) único(a) do time\" que não aplica IA.",
  "Fez cursos genéricos que não mudaram nada na sua segunda-feira.",
];

export function Problem() {
  return (
    <section className="section-pad">
      <div className="container-narrow">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">A verdade que ninguém fala</span>
            <h2 className="mt-5 text-3xl font-bold leading-[1.1] text-white md:text-5xl">
              Saber IA virou obrigação.
              <br />
              <span className="text-[var(--accent)]">Aplicar IA virou vantagem.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 max-w-2xl space-y-4">
          {pains.map((p, i) => (
            <Reveal key={p} delay={i * 0.06}>
              <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-[var(--surface)] p-5">
                <span className="mt-0.5 font-display text-sm font-bold text-[var(--accent)]">
                  0{i + 1}
                </span>
                <p className="text-lg text-white/85">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
