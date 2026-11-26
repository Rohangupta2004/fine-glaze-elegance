import SEO from "@/components/SEO";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function FacadeContractorThane() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade Contractor in Thane",
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
    "areaServed": [{ "@type": "City", "name": "Thane" }, { "@type": "State", "name": "Maharashtra" }],
    "description": "Facade contractor in Thane: curtain walls, ACP cladding, structural glazing and glass railings. Based in Pune and Mumbai, with in-house shop drawings."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Does Fine Glaze serve Thane for facade work?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze takes facade projects in Thane, including Ghodbunder Road, Majiwada and Wagle Estate. We provide curtain walls, ACP cladding, structural glazing, glass railings, aluminium windows and facade AMC." } },
      { "@type": "Question", "name": "What facade systems are popular in Thane?", "acceptedAnswer": { "@type": "Answer", "text": "Glass balcony railings and ACP cladding are common on residential towers, while offices along Ghodbunder Road often use curtain wall or structural glazing. This is general market guidance rather than a Fine Glaze project claim." } },
      { "@type": "Question", "name": "What is the cost of ACP cladding in Thane?", "acceptedAnswer": { "@type": "Answer", "text": "ACP cladding cost in Thane depends on panel brand, fire-retardant grade, finish, sub-frame complexity and access. Send drawings to Fine Glaze for a BOQ-based quotation." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Facade Contractor in Thane", "item": "https://fineglaze.com/facade-contractor-thane" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Facade Contractor in Thane: Glazing and ACP | Fine Glaze"
        description="Facade contractor in Thane: curtain walls, ACP cladding, structural glazing and glass railings. Based in Pune and Mumbai, with in-house shop drawings."
        canonical="https://fineglaze.com/facade-contractor-thane"
        keywords="facade contractor Thane, ACP cladding Thane, glass facade Thane, curtain wall Thane, glass railing Thane, building facade Ghodbunder Road"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="relative py-24 bg-night-2 text-paper">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Facade Contractor <span className="text-gradient-gold">in Thane</span>
            </h1>
            <p className="text-lg text-paper/80 mb-8">Fine Glaze takes facade projects in Thane: ACP cladding, curtain walls, glass railings, structural glazing and facade AMC. We are based in Pune and Mumbai and fabricate at our own unit in Pisoli, Pune.</p>
            <div className="flex gap-4">
              <Link to="/contact"><Button size="lg" className="bg-lamp hover:bg-lamp/90">Book a call</Button></Link>
              <Link to="/portfolio"><Button size="lg" variant="outline">View Projects</Button></Link>
            </div>
          </div>
          <img src="/projects/embassy-247-37-1.webp" alt="Embassy 247, Vikhroli, Mumbai — facade sealant and glass replacement by Fine Glaze for Embassy REIT" className="object-cover h-[420px] w-full" loading="eager" width="600" height="420" />
        </div>
      </section>

      <section className="fg-sec">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold">Serving Thane's Fast-Growing Real Estate Market</h2>
          <p className="text-muted-foreground">
            Thane is one of the Mumbai Metropolitan Region's active real estate markets, with residential townships, commercial corridors along Ghodbunder Road and industrial zones. Fine Glaze, based in Pune and Mumbai, takes facade projects in Thane across the full range of our services.
          </p>
          <p className="text-muted-foreground mt-4">
            For residential towers, we can quote glass railings, ACP cladding for elevations and aluminium window replacement. Send us drawings and quantities and we will prepare a BOQ-based quotation.
          </p>
          <p className="text-muted-foreground mt-4">
            For commercial buildings such as offices, malls and mixed-use developments, we provide curtain wall systems, structural glazing and ACP cladding, with shop drawings prepared in-house and routed for architect and client approval.
          </p>
          <p className="text-muted-foreground mt-4">
            Thane projects draw on our own fabrication unit in Pisoli, Pune, and our Mumbai team. Our documented work nearest to Thane includes Mumbai projects such as Embassy 247, Vikhroli and the LTIMindtree Mensa Campus in Mahape.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze also provides <strong>facade AMC (Annual Maintenance Contract)</strong> for existing buildings: inspection, cleaning, sealant repair, glass replacement and leakage investigation. As a general point, sealants age with exposure, so older buildings benefit from a periodic inspection.
          </p>
        </div>
      </section>

      <section className="fg-sec">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10">What We Offer in Thane</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {["ACP Cladding for Residential & Commercial", "Curtain Wall Systems", "Frameless Glass Railings", "Structural Glazing", "Aluminium Windows & Doors", "Facade AMC & Waterproofing"].map(f => (
              <div key={f} className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">{f}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="fg-sec">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background p-6"><h3 className="text-lg font-bold mb-2">Does Fine Glaze serve Thane for facade work?</h3><p className="text-muted-foreground">Yes. Fine Glaze takes facade projects in Thane, including Ghodbunder Road, Majiwada and Wagle Estate. We provide curtain walls, ACP cladding, structural glazing, glass railings, aluminium windows and facade AMC.</p></div>
            <div className="bg-background p-6"><h3 className="text-lg font-bold mb-2">What facade systems are popular in Thane?</h3><p className="text-muted-foreground">Glass balcony railings and ACP cladding are common on residential towers, while offices along Ghodbunder Road often use curtain wall or structural glazing. This is general market guidance rather than a Fine Glaze project claim.</p></div>
            <div className="bg-background p-6"><h3 className="text-lg font-bold mb-2">What is the cost of ACP cladding in Thane?</h3><p className="text-muted-foreground">ACP cladding cost in Thane depends on panel brand, fire-retardant grade, finish, sub-frame complexity and access. Send drawings to Fine Glaze for a BOQ-based quotation.</p></div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-night-2 border-t border-line">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-paper mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Facade Contractor Mumbai", href: "/facade-contractor-mumbai", desc: "Mumbai facade services" },
              { title: "Facade Contractor Navi Mumbai", href: "/facade-contractor-navi-mumbai", desc: "Navi Mumbai facade" },
              { title: "ACP Cladding", href: "/acp-aluminium-cladding", desc: "ACP composite panels" },
              { title: "Glass Railings", href: "/glass-railings", desc: "Frameless glass railings" },
              { title: "Curtain Wall Systems", href: "/curtain-wall-systems", desc: "Curtain wall glazing" },
              { title: "Facade Maintenance", href: "/maintenance-services", desc: "AMC & repair services" },
            ].map(r => (
              <Link key={r.href} to={r.href} className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night">
                <ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                <div><p className="font-semibold text-paper text-sm">{r.title}</p><p className="text-xs text-mute">{r.desc}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <RelatedProjects heading="Our nearest projects to Thane" intro="We don't have a documented project inside Thane city yet — these are our closest sites, in Vikhroli, Mahape and Panvel." locations={["Navi Mumbai", "Vikhroli", "Panvel"]} />
      <CTASection />
    </Layout>
  );
}
