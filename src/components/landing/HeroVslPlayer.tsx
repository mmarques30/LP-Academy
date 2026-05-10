import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

// VSL oficial: https://youtu.be/iVC_szCBrnU
const YOUTUBE_ID = "iVC_szCBrnU";

const POSTER = "/mariana.jpg";

export function HeroVslPlayer() {
  const [open, setOpen] = useState(false);
  const hasRealVideo = YOUTUBE_ID !== "YOUR_VSL_ID_HERE";

  // ESC fecha + trava scroll do body enquanto o modal estiver aberto
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

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
              />
              <div aria-hidden className="absolute inset-0 grain mix-blend-multiply opacity-40" />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[var(--cocoa)]/60 via-transparent to-transparent"
              />

              <button
                type="button"
                onClick={() => hasRealVideo && setOpen(true)}
                aria-label="Reproduzir mensagem da Mari"
                className="group absolute inset-0 flex flex-col items-center justify-center gap-4 focus:outline-none"
              >
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[var(--brand)] text-[var(--cocoa)] shadow-[0_10px_40px_-5px_rgba(175,192,64,0.55)] transition-transform duration-500 group-hover:scale-110 md:h-24 md:w-24">
                  <span
                    aria-hidden
                    className="absolute inset-0 animate-ping rounded-full bg-[var(--brand)] opacity-35"
                  />
                  <Play className="relative h-8 w-8 translate-x-0.5 md:h-10 md:w-10" fill="currentColor" />
                </span>
                <span className="mono-label text-[var(--offwhite)]">
                  {hasRealVideo ? "Mensagem da Mari · 3 min" : "VSL placeholder — troque o YOUTUBE_ID"}
                </span>
              </button>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-[var(--offwhite)]">
                <div>
                  <p className="mono-label opacity-70">Fundadora</p>
                  <p className="mt-1.5 font-display text-2xl">Mariana Marques</p>
                </div>
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

      {/* Modal/lightbox da VSL — abre no aspect natural 16:9 com backdrop escurecido */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label="Mensagem da Mari"
            onClick={() => setOpen(false)}
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
                onClick={() => setOpen(false)}
                aria-label="Fechar vídeo"
                className="absolute -top-12 right-0 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/20 md:-top-14"
              >
                <X className="h-4 w-4" />
                Fechar
              </button>

              <div className="relative aspect-video overflow-hidden rounded-2xl bg-black shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)] ring-1 ring-white/10">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title="VSL · Mariana Marques"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
