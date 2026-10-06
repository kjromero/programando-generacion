/**
 * Single source of truth for the site's REAL content.
 *
 * Everything in this file is verifiable from the project's own assets and from
 * the original static landing page (public/landing.html). Nothing here is
 * invented: figures that are goals rather than achievements are explicitly
 * flagged with `isGoal`, and sections without real data yet are left empty on
 * purpose so they can be filled in later.
 */

/* ---------------------------------------------------------------- Brand -- */

export const brand = {
  name: "Programando una Generación",
  shortName: "PuG",
  tagline: "Aprender tecnología creando soluciones reales.",
  description:
    "Programación, robótica e inteligencia artificial para que los estudiantes aprendan a identificar problemas, explorar herramientas y construir sus propias soluciones.",
} as const;

/* -------------------------------------------------------------- Contact -- */
/* Taken from the existing footer in public/landing.html */

export const contact = {
  email: "netbrake@gmail.com",
  phone: "+57 312 488 7347",
  phoneHref: "tel:+573124887347",
  city: "Bogotá, Colombia",
  /** Municipios where the program has actually run. */
  municipios: ["Tenjo", "Tabio"],
} as const;

/* ------------------------------------------------------------ Navigation -- */

export const navLinks = [
  { label: "Filosofía", href: "#filosofia" },
  { label: "Generaciones", href: "#generaciones" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Colegios", href: "#colegios" },
] as const;

/* ------------------------------------------------------------- Philosophy -- */

export const philosophyStatement = {
  lead: "No buscamos formar programadores.",
  emphasis: "Buscamos formar personas capaces de resolver problemas.",
} as const;

export type PhilosophyStage = {
  number: string;
  title: string;
  summary: string;
  detail: string;
};

export const philosophyStages: PhilosophyStage[] = [
  {
    number: "01",
    title: "Descubrir",
    summary: "Mirar el entorno y encontrar el problema.",
    detail:
      "Antes de escribir una sola línea de código, los estudiantes observan su colegio, su casa y su municipio para identificar algo que vale la pena resolver.",
  },
  {
    number: "02",
    title: "Entender",
    summary: "Explorar las herramientas disponibles.",
    detail:
      "Conocen qué puede hacer la tecnología: qué es un sensor, qué es un programa, qué puede automatizarse y qué no. El objetivo es criterio, no memorizar sintaxis.",
  },
  {
    number: "03",
    title: "Construir",
    summary: "Pasar de la idea a algo que funciona.",
    detail:
      "Programan, conectan, prueban y corrigen. Equivocarse es parte del método: cada error es información sobre cómo funciona el sistema que están creando.",
  },
  {
    number: "04",
    title: "Potenciar con IA",
    summary: "Usar la inteligencia artificial como aliada.",
    detail:
      "Aprenden a apoyarse en la IA para investigar, depurar y acelerar su trabajo, entendiendo sus límites y manteniendo el criterio propio sobre la solución.",
  },
];

/* ------------------------------------------------------------ Methodology -- */

export type MethodologyStep = {
  key: string;
  title: string;
  description: string;
};

export const methodologySteps: MethodologyStep[] = [
  {
    key: "problema",
    title: "Problema",
    description: "Partimos de una necesidad real y concreta del entorno del estudiante.",
  },
  {
    key: "exploracion",
    title: "Exploración",
    description: "Investigamos qué herramientas existen y cuáles encajan con el problema.",
  },
  {
    key: "programacion",
    title: "Programación",
    description: "Traducimos la idea a lógica: secuencias, condiciones, variables y datos.",
  },
  {
    key: "construccion",
    title: "Construcción",
    description: "Llevamos el código al mundo físico con placas, sensores y prototipos.",
  },
  {
    key: "ia",
    title: "Inteligencia Artificial",
    description: "Sumamos IA para ampliar lo que el estudiante puede lograr por su cuenta.",
  },
  {
    key: "solucion",
    title: "Solución",
    description: "El resultado se prueba, se explica y se comparte con la comunidad.",
  },
];

/* -------------------------------------------------------------- Schools --- */

export type SchoolOffering = {
  key: string;
  title: string;
  description: string;
  bullets: string[];
};

export const schoolOfferings: SchoolOffering[] = [
  {
    key: "aula",
    title: "Aula",
    description:
      "Sesiones dentro de la jornada escolar, en el salón del colegio y con los equipos disponibles.",
    bullets: ["Grupos por curso", "Material guiado", "Sin salir de la institución"],
  },
  {
    key: "steam",
    title: "STEAM",
    description:
      "Conectamos tecnología con matemáticas, ciencias y arte para que el aprendizaje tenga contexto.",
    bullets: ["Proyectos transversales", "Trabajo en equipo", "Pensamiento crítico"],
  },
  {
    key: "robotica",
    title: "Robótica",
    description:
      "Electrónica educativa con micro:bit: sensores, luces y entradas físicas que responden al código.",
    bullets: ["Placas micro:bit", "Sensores y actuadores", "Prototipado por iteración"],
  },
  {
    key: "programacion",
    title: "Programación",
    description:
      "De bloques a texto. Los estudiantes avanzan a su ritmo desde MakeCode hacia JavaScript.",
    bullets: ["Bloques visuales", "Transición a JavaScript", "Lógica antes que sintaxis"],
  },
  {
    key: "ia",
    title: "Inteligencia Artificial",
    description:
      "Uso responsable de la IA como herramienta de exploración, depuración y aprendizaje.",
    bullets: ["Alfabetización en IA", "Criterio y límites", "Apoyo al propio trabajo"],
  },
  {
    key: "acompanamiento",
    title: "Acompañamiento",
    description:
      "Un mentor presente en el aula, acompañando grupo por grupo durante todo el proceso.",
    bullets: ["Mentoría presencial", "Apoyo a docentes", "Seguimiento por grupo"],
  },
];

/* ------------------------------------------------------------------ CTA --- */

export const finalCta = {
  question: "¿Qué problema podemos ayudar a tus estudiantes a resolver?",
  body:
    "Si eres rector, docente o lideras una secretaría de educación, podemos diseñar juntos una ruta para tu institución.",
  primary: "Llevar el programa a mi colegio",
} as const;
