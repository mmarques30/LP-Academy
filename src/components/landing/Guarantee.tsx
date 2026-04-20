import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Guarantee() {
  return (
    <section className="section-pad bg-[var(--surface-alt)]">
      <div className="container-narrow">
        <Reveal>
          <div className="mx-auto max-w-2xl rounded-2xl border-2 border-[var(--brand)] bg-[var(--card)] p-8 md:p-10 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand)]/15">
              <ShieldCheck className="h-8 w-8 text-[var(--brand-bright)]" />
            </div>
            <h3 className="font-display text-2xl font-extrabold text-[var(--offwhite)] md:text-3xl">
              Garantia incondicional de 7 dias
            </h3>
            <p className="mt-4 text-[var(--sage)] leading-relaxed">
              Entre no Academy, explore as trilhas, participe da primeira aula ao vivo. Se nos primeiros
              7 dias você sentir que não é pra você, a gente devolve 100% do seu investimento. Sem
              burocracia, sem pergunta difícil. O risco é todo nosso.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
