import { Check, X } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const yes = [
  "Você é CLT e quer virar referência em IA no seu setor",
  "Você é empreendedor(a) e quer tempo de volta (automatizar rotina)",
  "Você é líder e quer levar IA pro seu time sem depender da TI",
  "Você já tentou aprender sozinho(a) e se perdeu em tutoriais soltos",
  "Você quer aplicar IA no trabalho, não só consumir conteúdo sobre IA",
];
const no = [
  "Você quer aprender IA teórica, acadêmica, de papers",
  "Você procura \"se tornar prompt engineer em 7 dias\"",
  "Você quer conteúdo gravado sem compromisso de aplicar",
  "Você não consegue investir 2h por semana na sua evolução",
];

export function ForWho() {
  return (
    <section className="section-pad bg-background">
      <div className="container-narrow grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="card-surface h-full p-8" style={{ borderColor: "color-mix(in oklab, var(--brand) 40%, transparent)" }}>
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--brand-bright)]">
              Pra você se...
            </p>
            <ul className="mt-6 space-y-4">
              {yes.map((t) => (
                <li key={t} className="flex gap-3 text-[var(--offwhite)]">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand)]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card-surface h-full p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--muted-foreground)]">
              Não é pra você se...
            </p>
            <ul className="mt-6 space-y-4">
              {no.map((t) => (
                <li key={t} className="flex gap-3 text-[var(--muted-foreground)]">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-[var(--alert)]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
