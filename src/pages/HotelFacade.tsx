import SEO from "@/components/SEO";
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
    "description": "Specialist hotel facade contractor in India. Structural glazing, curtain wall & ACP cladding for 3-star to 5-star hotels. Leela Hotel reference project. Pune & Mumbai."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What facade system is used in 5-star hotels in India?", "acceptedAnswer": { "@type": "Answer", "text": "5-star hotels in India predominantly use unitized curtain wall systems with DGU and specialty glass on guest room floors, structural glazing for entrance lobbies and atrium walls, and custom aluminium louvres for sun shading on south and west facades. Fine Glaze has delivered this combination for hospitality clients including the Leela Hotel." } },
      { "@type": "Question", "name": "How does Fine Glaze ensure facade quality standards for hotel projects?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze's hotel project quality protocol includes: factory mock-up installation for owner approval before production; 100% visual inspection of all panels; independent third-party water penetration testing; colour-match certification for all aluminium extrusions; and a dedicated quality inspector assigned full-time to the project." } },
      { "@type": "Question", "name": "What glass is used for hotel guest room facades?", "acceptedAnswer": { "@type": "Answer", "text": "Hotel guest room facades typically use DGU with outer tinted or reflective glass for solar control and privacy, inner clear glass for outward views, Low-E coating for thermal comfort, and acoustic laminated inner pane where road or aircraft noise is a concern. Fine Glaze specifies glass packages optimised for each hotel's orientation and location." } },
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
        title="Hotel & Hospitality Building Facade Contractor India – Fine Glaze"
        description="Specialist hotel facade contractor in India. Structural glazing, curtain wall & ACP cladding for 3-star to 5-star hotels. Leela Hotel reference project. Pune & Mumbai."
        canonical="https://fineglaze.com/hotel-facade"
        keywords="hotel facade contractor India, 5-star hotel facade India, hotel curtain wall India, hospitality building facade, Leela Hotel facade, hotel glass facade Mumbai Pune"
        ogImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Hotel & Hospitality <span className="text-gradient-gold">Facade Specialist India</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Hotel and hospitality facades are among the most demanding in the construction industry — combining premium aesthetics, iconic architectural identity, high-performance weather protection, and luxurious material finishes. Fine Glaze has delivered facade systems for hospitality projects including the Leela Hotel, establishing our credentials in India's premier hotel construction sector.</p>
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
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
            alt="Hotel hospitality building facade curtain wall India Fine Glaze Leela"
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
          
          <h2 className="text-3xl font-bold">What Sets Hotel Facade Projects Apart</h2>
          <p className="text-muted-foreground">
            Hotel and hospitality buildings set the highest standard for facade quality in the construction industry. Every facade element — from the entrance canopy to the room-floor curtain wall — must project luxury, permanence, and architectural distinction. Fine Glaze brings a track record at this level, having completed the Leela Hotel facade project as a reference installation of the highest quality.
          </p>
          <p className="text-muted-foreground mt-4">
            Hotel facades demand precision in every detail: glass with consistent colour, reflectivity, and flatness across hundreds of panels; aluminium extrusions with tight tolerance on colour matching and surface finish; silicone sealant lines that are perfectly straight with consistent tooling profile; and zero visible defects that would be immediately noticed by design-conscious hotel guests and owners. Fine Glaze's quality management system for hotel projects includes 100% visual inspection of every panel before despatch and mandatory 5-year workmanship warranty.
          </p>
          <p className="text-muted-foreground mt-4">
            The most common facade systems for Indian hotels by category: <strong>5-star hotels:</strong> Unitized curtain wall with DGU and specialty glass (frosted, patterned, or ceramic frit); structural glazing for entrance canopies; custom aluminium louvers and screens. <strong>4-star hotels:</strong> Stick system curtain wall with DGU; ACP cladding for service zones; glass railings for balconies. <strong>3-star and business hotels:</strong> ACP cladding with aluminium window systems; feature glass entrance canopy.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze works closely with hotel architects and international hotel brands' design standards teams to ensure facade materials, glass specifications, and aluminium finishes comply with brand design guidelines. Our experience with global hotel brands' specifications makes us a reliable partner for developers working within brand standards.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Leela Hotel Reference Project" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Leela Hotel Reference Project</span></div>
              <div key="5-Star Quality Standards" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">5-Star Quality Standards</span></div>
              <div key="Unitized Curtain Wall Systems" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Unitized Curtain Wall Systems</span></div>
              <div key="Specialty Glass Options" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Specialty Glass Options</span></div>
              <div key="Hotel Brand Spec Compliance" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Hotel Brand Spec Compliance</span></div>
              <div key="5-Year Workmanship Warranty" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">5-Year Workmanship Warranty</span></div>
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
              <p className="text-muted-foreground">5-star hotels in India predominantly use unitized curtain wall systems with DGU and specialty glass on guest room floors, structural glazing for entrance lobbies and atrium walls, and custom aluminium louvres for sun shading on south and west facades. Fine Glaze has delivered this combination for hospitality clients including the Leela Hotel.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How does Fine Glaze ensure facade quality standards for hotel projects?</h3>
              <p className="text-muted-foreground">Fine Glaze's hotel project quality protocol includes: factory mock-up installation for owner approval before production; 100% visual inspection of all panels; independent third-party water penetration testing; colour-match certification for all aluminium extrusions; and a dedicated quality inspector assigned full-time to the project.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What glass is used for hotel guest room facades?</h3>
              <p className="text-muted-foreground">Hotel guest room facades typically use DGU with outer tinted or reflective glass for solar control and privacy, inner clear glass for outward views, Low-E coating for thermal comfort, and acoustic laminated inner pane where road or aircraft noise is a concern. Fine Glaze specifies glass packages optimised for each hotel's orientation and location.</p>
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

      <CTASection />
    </Layout>
  );
}
