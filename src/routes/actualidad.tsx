import { createFileRoute } from "@tanstack/react-router";
import { Bell } from "lucide-react";
import { ALERTS } from "@/lib/data";
import { PageHeader } from "./agenda";

export const Route = createFileRoute("/actualidad")({
  head: () => ({
    meta: [
      { title: "Actualidad y alertas · Orgullo de Sevilla 2026" },
      {
        name: "description",
        content:
          "Avisos y actualizaciones en tiempo real durante el Orgullo de Sevilla 2026: cambios de horario, modificaciones de recorrido, aforos y alertas meteorológicas.",
      },
      { property: "og:title", content: "Actualidad y alertas · Orgullo de Sevilla 2026" },
      { property: "og:description", content: "Información en tiempo real durante el Orgullo." },
    ],
  }),
  component: ActualidadPage,
});

function ActualidadPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
      <PageHeader
        eyebrow="En tiempo real"
        title="Actualidad"
        subtitle="Cambios, avisos y novedades de la organización mientras dura el Orgullo."
      />

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button className="inline-flex items-center gap-2 border-2 border-foreground bg-foreground px-4 py-2.5 font-display text-xs uppercase text-background">
          <Bell className="h-4 w-4" /> Activar notificaciones
        </button>
        <span className="text-xs text-muted-foreground">
          Te avisaremos solo de cambios críticos.
        </span>
      </div>

      <ol className="mt-10 grid gap-3">
        {ALERTS.map((a) => (
          <li
            key={a.id}
            className="grid grid-cols-[auto_1fr] gap-4 border-2 border-foreground bg-card p-5"
          >
            <div
              className={`grid h-12 w-12 shrink-0 place-items-center border-2 border-foreground font-display ${
                a.level === "alert"
                  ? "bg-pride-red text-white"
                  : a.level === "warn"
                  ? "bg-pride-yellow text-black"
                  : "bg-background"
              }`}
            >
              {a.level === "alert" ? "!" : a.level === "warn" ? "⚠" : "i"}
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-xl uppercase">{a.title}</h3>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {a.time}
                </span>
              </div>
              <p className="mt-2 text-sm">{a.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
