import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import SEO from "@/components/SEO";
import EngHero from "@/components/home/eng/EngHero";
import Capabilities from "@/components/home/eng/Capabilities";
import SelectedProjects from "@/components/home/eng/SelectedProjects";
import Method from "@/components/home/eng/Method";
import RecordStrip from "@/components/home/eng/RecordStrip";
import Clients from "@/components/home/eng/Clients";
import Close from "@/components/home/eng/Close";
import { HERO } from "@/components/home/eng/data";
import "@/components/home/eng/eng.css";

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
    "primaryImageOfPage": "https://fineglaze.com" + HERO.src,
    "inLanguage": "en-IN",
  };

  return (
    <Layout>
      <SEO
        title="Facade Contractor in Pune, Mumbai & India | Fine Glaze"
        description="Facade contractor based in Pune and Mumbai, taking projects across India: curtain wall, glazing, ACP and AMC. Embassy REIT Best Vendor Performance 2024."
        canonical="https://fineglaze.com/"
        keywords="facade contractor Pune Mumbai, facade contractor India, structural glazing contractor, curtain wall contractor, aluminium windows Pune, ACP cladding contractor, facade maintenance Mumbai, Fine Glaze"
        schema={webPageSchema}
      />
      <Helmet>
        <link rel="preload" as="image" href={HERO.src} {...{ fetchpriority: "high" }} />
      </Helmet>
      <EngHero />
      <Capabilities />
      <SelectedProjects />
      <Method />
      <RecordStrip />
      <Clients />
      <Close />
    </Layout>
  );
};

export default Index;
