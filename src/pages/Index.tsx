import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FilosofiaSection from "@/components/sections/FilosofiaSection";
import GeneracionesSection from "@/components/sections/GeneracionesSection";
import ProyectosSection from "@/components/sections/ProyectosSection";
import MetodologiaSection from "@/components/sections/MetodologiaSection";
import ColegiosSection from "@/components/sections/ColegiosSection";
import ImpactoSection from "@/components/sections/ImpactoSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main id="contenido">
        <div id="inicio">
          <HeroSection />
        </div>
        <FilosofiaSection />
        <GeneracionesSection />
        <ProyectosSection />
        <MetodologiaSection />
        <ColegiosSection />
        <ImpactoSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
