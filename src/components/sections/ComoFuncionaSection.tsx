import { motion } from "framer-motion";
import { Video, Users, Laptop, BookOpen, Briefcase, Clock } from "lucide-react";

const pasos = [
  {
    icon: Users,
    title: "Modalidad Mixta",
    description: "Combinamos sesiones presenciales con aprendizaje virtual para mayor flexibilidad",
    color: "nature",
  },
  {
    icon: Clock,
    title: "Cursos de 3 y 6 meses",
    description: "Programas estructurados que se adaptan a tu ritmo de vida",
    color: "tech",
  },
  {
    icon: Laptop,
    title: "Acceso a Tecnología",
    description: "Proporcionamos computadores e internet cuando el municipio no los tiene",
    color: "golden",
  },
  {
    icon: BookOpen,
    title: "Suscripción Platzi",
    description: "Complementa tu formación con la mejor plataforma educativa de Latinoamérica",
    color: "nature",
  },
  {
    icon: Briefcase,
    title: "Proyectos Reales",
    description: "Desarrollas soluciones tecnológicas para el sector agroindustrial local",
    color: "tech",
  },
  {
    icon: Video,
    title: "Tutorías en Vivo",
    description: "Acompañamiento personalizado con mentores expertos de la industria",
    color: "golden",
  },
];

const ComoFuncionaSection = () => {
  return (
    <section id="como-funciona" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(142 76% 36% / 0.1) 0%, transparent 70%)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

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
            ¿Cómo{" "}
            <span className="text-gradient-primary">funciona</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un proceso diseñado para que puedas aprender sin importar tu ubicación o recursos previos
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-nature via-tech to-golden -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pasos.map((paso, index) => (
              <motion.div
                key={paso.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                {/* Step number */}
                <div className="hidden lg:flex absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-card border-4 border-nature items-center justify-center z-10">
                  <span className="text-xs font-bold text-nature">{index + 1}</span>
                </div>

                {/* Card */}
                <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all h-full group">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl mb-4 flex items-center justify-center transition-transform group-hover:scale-110
                      ${paso.color === "nature" ? "bg-nature" : ""}
                      ${paso.color === "tech" ? "bg-tech" : ""}
                      ${paso.color === "golden" ? "bg-golden" : ""}
                    `}
                  >
                    <paso.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {paso.title}
                  </h3>
                  <p className="text-muted-foreground">{paso.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center p-8 rounded-2xl bg-gradient-hero text-primary-foreground"
        >
          <p className="font-display text-2xl md:text-3xl font-medium italic">
            "Desde los municipios, para el mundo"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ComoFuncionaSection;
