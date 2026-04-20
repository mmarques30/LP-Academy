import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Guarantee() {
  return (
    <section className="section-pad bg-[var(--surface)]">
      <div className="container-narrow">
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-[var(--accent)]/35 bg-[var(--accent-soft)]">
              <ShieldCheck className="h-9 w-9 text-[var(--accent)]" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
                7 dias de garantia incondicional.
              </h3>
              <p className="mt-3 text-white/65 leading-relaxed">
                Entre, explore as trilhas, participe da primeira aula. Se não for pra
                você, a gente devolve 100% — sem pergunta difícil. O risco é nosso.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
