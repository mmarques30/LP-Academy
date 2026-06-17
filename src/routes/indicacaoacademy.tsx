import { createFileRoute } from "@tanstack/react-router";
import { IndicacaoHeader } from "@/components/indicacaoacademy/IndicacaoHeader";
import { IndicacaoHero } from "@/components/indicacaoacademy/IndicacaoHero";
import { ReferralForm } from "@/components/indicacaoacademy/ReferralForm";
import { Footer } from "@/components/landing/Footer";

/**
 * LP /indicacaoacademy — programa de indicação do Academy.
 *
 * Versão objetiva: Header minimal + Hero (pitch + recompensa) à
 * esquerda + Form de indicação à direita. Sem distrações (sem video,
 * sem FAQ, sem testimonials) — single-screen, foco total em coletar
 * indicações.
 *
 * Backend: endpoint dedicado /functions/v1/referral-submit (separado
 * do form-submit padrão porque o schema é diferente — payload tem
 * referrer + array de referrals).
 *
 * Tracking:
 *   - Microsoft Clarity: projeto COMUNIDADE (x2925vhhto) — Mari pode
 *     filtrar por URL no painel pra ver só /indicacaoacademy
 *   - Meta Pixel: Lead com content_name="lp_indicacao_academy"
 *   - Analytics universal form_submissions: source="lp_indicacao_academy"
 *
 * Pós-cadastro: NÃO redireciona pra /obrigado — usuário continua na
 * página e vê um toast verde de confirmação. UX faz sentido porque a
 * pessoa pode querer indicar amigos em outro momento e o form é
 * resetado pra novo envio.
 */
export const Route = createFileRoute("/indicacaoacademy")({
  component: IndicacaoAcademy,
  head: () => ({
    meta: [
      {
        title:
          "Indique um amigo · Academy IAplicada · Ganhe mentoria com a Mari",
      },
      {
        name: "description",
        content:
          "Indica um amigo pro Academy IAplicada e ganha 1h30 de mentoria com a Mari + brinde surpresa. Vocês evoluem juntos.",
      },
      { property: "og:title", content: "Indique um amigo · Academy IAplicada" },
      {
        property: "og:description",
        content:
          "Ganhe mentoria com a Mari pra cada amigo que assinar o Academy. Vocês evoluem juntos.",
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
      <IndicacaoHeader />

      <section className="section-pad">
        <div className="container-wide px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
            <IndicacaoHero />
            <div className="lg:sticky lg:top-10">
              <ReferralForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
