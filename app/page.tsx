import HeroSection from "@/components/sections/HeroSection";
import IntentRouter from "@/components/sections/IntentRouter";
import TrustBar from "@/components/sections/TrustBar";
import ServiceBand from "@/components/sections/ServiceBand";
import IndustrySolutions from "@/components/sections/IndustrySolutions";
import IntegratedSolutions from "@/components/sections/IntegratedSolutions";
import WhySolinsa from "@/components/sections/WhySolinsa";
import Brands from "@/components/sections/Brands";
import RefurbishedSection from "@/components/sections/RefurbishedSection";
import ConversionForm from "@/components/sections/ConversionForm";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntentRouter />
      <TrustBar />
      <ServiceBand />
      <IndustrySolutions />
      <IntegratedSolutions />
      <WhySolinsa />
      <Brands />
      <RefurbishedSection />
      <ConversionForm />
      <FinalCTA />
    </>
  );
}
