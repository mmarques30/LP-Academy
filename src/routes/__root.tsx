import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { ClarityScript } from "@/components/analytics/ClarityScript";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Academy · Aplique IA no seu trabalho de verdade · 12× R$ 83" },
      { name: "description", content: "O sistema que destrava profissionais brilhantes do medo de IA — e transforma cada aula em uma entrega concreta na sua rotina." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Academy · Aplique IA no seu trabalho de verdade · 12× R$ 83" },
      { property: "og:description", content: "O sistema que destrava profissionais brilhantes do medo de IA — e transforma cada aula em uma entrega concreta na sua rotina." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Academy · Aplique IA no seu trabalho de verdade · 12× R$ 83" },
      { name: "twitter:description", content: "O sistema que destrava profissionais brilhantes do medo de IA — e transforma cada aula em uma entrega concreta na sua rotina." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/583f722c-e8bc-4148-8f95-d8b20b32754d/id-preview-b85fb111--b5e5fe12-81ba-4e2d-8fec-eb9da87424a0.lovable.app-1778461172325.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/583f722c-e8bc-4148-8f95-d8b20b32754d/id-preview-b85fb111--b5e5fe12-81ba-4e2d-8fec-eb9da87424a0.lovable.app-1778461172325.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      // Pré-aquece DNS/TLS pro Microsoft Clarity — quando o snippet
      // dispara o request do tag real, a conexão já está pronta
      { rel: "preconnect", href: "https://www.clarity.ms" },
      // Foto da Mari (LCP do Hero) — agora servida do /public local.
      // Preload com fetchpriority="high" garante que o browser baixa
      // antes de outros assets, mantendo LCP curto.
      {
        rel: "preload",
        href: "/ec3f45ad-7b47-4007-b028-c9340649f3e6.jpeg",
        as: "image",
        type: "image/jpeg",
        fetchpriority: "high",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..900,0..100;1,9..144,300..900,0..100&family=Inter+Tight:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <ClarityScript />
      <Outlet />
    </>
  );
}
