import SEO from "@/components/SEO";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ItParkFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IT Park Facade Contractor India",
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
    "description": "IT park facade contractor in Pune and Mumbai: curtain walls and glazing for offices and campuses. Project records include LTIMindtree, Mahape."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What facade system is standard for IT parks in India?", "acceptedAnswer": { "@type": "Answer", "text": "Unitized curtain wall with double glazed low-E glass is a common choice for IT parks because factory-made panels install quickly and suit repeated floors. The final system depends on height, programme, energy brief and budget." } },
      { "@type": "Question", "name": "How does Fine Glaze handle large multi-building IT campus projects?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze runs campus projects with a dedicated site in-charge and supervisor, batches fabrication per project at its Pisoli unit and despatches directly to site. Our campus records include Embassy Techzone, Hinjewadi and the LTIMindtree Mensa Campus, Mahape." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "IT Park Facade Contractor India", "item": "https://fineglaze.com/it-park-facade" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="IT Park Facade Contractor in Pune & Mumbai | Fine Glaze"
        description="IT park facade contractor in Pune and Mumbai: curtain walls and glazing for offices and campuses. Project records include LTIMindtree, Mahape."
        canonical="https://fineglaze.com/it-park-facade"
        keywords="IT park facade contractor, office facade contractor, corporate building facade, technology park facade, curtain wall IT park"
        ogImage="https://fineglaze.com/projects/embassy-techzone-41-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-night-2 text-paper">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              IT Park Facade <span className="text-gradient-gold">Contractor India</span>
            </h1>
            <p className="text-lg text-paper/80 mb-8">Fine Glaze is a facade contractor for IT parks, technology campuses and corporate offices in Pune and Mumbai, with records on Embassy REIT and L&T Construction campuses.</p>
            <div className="flex gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-lamp hover:bg-lamp/90">Book a call</Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline">View Projects</Button>
              </Link>
            </div>
          </div>
          <img
            src="/projects/embassy-techzone-40-1.webp"
            alt="Embassy Techzone IT park, Hinjewadi, Pune — facade works by Fine Glaze for Embassy REIT"
            className="object-cover h-[420px] w-full"
            loading="eager"
            width="600"
            height="420"
          />
        </div>
      </section>

      {/* RICH CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          
          <h2 className="text-3xl font-bold">What IT Parks Need from Facade Contractors</h2>
          <p className="text-muted-foreground">
            IT parks and campuses have particular facade needs. Occupiers often ask for energy-efficient glazing, developers work to tight programmes, and campuses involve several blocks built in parallel. Owners also expect clear documentation and defect liability terms.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze documents several campus-scale records: the <strong>LTIMindtree Mensa Campus in Mahape, Navi Mumbai</strong> (ACP and silicone facade work for L&T Construction) and <strong>Embassy Techzone in Hinjewadi, Pune</strong> (spider glazing, ACP cladding, glass doors and facade AMC for Embassy REIT).
          </p>
          <p className="text-muted-foreground mt-4">
            As general guidance, IT park facades often use <strong>unitized curtain wall</strong> on taller blocks, <strong>double glazed low-E glass</strong> chosen to the energy brief, <strong>aluminium extrusions</strong> with a durable finish, and <strong>stainless steel anchors and EPDM gaskets</strong>. We follow the project's specification.
          </p>
          <p className="text-muted-foreground mt-4">
            We take IT park and campus projects in Pune and Mumbai, and elsewhere in India on request. Our documented IT campus records are in Hinjewadi, Pune and Mahape, Navi Mumbai.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Glass Specified to Energy Brief" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Glass Specified to Energy Brief</span></div>
              <div key="DGU Low-E Glass Options" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">DGU Low-E Glass Options</span></div>
              <div key="Unitized Curtain Wall Systems" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Unitized Curtain Wall Systems</span></div>
              <div key="Multi-Block Campus Projects" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Multi-Block Campus Projects</span></div>
              <div key="LTIMindtree Campus Record" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">LTIMindtree Campus Record</span></div>
              <div key="Batched Fabrication and Sequenced Erection" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Batched Fabrication and Sequenced Erection</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background p-6">
              <h3 className="text-lg font-bold mb-2">What facade system is standard for IT parks in India?</h3>
              <p className="text-muted-foreground">Unitized curtain wall with double glazed low-E glass is a common choice for IT parks because factory-made panels install quickly and suit repeated floors. The final system depends on height, programme, energy brief and budget.</p>
            </div>
            <div className="bg-background p-6">
              <h3 className="text-lg font-bold mb-2">How does Fine Glaze handle large multi-building IT campus projects?</h3>
              <p className="text-muted-foreground">Fine Glaze runs campus projects with a dedicated site in-charge and supervisor, batches fabrication per project at its Pisoli unit and despatches directly to site. Our campus records include Embassy Techzone, Hinjewadi and the LTIMindtree Mensa Campus, Mahape.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-night-2 border-t border-line">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-paper mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/curtain-wall-systems" to="/curtain-wall-systems" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Curtain Wall Systems</p><p className="text-xs text-mute">Curtain wall service</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Contractor Pune</p><p className="text-xs text-mute">Facade services Pune</p></div></Link>
            <Link key="/facade-contractor-navi-mumbai" to="/facade-contractor-navi-mumbai" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Contractor Navi Mumbai</p><p className="text-xs text-mute">Navi Mumbai facade</p></div></Link>
            <Link key="/commercial-building-facade" to="/commercial-building-facade" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Commercial Facade Guide</p><p className="text-xs text-mute">Commercial facade overview</p></div></Link>
            <Link key="/curtain-wall-cost-guide" to="/curtain-wall-cost-guide" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Curtain Wall Cost Guide</p><p className="text-xs text-mute">Curtain wall cost guide</p></div></Link>
            <Link key="/contact" to="/contact" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Book a call</p><p className="text-xs text-mute">Talk to our team</p></div></Link>
          </div>
        </div>
      </section>

      <RelatedProjects heading="IT park & campus projects" keywords={["Embassy", "LTIMindtree"]} />
      <CTASection />
    </Layout>
  );
}
