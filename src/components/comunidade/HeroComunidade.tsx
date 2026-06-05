import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { ComunidadeForm } from "./ComunidadeForm";

/**
 * Hero da LP /comunidade — espelha EXATAMENTE as proporções do Hero
 * da LP / (anexo 2 que a Mari mandou):
 *   - grid lg:grid-cols-[1.1fr_0.9fr] lg:items-end → mesma proporção
 *     copy/conteúdo-da-direita do home
 *   - Título em h-display (clamp 3rem → 7.5rem) com 3 linhas via <br>
 *     pra manter o mesmo peso visual do home
 *   - Parágrafo: mt-9, max-w-[46ch], text 17/19px (idêntico ao home)
 *   - Social proof no fundo da coluna copy (avatares + stars + rating)
 *     pra dar o mesmo balanço visual do home — com items-end ele alinha
 *     o bottom com o bottom do form
 *   - Coluna direita: form no lugar do vídeo, ocupando proporção igual
 *
 * Diferença vs home /: a coluna direita tem o form (não vídeo); o
 * conteúdo da copy é focado em gratuidade (não venda do Academy).
 */

const SOCIAL_PROOF_AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
];

export function HeroComunidade() {
  return (
    <section className="relative overflow-hidden bg-hero-canvas pt-32 md:pt-36">
      <div className="container-wide relative px-6">
        <div className="grid gap-14 pb-24 pt-16 md:pb-28 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12 lg:pt-28">
          {/* COLUNA ESQUERDA — copy */}
          <div className="flex flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="h-display text-[var(--cocoa)]"
            >
              Aula de IA<br />
              todo mês.<br />
              <span className="serif-italic text-[var(--brand-dark)]">
                De graça.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-9 max-w-[46ch] text-[17px] leading-[1.55] text-[var(--cocoa-soft)] md:text-[19px]"
            >
              Comunidade gratuita da IAplicada com{" "}
              <strong className="text-[var(--cocoa)]">aula ao vivo todo mês</strong>,
              acesso à nossa <strong className="text-[var(--cocoa)]">plataforma
              gratuita</strong> com prompts e mini-trilhas, e grupo no WhatsApp
              pra trocar com quem aplica.
            </motion.p>

            {/* Social proof — mesmo padrão visual do home Hero (avatares
                + rating). Com items-end no grid, alinha com o fim do
                form na coluna direita. */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[var(--cocoa)]/10 pt-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {SOCIAL_PROOF_AVATARS.map((u, i) => (
                    <img
                      key={i}
                      src={u}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      width={36}
                      height={36}
                      className="img-warm h-9 w-9 rounded-full border-2 border-[var(--cream)] object-cover"
                    />
                  ))}
                </div>
                <span className="text-sm text-[var(--cocoa-soft)]">
                  <strong className="font-semibold text-[var(--cocoa)]">+700</strong>{" "}
                  Aplicados ativos
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 text-[var(--brand-dark)]">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-[var(--cocoa-soft)]">
                  <strong className="font-semibold text-[var(--cocoa)]">4,9/5</strong>{" "}
                  em 380+ avaliações
                </span>
              </div>
            </motion.div>
          </div>

          {/* COLUNA DIREITA — Form no lugar do vídeo (mesma proporção) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            <ComunidadeForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
