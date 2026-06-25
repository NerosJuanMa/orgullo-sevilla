import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t-2 border-foreground bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-3xl leading-none">
              SEVILLA
              <br />
              CELEBRA EN
              <br />
              <span className="text-pride-yellow">LIBERTAD</span>
            </div>
            <p className="mt-4 max-w-xs text-sm opacity-80">
              El Orgullo que une diversidad, cultura y raíces andaluzas.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.25em] opacity-60">
              Navegación
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <li><Link to="/agenda" className="hover:underline">Agenda</Link></li>
              <li><Link to="/manifestacion" className="hover:underline">Manifestación</Link></li>
              <li><Link to="/artistas" className="hover:underline">Artistas</Link></li>
              <li><Link to="/mapa" className="hover:underline">Mapa</Link></li>
              <li><Link to="/actualidad" className="hover:underline">Actualidad</Link></li>
              <li><Link to="/galeria" className="hover:underline">Galería</Link></li>
              <li><Link to="/manifiesto" className="hover:underline">Manifiesto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.25em] opacity-60">
              Síguenos
            </h4>
            <div className="mt-4 flex gap-2">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Red social"
                  className="grid h-11 w-11 place-items-center border-2 border-background transition-colors hover:bg-background hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs opacity-60">
              prensa@orgullosevilla2026.org
              <br />
              Sevilla · Andalucía · España
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-background/30 pt-6 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Federación Plural LGTBI · Orgullo de Sevilla</span>
          <span>Accesibilidad AA · Mobile First · Hecho con orgullo en Sevilla</span>
        </div>
      </div>
      <div className="h-2 w-full pride-stripe" />
    </footer>
  );
}
