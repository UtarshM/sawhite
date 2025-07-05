import { HeroSection } from '@/components/hero-section';
import { PartnersSection } from '@/components/partners-section';
import { FeaturesSection } from '@/components/features-section';
import { WhyUsSection } from '@/components/why-us-section';
import { InternshipsPreviewSection } from '@/components/internships-preview-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CtaSection } from '@/components/cta-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <WhyUsSection />
      <InternshipsPreviewSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
