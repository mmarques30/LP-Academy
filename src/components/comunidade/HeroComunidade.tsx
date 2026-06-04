import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ComunidadeForm } from "./ComunidadeForm";

const bullets = [
  "1 aula ao vivo por mês",
  "Plataforma gratuita aberta 24/7",
  "Dicas semanais no WhatsApp",
  "Comunidade de +700 Aplicados",
];

/**
 * Hero da LP /comunidade — mesma identidade visual do Hero da LP /
 * (cream background, cocoa text, brand accents). Split layout:
 * copy + bullets à esquerda (60%), form sticky à direita (40%).
 *
 * O VÍDEO NÃO MORA AQUI — vai numa dobra própria depois do hero
 * (VideoComunidade.tsx). Mari pediu pra desestruturar do hero.
 */
export function HeroComunidade() {
  return (
    <section className="relative overflow-hidden bg-hero-canvas pt-32 md:pt-36">
      <div className="container-wide relative px-6">
        <div className="grid items-start gap-12 pb-20 pt-16 md:pb-24 md:pt-20 lg:grid-cols-[1.5fr_1fr] lg:gap-16 lg:pb-28">
          {/* COLUNA ESQUERDA — copy + bullets */}
          <div className="flex flex-col">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 self-start rounded-full border border-[var(--brand-dark)]/30 bg-[var(--brand)]/15 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-dark)]"
            >
              <Sparkles className="h-3 w-3" />
              Comunidade gratuita · Aplicados
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 h-display text-[var(--cocoa)]"
            >
              Aprenda a usar IA<br />
              no seu trabalho.<br />
              <span className="serif-italic text-[var(--brand-dark)]">
                De graça. Todo mês.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-9 max-w-[58ch] text-[17px] leading-[1.6] text-[var(--cocoa-soft)] md:text-[19px]"
            >
              A IAplicada tem uma comunidade gratuita de profissionais que
              aplicam IA no trabalho de verdade. Toda semana, dicas práticas.
              Todo mês, uma aula ao vivo. Acesso permanente à nossa plataforma
              gratuita com prompts, ferramentas e mini-trilhas. Sem pegadinha,
              sem upsell agressivo, sem promessa de "fique milionário com IA".
            </motion.p>

            {/* Bullets de prova */}
            <motion.ul
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-[15px] text-[var(--cocoa)]"
                >
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-dark)]" />
                  <span>{b}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* COLUNA DIREITA — Form sticky */}
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
