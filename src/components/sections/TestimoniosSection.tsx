import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import studentsImage from "@/assets/students-tenjo-dev.jpg";

const testimonios = [
  {
    name: "María Camila",
    location: "Tenjo, Cundinamarca",
    age: 17,
    quote:
      "Antes pensaba que la programación era solo para personas de ciudades grandes. Ahora estoy creando una app para ayudar a los agricultores de mi pueblo.",
    avatar: "👩‍💻",
  },
  {
    name: "Juan Sebastián",
    location: "Villeta, Cundinamarca",
    age: 22,
    quote:
      "Gracias al programa conseguí mi primer trabajo remoto como desarrollador. Puedo ayudar a mi familia sin tener que irme del municipio.",
    avatar: "👨‍💻",
  },
  {
    name: "Laura Valentina",
    location: "Sopó, Cundinamarca",
    age: 19,
    quote:
      "La comunidad que encontré aquí es increíble. Tengo mentores que me apoyan y compañeros con quienes aprendo cada día.",
    avatar: "👩‍🎓",
  },
];

const TestimoniosSection = () => {
  return (
    <section id="testimonios" className="section-padding bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-muted/50 to-transparent" />

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
            Historias de{" "}
            <span className="text-gradient-primary">transformación</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce a algunos de los jóvenes que están cambiando su futuro
          </p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img
              src={studentsImage}
              alt="Estudiantes del programa Tenjo Dev con sus certificados"
              className="w-full object-cover max-h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                Primera generación de graduados
              </h3>
              <p className="text-primary-foreground/80">
                Jóvenes de Tenjo, Cundinamarca, celebrando su certificación en programación básica
              </p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={testimonio.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all h-full relative">
                {/* Quote icon */}
                <Quote className="absolute top-4 right-4 w-10 h-10 text-nature/20" />

                {/* Avatar */}
                <div className="text-5xl mb-4">{testimonio.avatar}</div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-golden text-golden" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonio.quote}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-display font-semibold text-foreground">
                    {testimonio.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonio.age} años • {testimonio.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniosSection;
