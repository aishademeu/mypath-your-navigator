import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  useNavigate,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import logoAsset from "../assets/mypath-logo.png.asset.json";
import { LanguageProvider, useI18n, hasStoredLang } from "@/lib/i18n";
import { MobileNav } from "@/components/MobileNav";
import { ProProvider } from "@/lib/pro";
import { UpgradeModal } from "@/components/UpgradeModal";

import { en } from "@/lib/i18n/en";

function NotFoundComponent() {
  return <NotFoundInner />;
}
function NotFoundInner() {
  const { dict } = useSafeI18n();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">{dict.errors.pageNotFound}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{dict.errors.pathDoesntExist}</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
            {dict.common.goHome}
          </Link>
        </div>
      </div>
    </div>
  );
}

// Safe i18n hook for boundaries (falls back to English if provider missing)
function useSafeI18n() {
  try { return useI18n(); } catch { return { dict: en, lang: "en" as const, setLang: () => {}, t: () => "" as never }; }
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const { dict } = useSafeI18n();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">{dict.common.somethingWrong}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">{dict.common.tryAgain}</button>
          <a href="/" className="rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium">{dict.common.home}</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#0B1F3A" },
      { title: "MyPath — Find your path. Build your future." },
      { name: "description", content: "MyPath is an AI-powered platform that helps high school students discover educational opportunities, build competitive portfolios, and plan their academic journ" },
      { property: "og:title", content: "MyPath — Find your path. Build your future." },
      { property: "og:description", content: "MyPath is an AI-powered platform that helps high school students discover educational opportunities, build competitive portfolios, and plan their academic journ" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MyPath — Find your path. Build your future." },
      { name: "twitter:description", content: "MyPath is an AI-powered platform that helps high school students discover educational opportunities, build competitive portfolios, and plan their academic journ" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7e2c9642-5817-4dbc-809d-6512b0c2e379/id-preview-65afdbc0--970948ad-1bce-47d7-8505-b054a251459c.lovable.app-1785321104150.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7e2c9642-5817-4dbc-809d-6512b0c2e379/id-preview-65afdbc0--970948ad-1bce-47d7-8505-b054a251459c.lovable.app-1785321104150.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/__l5e/assets-v1/0fcdaa88-2e6b-4693-bab2-70885879dd8b/mypath-logo.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <ProProvider>
          <WelcomeRedirect />
          <Outlet />
          <MobileNav />
          <UpgradeModal />
        </ProProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

function WelcomeRedirect() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (hasStoredLang()) return;
    if (location.pathname === "/welcome") return;
    navigate({ to: "/welcome", replace: true });
  }, [location.pathname, navigate]);
  return null;
}
