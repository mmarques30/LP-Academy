import { Reveal } from "@/components/Reveal";
import { Check } from "lucide-react";

const stack = [
  { title: "Acesso a 18 trilhas completas", value: "R$ 1.997" },
  { title: "Aulas ao vivo toda segunda-feira (1 ano)", value: "R$ 2.497" },
  { title: "Q&As quinzenais com a Mari", value: "R$ 1.497" },
  { title: "Biblioteca de +100 prompts testados", value: "R$ 497" },
  { title: "Catálogo de +50 ferramentas", value: "R$ 297" },
  { title: "Comunidade Aplicados", value: "R$ 397/ano" },
  { title: "Bônus 1 · Workshop \"Mapeie sua segunda-feira\"", value: "R$ 297" },
  { title: "Bônus 2 · 100+ prompts prontos liberados no dia 1", value: "R$ 197" },
  { title: "Bônus 3 · MarIAna, assistente IA dos Aplicados", value: "R$ 97/mês" },
  { title: "Bônus 4 · Trilha Express \"Primeiros 30 dias\"", value: "R$ 147" },
];

export function ValueStack() {
  return (
    <section className="section-pad bg-[var(--surface-alt)]">
      <div className="container-narrow">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold leading-tight text-[var(--offwhite)] md:text-5xl">
              Se você fosse comprar tudo isso separado,
              <br />
              pagaria <span className="text-[var(--brand-bright)]">mais de R$ 7.900.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[var(--sage)]">
              Dentro do Academy, você tem tudo por um valor que cabe no cafezinho do dia.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
            <ul className="divide-y divide-[var(--border)]">
              {stack.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center justify-between gap-4 px-5 py-4 md:px-7"
                >
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand)]" />
                    <span className="text-[var(--offwhite)]">{item.title}</span>
                  </div>
                  <span className="shrink-0 font-display text-sm font-bold text-[var(--sage)] md:text-base">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>

            <div className="grid gap-3 border-t border-[var(--border)] bg-[#1A1F10] px-5 py-5 md:grid-cols-2 md:items-center md:gap-6 md:px-7">
              <div className="flex items-center justify-between gap-3 md:justify-start">
                <span className="text-sm uppercase tracking-widest text-[var(--muted-foreground)]">
                  Valor total
                </span>
                <span className="font-display text-2xl font-extrabold text-[var(--muted-foreground)] line-through md:text-3xl">
                  R$ 7.920
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 md:justify-end">
                <span className="text-sm uppercase tracking-widest text-[var(--brand-bright)]">
                  Seu investimento hoje
                </span>
                <span className="font-display text-3xl font-extrabold text-[var(--brand-bright)] md:text-4xl">
                  R$ 147<span className="text-base font-normal text-[var(--sage)]">/mês</span>
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm text-[var(--muted-foreground)]">
            Menos de R$ 5 por dia. Sem fidelidade. Você só continua se fizer sentido.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
