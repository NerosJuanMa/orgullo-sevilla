import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  Flag,
  MapPin,
  Megaphone,
  Music,
  Sparkles,
} from "lucide-react";
import heroImg from "@/assets/hero-orgullo.jpg";
import { Countdown } from "@/components/countdown";
import { ALERTS, EVENTS, PARADE_DATE, PRIDE_START } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orgullo de Sevilla 2026 · Raíces que bailan libres" },
      {
        name: "description",
        content:
          "Web oficial del Orgullo de Sevilla 2026. Agenda completa, manifestación, artistas, mapa interactivo y actualizaciones en tiempo real.",
      },
      { property: "og:title", content: "Orgullo de Sevilla 2026" },
      {
        property: "og:description",
        content: "Raíces que bailan libres. 22-28 junio 2026.",
      },
    ],
  }),
  component: Index,
});

const QUICK = [
  { to: "/agenda", label: "Agenda", icon: Calendar },
  { to: "/manifestacion", label: "Manifestación", icon: Flag },
  { to: "/artistas", label: "Artistas", icon: Music },
  { to: "/mapa", label: "Mapa", icon: MapPin },
  { to: "/actualidad", label: "Actualidad", icon: Megaphone },
] as const;

function Index() {
  const nextEvent = EVENTS.find((e) => new Date(`${e.day}T${e.start}:00+02:00`) > new Date()) ??
    EVENTS[0];
  const target = Date.now() < PRIDE_START.getTime() ? PRIDE_START : PARADE_DATE;

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b-2 border-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:px-6 lg:py-20">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 border-2 border-foreground px-3 py-1 text-xs uppercase tracking-[0.25em]">
              <Sparkles className="h-3 w-3" /> 22 — 28 junio 2026 · Sevilla
            </span>
            <h1 className="mt-6 font-display text-5xl uppercase leading-[0.9] sm:text-7xl lg:text-[7.5rem]">
              Raíces
              <br />
              que <span className="text-stroke">bailan</span>
              <br />
              <span className="bg-foreground px-3 text-background">libres</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Una semana de cultura, diversidad y reivindicación en el corazón de Andalucía.
              Sevilla celebra en libertad el Orgullo que une raíces y futuro.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/agenda"
                className="inline-flex items-center gap-2 border-2 border-foreground bg-foreground px-5 py-3 font-display text-sm uppercase text-background transition-transform hover:-translate-y-0.5"
              >
                Ver agenda <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/manifestacion"
                className="inline-flex items-center gap-2 border-2 border-foreground bg-background px-5 py-3 font-display text-sm uppercase transition-transform hover:-translate-y-0.5"
              >
                <Flag className="h-4 w-4" /> Manifestación
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 -z-10 pride-stripe opacity-40 blur-2xl" />
            <div className="border-2 border-foreground bg-card shadow-brutal">
              <img
                src={heroImg}
                alt="Ilustración de Orgullo de Sevilla 2026: figuras bailando con raíces y banderas arcoíris frente a la Alameda de Hércules."
                width={1600}
                height={1200}
                className="block aspect-[4/3] h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-t-2 border-foreground bg-foreground py-3 text-background overflow-hidden">
          <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-xl uppercase">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12">
                <span>Raíces que bailan libres</span>
                <span className="text-pride-yellow">●</span>
                <span>Sevilla celebra en libertad</span>
                <span className="text-pride-orange">●</span>
                <span>22 — 28 junio 2026</span>
                <span className="text-pride-green">●</span>
                <span>Cultura · Diversidad · Memoria</span>
                <span className="text-pride-blue">●</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTDOWN + NEXT EVENT */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="border-2 border-foreground bg-card p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {Date.now() < PRIDE_START.getTime()
                  ? "Empieza el Orgullo en"
                  : "Manifestación en"}
              </h2>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Hora local · CET
              </span>
            </div>
            <div className="mt-6">
              <Countdown target={target} />
            </div>
          </div>

          <div className="relative border-2 border-foreground bg-accent text-accent-foreground p-6 sm:p-8">
            <span className="inline-flex items-center gap-2 border-2 border-current px-2 py-0.5 text-[10px] uppercase tracking-[0.25em]">
              Próximo evento
            </span>
            <h3 className="mt-4 font-display text-3xl uppercase leading-tight">
              {nextEvent.title}
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="text-[10px] uppercase opacity-70">Día</div>
                <div className="font-medium">{new Date(nextEvent.day).toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" })}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase opacity-70">Hora</div>
                <div className="font-medium">{nextEvent.start} — {nextEvent.end}</div>
              </div>
              <div className="col-span-2">
                <div className="text-[10px] uppercase opacity-70">Escenario</div>
                <div className="font-medium">{nextEvent.stage}</div>
              </div>
            </div>
            <Link
              to="/agenda"
              className="mt-6 inline-flex items-center gap-2 border-2 border-current px-4 py-2 font-display text-xs uppercase"
            >
              Ver agenda completa <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK ACCESS */}
      <section className="mx-auto max-w-7xl px-4 pb-16 lg:px-6">
        <h2 className="font-display text-3xl uppercase sm:text-4xl">Accesos rápidos</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Llega a lo esencial en menos de tres clics. Diseñado mobile-first para usar mientras estás en la calle.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {QUICK.map((q) => (
            <Link
              key={q.to}
              to={q.to}
              className="group flex flex-col gap-4 border-2 border-foreground bg-card p-5 transition-transform hover:-translate-y-1 hover:shadow-brutal-sm"
            >
              <q.icon className="h-7 w-7" />
              <div className="flex items-end justify-between">
                <span className="font-display text-xl uppercase">{q.label}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* LATEST UPDATES */}
      <section className="border-t-2 border-foreground bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl uppercase sm:text-4xl">En directo</h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Últimas actualizaciones de la organización en tiempo real.
              </p>
            </div>
            <Link
              to="/actualidad"
              className="hidden sm:inline-flex items-center gap-2 border-2 border-foreground bg-background px-4 py-2 font-display text-xs uppercase"
            >
              Ver todo <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {ALERTS.slice(0, 4).map((a) => (
              <li
                key={a.id}
                className="grid grid-cols-[auto_1fr] gap-4 border-2 border-foreground bg-card p-4"
              >
                <div
                  className={`mt-1 grid h-10 w-10 shrink-0 place-items-center border-2 border-foreground font-display text-xs uppercase ${
                    a.level === "alert"
                      ? "bg-pride-red text-white"
                      : a.level === "warn"
                      ? "bg-pride-yellow text-black"
                      : "bg-background"
                  }`}
                  aria-label={a.level}
                >
                  {a.level === "alert" ? "!" : a.level === "warn" ? "⚠" : "i"}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center justify-between gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                    <span>{a.title}</span>
                    <span>{a.time}</span>
                  </div>
                  <p className="mt-2 text-sm">{a.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
