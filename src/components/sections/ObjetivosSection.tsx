import { motion } from "framer-motion";
import {
  Code,
  Brain,
  Rocket,
  Leaf,
  Users,
  GraduationCap,
  Laptop,
  HeartHandshake,
} from "lucide-react";

const objetivos = [
  {
    icon: Code,
    title: "Programación Básica",
    description: "Fundamentos de desarrollo web, lógica de programación y herramientas modernas",
    color: "bg-tech",
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description: "Introducción a IA, machine learning y aplicaciones prácticas en el agro",
    color: "bg-nature",
  },
  {
    icon: Rocket,
    title: "Proyectos Productivos",
    description: "Desarrollo de soluciones reales para problemáticas locales",
    color: "bg-golden",
  },
  {
    icon: Leaf,
    title: "Enfoque AgroTech",
    description: "Tecnología aplicada al sector agrícola y pecuario colombiano",
    color: "bg-nature-dark",
  },
  {
    icon: Users,
    title: "Comunidad TECH",
    description: "Red de apoyo entre jóvenes tecnológicos de municipios rurales",
    color: "bg-tech",
  },
  {
    icon: GraduationCap,
    title: "Tutorías Personalizadas",
    description: "Acompañamiento individual para maximizar el aprendizaje",
    color: "bg-nature-light",
  },
  {
    icon: Laptop,
    title: "Incentivos Tecnológicos",
    description: "Computadores para los jóvenes más destacados del programa",
    color: "bg-golden",
  },
  {
    icon: HeartHandshake,
    title: "Crecimiento Personal",
    description: "Motivación, retroalimentación y acompañamiento integral",
    color: "bg-nature",
  },
];

const ObjetivosSection = () => {
  return (
    <section id="objetivos" className="section-padding bg-muted/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23228B22' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
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
            Objetivos del{" "}
            <span className="text-gradient-primary">Programa</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una formación integral que combina habilidades técnicas, proyectos reales y desarrollo personal
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {objetivos.map((objetivo, index) => (
            <motion.div
              key={objetivo.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all overflow-hidden"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${objetivo.color}`} />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${objetivo.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <objetivo.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {objetivo.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {objetivo.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-nature/5 to-transparent group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjetivosSection;
