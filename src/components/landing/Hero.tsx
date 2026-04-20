import { motion } from "framer-motion";
import { ArrowRight, Users, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-36 pb-16 md:pt-44 md:pb-24">
      {/* Ornamentos sutis */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand) 28%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="container-narrow relative px-6">
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-dark)]" />
            IAplicada Academy · Assinatura
          </motion.span>

          <motion.h1
            initial={{ opacity: 1, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 h-hero max-w-5xl"
          >
            Aplique IA no seu trabalho <span className="text-gradient-brand">de verdade</span>.
            Sem hype. Sem promessa mágica.
          </motion.h1>

          <motion.p
            initial={{ opacity: 1, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-2xl lede"
          >
            Toda segunda, uma aula ao vivo. Toda quarta, Q&amp;A pra destravar a sua rotina. No meio,
            uma comunidade que implementa junto — e uma metodologia que transforma ChatGPT em
            resultado no seu dia a dia.
          </motion.p>

          <motion.div
            initial={{ opacity: 1, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-10 flex flex-col items-center gap-3"
          >
            <a href="#oferta" className="btn-primary-xl">
              Quero aplicar IA no meu trabalho
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="text-sm text-[var(--cocoa-soft)]">
              R$ 147/mês · Sem fidelidade · Cancele quando quiser
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[var(--cocoa-soft)]"
          >
            <span className="inline-flex items-center gap-2">
              <div className="flex -space-x-2">
                {["#AFC040", "#C8DB55", "#7E9025", "#2C1402"].map((c) => (
                  <span
                    key={c}
                    className="h-7 w-7 rounded-full border-2 border-[var(--cream)]"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <Users className="h-4 w-4 text-[var(--brand-dark)]" />
              <strong className="text-[var(--cocoa)]">+2.000 Aplicados</strong> ativos
            </span>
            <span className="inline-flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-[var(--brand-dark)] text-[var(--brand-dark)]" />
                ))}
              </div>
              <strong className="text-[var(--cocoa)]">4.9/5</strong> em 380+ avaliações
            </span>
          </motion.div>
        </div>

        {/* Showcase visual — card limpo tipo dashboard */}
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--offwhite)] shadow-[0_40px_100px_-30px_rgba(44,20,2,0.35)]">
            {/* Barra superior */}
            <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--cream-dark)] px-5 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--alert)]/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#D4A84A]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-dark)]/70" />
              </div>
              <span className="text-xs font-mono text-[var(--cocoa-soft)]">academy.iaplicada.com</span>
              <span className="w-12" />
            </div>

            {/* Grid do "dashboard" */}
            <div className="grid gap-5 p-6 md:grid-cols-12 md:p-8">
              {/* Coluna principal */}
              <div className="md:col-span-8 space-y-5">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--cream)] p-5">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-[var(--alert)]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--alert)]">
                      Ao vivo · Segunda, 19h30
                    </span>
                  </div>
                  <p className="mt-2 font-display text-xl font-extrabold text-[var(--cocoa)]">
                    Como automatizar seu reporting com Claude
                  </p>
                  <p className="mt-1 text-sm text-[var(--cocoa-soft)]">
                    +1.240 Aplicados confirmados
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--border)] bg-[var(--cream)] p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--brand-dark)]">
                    Trilha em andamento
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-semibold text-[var(--cocoa)]">Produtividade pessoal com IA</span>
                    <span className="font-display text-2xl font-extrabold text-[var(--cocoa)]">64%</span>
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[var(--cream-dark)]">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "64%" }}
                      transition={{ duration: 1.4, delay: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-[var(--brand)]"
                    />
                  </div>
                  <ul className="mt-4 grid gap-2 text-sm md:grid-cols-2">
                    {[
                      { t: "Email zero com IA", done: true },
                      { t: "Resumo de reuniões", done: true },
                      { t: "Follow-up automático", done: false },
                      { t: "Planejamento semanal", done: false },
                    ].map((l) => (
                      <li
                        key={l.t}
                        className={`flex items-center gap-2 rounded-lg border px-3 py-2 ${
                          l.done
                            ? "border-[var(--brand-dark)]/25 bg-[var(--brand)]/10 text-[var(--cocoa)]"
                            : "border-[var(--border)] bg-white/60 text-[var(--cocoa-soft)]"
                        }`}
                      >
                        <span
                          className={`inline-flex h-4 w-4 items-center justify-center rounded-full ${
                            l.done ? "bg-[var(--brand-dark)] text-[var(--offwhite)]" : "border border-[var(--border)] bg-white"
                          }`}
                        >
                          {l.done ? "✓" : ""}
                        </span>
                        {l.t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Coluna lateral — MarIAna + stats */}
              <div className="md:col-span-4 space-y-5">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--cocoa)] p-5 text-[var(--offwhite)]">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand)] text-[var(--cocoa)] font-black">
                      M
                    </span>
                    <div>
                      <p className="text-sm font-semibold">MarIAna</p>
                      <p className="text-[10px] uppercase tracking-widest opacity-70">
                        <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                        online 24/7
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 rounded-xl bg-[var(--ink)]/40 p-3 text-xs leading-relaxed">
                    "Quer que eu monte um fluxo de follow-up automático pros teus leads de segunda?"
                  </p>
                </div>

                <div className="grid gap-3">
                  {[
                    { v: "18", l: "trilhas" },
                    { v: "+100", l: "prompts testados" },
                    { v: "+50", l: "ferramentas" },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="flex items-baseline justify-between rounded-xl border border-[var(--border)] bg-[var(--cream)] px-4 py-3"
                    >
                      <span className="font-display text-2xl font-extrabold text-[var(--cocoa)]">
                        {s.v}
                      </span>
                      <span className="text-xs uppercase tracking-[0.15em] text-[var(--cocoa-soft)]">
                        {s.l}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
