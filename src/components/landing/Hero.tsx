import { motion } from "framer-motion";
import { Sparkles, BookOpen, Wand2, Wrench, CalendarDays, Users } from "lucide-react";

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
          <div className="relative overflow-hidden rounded-3xl border-2 border-[var(--brand)]/60 bg-[#1A1F10] shadow-[0_30px_80px_-30px_rgba(138,171,35,0.4)]">
            <div className="aspect-[4/5] w-full bg-gradient-to-br from-[#222820] via-[#1A1F10] to-[#141A0B] flex items-center justify-center">
              <div className="text-center px-8">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-[var(--brand)]/15 border border-[var(--brand)]/40">
                  <Sparkles className="h-10 w-10 text-[var(--brand-bright)]" />
                </div>
                <p className="text-sm uppercase tracking-widest text-[var(--brand-bright)]">Mariana Marques</p>
                <p className="mt-2 text-lg font-semibold text-[var(--offwhite)]">Fundadora · IAplicada</p>
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
