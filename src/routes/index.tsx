import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { LogosBar } from "@/components/landing/LogosBar";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { ForWho } from "@/components/landing/ForWho";
import { Authority } from "@/components/landing/Authority";
import { Transformation } from "@/components/landing/Transformation";
import { Includes } from "@/components/landing/Includes";
import { Testimonials } from "@/components/landing/Testimonials";
import { Curriculum } from "@/components/landing/Curriculum";
import { Bonuses } from "@/components/landing/Bonuses";
import { ValueStack } from "@/components/landing/ValueStack";
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
      { title: "IAplicada Academy · Aprenda IA aplicada ao trabalho real · R$ 147/mês" },
      {
        name: "description",
        content:
          "Assinatura IAplicada Academy: aplique IA no seu trabalho de verdade. Aulas ao vivo toda segunda, mentoria, +100 prompts e comunidade. R$ 147/mês.",
      },
      { property: "og:title", content: "IAplicada Academy · IA aplicada ao trabalho real" },
      {
        property: "og:description",
        content:
          "Aulas ao vivo, mentoria, +100 prompts testados e comunidade que implementa. R$ 147/mês, sem fidelidade.",
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
      <Transformation />
      <ForWho />
      <Authority />
      <Includes />
      <Testimonials />
      <Curriculum />
      <Bonuses />
      <ValueStack />
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
