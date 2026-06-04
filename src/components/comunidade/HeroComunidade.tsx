import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { HeroVslPlayer } from "@/components/landing/HeroVslPlayer";
import { ComunidadeForm } from "./ComunidadeForm";

const bullets = [
  "1 aula ao vivo por mês",
  "Plataforma gratuita aberta 24/7",
  "Dicas semanais no WhatsApp",
  "Comunidade de +700 Aplicados",
];

export function HeroComunidade() {
  return (
    <section className="relative overflow-hidden bg-[#141A0B] pt-28 text-[var(--offwhite)] md:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 30% 0%, color-mix(in oklab, var(--brand) 18%, transparent) 0%, transparent 60%)",
        }}
      />

      <div className="container-wide relative px-6">
        <div className="grid items-start gap-12 py-16 md:py-20 lg:grid-cols-[1.5fr_1fr] lg:gap-16 lg:py-24">
          {/* COLUNA ESQUERDA — copy + vídeo */}
          <div className="flex flex-col">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 self-start rounded-full border border-[var(--brand)]/35 bg-[var(--brand)]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand)]"
            >
              <Sparkles className="h-3 w-3" />
              Comunidade gratuita · Aplicados
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 font-display text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.05] tracking-tight text-[var(--offwhite)]"
            >
              Aprenda a usar IA<br />
              no seu trabalho.<br />
              <span className="text-[#BDD64A]">De graça. Todo mês. Sem catch.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-7 max-w-[58ch] text-[16px] leading-[1.6] text-[#D4DEB3] md:text-[17px]"
            >
              A IAplicada tem uma comunidade gratuita de profissionais que
              aplicam IA no trabalho de verdade. Toda semana, dicas práticas.
              Todo mês, uma aula ao vivo. Acesso permanente à nossa plataforma
              gratuita com prompts, ferramentas e mini-trilhas. Sem pegadinha,
              sem upsell agressivo, sem promessa de "fique milionário com IA".
            </motion.p>

            {/* Vídeo — reusa o HeroVslPlayer (mesmo VSL da LP /) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-12 max-w-[560px]"
            >
              <HeroVslPlayer />
            </motion.div>

            {/* Bullets de prova */}
            <motion.ul
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-[14px] text-[var(--offwhite)]/85"
                >
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" />
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
