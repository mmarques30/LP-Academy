import { useState } from "react";
import { ArrowUpRight, Star } from "lucide-react";

export function Hero() {
  const [imgError, setImgError] = useState(false);
  return (
    <section className="relative isolate overflow-hidden bg-hero pt-28 pb-20 sm:pt-32 md:pt-40 md:pb-28">
      {/* Grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-40 mask-fade-b"
      />
      {/* Lime glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-[120px] opacity-60"
        style={{ background: "radial-gradient(circle, rgba(175,192,64,0.35), transparent 60%)" }}
      />

      <div className="container-wide relative px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Coluna texto */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--lime)]" />
                Academy · Edição 2026
              </span>
            </div>

            <h1 className="mt-6 h-hero text-white">
              Pare de <span className="italic font-light text-[#C5C9B3]">testar</span> IA.
              <br className="hidden sm:block" />
              Comece a <span className="text-gradient-lime">aplicar</span>.
            </h1>

            <p className="mt-6 lede max-w-xl">
              A Academy que transforma ferramentas de IA em resultado real no seu trabalho.
              Aulas ao vivo toda segunda, mentoria semanal e uma comunidade que implementa
              junto — sem hype, sem promessa mágica.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a href="#oferta" className="btn-primary-xl w-full sm:w-auto">
                Entrar na Academy
                <ArrowUpRight className="h-5 w-5" />
              </a>
              <a
                href="#academy"
                className="text-sm font-medium text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                Ver o que tem dentro →
              </a>
            </div>

            <p className="mt-5 text-sm text-white/50">
              R$ 147/mês · Sem fidelidade · Cancele quando quiser
            </p>

            {/* Prova social inline */}
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["#AFC040", "#DFF54F", "#738925", "#D9DFA1"].map((c, i) => (
                    <span
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-[var(--ink)] ring-1 ring-white/10"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-white">+2.000 Aplicados</div>
                  <div className="text-white/50">aplicando IA no dia a dia</div>
                </div>
              </div>

              <div className="hidden h-10 w-px bg-white/10 sm:block" />

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--lime)] text-[var(--lime)]" />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-white">4.9/5</span>
                  <span className="ml-1 text-white/50">· 380+ avaliações</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna foto */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Moldura com glow */}
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[var(--lime)]/30 via-transparent to-[var(--lime-deep)]/20 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.02] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)]">
                <div className="aspect-[3/4] w-full">
                  {imgError ? (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--ink-3)] via-[var(--ink-2)] to-[var(--ink)]">
                      <div className="flex flex-col items-center gap-3 text-center px-6">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[var(--lime)] to-[var(--lime-deep)]">
                          <span className="font-display text-3xl font-bold text-[var(--ink)]">M</span>
                        </div>
                        <p className="font-display text-lg font-semibold text-white">Mariana Marques</p>
                        <p className="text-xs text-white/40">
                          Salve a foto em <code className="rounded bg-white/10 px-1.5 py-0.5 text-[var(--lime)]">public/mariana-hero.jpg</code>
                        </p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src="/mariana-hero.jpg"
                      alt="Mariana Marques, fundadora da IAplicada"
                      className="h-full w-full object-cover"
                      loading="eager"
                      onError={() => setImgError(true)}
                    />
                  )}
                </div>

                {/* Overlay com nome */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/70 to-transparent p-6 pt-20">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--lime)]">
                        Fundadora
                      </p>
                      <p className="mt-1 font-display text-xl font-bold text-white">
                        Mariana Marques
                      </p>
                      <p className="text-sm text-white/60">
                        Ex-Amazon, Suzano · 10+ anos em produto
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge flutuante */}
              <div className="absolute -right-4 top-8 hidden rotate-3 rounded-2xl border border-white/10 bg-[var(--ink-3)]/90 px-4 py-3 backdrop-blur md:block">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 animate-pulse rounded-full bg-[var(--lime)]" />
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
                    Ao vivo · Segundas 19h30
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
