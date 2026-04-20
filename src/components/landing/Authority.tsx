import { motion } from "framer-motion";
import { Instagram, Youtube, Linkedin, ArrowRight } from "lucide-react";

const credentials = [
  "+3 anos construindo a IAplicada, formou mais de 2.000 profissionais",
  "Consultoria de IA para times em empresas como Natura, Ambev e Magazine Luiza",
  "Criadora do método APLICA — do diagnóstico à automação em 6 passos",
  "+12M de visualizações em conteúdos sobre IA aplicada ao trabalho",
  "Mentora no LinkedIn, YouTube e Instagram — conteúdo prático toda semana",
  "Construiu a MarIAna, agente IA treinado com toda a sua expertise",
];

const stats = [
  ["+2.000", "Aplicados formados"],
  ["+80", "empresas atendidas"],
  ["+500h", "de mentoria ao vivo"],
  ["4.9/5", "nota média"],
];

export function Authority() {
  return (
    <section className="section-pad bg-section-dark text-[var(--offwhite)]">
      <div className="container-narrow px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 1, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[32px] bg-[var(--brand)]/20 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[28px] ring-1 ring-[var(--brand)]/30">
              <div className="aspect-[4/5] bg-gradient-to-br from-[var(--brand)]/20 via-[var(--cocoa)] to-[var(--ink)] flex items-end p-7">
                <div>
                  <span className="eyebrow-dark">Fundadora · IAplicada</span>
                  <p className="mt-4 font-display text-4xl font-black text-[var(--offwhite)] leading-[0.95]">
                    Mariana<br />Marques
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-5">
              <a href="#" aria-label="Instagram" className="text-[var(--offwhite)]/70 hover:text-[var(--brand-bright)]">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="YouTube" className="text-[var(--offwhite)]/70 hover:text-[var(--brand-bright)]">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[var(--offwhite)]/70 hover:text-[var(--brand-bright)]">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="eyebrow-dark">Quem vai te guiar</span>
            <h2 className="mt-5 h-section !text-[var(--offwhite)]">
              Oi, eu sou a <span className="text-gradient-brand">Mari.</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--offwhite)]/80 md:text-lg">
              <p>
                Eu não vim da tecnologia. Vim do trabalho real — produto, operação, liderança. Quando IA
                apareceu, percebi que a maioria das empresas não sabia o que fazer com isso. E os
                profissionais brilhantes também não.
              </p>
              <p>
                Criei a IAplicada pra resolver isso do meu jeito: sem hype, sem MBA de R$40 mil, sem
                ficar colecionando prompt no Notion. Um sistema prático, toda semana, com aula ao vivo,
                mentoria e uma comunidade que <em>aplica junto</em>.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3 text-[var(--offwhite)]/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                  <span className="text-sm md:text-base">{c}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map(([n, l]) => (
                <div
                  key={l}
                  className="rounded-2xl border border-[var(--brand)]/20 bg-[var(--brand)]/5 p-4 text-center"
                >
                  <p className="font-display text-2xl font-black text-[var(--brand-bright)]">{n}</p>
                  <p className="mt-1 text-xs text-[var(--offwhite)]/70">{l}</p>
                </div>
              ))}
            </div>

            <a
              href="#oferta"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-7 py-3.5 text-sm font-bold text-[var(--cocoa)] transition-all hover:bg-[var(--brand-bright)] hover:scale-[1.02]"
            >
              Quero ser guiada pela Mari
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
