import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

// Form Lovable IAplicada — slug "academy"
const FORM_SLUG = "academy";
const FORM_ORIGIN = "https://id-preview--ce4ae4c7-4381-4764-a549-46545bb9de13.lovable.app";

const benefits = [
  "Aula ao vivo gratuita toda segunda · 19h30",
  "Acesso à comunidade IAplicada",
  "Newsletter quinzenal com prompts e workflows testados",
];

export function Community() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Monta o iframe do form Lovable preservando o comportamento do embed oficial
  // (UTMs + auto-resize via postMessage). Equivalente em React do <script> que a Mari mandou.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Captura UTMs da URL atual e repassa pro iframe
    const params = new URLSearchParams(window.location.search);
    const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
    const utmQuery = utmKeys
      .map((k) => `${k}=${encodeURIComponent(params.get(k) || "")}`)
      .join("&");

    const iframe = document.createElement("iframe");
    iframe.src = `${FORM_ORIGIN}/form/${FORM_SLUG}?${utmQuery}&embed=1`;
    iframe.style.width = "100%";
    iframe.style.minHeight = "720px";
    iframe.style.border = "0";
    iframe.style.borderRadius = "12px";
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("title", "Formulário IAplicada");
    container.appendChild(iframe);

    // Auto-resize quando o form interno avisar a altura via postMessage
    const onMessage = (e: MessageEvent) => {
      const data = e.data as { type?: string; slug?: string; height?: number } | null;
      if (!data || data.type !== "iaplicada-form-resize") return;
      if (data.slug !== FORM_SLUG) return;
      if (typeof data.height !== "number") return;
      iframe.style.height = `${data.height + 20}px`;
    };
    window.addEventListener("message", onMessage);

    return () => {
      window.removeEventListener("message", onMessage);
      if (iframe.parentNode === container) {
        container.removeChild(iframe);
      }
    };
  }, []);

  return (
    <section id="comunidade" className="section-pad bg-[var(--cream)]">
      <div className="container-wide px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow">05 — Comunidade gratuita</span>

            <h2 className="mt-7 h-section text-[var(--cocoa)]">
              Antes de comprar,{" "}
              <span className="serif-italic text-[var(--brand-dark)]">você participa.</span>
            </h2>

            <p className="mt-7 max-w-[46ch] text-[17px] leading-[1.6] text-[var(--cocoa-soft)] md:text-[19px]">
              Entra grátis na comunidade IAplicada e participa da aula ao vivo de toda
              segunda às 19h30 — sem cartão, sem fidelidade. Você sente o método
              APLICA na prática antes de decidir entrar pro Academy.
            </p>

            <ul className="mt-10 space-y-4">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-[15px] leading-[1.55] text-[var(--cocoa)]"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-[var(--cocoa)]">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <p className="mono-label mt-10 text-[var(--cocoa-soft)]">
              Sem cartão · sem fidelidade · cancele quando quiser
            </p>
          </motion.div>

          {/* Iframe do form Lovable IAplicada */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-[24px] bg-[var(--offwhite)] p-6 ring-1 ring-[var(--cocoa)]/10 shadow-[0_30px_70px_-30px_rgba(13,13,13,0.15)] md:p-8">
              <div
                ref={containerRef}
                id="iaplicada-form-academy"
                style={{ width: "100%", maxWidth: "640px", margin: "0 auto" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
