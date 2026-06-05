import { motion } from "framer-motion";
import { ArrowRight, Check, Lock, Shield } from "lucide-react";
import { EVENTS, trackEvent } from "@/lib/analytics";

// Pagamento ÚNICO do Academy — sem recorrência mensal. R$ 997 à vista
// ou em até 12× R$ 83,08 sem juros no cartão. O framing comercial é
// "12× R$ 83" pra criar percepção de mensalidade barata sem comprometer
// que a cobrança é única.
const CHECKOUT_ACADEMY =
  "https://pague.lia.com.br/iaplicada/oferta?offer_id=931e1848-63ec-42f9-b136-fc3b2d907ef8";

const includes = [
  "18 trilhas + novos conteúdos quinzenais",
  "Aula ao vivo, toda segunda · 19h30",
  "Q&A com a Mari, toda quarta · 19h30 · 1 hora",
  "MarIAna · agente IA 24/7 com a expertise da Mari",
  "Comunidade fechada com conteúdo diário",
  "Prompts, templates e workflows em Claude, Zapier e Manus",
  "Gravação de todas as aulas ao vivo",
];

export function Offer() {
  return (
    <section id="investimento" className="section-pad bg-[var(--cream)]">
      <div className="container-wide px-6">
        <div className="grid items-end gap-6 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="h-section text-[var(--cocoa)]">
              Em até{" "}
              <span className="serif-italic text-[var(--brand-dark)]">12× R$ 83.</span>
              <br />
              Pagamento único.
            </h2>
          </div>
          <p className="text-[17px] leading-[1.6] text-[var(--cocoa-soft)] md:text-[19px]">
            Sem mensalidade, sem recorrência. Você entra hoje e testa por dentro.
            Se em 7 dias o Academy não fizer sentido, devolvemos 100% do valor —
            sem burocracia.
          </p>
        </div>

        {/* Card único centralizado — substitui os 2 cards (Mensal + Anual)
            de quando o Academy era assinatura. Agora é pagamento único. */}
        <div className="mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-[640px] overflow-hidden rounded-[28px] bg-[var(--cocoa-soft)] p-8 text-white shadow-[0_40px_100px_-30px_rgba(13,13,13,0.5)] md:p-12"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full blur-[80px]"
              style={{ background: "color-mix(in oklab, var(--brand) 25%, transparent)" }}
            />

            <div className="relative flex items-center justify-between">
              <span className="mono-label text-[var(--brand)]">Academy completo</span>
              <span className="rounded-full bg-[var(--brand)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--cocoa)]">
                Pagamento único
              </span>
            </div>

            {/* Preço — destaque grande no parcelado pra criar percepção de
                mensalidade baixa, valor à vista em texto menor abaixo. */}
            <div className="relative mt-10">
              <div className="flex items-end gap-2">
                <span className="text-sm text-[var(--offwhite)]/55">12×</span>
                <span className="font-display text-[clamp(3.5rem,8vw,5.5rem)] leading-[0.9] text-[var(--offwhite)]">
                  R$ 83
                </span>
                <span className="mb-3 text-[var(--offwhite)]/70">sem juros</span>
              </div>
              <p className="mt-3 text-sm text-[var(--offwhite)]/70">
                ou <strong className="text-[var(--offwhite)]">R$ 997 à vista</strong> · Pix ou cartão
              </p>
              <p className="mt-1 text-[12px] leading-[1.5] text-[var(--offwhite)]/55">
                Cobrança única · sem mensalidade · sem recorrência
              </p>
            </div>

            <div className="my-8 h-px bg-[var(--offwhite)]/15" />

            <ul className="space-y-3.5">
              {includes.map((i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[15px] text-[var(--offwhite)]"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]"
                    strokeWidth={2.5}
                  />
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <a
              href={CHECKOUT_ACADEMY}
              onClick={() => trackEvent(EVENTS.CTA_OFFER_ACADEMY)}
              className="mt-12 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 py-4 text-[15px] font-medium text-[var(--cocoa)] transition-all hover:bg-[var(--brand-bright)]"
            >
              Quero entrar pro Academy
              <ArrowRight className="h-4 w-4" />
            </a>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[var(--offwhite)]/60">
              <span className="inline-flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5" /> 7 dias de garantia total
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5" /> Checkout seguro · Pix ou cartão
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
