import { motion } from "framer-motion";
import { ArrowRight, X, Check } from "lucide-react";

const before = [
  "Começa a semana sem saber por onde atacar IA",
  "Assiste tutorial atrás de tutorial, e nada aplica",
  "Perde 2h/dia em tarefa que já poderia ser automatizada",
  "Depende de TI pra qualquer coisa \"técnica\"",
  "Vê outras pessoas liderarem IA na empresa",
  "Cansaço de \"preciso estudar IA\" há 2 anos",
];

const after = [
  "Começa a segunda já sabendo o que vai automatizar",
  "Aplica direto no trabalho, com prompt testado e aula ao vivo",
  "Recupera 10–20h por semana com fluxos automáticos",
  "Roda tudo sozinho, sem depender de ninguém",
  "Vira referência de IA no time e no setor",
  "Tem clareza, ritmo e comunidade pra implementar",
];

export function Transformation() {
  return (
    <section className="section-pad bg-[var(--offwhite)]">
      <div className="container-narrow px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Antes e depois</span>
          <h2 className="mt-5 h-section">
            A diferença não é saber <em>mais</em> IA. É
            <span className="text-gradient-brand"> aplicar de verdade.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
          <motion.div
            initial={{ opacity: 1, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-[var(--border)] bg-[var(--cream-dark)] p-7 md:p-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--cocoa-soft)]">
              Antes do Academy
            </p>
            <h3 className="mt-2 font-display text-xl font-extrabold text-[var(--cocoa)]">
              A rotina hoje
            </h3>
            <ul className="mt-6 space-y-4">
              {before.map((t) => (
                <li key={t} className="flex gap-3 text-[var(--cocoa-soft)]">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-[var(--alert)]/70" strokeWidth={2.5} />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="hidden items-center justify-center md:flex">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand)] text-[var(--cocoa)] shadow-[0_15px_40px_-15px_rgba(175,192,64,0.6)]">
              <ArrowRight className="h-6 w-6" strokeWidth={2.5} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 1, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border-2 border-[var(--brand-dark)]/35 bg-[var(--brand)]/8 p-7 md:p-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-dark)]">
              Depois do Academy
            </p>
            <h3 className="mt-2 font-display text-xl font-extrabold text-[var(--cocoa)]">
              A rotina em 90 dias
            </h3>
            <ul className="mt-6 space-y-4">
              {after.map((t) => (
                <li key={t} className="flex gap-3 text-[var(--cocoa)]">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-dark)]" strokeWidth={2.5} />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
