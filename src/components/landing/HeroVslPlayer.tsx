import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Volume2, X } from "lucide-react";
import { trackEvent, EVENTS } from "@/lib/analytics";

// VSL oficial: https://youtu.be/iVC_szCBrnU
const YOUTUBE_ID = "iVC_szCBrnU";

// Imagem hospedada no ibb.co (CDN externo). Antes apontava pra
// /public/mariana.jpg (484KB, 1536×2752) — era o LCP da LP e
// causava Lighthouse score de 57/100 com LCP de 15s. ibb.co serve
// a mesma imagem mas em conexão otimizada (HTTP/2, Cloudflare CDN).
const POSTER = "https://i.ibb.co/NzfQDRG/final-composite-1.jpg";

// Após quantos ms na LP o modal abre sozinho com o vídeo tocando MUDO.
// Política padrão de VSL — playVideo() com som sem gesture do usuário é
// bloqueado por Chrome/Safari/Firefox. Então abre mudo + botão "Ativar som".
const AUTO_OPEN_DELAY_MS = 5000;

// Storage key pra só auto-abrir UMA vez por sessão do browser
const AUTO_OPEN_SESSION_KEY = "vsl-auto-opened-v1";

type ClarityCommand = "playVideo" | "pauseVideo" | "mute" | "unMute";

// enablejsapi=1 permite controlar o iframe via postMessage (play/pause/mute)
// sem precisar carregar o YouTube IFrame Player API. origin=... fortalece
// segurança das mensagens.
function buildEmbedSrc() {
  const origin =
    typeof window !== "undefined" ? `&origin=${encodeURIComponent(window.location.origin)}` : "";
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
    return typeof window !== "undefined" && sessionStorage.getItem(AUTO_OPEN_SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function markAutoOpened(): void {
  try {
    sessionStorage.setItem(AUTO_OPEN_SESSION_KEY, "1");
  } catch {
    /* SSR ou storage desabilitado — sem problema, na pior cai pra default */
  }
}

export function HeroVslPlayer() {
  const [open, setOpen] = useState(false);
  const [primed, setPrimed] = useState(false);
  // Flag: o modal foi aberto automaticamente (após 5s)?
  // Se sim, o vídeo precisa tocar MUDO e mostrar overlay "Ativar som".
  // Se não (clique manual no play), toca com som direto (gesture válido).
  const [autoOpenedMuted, setAutoOpenedMuted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  // Se o usuário já interagiu (clicou no play OU fechou modal), não
  // aciona auto-open mesmo se o setTimeout ainda estiver pendente.
  const userInteractedRef = useRef(false);
  const hasRealVideo = (YOUTUBE_ID as string) !== "YOUR_VSL_ID_HERE";

  // Pre-monta o iframe DEPOIS do LCP terminar. Antes era 200ms, mas
  // o iframe do YouTube concorria com a foto da Mari por bandwidth,
  // contribuindo pro LCP de 15s no Clarity. 1500ms dá tempo do LCP
  // estabilizar antes do iframe começar a baixar.
  useEffect(() => {
    if (!hasRealVideo) return;
    const id = setTimeout(() => setPrimed(true), 1500);
    return () => clearTimeout(id);
  }, [hasRealVideo]);

  // Auto-abre o modal após AUTO_OPEN_DELAY_MS, no máximo 1x por sessão,
  // e nunca se o usuário já tiver interagido manualmente.
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
  // mute/unMute + play/pause pro iframe via postMessage.
  useEffect(() => {
    if (!open) {
      postCommand(iframeRef.current, "pauseVideo");
      return;
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Se foi auto-aberto: mute ANTES de play (browser exige pra autoplay).
    // Se foi clicado manualmente: garante que o som esteja ON.
    if (autoOpenedMuted) {
      postCommand(iframeRef.current, "mute");
    } else {
      postCommand(iframeRef.current, "unMute");
    }
    postCommand(iframeRef.current, "playVideo");

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
    // Reset: se ela reabrir manualmente, começa com som
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
    postCommand(iframeRef.current, "unMute");
    setAutoOpenedMuted(false);
    trackEvent(EVENTS.VSL_UNMUTE);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative lg:pl-10"
      >
        <div className="relative">
          <div className="relative overflow-hidden rounded-[28px] bg-[var(--cocoa-soft)] shadow-[0_40px_100px_-40px_rgba(13,13,13,0.4)] ring-1 ring-[var(--cocoa)]/10">
            <div className="relative aspect-[4/5]">
              <img
                src={POSTER}
                alt="Mariana Marques, fundadora da IAplicada"
                className="h-full w-full object-cover"
                loading="eager"
                /* @ts-expect-error fetchpriority é HTML válido recente; tipos do React ainda não cobrem */
                fetchpriority="high"
                decoding="async"
                sizes="(max-width: 1024px) 90vw, 50vw"
              />
              <div aria-hidden className="absolute inset-0 grain mix-blend-multiply opacity-40" />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[var(--cocoa)]/60 via-transparent to-transparent"
              />

              {/* Faixa "VÍDEO" no topo do poster pra ficar explícito que tem vídeo */}
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-[var(--offwhite)]/25 bg-[var(--cocoa)]/55 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--offwhite)] backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--brand)]" />
                Vídeo · Mensagem da Mari
              </div>

              <button
                type="button"
                onClick={handleManualOpen}
                aria-label="Assistir o vídeo da Mari"
                className="group absolute inset-0 flex flex-col items-center justify-center gap-4 focus:outline-none"
              >
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[var(--brand)] text-[var(--cocoa)] shadow-[0_10px_40px_-5px_rgba(175,192,64,0.55)] transition-transform duration-500 group-hover:scale-110 md:h-24 md:w-24">
                  <span
                    aria-hidden
                    className="absolute inset-0 animate-ping rounded-full bg-[var(--brand)] opacity-35"
                  />
                  <Play className="relative h-8 w-8 translate-x-0.5 md:h-10 md:w-10" fill="currentColor" />
                </span>
                <span className="font-display text-lg text-[var(--offwhite)] md:text-xl">
                  {hasRealVideo ? "Aperte play pra assistir" : "VSL placeholder — troque o YOUTUBE_ID"}
                </span>
              </button>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-end p-6 text-[var(--offwhite)]">
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--offwhite)]/25 bg-[var(--cocoa)]/40 px-3.5 py-1.5 text-xs font-medium text-[var(--offwhite)] backdrop-blur-md">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--brand)]" />
                  Aula ao vivo · seg, 19h30
                </span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="absolute -left-6 bottom-10 hidden rounded-2xl border border-[var(--cocoa)]/10 bg-white p-5 shadow-[0_20px_50px_-20px_rgba(13,13,13,0.15)] md:block"
          >
            <p className="mono-label text-[var(--cocoa-soft)]">Satisfação</p>
            <p className="mt-2 font-display text-4xl text-[var(--cocoa)]">
              4,9<span className="text-xl text-[var(--cocoa-soft)]">/5</span>
            </p>
            <p className="mt-1 text-xs text-[var(--cocoa-soft)]">380+ reviews</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="absolute -right-4 top-8 hidden rounded-2xl border border-[var(--cocoa)]/10 bg-[var(--brand)] p-4 shadow-[0_20px_50px_-20px_rgba(175,192,64,0.55)] md:block"
          >
            <p className="mono-label text-[var(--cocoa)]/80">Método</p>
            <p className="mt-1 font-display text-xl text-[var(--cocoa)]">APLICA</p>
            <p className="mt-0.5 text-xs text-[var(--cocoa)]/75">6 passos</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Backdrop do modal — só renderiza quando open. Animado via framer. */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[99] flex items-center justify-center px-4 py-6 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label="Mensagem da Mari"
            onClick={handleClose}
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-[var(--cocoa)]/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="relative z-[101] w-full max-w-[min(1100px,calc(100vh*16/9-80px))]"
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Iframe persistente — montado uma vez após hydrate. Quando fechado
          fica offscreen; quando aberto ocupa o slot do modal. Como o iframe
          NUNCA é desmontado, playVideo() executa instantâneo. */}
      {primed && hasRealVideo && (
        <div
          aria-hidden={!open}
          className={
            open
              ? "pointer-events-none fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 md:p-10"
              : "pointer-events-none fixed left-[-99999px] top-0 z-[-1] h-[360px] w-[640px] opacity-0"
          }
        >
          <div
            className={
              open
                ? "pointer-events-auto relative aspect-video w-full max-w-[min(1100px,calc(100vh*16/9-80px))] overflow-hidden rounded-2xl bg-black shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)] ring-1 ring-white/10"
                : "h-full w-full"
            }
          >
            <iframe
              ref={iframeRef}
              src={buildEmbedSrc()}
              title="VSL · Mariana Marques"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              loading="eager"
              className="absolute inset-0 h-full w-full border-0"
            />

            {/* Overlay "Ativar som" — só aparece quando o modal foi
                auto-aberto (vídeo está mudo). Single tap → unmute. */}
            {open && autoOpenedMuted && (
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
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--brand)] text-[var(--cocoa)] shadow-[0_20px_50px_-10px_rgba(175,192,64,0.6)] transition-transform duration-200 group-hover:scale-110 md:h-24 md:w-24">
                  <Volume2 className="h-10 w-10 md:h-12 md:w-12" strokeWidth={2.2} />
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
        </div>
      )}
    </>
  );
}
