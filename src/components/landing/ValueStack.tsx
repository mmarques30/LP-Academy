import { motion } from "framer-motion";
import { Check } from "lucide-react";

const stack = [
  { title: "18 trilhas completas, novas a cada quinzena", value: "R$ 1.997" },
  { title: "Aulas ao vivo toda segunda-feira (ano todo)", value: "R$ 2.497" },
  { title: "Q&A semanal ao vivo às quartas com a Mari", value: "R$ 1.497" },
  { title: "MarIAna 24/7 — agente IA com expertise da Mari", value: "R$ 1.164" },
  { title: "Biblioteca de +100 prompts testados", value: "R$ 497" },
  { title: "Catálogo de +50 ferramentas avaliadas", value: "R$ 297" },
  { title: "Comunidade Aplicados (+2.000 membros)", value: "R$ 397" },
  { title: "Bônus · Workshop \"Mapeie sua segunda-feira\"", value: "R$ 297" },
  { title: "Bônus · Trilha Express \"Primeiros 30 dias\"", value: "R$ 147" },
  { title: "Bônus · Gravação de todas as aulas ao vivo", value: "incalculável" },
];

export function ValueStack() {
  return (
    <section className="section-pad bg-[var(--cream)]">
      <div className="container-narrow px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Quanto custa continuar travado em planilha?</span>
          <h2 className="mt-5 h-section">
            Se comprasse tudo separado, você pagaria
            <br />
            <span className="text-gradient-brand">mais de R$ 8.790.</span>
          </h2>
          <p className="mt-5 lede">
            Antes de falar de preço, entenda o valor real do que está incluso no Academy.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--offwhite)] shadow-[0_40px_80px_-50px_rgba(44,20,2,0.35)]"
        >
          <ul className="divide-y divide-[var(--border)]">
            {stack.map((item) => (
              <li
                key={item.title}
                className="flex items-center justify-between gap-4 px-5 py-4 md:px-7"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand)]/25">
                    <Check className="h-3.5 w-3.5 text-[var(--brand-dark)]" strokeWidth={3} />
                  </span>
                  <span className="text-[var(--cocoa)]">{item.title}</span>
                </div>
                <span
                  className={`shrink-0 font-display font-bold md:text-base ${
                    item.value === "incalculável"
                      ? "text-[var(--brand-dark)]"
                      : "text-[var(--cocoa-soft)] line-through decoration-[var(--cocoa-soft)]/40"
                  } text-sm`}
                >
                  {item.value}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] bg-[var(--cream-dark)] px-5 py-5 md:px-7">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--cocoa-soft)]">
              Valor total aplicado
            </span>
            <span className="font-display text-2xl font-black text-[var(--cocoa)] md:text-3xl">
              R$ 8.790+
            </span>
          </div>
        </motion.div>

        <p className="mt-8 text-center text-sm text-[var(--cocoa-soft)]">
          E você não paga nada disso separado. Tudo isso entra na sua assinatura — por menos de R$ 5/dia.
        </p>
      </div>
    </section>
  );
}
