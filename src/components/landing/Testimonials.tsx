const testimonials = [
  {
    q: "Em 3 semanas eu economizei um dia inteiro por semana. O ROI pagou a assinatura em um mês.",
    n: "Carolina S.",
    r: "Gerente de Marketing · SP",
    i: "CS",
  },
  {
    q: "Parei de fazer curso solto. Aqui eu aplico toda semana. Virou parte da minha rotina.",
    n: "Rafael P.",
    r: "Head de Vendas · Tech B2B",
    i: "RP",
  },
  {
    q: "A Mariana fala como quem realmente usa IA no trabalho, não como quem vende curso.",
    n: "Patrícia L.",
    r: "Diretora de RH · Grupo industrial",
    i: "PL",
  },
  {
    q: "O Q&A das quartas é o diferencial. Você leva um problema real e sai com a solução.",
    n: "Eduardo M.",
    r: "Product Manager · Fintech",
    i: "EM",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-section-alt section-pad">
      <div className="container-wide px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Quem já está dentro</span>
          <h2 className="mt-6 h-section text-white">
            +2.000 Aplicados que pararam de <em className="font-light text-white/60 not-italic">testar</em>
            <br className="hidden sm:block" />
            e começaram a <span className="text-gradient-lime">aplicar</span>.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 md:mt-20 md:grid-cols-2 md:gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 md:p-9"
            >
              <svg
                aria-hidden
                className="absolute right-7 top-7 h-8 w-8 text-[var(--lime)]/20"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M10 8C5.6 8 2 11.6 2 16v8h10V14H8c0-2.2 1.8-4 4-4V8h-2zm14 0c-4.4 0-8 3.6-8 8v8h10V14h-4c0-2.2 1.8-4 4-4V8h-2z" />
              </svg>
              <blockquote className="font-display text-lg md:text-xl leading-snug text-white">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[var(--lime)] to-[var(--lime-deep)] font-display text-sm font-bold text-[var(--ink)]">
                  {t.i}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.n}</div>
                  <div className="text-xs text-white/50">{t.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
