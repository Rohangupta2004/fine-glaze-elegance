import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ClientsCarousel } from "@/components/home/ClientsCarousel";
import { AwardsSection } from "@/components/home/AwardsSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CTASection } from "@/components/home/CTASection";
import SEO from "@/components/SEO";

const Index = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com/" }
    ]
  };

  return (
    <Layout>
      <SEO
        title="Fine Glaze – #1 Aluminium Facade, Curtain Wall & Structural Glazing Company in Pune & Mumbai"
        description="Fine Glaze is India's leading aluminium facade contractor specialising in curtain wall systems, structural glazing, ACP cladding, glass railings & facade maintenance across Pune, Mumbai & Maharashtra."
        canonical="https://fineglaze.com/"
        keywords="aluminium facade company India, curtain wall system Pune, structural glazing Mumbai, ACP cladding contractor, glass railing installation, facade company near me"
        schema={breadcrumbSchema}
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