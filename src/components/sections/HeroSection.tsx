import { motion } from "framer-motion";
import { ArrowRight, Cpu, MapPin, Sparkles } from "lucide-react";

import PhotoImage from "@/components/PhotoImage";
import { Button } from "@/components/ui/button";
import { brand } from "@/content/site";
import { photos } from "@/content/generations";

/** Real, verifiable facts used as the hero's proof strip. */
const proofPoints = [
  { icon: MapPin, label: "Tenjo & Tabio, Cundinamarca" },
  { icon: Sparkles, label: "Primera generación certificada en 2022" },
  { icon: Cpu, label: "micro:bit · MakeCode · IA" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-44">
      {/* Subtle technical texture, faded toward the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid mask-fade opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-nature-light/10 blur-3xl"
      />

      <div className="container-custom relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* ---------------------------------------------------- Copy --- */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-card/80 py-1.5 pl-2 pr-4 backdrop-blur-sm"
            >
              <span className="whitespace-nowrap rounded-full bg-primary/10 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-primary">
                Programa escolar
              </span>
              <span className="whitespace-nowrap text-xs text-muted-foreground sm:text-sm">
                Programación · Robótica · IA
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="display-xl text-foreground"
            >
              Aprender tecnología{" "}
              <span className="relative inline-block text-primary">
                creando
                <motion.span
                  aria-hidden="true"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 h-[0.14em] w-full origin-left rounded-full bg-primary/35"
                />
              </span>{" "}
              soluciones reales.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="lead mt-7 max-w-prose"
            >
              {brand.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button asChild size="xl" className="group w-full sm:w-auto">
                <a href="#proyectos">
                  Explorar proyectos
                  <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="xl" className="w-full sm:w-auto">
                <a href="#filosofia">Conoce el programa</a>
              </Button>
            </motion.div>

            {/* Proof strip */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-7"
            >
              {proofPoints.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
                  {label}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* --------------------------------------------------- Photo --- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <figure className="relative overflow-hidden rounded-3xl border border-border bg-muted shadow-elevated">
              <PhotoImage
                photo={photos.mentoriaGrupo}
                priority
                className="aspect-[4/5] w-full sm:aspect-[5/4] lg:aspect-[4/5]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-nature-light">
                  Sesión real del programa
                </p>
                <p className="mt-1.5 font-display text-lg font-semibold text-cream">
                  I.E.R.D.I. Valle de Tenjo
                </p>
              </figcaption>
            </figure>

            {/* Floating evidence card — the first generation's certified result */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -top-5 -left-4 hidden rounded-2xl border border-border bg-card/95 p-4 shadow-elevated backdrop-blur-sm sm:block lg:-left-10"
            >
              <p className="text-xs text-muted-foreground">Primera generación</p>
              <p className="mt-0.5 font-display text-2xl font-bold text-foreground">
                5 <span className="text-base font-semibold text-primary">graduados</span>
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">Tenjo · 2022</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
