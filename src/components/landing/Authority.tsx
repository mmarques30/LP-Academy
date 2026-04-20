const companies = ["Amazon", "Suzano", "Itaú", "Stone", "Nubank", "XP"];

const credentials = [
  { n: "10+", l: "anos liderando produto em techs" },
  { n: "2k+", l: "profissionais treinados em IA" },
  { n: "R$100M", l: "em projetos com IA aplicada" },
];

export function Authority() {
  return (
    <section id="autoridade" className="relative bg-section section-pad">
      <div className="container-wide px-4 sm:px-6">
        {/* Logos empresas */}
        <div className="mb-16 md:mb-24">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
            Treinou times de IA em
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
            {companies.map((c) => (
              <span
                key={c}
                className="font-display text-xl font-bold text-white/35 transition-colors hover:text-white/70"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Bio editorial */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow">Quem é Mariana</span>
            <h2 className="mt-6 h-section text-white">
              Não é mais um <span className="italic font-light text-[#C5C9B3]">guru</span> de IA.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-white/75">
              <p>
                Passei os últimos <strong className="text-white">10 anos</strong> liderando
                produto em empresas como Amazon e Suzano — implementando IA em processos
                reais, com times reais, com PnL real.
              </p>
              <p>
                Vi de perto o que funciona e o que é só marketing. O que eu ensino na Academy
                é o que eu <em className="text-[var(--lime)] not-italic font-semibold">aplico
                de verdade</em> — não o que é bonito de postar no LinkedIn.
              </p>
              <p className="text-white/55">
                Criei a IAplicada porque, depois de anos treinando times Fortune 500, percebi
                que a maior parte dos cursos ensinava ChatGPT como brinquedo. Eu queria
                ensinar como ferramenta de trabalho.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 md:gap-6">
              {credentials.map((s) => (
                <div key={s.l} className="border-l border-[var(--lime)]/40 pl-4">
                  <div className="font-display text-2xl md:text-4xl font-bold text-white">
                    {s.n}
                  </div>
                  <div className="mt-2 text-xs md:text-sm text-white/55 leading-snug">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
