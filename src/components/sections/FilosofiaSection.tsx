import { motion } from "framer-motion";

import Reveal from "@/components/Reveal";
import { philosophyStages, philosophyStatement } from "@/content/site";

const FilosofiaSection = () => {
  return (
    <section
      id="filosofia"
      aria-labelledby="filosofia-title"
      className="relative overflow-hidden bg-ink section-padding text-cream"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-nature-light/40 to-transparent"
      />

      <div className="container-custom relative">
        {/* ---------------------------------------------- Statement ---- */}
        <Reveal>
          <p className="eyebrow mb-7 text-nature-light">
            <span aria-hidden="true" className="h-px w-6 bg-nature-light/60" />
            Nuestra filosofía
          </p>

          <h2 id="filosofia-title" className="display-lg max-w-4xl">
            <span className="text-cream/50">{philosophyStatement.lead}</span>
            <br />
            <span className="text-cream">{philosophyStatement.emphasis}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="lead mt-7 max-w-prose text-cream/70">
            La programación, la robótica y la inteligencia artificial son el medio,
            no el fin. Lo que entrenamos es la capacidad de mirar un problema de
            frente y construir una respuesta propia.
          </p>
        </Reveal>

        {/* ------------------------------------------------- Stages ---- */}
        <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-cream/10 bg-cream/10 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {philosophyStages.map((stage, index) => (
            <motion.li
              key={stage.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col bg-ink p-7 transition-colors duration-300 hover:bg-ink-soft lg:p-8"
            >
              <span
                aria-hidden="true"
                className="font-display text-5xl font-extrabold leading-none text-cream/10 transition-colors duration-300 group-hover:text-nature-light/35"
              >
                {stage.number}
              </span>

              <h3 className="mt-6 font-display text-xl font-semibold text-cream">
                {stage.title}
              </h3>

              <p className="mt-2 text-sm font-medium text-nature-light">
                {stage.summary}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-cream/60">
                {stage.detail}
              </p>

              {/* Progress rail that fills on hover */}
              <span
                aria-hidden="true"
                className="mt-7 block h-px w-full bg-cream/10"
              >
                <span className="block h-px w-0 bg-nature-light transition-all duration-500 group-hover:w-full" />
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default FilosofiaSection;
