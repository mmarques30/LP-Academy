import { Instagram, Youtube, Linkedin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--cream)]">
      <div className="container-narrow grid gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="text-[var(--cocoa)]" aria-label="IAplicada">
            <Logo className="h-8 w-auto" />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-[var(--cocoa-soft)]">
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
              { l: "Academy", h: "#investimento", ext: false },
              { l: "Business", h: "https://iaplicada.com", ext: true },
              { l: "Contato", h: "mailto:equipe@iaplicada.com", ext: false },
              // "Termos de uso" e "Política de privacidade" removidos
              // por enquanto — apontavam pra href="#" (dead clicks no
              // Clarity). Voltam quando as páginas existirem de verdade.
            ].map(({ l, h, ext }) => (
              <li key={l}>
                <a
                  href={h}
                  {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="hover:text-[var(--cocoa)]"
                >
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
              <a href="https://www.instagram.com/marimarquescb/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--cocoa)]">
                <Instagram className="h-4 w-4" /> @marimarquescb
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@iaplicadaa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--cocoa)]">
                <Youtube className="h-4 w-4" /> @iaplicadaa
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/marianamarquescabral/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--cocoa)]">
                <Linkedin className="h-4 w-4" /> Mariana Marques
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="container-narrow flex flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[var(--cocoa-soft)] md:flex-row">
          <p>© 2026 IAplicada · Todos os direitos reservados</p>
          <p>
            <a
              href="mailto:equipe@iaplicada.com"
              className="hover:text-[var(--cocoa)]"
            >
              equipe@iaplicada.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
