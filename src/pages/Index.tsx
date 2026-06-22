import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { CTASection } from "@/components/home/CTASection";
import SEO from "@/components/SEO";

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fine Glaze",
    "url": "https://fineglaze.com",
    "logo": "https://fineglaze.com/Logofg.webp",
    "description": "Leading facade contractor in Pune and Mumbai specialising in structural glazing, curtain wall systems, ACP cladding, aluminium facades, and glass railings for commercial buildings.",
    "telephone": "+918369233566",
    "email": "info@fineglaze.com",
    "foundingDate": "2018",
    "areaServed": ["Pune", "Mumbai", "Navi Mumbai", "Thane", "Maharashtra"],
    "sameAs": [],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
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
    "description": "Fine Glaze is a premier facade engineering company in Pune and Mumbai, delivering structural glazing, curtain wall, ACP cladding and aluminium facade solutions for commercial buildings.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411045",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.5204,
      "longitude": 73.8567
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "5",
      "bestRating": "5"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Facade Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Structural Glazing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Curtain Wall Systems" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ACP Cladding" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aluminium Facade" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Glass Railings" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Facade Maintenance AMC" } }
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
        title="Facade Contractor Pune & Mumbai | Curtain Wall, Structural Glazing, ACP Cladding – Fine Glaze"
        description="Fine Glaze — top-rated facade contractor in Pune & Mumbai. Structural glazing, unitized curtain walls, ACP cladding & aluminium facades for IT parks, offices & malls. Embassy REIT awarded. ₹350–1200/sq ft. Free site visit."
        canonical="https://fineglaze.com/"
        keywords="facade contractor pune, facade contractor mumbai, curtain wall manufacturers india, structural glazing contractor pune, ACP cladding contractor mumbai, aluminium facade company pune, glass railing contractor, glazed facade pune, facade company maharashtra, curtain wall pune"
        schemas={[organizationSchema, localBusinessSchema, breadcrumbSchema]}
      />
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <PortfolioSection />
      <ReviewsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;