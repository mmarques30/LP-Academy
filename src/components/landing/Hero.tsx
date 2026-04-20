import { motion } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  Wand2,
  Wrench,
  CalendarDays,
  Users,
  Radio,
  CheckCircle2,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand) 22%, transparent) 0%, transparent 70%)",
        }}
      />
      <div className="container-narrow grid gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[#1A1F10] px-3 py-1.5 text-xs font-medium text-[var(--brand-bright)]"
          >
            <Sparkles className="h-3.5 w-3.5" /> Academy · Assinatura IAplicada
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-4xl font-extrabold leading-[1.05] text-[var(--offwhite)] sm:text-5xl md:text-6xl lg:text-[68px]"
          >
            O mercado te cobra saber IA.
            <br />
            Mas ninguém te diz o que fazer com ela{" "}
            <span className="text-[var(--brand-bright)]">na segunda-feira de manhã.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--sage)] md:text-xl"
          >
            Dentro do Academy, você aprende a usar IA no seu trabalho de verdade. Sem hype, sem promessa
            mágica, sem mais um curso que você não termina. Semana a semana, aplicação real, mentoria ao
            vivo e uma comunidade que implementa junto.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 grid grid-cols-2 gap-3 text-sm text-[var(--offwhite)] sm:grid-cols-4"
          >
            {[
              { icon: BookOpen, label: "18 trilhas estruturadas" },
              { icon: Wand2, label: "+100 prompts testados" },
              { icon: Wrench, label: "+50 ferramentas" },
              { icon: CalendarDays, label: "Aulas ao vivo toda segunda" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-start gap-2">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" />
                <span>{label}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 flex flex-col items-start gap-3"
          >
            <a href="#oferta" className="btn-primary text-base">
              Quero aplicar IA no meu trabalho · R$ 147/mês
            </a>
            <p className="text-sm text-[var(--muted-foreground)]">
              Sem fidelidade. Cancele quando quiser.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 rounded-[36px]"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 50%, color-mix(in oklab, var(--brand) 20%, transparent) 0%, transparent 70%)",
            }}
          />

          <div className="relative overflow-hidden rounded-3xl border border-[var(--brand)]/40 bg-[#1A1F10] shadow-[0_30px_80px_-30px_rgba(138,171,35,0.45)]">
            <div className="flex items-center gap-1.5 border-b border-[var(--border)] bg-[#0E1308] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E85D4A]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D4A84A]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand)]/70" />
              <span className="ml-3 text-xs text-[var(--muted-foreground)]">
                academy.iaplicada.com
              </span>
            </div>

            <div className="space-y-5 p-5 md:p-6">
              <div
                className="flex items-center justify-between gap-3 rounded-xl border p-4"
                style={{
                  borderColor: "color-mix(in oklab, var(--alert) 40%, transparent)",
                  background:
                    "color-mix(in oklab, var(--alert) 12%, var(--card))",
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--alert)]/20">
                    <Radio className="h-4 w-4 text-[var(--alert)]" />
                    <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 animate-pulse rounded-full bg-[var(--alert)]" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--alert)]">
                      Ao vivo · Segunda 19:30
                    </p>
                    <p className="text-sm font-semibold text-[var(--offwhite)]">
                      Como automatizar reporting com Claude
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[var(--sage)]" />
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--brand-bright)]">
                  Sua trilha atual
                </p>
                <div className="mt-2 flex items-center justify-between text-sm text-[var(--offwhite)]">
                  <span>Produtividade pessoal com IA</span>
                  <span className="font-display font-extrabold text-[var(--brand-bright)]">
                    64%
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#222820]">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "64%" }}
                    transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
                    className="h-full rounded-full bg-[var(--brand)]"
                  />
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {[
                    { t: "Email zero com IA", done: true },
                    { t: "Resumo de reuniões", done: true },
                    { t: "Follow-up automático", done: false },
                    { t: "Planejamento semanal", done: false },
                  ].map((l) => (
                    <li
                      key={l.t}
                      className="flex items-center gap-2 text-[var(--sage)]"
                    >
                      <CheckCircle2
                        className={`h-4 w-4 ${
                          l.done
                            ? "text-[var(--brand-bright)]"
                            : "text-[var(--muted-foreground)]/50"
                        }`}
                      />
                      <span className={l.done ? "text-[var(--offwhite)]" : ""}>
                        {l.t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[#141A0B] p-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand)]/15">
                    <MessageCircle className="h-4 w-4 text-[var(--brand-bright)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--offwhite)]">
                      MarIAna
                    </p>
                    <p className="text-[11px] text-[var(--muted-foreground)]">
                      Assistente IA dos Aplicados · online
                    </p>
                  </div>
                </div>
                <p className="mt-3 rounded-lg bg-[#1A1F10] p-3 text-sm text-[var(--sage)]">
                  "Quer que eu monte um fluxo de follow-up automático pros teus
                  leads de segunda?"
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-full border border-[var(--border)] bg-[#222820] px-4 py-2.5 shadow-xl">
            <div className="flex -space-x-2">
              {["#8AAB23", "#BDD64A", "#9AAD3D", "#D4DEB3"].map((c) => (
                <span
                  key={c}
                  className="h-7 w-7 rounded-full border-2 border-[#222820]"
                  style={{ background: c }}
                />
              ))}
            </div>
            <span className="flex items-center gap-1.5 text-sm font-semibold text-[var(--offwhite)]">
              <Users className="h-4 w-4 text-[var(--brand)]" />
              +2.000 Aplicados ativos
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
