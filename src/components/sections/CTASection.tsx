import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, User, Briefcase } from "lucide-react";

const opciones = [
  {
    icon: User,
    title: "Jóvenes",
    description: "¿Tienes entre 14 y 28 años y quieres aprender tecnología?",
    cta: "Quiero inscribirme",
    color: "nature",
    href: "#",
  },
  {
    icon: Building,
    title: "Municipios",
    description: "¿Eres alcalde o líder municipal? Lleva el programa a tu comunidad",
    cta: "Más información",
    color: "tech",
    href: "#",
  },
  {
    icon: Briefcase,
    title: "Empresas",
    description: "¿Quieres patrocinar y formar al talento del futuro?",
    cta: "Ser patrocinador",
    color: "golden",
    href: "#",
  },
];

const CTASection = () => {
  return (
    <section id="participar" className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-60 h-60 bg-primary-foreground/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-golden/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 text-primary-foreground"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            ¿Cómo quieres{" "}
            <span className="text-golden">participar</span>?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Hay un lugar para ti en este movimiento de transformación rural tecnológica
          </p>
        </motion.div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {opciones.map((opcion, index) => (
            <motion.div
              key={opcion.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-elevated h-full flex flex-col text-foreground">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform
                    ${opcion.color === "nature" ? "bg-nature" : ""}
                    ${opcion.color === "tech" ? "bg-tech" : ""}
                    ${opcion.color === "golden" ? "bg-golden" : ""}
                  `}
                >
                  <opcion.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-bold mb-3">{opcion.title}</h3>
                <p className="text-muted-foreground mb-6 flex-1">{opcion.description}</p>

                {/* CTA */}
                <Button
                  variant={opcion.color === "golden" ? "golden" : opcion.color === "tech" ? "tech" : "nature"}
                  size="lg"
                  className="w-full group/btn"
                >
                  {opcion.cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-primary-foreground"
        >
          <p className="font-display text-xl md:text-2xl font-medium italic">
            "Cada línea de código escrita en el campo colombiano es una semilla de esperanza"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
