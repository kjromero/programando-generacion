import { ArrowRight, Mail, Phone } from "lucide-react";

import PhotoImage from "@/components/PhotoImage";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { contact, finalCta } from "@/content/site";
import { photos } from "@/content/generations";

const CTASection = () => {
  return (
    <section
      id="contacto"
      aria-labelledby="cta-title"
      className="section-padding relative overflow-hidden"
    >
      <div className="container-custom">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-elevated">
            <div className="grid lg:grid-cols-12">
              {/* ------------------------------------------- Message --- */}
              <div className="relative p-8 sm:p-12 lg:col-span-7 lg:p-16">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-grid opacity-50"
                />

                <div className="relative">
                  <p className="eyebrow text-primary">
                    <span aria-hidden="true" className="h-px w-6 bg-primary/50" />
                    Siguiente paso
                  </p>

                  <h2 id="cta-title" className="display-lg mt-6 text-foreground">
                    {finalCta.question}
                  </h2>

                  <p className="lead mt-6 max-w-prose">{finalCta.body}</p>

                  <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button asChild size="xl" className="group w-full sm:w-auto">
                      <a
                        href={`mailto:${contact.email}?subject=${encodeURIComponent(
                          "Quiero llevar Programando una Generación a mi colegio",
                        )}`}
                      >
                        {finalCta.primary}
                        <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="xl"
                      className="w-full sm:w-auto"
                    >
                      <a href="#generaciones">Ver generaciones</a>
                    </Button>
                  </div>

                  {/* Direct contact */}
                  <ul className="mt-10 flex flex-col gap-3 border-t border-border pt-7 sm:flex-row sm:gap-8">
                    <li>
                      <a
                        href={`mailto:${contact.email}`}
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Mail aria-hidden="true" className="h-4 w-4 text-primary" />
                        {contact.email}
                      </a>
                    </li>
                    <li>
                      <a
                        href={contact.phoneHref}
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Phone aria-hidden="true" className="h-4 w-4 text-primary" />
                        {contact.phone}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* --------------------------------------------- Photo --- */}
              <div className="relative min-h-[18rem] bg-muted lg:col-span-5">
                <PhotoImage
                  photo={photos.microbitEncendida}
                  className="absolute inset-0 h-full w-full"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"
                />
                <p className="absolute inset-x-0 bottom-0 p-7 text-sm font-medium text-cream">
                  El momento en que el código deja de ser abstracto.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
