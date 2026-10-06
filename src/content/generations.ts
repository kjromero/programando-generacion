/**
 * REAL generations, documented sessions and impact figures.
 *
 * Image rule: every photograph referenced here is an authentic photo of the
 * program that already lives in `src/assets`. They must never be swapped for
 * stock, illustrations or AI-generated imagery.
 *
 * Each optimized WebP derivative sits in `src/assets/optimized` and is paired
 * with its untouched original as a fallback.
 */

/* --- Originals (never delete: these are the evidence the program happened) - */
import tenjoDevJpg from "@/assets/students-tenjo-dev.jpg";
import escuela0Jpg from "@/assets/escuela2-0.jpeg";
import escuela1Jpg from "@/assets/escuela2-1.jpeg";
import escuela2Jpg from "@/assets/escuela2-2.jpeg";
import escuela3Jpg from "@/assets/escuela2-3.jpeg";
import escuela4Jpg from "@/assets/escuela2-4.jpeg";
import escuela5Jpg from "@/assets/escuela2-5.jpeg";
import escuela6Jpg from "@/assets/escuela2-6.jpeg";
import escuela7Jpg from "@/assets/escuela2-7.jpeg";

/* --- Optimized WebP derivatives ------------------------------------------ */
import tenjoDevWebp from "@/assets/optimized/students-tenjo-dev.webp";
import escuela0Webp from "@/assets/optimized/escuela2-0.webp";
import escuela1Webp from "@/assets/optimized/escuela2-1.webp";
import escuela2Webp from "@/assets/optimized/escuela2-2.webp";
import escuela3Webp from "@/assets/optimized/escuela2-3.webp";
import escuela4Webp from "@/assets/optimized/escuela2-4.webp";
import escuela5Webp from "@/assets/optimized/escuela2-5.webp";
import escuela6Webp from "@/assets/optimized/escuela2-6.webp";
import escuela7Webp from "@/assets/optimized/escuela2-7.webp";

export type Photo = {
  webp: string;
  fallback: string;
  alt: string;
  width: number;
  height: number;
};

export const photos = {
  tenjoDev: {
    webp: tenjoDevWebp,
    fallback: tenjoDevJpg,
    alt: "Los cinco graduados de la primera generación de Tenjo Dev sosteniendo sus certificados de Programación Básica junto a su mentor.",
    width: 1600,
    height: 1199,
  },
  grupoCodigo: {
    webp: escuela0Webp,
    fallback: escuela0Jpg,
    alt: "Estudiantes de la I.E.R.D.I. Valle de Tenjo programando en equipo alrededor de un portátil con el editor de bloques MakeCode.",
    width: 960,
    height: 1280,
  },
  microbitConexion: {
    webp: escuela1Webp,
    fallback: escuela1Jpg,
    alt: "Una estudiante conecta una placa micro:bit al portátil para cargar el programa que acaba de escribir.",
    width: 720,
    height: 1280,
  },
  aulaPantalla: {
    webp: escuela2Webp,
    fallback: escuela2Jpg,
    alt: "Estudiantes siguiendo en sus portátiles el ejercicio de bloques proyectado en la pantalla del aula.",
    width: 960,
    height: 1280,
  },
  mentoriaGrupo: {
    webp: escuela3Webp,
    fallback: escuela3Jpg,
    alt: "El mentor del programa acompaña a un grupo de estudiantes frente a un portátil Computadores para Educar.",
    width: 960,
    height: 1280,
  },
  mentoriaUno: {
    webp: escuela4Webp,
    fallback: escuela4Jpg,
    alt: "Acompañamiento uno a uno: el mentor revisa con un estudiante el proyecto que corre en su portátil.",
    width: 960,
    height: 1280,
  },
  microbitEncendida: {
    webp: escuela5Webp,
    fallback: escuela5Jpg,
    alt: "Primer plano de una placa micro:bit encendida en las manos de una estudiante, con su matriz de LED mostrando el patrón programado.",
    width: 960,
    height: 1280,
  },
  aulaCompleta: {
    webp: escuela6Webp,
    fallback: escuela6Jpg,
    alt: "Aula completa de la Institución Educativa Rural Departamental Integrada Valle de Tenjo durante una sesión del programa.",
    width: 1280,
    height: 960,
  },
  claseMakecode: {
    webp: escuela7Webp,
    fallback: escuela7Jpg,
    alt: "El mentor explica en pantalla la lógica de condicionales de un proyecto hecho en MakeCode para micro:bit.",
    width: 960,
    height: 1280,
  },
} satisfies Record<string, Photo>;

/* ------------------------------------------------------------ Generations - */

export type Generation = {
  id: string;
  order: string;
  title: string;
  place: string;
  year: string;
  badge: string;
  highlightTitle: string;
  highlightBody: string;
  stats: { value: string; label: string }[];
  photo: Photo;
  /** Names printed on the certificates in the photograph. */
  graduates?: string[];
  quote?: { text: string; author: string };
  note?: string;
};

export const generations: Generation[] = [
  {
    id: "tenjo-2024",
    order: "01",
    title: "Primera Generación",
    place: "Tenjo, Cundinamarca",
    year: "2024",
    badge: "Programa Piloto Exitoso",
    highlightTitle: "Programa Piloto Exitoso",
    highlightBody:
      "El municipio de Tenjo fue el primero en creer en nuestra visión. Estos jóvenes pioneros demostraron que el talento tecnológico no tiene fronteras geográficas.",
    stats: [
      { value: "5", label: "Graduados" },
      { value: "60", label: "Horas" },
      { value: "100%", label: "Certificados" },
    ],
    photo: photos.tenjoDev,
    graduates: [
      "Jean Duque Herrera",
      "Manuel José Gómez",
      "David Felipe Salgado",
      "Andrés Felipe Sarmiento",
      "Yack Bill Romero",
    ],
    quote: {
      text: "Estos jóvenes son la prueba viviente de que cuando se brindan las oportunidades adecuadas, el talento rural florece. Hoy son programadores, mañana serán los líderes tecnológicos de sus comunidades.",
      author: "Equipo Programando una Generación",
    },
  },
  {
    id: "valle-de-tenjo-2026",
    order: "02",
    title: "Segunda Generación",
    place: "I.E.R.D.I. Valle de Tenjo",
    year: "2026",
    badge: "En curso",
    highlightTitle: "Del bloque al circuito",
    highlightBody:
      "Un aula completa trabajando con placas micro:bit y el editor de bloques MakeCode sobre los portátiles de Computadores para Educar. Programan, cargan el código a la placa y ven el resultado encenderse en sus manos.",
    stats: [
      { value: "micro:bit", label: "Placa" },
      { value: "MakeCode", label: "Editor" },
      { value: "Aula", label: "Modalidad" },
    ],
    photo: photos.aulaCompleta,
    note: "Generación en curso. Las cifras de graduados se publicarán al cierre del proceso.",
  },
];

/* ------------------------------- Documented sessions (project portfolio) -- */
/**
 * These are not invented student projects: each card describes what is actually
 * visible and documented in the corresponding photograph.
 */

export type DocumentedWork = {
  id: string;
  photo: Photo;
  title: string;
  /** What is actually happening in the session. */
  what: string;
  /** The learning problem the activity addresses. */
  problem: string;
  /** Tools genuinely visible in the photo. */
  tech: string[];
  /** The skill the activity builds. */
  learning: string;
  span?: "wide" | "tall";
};

export const documentedWork: DocumentedWork[] = [
  {
    id: "logica-condicional",
    photo: photos.claseMakecode,
    title: "Lógica condicional en MakeCode",
    what:
      "La sesión arranca en la pantalla del aula: una variable, un ciclo y una cadena de condicionales que cambian el ícono mostrado en la placa.",
    problem:
      "Cómo lograr que un mismo programa responda de forma distinta según lo que esté pasando.",
    tech: ["MakeCode", "micro:bit", "Variables", "Condicionales"],
    learning: "Leer y razonar un flujo de control antes de escribirlo.",
    span: "wide",
  },
  {
    id: "del-codigo-a-la-placa",
    photo: photos.microbitConexion,
    title: "Del código a la placa",
    what:
      "Una estudiante conecta su micro:bit al portátil y carga el programa que acaba de armar con bloques.",
    problem: "Qué hace falta para que algo escrito en pantalla ocurra en el mundo físico.",
    tech: ["micro:bit", "MakeCode", "USB"],
    learning: "El ciclo completo de escribir, compilar, cargar y probar.",
  },
  {
    id: "resultado-encendido",
    photo: photos.microbitEncendida,
    title: "El resultado, encendido",
    what:
      "La matriz de LED de la placa muestra el patrón programado. El código deja de ser abstracto y se vuelve evidencia.",
    problem: "Cómo saber si lo que programé realmente funciona.",
    tech: ["micro:bit", "Matriz LED"],
    learning: "Verificar un resultado y corregir sobre la marcha.",
  },
  {
    id: "programar-en-equipo",
    photo: photos.grupoCodigo,
    title: "Programar en equipo",
    what:
      "Varias estudiantes resuelven el mismo reto alrededor de un portátil, repartiéndose la placa, el editor y las pruebas.",
    problem: "Cómo construir algo que ninguna resolvería sola en el mismo tiempo.",
    tech: ["MakeCode", "micro:bit", "Trabajo colaborativo"],
    learning: "Dividir un problema y explicar el propio razonamiento.",
    span: "wide",
  },
  {
    id: "acompanamiento-en-aula",
    photo: photos.mentoriaGrupo,
    title: "Acompañamiento en el aula",
    what:
      "El mentor pasa grupo por grupo: no entrega la respuesta, formula la pregunta que destraba el problema.",
    problem: "Cómo sostener el avance de un aula entera con ritmos muy distintos.",
    tech: ["Mentoría presencial", "Computadores para Educar"],
    learning: "Pedir ayuda y depurar con método en lugar de adivinar.",
  },
  {
    id: "seguir-el-ejercicio",
    photo: photos.aulaPantalla,
    title: "Del tablero al portátil",
    what:
      "El ejercicio proyectado se replica en cada equipo, con la placa conectada y lista para recibir el programa.",
    problem: "Cómo pasar de ver un ejemplo a producir una versión propia.",
    tech: ["MakeCode", "micro:bit", "Aula digital"],
    learning: "Reproducir, modificar y luego extender un ejemplo.",
  },
];

/** Deliberately empty: student-led project outcomes are still being documented. */
export const upcomingWorkNote = {
  title: "Próximos proyectos en documentación",
  body:
    "La generación en curso está construyendo sus propias soluciones. Publicaremos cada proyecto aquí —con el problema que resolvió y el equipo que lo creó— a medida que se completen.",
} as const;

/* ----------------------------------------------------------------- Impact - */

export type ImpactFigure = {
  value: string;
  label: string;
  detail: string;
  /** True when the number is a stated goal, not an achieved result. */
  isGoal?: boolean;
};

/** Verified from the program's own records and photographs. */
export const verifiedImpact: ImpactFigure[] = [
  {
    value: "5",
    label: "Graduados certificados",
    detail: "Primera generación de Tenjo Dev, 2024.",
  },
  {
    value: "60",
    label: "Horas de formación",
    detail: "Duración certificada del programa piloto.",
  },
  {
    value: "100%",
    label: "Tasa de certificación",
    detail: "Todos los participantes del piloto culminaron el proceso.",
  },
  {
    value: "2",
    label: "Municipios",
    detail: "Tenjo y Tabio, Cundinamarca.",
  },
];

/** Stated ambition. Clearly separated from the verified figures above. */
export const impactGoals: ImpactFigure[] = [
  { value: "1.000+", label: "Jóvenes formados", detail: "Meta del programa.", isGoal: true },
  { value: "50+", label: "Municipios", detail: "Meta de cobertura.", isGoal: true },
  { value: "200+", label: "Proyectos productivos", detail: "Meta de proyectos.", isGoal: true },
];

/* ------------------------------------------------------------- Testimonies - */
/** Voices already published on the program's existing landing page. */

export type Testimony = {
  name: string;
  location: string;
  quote: string;
};

export const testimonies: Testimony[] = [
  {
    name: "Manuel José",
    location: "Tenjo, Cundinamarca",
    quote:
      "Nunca pensé que desde mi municipio podría aprender programación. Ahora estoy desarrollando una app para optimizar el riego de cultivos de café.",
  },
  {
    name: "María Fernanda",
    location: "Tenjo, Cundinamarca",
    quote:
      "El programa me dio las herramientas y la confianza para emprender. Ahora trabajo como desarrolladora freelance desde mi casa.",
  },
  {
    name: "Andrés Sarmiento",
    location: "Tenjo, Cundinamarca",
    quote:
      "Aprendí a usar IA para analizar datos de producción agrícola. Mi familia nunca imaginó que la tecnología podría ayudar tanto en el campo.",
  },
];
