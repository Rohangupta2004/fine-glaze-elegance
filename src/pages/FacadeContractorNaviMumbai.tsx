import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function FacadeContractorNaviMumbai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade Contractor in Navi Mumbai",
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
    "description": "Facade contractor in Navi Mumbai: curtain walls, structural glazing and ACP cladding for Vashi, Mahape, Airoli and Belapur, with in-house shop drawings."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What projects has Fine Glaze done in Navi Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze's documented Navi Mumbai project is the LTIMindtree Mensa Campus in Mahape, where we carry out ACP and silicone facade work for L&T Construction. It is listed as ongoing in our portfolio." } },
      { "@type": "Question", "name": "Does Fine Glaze provide facade AMC in Navi Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze offers annual maintenance contracts for glazing, glass and cladding, covering cleaning, sealant repair, glass replacement, leakage investigation and periodic inspection with a written condition report." } },
      { "@type": "Question", "name": "What facade systems are popular in Navi Mumbai IT parks?", "acceptedAnswer": { "@type": "Answer", "text": "Unitized curtain walls suit large campuses because panels are made in a factory and installed quickly. ACP cladding often covers service areas and podiums, and structural glazing is often used at lobbies and atriums. This is general guidance." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Facade Contractor in Navi Mumbai", "item": "https://fineglaze.com/facade-contractor-navi-mumbai" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Facade Contractor in Navi Mumbai: Glazing, ACP | Fine Glaze"
        description="Facade contractor in Navi Mumbai: curtain walls, structural glazing and ACP cladding for Vashi, Mahape, Airoli and Belapur, with in-house shop drawings."
        canonical="https://fineglaze.com/facade-contractor-navi-mumbai"
        keywords="facade contractor Navi Mumbai, curtain wall Navi Mumbai, glass facade Mahape, ACP cladding Airoli, structural glazing Vashi, facade company Belapur, IT park facade Navi Mumbai"
        ogImage="https://fineglaze.com/projects/ltimindtree-campus-44-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <PageHero
        crumbs={[{ label: "Facade Contractor in Navi Mumbai" }]}
        title={<>Facade Contractor <span className="text-gradient-gold">in Navi Mumbai</span></>}
        intro="Fine Glaze takes facade projects in Navi Mumbai, including IT campuses, commercial buildings and residential towers. Our documented Navi Mumbai project is the LTIMindtree Mensa Campus in Mahape, with ACP and silicone work for L&T Construction."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/ltimindtree-campus-44-1.webp", alt: "LTIMindtree campus, Mahape, Navi Mumbai — ACP and silicone work by Fine Glaze for L&T Construction (ongoing)", width: 600, height: 420 }}
      />

      {/* RICH CONTENT */}
      <section className="fg-sec">
        <div className="fg-wrap fg-prose">
          
          <h2>Facade Work in Navi Mumbai</h2>
          <p className="text-muted-foreground">
            Navi Mumbai has major IT and industrial campuses in Mahape, Airoli and Belapur. Fine Glaze documents one project here, the LTIMindtree Mensa Campus in Mahape, where we carry out ACP and silicone facade work for L&T Construction.
          </p>
          <p className="text-muted-foreground mt-4">
            We take Navi Mumbai facade work across curtain walls, structural glazing, ACP cladding, glass railings and facade AMC. Drawings are prepared in-house and sized against the project wind load before approval.
          </p>
          <p className="text-muted-foreground mt-4">
            Nodes we cover include <strong>Mahape</strong>, <strong>Airoli</strong>, <strong>Vashi</strong>, <strong>Belapur</strong>, <strong>Kharghar</strong> and <strong>Panvel</strong>. In Panvel we have a documented project record, SSG Honesty (structural glazing, curtain wall, ACP and openable windows).
          </p>
          <p className="text-muted-foreground mt-4">
            The LTIMindtree Mensa Campus in Mahape is our documented Navi Mumbai project. It is listed as ongoing, with ACP and silicone facade work for L&T Construction.
          </p>
          <p className="text-muted-foreground mt-4">
            For residential developments in Kharghar and Panvel, we can quote glass railing and ACP cladding scope. Contact us with drawings for a project-specific quotation and programme.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>What We Offer</h2>
          <div className="fg-grid c2">
              <div key="LTIMindtree Campus Record" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">LTIMindtree Campus Record</span></div>
              <div key="Glass and Panel Systems to Spec" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Glass and Panel Systems to Spec</span></div>
              <div key="Mahape Project Record" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Mahape Project Record</span></div>
              <div key="Campus-Scale Facade Work" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Campus-Scale Facade Work</span></div>
              <div key="Multi-Block Coordination" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Multi-Block Coordination</span></div>
              <div key="Glass Specified to Project Brief" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Glass Specified to Project Brief</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>Frequently Asked Questions</h2>
          <div className="fg-faq">
            <details>
              <summary><h3>What projects has Fine Glaze done in Navi Mumbai?</h3></summary>
              <div className="fg-a">Fine Glaze's documented Navi Mumbai project is the LTIMindtree Mensa Campus in Mahape, where we carry out ACP and silicone facade work for L&T Construction. It is listed as ongoing in our portfolio.</div>
            </details>
            <details>
              <summary><h3>Does Fine Glaze provide facade AMC in Navi Mumbai?</h3></summary>
              <div className="fg-a">Yes. Fine Glaze offers annual maintenance contracts for glazing, glass and cladding, covering cleaning, sealant repair, glass replacement, leakage investigation and periodic inspection with a written condition report.</div>
            </details>
            <details>
              <summary><h3>What facade systems are popular in Navi Mumbai IT parks?</h3></summary>
              <div className="fg-a">Unitized curtain walls suit large campuses because panels are made in a factory and installed quickly. ACP cladding often covers service areas and podiums, and structural glazing is often used at lobbies and atriums. This is general guidance.</div>
            </details>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>Explore Related Services</h2>
          <div className="fg-grid">
            <Link key="/facade-contractor-mumbai" to="/facade-contractor-mumbai" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Contractor Mumbai</p><p className="text-xs text-mute">Mumbai facade services</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Contractor Pune</p><p className="text-xs text-mute">Pune facade services</p></div></Link>
            <Link key="/curtain-wall-systems" to="/curtain-wall-systems" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Curtain Wall Systems</p><p className="text-xs text-mute">Unitized curtain walls</p></div></Link>
            <Link key="/acp-aluminium-cladding" to="/acp-aluminium-cladding" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">ACP Cladding</p><p className="text-xs text-mute">ACP composite panels</p></div></Link>
            <Link key="/maintenance-services" to="/maintenance-services" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Maintenance</p><p className="text-xs text-mute">AMC & repair services</p></div></Link>
            <Link key="/structural-glazing" to="/structural-glazing" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Structural Glazing</p><p className="text-xs text-mute">Spider & SSG glazing</p></div></Link>
          </div>
        </div>
      </section>

      <RelatedProjects heading="Our projects in Navi Mumbai & Panvel" locations={["Navi Mumbai", "Panvel"]} />
      <CTASection />
    </Layout>
  );
}
