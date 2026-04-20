import { Reveal } from "@/components/Reveal";
import { ArrowRight, X, Check } from "lucide-react";

const before = [
  "Começa a semana sem saber por onde atacar IA",
  "Assiste tutorial atrás de tutorial, e nada aplica",
  "Perde 2h/dia em tarefa que já poderia ser automatizada",
  "Depende de TI pra qualquer coisa \"técnica\"",
  "Vê outras pessoas liderarem IA na empresa",
  "Cansaço de \"preciso estudar IA\" há 2 anos",
];

const after = [
  "Começa a segunda já sabendo o que vai automatizar",
  "Aplica direto no trabalho, com prompt testado e aula ao vivo",
  "Recupera 10-20h por semana com fluxos automáticos",
  "Roda tudo sozinho(a), sem depender de ninguém",
  "Vira referência de IA no seu time e setor",
  "Tem clareza, ritmo e comunidade pra implementar",
];

export function Transformation() {
  return (
    <section className="section-pad bg-background">
      <div className="container-narrow">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[#1A1F10] px-3 py-1.5 text-xs font-medium text-[var(--brand-bright)]">
              Antes e depois do Academy
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[var(--offwhite)] md:text-5xl">
              A diferença não é saber mais IA.
              <br />
              É <span className="text-[var(--brand-bright)]">aplicar de verdade.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-stretch md:gap-4">
          <Reveal>
            <div className="card-surface relative h-full p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)]">
                Antes do Academy
              </p>
              <h3 className="mt-2 font-display text-xl font-extrabold text-[var(--offwhite)]">
                A rotina hoje
              </h3>
              <ul className="mt-6 space-y-4">
                {before.map((t) => (
                  <li key={t} className="flex gap-3 text-[var(--muted-foreground)]">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-[var(--alert)]" />
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="hidden items-center justify-center md:flex">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand)] text-[#141A0B] shadow-[0_10px_30px_-10px_rgba(138,171,35,0.6)]">
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>

          <Reveal delay={0.1}>
            <div
              className="card-surface relative h-full p-7"
              style={{
                borderColor: "color-mix(in oklab, var(--brand) 55%, transparent)",
                background:
                  "linear-gradient(180deg, color-mix(in oklab, var(--brand) 8%, var(--card)) 0%, var(--card) 100%)",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-bright)]">
                Depois do Academy
              </p>
              <h3 className="mt-2 font-display text-xl font-extrabold text-[var(--offwhite)]">
                A rotina em 90 dias
              </h3>
              <ul className="mt-6 space-y-4">
                {after.map((t) => (
                  <li key={t} className="flex gap-3 text-[var(--offwhite)]">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-bright)]" />
                    <span className="leading-relaxed">{t}</span>
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
