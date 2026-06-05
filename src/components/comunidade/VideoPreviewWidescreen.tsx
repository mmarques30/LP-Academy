import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Volume2, X } from "lucide-react";
import { trackEvent, EVENTS } from "@/lib/analytics";

/**
 * Player de VSL no formato WIDESCREEN (16:9) usado na seção de vídeo
 * da LP /comunidade.
 *
 * Diferenças vs HeroVslPlayer (que é usado na LP /):
 *  - Aspect ratio 16:9 (não 4:5 portrait com foto da Mari)
 *  - O "poster" É o próprio vídeo tocando MUDO em loop a partir do
 *    segundo 0:03 — sem usar a foto estática mariana.jpg
 *  - Sem floating cards laterais (Satisfação / APLICA) — visual
 *    mais limpo focado só no vídeo
 *
 * Comportamento PRESERVADO da LP /:
 *  - Click no overlay → abre modal com o vídeo COMPLETO + SOM
 *  - Auto-open após 5s na página (mute fallback + overlay "Ativar som")
 *  - 1× por sessão (sessionStorage shared com HeroVslPlayer)
 *  - ESC fecha, scroll travado quando aberto
 *
 * Por que o preview muted funciona com autoplay:
 *  Browsers permitem autoplay MUDO sem gesture. Com mute=1 + autoplay=1
 *  no embed do YouTube, o iframe toca silenciosamente assim que monta.
 */

const YOUTUBE_ID = "iVC_szCBrnU";

// Segundo do vídeo onde a preview começa. A Mari pediu 0:03 pra pular
// o início vazio e cair direto na mensagem visualmente interessante.
const PREVIEW_START_SECONDS = 3;

const AUTO_OPEN_DELAY_MS = 5000;

// Mesma key que o HeroVslPlayer da LP / usa — se a pessoa ver o
// auto-open na LP / e depois ir pra /comunidade, não vê de novo.
// Se ver na /comunidade primeiro, idem na LP /. Coerência cross-LP.
const AUTO_OPEN_SESSION_KEY = "vsl-auto-opened-v1";

type ClarityCommand = "playVideo" | "pauseVideo" | "mute" | "unMute";

/**
 * URL do iframe de PREVIEW — autoplay muted loop começando em 0:03.
 *
 * Notas dos params YouTube:
 *  - autoplay=1 + mute=1: permitido por todos os browsers (mute é
 *    o tradeoff pra autoplay funcionar sem gesture do usuário)
 *  - controls=0: esconde controles do player (interface limpa)
 *  - loop=1 + playlist=ID: loop infinito (YouTube exige playlist
 *    com o próprio ID pra ativar loop)
 *  - start=3: começa no segundo 3 da primeira execução
 *  - playsinline=1: iOS Safari toca inline em vez de fullscreen
 *  - modestbranding=1 + rel=0: menos branding YouTube + sem
 *    vídeos relacionados no final
 */
function buildPreviewSrc() {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    controls: "0",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    start: String(PREVIEW_START_SECONDS),
    loop: "1",
    playlist: YOUTUBE_ID,
    enablejsapi: "1",
  });
  return `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?${params.toString()}`;
}

/**
 * URL do iframe do MODAL — vídeo completo com som, controles e tudo.
 * Começa em 0:00 (não em 0:03 como o preview).
 */
function buildFullSrc() {
  const origin =
    typeof window !== "undefined"
      ? `&origin=${encodeURIComponent(window.location.origin)}`
      : "";
  return `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?enablejsapi=1&rel=0&modestbranding=1&playsinline=1${origin}`;
}

function postCommand(iframe: HTMLIFrameElement | null, func: ClarityCommand) {
  try {
    iframe?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "*",
    );
  } catch {
    /* noop */
  }
}

function hasAutoOpenedThisSession(): boolean {
  try {
    return (
      typeof window !== "undefined" &&
      sessionStorage.getItem(AUTO_OPEN_SESSION_KEY) === "1"
    );
  } catch {
    return false;
  }
}

function markAutoOpened(): void {
  try {
    sessionStorage.setItem(AUTO_OPEN_SESSION_KEY, "1");
  } catch {
    /* SSR ou storage desabilitado — sem problema */
  }
}

export function VideoPreviewWidescreen() {
  const [open, setOpen] = useState(false);
  const [autoOpenedMuted, setAutoOpenedMuted] = useState(false);
  const modalIframeRef = useRef<HTMLIFrameElement | null>(null);
  const userInteractedRef = useRef(false);
  const hasRealVideo = (YOUTUBE_ID as string) !== "YOUR_VSL_ID_HERE";

  // Auto-open do modal após 5s — só uma vez por sessão e nunca se
  // a pessoa já tiver interagido (clicado pra abrir, etc).
  useEffect(() => {
    if (!hasRealVideo) return;
    if (hasAutoOpenedThisSession()) return;

    const id = setTimeout(() => {
      if (userInteractedRef.current) return;
      markAutoOpened();
      setAutoOpenedMuted(true);
      setOpen(true);
      trackEvent(EVENTS.VSL_AUTO_OPEN);
    }, AUTO_OPEN_DELAY_MS);

    return () => clearTimeout(id);
  }, [hasRealVideo]);

  // Quando o modal abre/fecha: trava scroll, escuta ESC, manda
  // mute/unMute + play/pause pro iframe do modal via postMessage.
  useEffect(() => {
    if (!open) {
      postCommand(modalIframeRef.current, "pauseVideo");
      return;
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (autoOpenedMuted) {
      postCommand(modalIframeRef.current, "mute");
    } else {
      postCommand(modalIframeRef.current, "unMute");
    }
    postCommand(modalIframeRef.current, "playVideo");

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, autoOpenedMuted]);

  const handleClose = useCallback(() => {
    userInteractedRef.current = true;
    setOpen(false);
    setAutoOpenedMuted(false);
    trackEvent(EVENTS.VSL_CLOSE);
  }, []);

  const handleManualOpen = useCallback(() => {
    if (!hasRealVideo) return;
    userInteractedRef.current = true;
    setAutoOpenedMuted(false);
    setOpen(true);
    trackEvent(EVENTS.VSL_PLAY_MANUAL);
  }, [hasRealVideo]);

  const handleUnmute = useCallback(() => {
    postCommand(modalIframeRef.current, "unMute");
    setAutoOpenedMuted(false);
    trackEvent(EVENTS.VSL_UNMUTE);
  }, []);

  return (
    <>
      {/* PREVIEW WIDESCREEN — iframe muted looping (sem foto estática) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-full max-w-[900px]"
      >
        <div className="relative aspect-video overflow-hidden rounded-[24px] bg-[var(--cocoa-soft)] shadow-[0_40px_100px_-40px_rgba(13,13,13,0.4)] ring-1 ring-[var(--cocoa)]/10">
          {/* Iframe de preview — começa em 0:03, muted, loop infinito.
              loading=lazy garante que só baixa quando a seção entra
              em viewport, sem prejudicar LCP do hero. */}
          {hasRealVideo && (
            <iframe
              src={buildPreviewSrc()}
              title="Preview · Mensagem da Mari"
              allow="autoplay; encrypted-media; picture-in-picture"
              loading="lazy"
              className="absolute inset-0 h-full w-full border-0"
            />
          )}

          {/* Gradiente sutil só na parte de cima e de baixo, pra
              dar profundidade ao chip "Vídeo" e ao chip "Aula ao vivo".
              No meio (onde a Mari aparece) o vídeo fica visível e claro. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--cocoa)]/55 via-transparent to-[var(--cocoa)]/35"
          />

          {/* Faixa "VÍDEO" no topo */}
          <div className="pointer-events-none absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-[var(--offwhite)]/25 bg-[var(--cocoa)]/55 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--offwhite)] backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--brand)]" />
            Vídeo · Mensagem da Mari
          </div>

          {/* Click overlay — captura cliques antes que cheguem no
              iframe. Click → abre modal com som. */}
          <button
            type="button"
            onClick={handleManualOpen}
            aria-label="Assistir o vídeo da Mari com som"
            className="group absolute inset-0 flex flex-col items-center justify-center gap-4 focus:outline-none"
          >
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[var(--brand)] text-[var(--cocoa)] shadow-[0_10px_40px_-5px_rgba(175,192,64,0.55)] transition-transform duration-500 group-hover:scale-110 md:h-24 md:w-24">
              <span
                aria-hidden
                className="absolute inset-0 animate-ping rounded-full bg-[var(--brand)] opacity-35"
              />
              <Play
                className="relative h-8 w-8 translate-x-0.5 md:h-10 md:w-10"
                fill="currentColor"
              />
            </span>
            <span className="font-display text-lg text-[var(--offwhite)] md:text-xl">
              Clique pra assistir com som
            </span>
          </button>

          {/* Chip "Aula ao vivo" no canto inferior direito */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-end p-5 text-[var(--offwhite)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--offwhite)]/25 bg-[var(--cocoa)]/40 px-3.5 py-1.5 text-xs font-medium text-[var(--offwhite)] backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--brand)]" />
              Aula ao vivo · 1ª quarta do mês, 19h30
            </span>
          </div>
        </div>
      </motion.div>

      {/* MODAL — vídeo completo com som (auto-open após 5s ou click) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label="Mensagem da Mari"
            onClick={handleClose}
          >
            {/* Backdrop opaco com blur */}
            <div
              aria-hidden
              className="absolute inset-0 bg-[var(--cocoa)]/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-[min(1100px,calc(100vh*16/9-80px))]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={handleClose}
                aria-label="Fechar vídeo"
                className="absolute -top-12 right-0 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/20 md:-top-14"
              >
                <X className="h-4 w-4" />
                Fechar
              </button>

              <div className="relative aspect-video overflow-hidden rounded-2xl bg-black shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)] ring-1 ring-white/10">
                <iframe
                  ref={modalIframeRef}
                  src={buildFullSrc()}
                  title="VSL · Mariana Marques"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />

                {/* Overlay "Ativar som" — só quando o modal foi
                    auto-aberto (vídeo está mudo). Single tap → unmute. */}
                {autoOpenedMuted && (
                  <motion.button
                    type="button"
                    onClick={handleUnmute}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[var(--cocoa)]/35 text-[var(--offwhite)] backdrop-blur-[2px]"
                    aria-label="Ativar som do vídeo"
                  >
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--brand)] text-[var(--cocoa)] shadow-[0_20px_50px_-10px_rgba(175,192,64,0.6)] md:h-24 md:w-24">
                      <Volume2
                        className="h-10 w-10 md:h-12 md:w-12"
                        strokeWidth={2.2}
                      />
                    </span>
                    <span className="font-display text-lg md:text-2xl">
                      Toque para ativar o som
                    </span>
                    <span className="text-[12px] uppercase tracking-[0.22em] text-[var(--offwhite)]/65 md:text-[13px]">
                      A Mari já está falando
                    </span>
                  </motion.button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
