import { motion } from "framer-motion";
import { AlertTriangle, Wifi, Monitor, TrendingUp } from "lucide-react";
import agrotechImg from "@/assets/agrotech.jpg";

const razones = [
  {
    icon: AlertTriangle,
    title: "Brecha Tecnológica Rural",
    description:
      "Los jóvenes rurales tienen hasta 3 veces menos acceso a formación tecnológica que sus pares urbanos",
    stat: "3x",
  },
  {
    icon: Monitor,
    title: "Pocas Oportunidades Educativas",
    description:
      "Menos del 15% de los municipios rurales tienen acceso a programas de tecnología",
    stat: "15%",
  },
  {
    icon: Wifi,
    title: "Falta de Acceso Digital",
    description:
      "Millones de jóvenes no tienen computador ni conexión estable a internet",
    stat: "40%",
  },
  {
    icon: TrendingUp,
    title: "Desarrollo Rural Pendiente",
    description:
      "La tecnología es clave para la competitividad y el desarrollo sostenible del campo colombiano",
    stat: "∞",
  },
];

const PorQueSection = () => {
  return (
    <section id="porque" className="section-padding bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-golden" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-nature/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-tech/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={agrotechImg}
                alt="Tecnología en el campo colombiano"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />

              {/* Floating stat card */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-md rounded-xl p-4 text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="text-sm text-muted-foreground mb-1">La tecnología también crece aquí</div>
                <div className="font-display font-bold text-xl text-nature">
                  Sembrando tecnología, cosechando oportunidades
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              ¿Por qué existe este{" "}
              <span className="text-golden">programa</span>?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10">
              Colombia tiene un enorme potencial tecnológico en sus zonas rurales, pero las barreras
              estructurales impiden que miles de jóvenes accedan a estas oportunidades.
            </p>

            <div className="space-y-4">
              {razones.map((razon, index) => (
                <motion.div
                  key={razon.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex gap-4 p-4 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-golden/20 flex items-center justify-center">
                      <razon.icon className="w-6 h-6 text-golden" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-primary-foreground mb-1">
                      {razon.title}
                    </h3>
                    <p className="text-sm text-primary-foreground/70">{razon.description}</p>
                  </div>
                  <div className="flex-shrink-0 text-3xl font-display font-bold text-nature-light">
                    {razon.stat}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PorQueSection;
