import { Gift } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const bonuses = [
  { n: 1, title: "Workshop \"Mapeie sua segunda-feira\"", desc: "Um encontro de 90 min ao vivo onde a gente mapeia juntos as tarefas da sua rotina que podem virar IA agora.", value: "R$ 297" },
  { n: 2, title: "Biblioteca de 100+ prompts prontos", desc: "Liberada já no primeiro dia. Prompts por área (marketing, vendas, gestão, RH, finanças, produto). Copia, adapta, aplica.", value: "R$ 197" },
  { n: 3, title: "MarIAna, a assistente de IA dos Aplicados", desc: "Nossa assistente treinada no método APLICA pra tirar dúvida de prompt e ferramenta 24/7.", value: "R$ 97/mês" },
  { n: 4, title: "Trilha Express \"Primeiros 30 dias\"", desc: "Plano dia a dia pra você sair do zero à primeira aplicação real em 1 mês.", value: "R$ 147" },
];

export function Bonuses() {
  return (
    <section className="section-pad" style={{ background: "linear-gradient(180deg, #1A1F10 0%, #141A0B 100%)" }}>
      <div className="container-narrow">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-[var(--offwhite)] md:text-5xl">
            Bônus exclusivos <span className="text-[var(--brand-bright)]">pra você hoje</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {bonuses.map((b, i) => (
            <Reveal key={b.n} delay={(i % 2) * 0.08}>
              <article className="card-surface h-full p-7" style={{ borderColor: "color-mix(in oklab, var(--brand-bright) 35%, transparent)" }}>
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[var(--brand)]/20 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--brand-bright)]">
                    <Gift className="h-3.5 w-3.5" /> Bônus {b.n}
                  </span>
                  <span className="text-sm text-[var(--muted-foreground)] line-through">{b.value}</span>
                </div>
                <h3 className="text-lg font-bold text-[var(--offwhite)]">{b.title}</h3>
                <p className="mt-3 text-[var(--sage)] leading-relaxed">{b.desc}</p>
                <p className="mt-4 inline-block rounded-md bg-[var(--brand)]/15 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--brand-bright)]">
                  Grátis pra você
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
