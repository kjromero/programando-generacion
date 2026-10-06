import { motion } from "framer-motion";
import { Info, Quote } from "lucide-react";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { impactGoals, testimonies, verifiedImpact } from "@/content/generations";

const ImpactoSection = () => {
  return (
    <section
      id="impacto"
      aria-labelledby="impacto-title"
      className="section-padding relative overflow-hidden bg-ink text-cream"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50"
      />

      <div className="container-custom relative">
        <SectionHeading
          eyebrow="Impacto"
          tone="dark"
          title={<span id="impacto-title">Lo que podemos demostrar</span>}
          description="Separamos a propósito lo alcanzado de lo que aún es una meta. La confianza se construye con cifras verificables."
        />

        {/* -------------------------------------------- Verified -------- */}
        <dl className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
          {verifiedImpact.map((figure, index) => (
            <motion.div
              key={figure.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="bg-ink p-7 lg:p-8"
            >
              <dd className="font-display text-5xl font-extrabold leading-none tracking-tight text-nature-light">
                {figure.value}
              </dd>
              <dt className="mt-4 font-display text-base font-semibold text-cream">
                {figure.label}
              </dt>
              <p className="mt-2 text-sm leading-relaxed text-cream/55">
                {figure.detail}
              </p>
            </motion.div>
          ))}
        </dl>

        {/* ----------------------------------------------- Goals -------- */}
        <Reveal delay={0.1}>
          <div className="mt-14 rounded-3xl border border-cream/10 p-7 lg:p-9">
            <p className="flex items-center gap-2 text-sm font-medium text-cream/70">
              <Info aria-hidden="true" className="h-4 w-4 shrink-0 text-secondary" />
              Metas del programa — aún no alcanzadas
            </p>

            <dl className="mt-7 grid gap-7 sm:grid-cols-3">
              {impactGoals.map((goal) => (
                <div key={goal.label}>
                  <dd className="font-display text-3xl font-bold leading-none text-cream/35">
                    {goal.value}
                  </dd>
                  <dt className="mt-3 text-sm font-medium text-cream/60">
                    {goal.label}
                  </dt>
                </div>
              ))}
            </dl>

            <p className="mt-7 border-t border-cream/10 pt-6 text-sm leading-relaxed text-cream/45">
              Publicaremos cada cifra en la columna de resultados verificados a
              medida que se cumpla, con la evidencia correspondiente.
            </p>
          </div>
        </Reveal>

        {/* ------------------------------------------ Testimonies ------- */}
        <div className="mt-16 md:mt-20">
          <h3 className="font-display text-xl font-semibold text-cream">
            Voces del programa
          </h3>

          <ul className="mt-7 grid gap-5 md:grid-cols-3">
            {testimonies.map((testimony, index) => (
              <motion.li
                key={testimony.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col rounded-2xl border border-cream/10 bg-cream/[0.03] p-6 transition-colors duration-300 hover:bg-cream/[0.06]"
              >
                <Quote
                  aria-hidden="true"
                  className="h-5 w-5 text-nature-light/40"
                  strokeWidth={1.5}
                />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-cream/80">
                  {testimony.quote}
                </blockquote>
                <footer className="mt-5 border-t border-cream/10 pt-4">
                  <p className="font-display text-sm font-semibold text-cream">
                    {testimony.name}
                  </p>
                  <p className="mt-0.5 text-xs text-cream/50">{testimony.location}</p>
                </footer>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ImpactoSection;
