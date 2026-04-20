import { Check, Lock, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const CHECKOUT_URL = "#";

const includes = [
  "Acesso às 18 trilhas completas",
  "Aulas ao vivo toda segunda · 19:30",
  "Q&As quinzenais com a Mari",
  "+100 prompts testados",
  "MarIAna, assistente de IA 24/7",
  "Comunidade Aplicados",
  "4 bônus inclusos",
];

export function Offer() {
  return (
    <section id="oferta" className="section-pad">
      <div className="container-narrow">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">A oferta</span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-5xl">
              Tudo isso por{" "}
              <span className="text-[var(--accent)]">menos de R$ 5 por dia.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="mx-auto mt-12 max-w-xl overflow-hidden rounded-3xl border bg-black"
            style={{
              borderColor: "hsl(80 78% 56% / 0.35)",
              boxShadow:
                "0 40px 120px -40px hsl(80 78% 56% / 0.35), inset 0 0 0 1px hsl(0 0% 100% / 0.04)",
            }}
          >
            <div className="p-8 md:p-10">
              <p className="text-sm text-white/55">
                <span className="line-through">De R$ 297</span> · por
              </p>
              <div className="mt-2 flex items-end gap-2">
                <span className="font-display text-6xl font-bold text-white md:text-7xl">
                  R$ 147
                </span>
                <span className="mb-3 text-white/55">/mês</span>
              </div>
              <p className="mt-1 text-sm text-white/55">
                Ou R$ 1.470/ano (2 meses grátis)
              </p>

              <ul className="mt-8 space-y-3">
                {includes.map((i) => (
                  <li key={i} className="flex gap-3 text-white/90">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>

              <a href={CHECKOUT_URL} className="btn-primary mt-8 w-full !py-4 !text-base">
                Quero entrar no Academy
              </a>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/50">
                <span className="flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5" /> Pagamento seguro
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[var(--accent)]" />
                  7 dias de garantia
                </span>
                <span>Sem fidelidade</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
