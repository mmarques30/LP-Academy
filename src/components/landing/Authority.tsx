import { Reveal } from "@/components/Reveal";

const stats = [
  { n: "+2.000", l: "Alunos formados" },
  { n: "+80", l: "Empresas atendidas" },
  { n: "3 anos", l: "Construindo" },
];

export function Authority() {
  return (
    <section id="historia" className="section-pad bg-[var(--surface)]">
      <div className="container-narrow grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[32px]"
              style={{
                background:
                  "radial-gradient(70% 70% at 50% 50%, hsl(80 78% 56% / 0.18) 0%, transparent 70%)",
              }}
            />
            <img
              src="/mariana.webp"
              alt="Mariana Marques, fundadora da IAplicada"
              className="relative w-full rounded-2xl border border-white/10 object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="eyebrow">Quem vai te ensinar</span>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-5xl">
            Oi, eu sou a Mari.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-white/70">
            <p>
              Não vim da tecnologia. Vim do trabalho real. Quando IA apareceu, percebi
              uma coisa: a maioria das empresas não sabia o que fazer com isso — e a
              maioria dos profissionais, também não.
            </p>
            <p>
              Em 3 anos formei mais de 2.000 pessoas dentro do Academy e atendi empresas
              como Natura, Ambev e Magazine Luiza. O que aprendi na prática, eu coloco
              aqui dentro. Toda semana. Pra você.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.l}>
                <p className="font-display text-3xl font-bold text-[var(--accent)] md:text-4xl">
                  {s.n}
                </p>
                <p className="mt-1 text-sm text-white/55">{s.l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
