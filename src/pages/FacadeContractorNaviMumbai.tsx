import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
    "description": "Facade contractor in Navi Mumbai. Curtain walls, structural glazing & ACP cladding for Vashi, Mahape, Airoli, Kharghar & Belapur. LTIMindtree campus reference. Free site visit."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What projects has Fine Glaze done in Navi Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze's most prominent Navi Mumbai project is the LTIMindtree Mensa Campus in Mahape — a multi-building IT campus with curtain wall and ACP cladding. We have also completed projects in Airoli, Vashi, and Belapur." } },
      { "@type": "Question", "name": "Does Fine Glaze provide facade AMC in Navi Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer Annual Maintenance Contracts covering glass cleaning, sealant inspection, hardware lubrication, minor repairs, and emergency callouts for buildings of any size in Navi Mumbai." } },
      { "@type": "Question", "name": "What facade systems are popular in Navi Mumbai IT parks?", "acceptedAnswer": { "@type": "Answer", "text": "Unitized curtain wall systems are most popular for large IT campuses due to fast installation and factory quality. ACP cladding is used for service areas and parking structures. Structural glazing is preferred for entrance lobbies and atrium walls." } },
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
        title="Facade Contractor in Navi Mumbai | Curtain Wall & Glass Facade – Fine Glaze"
        description="Facade contractor in Navi Mumbai. Curtain walls, structural glazing & ACP cladding for Vashi, Mahape, Airoli, Kharghar & Belapur. LTIMindtree campus reference. Free site visit."
        canonical="https://fineglaze.com/facade-contractor-navi-mumbai"
        keywords="facade contractor Navi Mumbai, curtain wall Navi Mumbai, glass facade Mahape, ACP cladding Airoli, structural glazing Vashi, facade company Belapur, IT park facade Navi Mumbai"
        ogImage="https://images.unsplash.com/photo-1486325212027-8081e485255e"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Facade Contractor <span className="text-gradient-gold">in Navi Mumbai</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Fine Glaze has established a strong foothold in Navi Mumbai as a go-to facade contractor for large-scale IT campuses, commercial complexes, and residential towers. Our flagship Navi Mumbai project — the LTIMindtree Mensa Campus in Mahape — showcases our capability to deliver complex, multi-block facade systems on India's fastest-growing tech corridor.</p>
            <div className="flex gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">Get Free Quote</Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline">View Projects</Button>
              </Link>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e"
            alt="Navi Mumbai IT campus facade curtain wall - Fine Glaze LTIMindtree"
            className="rounded-xl shadow-2xl object-cover h-[420px] w-full"
            loading="eager"
            width="600"
            height="420"
          />
        </div>
      </section>

      {/* RICH CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          
          <h2 className="text-3xl font-bold">Navi Mumbai's IT Campus Facade Specialist</h2>
          <p className="text-muted-foreground">
            Navi Mumbai has emerged as one of India's premier IT and industrial destinations, with major multinational companies establishing their campuses in Mahape MIDC, Airoli, and Belapur CBD. Fine Glaze has been part of this growth story, delivering facade systems that meet LEED and GRIHA green building certification standards increasingly demanded by MNC occupiers.
          </p>
          <p className="text-muted-foreground mt-4">
            Our Navi Mumbai services cover the full facade spectrum: <strong>unitized curtain walls</strong> for IT park towers, <strong>structural glazing</strong> for showroom and lobby entries, <strong>ACP cladding</strong> for industrial and commercial building elevations, <strong>glass railings</strong> for corporate campus common areas, and <strong>facade AMC</strong> for ongoing building management.
          </p>
          <p className="text-muted-foreground mt-4">
            We serve all major Navi Mumbai nodes: <strong>Mahape MIDC</strong> (IT/BPO campuses), <strong>Airoli</strong> (pharma and finance), <strong>Vashi</strong> (commercial and retail), <strong>Belapur CBD</strong> (government and corporate), <strong>Kharghar</strong> (educational and residential), and <strong>Panvel</strong> (new development zone adjacent to NAINA).
          </p>
          <p className="text-muted-foreground mt-4">
            The LTIMindtree Mensa Campus project in Mahape is Fine Glaze's flagship Navi Mumbai reference — a multi-building IT campus that required coordinated facade execution across several blocks with different facade systems, tight schedule constraints, and LEED certification requirements. This project exemplifies our capability to manage large-scale, multi-system facade contracts in Navi Mumbai.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze actively supports Navi Mumbai's growing residential development corridor in Kharghar and Panvel, offering competitive glass railing and ACP cladding packages for residential developers in these emerging zones. Contact us for project-specific pricing and timeline estimates.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="LTIMindtree Campus Reference" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">LTIMindtree Campus Reference</span></div>
              <div key="LEED-Compatible Systems" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">LEED-Compatible Systems</span></div>
              <div key="Mahape MIDC Expertise" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Mahape MIDC Expertise</span></div>
              <div key="Large IT Campus Projects" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Large IT Campus Projects</span></div>
              <div key="Multi-Block Coordination" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Multi-Block Coordination</span></div>
              <div key="GRIHA Compliant Glass Specs" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">GRIHA Compliant Glass Specs</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What projects has Fine Glaze done in Navi Mumbai?</h3>
              <p className="text-muted-foreground">Fine Glaze's most prominent Navi Mumbai project is the LTIMindtree Mensa Campus in Mahape — a multi-building IT campus with curtain wall and ACP cladding. We have also completed projects in Airoli, Vashi, and Belapur.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Does Fine Glaze provide facade AMC in Navi Mumbai?</h3>
              <p className="text-muted-foreground">Yes. We offer Annual Maintenance Contracts covering glass cleaning, sealant inspection, hardware lubrication, minor repairs, and emergency callouts for buildings of any size in Navi Mumbai.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What facade systems are popular in Navi Mumbai IT parks?</h3>
              <p className="text-muted-foreground">Unitized curtain wall systems are most popular for large IT campuses due to fast installation and factory quality. ACP cladding is used for service areas and parking structures. Structural glazing is preferred for entrance lobbies and atrium walls.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/facade-contractor-mumbai" to="/facade-contractor-mumbai" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Mumbai</p><p className="text-xs text-slate-500">Mumbai facade services</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Pune</p><p className="text-xs text-slate-500">Pune facade services</p></div></Link>
            <Link key="/curtain-wall-systems" to="/curtain-wall-systems" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Systems</p><p className="text-xs text-slate-500">Unitized curtain walls</p></div></Link>
            <Link key="/acp-aluminium-cladding" to="/acp-aluminium-cladding" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">ACP Cladding</p><p className="text-xs text-slate-500">ACP composite panels</p></div></Link>
            <Link key="/maintenance-services" to="/maintenance-services" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Maintenance</p><p className="text-xs text-slate-500">AMC & repair services</p></div></Link>
            <Link key="/structural-glazing" to="/structural-glazing" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Structural Glazing</p><p className="text-xs text-slate-500">Spider & SSG glazing</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
