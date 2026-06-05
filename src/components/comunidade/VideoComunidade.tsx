import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { VideoPreviewWidescreen } from "./VideoPreviewWidescreen";

/**
 * Seção dedicada de vídeo — dobra própria depois do hero da LP /comunidade.
 *
 * Usa o VideoPreviewWidescreen (formato 16:9) em vez do HeroVslPlayer
 * (formato 4:5 portrait com foto da Mari) — Mari pediu pra trocar
 * pro formato vídeo de verdade, sem a foto estática. O preview toca
 * muted em loop começando no segundo 0:03 (parte interessante do
 * vídeo), e o auto-open do modal após 5s na página continua igual
 * à LP / (mesma session key, mesma UX de mute + botão "Ativar som").
 */
export function VideoComunidade() {
  return (
    <section className="section-pad bg-[var(--offwhite)]">
      <div className="container-wide px-6">
        {/* Copy intro centralizada */}
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

        <div className="mt-14">
          <VideoPreviewWidescreen />
        </div>
      </div>
    </section>
  );
}
