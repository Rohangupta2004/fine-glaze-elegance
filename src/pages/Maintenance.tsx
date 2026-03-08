import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Droplets, Hammer, FileCheck, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Maintenance = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Facade Maintenance AMC",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fine Glaze",
      "areaServed": "Maharashtra"
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Facade Maintenance AMC Services Mumbai | Glass Repair</title>
        <meta name="description" content="Expert facade cleaning, silicon sealant replacement, and glass repair services. Protect your building from leakage and damage with our Annual Maintenance Contracts." />
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
            {/* ✅ UPDATED: Removed IRATA, changed to generic Safety text */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium mb-6 border border-emerald-500/30">
              <ShieldCheck size={14} /> 100% Safety Compliance
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Restore Your Building's <span className="text-amber-500">Shine</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Don't let water leakage or dust degrade your property value. We specialize in high-rise leakage waterproofing and glass replacement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 h-auto py-4 px-8 text-lg w-full sm:w-auto">
                  Request Inspection
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button variant="outline" size="lg" className="border-slate-600 text-white hover:bg-white hover:text-slate-900 h-auto py-4 px-8 text-lg gap-2 w-full sm:w-auto">
                  <Phone size={18} /> Emergency Repair
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICE CARDS (Improved Layout) --- */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4">
          {/* Negative margin to pull cards up into the Hero image for a modern look */}
          <div className="grid md:grid-cols-3 gap-8 -mt-32 relative z-20">
            
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-xl border-b-4 border-blue-500 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Droplets size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Waterproofing</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                We identify and seal gaps in your facade using industrial-grade Dow Corning weather silicon to stop monsoon leakage immediately.
              </p>
              <img src="/Sealent.webp" alt="Silicon Application" className="rounded-lg w-full h-40 object-cover" />
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-xl border-b-4 border-amber-500 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-6">
                <FileCheck size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">AMC Contracts</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                Get peace of mind with our Annual Maintenance Contract. Includes 2 cleaning cycles per year and free structural audits.
              </p>
              <img src="/Amc.webp" alt="Building Maintenance" className="rounded-lg w-full h-40 object-cover" />
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-xl border-b-4 border-emerald-500 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                <Hammer size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Glass Replacement</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                Shattered glass? Our team safely removes broken panels and installs new toughened glass at any height.
              </p>
              <img src="/Glass installation.webp" alt="Glass Replacement" className="rounded-lg w-full h-40 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION (Replaced Accordion with Stable Grid) --- */}
      <section className="py-24 bg-white">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Common queries about facade maintenance and safety.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* FAQ Item 1 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Why is water leaking through my facade?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Leakage typically occurs due to degraded EPDM gaskets or old silicon sealant shrinking in the sun. We fix this by removing the old sealant and applying a fresh weather-proof coat.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3">How often should we clean the glass?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                In cities like Mumbai and Pune, we recommend cleaning <strong>twice a year</strong>. Leaving dust too long can cause permanent 'hard water staining' which is very expensive to fix.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Is the work safe?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes. Our team follows strict safety norms including full body harnesses, safety helmets, and ground barricading. All technicians are insured.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Do you work with Residential Societies?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Absolutely. We specialize in working with Cooperative Housing Societies (CHS) for balcony repairs, terrace waterproofing, and common area cleaning.
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className="py-24 bg-slate-50">
        <div className="container px-4 max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Why Fine Glaze for Facade Maintenance Services in Mumbai</h2>
          <p className="text-slate-600 leading-relaxed">
            If you need facade maintenance services in Mumbai, you need more than periodic cleaning. Fine Glaze is a maintenance contractor company focused on preserving facade safety, waterproofing integrity, and visual quality across commercial towers, office parks, residential societies, and high-rise mixed-use buildings. Our team supports preventive and corrective maintenance programs so asset owners can reduce emergency repair costs and protect building performance year-round.
          </p>
          <h3 className="text-2xl font-semibold text-slate-900">Process</h3>
          <p className="text-slate-600 leading-relaxed">
            We begin with inspection and risk mapping, then define scope for cleaning, sealant renewal, glass replacement, and hardware checks. Work is executed with safety protocols, access planning, and documented handover reports. This process helps facility teams prioritize high-risk zones first while keeping operations uninterrupted.
          </p>
          <h3 className="text-2xl font-semibold text-slate-900">Materials and specifications</h3>
          <p className="text-slate-600 leading-relaxed">
            We use facade-compatible sealants, tested cleaning chemistry, and specification-matched replacement materials. For buildings with complex envelopes, maintenance planning is coordinated with <Link to="/curtain-wall-systems" className="text-amber-600 underline">curtain wall systems</Link>, <Link to="/structural-glazing" className="text-amber-600 underline">structural glazing</Link>, and <Link to="/acp-aluminium-cladding" className="text-amber-600 underline">ACP cladding</Link> details to avoid patchwork fixes.
          </p>
          <h3 className="text-2xl font-semibold text-slate-900">Industries and FAQ</h3>
          <p className="text-slate-600 leading-relaxed">
            Fine Glaze serves corporate campuses, hospitals, retail centers, residential communities, and hospitality buildings. FAQ: how often should facade maintenance be scheduled in Mumbai? Most properties benefit from planned checks before and after monsoon, with periodic cleaning and sealant audit cycles. FAQ: can one maintenance company handle both preventive AMC and urgent breakdown calls? Yes, our team supports both service models.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Need a facade maintenance contractor company in Mumbai for a commercial or residential asset? <Link to="/contact" className="text-amber-600 underline font-semibold">Contact Fine Glaze</Link> for AMC planning and a site-specific maintenance proposal.
          </p>
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
            <Button size="lg" variant="secondary" className="text-amber-700 hover:text-amber-800 font-bold px-10 gap-2">
              Book Free Audit <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Maintenance;
