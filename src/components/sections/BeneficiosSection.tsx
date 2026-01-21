import { motion } from "framer-motion";
import { CheckCircle, Zap, Network, Shield } from "lucide-react";

const beneficios = [
  {
    icon: Zap,
    title: "Habilidades Digitales",
    description: "Domina las herramientas tecnológicas más demandadas en el mercado laboral actual",
    benefits: [
      "Programación web y móvil",
      "Manejo de herramientas de IA",
      "Análisis de datos básico",
      "Automatización de procesos",
    ],
  },
  {
    icon: Network,
    title: "Empleos del Futuro",
    description: "Prepárate para las carreras más prometedoras de la economía digital",
    benefits: [
      "Desarrollo de software",
      "Tecnología agrícola",
      "Soporte técnico remoto",
      "Emprendimiento digital",
    ],
  },
  {
    icon: Shield,
    title: "Motivación y Apoyo",
    description: "No estás solo en este camino, contarás con una red de apoyo constante",
    benefits: [
      "Mentores dedicados",
      "Comunidad de compañeros",
      "Seguimiento personalizado",
      "Recursos de bienestar",
    ],
  },
  {
    icon: CheckCircle,
    title: "Experiencia de Comunidad",
    description: "Forma parte de algo más grande que tú mismo",
    benefits: [
      "Eventos y hackatones",
      "Networking con empresas",
      "Proyectos colaborativos",
      "Reconocimiento público",
    ],
  },
];

const BeneficiosSection = () => {
  return (
    <section id="beneficios" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-nature/5 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Beneficios para los{" "}
            <span className="text-gradient-primary">jóvenes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Más que un curso, es una oportunidad de transformar tu vida y tu comunidad
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={beneficio.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all h-full border-l-4 border-nature">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-hero text-primary-foreground group-hover:scale-110 transition-transform">
                    <beneficio.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      {beneficio.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{beneficio.description}</p>
                  </div>
                </div>

                {/* Benefits list */}
                <ul className="space-y-3">
                  {beneficio.benefits.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-golden" />
                      <span className="text-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSection;
