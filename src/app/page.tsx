import { HeroSection } from "@/components/hero-section";
import { BrandsSection } from "@/components/brands-section";
import { ServicesSection } from "@/components/services-section";
import { FeaturesSection } from "@/components/features-section";
import { ArchitectProfileSection } from "@/components/architect-profile-section";
import { OurStorySection } from "@/components/our-story-section";
import { NewsSection } from "@/components/news-section";
import { PortfolioSection } from "@/components/portfolio-section";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <BrandsSection />
        <ServicesSection />
        <FeaturesSection />
        <ArchitectProfileSection />
        <OurStorySection />
        <NewsSection />
        <PortfolioSection />
      </main>
    </>
  );
}
