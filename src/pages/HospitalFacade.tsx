import Illustration from "@/components/common/Illustration";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

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

      {/* HERO */}
      <PageHero
        crumbs={[{ label: "Hospital & Healthcare Facade Specialist India" }]}
        title={<>Hospital & Healthcare <span className="text-gradient-gold">Facade Specialist India</span></>}
        intro="Fine Glaze takes facade work on hospitals and healthcare buildings in Pune and Mumbai: ACP cladding, glazing, aluminium windows and leakage rectification. Our hospital record is Nanavati Max Hospital, Vile Parle."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/nanavati-max-hospital-38-1.webp", alt: "Nanavati Max Hospital, Vile Parle, Mumbai — ACP cladding and window leakage rectification by Fine Glaze for L&T (ongoing)", width: 600, height: 420 }}
      />

      {/* RICH CONTENT */}
      <section className="fg-sec">
        <div className="fg-wrap fg-prose">
          
          <h2>Facade Requirements for Healthcare Buildings</h2>
          <p className="text-muted-foreground">
            Healthcare buildings have distinct facade needs: hygiene, patient comfort, continuity of operations and infection control. Common considerations are smooth, cleanable cladding surfaces, daylight through considered glazing, and acoustic performance against external noise.
          </p>
          <p className="text-muted-foreground mt-4">
            Facade materials for hospitals are usually chosen with the consultant against the hospital's accreditation and fire requirements. Confirm cladding fire performance, finishes and coatings with the project team before specifying.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze documents hospital work at the <strong>Nanavati Max Super Speciality Hospital in Vile Parle, Mumbai</strong> (ACP cladding, top coping and window leakage rectification, with L&T Building & Construction; listed as ongoing). Hospital facade packages can include <strong>ACP cladding</strong>, <strong>curtain wall glazing</strong>, <strong>aluminium windows</strong> and <strong>entrance structural glazing</strong>.
          </p>
          <p className="text-muted-foreground mt-4">
            For critical infrastructure considerations, Fine Glaze can provide <strong>blast-resistant or hurricane-rated facade systems</strong> for healthcare buildings requiring continuity of operations in extreme weather events — increasingly relevant for coastal hospitals in Maharashtra and Gujarat.
          </p>
    
          <Illustration name="ind-hospital" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>What We Offer</h2>
          <div className="fg-grid c2">
              <div key="Cleanable ACP Cladding" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Cleanable ACP Cladding</span></div>
              <div key="Acoustic DGU Glass" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Acoustic DGU Glass</span></div>
              <div key="Materials Specified to Project Brief" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Materials Specified to Project Brief</span></div>
              <div key="PVDF and Coated Finishes" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">PVDF and Coated Finishes</span></div>
              <div key="Daylighting Through Glazing Design" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Daylighting Through Glazing Design</span></div>
              <div key="Cleanable Smooth Surfaces" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Cleanable Smooth Surfaces</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>Frequently Asked Questions</h2>
          <div className="fg-faq">
            <details>
              <summary><h3>What facade cladding is best for hospitals in India?</h3></summary>
              <div className="fg-a">Smooth, cleanable cladding such as coated ACP is commonly used on opaque hospital facades, with curtain wall or windows on ward floors. Fire performance and finishes should be confirmed with the consultant and local regulations.</div>
            </details>
            <details>
              <summary><h3>Does facade work need to happen while a hospital is operational?</h3></summary>
              <div className="fg-a">Often yes, especially for repairs and refurbishment, which are done section by section with agreed access and timings. Fine Glaze's Nanavati Max Hospital work includes window leakage rectification on a building in use.</div>
            </details>
            <details>
              <summary><h3>What acoustic glass is used for hospital ward facades?</h3></summary>
              <div className="fg-a">Ward facades needing noise control commonly use double glazed units with a laminated pane, and the build-up follows an acoustic specification from the consultant. We do not quote performance figures without a tested system.</div>
            </details>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>Explore Related Services</h2>
          <div className="fg-grid">
            <Link key="/acp-aluminium-cladding" to="/acp-aluminium-cladding" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">ACP Cladding</p><p className="text-xs text-mute">ACP cladding systems</p></div></Link>
            <Link key="/curtain-wall-systems" to="/curtain-wall-systems" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Curtain Wall Systems</p><p className="text-xs text-mute">Curtain wall glazing</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Contractor Pune</p><p className="text-xs text-mute">Facade services Pune</p></div></Link>
            <Link key="/commercial-building-facade" to="/commercial-building-facade" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Commercial Facade Guide</p><p className="text-xs text-mute">Commercial facade overview</p></div></Link>
            <Link key="/maintenance-services" to="/maintenance-services" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Maintenance</p><p className="text-xs text-mute">AMC & maintenance</p></div></Link>
            <Link key="/contact" to="/contact" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Book a call</p><p className="text-xs text-mute">Talk to our team</p></div></Link>
          </div>
        </div>
      </section>

      <RelatedProjects heading="Healthcare project" keywords={["hospital"]} />
      <CTASection />
    </Layout>
  );
}
