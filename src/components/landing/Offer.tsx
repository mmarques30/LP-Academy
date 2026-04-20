import { motion } from "framer-motion";
import { Check, Lock, Shield, Sparkles, ArrowRight } from "lucide-react";

const CHECKOUT_MONTHLY = "#";
const CHECKOUT_ANNUAL = "#";

const includes = [
  "Acesso completo às 18 trilhas",
  "Aulas ao vivo toda segunda-feira",
  "Q&A ao vivo toda quarta com a Mari",
  "MarIAna · agente IA 24/7",
  "+100 prompts testados",
  "+50 ferramentas avaliadas",
  "Comunidade Aplicados (+2.000 membros)",
  "Gravação de todas as aulas ao vivo",
  "3 bônus exclusivos inclusos",
  "Sem fidelidade — cancele quando quiser",
];

export function Offer() {
  return (
    <section id="oferta" className="section-pad bg-section-brand">
      <div className="container-narrow px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--cocoa)]/15 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--cocoa)]">
            <Sparkles className="h-3.5 w-3.5" />
            Sua vaga no Academy
          </span>
          <h2 className="mt-5 h-section !text-[var(--cocoa)]">
            Entre hoje por <span className="underline decoration-[var(--cocoa)]/20 decoration-[6px] underline-offset-4">R$ 147/mês</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--cocoa)]/80">
            Menos de R$ 5 por dia. Sem fidelidade. Sem taxa de adesão. Você só continua se o Academy
            fizer o que tem que fazer por você.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {/* Mensal */}
          <motion.div
            initial={{ opacity: 1, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-[var(--cocoa)]/15 bg-[var(--offwhite)] p-7 md:p-9 shadow-[0_40px_80px_-40px_rgba(44,20,2,0.4)]"
          >
            <span className="chip">Mensal · Sem fidelidade</span>
            <div className="mt-6 flex items-end gap-3">
              <span className="font-display text-6xl font-black leading-none text-[var(--cocoa)] md:text-7xl">
                R$147
              </span>
              <span className="mb-2 text-[var(--cocoa-soft)]">/mês</span>
            </div>
            <p className="mt-2 text-sm text-[var(--cocoa-soft)]">
              Cobrança recorrente no cartão. Cancele a qualquer momento.
            </p>

            <ul className="mt-7 space-y-3">
              {includes.map((i) => (
                <li key={i} className="flex gap-3 text-[var(--cocoa)] text-[15px]">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-dark)]" strokeWidth={2.5} />
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <a
              href={CHECKOUT_MONTHLY}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--cocoa)] px-8 py-4 text-base font-extrabold text-[var(--offwhite)] transition-all hover:bg-[var(--ink)] hover:scale-[1.01]"
            >
              Quero a assinatura mensal
              <ArrowRight className="h-4 w-4" />
            </a>

            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-[var(--cocoa-soft)]">
              <Lock className="h-3.5 w-3.5" /> Checkout seguro · Cartão ou Pix
            </p>
          </motion.div>

          {/* Anual — destaque */}
          <motion.div
            initial={{ opacity: 1, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative overflow-hidden rounded-3xl border-2 border-[var(--cocoa)] bg-[var(--cocoa)] p-7 md:p-9 text-[var(--offwhite)] shadow-[0_40px_80px_-40px_rgba(44,20,2,0.6)]"
          >
            <div className="absolute right-4 top-4">
              <span className="rounded-full bg-[var(--brand)] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[var(--cocoa)]">
                Mais escolhido · economiza R$ 1.767
              </span>
            </div>

            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)]/15 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-bright)] ring-1 ring-[var(--brand)]/30">
              Anual · 2 meses grátis
            </span>

            <div className="mt-6 flex items-end gap-3">
              <span className="font-display text-lg text-[var(--offwhite)]/60 line-through">R$ 1.764</span>
            </div>
            <div className="flex items-end gap-3">
              <span className="font-display text-6xl font-black leading-none text-[var(--offwhite)] md:text-7xl">
                12×R$333
              </span>
            </div>
            <p className="mt-2 text-sm text-[var(--offwhite)]/70">
              Ou <strong className="text-[var(--offwhite)]">R$ 3.997 à vista</strong> · equivalente a
              R$ 333/mês
            </p>

            <ul className="mt-7 space-y-3">
              <li className="flex gap-3 text-[var(--offwhite)] text-[15px]">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-bright)]" strokeWidth={2.5} />
                <span>
                  <strong>Tudo do plano mensal</strong>, com acesso ao ano completo
                </span>
              </li>
              <li className="flex gap-3 text-[var(--offwhite)] text-[15px]">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-bright)]" strokeWidth={2.5} />
                <span>
                  <strong>2 meses grátis</strong> em relação ao mensal (R$ 1.764 → R$ 3.997)
                </span>
              </li>
              <li className="flex gap-3 text-[var(--offwhite)] text-[15px]">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-bright)]" strokeWidth={2.5} />
                <span>
                  <strong>Encontro presencial</strong> com a Mari e Aplicados ao final do ano
                </span>
              </li>
              <li className="flex gap-3 text-[var(--offwhite)] text-[15px]">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-bright)]" strokeWidth={2.5} />
                <span>
                  <strong>Prioridade</strong> em Q&amp;As e novas turmas de mentoria
                </span>
              </li>
            </ul>

            <a
              href={CHECKOUT_ANNUAL}
              className="btn-primary-xl mt-8 w-full !bg-[var(--brand)] !text-[var(--cocoa)] hover:!bg-[var(--brand-bright)]"
            >
              Quero o plano anual · economizar R$ 1.767
              <ArrowRight className="h-5 w-5" />
            </a>

            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-[var(--offwhite)]/60">
              <Shield className="h-3.5 w-3.5" /> 7 dias de garantia · cartão, boleto ou Pix
            </p>
          </motion.div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-[var(--cocoa)]/70">
          Você começa hoje. Se em 7 dias não fizer sentido, devolvemos 100% do valor —
          sem pergunta, sem formulário longo. É só mandar um e-mail.
        </p>
      </div>
    </section>
  );
}
