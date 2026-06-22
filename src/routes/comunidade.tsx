import { createFileRoute } from "@tanstack/react-router";
import { usePageViewBeacon } from "@/hooks/usePageViewBeacon";
import { HeaderComunidade } from "@/components/comunidade/HeaderComunidade";
import { HeroComunidade } from "@/components/comunidade/HeroComunidade";
import { VideoComunidade } from "@/components/comunidade/VideoComunidade";
import { OQueVoceRecebe } from "@/components/comunidade/OQueVoceRecebe";
import { ComoFunciona } from "@/components/comunidade/ComoFunciona";
import { QuemEMariana } from "@/components/comunidade/QuemEMariana";
import { FAQComunidade } from "@/components/comunidade/FAQComunidade";
import { FinalCTAComunidade } from "@/components/comunidade/FinalCTAComunidade";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/landing/Footer";

/**
 * LP /comunidade — captura pra comunidade gratuita IAplicada.
 *
 * Foco da copy:
 *  - Aula ao vivo MENSAL (toda primeira quarta do mês, 19h30)
 *  - Acesso à plataforma.iaplicada.com gratuita (mini-trilhas,
 *    prompts, ferramentas)
 *  - Comunidade no WhatsApp
 *  - Newsletter quinzenal
 *
 * Design system: 100% igual ao da LP / (cream/cocoa/brand), alternando
 * seções cream/offwhite com dobras dark em Mari + FinalCTA.
 *
 * Posicionamento do form (Opção B):
 *  - Form na coluna direita do hero (sticky em desktop)
 *  - Botão CTA "Quero entrar grátis" no header faz scroll suave
 *    pro form — sempre visível em qualquer dobra
 *
 * Testimonials: reusa o componente Testimonials da LP / (Beatriz,
 * Karine, Géssina) — mesma identidade visual e prova social.
 *
 * Pós-cadastro: redirect pra /obrigado.
 */
export const Route = createFileRoute("/comunidade")({
  component: Comunidade,
  head: () => ({
    meta: [
      {
        title:
          "IAplicada · Comunidade gratuita · Aula ao vivo mensal + plataforma gratuita",
      },
      {
        name: "description",
        content:
          "Aula ao vivo mensal, plataforma gratuita com prompts e mini-trilhas, comunidade de +700 Aplicados no WhatsApp. Sem cartão, sem catch.",
      },
      {
        property: "og:title",
        content: "IAplicada · Comunidade gratuita",
      },
      {
        property: "og:description",
        content:
          "Aula ao vivo mensal, plataforma gratuita, comunidade de +700 Aplicados. Sem cartão, sem catch.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://academy.iaplicada.com/comunidade" },
    ],
  }),
});

function Comunidade() {
  usePageViewBeacon();
  return (
    <main className="bg-[var(--cream)] text-[var(--cocoa)]">
      <HeaderComunidade />
      <HeroComunidade />
      <VideoComunidade />
      <OQueVoceRecebe />
      <ComoFunciona />
      <QuemEMariana />
      <Testimonials />
      <FAQComunidade />
      <FinalCTAComunidade />
      <Footer />
    </main>
  );
}
