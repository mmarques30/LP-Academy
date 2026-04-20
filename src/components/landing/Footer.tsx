import { Instagram, Youtube, Linkedin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[var(--ink)] pt-16 pb-10">
      <div className="container-wide px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-white">
              <Logo className="h-7 w-auto" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              A Academy que transforma ferramentas de IA em resultado real no seu trabalho.
              Sem hype. Sem promessa mágica.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[
                { href: "#", icon: Instagram, label: "Instagram" },
                { href: "#", icon: Youtube, label: "YouTube" },
                { href: "#", icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/70 transition-colors hover:border-[var(--lime)]/40 hover:bg-[var(--lime)]/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">
              Academy
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li><a href="#autoridade" className="transition-colors hover:text-white">Mariana</a></li>
              <li><a href="#academy" className="transition-colors hover:text-white">O que tem dentro</a></li>
              <li><a href="#oferta" className="transition-colors hover:text-white">Investimento</a></li>
              <li><a href="#faq" className="transition-colors hover:text-white">FAQ</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">
              Legal
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li><a href="#" className="transition-colors hover:text-white">Termos de uso</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Política de privacidade</a></li>
              <li><a href="mailto:contato@iaplicada.com" className="transition-colors hover:text-white">contato@iaplicada.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-8 md:flex-row md:items-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} IAplicada · Todos os direitos reservados
          </p>
          <p className="text-xs text-white/40">
            CNPJ 00.000.000/0000-00 · Feito no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
