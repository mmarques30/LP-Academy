import { createFileRoute } from "@tanstack/react-router";
import { HeaderComunidade } from "@/components/comunidade/HeaderComunidade";
import { HeroComunidade } from "@/components/comunidade/HeroComunidade";
import { SocialProofRapida } from "@/components/comunidade/SocialProofRapida";
import { OQueVoceRecebe } from "@/components/comunidade/OQueVoceRecebe";
import { ComoFunciona } from "@/components/comunidade/ComoFunciona";
import { PraQuemE } from "@/components/comunidade/PraQuemE";
import { QuemEMariana } from "@/components/comunidade/QuemEMariana";
import { FAQComunidade } from "@/components/comunidade/FAQComunidade";
import { FinalCTAComunidade } from "@/components/comunidade/FinalCTAComunidade";
import { Footer } from "@/components/landing/Footer";

/**
 * LP /comunidade — captura para a comunidade gratuita IAplicada.
 *
 * Diferente da LP / (Academy, venda paga):
 *  - 8 seções enxutas em vez de 14
 *  - Tom de convite (baixa fricção), sem urgência ou empurrão
 *  - Form no HERO (não em uma seção meio-final)
 *  - Sem cards de venda, sem Offer paid
 *  - Upsell pro Academy só na FAQ (1 menção sutil)
 *  - Apenas 6 números reais usados como prova social (regra estrita)
 *
 * Componentes próprios em src/components/comunidade/ (separados dos da
 * LP /). Reusa só Footer + HeroVslPlayer (mesmo VSL da home).
 *
 * Form posta no mesmo backend Supabase (form_slug "academy") com
 * defaults seguros pros 2 campos que ele exige mas não aparecem
 * visualmente nessa versão compacta.
 */
export const Route = createFileRoute("/comunidade")({
  component: Comunidade,
  head: () => ({
    meta: [
      {
        title:
          "IAplicada · Comunidade gratuita de profissionais aplicando IA no trabalho",
      },
      {
        name: "description",
        content:
          "Aulas mensais ao vivo, plataforma gratuita, comunidade de +700 Aplicados. Sem cartão, sem catch.",
      },
      {
        property: "og:title",
        content: "IAplicada · Comunidade gratuita",
      },
      {
        property: "og:description",
        content:
          "Aulas mensais ao vivo, plataforma gratuita, comunidade de +700 Aplicados. Sem cartão, sem catch.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      // Canonical aponta pra si própria — diferente da LP /, essa rota
      // tem conteúdo dedicado (não é duplicada de /). Vale indexar
      // separadamente.
      { rel: "canonical", href: "https://academy.iaplicada.com/comunidade" },
    ],
  }),
});

function Comunidade() {
  return (
    <main className="bg-[#141A0B] text-[var(--offwhite)]">
      <HeaderComunidade />
      <HeroComunidade />
      <SocialProofRapida />
      <OQueVoceRecebe />
      <ComoFunciona />
      <PraQuemE />
      <QuemEMariana />
      <FAQComunidade />
      <FinalCTAComunidade />
      <Footer />
    </main>
  );
}
