import { useEffect } from "react";

/**
 * Microsoft Clarity (https://clarity.microsoft.com/)
 *
 * Project ID da Mari, fixado direto no código pra evitar dependência
 * de env var no Lovable. Pra trocar de projeto (ex: separar dev/prod),
 * setar VITE_CLARITY_PROJECT_ID no Lovable Settings → Environment
 * Variables, que sobrepõe este default.
 *
 * Acessar dashboard: https://clarity.microsoft.com/projects/view/wpgxq27fhi/dashboard
 *
 * Comportamento:
 * - Injeta o snippet oficial da Microsoft no document.head após o
 *   hydrate (useEffect — script é client-only por design).
 * - Dedup via id="clarity-tag": navegação client-side entre / e
 *   /thank-you não injeta de novo.
 * - Privacy by default: Clarity anonimiza IP e mascara conteúdo de
 *   inputs. Não captura senhas.
 */
const DEFAULT_CLARITY_PROJECT_ID = "wpgxq27fhi";

export function ClarityScript() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const projectId =
      (import.meta.env.VITE_CLARITY_PROJECT_ID as string | undefined) ||
      DEFAULT_CLARITY_PROJECT_ID;
    if (!projectId) return;

    if (document.getElementById("clarity-tag")) return;

    const s = document.createElement("script");
    s.id = "clarity-tag";
    s.type = "text/javascript";
    s.async = true;
    // Snippet oficial Microsoft Clarity (IIFE que injeta o tag real
    // do tracker e expõe window.clarity como queue de comandos).
    s.text = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", ${JSON.stringify(
      projectId,
    )});`;
    document.head.appendChild(s);
  }, []);

  return null;
}
