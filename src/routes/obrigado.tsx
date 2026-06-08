import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Copy,
  ExternalLink,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { trackEvent, EVENTS } from "@/lib/analytics";

/**
 * Thank-you da LP /comunidade — mesma identidade visual do /thank-you
 * (cream/cocoa + seção dark intermediária pros próximos passos).
 *
 * Estrutura:
 *   - HERO cream: H1 "Você está dentro." + sub
 *   - PRÓXIMOS PASSOS bg-section-dark: 3 passos (WhatsApp / Plataforma /
 *     Salvar email), WhatsApp como CTA principal
 *   - PS final assinado pela Mari, cream
 *   - Footer compartilhado
 *
 * NOTA: a antiga seção "PRÓXIMA AULA" com data hardcoded foi removida —
 * data ficava desatualizada e tema da aula mensal muda. Mari comunica
 * isso direto pelo email + WhatsApp da comunidade quando se aproxima.
 *
 * SEM upsell do Academy (regra spec: "menção sutil só na FAQ da LP").
 */

const WHATSAPP_COMMUNITY = "https://chat.whatsapp.com/FpvVgQEZE1L4CSmw05piNL";
const PLATAFORMA_URL = "https://plataforma.iaplicada.com";

const IAPLICADA_CONTACT = {
  name: "IAplicada · Aulas e Comunidade",
  phone: "+55 11 99999-9999", // [VALIDAR]
};

export const Route = createFileRoute("/obrigado")({
  component: Obrigado,
  head: () => ({
    meta: [
      { title: "Você está dentro · IAplicada" },
      {
        name: "description",
        content:
          "Bem-vinda à comunidade IAplicada. Próximos passos pra começar — WhatsApp, plataforma gratuita e próxima aula.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

function Obrigado() {
  useEffect(() => {
    trackEvent(EVENTS.OBRIGADO_VIEW);
  }, []);

  function copyContact() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(IAPLICADA_CONTACT.phone).catch(() => {
        /* noop */
      });
    }
  }

  return (
    <main className="bg-[var(--cream)] text-[var(--cocoa)]">
      {/* HERO cream */}
      <section className="relative overflow-hidden bg-[var(--cream)] pt-28 pb-16 md:pt-36 md:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--brand) 18%, transparent) 0%, transparent 60%)",
          }}
        />
        <div className="container-wide relative px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="eyebrow justify-center">
              <Check className="h-3.5 w-3.5" />
              Cadastro confirmado
            </span>

            <h1 className="mt-8 h-display text-[var(--cocoa)]">
              Você está{" "}
              <span className="serif-italic text-[var(--brand-dark)]">
                dentro.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-[17px] leading-[1.6] text-[var(--cocoa-soft)] md:text-[19px]">
              Em até 5 minutos você recebe um email com o link da comunidade
              no WhatsApp e seu login da plataforma gratuita.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PRÓXIMOS PASSOS — bg-section-dark (mesmo padrão do /thank-you) */}
      <section className="bg-section-dark relative overflow-hidden py-20 md:py-28 text-[var(--offwhite)]">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full blur-[120px]"
          style={{ background: "color-mix(in oklab, var(--brand) 12%, transparent)" }}
        />

        <div className="container-wide relative px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl"
          >
            <div className="text-center">
              <span className="eyebrow-dark justify-center">
                Seus próximos passos
              </span>
              <h2 className="mt-7 h-section !text-[var(--offwhite)]">
                Comece pelos{" "}
                <span className="serif-italic text-[var(--brand)]">
                  próximos 3 minutos.
                </span>
              </h2>
            </div>

            <ol className="mt-14 space-y-5">
              {/* Passo 1 — WhatsApp (CTA principal) */}
              <motion.li
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6 }}
                className="relative rounded-[20px] border border-[var(--offwhite)]/12 bg-[var(--offwhite)]/[0.04] p-6 backdrop-blur-sm md:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-[var(--cocoa)]">
                    <Sparkles className="h-5 w-5" strokeWidth={2.4} />
                  </span>
                  <div className="flex-1">
                    <p className="mono-label text-[var(--brand)]">Passo 01</p>
                    <h3 className="mt-1.5 font-display text-xl text-[var(--offwhite)] md:text-2xl">
                      Entre no WhatsApp agora
                    </h3>
                    <p className="mt-2.5 text-[14.5px] leading-[1.55] text-[var(--offwhite)]/70">
                      É o coração da IAplicada. Trocas, prompts, dicas semanais.
                      Cola já — quanto antes melhor.
                    </p>
                    <a
                      href={WHATSAPP_COMMUNITY}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent(EVENTS.OBRIGADO_WHATSAPP_CLICK)
                      }
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 text-[14px] font-semibold text-[var(--cocoa)] shadow-[0_20px_50px_-15px_rgba(175,192,64,0.55)] transition-all hover:scale-[1.02] hover:bg-[var(--brand-bright)]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Entrar na comunidade Aplicados
                    </a>
                  </div>
                </div>
              </motion.li>

              {/* Passo 2 — Plataforma */}
              <motion.li
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="relative rounded-[20px] border border-[var(--offwhite)]/12 bg-[var(--offwhite)]/[0.04] p-6 backdrop-blur-sm md:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--brand)]/40 bg-[var(--brand)]/10 text-[var(--brand)]">
                    <ExternalLink className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div className="flex-1">
                    <p className="mono-label text-[var(--brand)]">Passo 02</p>
                    <h3 className="mt-1.5 font-display text-xl text-[var(--offwhite)] md:text-2xl">
                      Acesse a plataforma gratuita
                    </h3>
                    <p className="mt-2.5 text-[14.5px] leading-[1.55] text-[var(--offwhite)]/70">
                      Mini-trilhas, prompts testados e catálogo de ferramentas.
                      Login chega no seu email em alguns minutos.
                    </p>
                    <a
                      href={PLATAFORMA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent(EVENTS.OBRIGADO_PLATFORM_CLICK)
                      }
                      className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--offwhite)]/25 bg-transparent px-6 py-3 text-[14px] font-semibold text-[var(--offwhite)] transition-colors hover:bg-[var(--offwhite)]/8"
                    >
                      Ir pra plataforma.iaplicada.com
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.li>

              {/* Passo 3 — Salvar contato */}
              <motion.li
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="relative rounded-[20px] border border-[var(--offwhite)]/12 bg-[var(--offwhite)]/[0.04] p-6 backdrop-blur-sm md:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--brand)]/40 bg-[var(--brand)]/10 text-[var(--brand)]">
                    <Copy className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div className="flex-1">
                    <p className="mono-label text-[var(--brand)]">Passo 03</p>
                    <h3 className="mt-1.5 font-display text-xl text-[var(--offwhite)] md:text-2xl">
                      Salve o contato da IAplicada
                    </h3>
                    <p className="mt-2.5 text-[14.5px] leading-[1.55] text-[var(--offwhite)]/70">
                      Adiciona na agenda pra os emails da Mari não caírem no
                      spam.
                    </p>
                    <div className="mt-5 inline-flex flex-wrap items-center gap-3 rounded-2xl border border-[var(--offwhite)]/12 bg-[var(--offwhite)]/[0.04] px-4 py-3 text-[14px] text-[var(--offwhite)]">
                      <span className="font-mono">
                        {IAPLICADA_CONTACT.phone}
                      </span>
                      <button
                        type="button"
                        onClick={copyContact}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[var(--offwhite)]/10 px-3 py-1.5 text-[12px] font-semibold text-[var(--offwhite)]/80 transition-colors hover:bg-[var(--offwhite)]/15"
                      >
                        <Copy className="h-3 w-3" />
                        Copiar
                      </button>
                    </div>
                  </div>
                </div>
              </motion.li>
            </ol>
          </motion.div>
        </div>
      </section>

      {/* PS final assinado pela Mari — cream
          (a antiga seção "PRÓXIMA AULA" foi removida: hardcoded
          data ficava desatualizada e tema da aula mensal muda; Mari
          comunica isso direto pelo email + WhatsApp, sem precisar
          de card aqui) */}
      <section className="section-pad bg-[var(--cream)]">
        <div className="container-wide px-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl rounded-2xl border border-[var(--cocoa)]/10 bg-[var(--offwhite)]/60 p-7 md:p-8"
          >
            <p className="font-display text-[18px] leading-[1.6] text-[var(--cocoa)] md:text-[19px]">
              PS — Se em 5 minutos você não tiver recebido o email, dá uma
              olhada no spam. E me responde por lá pra eu saber que você está
              aí.
            </p>
            <p className="mt-4 mono-label text-[var(--brand-dark)]">— Mari</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
