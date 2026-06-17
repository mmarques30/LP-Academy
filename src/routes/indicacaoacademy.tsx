import { createFileRoute } from "@tanstack/react-router";
import { HeaderComunidade } from "@/components/indicacaoacademy/HeaderComunidade";
import { HeroComunidade } from "@/components/indicacaoacademy/HeroComunidade";
import { VideoComunidade } from "@/components/indicacaoacademy/VideoComunidade";
import { OQueVoceRecebe } from "@/components/indicacaoacademy/OQueVoceRecebe";
import { ComoFunciona } from "@/components/indicacaoacademy/ComoFunciona";
import { QuemEMariana } from "@/components/indicacaoacademy/QuemEMariana";
import { FAQComunidade } from "@/components/indicacaoacademy/FAQComunidade";
import { FinalCTAComunidade } from "@/components/indicacaoacademy/FinalCTAComunidade";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/landing/Footer";

/**
 * LP /indicacaoacademy — clone 1:1 da LP /comunidade pra rodar a
 * campanha de indicação do Academy. Mari ajusta o copy via Lovable
 * depois do merge inicial — o objetivo deste PR é só ter uma rota
 * separada com tracking diferenciado.
 *
 * Diferenças de tracking vs. /comunidade:
 *  - Microsoft Clarity: mesmo projeto COMUNIDADE (x2925vhhto) — Mari
 *    pode separar via filtro de URL no painel quando quiser
 *  - Meta Pixel: `content_name: "lp_indicacao_academy"` no Lead event
 *    (Custom Conversion separada no Events Manager)
 *  - Analytics universal (`form_submissions`): `source:
 *    "lp_indicacao_academy"`
 *
 * Backend (Supabase form-submit): mesmo `form_slug = "academy"` —
 * leads chegam na mesma tabela, diferenciam pelo `source`.
 *
 * Pós-cadastro: redirect pra /obrigado (mesmo thank-you da
 * /comunidade — sem motivo pra duplicar agora).
 */
export const Route = createFileRoute("/indicacaoacademy")({
  component: IndicacaoAcademy,
  head: () => ({
    meta: [
      {
        title:
          "IAplicada · Indicação Academy · Aula ao vivo mensal + plataforma gratuita",
      },
      {
        name: "description",
        content:
          "Aula ao vivo mensal, plataforma gratuita com prompts e mini-trilhas, comunidade de +700 Aplicados no WhatsApp. Sem cartão, sem catch.",
      },
      {
        property: "og:title",
        content: "IAplicada · Indicação Academy",
      },
      {
        property: "og:description",
        content:
          "Aula ao vivo mensal, plataforma gratuita, comunidade de +700 Aplicados. Sem cartão, sem catch.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://academy.iaplicada.com/indicacaoacademy",
      },
    ],
  }),
});

function IndicacaoAcademy() {
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
