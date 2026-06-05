import { motion } from "framer-motion";
import { ComunidadeForm } from "./ComunidadeForm";

/**
 * Hero da LP /comunidade — light theme cream/cocoa igual ao Hero
 * da LP /. Split 50/50: copy à esquerda, form sticky à direita
 * (Mari pediu pra alargar o form que estava muito fino antes).
 *
 * Ajustes da última passada:
 *  - Título menor (não usa h-display gigante) e focado em gratuidade
 *    em vez de transformação
 *  - Bullets de prova REMOVIDOS do hero (estavam empilhando muito
 *    conteúdo no primeiro fold)
 *  - Parágrafo descritivo encurtado — removida a linha sobre
 *    "sem pegadinha / upsell / fique milionário" que era ruído
 */
export function HeroComunidade() {
  return (
    <section className="relative overflow-hidden bg-hero-canvas pt-32 md:pt-36">
      <div className="container-wide relative px-6">
        <div className="grid items-start gap-12 pb-20 pt-16 md:pb-24 md:pt-20 lg:grid-cols-2 lg:gap-12 lg:pb-28">
          {/* COLUNA ESQUERDA — só copy (sem bullets) */}
          <div className="flex flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tight text-[var(--cocoa)]"
            >
              Aula de IA todo mês.
              <br />
              <span className="serif-italic text-[var(--brand-dark)]">
                De graça.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-8 max-w-[58ch] text-[17px] leading-[1.6] text-[var(--cocoa-soft)] md:text-[19px]"
            >
              Comunidade gratuita da IAplicada com{" "}
              <strong className="text-[var(--cocoa)]">aula ao vivo todo mês</strong>,
              acesso à nossa <strong className="text-[var(--cocoa)]">plataforma
              gratuita</strong> com prompts e mini-trilhas, e grupo no WhatsApp
              pra trocar com quem aplica.
            </motion.p>
          </div>

          {/* COLUNA DIREITA — Form sticky (mais largo agora, 50/50) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="lg:sticky lg:top-28"
          >
            <ComunidadeForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
