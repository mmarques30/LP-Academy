import { Reveal } from "@/components/Reveal";

export function FinalCTA() {
  return (
    <section className="section-pad bg-hero">
      <div className="container-narrow text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-[1.1] text-white md:text-6xl">
            Na próxima segunda-feira,
            <br />
            <span className="text-[var(--accent)]">você pode estar aplicando.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/60">
            Ou começar mais uma semana repetindo tarefa que a IA já faz há dois anos.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3">
            <a href="#oferta" className="btn-primary !px-10 !py-5 !text-base">
              Quero entrar no Academy
            </a>
            <p className="text-sm text-white/45">
              R$ 147/mês · sem fidelidade · 7 dias de garantia
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
