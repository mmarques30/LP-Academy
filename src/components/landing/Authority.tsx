import { Instagram, Youtube, Music2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Authority() {
  return (
    <section className="section-pad bg-[var(--surface-alt)]">
      <div className="container-narrow grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border-2 border-[var(--brand)]/60 bg-[#1A1F10]">
            <div className="aspect-[4/5] bg-gradient-to-br from-[#222820] via-[#1A1F10] to-[#0E1308] flex items-end p-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--brand-bright)]">Fundadora</p>
                <p className="font-display text-2xl font-extrabold text-[var(--offwhite)]">Mariana Marques</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-3xl font-extrabold text-[var(--offwhite)] md:text-5xl">
            Oi, eu sou a Mari. <span aria-hidden>🤓</span>
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-[var(--sage)]">
            <p>
              Eu não vim da tecnologia. Vim do trabalho real. E foi quando IA apareceu na minha frente
              que percebi: a maioria das empresas não sabia o que fazer com isso. A maioria dos
              profissionais também não.
            </p>
            <p>
              Montei a IAplicada porque cansei de ver pessoas super inteligentes paradas na dúvida de
              "qual curso fazer primeiro". Em 3 anos, formei mais de 2.000 profissionais dentro do
              Academy, atendi empresas como Natura, Ambev e Magazine Luiza na implementação de IA em
              times, e provei uma coisa: IA aplicada é mais barata, mais rápida e mais transformadora
              do que qualquer MBA.
            </p>
            <p>
              O Academy é onde eu coloco tudo que aprendo na prática. Toda semana. Pra você.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["+2.000", "alunos"],
              ["+80", "empresas"],
              ["+500h", "de mentoria"],
              ["3 anos", "construindo"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
                <p className="font-display text-2xl font-extrabold text-[var(--brand-bright)]">{n}</p>
                <p className="text-sm text-[var(--muted-foreground)]">{l}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[var(--sage)]">
            <a href="#" className="flex items-center gap-1.5 hover:text-[var(--brand-bright)]">
              <Instagram className="h-4 w-4" /> @marimarquescb
            </a>
            <a href="#" className="flex items-center gap-1.5 hover:text-[var(--brand-bright)]">
              <Youtube className="h-4 w-4" /> @iaplicadaa
            </a>
            <a href="#" className="flex items-center gap-1.5 hover:text-[var(--brand-bright)]">
              <Music2 className="h-4 w-4" /> @marimarquescb
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
