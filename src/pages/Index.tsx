import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fine Glaze",
    "url": "https://fineglaze.com",
    "logo": "https://fineglaze.com/Logofg.webp",
    "description": "Leading facade solutions and fenestration expert Pan India with 5+ years track record and founder with 15+ years multinational facade engineering experience (Ex-Al Ghurair Group). Over 20,566 SQM delivered.",
    "telephone": "+918369233566",
    "email": "info@fineglaze.com",
    "foundingDate": "2019",
    "areaServed": ["Pan India", "Pune", "Mumbai", "Navi Mumbai", "Thane", "Delhi NCR", "Bengaluru", "Hyderabad", "Maharashtra"],
    "sameAs": [
      "https://maps.app.goo.gl/JDF3ESXQGHtwKoAr6",
      "https://www.linkedin.com/company/fine-glaze"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A3 LW-13, Pragati Serene Building, Sr.No.2, HDFC Bank Chowk, Mohammed Wadi",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411060",
      "addressCountry": "IN"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Fine Glaze",
    "image": "https://fineglaze.com/Logofg.webp",
    "url": "https://fineglaze.com",
    "telephone": "+918369233566",
    "email": "info@fineglaze.com",
    "priceRange": "₹₹₹",
    "description": "Complete facade solutions and fenestration expert Pan India, delivering structural glazing, curtain wall systems, aluminium doors and windows, and ACP cladding.",
    "sameAs": [
      "https://maps.app.goo.gl/JDF3ESXQGHtwKoAr6",
      "https://www.linkedin.com/company/fine-glaze"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A3 LW-13, Pragati Serene Building, Sr.No.2, HDFC Bank Chowk, Mohammed Wadi",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411060",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.4529,
      "longitude": 73.9072
    },
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "City", "name": "Pune" },
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Navi Mumbai" },
      { "@type": "City", "name": "Thane" },
      { "@type": "State", "name": "Maharashtra" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Facade & Fenestration Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Curtain Wall Systems" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Structural Glazing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aluminium Windows & Doors" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Louvers & Sun Control" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ACP / Metal Cladding" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Glass Railings" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Skylights & Canopies" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Glass Partitions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Perforated Screens" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Facade Maintenance & AMC" } }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com/" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Complete Facade Solutions & Fenestration Expert Pan India | Fine Glaze"
        description="Fine Glaze — premier facade solutions & fenestration expert Pan India. 5+ years company track record, founder 15+ years multinational facade experience (Ex-Al Ghurair Group). ~20,566+ SQM delivered. Embassy REIT Best Vendor 2024 awardee."
        canonical="https://fineglaze.com/"
        keywords="complete facade solutions, fenestration expert India, facade contractor Pan India, all India facade contractor, Fine Glaze, Deepak Gupta facade, aluminium windows contractor, unitized curtain wall, structural glazing India"
        schemas={[organizationSchema, localBusinessSchema, breadcrumbSchema]}
      />
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