import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Tracker server-side de pageviews — beacon pro endpoint próprio
 * (Edge Function mads-lp-pageview no Supabase). Complementa o
 * Microsoft Clarity, que perde 50-95% dos pageviews em in-app
 * browsers do Instagram/Facebook (script bloqueado).
 *
 * Histórico de fixes:
 *   - v1 usava Blob type="application/json" → CORS preflight implícito
 *     fazia browsers/CDNs dropparem o sendBeacon silenciosamente.
 *     Trocado pra "text/plain" (Edge Function faz await req.json()
 *     independente do Content-Type)
 *   - v1 chamava o hook em cada rota individualmente. Movido pro
 *     __root.tsx + useRouterState pra disparar em CADA navegação
 *     (TanStack Router NÃO re-monta o root em navegação SPA —
 *     useEffect com [] só dispararia uma vez)
 *
 * Como funciona:
 *   1. Gera/recupera session_id por aba (sessionStorage)
 *   2. Em cada mudança de pathname, monta payload com URL,
 *      referrer, UTMs, fbclid/gclid, viewport
 *   3. Envia via navigator.sendBeacon (preferido — não bloqueia
 *      unload) com type=text/plain. Se sendBeacon retornar false
 *      (queue cheia, payload muito grande), cai pro fetch keepalive
 *   4. Endpoint responde 204 No Content e hashea IP server-side
 *      (LGPD-safe — nenhum dado pessoal no payload do client)
 *
 * Fire-and-forget: falhas são silenciosas (tracker NUNCA pode
 * quebrar UX da LP).
 */

const ENDPOINT =
  "https://ciwdlceyjsnlnunktqzx.supabase.co/functions/v1/mads-lp-pageview";
const SESSION_KEY = "mads_session_id";

// Rotas pós-conversão / internas que NÃO devem ser trackadas no
// dataset de LP. Match por prefixo — qualquer subrota também é
// excluída (ex: /obrigado/qualquer-coisa).
const DENY_PATH_PREFIXES = ["/thank-you", "/obrigado", "/admin"];

function isDeniedPath(pathname: string): boolean {
  return DENY_PATH_PREFIXES.some((p) => pathname.startsWith(p));
}

function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "";
  let id = sessionStorage.getItem(SESSION_KEY);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

function pickUTMs() {
  if (typeof window === "undefined") return {};
  const sp = new URLSearchParams(window.location.search);
  return {
    utm_source: sp.get("utm_source") || undefined,
    utm_medium: sp.get("utm_medium") || undefined,
    utm_campaign: sp.get("utm_campaign") || undefined,
    utm_content: sp.get("utm_content") || undefined,
    utm_term: sp.get("utm_term") || undefined,
    fbclid: sp.get("fbclid") || undefined,
    gclid: sp.get("gclid") || undefined,
  };
}

export function usePageViewBeacon() {
  // useRouterState re-renderiza o consumer a cada navegação SPA
  // (mudança de pathname). Sem isso, o root component em
  // TanStack Router não re-monta — useEffect com [] só dispararia
  // 1 vez no carregamento inicial, perdendo todas as navegações
  // client-side.
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Skip pós-conversão / rotas internas (regra do spec original do
    // tracker — só LPs públicas entram no dataset)
    if (isDeniedPath(pathname)) return;

    const payload = {
      url: window.location.href,
      referrer: document.referrer || undefined,
      session_id: getOrCreateSessionId(),
      screen_width: window.screen?.width,
      screen_height: window.screen?.height,
      viewport_width: window.innerWidth,
      viewport_height: window.innerHeight,
      ...pickUTMs(),
    };

    try {
      if (navigator.sendBeacon) {
        // text/plain evita CORS preflight implícito que dropava o
        // request silenciosamente em alguns browsers/CDNs. A Edge
        // Function faz await req.json() — parseia independente do
        // Content-Type declarado no Blob.
        const blob = new Blob([JSON.stringify(payload)], {
          type: "text/plain",
        });
        const ok = navigator.sendBeacon(ENDPOINT, blob);
        // sendBeacon retorna false se a queue do browser está cheia
        // ou o payload é grande demais. Nesses casos, fallback fetch
        // com keepalive (também não bloqueia unload).
        if (!ok) {
          fetch(ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            keepalive: true,
          }).catch(() => {
            /* silent fail */
          });
        }
      } else {
        fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(() => {
          /* silent fail */
        });
      }
    } catch {
      /* silent fail — tracker NUNCA pode quebrar UX */
    }
  }, [pathname]);
}
