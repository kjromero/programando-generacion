import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PropositoSection from "@/components/sections/PropositoSection";
import ObjetivosSection from "@/components/sections/ObjetivosSection";
import PorQueSection from "@/components/sections/PorQueSection";
import ComoFuncionaSection from "@/components/sections/ComoFuncionaSection";
import BeneficiosSection from "@/components/sections/BeneficiosSection";
import ImpactoSection from "@/components/sections/ImpactoSection";
import TestimoniosSection from "@/components/sections/TestimoniosSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <PropositoSection />
        <ObjetivosSection />
        <PorQueSection />
        <ComoFuncionaSection />
        <BeneficiosSection />
        <ImpactoSection />
        <TestimoniosSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
