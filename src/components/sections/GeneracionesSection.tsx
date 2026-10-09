import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Quote } from "lucide-react";

import PhotoImage from "@/components/PhotoImage";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { generations, photos } from "@/content/generations";

const [primera, segunda] = generations;

/** Extra evidence from the ongoing generation, none of it reused above. */
const galeriaActual = [
  photos.jacKit,
  photos.jacExplicacion,
  photos.jacInstrucciones,
  photos.jacMesa,
  photos.jacPareja,
];

const GeneracionesSection = () => {
  return (
    <section
      id="generaciones"
      aria-labelledby="generaciones-title"
      className="section-padding relative overflow-hidden"
    >
      <div className="container-custom">
        <SectionHeading
          eyebrow="Generaciones reales"
          title={
            <span id="generaciones-title">
              Esto ya pasó. Y hay fotos.
            </span>
          }
          description="Cada generación del programa deja evidencia: estudiantes con nombre propio, horas certificadas y proyectos construidos en su propio colegio."
        />

        {/* =============================================================
            Primera Generación — Tenjo 2022
            The photograph is the proof the program happened, so it stays
            visually dominant on every breakpoint.
           ============================================================= */}
        <article className="mt-14 md:mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* ------------------------------------------- Photograph -- */}
            <motion.figure
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative lg:col-span-7"
            >
              <div className="relative overflow-hidden rounded-3xl border border-border bg-muted shadow-elevated">
                <PhotoImage
                  photo={primera.photo}
                  className="aspect-[4/3] w-full transition-transform duration-[1.2s] ease-out hover:scale-[1.02]"
                />

                <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-ink/85 px-3.5 py-1.5 text-xs font-semibold text-cream backdrop-blur-sm">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-nature-light"
                  />
                  {primera.order} · {primera.title}
                </span>
              </div>

              <figcaption className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  Graduación de la primera generación de Tenjo Dev —{" "}
                  {primera.place}, {primera.year}.
                </span>
              </figcaption>
            </motion.figure>

            {/* ----------------------------------------------- Details -- */}
            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <p className="eyebrow text-primary">
                  {primera.place} — {primera.year}
                </p>

                <h3 className="display-md mt-4 text-foreground">{primera.title}</h3>

                {/* Highlight */}
                <div className="mt-7 rounded-2xl border border-primary/15 bg-primary/[0.04] p-5">
                  <p className="flex items-center gap-2 font-display text-base font-semibold text-foreground">
                    <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-primary" />
                    {primera.highlightTitle}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {primera.highlightBody}
                  </p>
                </div>

                {/* Stats */}
                <dl className="mt-7 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
                  {primera.stats.map((stat) => (
                    <div key={stat.label} className="bg-card px-3 py-5 text-center">
                      <dt className="sr-only">{stat.label}</dt>
                      <dd>
                        <span className="block font-display text-3xl font-bold leading-none text-foreground">
                          {stat.value}
                        </span>
                        <span className="mt-2 block text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
                          {stat.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Graduates — names printed on the certificates in the photo */}
                {primera.graduates && (
                  <div className="mt-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      Graduados
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {primera.graduates.map((name) => (
                        <li
                          key={name}
                          className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground"
                        >
                          {name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Reveal>
            </div>
          </div>

          {/* ------------------------------------------------- Quote --- */}
          {primera.quote && (
            <Reveal delay={0.12}>
              <blockquote className="mt-12 rounded-3xl border border-border bg-card p-7 shadow-card md:mt-14 md:p-10">
                <Quote
                  aria-hidden="true"
                  className="h-7 w-7 text-primary/25"
                  strokeWidth={1.5}
                />
                <p className="mt-4 max-w-4xl font-display text-xl font-medium leading-snug text-foreground md:text-2xl">
                  {primera.quote.text}
                </p>
                <footer className="mt-5 text-sm font-medium text-muted-foreground">
                  — {primera.quote.author}
                </footer>
              </blockquote>
            </Reveal>
          )}
        </article>

        {/* =============================================================
            Generación Actual — Escuela Jacalito e I.E.R.D.I. Valle de Tenjo
           ============================================================= */}
        <article className="mt-16 md:mt-24">
          <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-primary">{segunda.place}</p>

                <h3 className="display-md mt-4 text-foreground">{segunda.title}</h3>

                <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-3.5 py-1.5 text-xs font-semibold text-foreground">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary"
                  />
                  {segunda.badge}
                </span>

                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  {segunda.highlightBody}
                </p>

                <dl className="mt-7 flex flex-wrap gap-2">
                  {segunda.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-border bg-card px-4 py-3"
                    >
                      <dt className="text-[0.6875rem] uppercase tracking-[0.1em] text-muted-foreground">
                        {stat.label}
                      </dt>
                      <dd className="mt-0.5 font-display text-sm font-semibold text-foreground">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {segunda.note && (
                  <p className="mt-7 border-l-2 border-border pl-4 text-sm italic leading-relaxed text-muted-foreground">
                    {segunda.note}
                  </p>
                )}
              </Reveal>
            </div>
            <motion.figure
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2 lg:col-span-7"
            >
              <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-muted shadow-elevated">
                <PhotoImage
                  photo={segunda.photo}
                  className="aspect-[4/3] w-full lg:h-full"
                />
                <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-ink/85 px-3.5 py-1.5 text-xs font-semibold text-cream backdrop-blur-sm">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-secondary"
                  />
                  {segunda.order} · {segunda.title}
                </span>
              </div>
            </motion.figure>
          </div>

          {/* ------------------------------------------------- Gallery -- */}
          <Reveal delay={0.1}>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
              {galeriaActual.map((photo) => (
                <li
                  key={photo.webp}
                  className="overflow-hidden rounded-2xl border border-border bg-muted shadow-sm-soft"
                >
                  <PhotoImage
                    photo={photo}
                    className="aspect-[4/5] w-full transition-transform duration-[1.2s] ease-out hover:scale-[1.04]"
                  />
                </li>
              ))}
            </ul>
          </Reveal>
        </article>
      </div>
    </section>
  );
};

export default GeneracionesSection;
