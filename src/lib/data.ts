// Mock dataset for Orgullo de Sevilla 2026.
// Pride week: Mon 22 → Sun 28 June 2026.

export const PRIDE_START = new Date("2026-06-22T10:00:00+02:00");
export const PARADE_DATE = new Date("2026-06-27T19:00:00+02:00");

export type EventType =
  | "Cultura"
  | "Música"
  | "Reivindicación"
  | "Familiar"
  | "Deporte"
  | "Fiesta";

export type Stage = "Alameda · Norte" | "Alameda · Sur" | "Plaza Encarnación" | "Itinerante";

export type Audience = "Todos los públicos" | "Familias" | "+18" | "Profesional";

export type AgendaEvent = {
  id: string;
  title: string;
  day: string; // YYYY-MM-DD
  start: string; // HH:mm
  end: string;
  type: EventType;
  stage: Stage;
  audience: Audience;
  description: string;
};

export const DAYS = [
  { date: "2026-06-22", label: "Lun 22" },
  { date: "2026-06-23", label: "Mar 23" },
  { date: "2026-06-24", label: "Mié 24" },
  { date: "2026-06-25", label: "Jue 25" },
  { date: "2026-06-26", label: "Vie 26" },
  { date: "2026-06-27", label: "Sáb 27" },
  { date: "2026-06-28", label: "Dom 28" },
];

export const EVENT_TYPES: EventType[] = [
  "Cultura",
  "Música",
  "Reivindicación",
  "Familiar",
  "Deporte",
  "Fiesta",
];

export const STAGES: Stage[] = [
  "Alameda · Norte",
  "Alameda · Sur",
  "Plaza Encarnación",
  "Itinerante",
];

export const EVENTS: AgendaEvent[] = [
  {
    id: "e1",
    title: "Pregón inaugural",
    day: "2026-06-22",
    start: "20:00",
    end: "21:00",
    type: "Reivindicación",
    stage: "Alameda · Norte",
    audience: "Todos los públicos",
    description:
      "Apertura oficial del Orgullo de Sevilla 2026 con el pregón a cargo de figuras del activismo andaluz.",
  },
  {
    id: "e2",
    title: "Mesa redonda: Memoria LGTBI andaluza",
    day: "2026-06-23",
    start: "18:30",
    end: "20:00",
    type: "Cultura",
    stage: "Plaza Encarnación",
    audience: "Profesional",
    description:
      "Diálogo con investigadoras y activistas sobre la historia del movimiento en Andalucía.",
  },
  {
    id: "e3",
    title: "Lorca íntimo · concierto",
    day: "2026-06-23",
    start: "22:00",
    end: "23:30",
    type: "Música",
    stage: "Alameda · Sur",
    audience: "Todos los públicos",
    description:
      "Versiones contemporáneas del cancionero lorquiano en clave queer.",
  },
  {
    id: "e4",
    title: "Carrera por la Igualdad",
    day: "2026-06-24",
    start: "09:00",
    end: "11:00",
    type: "Deporte",
    stage: "Itinerante",
    audience: "Todos los públicos",
    description:
      "5K solidario por el casco histórico. Inscripción gratuita hasta completar dorsales.",
  },
  {
    id: "e5",
    title: "Cuentacuentos de familias diversas",
    day: "2026-06-25",
    start: "11:30",
    end: "13:00",
    type: "Familiar",
    stage: "Plaza Encarnación",
    audience: "Familias",
    description:
      "Mañana de lectura, talleres y meriendas para peques y sus familias.",
  },
  {
    id: "e6",
    title: "Ocaña: cuerpo, calle, libertad",
    day: "2026-06-25",
    start: "19:00",
    end: "20:30",
    type: "Cultura",
    stage: "Alameda · Norte",
    audience: "Todos los públicos",
    description:
      "Performance colectiva inspirada en la figura de Ocaña, con artistas locales.",
  },
  {
    id: "e7",
    title: "Noche de cabaret andaluz",
    day: "2026-06-26",
    start: "23:00",
    end: "02:00",
    type: "Fiesta",
    stage: "Alameda · Sur",
    audience: "+18",
    description:
      "Drag, copla reimaginada y electrónica. Línea-up rotativa hasta la madrugada.",
  },
  {
    id: "e8",
    title: "Lectura del Manifiesto",
    day: "2026-06-27",
    start: "18:30",
    end: "19:00",
    type: "Reivindicación",
    stage: "Alameda · Norte",
    audience: "Todos los públicos",
    description:
      "Lectura pública del manifiesto del Orgullo 2026 antes de la salida de la manifestación.",
  },
  {
    id: "e9",
    title: "Manifestación Estatal",
    day: "2026-06-27",
    start: "19:00",
    end: "22:00",
    type: "Reivindicación",
    stage: "Itinerante",
    audience: "Todos los públicos",
    description:
      "Recorrido oficial desde Alameda de Hércules hasta Plaza Nueva. 2,4 km accesibles.",
  },
  {
    id: "e10",
    title: "Concierto principal: cierre de manifestación",
    day: "2026-06-27",
    start: "22:30",
    end: "01:30",
    type: "Música",
    stage: "Alameda · Norte",
    audience: "Todos los públicos",
    description:
      "Gran concierto de cierre con los cabezas de cartel del Orgullo 2026.",
  },
  {
    id: "e11",
    title: "Brunch comunitario",
    day: "2026-06-28",
    start: "12:00",
    end: "15:00",
    type: "Familiar",
    stage: "Plaza Encarnación",
    audience: "Todos los públicos",
    description:
      "Despedida del Orgullo con música en vivo, foodtrucks y mercadillo de colectivos.",
  },
  {
    id: "e12",
    title: "Misa laica de despedida y memoria",
    day: "2026-06-28",
    start: "20:00",
    end: "21:30",
    type: "Reivindicación",
    stage: "Alameda · Sur",
    audience: "Todos los públicos",
    description:
      "Homenaje a las personas LGTBI fallecidas y minuto colectivo por la diversidad.",
  },
];

export type Artist = {
  id: string;
  name: string;
  tag: string;
  day: string;
  time: string;
  stage: Stage;
  bio: string;
  initials: string;
  color: string;
};

export const ARTISTS: Artist[] = [
  {
    id: "a1",
    name: "Rocío Saiz",
    tag: "Indie pop reivindicativo",
    day: "2026-06-26",
    time: "23:30",
    stage: "Alameda · Norte",
    bio: "Voz cordobesa abiertamente disidente, autora de himnos generacionales.",
    initials: "RS",
    color: "pride-violet",
  },
  {
    id: "a2",
    name: "Califato ¾",
    tag: "Electrónica andaluza",
    day: "2026-06-27",
    time: "23:00",
    stage: "Alameda · Norte",
    bio: "Folclore sevillano pasado por la pista. Cierre de manifestación.",
    initials: "C¾",
    color: "pride-orange",
  },
  {
    id: "a3",
    name: "Samantha Hudson",
    tag: "Pop crítico",
    day: "2026-06-27",
    time: "00:30",
    stage: "Alameda · Norte",
    bio: "Reina del provocopop ibérico. Show pensado en exclusiva para Sevilla.",
    initials: "SH",
    color: "pride-red",
  },
  {
    id: "a4",
    name: "La Plazuela",
    tag: "Flamenco urbano",
    day: "2026-06-26",
    time: "22:00",
    stage: "Alameda · Sur",
    bio: "El nuevo flamenco granadino que conecta con la generación TikTok.",
    initials: "LP",
    color: "pride-green",
  },
  {
    id: "a5",
    name: "Ms Nina",
    tag: "Reguetón disidente",
    day: "2026-06-25",
    time: "00:30",
    stage: "Alameda · Sur",
    bio: "Perreo, reivindicación y estética latina-andaluza.",
    initials: "MN",
    color: "pride-blue",
  },
  {
    id: "a6",
    name: "Hidrogenesse",
    tag: "Synth-pop histórico",
    day: "2026-06-23",
    time: "22:00",
    stage: "Alameda · Sur",
    bio: "Pioneros del pop electrónico LGTBI en castellano.",
    initials: "HG",
    color: "pride-yellow",
  },
];

export type Alert = {
  id: string;
  level: "info" | "warn" | "alert";
  time: string;
  title: string;
  text: string;
};

export const ALERTS: Alert[] = [
  {
    id: "n1",
    level: "alert",
    time: "Hace 12 min",
    title: "Modificación de recorrido",
    text: "La manifestación accederá a Plaza Nueva por C/ Sierpes. Calles cortadas desde las 18:30.",
  },
  {
    id: "n2",
    level: "warn",
    time: "Hace 1 h",
    title: "Aviso de calor",
    text: "Temperatura máxima prevista 38º. Puntos de hidratación en Alameda y Encarnación.",
  },
  {
    id: "n3",
    level: "info",
    time: "Hoy 09:00",
    title: "Apertura escenarios",
    text: "Los escenarios Norte y Sur abren a las 18:00. Acceso libre hasta completar aforo.",
  },
  {
    id: "n4",
    level: "info",
    time: "Ayer",
    title: "Programa familiar",
    text: "Se amplía el programa infantil del jueves con un segundo cuentacuentos.",
  },
];
