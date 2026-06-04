import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { HeroVslPlayer } from "@/components/landing/HeroVslPlayer";

/**
 * Seção dedicada do vídeo — dobra própria depois do hero, em vez de
 * embutida na coluna esquerda do hero. Mari pediu pra desestruturar do
 * hero pra dar respiro visual + foco no vídeo.
 *
 * Reusa o HeroVslPlayer da LP / (mesmo VSL, mesmo modal auto-open
 * 5s, mesmo controle mute/unmute). Os cards flutuantes laterais
 * (Satisfação 4,9 + Método APLICA) ficam, pra reforçar autoridade.
 */
export function VideoComunidade() {
  return (
    <section className="section-pad bg-[var(--offwhite)]">
      <div className="container-wide px-6">
        {/* Copy intro centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-dark)]">
            <Sparkles className="h-3 w-3" />
            Conheça a IAplicada
          </span>
          <h2 className="mt-7 h-section text-[var(--cocoa)]">
            Veja em 3 minutos{" "}
            <span className="serif-italic text-[var(--brand-dark)]">
              como é por dentro.
            </span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-[17px] leading-[1.55] text-[var(--cocoa-soft)] md:text-[19px]">
            A Mari conta, sem rodeio, o que você encontra na comunidade
            gratuita — e por que +700 profissionais já estão dentro.
          </p>
        </motion.div>

        {/* Player centralizado, max-width pra não estourar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-14 max-w-[640px]"
        >
          <HeroVslPlayer />
        </motion.div>
      </div>
    </section>
  );
}
