import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Check, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/landing/Footer";

const WHATSAPP_COMMUNITY = "https://chat.whatsapp.com/FpvVgQEZE1L4CSmw05piNL";
const CHECKOUT_MONTHLY =
  "https://pague.lia.com.br/iaplicada/oferta?offer_id=58de246e-e1c2-4257-a04e-2b3e1bf34d40";

const steps = [
  {
    icon: Calendar,
    title: "Sua primeira aula é segunda · 19h30",
    detail:
      "Toda segunda, ao vivo. O link chega no seu email algumas horas antes da aula.",
  },
  {
    icon: MessageCircle,
    title: "Acesso à comunidade liberado",
    detail:
      "Entra agora no grupo do WhatsApp pra começar a conversar com outros Aplicados.",
  },
  {
    icon: Mail,
    title: "Email com orientações chega em instantes",
    detail:
      "Confere a caixa de entrada. Se não achar, dá uma olhada no spam — e marca como confiável.",
  },
  {
    icon: ShieldCheck,
    title: "Adiciona equipe@iaplicada.com aos contatos",
    detail:
      "Pra garantir que tudo da Mari chegue até você sem cair no spam.",
  },
];

const academyHighlights = [
  "18 trilhas + novos conteúdos quinzenais",
  "Q&A com a Mari toda quarta · 19h30",
  "Gravação de todas as aulas",
  "Materiais e prompts do método APLICA",
];

export const Route = createFileRoute("/thank-you")({
  component: ThankYou,
  head: () => ({
    meta: [
      { title: "Você está dentro · IAplicada" },
      {
        name: "description",
        content:
          "Bem-vindo, futuro Aplicado. Próximos passos pra começar na comunidade IAplicada.",
      },
      // Thank-you page não deve aparecer em busca orgânica
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

function ThankYou() {
  return (
    <main className="bg-[var(--cream)] text-[var(--cocoa)]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--cream)] pt-28 pb-16 md:pt-36 md:pb-24">
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
            className="mx-auto max-w-3xl text-center"
          >
            <span className="eyebrow justify-center">
              <Check className="h-3.5 w-3.5" />
              Bem-vindo, futuro Aplicado
            </span>

            <h1 className="mt-8 h-display text-[var(--cocoa)]">
              Você está{" "}
              <span className="serif-italic text-[var(--brand-dark)]">dentro!</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-[1.55] text-[var(--cocoa-soft)] md:text-[19px]">
              Sua inscrição na comunidade IAplicada foi confirmada. Aqui embaixo
              estão os próximos passos pra você começar — leva 2 minutos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PRÓXIMOS PASSOS */}
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
            className="mx-auto max-w-4xl"
          >
            <div className="text-center">
              <span className="eyebrow-dark justify-center">Próximos passos</span>
              <h2 className="mt-7 h-section !text-[var(--offwhite)]">
                Comece pelos{" "}
                <span className="serif-italic text-[var(--brand)]">próximos 2 minutos.</span>
              </h2>
            </div>

            <ol className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
              {steps.map(({ icon: Icon, title, detail }, idx) => (
                <motion.li
                  key={title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="relative rounded-[20px] border border-[var(--offwhite)]/12 bg-[var(--offwhite)]/[0.04] p-6 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-[var(--cocoa)]">
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <div>
                      <p className="mono-label text-[var(--brand)]">
                        Passo {String(idx + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1.5 font-display text-xl text-[var(--offwhite)]">
                        {title}
                      </h3>
                      <p className="mt-2.5 text-[14px] leading-[1.55] text-[var(--offwhite)]/70">
                        {detail}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ol>

            <div className="mt-14 flex flex-col items-center gap-4 text-center">
              <a
                href={WHATSAPP_COMMUNITY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-[var(--brand)] px-9 py-4 text-base font-medium text-[var(--cocoa)] shadow-[0_30px_80px_-20px_rgba(175,192,64,0.5)] transition-all hover:scale-[1.02] hover:bg-[var(--brand-bright)]"
              >
                <MessageCircle className="h-4 w-4" />
                Entrar na comunidade
              </a>
              <p className="text-[13px] text-[var(--offwhite)]/55">
                Grupo de WhatsApp · sem ruído, sem spam
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* UPSELL ACADEMY */}
      <section className="section-pad bg-[var(--cream)]">
        <div className="container-wide px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl"
          >
            <div className="grid gap-10 rounded-[28px] border border-[var(--cocoa)]/10 bg-[var(--offwhite)] p-8 shadow-[0_30px_70px_-30px_rgba(13,13,13,0.15)] md:grid-cols-[1fr_0.9fr] md:p-12">
              <div>
                <span className="mono-label text-[var(--brand-dark)]">
                  Pronta pra ir mais fundo?
                </span>
                <h2 className="mt-4 font-display text-3xl text-[var(--cocoa)] md:text-4xl">
                  O{" "}
                  <span className="serif-italic text-[var(--brand-dark)]">Academy</span>{" "}
                  te leva do método pra entrega.
                </h2>
                <p className="mt-5 text-[15px] leading-[1.6] text-[var(--cocoa-soft)] md:text-[17px]">
                  Você vai assistir à aula gratuita de segunda — mas pra ter os
                  materiais, gravações e mentoria semanal que fazem IA virar
                  resultado, o Academy é onde acontece.
                </p>

                <ul className="mt-6 space-y-3">
                  {academyHighlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 text-[14px] leading-[1.55] text-[var(--cocoa)]"
                    >
                      <Check
                        className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-dark)]"
                        strokeWidth={2.5}
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-between gap-6 rounded-2xl bg-[var(--cream)] p-6 md:p-7">
                <div>
                  <p className="mono-label text-[var(--cocoa-soft)]">Plano mensal</p>
                  <div className="mt-3 flex items-end gap-2">
                    <span className="font-display text-5xl leading-[0.9] text-[var(--cocoa)]">
                      R$ 147
                    </span>
                    <span className="mb-1.5 text-[var(--cocoa-soft)]">/mês</span>
                  </div>
                  <p className="mt-2 text-[13px] leading-[1.55] text-[var(--cocoa-soft)]">
                    Sem fidelidade · cancele quando quiser · 7 dias de garantia
                  </p>
                </div>

                <a
                  href={CHECKOUT_MONTHLY}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-dark)] px-7 py-4 text-[15px] font-medium text-white shadow-[0_20px_50px_-20px_rgba(115,137,37,0.65)] transition-all hover:bg-[#5C6F1D]"
                >
                  Quero o Academy
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <p className="mt-10 text-center text-[14px] text-[var(--cocoa-soft)]">
              Curte a primeira aula gratuita antes de decidir.{" "}
              <Link
                to="/"
                className="font-medium text-[var(--brand-dark)] underline-offset-2 hover:underline"
              >
                Voltar pra LP
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
