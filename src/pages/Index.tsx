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
        title="Fine Glaze – Glazed Facade & Glass Curtain Wall Manufacturers in Pune & Mumbai"
        description="Fine Glaze is India's leading glass facade contractor. Curtain wall manufacturers, structural glazing, ACP cladding & glass railings. 10+ projects. ₹350-1200/sq ft. Free quote."
        canonical="https://fineglaze.com/"
        keywords="fine glaze, glazed facade, glass facade contractors, curtain wall manufacturers, glaze aluminium, fasad glass, structural glazing Pune, ACP cladding contractor, glass railing Mumbai"
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