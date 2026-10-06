import { Mail, MapPin, Phone } from "lucide-react";

import { brand, contact, navLinks } from "@/content/site";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cream/10 bg-ink text-cream">
      <div className="container-custom">
        <div className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
          {/* ------------------------------------------------ Brand --- */}
          <div className="md:col-span-5">
            <a href="#inicio" className="inline-flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-display text-sm font-bold text-primary-foreground"
              >
                {"</>"}
              </span>
              <span className="font-display text-base font-semibold text-cream">
                {brand.name}
              </span>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/55">
              {brand.description}
            </p>

            <p className="mt-6 text-sm font-medium text-nature-light">
              {brand.tagline}
            </p>
          </div>

          {/* ---------------------------------------------- Navigate -- */}
          <nav aria-label="Pie de página" className="md:col-span-3">
            <h2 className="font-display text-sm font-semibold text-cream">
              Navegación
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/55 transition-colors hover:text-nature-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#impacto"
                  className="text-sm text-cream/55 transition-colors hover:text-nature-light"
                >
                  Impacto
                </a>
              </li>
            </ul>
          </nav>

          {/* ----------------------------------------------- Contact -- */}
          <div className="md:col-span-4">
            <h2 className="font-display text-sm font-semibold text-cream">
              Contacto
            </h2>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2.5 text-sm text-cream/55 transition-colors hover:text-nature-light"
                >
                  <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-nature-light" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.phoneHref}
                  className="inline-flex items-center gap-2.5 text-sm text-cream/55 transition-colors hover:text-nature-light"
                >
                  <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-nature-light" />
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-cream/55">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-nature-light" />
                <span>
                  {contact.city}
                  <br />
                  <span className="text-cream/40">
                    Presencia en {contact.municipios.join(" · ")}, Cundinamarca
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ------------------------------------------------- Bottom --- */}
        <div className="flex flex-col gap-3 border-t border-cream/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-cream/40">
            © {currentYear} {brand.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-cream/40">
            Las fotografías de este sitio son registros reales del programa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
