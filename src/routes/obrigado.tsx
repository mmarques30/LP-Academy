import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Check,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { trackEvent, EVENTS } from "@/lib/analytics";

/**
 * Thank-you da rota /comunidade. Mesma estrutura visual da /thank-you
 * (hero cream + próximos passos dark + upsell Academy + Footer), mas
 * com:
 *   - copy mais quente e community-first (em vez do tom "futuro
 *     Aplicado" mais corporativo)
 *   - ordem dos passos invertida: WhatsApp PRIMEIRO (instant
 *     gratification — o link da comunidade é o que a pessoa mais
 *     quer na hora)
 *   - upsell Academy idêntico (mesmo CTA, mesmo offer_id)
 *
 * O Community.tsx detecta a LP de origem via window.location.pathname
 * e redireciona pra cá quando o submit vem de /comunidade.
 */

const WHATSAPP_COMMUNITY = "https://chat.whatsapp.com/FpvVgQEZE1L4CSmw05piNL";
const CHECKOUT_ACADEMY =
  "https://pague.lia.com.br/iaplicada/oferta?offer_id=931e1848-63ec-42f9-b136-fc3b2d907ef8";

const steps = [
  {
    icon: MessageCircle,
    title: "Entra agora no WhatsApp da comunidade",
    detail:
      "É o coração da IAplicada. Pessoas aplicando IA na prática, trocando prompts, tirando dúvidas. Cola no link abaixo.",
  },
  {
    icon: Calendar,
    title: "Aula ao vivo · segunda 19h30",
    detail:
      "Toda segunda a Mari sobe ao vivo. O link chega no seu email algumas horas antes — bota na agenda.",
  },
  {
    icon: Mail,
    title: "Email de boas-vindas chega em instantes",
    detail:
      "Confere a caixa de entrada (e o spam, por garantia). Marca como confiável pra não perder nada da Mari.",
  },
  {
    icon: Sparkles,
    title: "Bota equipe@iaplicada.com nos contatos",
    detail:
      "Pra newsletter quinzenal, gravações de aulas e tudo mais chegar sem cair no spam.",
  },
];

const academyHighlights = [
  "18 trilhas + novos conteúdos quinzenais",
  "Q&A com a Mari toda quarta · 1h ao vivo",
  "Gravação de todas as aulas",
  "Materiais e prompts do método APLICA",
];

export const Route = createFileRoute("/obrigado")({
  component: Obrigado,
  head: () => ({
    meta: [
      { title: "Bem-vinda à comunidade · IAplicada" },
      {
        name: "description",
        content:
          "Você tá dentro da comunidade IAplicada. Próximos passos pra começar — entra no WhatsApp e prepara pra primeira aula de segunda.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

function Obrigado() {
  // Dispara o evento de pageview pro Clarity assim que a /obrigado
  // monta — separado do thankyou_view da /thank-you pra dar visão
  // limpa de quantas conversões vieram de cada LP.
  useEffect(() => {
    trackEvent(EVENTS.OBRIGADO_VIEW);
  }, []);

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
            <span className="mono-label inline-flex items-center justify-center gap-2 text-[var(--brand-dark)]">
              <Check className="h-3.5 w-3.5" />
              Você acabou de entrar
            </span>

            <h1 className="mt-8 h-display text-[var(--cocoa)]">
              Bem-vinda{" "}
              <span className="serif-italic text-[var(--brand-dark)]">à comunidade!</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-[1.55] text-[var(--cocoa-soft)] md:text-[19px]">
              Tá dentro do grupo que aplica IA de verdade. Aqui em baixo
              tem os 3 minutos que você precisa pra começar a aplicar
              ainda essa semana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PRÓXIMOS PASSOS — WhatsApp primeiro */}
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
              <h2 className="h-section !text-[var(--offwhite)]">
                Seus{" "}
                <span className="serif-italic text-[var(--brand)]">3 próximos minutos.</span>
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
                onClick={() => trackEvent(EVENTS.WHATSAPP_COMMUNITY_CLICK)}
                className="inline-flex items-center gap-2.5 rounded-full bg-[var(--brand)] px-9 py-4 text-base font-medium text-[var(--cocoa)] shadow-[0_30px_80px_-20px_rgba(175,192,64,0.5)] transition-all hover:scale-[1.02] hover:bg-[var(--brand-bright)]"
              >
                <MessageCircle className="h-4 w-4" />
                Cola no WhatsApp agora
              </a>
              <p className="text-[13px] text-[var(--offwhite)]/55">
                Grupo da comunidade IAplicada · sem ruído, sem spam
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
                  Já viu o método na prática?
                </span>
                <h2 className="mt-4 font-display text-3xl text-[var(--cocoa)] md:text-4xl">
                  No{" "}
                  <span className="serif-italic text-[var(--brand-dark)]">Academy</span>{" "}
                  você não só assiste — você aplica com a Mari.
                </h2>
                <p className="mt-5 text-[15px] leading-[1.6] text-[var(--cocoa-soft)] md:text-[17px]">
                  A comunidade aberta é o gostinho. As gravações, materiais,
                  mentoria semanal e o método APLICA passo-a-passo ficam dentro
                  do Academy — onde IA vira resultado.
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
                  <p className="mono-label text-[var(--cocoa-soft)]">Pagamento único</p>
                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-sm text-[var(--cocoa-soft)]">12×</span>
                    <span className="font-display text-5xl leading-[0.9] text-[var(--cocoa)]">
                      R$ 83
                    </span>
                    <span className="mb-1.5 text-[var(--cocoa-soft)]">sem juros</span>
                  </div>
                  <p className="mt-2 text-[13px] leading-[1.55] text-[var(--cocoa-soft)]">
                    Ou R$ 997 à vista · sem mensalidade · 7 dias de garantia
                  </p>
                </div>

                <a
                  href={CHECKOUT_ACADEMY}
                  onClick={() => trackEvent(EVENTS.ACADEMY_UPSELL_CLICK)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-dark)] px-7 py-4 text-[15px] font-medium text-white shadow-[0_20px_50px_-20px_rgba(115,137,37,0.65)] transition-all hover:bg-[#5C6F1D]"
                >
                  Quero o Academy
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <p className="mt-10 text-center text-[14px] text-[var(--cocoa-soft)]">
              Vem na aula de segunda primeiro.{" "}
              <Link
                to="/comunidade"
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
