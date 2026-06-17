import { Logo } from "@/components/landing/Logo";

/**
 * Header minimalista da LP /indicacaoacademy — só logo IAplicada
 * + assinatura "Academy". Sem nav, sem CTA — a LP toda é focada no
 * único objetivo (envio de indicações).
 *
 * Usa o componente <Logo variant="light"> (wordmark escuro pra fundo
 * cream). A versão errada (`/iaplicada-logo.png` direto) é pra fundo
 * escuro — ficava quase invisível no cream.
 */
export function IndicacaoHeader() {
  return (
    <header className="border-b border-[var(--cocoa)]/10 bg-[var(--cream)]">
      <div className="container-wide flex items-center justify-between px-6 py-4">
        <a
          href="https://iaplicada.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5"
        >
          <Logo variant="light" className="h-8 w-auto" />
          <span className="mono-label text-[var(--cocoa-soft)]">Academy</span>
        </a>

        <a
          href="https://academy.iaplicada.com"
          className="mono-label text-[var(--cocoa-soft)] transition-colors hover:text-[var(--cocoa)]"
        >
          academy.iaplicada.com
        </a>
      </div>
    </header>
  );
}
