/**
 * Header minimalista da LP /indicacaoacademy — só logo IAplicada
 * + assinatura "Academy". Sem nav, sem CTA — a LP toda é focada no
 * único objetivo (envio de indicações).
 */
export function IndicacaoHeader() {
  return (
    <header className="border-b border-[var(--cocoa)]/10 bg-[var(--cream)]">
      <div className="container-wide flex items-center justify-between px-6 py-5">
        <a
          href="https://iaplicada.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5"
        >
          <img
            src="/iaplicada-logo.png"
            alt="IAplicada"
            className="h-7 w-auto"
          />
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
