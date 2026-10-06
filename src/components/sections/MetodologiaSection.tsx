import { motion } from "framer-motion";
import {
  ArrowDown,
  Blocks,
  BrainCircuit,
  Code2,
  Compass,
  Sparkles,
  Target,
} from "lucide-react";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { methodologySteps } from "@/content/site";

const stepIcons = {
  problema: Target,
  exploracion: Compass,
  programacion: Code2,
  construccion: Blocks,
  ia: BrainCircuit,
  solucion: Sparkles,
} as const;

const MetodologiaSection = () => {
  return (
    <section
      id="metodologia"
      aria-labelledby="metodologia-title"
      className="section-padding relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid mask-fade opacity-50"
      />

      <div className="container-custom relative">
        <SectionHeading
          eyebrow="Cómo funciona"
          title={<span id="metodologia-title">Aprender creando, no memorizando</span>}
          description="Una misma ruta, repetida hasta que se vuelve una forma de pensar. El estudiante no espera la respuesta: la construye."
          align="center"
        />

        {/* ---------------------------------------------------- Flow ---- */}
        <ol className="relative mx-auto mt-16 max-w-3xl md:mt-20">
          {/* Continuous rail behind the steps */}
          <span
            aria-hidden="true"
            className="absolute left-[1.4375rem] top-4 bottom-4 w-px bg-gradient-to-b from-primary/50 via-border to-secondary/60 md:left-1/2 md:-translate-x-1/2"
          />

          {methodologySteps.map((step, index) => {
            const Icon = stepIcons[step.key as keyof typeof stepIcons];
            const isLast = index === methodologySteps.length - 1;

            return (
              <motion.li
                key={step.key}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex items-start gap-5 pb-8 last:pb-0 md:gap-0"
              >
                {/* Node */}
                <span
                  className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-colors md:absolute md:left-1/2 md:-translate-x-1/2 ${
                    isLast
                      ? "border-secondary/40 bg-secondary/15 text-foreground"
                      : "border-border bg-card text-primary"
                  }`}
                >
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>

                {/* Content — alternates sides on desktop */}
                <div
                  className={`min-w-0 md:w-[calc(50%-3rem)] ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-10 md:text-right"
                      : "md:ml-auto md:pl-10"
                  }`}
                >
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Paso {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Directional cue between steps */}
                {!isLast && (
                  <ArrowDown
                    aria-hidden="true"
                    className="absolute left-[1.0625rem] top-[3.25rem] h-4 w-4 text-border md:left-1/2 md:-translate-x-1/2"
                  />
                )}
              </motion.li>
            );
          })}
        </ol>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-14 max-w-2xl text-center font-display text-lg font-medium text-foreground md:text-xl">
            El objetivo no es que el estudiante aprenda un lenguaje.
            <span className="text-muted-foreground">
              {" "}
              Es que sepa qué hacer cuando no sabe la respuesta.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default MetodologiaSection;
