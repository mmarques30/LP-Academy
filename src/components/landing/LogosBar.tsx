const logos = ["Itaú", "Ambev", "Magazine Luiza", "Nubank", "Natura", "Globo", "iFood", "Vivo"];

export function LogosBar() {
  return (
    <section className="bg-[var(--surface-alt)] py-14">
      <div className="container-narrow px-6">
        <p className="text-center text-sm uppercase tracking-widest text-[var(--muted-foreground)]">
          Empresas e profissionais que já aplicam IA com a IAplicada
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {logos.map((l) => (
            <div
              key={l}
              className="text-center font-display text-lg font-bold text-[var(--muted-foreground)]/70 transition-colors hover:text-[var(--sage)]"
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
