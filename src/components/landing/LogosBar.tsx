const logos = ["Nubank", "Ambev", "Magazine Luiza", "Natura", "iFood", "Amazon"];

export function LogosBar() {
  return (
    <section className="border-y border-white/8 bg-[var(--surface)] py-10">
      <div className="container-narrow px-6">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
          Alunos em empresas como
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.map((l) => (
            <span
              key={l}
              className="font-display text-lg font-semibold text-white/55 md:text-xl"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
