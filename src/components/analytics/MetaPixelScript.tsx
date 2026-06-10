import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { META_PIXEL_ID } from "@/lib/meta-pixel";

/**
 * Meta Pixel (Facebook/Instagram Ads) — instalação CSP-safe + tracking
 * de PageView em cada navegação client-side da SPA.
 *
 * Por que NÃO usamos o snippet IIFE oficial da Meta:
 *   O snippet oficial é uma IIFE injetada inline (script.text = "...").
 *   Hosts com CSP 'strict-dynamic' (Cloudflare/Lovable) bloqueiam inline
 *   scripts. Reescrevemos sem inline:
 *     1) Define window.fbq como queue (mesmo papel do começo da IIFE)
 *     2) Cria <script async src="https://connect.facebook.net/...">
 *        — script externo passa pelo strict-dynamic
 *     3) Chama fbq('init', ID) + fbq('track', 'PageView') — esses calls
 *        ficam na queue até o tag real carregar
 *
 * SPA tracking:
 *   useRouterState({select}) re-renderiza em cada mudança de rota
 *   client-side. Aí o useEffect com dep [pathname] dispara um
 *   PageView novo a cada navegação — sem isso, o pixel só veria
 *   a primeira página de entrada.
 *
 * Dedup do tag:
 *   script.id="meta-pixel-tag" — re-render NÃO re-injeta o tag base.
 */

type FbqQueue = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  push?: unknown;
  loaded?: boolean;
  version?: string;
};

export function MetaPixelScript() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!META_PIXEL_ID) return;

    // 1) Define a queue do fbq (equivalente ao começo da IIFE oficial).
    //    Calls feitos antes do tag carregar ficam na queue e são
    //    processados quando o script real inicializa.
    if (!window.fbq) {
      const queue: unknown[] = [];
      const fbqFn = function (...args: unknown[]) {
        const f = window.fbq;
        if (f && typeof f.callMethod === "function") {
          f.callMethod.apply(f, args);
        } else {
          queue.push(args);
        }
      } as FbqQueue;
      fbqFn.push = fbqFn;
      fbqFn.loaded = true;
      fbqFn.version = "2.0";
      fbqFn.queue = queue;
      window.fbq = fbqFn;
      if (!window._fbq) window._fbq = fbqFn;
    }

    // 2) Carrega o tag externo (uma vez só — script.id evita duplicação).
    if (!document.getElementById("meta-pixel-tag")) {
      const s = document.createElement("script");
      s.id = "meta-pixel-tag";
      s.async = true;
      s.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(s);

      // 3) Init + primeiro PageView. Calls ficam na queue até o tag
      //    carregar — sem race condition.
      window.fbq?.("init", META_PIXEL_ID);
      window.fbq?.("track", "PageView");

      // 4) <noscript> com pixel image fallback pra usuários com JS
      //    desabilitado. Mesma técnica do snippet oficial da Meta.
      const noscript = document.createElement("noscript");
      const img = document.createElement("img");
      img.height = 1;
      img.width = 1;
      img.style.display = "none";
      img.src = `https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`;
      noscript.appendChild(img);
      document.body.appendChild(noscript);
    }
  }, []);

  // PageView em cada navegação SPA. O primeiro PageView já foi disparado
  // no useEffect acima junto com o init — esse useEffect cobre todas as
  // navegações subsequentes (ex: / → /thank-you, /comunidade → /obrigado).
  // Dispara só quando o tag base já foi inicializado (window.fbq existe).
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.fbq) return;
    // Skip o primeiro mount — esse PageView já foi disparado no init.
    // Marcador no próprio fbq pra sobreviver re-renders sem state extra.
    const fbq = window.fbq as FbqQueue & { __sentInitialPageView?: boolean };
    if (!fbq.__sentInitialPageView) {
      fbq.__sentInitialPageView = true;
      return;
    }
    window.fbq("track", "PageView");
  }, [pathname]);

  return null;
}
