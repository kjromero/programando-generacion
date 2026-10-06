import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Check,
  Cpu,
  FlaskConical,
  School,
  TerminalSquare,
  Users,
} from "lucide-react";

import PhotoImage from "@/components/PhotoImage";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { schoolOfferings } from "@/content/site";
import { photos } from "@/content/generations";

const offeringIcons = {
  aula: School,
  steam: FlaskConical,
  robotica: Cpu,
  programacion: TerminalSquare,
  ia: BrainCircuit,
  acompanamiento: Users,
} as const;

const ColegiosSection = () => {
  return (
    <section
      id="colegios"
      aria-labelledby="colegios-title"
      className="section-padding relative overflow-hidden bg-muted/45"
    >
      <div className="container-custom">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Para colegios"
              title={<span id="colegios-title">Se adapta a tu institución, no al revés</span>}
              description="Trabajamos dentro del aula, con los docentes y con los equipos que el colegio ya tiene. Estos son los componentes que podemos combinar según tu realidad."
            />
          </div>

          <div className="lg:col-span-5 lg:pb-2">
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm-soft">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Ya lo hicimos con portátiles de{" "}
                  <span className="font-medium text-foreground">
                    Computadores para Educar
                  </span>{" "}
                  en una institución educativa rural. No se requiere un laboratorio nuevo.
                </p>
                <Button asChild variant="outline" size="sm" className="group mt-5">
                  <a href="#contacto">
                    Hablar con el equipo
                    <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ---------------------------------------------- Offerings ----- */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {schoolOfferings.map((offering, index) => {
            const Icon = offeringIcons[offering.key as keyof typeof offeringIcons];

            return (
              <motion.article
                key={offering.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted text-primary transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/10">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>

                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {offering.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {offering.description}
                </p>

                <ul className="mt-5 space-y-2 border-t border-border pt-5">
                  {offering.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"
                        strokeWidth={3}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        {/* --------------------------------------------- Proof banner --- */}
        <Reveal delay={0.1}>
          <div className="mt-14 grid overflow-hidden rounded-3xl border border-border bg-ink md:grid-cols-2">
            <div className="relative min-h-[16rem] bg-muted">
              <PhotoImage
                photo={photos.aulaPantalla}
                className="absolute inset-0 h-full w-full"
              />
            </div>

            <div className="flex flex-col justify-center p-8 lg:p-12">
              <p className="eyebrow text-nature-light">
                <span aria-hidden="true" className="h-px w-6 bg-nature-light/60" />
                En el aula, hoy
              </p>
              <p className="mt-5 font-display text-2xl font-semibold leading-snug text-cream lg:text-3xl">
                Un salón de clase cualquiera se convierte en un laboratorio cuando
                el código enciende algo que los estudiantes pueden sostener.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-cream/60">
                I.E.R.D.I. Valle de Tenjo — sesión de programación con placas
                micro:bit y el editor de bloques MakeCode.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ColegiosSection;
