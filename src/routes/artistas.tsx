import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, Music, Twitter } from "lucide-react";
import { ARTISTS, STAGES } from "@/lib/data";
import { PageHeader } from "./agenda";

export const Route = createFileRoute("/artistas")({
  head: () => ({
    meta: [
      { title: "Artistas · Orgullo de Sevilla 2026" },
      {
        name: "description",
        content:
          "Cartel oficial del Orgullo de Sevilla 2026. Conoce a los artistas, horarios y escenarios.",
      },
      { property: "og:title", content: "Cartel oficial · Orgullo de Sevilla 2026" },
      { property: "og:description", content: "Música, performance y memoria sobre los escenarios del Orgullo." },
    ],
  }),
  component: ArtistasPage,
});

function ArtistasPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
      <PageHeader
        eyebrow="Cartel oficial"
        title="Artistas"
        subtitle="Voces que han cantado a la libertad. Cuerpos que la bailan."
      />

      <section className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ARTISTS.map((a) => (
          <article
            key={a.id}
            className="group flex flex-col border-2 border-foreground bg-card transition-transform hover:-translate-y-1 hover:shadow-brutal-sm"
          >
            <div
              className={`relative aspect-[4/3] overflow-hidden border-b-2 border-foreground`}
              style={{ backgroundColor: `var(--${a.color})` }}
            >
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-display text-[8rem] leading-none text-background opacity-90 mix-blend-overlay">
                  {a.initials}
                </span>
              </div>
              <span className="absolute left-3 top-3 border-2 border-foreground bg-background px-2 py-0.5 text-[10px] uppercase tracking-widest">
                {a.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-2xl uppercase leading-tight">{a.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.bio}</p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                <div className="border-2 border-foreground p-2">
                  <div className="text-[10px] uppercase opacity-60">Día / hora</div>
                  <div className="font-display text-base">
                    {new Date(a.day).toLocaleDateString("es-ES", { weekday: "short", day: "numeric" })} · {a.time}
                  </div>
                </div>
                <div className="border-2 border-foreground p-2">
                  <div className="text-[10px] uppercase opacity-60">Escenario</div>
                  <div className="font-display text-base">{a.stage.replace("Alameda · ", "Al. ")}</div>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <a href="#" className="grid h-9 w-9 place-items-center border-2 border-foreground">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="grid h-9 w-9 place-items-center border-2 border-foreground">
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-20">
        <h2 className="font-display text-3xl uppercase sm:text-4xl">Escenarios</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((s) => (
            <div key={s} className="border-2 border-foreground bg-card p-5">
              <div className="flex items-center gap-2">
                <Music className="h-4 w-4" />
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Escenario
                </span>
              </div>
              <h3 className="mt-3 font-display text-xl uppercase leading-tight">{s}</h3>
              <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />{" "}
                {s.includes("Alameda")
                  ? "Alameda de Hércules"
                  : s === "Plaza Encarnación"
                  ? "Plaza de la Encarnación"
                  : "Recorrido variable"}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
