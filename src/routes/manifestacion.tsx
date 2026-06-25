import { createFileRoute } from "@tanstack/react-router";
import { Accessibility, Bus, Clock, Flag, MapPin, ParkingCircle, Ruler } from "lucide-react";
import { PageHeader } from "./agenda";

export const Route = createFileRoute("/manifestacion")({
  head: () => ({
    meta: [
      { title: "Manifestación · Orgullo de Sevilla 2026" },
      {
        name: "description",
        content:
          "Recorrido oficial, mapa en directo y preguntas frecuentes de la manifestación del Orgullo de Sevilla 2026.",
      },
      { property: "og:title", content: "Manifestación Estatal · Orgullo de Sevilla 2026" },
      { property: "og:description", content: "Sábado 27 de junio, 19:00 h. Alameda → Plaza Nueva." },
    ],
  }),
  component: ManifestacionPage,
});

const STOPS = [
  { name: "Alameda de Hércules", time: "19:00", note: "Salida y lectura de manifiesto" },
  { name: "C/ Trajano", time: "19:25", note: "Punto de hidratación" },
  { name: "Plaza del Duque", time: "19:50", note: "Acceso PMR" },
  { name: "C/ Sierpes", time: "20:25", note: "Animación itinerante" },
  { name: "Plaza San Francisco", time: "20:50", note: "Punto sanitario" },
  { name: "Plaza Nueva", time: "21:15", note: "Llegada · concierto final" },
];

const FAQS = [
  {
    q: "¿Cuánto dura el recorrido?",
    a: "Aproximadamente 2 h 15 min para 2,4 km. Es un recorrido festivo, no competitivo.",
  },
  {
    q: "¿Es accesible para PMR?",
    a: "Sí. Hay zona reservada al inicio en la Alameda y un grupo de acompañamiento durante todo el trayecto.",
  },
  {
    q: "¿Puedo llevar pancartas y banderas?",
    a: "Por supuesto. Se ruega no usar mástiles rígidos y respetar la pancarta de cabecera oficial.",
  },
  {
    q: "¿Hay servicio sanitario?",
    a: "Cuatro puntos sanitarios y dos ambulancias acompañan el recorrido. Se identifican con cruz verde fluorescente.",
  },
];

function ManifestacionPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
      <PageHeader
        eyebrow="Sábado 27 junio · 19:00 h"
        title="Manifestación"
        subtitle="Alameda de Hércules → Plaza Nueva. 2,4 km de raíces que bailan libres por la diversidad."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <Stat icon={Ruler} label="Distancia" value="2,4 km" />
        <Stat icon={Clock} label="Duración estimada" value="2 h 15 min" />
        <Stat icon={Flag} label="Cabecera" value="Pancarta colectiva 2026" />
      </div>

      <section className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="font-display text-3xl uppercase sm:text-4xl">Recorrido</h2>
          <ol className="mt-6 border-2 border-foreground bg-card">
            {STOPS.map((s, i) => (
              <li
                key={s.name}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b-2 border-foreground p-4 last:border-b-0"
              >
                <div className="grid h-10 w-10 place-items-center border-2 border-foreground bg-foreground font-display text-sm text-background">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0">
                  <div className="font-display text-lg uppercase leading-tight">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.note}</div>
                </div>
                <div className="font-display text-xl tabular-nums">{s.time}</div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="font-display text-3xl uppercase sm:text-4xl">Mapa en directo</h2>
          <div className="mt-6 aspect-[4/5] overflow-hidden border-2 border-foreground bg-muted relative">
            <RouteMap />
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 text-[10px] uppercase tracking-widest">
              <Tag color="bg-pride-red">Recorrido</Tag>
              <Tag color="bg-pride-yellow text-black">Puntos info</Tag>
              <Tag color="bg-pride-green">Sanitarios</Tag>
              <Tag color="bg-pride-blue">Escenarios</Tag>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl uppercase sm:text-4xl">Información práctica</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <Info icon={Bus} title="Transporte" text="Líneas C1, C2, C3, C4 y metro L1 (parada Plaza de Armas)." />
          <Info icon={ParkingCircle} title="Aparcamientos" text="Parking Plaza de Armas y Paseo de Colón. Centro restringido." />
          <Info icon={Accessibility} title="Accesibilidad" text="Zona PMR al inicio. Recorrido sin escaleras ni cuestas." />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl uppercase sm:text-4xl">Preguntas frecuentes</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {FAQS.map((f) => (
            <li key={f.q} className="border-2 border-foreground bg-card p-5">
              <h3 className="font-display text-lg uppercase">{f.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof Flag; label: string; value: string }) {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-4 border-2 border-foreground bg-card p-5">
      <div className="grid h-12 w-12 place-items-center border-2 border-foreground bg-pride-yellow text-black">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</div>
        <div className="font-display text-2xl uppercase">{value}</div>
      </div>
    </div>
  );
}

function Info({ icon: Icon, title, text }: { icon: typeof Bus; title: string; text: string }) {
  return (
    <div className="border-2 border-foreground bg-card p-5">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center border-2 border-foreground">
          <Icon className="h-4 w-4" />
        </div>
        <h3 className="font-display text-lg uppercase">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

function Tag({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span className={`border-2 border-foreground px-2 py-1 text-white ${color}`}>{children}</span>
  );
}

function RouteMap() {
  return (
    <svg viewBox="0 0 400 500" className="h-full w-full">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.2"
          />
        </pattern>
      </defs>
      <rect width="400" height="500" fill="url(#grid)" />
      {/* Streets */}
      <g stroke="currentColor" strokeWidth="1.2" opacity="0.35" fill="none">
        <path d="M 0 120 L 400 120" />
        <path d="M 0 220 L 400 220" />
        <path d="M 0 320 L 400 320" />
        <path d="M 100 0 L 100 500" />
        <path d="M 220 0 L 220 500" />
        <path d="M 320 0 L 320 500" />
      </g>
      {/* Route */}
      <path
        d="M 60 80 C 60 150, 180 180, 180 240 S 280 320, 280 380 L 320 430"
        stroke="var(--pride-red)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="0"
      />
      {[
        [60, 80, "1"],
        [120, 150, "2"],
        [180, 240, "3"],
        [230, 300, "4"],
        [280, 380, "5"],
        [320, 430, "6"],
      ].map(([x, y, n], i) => (
        <g key={i}>
          <circle cx={x as number} cy={y as number} r="14" fill="white" stroke="currentColor" strokeWidth="2" />
          <text x={x as number} y={(y as number) + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor">
            {n}
          </text>
        </g>
      ))}
    </svg>
  );
}
