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

/* --- Escuela Jacalito (fotografías del año en curso) --------------------- */
import jacCircuitoJpg from "@/assets/jacalito-circuito-encendido.jpg";
import jacKitJpg from "@/assets/jacalito-tecpro-kit.jpg";
import jacBitacoraJpg from "@/assets/jacalito-bitacora.jpg";
import jacCirculoJpg from "@/assets/jacalito-circulo-mentor.jpg";
import jacArmandoJpg from "@/assets/jacalito-armando-circuito.jpg";
import jacManosJpg from "@/assets/jacalito-manos-conexion.jpg";
import jacExposicionJpg from "@/assets/jacalito-exposicion.jpg";
import jacMesaJpg from "@/assets/jacalito-circuito-mesa.jpg";
import jacKitPisoJpg from "@/assets/jacalito-kit-piso.jpg";
import jacInstruccionesJpg from "@/assets/jacalito-instrucciones.jpg";
import jacParejaJpg from "@/assets/jacalito-pareja-kit.jpg";
import jacExplicacionJpg from "@/assets/jacalito-explicacion-aula.jpg";

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

import jacCircuitoWebp from "@/assets/optimized/jacalito-circuito-encendido.webp";
import jacKitWebp from "@/assets/optimized/jacalito-tecpro-kit.webp";
import jacBitacoraWebp from "@/assets/optimized/jacalito-bitacora.webp";
import jacCirculoWebp from "@/assets/optimized/jacalito-circulo-mentor.webp";
import jacArmandoWebp from "@/assets/optimized/jacalito-armando-circuito.webp";
import jacManosWebp from "@/assets/optimized/jacalito-manos-conexion.webp";
import jacExposicionWebp from "@/assets/optimized/jacalito-exposicion.webp";
import jacMesaWebp from "@/assets/optimized/jacalito-circuito-mesa.webp";
import jacKitPisoWebp from "@/assets/optimized/jacalito-kit-piso.webp";
import jacInstruccionesWebp from "@/assets/optimized/jacalito-instrucciones.webp";
import jacParejaWebp from "@/assets/optimized/jacalito-pareja-kit.webp";
import jacExplicacionWebp from "@/assets/optimized/jacalito-explicacion-aula.webp";

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

  /* --------------------------------- Escuela Jacalito, año en curso ----- */
  jacCircuito: {
    webp: jacCircuitoWebp,
    fallback: jacCircuitoJpg,
    alt: "Estudiantes de la Escuela Jacalito alrededor de una mesa con un circuito armado con el Sistema TecPro: los LED rojo, verde y azul encendidos iluminan sus manos.",
    width: 900,
    height: 1600,
  },
  jacKit: {
    webp: jacKitWebp,
    fallback: jacKitJpg,
    alt: "Caja del Sistema TecPro sostenida en el aula de la Escuela Jacalito, con los estudiantes trabajando al fondo.",
    width: 1200,
    height: 1600,
  },
  jacBitacora: {
    webp: jacBitacoraWebp,
    fallback: jacBitacoraJpg,
    alt: "Una estudiante examina un módulo electrónico mientras su bitácora TecPro reposa sobre el pupitre.",
    width: 1600,
    height: 1200,
  },
  jacCirculo: {
    webp: jacCirculoWebp,
    fallback: jacCirculoJpg,
    alt: "El mentor del programa, sentado en el piso del aula, muestra un componente electrónico a un grupo de estudiantes de la Escuela Jacalito reunidos a su alrededor.",
    width: 1600,
    height: 1200,
  },
  jacArmando: {
    webp: jacArmandoWebp,
    fallback: jacArmandoJpg,
    alt: "El mentor arma un circuito con los módulos del Sistema TecPro mientras los estudiantes observan de cerca, agachados a su alrededor.",
    width: 1600,
    height: 1200,
  },
  jacManos: {
    webp: jacManosWebp,
    fallback: jacManosJpg,
    alt: "Primer plano de dos estudiantes conectando entre sí dos módulos electrónicos sobre la mesa de trabajo.",
    width: 1599,
    height: 899,
  },
  jacExposicion: {
    webp: jacExposicionWebp,
    fallback: jacExposicionJpg,
    alt: "Una estudiante expone frente al tablero ante sus compañeros en el aula de la Escuela Jacalito.",
    width: 1200,
    height: 1600,
  },
  jacMesa: {
    webp: jacMesaWebp,
    fallback: jacMesaJpg,
    alt: "Tres estudiantes observan el LED verde encendido del circuito que acaban de conectar sobre la mesa.",
    width: 900,
    height: 1600,
  },
  jacKitPiso: {
    webp: jacKitPisoWebp,
    fallback: jacKitPisoJpg,
    alt: "Un estudiante sentado en el piso del aula sostiene el cableado junto a la caja abierta del Sistema TecPro con todos sus componentes.",
    width: 1200,
    height: 1600,
  },
  jacInstrucciones: {
    webp: jacInstruccionesWebp,
    fallback: jacInstruccionesJpg,
    alt: "Varios estudiantes leen juntos, inclinados sobre la mesa, la guía ilustrada de componentes del Sistema TecPro antes de armar su circuito.",
    width: 1599,
    height: 899,
  },
  jacPareja: {
    webp: jacParejaWebp,
    fallback: jacParejaJpg,
    alt: "Dos estudiantes trabajan juntos en el piso con la caja abierta del Sistema TecPro y su guía de componentes a la vista.",
    width: 1200,
    height: 1600,
  },
  jacExplicacion: {
    webp: jacExplicacionWebp,
    fallback: jacExplicacionJpg,
    alt: "El mentor explica de pie la actividad del día al grupo completo, sentado en círculo en el aula.",
    width: 1600,
    height: 1200,
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
    id: "tenjo-2022",
    order: "01",
    title: "Primera Generación",
    place: "Tenjo, Cundinamarca",
    year: "2022",
    badge: "Programa Piloto Exitoso",
    highlightTitle: "Programa Piloto Exitoso",
    highlightBody:
      "El municipio de Tenjo fue el primero en creer en nuestra visión. Con el apoyo de la Secretaría de Educación de Tenjo, estos jóvenes pioneros demostraron que el talento tecnológico no tiene fronteras geográficas.",
    stats: [
      { value: "5", label: "Graduados" },
      { value: "40", label: "Horas" },
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
    id: "generacion-actual",
    order: "02",
    title: "Generación Actual",
    place: "Escuelas rurales de Tenjo",
    year: "En curso",
    badge: "En curso",
    highlightTitle: "Del bloque al circuito",
    highlightBody:
      "Hoy el programa se desarrolla en la Escuela Jacalito y en la I.E.R.D.I. Valle de Tenjo. Los estudiantes programan con micro:bit y MakeCode, y arman circuitos reales con el Sistema TecPro: conectan los módulos, los ven encenderse y registran cada avance en su bitácora.",
    stats: [
      { value: "TecPro", label: "Sistema" },
      { value: "micro:bit", label: "Placa" },
      { value: "MakeCode", label: "Editor" },
    ],
    photo: photos.jacArmando,
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
  /** School where the session took place. */
  school: string;
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

const VALLE = "I.E.R.D.I. Valle de Tenjo";
const JACALITO = "Escuela Jacalito";

export const documentedWork: DocumentedWork[] = [
  {
    id: "circuito-encendido",
    photo: photos.jacCircuito,
    title: "El circuito que se enciende",
    school: JACALITO,
    what:
      "Los módulos del Sistema TecPro se encadenan sobre la mesa hasta cerrar el circuito: los LED rojo, verde y azul se encienden al mismo tiempo.",
    problem: "Cómo conectar componentes para que la corriente recorra todo el montaje.",
    tech: ["Sistema TecPro", "Circuitos", "LED"],
    learning: "Que un circuito solo funciona si cada conexión está bien hecha.",
  },
  {
    id: "kit-tecpro",
    photo: photos.jacKitPiso,
    title: "Reconocer los componentes",
    school: JACALITO,
    what:
      "Antes de armar nada, el grupo abre la caja del Sistema TecPro e identifica uno a uno los módulos: fuente, interruptores, sensores y salidas.",
    problem: "Qué hace cada pieza y para qué sirve antes de usarla.",
    tech: ["Sistema TecPro", "Electrónica básica"],
    learning: "Nombrar y clasificar los componentes con los que van a trabajar.",
  },
  {
    id: "bitacora",
    photo: photos.jacBitacora,
    title: "Registrar en la bitácora",
    school: JACALITO,
    what:
      "Cada estudiante examina su módulo y documenta lo que observa en la bitácora del programa, junto al montaje que acaba de probar.",
    problem: "Cómo dejar registro de lo que se intentó, falló y funcionó.",
    tech: ["Bitácora TecPro", "Documentación"],
    learning: "Volver consciente el proceso, no solo el resultado.",
  },
  {
    id: "mentoria-circulo",
    photo: photos.jacCirculo,
    title: "La clase en círculo",
    school: JACALITO,
    what:
      "El mentor se sienta en el piso con el grupo y pone el componente en el centro: todos ven lo mismo y todos pueden preguntar.",
    problem: "Cómo sostener la atención de un grupo de edades mezcladas.",
    tech: ["Mentoría presencial", "Sistema TecPro"],
    learning: "Observar, preguntar y formular una hipótesis antes de armar.",
    span: "wide",
  },
  {
    id: "conexion-modulos",
    photo: photos.jacManos,
    title: "Conectar módulo a módulo",
    school: JACALITO,
    what:
      "Dos estudiantes acoplan las piezas del circuito, comprobando la polaridad y el orden de cada conexión.",
    problem: "Por qué el orden y la orientación de las piezas cambian el resultado.",
    tech: ["Sistema TecPro", "Trabajo en parejas"],
    learning: "Probar, equivocarse y volver a intentar con criterio.",
  },
  {
    id: "exposicion-tablero",
    photo: photos.jacExposicion,
    title: "Explicar lo construido",
    school: JACALITO,
    what:
      "Una estudiante pasa al tablero a explicar a sus compañeros cómo resolvió el montaje de la sesión.",
    problem: "Cómo comunicar una solución técnica a otras personas.",
    tech: ["Exposición", "Trabajo en equipo"],
    learning: "Poner en palabras el propio razonamiento.",
  },
  {
    id: "logica-condicional",
    photo: photos.claseMakecode,
    title: "Lógica condicional en MakeCode",
    school: VALLE,
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
    school: VALLE,
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
    school: VALLE,
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
    school: VALLE,
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
    school: VALLE,
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
    school: VALLE,
    what:
      "El ejercicio proyectado se replica en cada equipo, con la placa conectada y lista para recibir el programa.",
    problem: "Cómo pasar de ver un ejemplo a producir una versión propia.",
    tech: ["MakeCode", "micro:bit", "Aula digital"],
    learning: "Reproducir, modificar y luego extender un ejemplo.",
  },
];

/* --------------------------------------------- Session videos (real) ----- */
/**
 * Short clips recorded during real sessions, re-encoded for web.
 * They live in `public/media` so they keep a stable, unhashed URL.
 */

export type SessionVideo = {
  id: string;
  src: string;
  poster: string;
  title: string;
  caption: string;
  width: number;
  height: number;
};

const mediaUrl = (file: string) => `${import.meta.env.BASE_URL}media/${file}`;

export const sessionVideos: SessionVideo[] = [
  {
    id: "circuito",
    src: mediaUrl("jacalito-circuito.mp4"),
    poster: mediaUrl("jacalito-circuito-poster.webp"),
    title: "El momento en que enciende",
    caption:
      "Escuela Jacalito: el circuito completo del Sistema TecPro encendido sobre la mesa de trabajo.",
    width: 406,
    height: 720,
  },
  {
    id: "construccion",
    src: mediaUrl("jacalito-construccion.mp4"),
    poster: mediaUrl("jacalito-construccion-poster.webp"),
    title: "Armando entre todos",
    caption:
      "Escuela Jacalito: el grupo encadena los módulos uno a uno hasta completar el montaje.",
    width: 406,
    height: 720,
  },
  {
    id: "conexion",
    src: mediaUrl("jacalito-conexion.mp4"),
    poster: mediaUrl("jacalito-conexion-poster.webp"),
    title: "Cerrar la conexión",
    caption:
      "Escuela Jacalito: una estudiante ajusta la última conexión del circuito en el piso del aula.",
    width: 406,
    height: 720,
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
    detail: "Primera generación de Tenjo Dev, 2022.",
  },
  {
    value: "40",
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
