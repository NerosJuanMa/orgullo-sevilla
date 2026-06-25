import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "./theme-provider";

const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/agenda", label: "Agenda" },
  { to: "/manifestacion", label: "Manifestación" },
  { to: "/artistas", label: "Artistas" },
  { to: "/mapa", label: "Mapa" },
  { to: "/actualidad", label: "Actualidad" },
  { to: "/galeria", label: "Galería" },
  { to: "/manifiesto", label: "Manifiesto" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="h-1.5 w-full pride-stripe" />
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:px-6">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="grid h-10 w-10 shrink-0 place-items-center border-2 border-foreground bg-foreground text-background font-display text-lg">
            OS
          </div>
          <div className="min-w-0 leading-tight">
            <div className="truncate font-display text-base sm:text-lg">ORGULLO SEVILLA</div>
            <div className="truncate text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              2026 · Raíces que bailan libres
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => {
              const active = pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                    active
                      ? "bg-foreground text-background"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={toggle}
            aria-label="Cambiar tema"
            className="grid h-10 w-10 shrink-0 place-items-center border-2 border-foreground bg-background transition-colors hover:bg-foreground hover:text-background"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
            className="grid h-10 w-10 shrink-0 place-items-center border-2 border-foreground bg-background lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t-2 border-foreground bg-background lg:hidden">
          <ul className="mx-auto max-w-7xl divide-y-2 divide-foreground">
            {NAV.map((n) => {
              const active = pathname === n.to;
              return (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-4 font-display text-xl uppercase ${
                      active ? "bg-foreground text-background" : ""
                    }`}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
