/**
 * Footer minimalista da LP /indicacaoacademy — 1 linha só, sem
 * navegação, sem coluna de redes sociais, sem manifesto. O Footer
 * compartilhado das outras LPs (landing/Footer) é grande demais pra
 * uma página single-screen focada em conversão.
 *
 * Mostra: assinatura curta + link pra iaplicada.com. Nada mais.
 */
export function IndicacaoFooter() {
  return (
    <footer className="border-t border-[var(--cocoa)]/10 bg-[var(--cream)]">
      <div className="container-wide flex flex-wrap items-center justify-between gap-3 px-6 py-5 text-[12px] text-[var(--cocoa-soft)]">
        <span className="mono-label">
          IAplicada · #MenosHypeMaisEntrega
        </span>
        <a
          href="https://iaplicada.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mono-label transition-colors hover:text-[var(--cocoa)]"
        >
          iaplicada.com →
        </a>
      </div>
    </footer>
  );
}
