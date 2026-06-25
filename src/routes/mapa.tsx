import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "./agenda";

export const Route = createFileRoute("/mapa")({
  head: () => ({
    meta: [
      { title: "Mapa interactivo · Orgullo de Sevilla 2026" },
      {
        name: "description",
        content:
          "Mapa interactivo con escenarios, transporte, accesos PMR, sanitarios y hostelería colaboradora.",
      },
      { property: "og:title", content: "Mapa interactivo · Orgullo de Sevilla 2026" },
      { property: "og:description", content: "Encuentra cada punto clave del Orgullo en menos de 30 segundos." },
    ],
  }),
  component: MapaPage,
});

const LAYERS = [
  { id: "stage", label: "Escenarios", color: "bg-pride-blue" },
  { id: "info", label: "Puntos de información", color: "bg-pride-yellow text-black" },
  { id: "transport", label: "Transporte público", color: "bg-pride-violet" },
  { id: "pmr", label: "Accesos PMR", color: "bg-pride-green" },
  { id: "health", label: "Sanitarios", color: "bg-pride-red" },
  { id: "emergency", label: "Emergencias", color: "bg-foreground text-background" },
  { id: "route", label: "Recorrido manifestación", color: "bg-pride-orange text-black" },
  { id: "horeca", label: "Hostelería colaboradora", color: "bg-terracota text-white" },
];

type PoiKind = (typeof LAYERS)[number]["id"];

const POIS: { id: string; kind: PoiKind; name: string; x: number; y: number }[] = [
  { id: "p1", kind: "stage", name: "Escenario Norte", x: 110, y: 130 },
  { id: "p2", kind: "stage", name: "Escenario Sur", x: 150, y: 220 },
  { id: "p3", kind: "stage", name: "Plaza Encarnación", x: 260, y: 280 },
  { id: "p4", kind: "info", name: "Info Alameda", x: 130, y: 170 },
  { id: "p5", kind: "info", name: "Info Encarnación", x: 280, y: 290 },
  { id: "p6", kind: "transport", name: "Metro Plaza Armas", x: 60, y: 240 },
  { id: "p7", kind: "transport", name: "Tranvía Plaza Nueva", x: 320, y: 410 },
  { id: "p8", kind: "pmr", name: "Acceso PMR Alameda", x: 100, y: 100 },
  { id: "p9", kind: "pmr", name: "Acceso PMR Plaza Nueva", x: 310, y: 430 },
  { id: "p10", kind: "health", name: "Sanitario Trajano", x: 180, y: 250 },
  { id: "p11", kind: "health", name: "Sanitario Sierpes", x: 250, y: 340 },
  { id: "p12", kind: "emergency", name: "Cruz Roja", x: 70, y: 410 },
  { id: "p13", kind: "horeca", name: "Bar La Plazuela", x: 200, y: 200 },
  { id: "p14", kind: "horeca", name: "Café Levíes", x: 290, y: 350 },
];

function MapaPage() {
  const [active, setActive] = useState<Record<PoiKind, boolean>>(
    Object.fromEntries(LAYERS.map((l) => [l.id, true])) as Record<PoiKind, boolean>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
      <PageHeader
        eyebrow="Orientación"
        title="Mapa interactivo"
        subtitle="Activa las capas que necesites. Pensado para usar caminando, incluso con poca cobertura."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="border-2 border-foreground bg-card p-4">
          <h2 className="font-display text-sm uppercase tracking-[0.25em] text-muted-foreground">
            Capas
          </h2>
          <ul className="mt-4 grid gap-2">
            {LAYERS.map((l) => {
              const isOn = active[l.id];
              return (
                <li key={l.id}>
                  <button
                    onClick={() => setActive((a) => ({ ...a, [l.id]: !a[l.id] }))}
                    className={`grid w-full grid-cols-[auto_1fr_auto] items-center gap-3 border-2 border-foreground px-3 py-2 text-left text-sm transition-colors ${
                      isOn ? "bg-background" : "bg-muted/40 opacity-70"
                    }`}
                  >
                    <span
                      className={`grid h-5 w-5 place-items-center border-2 border-foreground text-[10px] font-bold ${l.color}`}
                    >
                      {isOn ? "✓" : ""}
                    </span>
                    <span className="truncate">{l.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        <div className="relative aspect-[4/5] w-full overflow-hidden border-2 border-foreground bg-muted">
          <svg viewBox="0 0 400 500" className="h-full w-full">
            <defs>
              <pattern id="grid2" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
              </pattern>
            </defs>
            <rect width="400" height="500" fill="url(#grid2)" />
            <g stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none">
              <path d="M 0 130 L 400 130" />
              <path d="M 0 250 L 400 250" />
              <path d="M 0 380 L 400 380" />
              <path d="M 90 0 L 90 500" />
              <path d="M 220 0 L 220 500" />
              <path d="M 320 0 L 320 500" />
            </g>
            {active.route && (
              <path
                d="M 80 80 C 80 160, 200 200, 200 280 S 300 380, 320 430"
                stroke="var(--pride-orange)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />
            )}
            {POIS.filter((p) => active[p.kind]).map((p) => {
              const layer = LAYERS.find((l) => l.id === p.kind)!;
              const fill =
                p.kind === "stage" ? "var(--pride-blue)" :
                p.kind === "info" ? "var(--pride-yellow)" :
                p.kind === "transport" ? "var(--pride-violet)" :
                p.kind === "pmr" ? "var(--pride-green)" :
                p.kind === "health" ? "var(--pride-red)" :
                p.kind === "emergency" ? "var(--foreground)" :
                "var(--terracota)";
              return (
                <g key={p.id}>
                  <circle cx={p.x} cy={p.y} r="10" fill={fill} stroke="var(--foreground)" strokeWidth="2" />
                  <text
                    x={p.x + 14}
                    y={p.y + 4}
                    fontSize="9"
                    fontWeight="700"
                    fill="currentColor"
                  >
                    {layer.label.split(" ")[0]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}
