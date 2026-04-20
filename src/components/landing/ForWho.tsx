import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const yes = [
  "Você é CLT e quer virar referência em IA no seu setor",
  "Você é empreendedor(a) e quer comprar horas de volta automatizando",
  "Você é líder e quer levar IA pro time sem depender da TI",
  "Você já tentou aprender sozinho e se perdeu em tutoriais soltos",
  "Você quer aplicar IA no trabalho — não só consumir conteúdo sobre IA",
];

const no = [
  "Você procura IA teórica, acadêmica, de papers",
  "Você quer virar \"prompt engineer em 7 dias\"",
  "Você quer consumir conteúdo gravado sem aplicar nada",
  "Você não consegue dedicar 2h por semana pra sua evolução",
];

export function ForWho() {
  return (
    <section className="section-pad bg-[var(--offwhite)]">
      <div className="container-narrow px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Pra quem</span>
          <h2 className="mt-5 h-section">O Academy serve pra você?</h2>
          <p className="mt-5 lede">
            Seja honesto na leitura abaixo. Se a coluna da esquerda te descreve em 3 ou mais pontos,
            esse é o teu lugar. Se a da direita soa familiar, melhor parar aqui.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 1, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border-2 border-[var(--brand-dark)]/30 bg-[var(--brand)]/8 p-7 md:p-9"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand)] text-[var(--cocoa)]">
                <Check className="h-5 w-5" strokeWidth={3} />
              </span>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-dark)]">
                É pra você
              </p>
            </div>
            <ul className="mt-7 space-y-4">
              {yes.map((t) => (
                <li key={t} className="flex gap-3 text-[var(--cocoa)]">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-dark)]" strokeWidth={2.5} />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-3xl border border-[var(--border)] bg-[var(--cream-dark)] p-7 md:p-9"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--cocoa)]/10 text-[var(--cocoa-soft)]">
                <X className="h-5 w-5" strokeWidth={3} />
              </span>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--cocoa-soft)]">
                Não é pra você
              </p>
            </div>
            <ul className="mt-7 space-y-4">
              {no.map((t) => (
                <li key={t} className="flex gap-3 text-[var(--cocoa-soft)]">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-[var(--alert)]/70" strokeWidth={2.5} />
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
