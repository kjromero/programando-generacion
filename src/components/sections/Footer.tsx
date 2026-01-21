import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube, Heart } from "lucide-react";
import colombiaMap from "@/assets/colombia-map-tech.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Background Map */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={colombiaMap}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h3 className="font-display text-2xl font-bold mb-4">
              Programando una{" "}
              <span className="text-golden">Generación</span>
            </h3>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Transformando el futuro de los jóvenes rurales colombianos a través de la
              educación tecnológica, la comunidad y el acompañamiento personalizado.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-nature transition-colors flex items-center justify-center"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="font-display font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {["Inicio", "Propósito", "Objetivos", "Cómo Funciona", "Beneficios", "Testimonios"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-primary-foreground/70 hover:text-golden transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="font-display font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-nature/20 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-nature-light" />
                </div>
                <a
                  href="mailto:info@programandounageneracion.org"
                  className="text-primary-foreground/70 hover:text-golden transition-colors text-sm"
                >
                  info@programandounageneracion.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-tech/20 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-tech-light" />
                </div>
                <span className="text-primary-foreground/70 text-sm">+57 300 123 4567</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-golden/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-golden" />
                </div>
                <span className="text-primary-foreground/70 text-sm">
                  Cundinamarca, Colombia
                  <br />
                  <span className="text-nature-light">Impactando 50+ municipios rurales</span>
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Programando una Generación. Todos los derechos reservados.
          </p>
          <p className="text-sm text-primary-foreground/60 flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-destructive fill-destructive" /> para Colombia rural
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
