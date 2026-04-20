import { Gift } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const bonuses = [
  {
    title: "Workshop \"Mapeie sua segunda-feira\"",
    desc: "90 min ao vivo pra mapear o que na sua rotina pode virar IA agora.",
    value: "R$ 297",
  },
  {
    title: "+100 prompts prontos liberados no dia 1",
    desc: "Biblioteca por área: marketing, vendas, gestão, RH, finanças.",
    value: "R$ 197",
  },
  {
    title: "MarIAna · assistente IA 24/7",
    desc: "Treinada no método APLICA pra tirar dúvida de prompt e ferramenta.",
    value: "R$ 97/mês",
  },
  {
    title: "Trilha Express \"Primeiros 30 dias\"",
    desc: "Plano dia a dia do zero à primeira aplicação real em 1 mês.",
    value: "R$ 147",
  },
];

export function Bonuses() {
  return (
    <section className="section-pad bg-[var(--surface)]">
      <div className="container-narrow">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Entrando agora você leva</span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-5xl">
              4 bônus <span className="text-[var(--accent)]">inclusos.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
          {bonuses.map((b, i) => (
            <Reveal key={b.title} delay={(i % 2) * 0.06}>
              <article className="h-full rounded-2xl border border-white/8 bg-black/40 p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--accent)]">
                    <Gift className="h-3 w-3" /> Bônus
                  </span>
                  <span className="text-sm text-white/40 line-through">{b.value}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{b.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{b.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
