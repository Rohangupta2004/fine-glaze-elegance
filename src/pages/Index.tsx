import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ClientsCarousel } from "@/components/home/ClientsCarousel";
import { AwardsSection } from "@/components/home/AwardsSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CTASection } from "@/components/home/CTASection";
import { SeoHead } from "@/components/seo/SeoHead";

const Index = () => {
  return (
    <Layout>
      <SeoHead
        title="Fine Glaze | Aluminium Facade, Structural Glazing & Curtain Wall Company"
        description="Fine Glaze delivers aluminium facade systems, structural glazing, curtain walls, ACP cladding, and maintenance services across India for commercial and residential projects."
        path="/"
        keywords="aluminium facade company india, structural glazing contractor, curtain wall systems, ACP cladding, facade maintenance"
      />
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
