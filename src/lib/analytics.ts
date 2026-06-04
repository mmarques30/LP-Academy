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

  // Form de inscrição (LP /) — seção Community
  FORM_START: "form_start",
  FORM_SUBMIT_ATTEMPT: "form_submit_attempt",
  FORM_SUBMIT_SUCCESS: "form_submit_success",
  FORM_SUBMIT_ERROR: "form_submit_error",

  // Form de inscrição (LP /comunidade) — versão compacta no hero
  COMUNIDADE_FORM_START: "comunidade_form_start",
  COMUNIDADE_FORM_SUBMIT_ATTEMPT: "comunidade_form_submit_attempt",
  COMUNIDADE_FORM_SUBMIT_SUCCESS: "comunidade_form_submit_success",
  COMUNIDADE_FORM_SUBMIT_ERROR: "comunidade_form_submit_error",
  COMUNIDADE_FINAL_CTA_CLICK: "comunidade_final_cta_click",

  // Thank-you /obrigado — botões específicos da experiência community
  OBRIGADO_WHATSAPP_CLICK: "obrigado_whatsapp_click",
  OBRIGADO_PLATFORM_CLICK: "obrigado_platform_click",
  OBRIGADO_CALENDAR_CLICK: "obrigado_calendar_click",

  // CTA de checkout (seção Investimento) — plano único de R$ 997.
  // Os antigos CTA_OFFER_MONTHLY / CTA_OFFER_ANNUAL ficaram obsoletos
  // quando o produto passou a ser pagamento único sem recorrência.
  CTA_OFFER_ACADEMY: "cta_offer_academy_click",

  // Thank-you pages — uma pra cada LP, pra dar visão separada de
  // conversões no Clarter (Clarity Smart Events)
  THANKYOU_VIEW: "thankyou_view",      // pageview de /thank-you (LP /)
  OBRIGADO_VIEW: "obrigado_view",      // pageview de /obrigado (LP /comunidade)
  WHATSAPP_COMMUNITY_CLICK: "whatsapp_community_click",
  ACADEMY_UPSELL_CLICK: "academy_upsell_click",
} as const;
