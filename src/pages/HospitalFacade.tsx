import Illustration from "@/components/common/Illustration";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";

export default function HospitalFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hospital & Healthcare Building Facade Contractor India – Fine Glaze",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fine Glaze",
      "@id": "https://fineglaze.com",
      "url": "https://fineglaze.com",
      "telephone": "+91-8369233566",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Pune" },
      { "@type": "City", "name": "Mumbai" },
      { "@type": "State", "name": "Maharashtra" }
    ],
    "description": "Hospital facade contractor in Pune and Mumbai: glazing, ACP cladding and curtain wall, with in-house shop drawings. Nanavati Max Hospital is a project record."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What facade cladding is best for hospitals in India?", "acceptedAnswer": { "@type": "Answer", "text": "Smooth, cleanable cladding such as coated ACP is commonly used on opaque hospital facades, with curtain wall or windows on ward floors. Fire performance and finishes should be confirmed with the consultant and local regulations." } },
      { "@type": "Question", "name": "Does facade work need to happen while a hospital is operational?", "acceptedAnswer": { "@type": "Answer", "text": "Often yes, especially for repairs and refurbishment, which are done section by section with agreed access and timings. Fine Glaze's Nanavati Max Hospital work includes window leakage rectification on a building in use." } },
      { "@type": "Question", "name": "What acoustic glass is used for hospital ward facades?", "acceptedAnswer": { "@type": "Answer", "text": "Ward facades needing noise control commonly use double glazed units with a laminated pane, and the build-up follows an acoustic specification from the consultant. We do not quote performance figures without a tested system." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Hospital & Healthcare Building Facade Contractor India – Fine Glaze", "item": "https://fineglaze.com/hospital-facade" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Hospital Facade Contractor in Pune & Mumbai | Fine Glaze"
        description="Hospital facade contractor in Pune and Mumbai: glazing, ACP cladding and curtain wall, with in-house shop drawings. Nanavati Max Hospital is a project record."
        canonical="https://fineglaze.com/hospital-facade"
        keywords="hospital facade contractor, hospital glass facade, healthcare building facade, hygienic facade systems, hospital curtain wall"
        ogImage="https://fineglaze.com/projects/nanavati-max-hospital-38-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "Hospital & Healthcare Facade Specialist India" }]}
        title={<>Hospital & Healthcare <span className="text-gradient-gold">Facade Specialist India</span></>}
        intro="Fine Glaze takes facade work on hospitals and healthcare buildings in Pune and Mumbai: ACP cladding, glazing, aluminium windows and leakage rectification. Our hospital record is Nanavati Max Hospital, Vile Parle."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/nanavati-max-hospital-38-1.webp", alt: "Nanavati Max Hospital, Vile Parle, Mumbai — ACP cladding and window leakage rectification by Fine Glaze for L&T (ongoing)", width: 600, height: 420 }}
      />

      <Sec no="01" label="Overview" title={<>Facade Requirements for Healthcare Buildings</>} sheetLabel="Overview">
          <div className="sx-split">
            <Prose>
<p>
            Healthcare buildings have distinct facade needs: hygiene, patient comfort, continuity of operations and infection control. Common considerations are smooth, cleanable cladding surfaces, daylight through considered glazing, and acoustic performance against external noise.
          </p>
          <p>
            Facade materials for hospitals are usually chosen with the consultant against the hospital's accreditation and fire requirements. Confirm cladding fire performance, finishes and coatings with the project team before specifying.
          </p>
          <p>
            Fine Glaze documents hospital work at the <strong>Nanavati Max Super Speciality Hospital in Vile Parle, Mumbai</strong> (ACP cladding, top coping and window leakage rectification, with L&T Building & Construction; listed as ongoing). Hospital facade packages can include <strong>ACP cladding</strong>, <strong>curtain wall glazing</strong>, <strong>aluminium windows</strong> and <strong>entrance structural glazing</strong>.
          </p>
          <p>
            For critical infrastructure considerations, Fine Glaze can provide <strong>blast-resistant or hurricane-rated facade systems</strong> for healthcare buildings requiring continuity of operations in extreme weather events — increasingly relevant for coastal hospitals in Maharashtra and Gujarat.
          </p>
            </Prose>
            <div className="sx-side">
              <Illustration name="ind-hospital" flush sizes="(max-width: 960px) 100vw, 480px" />
            </div>
          </div>
      </Sec>

      <Sec no="02" label="Scope" title={<>What We Offer</>} sheetLabel="Scope of work">
        <SpecList items={[<>Cleanable ACP Cladding</>, <>Acoustic DGU Glass</>, <>Materials Specified to Project Brief</>, <>PVDF and Coated Finishes</>, <>Daylighting Through Glazing Design</>, <>Cleanable Smooth Surfaces</>]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      <RelatedProjects no="04" heading="Healthcare project" keywords={["hospital"]} />

      <Sec no="05" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>What facade cladding is best for hospitals in India?</>, a: <>Smooth, cleanable cladding such as coated ACP is commonly used on opaque hospital facades, with curtain wall or windows on ward floors. Fire performance and finishes should be confirmed with the consultant and local regulations.</> },
              { q: <>Does facade work need to happen while a hospital is operational?</>, a: <>Often yes, especially for repairs and refurbishment, which are done section by section with agreed access and timings. Fine Glaze's Nanavati Max Hospital work includes window leakage rectification on a building in use.</> },
              { q: <>What acoustic glass is used for hospital ward facades?</>, a: <>Ward facades needing noise control commonly use double glazed units with a laminated pane, and the build-up follows an acoustic specification from the consultant. We do not quote performance figures without a tested system.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="06" label="Related" title={<>Explore Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/acp-aluminium-cladding", title: "ACP Cladding", desc: "ACP cladding systems" },
            { to: "/curtain-wall-systems", title: "Curtain Wall Systems", desc: "Curtain wall glazing" },
            { to: "/facade-contractor-pune", title: "Facade Contractor Pune", desc: "Facade services Pune" },
            { to: "/commercial-building-facade", title: "Commercial Facade Guide", desc: "Commercial facade overview" },
            { to: "/maintenance-services", title: "Facade Maintenance", desc: "AMC & maintenance" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
