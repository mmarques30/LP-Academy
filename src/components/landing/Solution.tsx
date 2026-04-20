import { Calendar, Users, Compass, Wrench } from "lucide-react";

const pillars = [
  {
    icon: Calendar,
    t: "Aula ao vivo toda segunda",
    d: "19h30. Tema aplicado ao trabalho real. Gravada e com transcrição pra você revisar quando quiser.",
  },
  {
    icon: Users,
    t: "Q&A toda quarta",
    d: "Você traz um caso da sua rotina. Resolvemos ao vivo com IA. Sem teoria, sem slide.",
  },
  {
    icon: Compass,
    t: "Trilhas por função",
    d: "18 trilhas práticas pra marketing, vendas, produto, RH, finanças e liderança. Você escolhe.",
  },
  {
    icon: Wrench,
    t: "Biblioteca viva de prompts",
    d: "+100 prompts testados em times reais, organizados por cenário. Copia, adapta e usa.",
  },
];

export function Academy() {
  return (
    <section id="academy" className="relative bg-section section-pad">
      <div className="container-wide px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <span className="eyebrow">O que é a Academy</span>
            <h2 className="mt-6 h-section text-white">
              Uma <span className="text-gradient-lime">assinatura</span> —
              não um curso.
            </h2>
            <p className="mt-6 lede">
              Cursos terminam. A sua rotina não. A Academy é um ambiente contínuo de
              aprendizado: aulas novas toda semana, mentoria ao vivo e uma comunidade que
              implementa junto.
            </p>

            <div className="mt-10 flex items-center gap-4 rounded-2xl border border-[var(--lime)]/25 bg-[var(--lime)]/5 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--lime)] text-[var(--ink)]">
                <span className="text-sm font-bold">R$</span>
              </div>
              <div>
                <p className="font-semibold text-white">R$ 147/mês · sem fidelidade</p>
                <p className="text-sm text-white/60">
                  Cancela quando quiser. Sem pegadinha.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.t}
                    className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all hover:border-[var(--lime)]/30 hover:bg-white/[0.04]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--lime)]/12 text-[var(--lime)] transition-colors group-hover:bg-[var(--lime)] group-hover:text-[var(--ink)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg md:text-xl font-display font-semibold text-white">
                      {p.t}
                    </h3>
                    <p className="mt-2 text-sm md:text-base leading-relaxed text-white/60">
                      {p.d}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bônus em barra horizontal */}
            <div className="mt-6 rounded-2xl border border-white/[0.08] bg-gradient-to-r from-[var(--ink-3)] to-transparent p-6 md:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--lime)]">
                Inclui
              </p>
              <div className="mt-4 grid gap-3 text-sm text-white/75 md:grid-cols-2 md:gap-x-8">
                {[
                  "Biblioteca de +100 prompts testados",
                  "Mapa de +50 ferramentas de IA",
                  "Comunidade no Discord · 24/7",
                  "Aulas gravadas com transcrição",
                  "Templates prontos por função",
                  "MarIAna — assistente IA privada",
                ].map((l) => (
                  <div key={l} className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lime)]" />
                    <span>{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Backwards-compat export
export const Solution = Academy;
