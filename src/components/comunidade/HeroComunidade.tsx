import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { ComunidadeForm } from "./ComunidadeForm";

const bullets = [
  "1 aula ao vivo por mês",
  "Plataforma gratuita aberta 24/7",
  "Comunidade de +700 Aplicados",
  "Newsletter quinzenal",
];

/**
 * Hero da LP /comunidade — light theme cream/cocoa igual ao Hero
 * da LP /. Split 60/40: copy + bullets à esquerda, form sticky à
 * direita (Opção B do briefing). O vídeo NÃO mora aqui — vai em
 * dobra própria depois (VideoComunidade.tsx).
 *
 * Removidos os ícones de brilho (Sparkles) que Mari sinalizou que
 * eram demais: chip do topo do hero foi tirado, bullets usam Check
 * (mesmo ícone dos bullets do form da LP /).
 */
export function HeroComunidade() {
  return (
    <section className="relative overflow-hidden bg-hero-canvas pt-32 md:pt-36">
      <div className="container-wide relative px-6">
        <div className="grid items-start gap-12 pb-20 pt-16 md:pb-24 md:pt-20 lg:grid-cols-[1.5fr_1fr] lg:gap-16 lg:pb-28">
          {/* COLUNA ESQUERDA — copy + bullets */}
          <div className="flex flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="h-display text-[var(--cocoa)]"
            >
              Aprenda IA na prática.<br />
              <span className="serif-italic text-[var(--brand-dark)]">
                Uma aula por mês, de graça.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-9 max-w-[58ch] text-[17px] leading-[1.6] text-[var(--cocoa-soft)] md:text-[19px]"
            >
              Comunidade gratuita da IAplicada com{" "}
              <strong className="text-[var(--cocoa)]">aula ao vivo todo mês</strong>,
              acesso à nossa <strong className="text-[var(--cocoa)]">plataforma
              gratuita</strong> com prompts e mini-trilhas, e grupo no WhatsApp
              pra trocar com quem aplica. Sem pegadinha, sem upsell agressivo,
              sem promessa de "fique milionário com IA".
            </motion.p>

            {/* Bullets de prova — ícone Check (mesmo padrão da LP /) */}
            <motion.ul
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 grid grid-cols-1 gap-3.5 sm:grid-cols-2"
            >
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-[15px] text-[var(--cocoa)]"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-[var(--cocoa)]">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* COLUNA DIREITA — Form sticky (destino do botão CTA do header) */}
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
