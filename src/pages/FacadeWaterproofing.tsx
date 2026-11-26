import SEO from "@/components/SEO";
import { telHref } from "@/data/company";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";

export default function FacadeWaterproofing() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade Waterproofing & Leak Repair in Pune and Mumbai",
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
    "description": "Facade waterproofing contractor in Pune and Mumbai: leakage investigation, sealant replacement and joint repair on glass and curtain wall facades."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much does facade leak repair cost in India?", "acceptedAnswer": { "@type": "Answer", "text": "Facade leak repair cost depends on joint length, access method, sealant specification and how much glass or gasket work is needed, so it needs an inspection first. Fine Glaze quotes after investigating the leak." } },
      { "@type": "Question", "name": "How often should facade sealant be replaced in India?", "acceptedAnswer": { "@type": "Answer", "text": "Facade sealant life depends on the product, exposure and workmanship, so there is no single replacement date. Inspect joints at least annually and before each monsoon, and replace sealant that has cracked, hardened or lost adhesion." } },
      { "@type": "Question", "name": "Can Fine Glaze repair leaking curtain wall in an occupied building?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Curtain wall sealant repair can be done in an occupied building by working section by section and agreeing access and timing with the building management. We plan the sequence per site." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Facade Waterproofing & Leak Repair in Pune and Mumbai", "item": "https://fineglaze.com/facade-waterproofing" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Facade Waterproofing Contractor, Pune & Mumbai | Fine Glaze"
        description="Facade waterproofing contractor in Pune and Mumbai: leakage investigation, sealant replacement and joint repair on glass and curtain wall facades."
        canonical="https://fineglaze.com/facade-waterproofing"
        keywords="facade waterproofing contractor, glass facade leak repair, curtain wall leakage repair, facade sealant replacement, building facade waterproofing"
        ogImage="https://fineglaze.com/projects/embassy-247-37-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <PageHero
        crumbs={[{ label: "Facade Waterproofing & Leak Repair" }]}
        title={<>Facade Waterproofing <span className="text-gradient-gold">& Leak Repair</span></>}
        intro="Facade leakage is a common complaint from building owners and facility managers. Fine Glaze handles leak investigation, sealant replacement and joint repair on curtain walls, structural glazing, ACP cladding and aluminium window systems."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/embassy-247-37-1.webp", alt: "Embassy 247, Vikhroli, Mumbai — water treatment and facade sealant work (approx. 80,500 RMT) by Fine Glaze", width: 600, height: 420 }}
      />

      {/* RICH CONTENT */}
      <section className="fg-sec">
        <div className="fg-wrap fg-prose">
          
          <h2>Why Facade Leakage Happens and How to Fix It</h2>
          <p className="text-muted-foreground">
            Water entering through a facade can damage interiors, false ceilings and building services. Heavy monsoon rain in Mumbai and Pune makes sealant, gasket and drainage condition important to check before every rainy season. This is general guidance.
          </p>
          <h3 className="text-xl font-medium mt-8 mb-3">Common Causes of Facade Leakage in India</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li><strong>Failed silicone sealant joints:</strong> Silicone sealant degrades over time with UV exposure, thermal cycling and building movement. Cracked or debonded sealant is a common cause of facade leakage.</li>
            <li><strong>Improper original installation:</strong> Inadequate joint depth, wrong sealant type, or contaminated surfaces at installation lead to premature sealant failure.</li>
            <li><strong>Thermal movement fatigue:</strong> Building facades expand and contract with temperature. Joints that are too narrow or stiff crack over time.</li>
            <li><strong>Missing or failed drainage channels:</strong> Curtain wall systems rely on internal pressure-equalisation drainage. Blocked drainage directs water inward.</li>
            <li><strong>Glass seal failure:</strong> DGU units lose their edge seal allowing inter-pane condensation.</li>
          </ul>
          <h3 className="text-xl font-medium mt-8 mb-3">Fine Glaze Waterproofing Repair Process</h3>
          <p className="text-muted-foreground">
            Our approach to a leak is: (1) trace the leak points on site, including a water test where needed; (2) inspect sealant adhesion and joint condition; (3) agree a repair scope; (4) remove failed sealant and prepare the surfaces; (5) apply new sealant from approved manufacturers such as DOWSIL or equivalents; (6) re-test the repaired area before sign-off.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze also offers AMC-based programmes with periodic inspection of sealant joints and drainage, repair of deteriorating joints before the monsoon, and a written condition report. We also handle facades we did not install.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>What We Offer</h2>
          <div className="fg-grid c2">
              <div key="Water Test Leak Tracing" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Water Test Leak Tracing</span></div>
              <div key="Sealant Adhesion Check" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Sealant Adhesion Check</span></div>
              <div key="Joint-by-Joint Remediation" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Joint-by-Joint Remediation</span></div>
              <div key="Approved Sealant Brands" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Approved Sealant Brands</span></div>
              <div key="Post-Repair Water Testing" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Post-Repair Water Testing</span></div>
              <div key="AMC Programmes" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">AMC Programmes</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>Frequently Asked Questions</h2>
          <div className="fg-faq">
            <details>
              <summary><h3>How much does facade leak repair cost in India?</h3></summary>
              <div className="fg-a">Facade leak repair cost depends on joint length, access method, sealant specification and how much glass or gasket work is needed, so it needs an inspection first. Fine Glaze quotes after investigating the leak.</div>
            </details>
            <details>
              <summary><h3>How often should facade sealant be replaced in India?</h3></summary>
              <div className="fg-a">Facade sealant life depends on the product, exposure and workmanship, so there is no single replacement date. Inspect joints at least annually and before each monsoon, and replace sealant that has cracked, hardened or lost adhesion.</div>
            </details>
            <details>
              <summary><h3>Can Fine Glaze repair leaking curtain wall in an occupied building?</h3></summary>
              <div className="fg-a">Yes. Curtain wall sealant repair can be done in an occupied building by working section by section and agreeing access and timing with the building management. We plan the sequence per site.</div>
            </details>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>Explore Related Services</h2>
          <div className="fg-grid">
            <Link key="/maintenance-services" to="/maintenance-services" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Maintenance</p><p className="text-xs text-mute">Full AMC service</p></div></Link>
            <Link key="/curtain-wall-systems" to="/curtain-wall-systems" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Curtain Wall Systems</p><p className="text-xs text-mute">Curtain wall systems</p></div></Link>
            <Link key="/structural-glazing" to="/structural-glazing" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Structural Glazing</p><p className="text-xs text-mute">Structural glazing</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Contractor Pune</p><p className="text-xs text-mute">Facade contractor Pune</p></div></Link>
            <Link key="/facade-contractor-mumbai" to="/facade-contractor-mumbai" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Contractor Mumbai</p><p className="text-xs text-mute">Facade contractor Mumbai</p></div></Link>
            <a key="tel" href={telHref} className="group fg-row"><Phone size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Call now</p><p className="text-xs text-mute">Free leak inspection</p></div></a>
          </div>
        </div>
      </section>

      <RelatedProjects heading="Leakage & sealant work we have done" keywords={["sealant", "leakage", "water"]} />
      <CTASection />
    </Layout>
  );
}
