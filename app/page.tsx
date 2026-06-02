import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ProblemsWeSolve from "@/components/sections/ProblemsWeSolve";
import IndustrySolutions from "@/components/sections/IndustrySolutions";
import IntegratedSolutions from "@/components/sections/IntegratedSolutions";
import WhySolinsa from "@/components/sections/WhySolinsa";
import Brands from "@/components/sections/Brands";
import ConversionForm from "@/components/sections/ConversionForm";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Trust Bar — Servicios clave */}
      <TrustBar />

      {/* Problems We Solve — Tarjetas de servicios */}
      <ProblemsWeSolve />

      {/* Industry Solutions — 4 industrias */}
      <IndustrySolutions />

      {/* Integrated Solutions — 3 paquetes integrados */}
      <IntegratedSolutions />

      {/* Why SOLINSA — Stats y diferenciadores */}
      <WhySolinsa />

      {/* Brands — Tecnologías líderes */}
      <Brands />

      {/* Conversion Form — Cotización */}
      <ConversionForm />

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}
