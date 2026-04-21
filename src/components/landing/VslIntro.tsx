import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, ArrowDown, X } from "lucide-react";

const POSTER =
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&q=80";
// Substitua por sua VSL real:
const VIDEO_SRC =
  "https://cdn.coverr.co/videos/coverr-a-woman-working-on-her-laptop-2620/1080p.mp4";

const STORAGE_KEY = "iap-vsl-seen";

export function VslIntro() {
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    setVisible(true);
    // evita scroll no background
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  function dismiss() {
    if (typeof window === "undefined") return;
    sessionStorage.setItem(STORAGE_KEY, "1");
    videoRef.current?.pause();
    setVisible(false);
    document.body.style.overflow = "";
  }

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }

  function onTimeUpdate() {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--ink)] px-4 py-6 md:px-8"
          role="dialog"
          aria-label="Vídeo de abertura — IAplicada Academy"
        >
          {/* Glow de fundo */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 50%, color-mix(in oklab, var(--brand) 20%, transparent) 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grain opacity-30"
          />

          {/* Top bar */}
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-5 md:px-10 md:py-7">
            <div className="flex items-center gap-2.5 text-[var(--offwhite)]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand)] text-[var(--cocoa)] font-display text-base font-semibold">
                i
              </span>
              <span className="font-display text-sm tracking-tight md:text-base">
                IAplicada<span className="text-[var(--offwhite)]/50">/Academy</span>
              </span>
            </div>

            <button
              onClick={dismiss}
              className="group flex items-center gap-2 rounded-full border border-[var(--offwhite)]/15 px-4 py-2 text-[12px] font-medium uppercase tracking-[0.22em] text-[var(--offwhite)]/70 transition-all hover:border-[var(--offwhite)]/50 hover:text-[var(--offwhite)]"
            >
              <span className="hidden sm:inline">Pular intro</span>
              <span className="sm:hidden">Pular</span>
              <X className="h-3.5 w-3.5 transition-transform group-hover:rotate-90" />
            </button>
          </div>

          {/* Player */}
          <motion.div
            initial={{ scale: 0.96, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-5xl"
          >
            <div className="relative overflow-hidden rounded-[24px] border border-[var(--offwhite)]/10 bg-[var(--cocoa)] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.8)]">
              <div className="relative aspect-video">
                <video
                  ref={videoRef}
                  poster={POSTER}
                  src={VIDEO_SRC}
                  autoPlay
                  muted
                  playsInline
                  loop
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                  onTimeUpdate={onTimeUpdate}
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--cocoa)]/85 via-transparent to-[var(--cocoa)]/30"
                />

                {/* Legenda central — copy */}
                <div className="pointer-events-none absolute inset-0 flex items-end p-7 md:p-10">
                  <div className="max-w-[28ch] text-[var(--offwhite)]">
                    <span className="mono-label text-[var(--brand)]">Mensagem da Mari</span>
                    <p className="mt-3 font-display text-[clamp(1.6rem,3.2vw,2.75rem)] leading-[1.05]">
                      Por que IA ainda não{" "}
                      <span className="serif-italic text-[var(--brand)]">entrou no teu trabalho.</span>
                    </p>
                  </div>
                </div>

                {/* Play button central (só quando pausado) */}
                {!playing && (
                  <button
                    onClick={togglePlay}
                    aria-label="Reproduzir vídeo"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[var(--brand)] text-[var(--cocoa)] transition-transform hover:scale-110 md:h-24 md:w-24">
                      <span
                        aria-hidden
                        className="absolute inset-0 animate-ping rounded-full bg-[var(--brand)] opacity-40"
                      />
                      <Play className="relative h-8 w-8 translate-x-0.5 md:h-10 md:w-10" fill="currentColor" />
                    </span>
                  </button>
                )}
              </div>

              {/* Controles */}
              <div className="flex items-center gap-4 border-t border-[var(--offwhite)]/10 bg-[var(--ink)] px-5 py-4 md:px-6">
                <button
                  onClick={togglePlay}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--offwhite)]/10 text-[var(--offwhite)] transition-colors hover:bg-[var(--offwhite)]/20"
                  aria-label={playing ? "Pausar" : "Reproduzir"}
                >
                  {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" fill="currentColor" />}
                </button>

                <div className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-[var(--offwhite)]/15">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-[var(--brand)]"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <button
                  onClick={toggleMute}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--offwhite)]/10 text-[var(--offwhite)] transition-colors hover:bg-[var(--offwhite)]/20"
                  aria-label={muted ? "Ativar som" : "Silenciar"}
                >
                  {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Hint — "role pra ver mais" */}
            <button
              onClick={dismiss}
              className="group mx-auto mt-8 flex items-center gap-3 text-[var(--offwhite)]/55 transition-colors hover:text-[var(--offwhite)]"
            >
              <span className="mono-label">
                Continuar pra landing
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--offwhite)]/20 transition-all group-hover:border-[var(--brand)] group-hover:text-[var(--brand)]">
                <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
              </span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
