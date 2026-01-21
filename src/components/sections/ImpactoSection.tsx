import { motion } from "framer-motion";
import { GraduationCap, Lightbulb, MapPin, Network } from "lucide-react";
import colombiaMap from "@/assets/colombia-map-tech.jpg";

const impactos = [
  {
    icon: GraduationCap,
    value: "1,000+",
    label: "Jóvenes Formados",
    description: "Egresados con habilidades tecnológicas reales",
  },
  {
    icon: Lightbulb,
    value: "100+",
    label: "Proyectos Productivos",
    description: "Soluciones tecnológicas para problemas locales",
  },
  {
    icon: MapPin,
    value: "50+",
    label: "Municipios",
    description: "Con presencia tecnológica activa",
  },
  {
    icon: Network,
    value: "∞",
    label: "Red de Talento",
    description: "Comunidad agrícola tecnológica en crecimiento",
  },
];

const ImpactoSection = () => {
  return (
    <section id="impacto" className="section-padding bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={colombiaMap}
          alt="Mapa de Colombia tecnológico"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-foreground/80" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Impacto{" "}
            <span className="text-golden">esperado</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Transformando la ruralidad colombiana, un joven a la vez
          </p>
        </motion.div>

        {/* Impact Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactos.map((impacto, index) => (
            <motion.div
              key={impacto.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 text-center h-full">
                {/* Icon */}
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-golden flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <impacto.icon className="w-7 h-7 text-secondary-foreground" />
                </div>

                {/* Value */}
                <div className="font-display text-4xl md:text-5xl font-bold text-nature-light mb-2">
                  {impacto.value}
                </div>

                {/* Label */}
                <div className="font-display font-semibold text-primary-foreground mb-1">
                  {impacto.label}
                </div>

                {/* Description */}
                <p className="text-sm text-primary-foreground/60">{impacto.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Impact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6 text-center"
        >
          <div className="p-6 rounded-xl bg-nature/20">
            <h4 className="font-display font-bold text-xl text-nature-light mb-2">
              Competitividad Municipal
            </h4>
            <p className="text-primary-foreground/70">
              Municipios rurales compitiendo en igualdad con centros urbanos
            </p>
          </div>
          <div className="p-6 rounded-xl bg-tech/20">
            <h4 className="font-display font-bold text-xl text-tech-light mb-2">
              Desarrollo Sostenible
            </h4>
            <p className="text-primary-foreground/70">
              Tecnología al servicio del desarrollo agrícola y ambiental
            </p>
          </div>
          <div className="p-6 rounded-xl bg-golden/20">
            <h4 className="font-display font-bold text-xl text-golden-light mb-2">
              Arraigo Territorial
            </h4>
            <p className="text-primary-foreground/70">
              Jóvenes que construyen futuro sin abandonar su territorio
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactoSection;
