import { motion } from "framer-motion";
import { Instagram, Sparkles, Youtube } from "lucide-react";

const MARI_PHOTO = "https://i.ibb.co/NzfQDRG/final-composite-1.jpg";

const stats = [
  ["+700", "Aplicados ativos"],
  ["+40", "empresas atendidas"],
  ["3 anos", "construindo IAplicada"],
];

export function QuemEMariana() {
  return (
    <section className="relative overflow-hidden bg-[#1A1F10] py-24 text-[var(--offwhite)] md:py-32">
      <div className="container-wide px-6">
        <div className="grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/5] max-w-[440px] overflow-hidden rounded-[28px] ring-1 ring-[var(--offwhite)]/10">
              <img
                src={MARI_PHOTO}
                alt="Mariana Marques, fundadora da IAplicada"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#141A0B]/40 via-transparent to-transparent"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
              <Sparkles className="h-3 w-3" />
              Sobre quem te recebe
            </p>
            <h2 className="mt-7 font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.1] tracking-tight text-[var(--offwhite)]">
              Oi, eu sou a <span className="serif-italic text-[#BDD64A]">Mari.</span>
            </h2>

            <div className="mt-8 space-y-5 text-[15.5px] leading-[1.65] text-[var(--offwhite)]/80 md:text-[17px]">
              <p>
                Eu fundei a IAplicada em 2023 porque cansei de ver gente boa
                parada na dúvida de "qual curso fazer primeiro". Comecei com
                uma comunidade gratuita de 12 pessoas. Hoje passa de 700.
              </p>
              <p>
                A comunidade gratuita é o coração da IAplicada. É onde a gente
                entrega, todo mês, conteúdo prático de IA aplicada. Sem promessa
                milagrosa, sem upsell agressivo, sem hype. Se um dia você quiser
                ir mais fundo, a gente tem o Academy. Mas a comunidade é completa
                por si só. Não é "isca pra venda". É o que mais gente recebe da
                gente, e é assim que eu quero que continue.
              </p>
            </div>

            {/* Mini barra de credibilidade (3 números) */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--offwhite)]/10 pt-8">
              {stats.map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-2xl text-[var(--brand)] md:text-3xl">
                    {n}
                  </p>
                  <p className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-[var(--offwhite)]/55">
                    {l}
                  </p>
                </div>
              ))}
            </div>

            {/* Redes sociais */}
            <div className="mt-8 flex flex-wrap items-center gap-5 text-[14px] text-[var(--offwhite)]/65">
              <a
                href="https://www.instagram.com/marimarquescb/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-[var(--brand)]"
              >
                <Instagram className="h-4 w-4" /> @marimarquescb
              </a>
              <a
                href="https://www.youtube.com/@iaplicadaa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-[var(--brand)]"
              >
                <Youtube className="h-4 w-4" /> @iaplicadaa
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
