import { motion } from "framer-motion";
import { Play, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-hero relative pt-32 pb-16 md:pt-36 md:pb-20">
      <div className="container-narrow px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow">Academy · Assinatura</span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
            Aplique IA no seu trabalho{" "}
            <span className="text-[var(--accent)]">antes que peçam isso de você.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
            A assinatura onde CLTs, líderes e empreendedores aprendem, aplicam e
            viram referência em IA — sem precisar virar engenheiro.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_40px_120px_-40px_hsl(80_78%_56%/0.35)]">
            <div className="relative aspect-video w-full">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 40%, hsl(80 78% 56% / 0.14) 0%, transparent 70%), linear-gradient(180deg, hsl(0 0% 8%) 0%, hsl(0 0% 4%) 100%)",
                }}
              />
              <button
                type="button"
                aria-label="Assistir apresentação"
                className="group absolute inset-0 flex items-center justify-center"
              >
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[var(--accent)] shadow-[0_0_0_0_hsl(80_78%_56%/0.5)] transition-transform duration-300 group-hover:scale-105 md:h-24 md:w-24">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[var(--accent)] opacity-30" />
                  <Play className="relative ml-1 h-8 w-8 fill-black text-black md:h-10 md:w-10" />
                </span>
              </button>
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-white/60">
                <span className="rounded-full bg-black/60 px-3 py-1 backdrop-blur">
                  Mariana Marques · Fundadora
                </span>
                <span className="rounded-full bg-black/60 px-3 py-1 backdrop-blur">
                  08:42
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-4"
        >
          <a href="#oferta" className="btn-primary w-full sm:w-auto">
            Quero entrar no Academy
          </a>
          <p className="flex items-center gap-2 text-sm text-white/55">
            <ShieldCheck className="h-4 w-4 text-[var(--accent)]" />
            7 dias de garantia · Cancele quando quiser
          </p>
        </motion.div>
      </div>
    </section>
  );
}
