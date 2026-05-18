/**
 * Wrapper fino sobre window.clarity pra emitir eventos custom
 * do Microsoft Clarity em qualquer ponto da LP.
 *
 * Como o Clarity expõe a API:
 *   - clarity("event", "<event_name>")   → marca o evento na sessão
 *   - clarity("set", "<key>", "<value>") → tag custom no perfil da sessão
 *
 * Smart events do Clarity vão aparecer em:
 *   Dashboard → Smart Events → Custom
 *
 * Usar SEMPRE este wrapper (não chamar window.clarity direto) — ele
 * tem try/catch + checagem de ambiente, então é safe pra SSR e
 * pra browsers que bloqueiam o tag do Clarity (adblock).
 */

export function trackEvent(name: string, data?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  try {
    window.clarity?.("event", name);
    if (data) {
      for (const [k, v] of Object.entries(data)) {
        window.clarity?.("set", k, String(v));
      }
    }
  } catch {
    /* noop — adblock, CSP estrita, ou SSR */
  }
}

/**
 * Nomes de eventos custom usados na LP. Manter aqui pra evitar typos
 * e pra ter inventário central do que tá sendo trackeado.
 */
export const EVENTS = {
  // Hero VSL
  VSL_AUTO_OPEN: "vsl_auto_open",
  VSL_PLAY_MANUAL: "vsl_play_manual",
  VSL_UNMUTE: "vsl_unmute",
  VSL_CLOSE: "vsl_close",

  // Form de inscrição na comunidade (seção 05)
  FORM_START: "form_start",
  FORM_SUBMIT_ATTEMPT: "form_submit_attempt",
  FORM_SUBMIT_SUCCESS: "form_submit_success",
  FORM_SUBMIT_ERROR: "form_submit_error",

  // CTAs de checkout (seção 07 Investimento)
  CTA_OFFER_MONTHLY: "cta_offer_monthly_click",
  CTA_OFFER_ANNUAL: "cta_offer_annual_click",

  // Thank-you page
  THANKYOU_VIEW: "thankyou_view",
  WHATSAPP_COMMUNITY_CLICK: "whatsapp_community_click",
  ACADEMY_UPSELL_CLICK: "academy_upsell_click",
} as const;
