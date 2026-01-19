import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ClientsCarousel } from "@/components/home/ClientsCarousel";
import { AwardsSection } from "@/components/home/AwardsSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ClientsCarousel />
      <AwardsSection />
      <PortfolioSection />
      <ServicesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;