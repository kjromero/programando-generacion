import { motion } from "framer-motion";
import { Sparkles, Globe, Users } from "lucide-react";

const PropositoSection = () => {
  return (
    <section id="proposito" className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-nature/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-golden/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nature/10 text-nature mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Nuestro Propósito</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Llevando la{" "}
              <span className="text-gradient-primary">tecnología</span> a donde más se necesita
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nuestro objetivo es involucrar a jóvenes de municipios rurales en carreras tecnológicas, 
              dándoles las herramientas y conocimientos para competir en igualdad de condiciones con 
              los centros metropolitanos de Colombia.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Globe,
                  title: "Inspiracional",
                  desc: "Mostramos que el futuro tecnológico también nace en el campo",
                },
                {
                  icon: Users,
                  title: "Transformacional",
                  desc: "Cambiamos vidas a través de la educación y el acompañamiento",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex gap-4 items-start p-4 rounded-xl bg-card shadow-card hover:shadow-elevated transition-shadow"
                >
                  <div className="p-3 rounded-lg bg-gradient-hero text-primary-foreground">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Concentric circles animation */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border-2 border-nature/20"
                  style={{ scale: 0.6 + i * 0.2 }}
                  animate={{
                    scale: [0.6 + i * 0.2, 0.7 + i * 0.2, 0.6 + i * 0.2],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-48 h-48 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow-primary"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-40 h-40 rounded-full bg-background flex flex-col items-center justify-center text-center p-4">
                    <span className="text-5xl font-display font-bold text-gradient-primary">14-28</span>
                    <span className="text-sm text-muted-foreground mt-1">años de edad</span>
                  </div>
                </motion.div>
              </div>

              {/* Floating icons */}
              {[
                { icon: "💻", position: "top-0 left-1/2 -translate-x-1/2" },
                { icon: "🌱", position: "bottom-0 left-1/2 -translate-x-1/2" },
                { icon: "🚀", position: "left-0 top-1/2 -translate-y-1/2" },
                { icon: "🎓", position: "right-0 top-1/2 -translate-y-1/2" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.position} text-4xl`}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-display font-medium text-foreground italic max-w-4xl mx-auto">
            "El futuro también nace en el{" "}
            <span className="text-nature not-italic">campo</span>"
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default PropositoSection;
