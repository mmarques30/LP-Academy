const pains = [
  {
    n: "01",
    t: "Você testou ChatGPT e achou genérico",
    d: "Respostas rasas, nada que realmente acelere o seu trabalho. Você voltou pro jeito antigo e ficou com a sensação de que a IA 'ainda não serve pra mim'.",
  },
  {
    n: "02",
    t: "Fez curso, viu YouTube, e continuou travado",
    d: "Aprendeu prompts soltos, vídeos de 2 horas, mas na prática nunca sabe por onde começar na sua rotina. O conteúdo nunca vira ação.",
  },
  {
    n: "03",
    t: "Vê todo mundo falando de IA, menos você fazendo",
    d: "A sensação de ficar pra trás aumenta a cada semana. Colegas começam a citar ferramentas que você nunca ouviu falar — e você finge que sabe.",
  },
];

export function Problem() {
  return (
    <section className="relative bg-section-alt section-pad">
      <div className="container-wide px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Diagnóstico</span>
          <h2 className="mt-6 h-section text-white">
            Você não tem problema com IA.
            <br />
            Você tem problema com <span className="text-gradient-lime">método</span>.
          </h2>
          <p className="mt-6 lede">
            Se algum dos três cenários abaixo soa familiar, você não está sozinho — e o
            problema não é você, é a forma como IA está sendo ensinada por aí.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:mt-20 md:grid-cols-3 md:gap-6">
          {pains.map((p) => (
            <div
              key={p.n}
              className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 md:p-8 transition-all duration-300 hover:border-[var(--lime)]/30 hover:bg-white/[0.03]"
            >
              <span className="font-display text-5xl md:text-6xl font-bold text-[var(--lime)]/30 leading-none transition-colors group-hover:text-[var(--lime)]/60">
                {p.n}
              </span>
              <h3 className="mt-5 h-sub text-white">{p.t}</h3>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-white/60">
                {p.d}
              </p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="mx-auto mt-16 md:mt-24 max-w-3xl border-l-2 border-[var(--lime)] pl-6 md:pl-8">
          <p className="font-display text-xl md:text-2xl lg:text-3xl leading-snug text-white/90 italic">
            "O problema não é a ferramenta. É ninguém ter te mostrado como encaixar ela no
            seu trabalho de verdade."
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/45">
            — Mariana Marques
          </p>
        </div>
      </div>
    </section>
  );
}
