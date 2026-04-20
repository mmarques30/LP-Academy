import { Check, Lock, Clock, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CountdownTimer } from "./CountdownTimer";

const CHECKOUT_URL = "#";
const LAUNCH_END_DATE = new Date(Date.now() + 7 * 86400000);

const includes = [
  "Acesso completo às 18 trilhas",
  "Aulas ao vivo toda segunda-feira",
  "Q&As quinzenais de mentoria",
  "Biblioteca de +100 prompts testados",
  "Catálogo de +50 ferramentas",
  "Comunidade exclusiva Aplicados",
  "4 bônus inclusos",
  "Sem fidelidade, cancele quando quiser",
];

export function Offer() {
  return (
    <section
      id="oferta"
      className="section-pad border-t-[3px] border-[var(--brand)] bg-background"
    >
      <div className="container-narrow">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-[var(--offwhite)] md:text-5xl">
            Comece hoje por <span className="text-[var(--brand-bright)]">R$ 147/mês</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-xl rounded-[20px] border-2 border-[var(--brand)] bg-[var(--card)] p-8 md:p-12 shadow-[0_30px_80px_-30px_rgba(138,171,35,0.5)]">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--brand)]/15 px-3 py-1 text-xs font-bold text-[var(--brand-bright)]">
              <Sparkles className="h-3.5 w-3.5" /> Plano mensal · Sem fidelidade
            </span>

            <div className="mt-6 flex items-end gap-3">
              <span className="font-display text-2xl text-[var(--muted-foreground)] line-through">R$ 297</span>
              <span className="font-display text-5xl font-extrabold text-[var(--offwhite)] md:text-6xl">R$ 147</span>
              <span className="mb-2 text-[var(--sage)]">/mês</span>
            </div>
            <p className="mt-1 text-sm text-[var(--muted-foreground)]">Ou R$ 1.470/ano (2 meses grátis)</p>

            <ul className="mt-8 space-y-3">
              {includes.map((i) => (
                <li key={i} className="flex gap-3 text-[var(--offwhite)]">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand)]" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <a href={CHECKOUT_URL} className="btn-primary mt-8 w-full text-base md:text-lg !py-4">
              Quero aplicar IA no meu trabalho
            </a>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-[var(--muted-foreground)]">
              <Lock className="h-4 w-4" /> Pagamento seguro · Garantia de 7 dias
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-10 max-w-2xl space-y-6">
            <div
              className="flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm text-[var(--offwhite)]"
              style={{ background: "color-mix(in oklab, var(--alert) 18%, transparent)", border: "1px solid color-mix(in oklab, var(--alert) 35%, transparent)" }}
            >
              <Clock className="h-4 w-4 text-[var(--alert)]" />
              Condição especial de lançamento. Depois disso, R$ 197/mês.
            </div>
            <CountdownTimer endDate={LAUNCH_END_DATE} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
