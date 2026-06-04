import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "A aula gratuita já me deu o caminho que 3 cursos pagos não deram.",
    name: "Ana P.",
    role: "Analista Mkt",
  },
  {
    quote: "Comunidade que entrega de verdade, sem enrolação.",
    name: "Rodrigo S.",
    role: "Vendas",
  },
  {
    quote: "Acompanho há 8 meses, ainda não paguei nada e já apliquei umas 15 coisas.",
    name: "Júlia C.",
    role: "Empreendedora",
  },
  {
    quote: "Conteúdo denso, sem hype, sem promessa milagrosa.",
    name: "Pedro A.",
    role: "Coordenador",
  },
  {
    quote: "Recomendei pra meu time inteiro.",
    name: "Camila R.",
    role: "RH",
  },
];

export function SocialProofRapida() {
  // Duplica a lista pra criar loop contínuo no marquee CSS
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden bg-[var(--cream)] py-14 md:py-16">
      <div className="container-wide px-6">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--cocoa-soft)]/70">
          Profissionais aplicando IA na rotina, todo dia
        </p>
      </div>

      <div className="relative mt-8 flex overflow-hidden">
        <div className="marquee flex shrink-0 items-stretch gap-4 px-6">
          {loop.map((t, i) => (
            <motion.div
              key={`${t.name}-${i}`}
              className="flex w-[280px] shrink-0 flex-col justify-between gap-4 rounded-2xl border border-[var(--cocoa)]/10 bg-[var(--offwhite)] p-5 md:w-[320px]"
            >
              <p className="text-[14px] leading-[1.5] text-[var(--cocoa)]">
                “{t.quote}”
              </p>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand)]/15 text-[12px] font-semibold uppercase text-[var(--brand-dark)]">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-[var(--cocoa)]">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-[var(--cocoa-soft)]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
