import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ClientsCarousel } from "@/components/home/ClientsCarousel";
import { AwardsSection } from "@/components/home/AwardsSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CTASection } from "@/components/home/CTASection";
import { SeoContentSection } from "@/components/home/SeoContentSection";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What facade services does Fine Glaze provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fine Glaze provides aluminium facades, structural glazing, curtain wall systems, ACP cladding, glass railings, and facade maintenance services.",
      },
    },
    {
      "@type": "Question",
      name: "Does Fine Glaze handle both design and installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Fine Glaze supports end-to-end project delivery including facade design coordination, fabrication, site execution, and quality checks.",
      },
    },
    {
      "@type": "Question",
      name: "Which project types are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We support high-rise residential, commercial offices, retail developments, institutional campuses, and hospitality projects.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Fine Glaze",
  url: "https://fineglaze.com/",
  areaServed: "India",
  serviceType: [
    "Aluminium Facade",
    "Structural Glazing",
    "Curtain Wall Systems",
    "ACP Cladding",
    "Glass Railings",
    "Facade Maintenance",
  ],
};

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>
          Fine Glaze | Aluminium Facade, Structural Glazing & Curtain Wall
          Company in India
        </title>
        <meta
          name="description"
          content="Fine Glaze is a leading aluminium facade and structural glazing company in India. Explore curtain wall systems, ACP cladding, glass railings, and turnkey facade solutions."
        />
        <link rel="canonical" href="https://fineglaze.com/" />
        <meta
          name="keywords"
          content="aluminium facade company India, structural glazing contractor, curtain wall systems, ACP cladding, glass railings, facade maintenance"
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <HeroSection />
      <ClientsCarousel />
      <AwardsSection />
      <PortfolioSection />
      <ServicesSection />
      <SeoContentSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
