import { motion } from "framer-motion";
import { Gift } from "lucide-react";

/**
 * Coluna esquerda da LP /indicacaoacademy — bloco fixo de pitch:
 *   - Chip "+ INDIQUE E GANHE MENTORIA"
 *   - H1 com palavra em itálico-brand
 *   - Sub explicando o programa em 3 linhas
 *   - Card "O que você ganha" com a recompensa (mentoria + brinde)
 *
 * A quote ("A gente vai mais longe quando vai acompanhado") foi
 * movida pra abaixo do form (no route) — vira momento de respiro
 * pós-CTA em vez de competir com o conteúdo do hero. Pediu Mari.
 *
 * Tudo configurado pra leitura rápida — Mari pediu versão objetiva.
 */
export function IndicacaoHero() {
  return (
    <div className="flex flex-col gap-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="eyebrow">+ Indique e ganhe mentoria</span>

        <h1 className="mt-7 h-display text-[var(--cocoa)]">
          Chama aquele amigo que{" "}
          <span className="serif-italic text-[var(--brand-dark)]">
            precisa
          </span>{" "}
          aplicar IA de verdade
        </h1>

        <p className="mt-6 max-w-xl text-[16px] leading-[1.6] text-[var(--cocoa-soft)] md:text-[17px]">
          Sabe aquela pessoa que vive falando que quer entrar de cabeça em
          IA, mas não sabe por onde começar? Indica ela pra comunidade do
          Academy. Vocês evoluem juntos e você ainda ganha mentoria com a
          Mari por isso.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="overflow-hidden rounded-2xl border border-[var(--cocoa)]/10 bg-[var(--offwhite)]"
      >
        <div className="border-b border-[var(--cocoa)]/10 px-6 py-5">
          <span className="mono-label text-[var(--cocoa-soft)]">
            O que você ganha
          </span>
          <h3 className="mt-2 font-display text-[20px] leading-[1.3] text-[var(--cocoa)] md:text-[22px]">
            Mentoria com a Mari pra quem indica
          </h3>
        </div>

        <div className="bg-[var(--cream)] px-6 py-7 text-center">
          <p className="font-display text-[15px] font-semibold text-[var(--brand-dark)]">
            +1 amigo assinar o Academy
          </p>
          <p className="mt-3 font-display text-[56px] font-bold leading-none text-[var(--cocoa)] md:text-[64px]">
            1,5h
          </p>
          <p className="mt-2 mono-label text-[var(--cocoa-soft)]">
            de mentoria com a Mari
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 border-t border-[var(--cocoa)]/10 bg-[var(--offwhite)] px-6 py-4">
          <Gift className="h-4 w-4 text-[var(--brand-dark)]" />
          <span className="font-display text-[14px] text-[var(--cocoa)]">
            + um brinde surpresa
          </span>
        </div>
      </motion.div>
    </div>
  );
}
