import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider } from "../components/theme-provider";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl">404</h1>
        <h2 className="mt-4 font-display text-2xl uppercase">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Esta página se fue de fiesta y no ha vuelto.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center border-2 border-foreground bg-foreground px-5 py-3 font-display text-sm uppercase text-background"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl uppercase">Algo se ha torcido</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Vuelve a intentarlo o regresa al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border-2 border-foreground bg-foreground px-4 py-2 font-display text-sm uppercase text-background"
          >
            Reintentar
          </button>
          <a
            href="/"
            className="border-2 border-foreground bg-background px-4 py-2 font-display text-sm uppercase"
          >
            Ir al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Orgullo de Sevilla 2026 · Raíces que bailan libres" },
      {
        name: "description",
        content:
          "Web oficial del Orgullo de Sevilla 2026: agenda, manifestación, artistas, mapa y actualidad en tiempo real.",
      },
      { name: "theme-color", content: "#1F1F1F" },
      { property: "og:title", content: "Orgullo de Sevilla 2026 · Raíces que bailan libres" },
      {
        property: "og:description",
        content: "Raíces que bailan libres. 22-28 junio 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Orgullo de Sevilla 2026 · Raíces que bailan libres" },
      { name: "description", content: "Pixel Perfect Web builds responsive websites with a light/dark mode toggle." },
      { property: "og:description", content: "Pixel Perfect Web builds responsive websites with a light/dark mode toggle." },
      { name: "twitter:description", content: "Pixel Perfect Web builds responsive websites with a light/dark mode toggle." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/5okLRNTV8hZovl5l8E36llTKYBH3/social-images/social-1782374065420-64b88ae1-1d83-4621-af66-ec19b708ff48.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/5okLRNTV8hZovl5l8E36llTKYBH3/social-images/social-1782374065420-64b88ae1-1d83-4621-af66-ec19b708ff48.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Sans:wght@400;500;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
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
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            <Outlet />
          </main>
          <SiteFooter />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
