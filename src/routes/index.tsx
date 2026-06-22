import { createFileRoute } from "@tanstack/react-router";
import { usePageViewBeacon } from "@/hooks/usePageViewBeacon";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { Includes } from "@/components/landing/Includes";
import { Authority } from "@/components/landing/Authority";
import { Community } from "@/components/landing/Community";
import { Testimonials } from "@/components/landing/Testimonials";
import { Offer } from "@/components/landing/Offer";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { CookieBanner } from "@/components/landing/CookieBanner";
import { StickyMobileCta } from "@/components/landing/StickyMobileCta";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "IAplicada Academy · Aplique IA no seu trabalho de verdade · 12× R$ 83" },
      {
        name: "description",
        content:
          "IAplicada Academy: trilhas práticas, aula ao vivo toda segunda, mentoria semanal e comunidade que implementa. 12× R$ 83 sem juros (ou R$ 997 à vista) · pagamento único · 7 dias de garantia.",
      },
      { property: "og:title", content: "IAplicada Academy · IA aplicada ao trabalho real" },
      {
        property: "og:description",
        content:
          "Aulas ao vivo, mentoria, +100 prompts testados e comunidade que aplica. 12× R$ 83 sem juros · pagamento único · 7 dias de garantia.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  usePageViewBeacon();
  return (
    <main className="bg-[var(--cream)] text-[var(--cocoa)]">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Includes />
      <Authority />
      <Community />
      <Testimonials />
      <Offer />
      <FAQ />
      <FinalCTA />
      <Footer />
      <CookieBanner />
      <StickyMobileCta />
    </main>
  );
}
