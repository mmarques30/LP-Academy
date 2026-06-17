import { useEffect } from "react";

/**
 * Microsoft Clarity (https://clarity.microsoft.com/)
 *
 * Dois projetos Clarity, um por LP — pra separar funil/analytics
 * entre o tráfego do Academy pago (LP /) e o tráfego de captura da
 * comunidade gratuita (LP /comunidade):
 *
 *   - Project HOME (wpgz0sjipi):
 *     Dashboard: https://clarity.microsoft.com/projects/view/wpgz0sjipi
 *     Rotas: /, /thank-you
 *
 *   - Project COMUNIDADE (x2925vhhto):
 *     Dashboard: https://clarity.microsoft.com/projects/view/x2925vhhto
 *     Rotas: /comunidade, /obrigado
 *
 * Como funciona em SPA:
 *   useEffect com deps [] roda 1 vez no primeiro mount.
 *   window.location.pathname nesse momento = página de ENTRADA
 *   (landing page). O projeto escolhido aí acompanha a sessão
 *   inteira do usuário, mesmo se ele navegar entre rotas
 *   client-side.
 *
 *   Caveat: se a pessoa entrar pela / e depois navegar pra
 *   /comunidade, os eventos de /comunidade vão pro projeto HOME
 *   (não COMUNIDADE). Esse é o comportamento padrão de Clarity em
 *   SPA — Mari trata cada projeto como "funil por landing", não
 *   "funil por rota visitada". Funciona bem pra campanhas que
 *   apontam direto pra cada LP.
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

const HOME_PROJECT_ID = "wpgz0sjipi";
const COMUNIDADE_PROJECT_ID = "x2925vhhto";

// Mapeamento de rota → project ID. Editar aqui quando adicionar
// rotas novas. Ordem importa (primeiro match vence — coloque o mais
// específico primeiro). Qualquer rota que não bater nada cai no
// HOME_PROJECT_ID por default.
const ROUTE_TO_PROJECT: Array<{ pathStartsWith: string; id: string }> = [
  { pathStartsWith: "/comunidade", id: COMUNIDADE_PROJECT_ID },
  { pathStartsWith: "/indicacaoacademy", id: COMUNIDADE_PROJECT_ID },
  { pathStartsWith: "/obrigado", id: COMUNIDADE_PROJECT_ID },
];

function pickProjectIdForPath(pathname: string): string {
  for (const route of ROUTE_TO_PROJECT) {
    if (pathname.startsWith(route.pathStartsWith)) {
      return route.id;
    }
  }
  return HOME_PROJECT_ID;
}

type ClarityQueue = ((...args: unknown[]) => void) & { q?: unknown[][] };

declare global {
  interface Window {
    clarity?: ClarityQueue;
  }
}

export function ClarityScript() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // VITE_CLARITY_PROJECT_ID continua funcionando como override
    // global (útil pra dev/staging usar um projeto separado sem
    // mexer no código). Se setada, sobrepõe o roteamento por path.
    const overrideId = import.meta.env.VITE_CLARITY_PROJECT_ID as
      | string
      | undefined;
    const projectId =
      overrideId || pickProjectIdForPath(window.location.pathname);
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
