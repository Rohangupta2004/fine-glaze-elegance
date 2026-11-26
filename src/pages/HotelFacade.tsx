import SEO from "@/components/SEO";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function HotelFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hotel & Hospitality Building Facade Contractor India – Fine Glaze",
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
    "description": "Hotel facade contractor in Pune and Mumbai: glazing, curtain wall, canopies and ACP cladding, with in-house shop drawings. Leela Hotel, Andheri is a record."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What facade system is used in 5-star hotels in India?", "acceptedAnswer": { "@type": "Answer", "text": "Hotels of all categories commonly use unitized or stick curtain wall with double glazed or specialty glass on guest floors, structural glazing for lobbies and canopies, and aluminium louvers for shading. The system follows the architect's brief." } },
      { "@type": "Question", "name": "How does Fine Glaze ensure facade quality standards for hotel projects?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze checks material on receipt, inspects dimensions and finish at the workshop, and verifies line, level, plumb and fixing floor by floor. Installed glazing gets a site water penetration test, and the snag register is closed before handover." } },
      { "@type": "Question", "name": "What glass is used for hotel guest room facades?", "acceptedAnswer": { "@type": "Answer", "text": "Guest room facades typically use double glazed units with tinted or reflective outer glass for solar control, a low-E coating for comfort, and laminated glass where traffic or aircraft noise is a concern. The exact build-up follows the hotel's brief." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Hotel & Hospitality Building Facade Contractor India – Fine Glaze", "item": "https://fineglaze.com/hotel-facade" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Hotel Facade Contractor in Pune & Mumbai | Fine Glaze"
        description="Hotel facade contractor in Pune and Mumbai: glazing, curtain wall, canopies and ACP cladding, with in-house shop drawings. Leela Hotel, Andheri is a record."
        canonical="https://fineglaze.com/hotel-facade"
        keywords="hotel facade contractor, hotel glass facade, hotel ACP cladding, hotel curtain wall, hotel entrance canopy"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Hotel & Hospitality <span className="text-gradient-gold">Facade Specialist India</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Fine Glaze takes hotel facade work in Pune and Mumbai: glazing, curtain wall, canopies, louvers and ACP cladding. Our hotel record is the Leela Hotel, Andheri East, Mumbai.</p>
            <div className="flex gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">Book a call</Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline">View Projects</Button>
              </Link>
            </div>
          </div>
          <img
            src="/projects/leela-hotel-50-1.webp"
            alt="Fixed glass windows in the laundry area of Leela Hotel, Andheri, Mumbai — completed by Fine Glaze in 2023"
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
          
          <h2 className="text-3xl font-bold">What Hotel Facade Projects Need</h2>
          <p className="text-muted-foreground">
            Hotel facades carry high expectations for finish and consistency. Fine Glaze documents hotel work at the Leela Hotel, Andheri East, Mumbai, where we completed fixed glass windows and openable window units in the laundry area.
          </p>
          <p className="text-muted-foreground mt-4">
            Hotel facades depend on consistent glass colour and flatness across many panels, tight tolerances on aluminium finish and straight, evenly tooled sealant lines. Fine Glaze checks sections, glass and panels on receipt, inspects dimensions and finish at the workshop, and verifies line, level and plumb floor by floor during installation. Defect liability support follows the contract terms.
          </p>
          <p className="text-muted-foreground mt-4">
            As general guidance, hotel facades often combine unitized or stick curtain wall with double glazed or specialty glass on guest floors, structural glazing at entrance canopies and lobbies, and custom aluminium louvers or screens. Lower-rise or business hotels often use ACP cladding with aluminium windows and a glass entrance canopy.
          </p>
          <p className="text-muted-foreground mt-4">
            We work with hotel architects and consultants, and follow the project specification and any brand design guidelines supplied to us.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Leela Hotel Project Record" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Leela Hotel Project Record</span></div>
              <div key="Stage Quality Inspections" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Stage Quality Inspections</span></div>
              <div key="Unitized Curtain Wall Systems" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Unitized Curtain Wall Systems</span></div>
              <div key="Specialty Glass Options" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Specialty Glass Options</span></div>
              <div key="Built to the Project Specification" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Built to the Project Specification</span></div>
              <div key="Defect Liability per Contract" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Defect Liability per Contract</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What facade system is used in 5-star hotels in India?</h3>
              <p className="text-muted-foreground">Hotels of all categories commonly use unitized or stick curtain wall with double glazed or specialty glass on guest floors, structural glazing for lobbies and canopies, and aluminium louvers for shading. The system follows the architect's brief.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How does Fine Glaze ensure facade quality standards for hotel projects?</h3>
              <p className="text-muted-foreground">Fine Glaze checks material on receipt, inspects dimensions and finish at the workshop, and verifies line, level, plumb and fixing floor by floor. Installed glazing gets a site water penetration test, and the snag register is closed before handover.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What glass is used for hotel guest room facades?</h3>
              <p className="text-muted-foreground">Guest room facades typically use double glazed units with tinted or reflective outer glass for solar control, a low-E coating for comfort, and laminated glass where traffic or aircraft noise is a concern. The exact build-up follows the hotel's brief.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/structural-glazing" to="/structural-glazing" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Structural Glazing</p><p className="text-xs text-slate-500">Structural glazing systems</p></div></Link>
            <Link key="/curtain-wall-systems" to="/curtain-wall-systems" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Systems</p><p className="text-xs text-slate-500">Curtain wall service</p></div></Link>
            <Link key="/facade-contractor-mumbai" to="/facade-contractor-mumbai" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Mumbai</p><p className="text-xs text-slate-500">Mumbai facade services</p></div></Link>
            <Link key="/commercial-building-facade" to="/commercial-building-facade" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Commercial Facade Guide</p><p className="text-xs text-slate-500">Commercial facade overview</p></div></Link>
            <Link key="/maintenance-services" to="/maintenance-services" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Maintenance</p><p className="text-xs text-slate-500">AMC & maintenance</p></div></Link>
            <Link key="/portfolio" to="/portfolio" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Portfolio</p><p className="text-xs text-slate-500">View completed projects</p></div></Link>
          </div>
        </div>
      </section>

      <RelatedProjects heading="Hospitality project" keywords={["hotel"]} />
      <CTASection />
    </Layout>
  );
}
