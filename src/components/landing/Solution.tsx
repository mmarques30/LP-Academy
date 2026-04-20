import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const aplica = [
  { letter: "A", title: "Analisar", desc: "mapear onde IA gera valor no seu trabalho" },
  { letter: "P", title: "Priorizar", desc: "escolher o que implementar primeiro" },
  { letter: "L", title: "Levantar", desc: "pesquisar a melhor ferramenta pra cada caso" },
  { letter: "I", title: "Implementar", desc: "aplicar na rotina com acompanhamento" },
  { letter: "C", title: "Compartilhar", desc: "documentar e repassar pro time" },
  { letter: "A", title: "Automatizar", desc: "transformar repetição em fluxo" },
];

export function Solution() {
  return (
    <section className="section-pad bg-[var(--surface-alt)]">
      <div className="container-narrow grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[#1A1F10] px-3 py-1.5 text-xs font-medium text-[var(--brand-bright)]">
            <Sparkles className="h-3.5 w-3.5" /> A solução
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[var(--offwhite)] md:text-5xl">
            O Academy é o lugar onde IA deixa de ser teoria{" "}
            <span className="text-[var(--brand-bright)]">e vira parte do seu trabalho.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--sage)]">
            Todo mês você entra em uma plataforma viva: aulas ao vivo toda segunda-feira, biblioteca de
            trilhas e prompts testados em contextos reais, mentoria quinzenal com a Mari, e uma comunidade
            de profissionais CLT, empreendedores e líderes que aplicam IA no dia a dia. Não é conteúdo
            gravado que envelhece. É um sistema que evolui com o mercado.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card-surface p-6 md:p-8">
            <p className="mb-6 text-sm uppercase tracking-widest text-[var(--brand-bright)]">
              Método APLICA
            </p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {aplica.map((a) => (
                <li key={a.title} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand)]/15 font-display text-lg font-extrabold text-[var(--brand-bright)]">
                    {a.letter}
                  </span>
                  <div>
                    <p className="font-semibold text-[var(--offwhite)]">{a.title}</p>
                    <p className="text-sm text-[var(--sage)]">{a.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
