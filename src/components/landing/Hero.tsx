import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { useState } from "react";

const FALLBACK_PORTRAIT =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80";

export function Hero() {
  const [src, setSrc] = useState("/mariana.jpg");
  return (
    <section className="relative overflow-hidden bg-hero-canvas pt-32 md:pt-36">
      {/* Topo — marquee de credibilidade */}
      <div className="border-y border-[var(--cocoa)]/10 py-2.5">
        <div className="flex overflow-hidden">
          <div className="marquee flex shrink-0 items-center gap-10 whitespace-nowrap px-5 text-[12px] font-medium uppercase tracking-[0.22em] text-[var(--cocoa-soft)]">
            {Array.from({ length: 2 }).map((_, idx) => (
              <div key={idx} className="flex items-center gap-10">
                <span>+2.000 profissionais aplicando</span>
                <span className="text-[var(--brand-dark)]">◆</span>
                <span>Cimed · Ambev · Amazon · Suzano · PSA · Tur Star</span>
                <span className="text-[var(--brand-dark)]">◆</span>
                <span>Aula ao vivo toda segunda</span>
                <span className="text-[var(--brand-dark)]">◆</span>
                <span>18 trilhas + conteúdo novo quinzenal</span>
                <span className="text-[var(--brand-dark)]">◆</span>
                <span>Q&amp;A com a Mari toda quarta</span>
                <span className="text-[var(--brand-dark)]">◆</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-wide relative px-6">
        <div className="grid gap-14 pt-16 pb-24 md:pt-20 md:pb-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12 lg:pt-28">
          {/* Coluna copy */}
          <div className="flex flex-col">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              Academy · Temporada 2026
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 h-display text-[var(--cocoa)]"
            >
              Aplicar IA<br />
              <span className="serif-italic text-[var(--brand-dark)]">de verdade.</span>
              <br />
              Sem hype.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-9 max-w-[46ch] text-[17px] leading-[1.55] text-[var(--cocoa-soft)] md:text-[19px]"
            >
              Recupere 10 a 20h por semana com IA prática. Aula ao vivo toda
              segunda, mentoria com a Mari toda quarta e o método APLICA — o
              sistema que tira ChatGPT do rascunho e coloca no seu fluxo de trabalho.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a href="#investimento" className="btn-primary-xl">
                Começar agora — R$ 146/mês
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#metodo"
                className="inline-flex items-center gap-2 px-2 py-2 text-sm font-medium text-[var(--cocoa-soft)] transition-colors hover:text-[var(--cocoa)]"
              >
                Ver o método APLICA
                <span aria-hidden>→</span>
              </a>
            </motion.div>

            {/* Social proof minimalista */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[var(--cocoa)]/10 pt-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
                    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=120&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
                  ].map((u, i) => (
                    <img
                      key={i}
                      src={u}
                      alt=""
                      className="img-warm h-9 w-9 rounded-full border-2 border-[var(--cream)] object-cover"
                    />
                  ))}
                </div>
                <span className="text-sm text-[var(--cocoa-soft)]">
                  <strong className="font-semibold text-[var(--cocoa)]">+2.000</strong> Aplicados ativos
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 text-[var(--brand-dark)]">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-[var(--cocoa-soft)]">
                  <strong className="font-semibold text-[var(--cocoa)]">4,9/5</strong> em 380+ avaliações
                </span>
              </div>
            </motion.div>
          </div>

          {/* Coluna imagem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:pl-10"
          >
            <div className="relative">
              {/* Moldura com grain */}
              <div className="relative overflow-hidden rounded-[28px] bg-[var(--cocoa)] shadow-[0_40px_100px_-40px_rgba(44,20,2,0.45)] ring-1 ring-[var(--cocoa)]/10">
                <div className="relative aspect-[4/5]">
                  <img
                    src={src}
                    onError={() => setSrc(FALLBACK_PORTRAIT)}
                    alt="Mariana Marques, fundadora da IAplicada"
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                  {/* overlay warm */}
                  <div
                    aria-hidden
                    className="absolute inset-0 grain mix-blend-multiply opacity-40"
                  />
                </div>
                {/* Caption no rodapé da foto */}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-[var(--cocoa)] via-[var(--cocoa)]/70 to-transparent p-6 pt-20 text-[var(--offwhite)]">
                  <div>
                    <p className="mono-label opacity-70">Fundadora</p>
                    <p className="mt-1.5 font-display text-2xl">Mariana Marques</p>
                  </div>
                  <span className="chip border-[var(--offwhite)]/25 bg-[var(--offwhite)]/10 !text-[var(--offwhite)]">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--brand)]" />
                    Aula ao vivo · seg, 19h30
                  </span>
                </div>
              </div>

              {/* Card flutuante — stat */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="absolute -left-6 bottom-10 hidden rounded-2xl border border-[var(--cocoa)]/10 bg-[var(--offwhite)] p-5 shadow-[0_20px_50px_-20px_rgba(44,20,2,0.25)] md:block"
              >
                <p className="mono-label text-[var(--cocoa-soft)]">Satisfação</p>
                <p className="mt-2 font-display text-4xl text-[var(--cocoa)]">4,9<span className="text-xl text-[var(--cocoa-soft)]">/5</span></p>
                <p className="mt-1 text-xs text-[var(--cocoa-soft)]">380+ reviews</p>
              </motion.div>

              {/* Card flutuante — método */}
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
        </div>
      </div>
    </section>
  );
}
