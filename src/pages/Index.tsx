import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ClientsCarousel } from "@/components/home/ClientsCarousel";
import { AwardsSection } from "@/components/home/AwardsSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CTASection } from "@/components/home/CTASection";
import { FeatureShowcaseSection } from "@/components/home/FeatureShowcaseSection";
import { SeoContentSection } from "@/components/home/SeoContentSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeatureShowcaseSection />
      <ClientsCarousel />
      <AwardsSection />
      <PortfolioSection />
      <ServicesSection />
      <CTASection />
      <SeoContentSection />
    </Layout>
  );
};

export default Index;