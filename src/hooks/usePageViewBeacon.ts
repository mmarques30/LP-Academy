import { useEffect } from "react";

/**
 * Tracker server-side de pageviews — beacon pro endpoint próprio
 * (Edge Function mads-lp-pageview no Supabase). Complementa o
 * Microsoft Clarity, que perde 50-95% dos pageviews em in-app
 * browsers do Instagram/Facebook (script bloqueado).
 *
 * Como funciona:
 *   1. Gera/recupera session_id por aba (sessionStorage)
 *   2. Coleta URL, referrer, UTMs, fbclid/gclid, viewport
 *   3. Envia via navigator.sendBeacon (preferido — não bloqueia
 *      unload) ou fetch keepalive (fallback)
 *   4. Endpoint responde 204 No Content e hashea IP server-side
 *      (LGPD-safe — nenhum dado pessoal no payload do client)
 *
 * Importante:
 *   - Chamar APENAS em rotas de LP pública (não em thank-you /
 *     admin / qualquer rota interna ou pós-conversão)
 *   - useEffect com deps [] garante 1 disparo por mount — se a
 *     rota não re-mount em navegação SPA, esse hook NÃO captura
 *     navegações subsequentes (use no componente de página, não
 *     no root)
 *   - Fire-and-forget: falhas são silenciosas (tracker NUNCA pode
 *     quebrar UX da LP)
 */

const ENDPOINT =
  "https://ciwdlceyjsnlnunktqzx.supabase.co/functions/v1/mads-lp-pageview";
const SESSION_KEY = "mads_session_id";

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
  useEffect(() => {
    if (typeof window === "undefined") return;

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
        const blob = new Blob([JSON.stringify(payload)], {
          type: "application/json",
        });
        navigator.sendBeacon(ENDPOINT, blob);
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
  }, []);
}
