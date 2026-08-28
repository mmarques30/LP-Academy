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
  // VSL do hero da /comunidade — VideoPreviewWidescreen
  VSL_AUTO_OPEN: "vsl_auto_open",
  VSL_PLAY_MANUAL: "vsl_play_manual",
  VSL_UNMUTE: "vsl_unmute",
  VSL_CLOSE: "vsl_close",

  /**
   * Evento UNIVERSAL de conversão — disparado em qualquer form
   * submission bem-sucedido. Nome literal esperado por dashboards
   * antigos, vai com metadata `source` (lp_comunidade,
   * lp_indicacao_academy, etc).
   */
  FORM_SUBMISSIONS: "form_submissions",

  // Form da LP /comunidade + ReferralForm (reusa os mesmos nomes
  // por convenção, source no payload diferencia a origem)
  COMUNIDADE_FORM_START: "comunidade_form_start",
  COMUNIDADE_FORM_SUBMIT_ATTEMPT: "comunidade_form_submit_attempt",
  COMUNIDADE_FORM_SUBMIT_SUCCESS: "comunidade_form_submit_success",
  COMUNIDADE_FORM_SUBMIT_ERROR: "comunidade_form_submit_error",
  COMUNIDADE_FINAL_CTA_CLICK: "comunidade_final_cta_click",

  // Thank-you /obrigado
  OBRIGADO_WHATSAPP_CLICK: "obrigado_whatsapp_click",
  OBRIGADO_PLATFORM_CLICK: "obrigado_platform_click",
  OBRIGADO_VIEW: "obrigado_view",
} as const;
