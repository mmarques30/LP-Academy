import { Reveal } from "@/components/Reveal";

export function FinalCTA() {
  return (
    <section className="section-pad bg-cta-gradient">
      <div className="container-narrow text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-[var(--offwhite)] md:text-5xl">
            Na próxima segunda-feira,{" "}
            <span className="text-[var(--brand-bright)]">você pode estar aplicando.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--sage)]">
            Ou começar mais uma semana repetindo tarefa que IA já faz sozinha há dois anos.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3">
            <a href="#oferta" className="btn-primary text-base md:text-lg !px-8 !py-4">
              Entrar pro Academy agora · R$ 147/mês
            </a>
            <p className="text-sm text-[var(--muted-foreground)]">
              Sem fidelidade · Garantia de 7 dias · Suporte humano
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
