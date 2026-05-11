import { useEffect } from "react";

/**
 * Microsoft Clarity (https://clarity.microsoft.com/)
 *
 * Como ativar:
 * 1. Cria um projeto em clarity.microsoft.com (de graça, sem cartão)
 * 2. Copia o "Project ID" (string curta, tipo "abc123def456")
 * 3. No Lovable: Settings → Environment Variables, adiciona
 *    VITE_CLARITY_PROJECT_ID com o valor copiado
 * 4. Republica a LP — Clarity começa a gravar sessions, heatmaps,
 *    scroll maps, etc.
 *
 * Se a env var não estiver setada, nenhum script é carregado
 * (zero overhead, sem placeholder fantasma).
 *
 * Como o script é client-only (injetado via useEffect), ele só
 * roda depois do hydrate. Isso é o comportamento default oficial
 * do snippet que a Microsoft fornece, e não impacta SEO.
 *
 * O script faz dedup via id="clarity-tag" — se a página re-renderiza
 * (ex: navegação client-side entre / e /thank-you), o script não é
 * injetado de novo.
 */
export function ClarityScript() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const projectId = import.meta.env.VITE_CLARITY_PROJECT_ID as
      | string
      | undefined;
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
