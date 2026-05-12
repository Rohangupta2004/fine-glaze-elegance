import React from "react";
import { 
  Building2, 
  ShieldCheck, 
  ThermometerSnowflake, 
  Construction,
  Ruler,
  PhoneCall,
  Wrench,
  DollarSign,
  Clock,
  MapPin,
  Layers,
  Wind
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

// --- DATA & SCHEMA ---
const faqDatabase = [
  {
    id: "item-1",
    question: "How do Unitized Curtain Walls reduce high-rise construction timelines?",
    category: "Engineering",
    icon: <Construction className="w-5 h-5 text-blue-600" />,
    answer: "Unlike stick systems, unitized facades are 80% prefabricated in our factory. This allows us to install panels simultaneously with the building's structural growth. For a typical 20-story project in Mumbai or Pune, this reduces the 'building envelope' completion time by approximately 4-6 weeks.",
    stats: { metric: "40%", label: "Faster Installation" }
  },
  {
    id: "item-2",
    question: "What wind load standards does FineGlaze follow for skyscrapers?",
    category: "Safety",
    icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    answer: "We design according to IS 875 (Part 3). We typically engineer for basic wind speeds of 39m/s to 44m/s, but for high-rises (above 50m), we conduct comprehensive pressure coefficient analysis to ensure the structural silicone and brackets can withstand local gust factors.",
    stats: { metric: "1.5-4.5 kPa", label: "Pressure Tolerance" }
  },
  {
    id: "item-3",
    question: "Can DGU Glass (Double Glazing) achieve a 'Platinum' LEED rating?",
    category: "Sustainability",
    icon: <ThermometerSnowflake className="w-5 h-5 text-blue-600" />,
    answer: "Yes. By using High-Performance Low-E coatings in a 12mm air-gap DGU, we significantly lower the Solar Heat Gain Coefficient (SHGC). This minimizes heat ingress, drastically reducing AC power consumption and helping projects earn vital LEED/IGBC points.",
    stats: { metric: "35%", label: "Energy Saving" }
  },
  {
    id: "item-4",
    question: "How much does structural glazing cost per sq ft in India in 2026?",
    category: "Costing",
    icon: <Building2 className="w-5 h-5 text-blue-600" />,
    answer: "Standard stick-system glazing ranges from ₹350–₹550 per sq ft. Premium unitized systems for high-rises start at ₹650–₹1,200 per sq ft. Prices vary based on glass thickness, wind load requirements, and specialized coatings.",
    stats: { metric: "Custom", label: "Value Engineered" }
  },
  {
    id: "item-5",
    question: "What is the difference between structural glazing and curtain wall?",
    category: "Engineering",
    icon: <Layers className="w-5 h-5 text-blue-600" />,
    answer: "Structural glazing uses silicone adhesive to bond glass directly to the aluminium frame — creating a seamless, frameless glass surface from outside. A curtain wall is the broader system (including mullions, transoms, drainage, and thermal breaks) that the glass sits within. Structural glazing is a type of curtain wall finish, but not all curtain walls use structural glazing — some use pressure plate covers (mechanically fixed).",
    stats: { metric: "Frameless", label: "Glass Appearance" }
  },
  {
    id: "item-6",
    question: "How long does curtain wall installation take for a commercial building in India?",
    category: "Timeline",
    icon: <Clock className="w-5 h-5 text-blue-600" />,
    answer: "For a typical 3,000–8,000 sq ft commercial building facade in Mumbai or Pune: Engineering and approvals take 3–5 weeks. Factory fabrication takes 4–6 weeks (runs parallel). Site installation takes 6–10 weeks. Sealant and punch list adds 2–3 weeks. Total project duration: 12–18 weeks from contract signing to handover. High-rise projects above 15 floors add 4–8 weeks for additional safety setup and reduced daily access.",
    stats: { metric: "12–18 wks", label: "Typical Timeline" }
  },
  {
    id: "item-7",
    question: "How much does ACP cladding cost per sq ft in India?",
    category: "Costing",
    icon: <DollarSign className="w-5 h-5 text-blue-600" />,
    answer: "ACP (Aluminium Composite Panel) cladding in India costs ₹80–₹220 per sq ft installed, depending on grade and finish. PE (polyethylene) core ACP: ₹80–₹130/sq ft. FR (fire retardant) grade ACP: ₹120–₹180/sq ft. PVDF-coated premium ACP (Aludecor, Viva): ₹150–₹220/sq ft. Prices include fabrication, tray system, and installation. Structural framing is additional and varies by building complexity.",
    stats: { metric: "₹80–220", label: "Per Sq Ft" }
  },
  {
    id: "item-8",
    question: "How do you waterproof a glass facade against India's monsoon?",
    category: "Safety",
    icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    answer: "Monsoon waterproofing in Indian facade systems relies on a 3-layer defence: First, factory-fitted EPDM gaskets create the primary weather seal inside the aluminium frames. Second, a continuous bead of structural silicone (Dow Corning 795 or Sika-228) forms the secondary weatherproof bond between glass and frame. Third, all perimeter joints and slab interfaces are sealed with weather-grade polysulfide or silicone. Unitized systems are superior in monsoon conditions as all seals are factory-applied under controlled conditions.",
    stats: { metric: "3-Layer", label: "Weather Seal" }
  },
  {
    id: "item-9",
    question: "Do you work on projects outside Pune and Mumbai?",
    category: "Coverage",
    icon: <MapPin className="w-5 h-5 text-blue-600" />,
    answer: "Yes. While our base operations are in Pune and Mumbai, Fine Glaze has executed projects across Maharashtra and takes on select projects in Navi Mumbai, Thane, Nashik, Aurangabad, and Nagpur. For large-scale projects above ₹50 lakh in other cities, we mobilize our execution team with site supervision. Contact us at +91 8369233566 to discuss your location and project scope.",
    stats: { metric: "Pan-MH", label: "Service Area" }
  },
  {
    id: "item-10",
    question: "What maintenance does an aluminium glass facade need annually?",
    category: "Maintenance",
    icon: <Wrench className="w-5 h-5 text-blue-600" />,
    answer: "An aluminium glass facade requires: Bi-annual full glass cleaning (interior and exterior). Annual sealant joint inspection and re-caulking of any compromised joints. Quarterly drain hole check to prevent water accumulation inside mullions. Every 3–5 years: structural silicone audit by an engineer. Every 5–7 years: aluminium touch-up or re-coating on exposed surfaces. Fine Glaze offers Annual Maintenance Contracts (AMC) that cover all of the above, starting from ₹15,000/year for small commercial properties.",
    stats: { metric: "2×/year", label: "Glass Cleaning" }
  },
  {
    id: "item-11",
    question: "What glass thickness is required for high-rise facade in India?",
    category: "Engineering",
    icon: <Wind className="w-5 h-5 text-blue-600" />,
    answer: "Glass thickness for high-rise facades in India is determined by wind load analysis per IS 875 (Part 3) and glass stress calculations per IS 2553. As a general guide: Up to 5 floors: 6mm toughened glass is often sufficient. 5–15 floors: 8mm toughened or 6+6mm DGU is standard. 15–30 floors: 10mm toughened or 8+8mm DGU with Low-E coating is typical. 30+ floors: 12mm toughened, often in DGU configuration, with structural silicone glazing for wind resistance. All glass specifications are confirmed by structural calculation — Fine Glaze provides certified engineering documents with every project.",
    stats: { metric: "IS 875", label: "Design Standard" }
  }
];

export default function FAQ() {
  // Generate SEO Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqDatabase.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      <SEO
        title="Facade FAQ – Curtain Wall, Glazing, ACP Cladding & Costs 2026 | Fine Glaze"
        description="11 expert answers on curtain wall installation, structural glazing costs, ACP cladding prices, monsoon waterproofing, facade maintenance, and more. India's facade specialists answer your questions."
        canonical="https://fineglaze.com/faq"
        keywords="curtain wall FAQ, structural glazing cost India, facade engineering questions, DGU glass LEED, wind load IS 875, glazing cost per sq ft 2026, ACP cladding FAQ, glass railing cost India, facade maintenance AMC"
        schema={jsonLd}
      />

      <main className="relative max-w-4xl mx-auto py-24 px-6 md:px-8">
        
        {/* Header Section */}
        <header className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 text-blue-700 text-sm font-bold tracking-wide uppercase mb-6">
            <Building2 className="w-4 h-4" />
            FineGlaze Engineering Lab
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            The Science of <br className="hidden md:block" />
            <span className="text-gradient-subtle">Perfect Facades.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
            As India's facade specialists, we answer the complex engineering, costing, and sustainability questions that architects and developers ask most. Explore our technical knowledge base.
          </p>
        </header>

        {/* Shadcn Accordion List */}
        <div className="bg-white p-4 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqDatabase.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id} 
                className="border rounded-2xl px-6 bg-slate-50/50 data-[state=open]:bg-white data-[state=open]:border-blue-200 data-[state=open]:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 shrink-0">
                      {faq.icon}
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-1">
                        {faq.category}
                      </div>
                      <span className="text-lg md:text-xl font-bold text-slate-800 leading-snug">
                        {faq.question}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="pb-6 pt-2">
                  <div className="pl-[4.5rem] pr-4">
                    <div className="grid md:grid-cols-3 gap-8">
                      {/* Answer Text */}
                      <div className="md:col-span-2 space-y-4">
                        <p className="text-slate-600 leading-relaxed text-base">
                          {faq.answer}
                        </p>
                        <button className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors group">
                          <Ruler className="w-4 h-4 group-hover:scale-110 transition-transform" /> 
                          Request Technical Drawings
                        </button>
                      </div>
                      
                      {/* Highlight Metric */}
                      <div className="bg-blue-50/80 rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-blue-100">
                        <span className="text-3xl font-black text-blue-700 tracking-tight">
                          {faq.stats.metric}
                        </span>
                        <span className="text-xs font-bold text-blue-900/60 uppercase mt-2 tracking-wide">
                          {faq.stats.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTO Advisory CTA */}
        <section className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          {/* Abstract Grid Background inside CTA */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 
              backgroundSize: '24px 24px' 
            }} 
          />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
                Need a Structural Audit?
              </h2>
              <p className="text-slate-400 text-base max-w-md">
                Direct consultation with our engineering team for facade stability, leakage issues, or value engineering.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl h-14 px-8 text-base">
                <PhoneCall className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
