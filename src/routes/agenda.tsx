import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Download, MapPin, Search, Share2 } from "lucide-react";
import {
  DAYS,
  EVENTS,
  EVENT_TYPES,
  STAGES,
  type EventType,
  type Stage,
} from "@/lib/data";

export const Route = createFileRoute("/agenda")({
  head: () => ({
    meta: [
      { title: "Agenda · Orgullo de Sevilla 2026" },
      {
        name: "description",
        content:
          "Programación completa del Orgullo de Sevilla 2026. Filtra por día, tipo de actividad, escenario y público.",
      },
      { property: "og:title", content: "Agenda · Orgullo de Sevilla 2026" },
      {
        property: "og:description",
        content: "Toda la programación día a día. Filtra y comparte.",
      },
    ],
  }),
  component: AgendaPage,
});

function AgendaPage() {
  const [day, setDay] = useState<string>(DAYS[0].date);
  const [type, setType] = useState<EventType | "Todos">("Todos");
  const [stage, setStage] = useState<Stage | "Todos">("Todos");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    return EVENTS.filter((e) => e.day === day)
      .filter((e) => (type === "Todos" ? true : e.type === type))
      .filter((e) => (stage === "Todos" ? true : e.stage === stage))
      .filter((e) =>
        q.trim() === ""
          ? true
          : (e.title + e.description).toLowerCase().includes(q.toLowerCase())
      )
      .sort((a, b) => a.start.localeCompare(b.start));
  }, [day, type, stage, q]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
      <PageHeader
        eyebrow="Programación oficial"
        title="Agenda"
        subtitle="Siete días. Cuatro escenarios. Cientos de motivos para bailar libres."
      />

      {/* Filters */}
      <div className="mt-10 border-2 border-foreground bg-card">
        <div className="flex overflow-x-auto border-b-2 border-foreground">
          {DAYS.map((d) => {
            const active = day === d.date;
            return (
              <button
                key={d.date}
                onClick={() => setDay(d.date)}
                className={`min-w-[88px] shrink-0 border-r-2 border-foreground px-4 py-3 font-display text-sm uppercase last:border-r-0 ${
                  active ? "bg-foreground text-background" : "hover:bg-muted"
                }`}
              >
                {d.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-3 p-4 md:grid-cols-[1fr_auto_auto_auto]">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar evento, artista o tema…"
              className="w-full border-2 border-foreground bg-background py-2.5 pl-10 pr-3 text-sm outline-none focus:bg-muted"
            />
          </label>
          <Select
            label="Tipo"
            value={type}
            onChange={(v) => setType(v as EventType | "Todos")}
            options={["Todos", ...EVENT_TYPES]}
          />
          <Select
            label="Escenario"
            value={stage}
            onChange={(v) => setStage(v as Stage | "Todos")}
            options={["Todos", ...STAGES]}
          />
          <button className="inline-flex items-center justify-center gap-2 border-2 border-foreground bg-foreground px-4 py-2.5 font-display text-xs uppercase text-background">
            <Download className="h-4 w-4" /> PDF
          </button>
        </div>
      </div>

      {/* Timeline */}
      <ol className="mt-10 grid gap-4">
        {list.length === 0 && (
          <li className="border-2 border-dashed border-foreground p-10 text-center text-muted-foreground">
            No hay eventos con esos filtros. Prueba a quitarlos.
          </li>
        )}
        {list.map((e) => (
          <li
            key={e.id}
            className="grid grid-cols-[auto_1fr] gap-4 border-2 border-foreground bg-card p-4 sm:grid-cols-[120px_1fr_auto] sm:gap-6 sm:p-6"
          >
            <div className="flex flex-col">
              <div className="font-display text-3xl sm:text-4xl">{e.start}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                hasta {e.end}
              </div>
              <span
                className={`mt-3 inline-flex w-fit items-center border-2 border-foreground px-2 py-0.5 text-[10px] uppercase tracking-widest ${typeColor(
                  e.type
                )}`}
              >
                {e.type}
              </span>
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-xl uppercase leading-tight sm:text-2xl">
                {e.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.description}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                <span className="inline-flex items-center gap-1 border-2 border-foreground px-2 py-1">
                  <MapPin className="h-3 w-3" /> {e.stage}
                </span>
                <span className="border-2 border-foreground px-2 py-1">{e.audience}</span>
              </div>
            </div>
            <div className="col-span-2 flex items-start gap-2 sm:col-span-1 sm:flex-col">
              <button className="inline-flex items-center gap-1 border-2 border-foreground bg-background px-3 py-2 text-xs uppercase">
                <Share2 className="h-3 w-3" /> Compartir
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="grid">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border-2 border-foreground bg-background px-3 py-2.5 text-sm outline-none focus:bg-muted"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {label}: {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function typeColor(t: EventType) {
  switch (t) {
    case "Música":
      return "bg-pride-violet text-white";
    case "Cultura":
      return "bg-pride-blue text-white";
    case "Reivindicación":
      return "bg-pride-red text-white";
    case "Familiar":
      return "bg-pride-green text-white";
    case "Deporte":
      return "bg-pride-orange text-black";
    case "Fiesta":
      return "bg-pride-yellow text-black";
  }
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="border-b-2 border-foreground pb-6">
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {eyebrow}
        </div>
      )}
      <h1 className="mt-3 font-display text-5xl uppercase sm:text-7xl">{title}</h1>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </header>
  );
}
