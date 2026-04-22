import { motion } from "framer-motion";
import { ArrowRight, Instagram, Youtube, Linkedin } from "lucide-react";

const MARI_PHOTO = "/mariana.jpg";

const credentials = [
  "+3 anos construindo a IAplicada",
  "Consultoria de IA em Natura, Ambev e Magazine Luiza",
  "Criadora do método APLICA",
  "+12M de views em IA aplicada ao trabalho",
];

const stats = [
  ["+700", "Aplicados"],
  ["+80", "empresas"],
  ["+500h", "de mentoria"],
  ["4,9", "satisfação"],
];

export function Authority() {
  return (
    <section id="fundadora" className="bg-section-dark relative overflow-hidden py-24 md:py-32 lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full blur-[140px]"
        style={{ background: "color-mix(in oklab, var(--brand) 15%, transparent)" }}
      />

      <div className="container-wide relative px-6">
        <span className="eyebrow-dark">04 — Fundadora</span>

        <div className="mt-10 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          {/* Foto da Mari — imagem grande editorial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[28px] ring-1 ring-[var(--offwhite)]/10">
              <div className="aspect-[4/5]">
                <img
                  src={MARI_PHOTO}
                  alt="Mariana Marques"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 grain mix-blend-multiply opacity-40"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/70 to-transparent p-7 pt-24">
                <p className="mono-label text-[var(--brand)]">Mariana Marques</p>
                <p className="mt-2 font-display text-3xl text-[var(--offwhite)] md:text-4xl">
                  Fundadora &<br />
                  <span className="serif-italic">professora-chefe</span>
                </p>
              </div>
            </div>

            {/* Redes sociais */}
            <div className="mt-6 flex items-center gap-5">
              <a href="#" aria-label="Instagram" className="flex items-center gap-2 text-sm text-[var(--offwhite)]/60 transition-colors hover:text-[var(--brand)]">
                <Instagram className="h-4 w-4" /> @marimarquescb
              </a>
              <a href="#" aria-label="YouTube" className="flex items-center gap-2 text-sm text-[var(--offwhite)]/60 transition-colors hover:text-[var(--brand)]">
                <Youtube className="h-4 w-4" /> @iaplicadaa
              </a>
              <a href="#" aria-label="LinkedIn" className="flex items-center gap-2 text-sm text-[var(--offwhite)]/60 transition-colors hover:text-[var(--brand)]">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Copy + stats */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <h2 className="h-section !text-[var(--offwhite)]">
              Oi, eu sou a <span className="serif-italic text-[var(--brand)]">Mari.</span>
            </h2>

            <div className="mt-8 space-y-5 text-[17px] leading-[1.6] text-[var(--offwhite)]/80">
              <p>
                Eu não vim da tecnologia — vim do trabalho real. Produto, operação,
                liderança. Quando IA chegou, vi a maioria das empresas travando e os
                profissionais brilhantes sem saber por onde começar.
              </p>
              <p>
                Criei a IAplicada pra resolver isso do meu jeito:{" "}
                <em className="serif-italic text-[var(--offwhite)]">sem hype, sem MBA de R$40 mil,
                sem Notion cheio de prompt.</em>{" "}
                Um sistema prático, toda semana, com aula ao vivo, mentoria e uma
                comunidade que aplica junto.
              </p>
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3 text-[15px] text-[var(--offwhite)]/85">
                  <span className="mt-2 h-1 w-4 shrink-0 bg-[var(--brand)]" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-[var(--offwhite)]/10 pt-10 sm:grid-cols-4">
              {stats.map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-3xl text-[var(--brand)] md:text-4xl">{n}</p>
                  <p className="mt-1.5 text-[12px] uppercase tracking-[0.18em] text-[var(--offwhite)]/55">
                    {l}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#investimento"
              className="mt-12 inline-flex items-center gap-2.5 rounded-full border border-[var(--brand)]/40 bg-[var(--brand)] px-7 py-3.5 text-[15px] font-medium text-[var(--cocoa)] transition-all hover:bg-[var(--brand-bright)]"
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
