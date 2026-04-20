import { Reveal } from "@/components/Reveal";
import { ArrowRight, Check, X } from "lucide-react";

const before = [
  "Assiste tutorial e não aplica",
  "Depende de TI pra qualquer coisa",
  "Perde 2h/dia em tarefa repetitiva",
  "Tem medo de ficar pra trás",
];

const after = [
  "Aplica no trabalho na mesma semana",
  "Roda tudo sozinho(a), sem TI",
  "Recupera 10-20h por semana",
  "Vira referência de IA no seu time",
];

export function Transformation() {
  return (
    <section className="section-pad">
      <div className="container-narrow">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
              A diferença não é saber mais IA.
              <br />
              <span className="text-[var(--accent)]">É aplicar de verdade.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
          <Reveal>
            <div className="h-full rounded-2xl border border-white/8 bg-[var(--surface)] p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
                Antes
              </p>
              <ul className="mt-5 space-y-3">
                {before.map((t) => (
                  <li key={t} className="flex gap-3 text-white/55">
                    <X className="mt-0.5 h-5 w-5 shrink-0 opacity-60" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="hidden items-center justify-center md:flex">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)]">
              <ArrowRight className="h-5 w-5 text-black" />
            </div>
          </div>

          <Reveal delay={0.1}>
            <div
              className="h-full rounded-2xl border p-7"
              style={{
                borderColor: "hsl(80 78% 56% / 0.4)",
                background:
                  "linear-gradient(180deg, hsl(80 60% 16% / 0.4) 0%, hsl(0 0% 8%) 100%)",
              }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
                Depois · em 90 dias
              </p>
              <ul className="mt-5 space-y-3">
                {after.map((t) => (
                  <li key={t} className="flex gap-3 text-white">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
