import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { ForWho } from "@/components/landing/ForWho";
import { Authority } from "@/components/landing/Authority";
import { Includes } from "@/components/landing/Includes";
import { Curriculum } from "@/components/landing/Curriculum";
import { Transformation } from "@/components/landing/Transformation";
import { Testimonials } from "@/components/landing/Testimonials";
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
      { title: "IAplicada Academy · Aplique IA no seu trabalho de verdade · R$ 147/mês" },
      {
        name: "description",
        content:
          "Assinatura IAplicada Academy: trilhas práticas, aulas ao vivo toda segunda, mentoria e comunidade que implementa. R$ 147/mês, sem fidelidade.",
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
      <Problem />
      <Solution />
      <ForWho />
      <Authority />
      <Includes />
      <Curriculum />
      <Transformation />
      <Testimonials />
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
