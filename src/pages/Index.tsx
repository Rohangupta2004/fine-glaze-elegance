import { useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import SEO from "@/components/SEO";
import StoryHero from "@/components/home/cinematic/StoryHero";
import HomeNumbers from "@/components/home/cinematic/HomeNumbers";
import HomeClients from "@/components/home/cinematic/HomeClients";
import HomeWork from "@/components/home/cinematic/HomeWork";
import HomeClose from "@/components/home/cinematic/HomeClose";
import { useReveal } from "@/components/home/cinematic/useReveal";
import "@/components/home/cinematic/home.css";

const HERO_IMAGE = "/Embassy.webp";

const Index = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  useReveal(homeRef);

  // Organization / LocalBusiness entities live once, sitewide, in index.html.
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://fineglaze.com/#webpage",
    "url": "https://fineglaze.com/",
    "name": "Facade & Glazing Contractor in Pune & Mumbai | Fine Glaze",
    "isPartOf": { "@id": "https://fineglaze.com/#website" },
    "about": { "@id": "https://fineglaze.com/#organization" },
    "primaryImageOfPage": "https://fineglaze.com" + HERO_IMAGE,
    "inLanguage": "en-IN",
  };

  return (
    <Layout darkHero>
      <SEO
        title="Facade Contractor in Pune, Mumbai & India | Fine Glaze"
        description="Facade contractor based in Pune and Mumbai, taking projects across India: curtain wall, glazing, ACP and AMC. Embassy REIT Best Vendor Performance 2024."
        canonical="https://fineglaze.com/"
        keywords="facade contractor Pune, facade contractor Mumbai, structural glazing contractor, curtain wall contractor, aluminium windows Pune, ACP cladding contractor, facade maintenance Mumbai, Fine Glaze"
        schema={webPageSchema}
      />
      <Helmet>
        <link rel="preload" as="image" href={HERO_IMAGE} {...{ fetchpriority: "high" }} />
      </Helmet>
      <div className="fg-home" ref={homeRef}>
        <StoryHero />
        <HomeNumbers />
        <HomeClients />
        <HomeWork />
        <HomeClose />
      </div>
    </Layout>
  );
};

export default Index;