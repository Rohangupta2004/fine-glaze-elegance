import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import SEO from "@/components/SEO";
import StoryHero from "@/components/home/cinematic/StoryHero";
import HomeWork from "@/components/home/cinematic/HomeWork";
import HomeClose from "@/components/home/cinematic/HomeClose";
import "@/components/home/cinematic/home.css";

const HERO_IMAGE = "/Embassy.webp";

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
    "primaryImageOfPage": "https://fineglaze.com" + HERO_IMAGE,
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
        <link rel="preload" as="image" href={HERO_IMAGE} {...{ fetchpriority: "high" }} />
      </Helmet>
      <div className="fg-home">
        <StoryHero />
        <HomeWork />
        <HomeClose />
      </div>
    </Layout>
  );
};

export default Index;