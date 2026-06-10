/**
 * Wrapper fino sobre window.fbq pra disparar eventos do Meta Pixel
 * (Facebook/Instagram) em qualquer ponto da LP.
 *
 * Pixel único compartilhado entre as 2 LPs (Academy / e Comunidade
 * /comunidade) — Mari otimiza separação pelo parâmetro `content_name`
 * (ver `MetaPixelContent` abaixo) e configura Conversões Personalizadas
 * no Gerenciador de Eventos da Meta.
 *
 * IDs do pixel ficam centralizados em `META_PIXEL_ID` (não hardcodar
 * direto nos componentes).
 *
 * Eventos padrão da Meta usados aqui:
 *   - PageView          → todas as rotas (disparado pelo MetaPixelScript)
 *   - Lead              → form submetido com sucesso (qualquer LP)
 *   - InitiateCheckout  → clique no CTA do plano pago (Academy)
 *
 * Por que NÃO chamar window.fbq direto nos componentes:
 *   1) Esse wrapper tem try/catch + guard de SSR/adblock
 *   2) Centraliza nomes de eventos / params (evita typos)
 *   3) Permite trocar de pixel ou desligar tracking num lugar só
 */

export const META_PIXEL_ID = "1499951731095849";

/**
 * Identificadores de "produto/origem" que vão no parâmetro
 * `content_name` dos eventos da Meta. Usados pra criar Conversões
 * Personalizadas separadas por LP no Gerenciador de Eventos.
 */
export type MetaPixelContent =
  | "lp_home_academy" // LP / — produto pago (Academy)
  | "lp_comunidade"; // LP /comunidade — captura grátis

type FbqArgs =
  | ["init", string]
  | ["track", string]
  | ["track", string, Record<string, string | number | boolean>]
  | ["trackCustom", string, Record<string, string | number | boolean>?];

type FbqFn = ((...args: FbqArgs) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  push?: unknown;
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    fbq?: FbqFn;
    _fbq?: FbqFn;
  }
}

/**
 * Dispara um evento padrão da Meta (Lead, PageView, InitiateCheckout, etc).
 * Aceita params opcionais — usado pra `content_name` separar LP de origem.
 */
export function trackMetaEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined") return;
  try {
    if (params) {
      window.fbq?.("track", eventName, params);
    } else {
      window.fbq?.("track", eventName);
    }
  } catch {
    /* noop — adblock, CSP estrita, ou SSR */
  }
}
