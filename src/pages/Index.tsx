import { Layout } from "@/components/layout/Layout";
import { HeroSection, HERO_POSTER } from "@/components/home/HeroSection";
import { Helmet } from "react-helmet-async";
import { TrustStrip } from "@/components/home/TrustStrip";
import { CompanyVideoSection } from "@/components/home/CompanyVideoSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { ArticlesSection } from "@/components/home/ArticlesSection";
import { ContactFormSection } from "@/components/home/ContactFormSection";
import { CTASection } from "@/components/home/CTASection";
import SEO from "@/components/SEO";

const Index = () => {
  // Organization / LocalBusiness entities live once, sitewide, in index.html.
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://fineglaze.com/#webpage",
    "url": "https://fineglaze.com/",
    "name": "Facade & Glazing Contractor in Pune & Mumbai | Fine Glaze",
    "isPartOf": { "@id": "https://fineglaze.com/#website" },
    "about": { "@id": "https://fineglaze.com/#organization" },
    "primaryImageOfPage": "https://fineglaze.com" + HERO_POSTER,
    "inLanguage": "en-IN",
  };

  return (
    <Layout darkHero>
      <SEO
        title="Facade & Glazing Contractor in Pune & Mumbai | Fine Glaze"
        description="Facade & glazing contractor in Pune & Mumbai: curtain walls, structural glazing, aluminium windows, ACP cladding and facade AMC. Embassy REIT Best Vendor 2024."
        canonical="https://fineglaze.com/"
        keywords="facade contractor Pune, facade contractor Mumbai, structural glazing contractor, curtain wall contractor, aluminium windows Pune, ACP cladding contractor, facade maintenance Mumbai, Fine Glaze"
        schema={webPageSchema}
      />
      <Helmet>
        <link rel="preload" as="image" href={HERO_POSTER} {...{ fetchpriority: "high" }} />
      </Helmet>
      <HeroSection />
      <TrustStrip />
      <CompanyVideoSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <ReviewsSection />
      <ArticlesSection />
      <ContactFormSection />
      <CTASection />
    </Layout>
  );
};

export default Index;