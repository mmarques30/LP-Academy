import { motion } from "framer-motion";
import { Check, ArrowRight, Shield, Lock } from "lucide-react";

const CHECKOUT_MONTHLY = "https://pague.lia.com.br/iaplicada/oferta?offer_id=58de246e-e1c2-4257-a04e-2b3e1bf34d40";
const CHECKOUT_ANNUAL = "https://pague.lia.com.br/iaplicada/oferta?offer_id=222bad0f-6117-4e58-83f5-e6fd65403375";

const includes = [
  "18 trilhas + novos conteúdos quinzenais",
  "Aula ao vivo, toda segunda · 19h30",
  "Q&A com a Mari, toda quarta · 19h30",
  "MarIAna · agente IA 24/7 com a expertise da Mari",
  "Comunidade de +700 Aplicados ativos",
  "Prompts, templates e workflows em Claude, Zapier e Manus",
  "Gravação de todas as aulas ao vivo",
  "Sem fidelidade · cancele quando quiser",
];

const annualExtras = [
  "Economia de R$ 467 no ano (vs plano mensal)",
  "Encontro presencial anual com a Mari",
  "Prioridade em Q&A e novas turmas",
];

export function Offer() {
  return (
    <section id="investimento" className="section-pad bg-[var(--cream)]">
      <div className="container-wide px-6">
        <div className="grid items-end gap-6 md:grid-cols-2 md:gap-12">
          <div>
            <span className="eyebrow">07 — Investimento</span>
            <h2 className="mt-7 h-section text-[var(--cocoa)]">
              Menos de <span className="serif-italic text-[var(--brand-dark)]">R$ 5 por dia.</span>
              <br />
              Com 7 dias de garantia.
            </h2>
          </div>
          <p className="text-[17px] leading-[1.6] text-[var(--cocoa-soft)] md:text-[19px]">
            Você entra hoje e testa por dentro. Se em 7 dias o Academy não fizer
            sentido, devolvemos 100% do valor — sem burocracia.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          {/* Mensal */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col rounded-[28px] border border-[var(--cocoa)]/10 bg-[var(--offwhite)] p-8 md:p-10"
          >
            <div className="flex items-center justify-between">
              <span className="mono-label text-[var(--cocoa-soft)]">Mensal</span>
              <span className="chip">Sem fidelidade</span>
            </div>

            <div className="mt-10 flex items-end gap-2">
              <span className="font-display text-[clamp(3.5rem,8vw,5.5rem)] leading-[0.9] text-[var(--cocoa)]">
                R$ 147
              </span>
              <span className="mb-3 text-[var(--cocoa-soft)]">/mês</span>
            </div>
            <p className="mt-2 text-sm text-[var(--cocoa-soft)]">
              Cobrança recorrente · cancele quando quiser.
            </p>

            <div className="my-8 h-px bg-[var(--cocoa)]/10" />

            <ul className="space-y-3.5">
              {includes.slice(0, 5).map((i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-[var(--cocoa)]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-dark)]" strokeWidth={2.5} />
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <a
              href={CHECKOUT_MONTHLY}
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-[var(--cocoa)] bg-transparent px-6 py-4 text-[15px] font-medium text-[var(--cocoa)] transition-all hover:bg-[var(--cocoa)] hover:text-[var(--offwhite)] md:mt-12"
            >
              Assinar mensal
              <ArrowRight className="h-4 w-4" />
            </a>

            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-[var(--cocoa-soft)]">
              <Lock className="h-3.5 w-3.5" /> Checkout seguro · Pix ou cartão
            </p>
          </motion.div>

          {/* Anual */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative flex flex-col overflow-hidden rounded-[28px] bg-[var(--cocoa-soft)] p-8 text-white shadow-[0_40px_100px_-30px_rgba(13,13,13,0.5)] md:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full blur-[80px]"
              style={{ background: "color-mix(in oklab, var(--brand) 25%, transparent)" }}
            />

            <div className="relative flex items-center justify-between">
              <span className="mono-label text-[var(--brand)]">Anual · recomendado</span>
              <span className="rounded-full bg-[var(--brand)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--cocoa)]">
                Mais escolhido
              </span>
            </div>

            <div className="relative mt-10">
              <p className="text-sm text-[var(--offwhite)]/50 line-through">R$ 1.764/ano</p>
              <div className="mt-1 flex items-end gap-2">
                <span className="font-display text-[clamp(3.5rem,8vw,5.5rem)] leading-[0.9] text-[var(--offwhite)]">
                  R$ 1.297
                </span>
                <span className="mb-3 text-[var(--offwhite)]/70">/ano</span>
              </div>
              <p className="mt-2 text-sm text-[var(--offwhite)]/70">
                Ou <strong className="text-[var(--offwhite)]">12× R$ 108</strong> · economia de R$ 467
              </p>
            </div>

            <div className="my-8 h-px bg-[var(--offwhite)]/15" />

            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-[15px] text-[var(--offwhite)]">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" strokeWidth={2.5} />
                <span><strong>Tudo do mensal</strong> com acesso de 12 meses</span>
              </li>
              {annualExtras.map((i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-[var(--offwhite)]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" strokeWidth={2.5} />
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <a
              href={CHECKOUT_ANNUAL}
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 py-4 text-[15px] font-medium text-[var(--cocoa)] transition-all hover:bg-[var(--brand-bright)] md:mt-12"
            >
              Garantir plano anual
              <ArrowRight className="h-4 w-4" />
            </a>

            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-[var(--offwhite)]/60">
              <Shield className="h-3.5 w-3.5" /> 7 dias de garantia total
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
