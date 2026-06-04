import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarPlus,
  Check,
  Copy,
  ExternalLink,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { trackEvent, EVENTS } from "@/lib/analytics";

/**
 * Thank-you da LP /comunidade.
 *
 * Estrutura conforme spec da Mari:
 *   H1: "Você está dentro."
 *   Sub: até 5min email com link da comunidade + login plataforma
 *   Card com 3 passos (WhatsApp / Plataforma / Salvar contato)
 *   Card próxima aula com data, hora, tema + "Adicionar ao Google Calendar"
 *   PS final assinado pela Mari
 *
 * Sem upsell do Academy (regra spec: "menção sutil só na FAQ da LP").
 */

const WHATSAPP_COMMUNITY = "https://chat.whatsapp.com/FpvVgQEZE1L4CSmw05piNL";
const PLATAFORMA_URL = "https://plataforma.iaplicada.com";

// Contato da IAplicada que a pessoa deve salvar pra não cair em spam.
// Mari pode trocar quando tiver um número dedicado.
const IAPLICADA_CONTACT = {
  name: "IAplicada · Aulas e Comunidade",
  phone: "+55 11 99999-9999", // [VALIDAR]
};

// Dados da próxima aula — atualizar mensalmente (primeira quarta do mês).
// Mari mantém isto editando 1 constante.
const NEXT_CLASS = {
  topicLabel: "Próxima aula ao vivo",
  topic: "Tema da próxima aula a confirmar", // [VALIDAR]
  // ISO local time pra Brasília. UTC-3 = "T19:30:00-03:00".
  startISO: "2026-06-03T19:30:00-03:00", // [VALIDAR]
  durationMinutes: 90,
};

function formatPtBrDateTime(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Sao_Paulo",
    });
  } catch {
    return iso;
  }
}

function buildGoogleCalendarUrl() {
  const start = new Date(NEXT_CLASS.startISO);
  const end = new Date(start.getTime() + NEXT_CLASS.durationMinutes * 60_000);
  // Format YYYYMMDDTHHmmssZ
  const fmt = (d: Date) =>
    d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `IAplicada · ${NEXT_CLASS.topic}`,
    dates: `${fmt(start)}/${fmt(end)}`,
    details:
      "Aula ao vivo da IAplicada. Link enviado por email + comunidade no WhatsApp algumas horas antes.",
    location: "YouTube · IAplicada",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

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
        /* fallback silencioso */
      });
    }
  }

  const calendarUrl = buildGoogleCalendarUrl();

  return (
    <main className="bg-[#141A0B] text-[var(--offwhite)]">
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
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
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--brand)]/40 bg-[var(--brand)]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
              <Check className="h-3.5 w-3.5" />
              Cadastro confirmado
            </span>

            <h1 className="mt-8 font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] tracking-tight text-[var(--offwhite)]">
              Você está <span className="text-[#BDD64A]">dentro.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-[16px] leading-[1.6] text-[#D4DEB3] md:text-[18px]">
              Em até 5 minutos você recebe um email com o link da comunidade
              no WhatsApp e seu login da plataforma gratuita.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 PASSOS — card grande */}
      <section className="relative overflow-hidden pb-20 md:pb-24">
        <div className="container-wide px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl"
          >
            <div className="rounded-[28px] border border-[var(--offwhite)]/10 bg-[#1A1F10] p-8 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)] md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                Seus próximos passos
              </p>

              {/* Passo 1 — WhatsApp (CTA principal) */}
              <div className="mt-7 border-t border-[var(--offwhite)]/10 pt-7">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-[var(--ink)]">
                    <Sparkles className="h-5 w-5" strokeWidth={2.4} />
                  </span>
                  <div className="flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand)]/85">
                      Passo 01
                    </p>
                    <h3 className="mt-1 font-display text-xl text-[var(--offwhite)] md:text-2xl">
                      Entre no WhatsApp agora
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-[1.55] text-[var(--offwhite)]/65">
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
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 text-[14px] font-semibold text-[var(--ink)] shadow-[0_20px_50px_-15px_rgba(175,192,64,0.55)] transition-all hover:scale-[1.02] hover:bg-[var(--brand-bright)]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Entrar na comunidade Aplicados
                    </a>
                  </div>
                </div>
              </div>

              {/* Passo 2 — Plataforma */}
              <div className="mt-7 border-t border-[var(--offwhite)]/10 pt-7">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--brand)]/40 bg-[var(--brand)]/10 text-[var(--brand)]">
                    <ExternalLink className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div className="flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand)]/85">
                      Passo 02
                    </p>
                    <h3 className="mt-1 font-display text-xl text-[var(--offwhite)] md:text-2xl">
                      Acesse a plataforma gratuita
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-[1.55] text-[var(--offwhite)]/65">
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
              </div>

              {/* Passo 3 — Salvar contato */}
              <div className="mt-7 border-t border-[var(--offwhite)]/10 pt-7">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--brand)]/40 bg-[var(--brand)]/10 text-[var(--brand)]">
                    <Copy className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div className="flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand)]/85">
                      Passo 03
                    </p>
                    <h3 className="mt-1 font-display text-xl text-[var(--offwhite)] md:text-2xl">
                      Salve o contato da IAplicada
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-[1.55] text-[var(--offwhite)]/65">
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
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Card Próxima Aula */}
      <section className="relative overflow-hidden pb-20 md:pb-24">
        <div className="container-wide px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl"
          >
            <div
              className="relative overflow-hidden rounded-[28px] p-8 text-[var(--offwhite)] md:p-10"
              style={{
                background: "linear-gradient(135deg, #1A1F10 0%, #232B17 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full blur-[80px]"
                style={{
                  background: "color-mix(in oklab, var(--brand) 25%, transparent)",
                }}
              />

              <div className="relative grid items-center gap-6 md:grid-cols-[1fr_auto] md:gap-10">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                    {NEXT_CLASS.topicLabel}
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-[var(--offwhite)] md:text-3xl">
                    {NEXT_CLASS.topic}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.55] text-[var(--offwhite)]/70">
                    {formatPtBrDateTime(NEXT_CLASS.startISO)} (horário de Brasília) ·
                    ao vivo no YouTube + comunidade
                  </p>
                </div>

                <a
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent(EVENTS.OBRIGADO_CALENDAR_CLICK)}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3.5 text-[14px] font-semibold text-[var(--ink)] shadow-[0_20px_50px_-15px_rgba(175,192,64,0.55)] transition-all hover:bg-[var(--brand-bright)]"
                >
                  <CalendarPlus className="h-4 w-4" />
                  Adicionar ao Google Calendar
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PS final assinado pela Mari */}
      <section className="relative overflow-hidden pb-24 md:pb-32">
        <div className="container-wide px-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl rounded-2xl border border-[var(--offwhite)]/8 bg-[var(--offwhite)]/[0.03] p-7 md:p-9"
          >
            <p className="font-display text-[18px] leading-[1.6] text-[var(--offwhite)]/85 md:text-[19px]">
              PS — Se em 5 minutos você não tiver recebido o email, dá uma
              olhada no spam. E me responde por lá pra eu saber que você
              está aí.
            </p>
            <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
              — Mari
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
