import { Sparkles, Instagram, Youtube, Music2 } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ background: "#0E1308" }} className="border-t border-[var(--border)]">
      <div className="container-narrow grid gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-extrabold">
            <Sparkles className="h-5 w-5 text-[var(--brand)]" />
            IA<span className="text-[var(--brand-bright)]">plicada</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--sage)]">
            IAplicada é a casa dos profissionais que aplicam IA no trabalho de verdade.
          </p>
          <p className="mt-4 text-xs font-bold tracking-wider text-[var(--brand-bright)]">
            #menoshypemaisentrega
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)]">
            Navegação
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--sage)]">
            {["Home", "Academy", "Blog", "Contato", "Termos", "Privacidade"].map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-[var(--brand-bright)]">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)]">
            Redes
          </p>
          <ul className="mt-4 space-y-3 text-sm text-[var(--sage)]">
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-[var(--brand-bright)]">
                <Instagram className="h-4 w-4" /> @marimarquescb
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-[var(--brand-bright)]">
                <Youtube className="h-4 w-4" /> @iaplicadaa
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-[var(--brand-bright)]">
                <Music2 className="h-4 w-4" /> @marimarquescb
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="container-narrow flex flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[var(--muted-foreground)] md:flex-row">
          <p>© 2026 IAplicada · CNPJ XX.XXX.XXX/0001-XX</p>
          <p>contato@iaplicada.com</p>
        </div>
      </div>
    </footer>
  );
}
