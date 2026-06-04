import { motion } from "framer-motion";
import { Instagram, Youtube } from "lucide-react";

const MARI_PHOTO = "https://i.ibb.co/NzfQDRG/final-composite-1.jpg";

const stats = [
  ["+700", "Aplicados ativos"],
  ["+40", "empresas atendidas"],
  ["3 anos", "construindo IAplicada"],
];

/**
 * Seção "Quem é a Mari" — segue o mesmo padrão visual do componente
 * Authority da LP /, em bg-section-dark (cocoa-soft) com a foto da
 * Mari em card vertical 4/5 + bio + stats + redes sociais.
 */
export function QuemEMariana() {
  return (
    <section
      id="fundadora"
      className="bg-section-dark relative overflow-hidden py-24 md:py-32 lg:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full blur-[140px]"
        style={{ background: "color-mix(in oklab, var(--brand) 15%, transparent)" }}
      />

      <div className="container-wide relative px-6">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          {/* Foto da Mari */}
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
                  decoding="async"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 grain mix-blend-multiply opacity-40"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/70 to-transparent p-7 pt-24">
                <p className="mono-label text-[var(--brand)]">Mariana Marques</p>
                <p className="mt-2 font-display text-3xl text-[var(--offwhite)] md:text-4xl">
                  <span className="serif-italic">Founder</span> IAplicada
                </p>
              </div>
            </div>

            {/* Redes sociais */}
            <div className="mt-6 flex items-center gap-5">
              <a
                href="https://www.instagram.com/marimarquescb/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-2 text-sm text-[var(--offwhite)]/60 transition-colors hover:text-[var(--brand)]"
              >
                <Instagram className="h-4 w-4" /> @marimarquescb
              </a>
              <a
                href="https://www.youtube.com/@iaplicadaa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex items-center gap-2 text-sm text-[var(--offwhite)]/60 transition-colors hover:text-[var(--brand)]"
              >
                <Youtube className="h-4 w-4" /> @iaplicadaa
              </a>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <h2 className="h-section !text-[var(--offwhite)]">
              Oi, eu sou a{" "}
              <span className="serif-italic text-[var(--brand)]">Mari.</span>
            </h2>

            <div className="mt-8 space-y-5 text-[17px] leading-[1.6] text-[var(--offwhite)]/80">
              <p>
                Eu fundei a IAplicada em 2023 porque cansei de ver gente boa
                parada na dúvida de "qual curso fazer primeiro". Comecei com
                uma comunidade gratuita de 12 pessoas. Hoje passa de 700.
              </p>
              <p>
                A comunidade gratuita é o{" "}
                <em className="serif-italic text-[var(--offwhite)]">
                  coração da IAplicada
                </em>
                . É onde a gente entrega, todo mês, conteúdo prático de IA
                aplicada. Sem promessa milagrosa, sem upsell agressivo, sem hype.
                Se um dia você quiser ir mais fundo, a gente tem o Academy.
                Mas a comunidade é completa por si só.
              </p>
            </div>

            {/* Mini barra de credibilidade — 3 stats */}
            <div className="mt-12 grid grid-cols-3 gap-x-6 gap-y-8 border-t border-[var(--offwhite)]/10 pt-10">
              {stats.map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-3xl text-[var(--brand)] md:text-4xl">
                    {n}
                  </p>
                  <p className="mt-1.5 text-[12px] uppercase tracking-[0.18em] text-[var(--offwhite)]/55">
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
