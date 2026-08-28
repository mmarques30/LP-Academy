import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * LP Academy paga foi DESATIVADA — Mari decidiu focar 100% na
 * captura pra comunidade grátis. A home (/) que servia a LP Academy
 * (12x R$ 83 / R$ 997 à vista) redireciona pra /comunidade
 * preservando todos os query params.
 *
 * Por que redirect em vez de 404:
 *   - Zero perda pra links antigos: anúncios Meta, bio Instagram,
 *     email marketing, WhatsApp — tudo cai suavemente na /comunidade
 *   - UTMs preservados → atribuição de mídia paga continua funcionando
 *   - Reversão trivial se Mari mudar de ideia (git revert)
 *
 * Status HTTP 307 (default do redirect() do TanStack Router) —
 * temporário. Depois de rodar assim e Mari confirmar que é
 * definitivo, um PR seguinte pode subir pra 301 permanent (aí
 * browsers cacheiam o redirect).
 */
export const Route = createFileRoute("/")({
  beforeLoad: ({ search }) => {
    throw redirect({
      to: "/comunidade",
      // Preserva utm_source, utm_medium, utm_campaign, utm_content,
      // utm_term, fbclid, gclid — atribuição de mídia paga precisa
      // desses params sobreviverem ao redirect.
      search: search as Record<string, string>,
    });
  },
});
