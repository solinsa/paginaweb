import {
  HeroHome,
  ServicesBento,
  AboutSection,
  BlogPreview,
  CTABanner,
} from '@/components/sections';
import {
  demoIndustries,
  demoServices,
  demoPosts,
  demoAbout,
  demoCTA,
} from '@/lib/demo-data';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — two-column with industry quick-access */}
      <HeroHome industries={demoIndustries} />

      {/* 2. Services — bento grid */}
      <ServicesBento services={demoServices} />

      {/* 3. About Solinsa — image + text with floating badge */}
      <AboutSection
        image={demoAbout.image}
        overline={demoAbout.overline}
        title={demoAbout.title}
        description={demoAbout.description}
        checkItems={demoAbout.checkItems}
        cta={demoAbout.cta}
        yearsBadge={demoAbout.yearsBadge}
      />

      {/* 4. Blog preview — 3-column card grid */}
      <BlogPreview posts={demoPosts} />

      {/* 5. CTA banner — full-width rounded card */}
      <CTABanner
        title={demoCTA.title}
        description={demoCTA.description}
        primaryButton={demoCTA.primaryButton}
        secondaryButton={demoCTA.secondaryButton}
      />
    </>
  );
}
