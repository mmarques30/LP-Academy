import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { LogosBar } from "@/components/landing/LogosBar";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { Authority } from "@/components/landing/Authority";
import { Transformation } from "@/components/landing/Transformation";
import { Testimonials } from "@/components/landing/Testimonials";
import { Curriculum } from "@/components/landing/Curriculum";
import { Bonuses } from "@/components/landing/Bonuses";
import { Offer } from "@/components/landing/Offer";
import { Guarantee } from "@/components/landing/Guarantee";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { CookieBanner } from "@/components/landing/CookieBanner";
import { StickyMobileCta } from "@/components/landing/StickyMobileCta";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "IAplicada Academy · IA aplicada ao trabalho real · R$ 147/mês" },
      {
        name: "description",
        content:
          "Assinatura IAplicada Academy: aulas ao vivo, mentoria, +100 prompts e comunidade. Aplique IA no trabalho de verdade. R$ 147/mês, sem fidelidade.",
      },
      { property: "og:title", content: "IAplicada Academy · IA aplicada ao trabalho real" },
      {
        property: "og:description",
        content:
          "Aulas ao vivo toda segunda, mentoria com a Mari, +100 prompts testados e comunidade que implementa. R$ 147/mês.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <LogosBar />
      <Problem />
      <Solution />
      <Authority />
      <Transformation />
      <Testimonials />
      <Curriculum />
      <Bonuses />
      <Offer />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
      <CookieBanner />
      <StickyMobileCta />
    </main>
  );
}
