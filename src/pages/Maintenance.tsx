import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Droplets, Hammer, FileCheck, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Maintenance = () => {
  // SEO Schema for Service + FAQ
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Facade Maintenance AMC",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fine Glaze",
      "areaServed": "Maharashtra"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Facade Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Silicon Sealant Replacement" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "High Rise Glass Cleaning" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Broken Glass Replacement" } }
      ]
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Facade Maintenance AMC Services Mumbai | Glass Repair</title>
        <meta name="description" content="Expert facade cleaning, silicon sealant replacement, and glass repair services. Protect your building from leakage and damage with our Annual Maintenance Contracts (AMC)." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[65vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Amc1.webp" 
            alt="Rope Access Facade Cleaning" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium mb-6 border border-amber-500/30">
              <CheckCircle2 size={14} /> IRATA Certified Team
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Restore Your Building's <span className="text-amber-500">Shine</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Don't let water leakage or dust degrade your property value. We specialize in high-rise leakage waterproofing and glass replacement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 h-auto py-4 px-8 text-lg">
                  Request Inspection
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button variant="outline" size="lg" className="border-slate-600 text-white hover:bg-white hover:text-slate-900 h-auto py-4 px-8 text-lg gap-2">
                  <Phone size={18} /> Emergency Repair
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICE CARDS --- */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8 -mt-32 relative z-20">
            {/* Service 1 */}
            <Card className="border-none shadow-xl">
              <CardContent className="p-8 pt-10">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <Droplets size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Waterproofing</h3>
                <p className="text-slate-600 mb-4">
                  We identify and seal gaps in your facade using industrial-grade Dow Corning weather silicon to stop monsoon leakage immediately.
                </p>
                <img src="/Sealent.webp" alt="Silicon Application" className="rounded-lg w-full h-40 object-cover mt-2" />
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="border-none shadow-xl">
              <CardContent className="p-8 pt-10">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6">
                  <FileCheck size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">AMC Contracts</h3>
                <p className="text-slate-600 mb-4">
                  Get peace of mind with our Annual Maintenance Contract. Includes 2 cleaning cycles/year and free structural audits.
                </p>
                <img src="/Amc.webp" alt="Building Maintenance" className="rounded-lg w-full h-40 object-cover mt-2" />
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="border-none shadow-xl">
              <CardContent className="p-8 pt-10">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                  <Hammer size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Glass Replacement</h3>
                <p className="text-slate-600 mb-4">
                  Shattered glass? Our team safely removes broken panels and installs new toughened glass at any height.
                </p>
                <img src="/Glass installation.webp" alt="Glass Replacement" className="rounded-lg w-full h-40 object-cover mt-2" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION (SEO POWERHOUSE) --- */}
      <section className="py-24 bg-white">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Common queries about facade maintenance and safety.</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b-slate-200">
              <AccordionTrigger className="text-lg font-medium hover:text-amber-600 text-left">
                Why is water leaking through my glass facade?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Leakage typically occurs due to the degradation of <strong>EPDM gaskets</strong> or the failure of old silicon sealant. Over 5-7 years, sunlight causes these materials to shrink, creating gaps. We fix this by removing the old sealant and applying a fresh weather-proof coat.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b-slate-200">
              <AccordionTrigger className="text-lg font-medium hover:text-amber-600 text-left">
                How frequently should high-rise glass be cleaned?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                In dusty cities like Mumbai and Pune, we recommend cleaning <strong>twice a year</strong>. Leaving dust for too long can cause permanent 'hard water staining' or oxidization on the glass surface which is expensive to remove.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b-slate-200">
              <AccordionTrigger className="text-lg font-medium hover:text-amber-600 text-left">
                Is your team insured for high-rise work?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Yes, safety is our priority. All our technicians are covered under Workman Compensation Policy (WC Policy). We strictly follow safety norms including full body harnesses, safety helmets, and barricading of the ground area.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b-slate-200">
              <AccordionTrigger className="text-lg font-medium hover:text-amber-600 text-left">
                Do you provide services for residential societies?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Absolutely. We work with many Cooperative Housing Societies (CHS) for balcony glass repairs, terrace waterproofing, and common area facade cleaning.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Is Your Building Monsoon Ready?</h2>
          <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
            Book a free site audit today. We will check your facade for loose silicon, cracks, and potential leak points.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-amber-700 hover:text-amber-800 font-bold px-10">
              Book Free Audit
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Maintenance;
