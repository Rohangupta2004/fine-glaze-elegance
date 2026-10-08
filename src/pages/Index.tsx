import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { CompanyVideoSection } from "@/components/home/CompanyVideoSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ServicesSection } from "@/components/home/ServicesSection";
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
    "description": "Leading facade contractor Pan India specialising in structural glazing, curtain wall systems, ACP cladding, aluminium facades, and glass railings for commercial buildings.",
    "telephone": "+918369233566",
    "email": "info@fineglaze.com",
    "foundingDate": "2018",
    "areaServed": ["Pan India", "Pune", "Mumbai", "Navi Mumbai", "Thane", "Maharashtra"],
    "sameAs": [
      "https://maps.app.goo.gl/JDF3ESXQGHtwKoAr6",
      "https://www.linkedin.com/company/fine-glaze"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 1 & 2, Jagdamba Bhawan Marg, near Sunshine Hills, Shree Siddhivinayak Meera",
      "addressLocality": "Undri, Pune",
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
    "description": "Fine Glaze is a premier facade engineering company operating Pan India, delivering structural glazing, curtain wall, ACP cladding and aluminium facade solutions for commercial buildings.",
    "sameAs": [
      "https://maps.app.goo.gl/JDF3ESXQGHtwKoAr6",
      "https://www.linkedin.com/company/fine-glaze"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 1 & 2, Jagdamba Bhawan Marg, near Sunshine Hills, Shree Siddhivinayak Meera",
      "addressLocality": "Undri, Pune",
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
        title="Facade & Glazing Contractor Pan India | Fine Glaze"
        description="Fine Glaze — top-rated facade contractor Pan India. Structural glazing, unitized curtain walls, ACP cladding & aluminium facades for IT parks, offices & malls. Embassy REIT awarded. ₹350–1200/sq ft. Free site visit."
        canonical="https://fineglaze.com/"
        keywords="facade contractor Pan India, all India facade contractor, Fine Glaze, aluminium facade contractor, glazing contractor, building facade company, facade fabrication company"
        schemas={[organizationSchema, localBusinessSchema, breadcrumbSchema]}
      />
      <HeroSection />
      <TrustStrip />
      <CompanyVideoSection />
      <ServicesSection />
      <PortfolioSection />
      <ReviewsSection />
      <ArticlesSection />
      <ContactFormSection />
      <CTASection />
    </Layout>
  );
};

export default Index;