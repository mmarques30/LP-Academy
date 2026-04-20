import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Authority } from "@/components/landing/Authority";
import { Problem } from "@/components/landing/Problem";
import { Academy } from "@/components/landing/Solution";
import { Testimonials } from "@/components/landing/Testimonials";
import { Offer } from "@/components/landing/Offer";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "IAplicada Academy · Pare de testar IA. Comece a aplicar." },
      {
        name: "description",
        content:
          "A Academy que transforma ferramentas de IA em resultado real no seu trabalho. Aulas ao vivo toda segunda, mentoria semanal, +100 prompts testados e uma comunidade que implementa junto. R$ 147/mês, sem fidelidade.",
      },
      { property: "og:title", content: "IAplicada Academy · IA aplicada ao trabalho real" },
      {
        property: "og:description",
        content:
          "Aulas ao vivo, mentoria, +100 prompts testados e comunidade que implementa. R$ 147/mês, sem fidelidade.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Sora:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-[var(--ink)] text-white">
      <Header />
      <Hero />
      <Authority />
      <Problem />
      <Academy />
      <Testimonials />
      <Offer />
      <FAQ />
      <Footer />
    </main>
  );
}
