import { Instagram, Youtube, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--cream)]">
      <div className="container-narrow grid gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-extrabold text-[var(--cocoa)]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand)] text-[var(--cocoa)] font-black">
              IA
            </span>
            plicada
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--cocoa-soft)]">
            A casa dos profissionais que aplicam IA no trabalho de verdade.
          </p>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-dark)]">
            #menoshypemaisentrega
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--cocoa-soft)]">
            Navegação
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--cocoa-soft)]">
            {[
              { l: "Academy", h: "#" },
              { l: "Skills (empresas)", h: "#" },
              { l: "Blog", h: "#" },
              { l: "Contato", h: "#" },
              { l: "Termos de uso", h: "#" },
              { l: "Política de privacidade", h: "#" },
            ].map(({ l, h }) => (
              <li key={l}>
                <a href={h} className="hover:text-[var(--cocoa)]">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--cocoa-soft)]">
            Redes
          </p>
          <ul className="mt-4 space-y-3 text-sm text-[var(--cocoa-soft)]">
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-[var(--cocoa)]">
                <Instagram className="h-4 w-4" /> @marimarquescb
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-[var(--cocoa)]">
                <Youtube className="h-4 w-4" /> @iaplicadaa
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-[var(--cocoa)]">
                <Linkedin className="h-4 w-4" /> Mariana Marques
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="container-narrow flex flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[var(--cocoa-soft)] md:flex-row">
          <p>© 2026 IAplicada · Todos os direitos reservados</p>
          <p>contato@iaplicada.com</p>
        </div>
      </div>
    </footer>
  );
}
