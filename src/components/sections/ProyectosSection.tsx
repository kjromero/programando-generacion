import { motion } from "framer-motion";
import { CircleDashed, Lightbulb, Target, Wrench } from "lucide-react";

import PhotoImage from "@/components/PhotoImage";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";
import { documentedWork, upcomingWorkNote } from "@/content/generations";

const ProyectosSection = () => {
  return (
    <section
      id="proyectos"
      aria-labelledby="proyectos-title"
      className="section-padding relative overflow-hidden bg-muted/45"
    >
      <div className="container-custom">
        <SectionHeading
          eyebrow="Portafolio documentado"
          title={<span id="proyectos-title">Lo que construyen, sesión a sesión</span>}
          description="Cada tarjeta corresponde a una sesión real registrada en fotografía: qué hicieron los estudiantes, qué problema aborda y con qué herramientas trabajaron."
        />

        {/* ------------------------------------------------- Grid ------- */}
        <div className="mt-14 grid gap-6 md:mt-18 md:grid-cols-2 lg:grid-cols-3">
          {documentedWork.map((work, index) => (
            <motion.article
              key={work.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm-soft transition-shadow duration-300 hover:shadow-elevated",
                work.span === "wide" && "lg:col-span-2",
              )}
            >
              {/* Photograph */}
              <div className="relative overflow-hidden bg-muted">
                <PhotoImage
                  photo={work.photo}
                  className={cn(
                    "w-full transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]",
                    work.span === "wide" ? "aspect-[16/10]" : "aspect-[4/3]",
                  )}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
                  {work.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {work.what}
                </p>

                <dl className="mt-5 space-y-3 border-t border-border pt-5 text-sm">
                  <div className="flex gap-2.5">
                    <dt className="shrink-0">
                      <Target aria-hidden="true" className="h-4 w-4 text-primary" />
                      <span className="sr-only">Problema que aborda</span>
                    </dt>
                    <dd className="leading-relaxed text-muted-foreground">
                      {work.problem}
                    </dd>
                  </div>

                  <div className="flex gap-2.5">
                    <dt className="shrink-0">
                      <Lightbulb aria-hidden="true" className="h-4 w-4 text-secondary" />
                      <span className="sr-only">Qué aprenden</span>
                    </dt>
                    <dd className="leading-relaxed text-muted-foreground">
                      {work.learning}
                    </dd>
                  </div>
                </dl>

                {/* Tech used */}
                <div className="mt-auto pt-6">
                  <p className="sr-only">Tecnologías utilizadas</p>
                  <ul className="flex flex-wrap gap-1.5">
                    {work.tech.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        <Wrench aria-hidden="true" className="h-3 w-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}

          {/* ------------------------------------------------------------
              Deliberately reserved slot: student-led project outcomes are
              still being documented, so we leave space instead of inventing
              projects that do not exist yet.
             ------------------------------------------------------------ */}
          <Reveal delay={0.1} className="lg:col-span-1">
            <div className="flex h-full flex-col justify-center rounded-3xl border border-dashed border-border bg-transparent p-7 lg:p-8">
              <CircleDashed
                aria-hidden="true"
                className="h-7 w-7 text-muted-foreground/50"
                strokeWidth={1.5}
              />
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {upcomingWorkNote.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {upcomingWorkNote.body}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ProyectosSection;
