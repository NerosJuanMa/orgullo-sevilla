import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { PageHeader } from "./agenda";

export const Route = createFileRoute("/manifiesto")({
  head: () => ({
    meta: [
      { title: "Manifiesto · Orgullo de Sevilla 2026" },
      {
        name: "description",
        content:
          "Manifiesto oficial del Orgullo de Sevilla 2026 y archivo permanente de discursos, comunicados y documentación.",
      },
      { property: "og:title", content: "Manifiesto · Orgullo de Sevilla 2026" },
      { property: "og:description", content: "Raíces que bailan libres. Manifiesto oficial 2026." },
    ],
  }),
  component: ManifiestoPage,
});

const DOCS = [
  { title: "Manifiesto oficial 2026", size: "PDF · 240 KB" },
  { title: "Discurso de bienvenida", size: "PDF · 180 KB" },
  { title: "Comunicado conjunto entidades", size: "PDF · 312 KB" },
  { title: "Memoria gráfica 2025", size: "PDF · 8,1 MB" },
];

function ManifiestoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
      <PageHeader
        eyebrow="Archivo permanente"
        title="Manifiesto"
        subtitle="La palabra que sostiene el Orgullo. Documentación oficial para consulta y descarga."
      />

      <article className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="prose max-w-none">
          <div className="border-l-4 border-foreground bg-card p-8 shadow-brutal-sm">
            <h2 className="font-display text-4xl uppercase leading-tight sm:text-5xl">
              Raíces que bailan libres
            </h2>
            <p className="mt-6 text-lg leading-relaxed">
              Nos plantamos en la Alameda como árboles en una plaza vieja: con la memoria
              hundida en la tierra y las ramas tendidas hacia un cielo común. Somos
              Andalucía y somos disidencia. Somos Lorca y somos Ocaña. Somos quienes
              llegaron antes y quienes llegarán después.
            </p>
            <p className="mt-4 text-base text-muted-foreground">
              Bailamos porque podemos. Bailamos porque no siempre pudimos. Bailamos por
              quienes no pueden todavía. Reivindicamos derechos plenos, vidas seguras,
              calles habitables y una administración que esté a la altura del país que
              ya somos.
            </p>
            <p className="mt-4 text-base text-muted-foreground">
              El Orgullo de Sevilla 2026 no es una fiesta para ver: es una calle para
              recorrer. No es un decorado: es una conversación. No es un final: es una
              raíz que seguirá creciendo.
            </p>
            <p className="mt-6 font-display text-xl uppercase">
              Sevilla celebra en libertad.
            </p>
          </div>
        </div>

        <aside>
          <h3 className="font-display text-2xl uppercase">Descargas</h3>
          <ul className="mt-4 grid gap-3">
            {DOCS.map((d) => (
              <li key={d.title}>
                <a
                  href="#"
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-2 border-foreground bg-card p-4 transition-transform hover:-translate-y-0.5 hover:shadow-brutal-sm"
                >
                  <div className="grid h-10 w-10 place-items-center border-2 border-foreground bg-pride-yellow text-black">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate font-display text-base uppercase">{d.title}</div>
                    <div className="text-xs text-muted-foreground">{d.size}</div>
                  </div>
                  <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </article>
    </div>
  );
}
