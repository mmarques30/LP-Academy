import { Check, ArrowUpRight, Shield } from "lucide-react";

const included = [
  "Aula ao vivo toda segunda · 19h30",
  "Q&A da sua rotina toda quarta",
  "18 trilhas práticas por função",
  "Biblioteca de +100 prompts testados",
  "Mapa de +50 ferramentas de IA",
  "Comunidade no Discord · 24/7",
  "Aulas gravadas com transcrição",
  "MarIAna — assistente IA privada",
];

export function Offer() {
  return (
    <section id="oferta" className="relative bg-section section-pad">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-30 mask-fade-b"
      />
      <div className="container-wide relative px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Investimento</span>
          <h2 className="mt-6 h-section text-white">
            Menos que um jantar.
            <br />
            O <span className="text-gradient-lime">dia inteiro</span> que você recupera.
          </h2>
        </div>

        <div className="mx-auto mt-14 md:mt-16 max-w-4xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--lime)]/25 bg-gradient-to-br from-[var(--ink-3)] via-[var(--ink-2)] to-[var(--ink)] p-8 md:p-12">
            {/* Glow corner */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full blur-[100px]"
              style={{ background: "radial-gradient(circle, rgba(175,192,64,0.4), transparent 70%)" }}
            />

            <div className="relative grid gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--lime)]">
                  Academy · Assinatura mensal
                </p>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-5xl md:text-7xl font-bold text-white">
                    R$ 147
                  </span>
                  <span className="text-base md:text-lg text-white/50">/mês</span>
                </div>
                <p className="mt-2 text-sm text-white/55">
                  Equivale a <strong className="text-white/80">R$ 4,90/dia</strong>.
                </p>

                <div className="mt-8 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <Shield className="mt-0.5 h-5 w-5 shrink-0 text-[var(--lime)]" />
                  <div className="text-sm text-white/75">
                    <strong className="text-white">Garantia de 7 dias.</strong> Se não for pra
                    você, a gente devolve 100% — sem burocracia.
                  </div>
                </div>

                <a href="#" className="btn-primary-xl mt-8 w-full">
                  Começar agora
                  <ArrowUpRight className="h-5 w-5" />
                </a>
                <p className="mt-3 text-center text-xs text-white/40">
                  Pagamento seguro · Cartão, Pix ou boleto · Cancele quando quiser
                </p>
              </div>

              <div className="md:col-span-7">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                  O que está incluído
                </p>
                <ul className="mt-5 grid gap-3">
                  {included.map((l) => (
                    <li key={l} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--lime)] text-[var(--ink)]">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-sm md:text-base text-white/85">{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
