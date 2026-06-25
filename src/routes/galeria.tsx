import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./agenda";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galería y memoria · Orgullo de Sevilla 2026" },
      {
        name: "description",
        content:
          "Memoria visual del Orgullo de Sevilla 2026: fotografías oficiales, vídeos resumen y material para prensa.",
      },
      { property: "og:title", content: "Galería y memoria · Orgullo de Sevilla 2026" },
      { property: "og:description", content: "La memoria visual de una semana de raíces que bailan libres." },
    ],
  }),
  component: GaleriaPage,
});

const SHAPES = [
  { c: "bg-pride-red", t: "Pregón inaugural", h: 320 },
  { c: "bg-pride-orange", t: "Cuentacuentos", h: 240 },
  { c: "bg-pride-yellow", t: "Talleres", h: 280 },
  { c: "bg-pride-green", t: "Cabecera", h: 360 },
  { c: "bg-pride-blue", t: "Manifestación", h: 300 },
  { c: "bg-pride-violet", t: "Concierto cierre", h: 260 },
  { c: "bg-terracota", t: "Alameda", h: 340 },
  { c: "bg-foreground", t: "Brunch comunitario", h: 220 },
  { c: "bg-arena", t: "Plaza Encarnación", h: 300 },
];

function GaleriaPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
      <PageHeader
        eyebrow="Memoria visual"
        title="Galería"
        subtitle="Fotografías, vídeos y resúmenes diarios del Orgullo. Material descargable para prensa."
      />

      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {SHAPES.map((s, i) => (
          <figure
            key={i}
            className={`border-2 border-foreground ${s.c} text-background break-inside-avoid`}
            style={{ height: s.h }}
          >
            <div className="flex h-full w-full items-end p-5">
              <figcaption className="font-display text-xl uppercase leading-tight">
                {s.t}
              </figcaption>
            </div>
          </figure>
        ))}
      </div>

      <div className="mt-16 border-2 border-foreground bg-card p-8 text-center">
        <h2 className="font-display text-3xl uppercase">Sala de prensa</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
          Material gráfico oficial, dossier de prensa y vídeos en alta resolución a disposición
          de medios acreditados.
        </p>
        <a
          href="mailto:prensa@orgullosevilla2026.org"
          className="mt-6 inline-flex border-2 border-foreground bg-foreground px-5 py-3 font-display text-sm uppercase text-background"
        >
          Solicitar acreditación
        </a>
      </div>
    </div>
  );
}
