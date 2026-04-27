import {
  HeroHome,
  ServicesBento,
  MethodsSection,
  AboutSection,
  BlogPreview,
  CTABanner,
  StatsBar,
  FAQSection,
} from '@/components/sections';
import {
  demoServices,
  demoPosts,
  demoAbout,
  demoCTA,
  demoStats,
} from '@/lib/demo-data';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — Tu aliado en cromatografía */}
      <HeroHome />

      {/* 2. Trust indicators — Stats bar */}
      <div id="confianza">
        <StatsBar stats={demoStats} />
      </div>

      {/* 3. Services — bento grid */}
      <ServicesBento services={demoServices} />

      {/* 4. Methods — Métodos Analíticos y Tipos de Productos */}
      <MethodsSection />

      {/* 5. About Solinsa — Tu aliado estratégico */}
      <AboutSection
        image={demoAbout.image}
        overline={demoAbout.overline}
        title={demoAbout.title}
        description={demoAbout.description}
        checkItems={demoAbout.checkItems}
        cta={demoAbout.cta}
        yearsBadge={demoAbout.yearsBadge}
      />

      {/* 6. Blog preview — Perspectivas Técnicas */}
      <BlogPreview posts={demoPosts} />

      {/* 7. FAQ — Preguntas frecuentes (SEO + AI agents) */}
      <FAQSection />

      {/* 8. CTA banner — Agenda tu diagnóstico */}
      <CTABanner
        title={demoCTA.title}
        description={demoCTA.description}
        primaryButton={demoCTA.primaryButton}
        secondaryButton={demoCTA.secondaryButton}
      />
    </>
  );
}
