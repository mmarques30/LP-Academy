import { useEffect } from "react";

/**
 * Microsoft Clarity (https://clarity.microsoft.com/)
 *
 * Project ID da Mari fixado no código. Pra trocar (ex: separar
 * dev/prod), setar VITE_CLARITY_PROJECT_ID no Lovable → sobrepõe.
 *
 * Dashboard: https://clarity.microsoft.com/projects/view/wpgz0sjipi
 *
 * Por que NÃO usamos a IIFE oficial da Microsoft via script.text:
 *   A IIFE injetada como inline script (script.text=…) é bloqueada
 *   por CSP com 'strict-dynamic', padrão em hosts modernos como
 *   Cloudflare/Lovable. Reescrevemos o equivalente sem inline:
 *     1. Define window.clarity como queue de comandos (mesmo papel
 *        que o começo da IIFE)
 *     2. Cria <script async src="https://www.clarity.ms/tag/{id}">
 *        — script externo é carregado por código com nonce válido
 *        (o próprio bundle React), passa pelo strict-dynamic
 *
 * Dedup: script.id="clarity-tag" — re-render ou navegação client-side
 * não re-injeta.
 */
const DEFAULT_CLARITY_PROJECT_ID = "wpgz0sjipi";

type ClarityQueue = ((...args: unknown[]) => void) & { q?: unknown[][] };

declare global {
  interface Window {
    clarity?: ClarityQueue;
  }
}

export function ClarityScript() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const projectId =
      (import.meta.env.VITE_CLARITY_PROJECT_ID as string | undefined) ||
      DEFAULT_CLARITY_PROJECT_ID;
    if (!projectId) return;

    if (document.getElementById("clarity-tag")) return;

    // 1) Define a fila de comandos clarity (equivalente ao começo
    //    da IIFE oficial). Comandos chamados antes do tag carregar
    //    ficam na queue e são processados quando o script real
    //    inicializa.
    if (!window.clarity) {
      const queue: unknown[][] = [];
      const clarityFn = function (...args: unknown[]) {
        queue.push(args);
      } as ClarityQueue;
      clarityFn.q = queue;
      window.clarity = clarityFn;
    }

    // 2) Carrega o tag real via <script src=…> — script externo
    //    passa por CSP strict-dynamic porque é injetado por código
    //    do bundle (que tem nonce válido).
    const s = document.createElement("script");
    s.id = "clarity-tag";
    s.async = true;
    s.src = `https://www.clarity.ms/tag/${projectId}`;
    document.head.appendChild(s);
  }, []);

  return null;
}
