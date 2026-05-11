import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Lock } from "lucide-react";

// URL pública do form Lovable IAplicada (Publish da Mari).
// A versão antiga "id-preview--…lovable.app" era privada → redirecionava
// pra auth-bridge pra qualquer visitante não-logado na Lovable.
const FORM_ORIGIN = "https://saasiaplicada.lovable.app";
const FORM_SLUG = "academy";

// O que a pessoa recebe se inscrevendo grátis. Mantido conciso — o
// contraste com o Academy fica numa linha sutil logo abaixo.
const freeBenefits = [
  "Aula ao vivo · toda segunda 19h30",
  "Comunidade aberta IAplicada",
  "Newsletter quinzenal",
];

function buildFormSrc(): string {
  const base = `${FORM_ORIGIN}/form/${FORM_SLUG}`;
  if (typeof window === "undefined") return `${base}?embed=1`;
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
  const utmQuery = utmKeys
    .map((k) => `${k}=${encodeURIComponent(params.get(k) || "")}`)
    .join("&");
  return `${base}?${utmQuery}&embed=1`;
}

export function Community() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [src, setSrc] = useState<string | null>(null);

  // Monta o src com os UTMs depois da hidratação no client.
  useEffect(() => {
    setSrc(buildFormSrc());
  }, []);

  // Auto-resize do iframe quando o form interno envia postMessage
  // (mesmo contrato do embed script oficial: "iaplicada-form-resize").
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      const data = e.data as { type?: string; slug?: string; height?: number } | null;
      if (!data || data.type !== "iaplicada-form-resize") return;
      if (data.slug !== FORM_SLUG) return;
      if (typeof data.height !== "number") return;
      if (iframeRef.current) {
        iframeRef.current.style.height = `${data.height + 20}px`;
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <section id="comunidade" className="section-pad bg-[var(--cream)]">
      <div className="container-wide px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          {/* Copy — versão simplificada: título + 1 frase + 3 bullets + 1 linha de contraste */}
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

            <p className="mt-7 max-w-[44ch] text-[17px] leading-[1.6] text-[var(--cocoa-soft)] md:text-[19px]">
              Aula ao vivo de toda segunda, comunidade e newsletter — sem cartão.
              É o gostinho do método APLICA na prática.
            </p>

            <ul className="mt-8 space-y-3.5">
              {freeBenefits.map((b) => (
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

            {/* Contraste com Academy em UMA linha sutil — não chama atenção,
                mas deixa claro onde tá o resultado de verdade */}
            <p className="mt-8 inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-[var(--cocoa-soft)]">
              <Lock className="h-3.5 w-3.5 shrink-0" />
              <span>Gravações, materiais e mentoria semanal ficam no Academy.</span>
              <a
                href="#investimento"
                className="inline-flex items-center gap-1 font-medium text-[var(--brand-dark)] transition-colors hover:text-[#5C6F1D]"
              >
                Ver completo
                <ArrowRight className="h-3 w-3" />
              </a>
            </p>
          </motion.div>

          {/* Iframe do form Lovable IAplicada (URL pública). UTMs repassados
              + auto-resize via postMessage seguindo o contrato do embed oficial. */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div
              id="iaplicada-form-academy"
              style={{ width: "100%", maxWidth: "640px", margin: "0 auto" }}
            >
              {src && (
                <iframe
                  ref={iframeRef}
                  src={src}
                  title="Formulário IAplicada"
                  loading="lazy"
                  style={{
                    width: "100%",
                    minHeight: "720px",
                    border: 0,
                    borderRadius: "12px",
                  }}
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
