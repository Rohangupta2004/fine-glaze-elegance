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
import { Layout } from "@/components/layout/Layout";
import { useBookCall } from "@/components/booking/BookCallProvider";

// --- DATA & SCHEMA ---
const faqDatabase = [
  {
    id: "item-1",
    question: "How do Unitized Curtain Walls reduce high-rise construction timelines?",
    category: "Engineering",
    icon: <Construction className="w-5 h-5 text-amber-700" />,
    answer: "Unlike stick systems, unitized facades are 80% prefabricated in our factory. This allows us to install panels simultaneously with the building's structural growth. For a typical 20-story project in India, this reduces the 'building envelope' completion time by approximately 4-6 weeks.",
    stats: { metric: "40%", label: "Faster Installation" }
  },
  {
    id: "item-2",
    question: "What wind load standards does FineGlaze follow for skyscrapers?",
    category: "Safety",
    icon: <ShieldCheck className="w-5 h-5 text-amber-700" />,
    answer: "We design according to IS 875 (Part 3). We typically engineer for basic wind speeds of 39m/s to 44m/s, but for high-rises (above 50m), we conduct comprehensive pressure coefficient analysis to ensure the structural silicone and brackets can withstand local gust factors.",
    stats: { metric: "1.5-4.5 kPa", label: "Pressure Tolerance" }
  },
  {
    id: "item-3",
    question: "Can DGU Glass (Double Glazing) achieve a 'Platinum' LEED rating?",
    category: "Sustainability",
    icon: <ThermometerSnowflake className="w-5 h-5 text-amber-700" />,
    answer: "Yes. By using High-Performance Low-E coatings in a 12mm air-gap DGU, we significantly lower the Solar Heat Gain Coefficient (SHGC). This minimizes heat ingress, drastically reducing AC power consumption and helping projects earn vital LEED/IGBC points.",
    stats: { metric: "35%", label: "Energy Saving" }
  },
  {
    id: "item-4",
    question: "How much does structural glazing cost per sq ft in India in 2026?",
    category: "Costing",
    icon: <Building2 className="w-5 h-5 text-amber-700" />,
    answer: "Standard stick-system glazing ranges from ₹350–₹550 per sq ft. Premium unitized systems for high-rises start at ₹650–₹1,200 per sq ft. Prices vary based on glass thickness, wind load requirements, and specialized coatings.",
    stats: { metric: "Custom", label: "Value Engineered" }
  },
  {
    id: "item-5",
    question: "What is the difference between structural glazing and curtain wall?",
    category: "Engineering",
    icon: <Layers className="w-5 h-5 text-amber-700" />,
    answer: "Structural glazing uses silicone adhesive to bond glass directly to the aluminium frame — creating a seamless, frameless glass surface from outside. A curtain wall is the broader system (including mullions, transoms, drainage, and thermal breaks) that the glass sits within. Structural glazing is a type of curtain wall finish, but not all curtain walls use structural glazing — some use pressure plate covers (mechanically fixed).",
    stats: { metric: "Frameless", label: "Glass Appearance" }
  },
  {
    id: "item-6",
    question: "How long does curtain wall installation take for a commercial building in India?",
    category: "Timeline",
    icon: <Clock className="w-5 h-5 text-amber-700" />,
    answer: "For a typical 3,000–8,000 sq ft commercial building facade in India: Engineering and approvals take 3–5 weeks. Factory fabrication takes 4–6 weeks (runs parallel). Site installation takes 6–10 weeks. Sealant and punch list adds 2–3 weeks. Total project duration: 12–18 weeks from contract signing to handover. High-rise projects above 15 floors add 4–8 weeks for additional safety setup and reduced daily access.",
    stats: { metric: "12–18 wks", label: "Typical Timeline" }
  },
  {
    id: "item-7",
    question: "How much does ACP cladding cost per sq ft in India?",
    category: "Costing",
    icon: <DollarSign className="w-5 h-5 text-amber-700" />,
    answer: "ACP (Aluminium Composite Panel) cladding in India costs ₹80–₹220 per sq ft installed, depending on grade and finish. PE (polyethylene) core ACP: ₹80–₹130/sq ft. FR (fire retardant) grade ACP: ₹120–₹180/sq ft. PVDF-coated premium ACP (Aludecor, Viva): ₹150–₹220/sq ft. Prices include fabrication, tray system, and installation. Structural framing is additional and varies by building complexity.",
    stats: { metric: "₹80–220", label: "Per Sq Ft" }
  },
  {
    id: "item-8",
    question: "How do you waterproof a glass facade against India's monsoon?",
    category: "Safety",
    icon: <ShieldCheck className="w-5 h-5 text-amber-700" />,
    answer: "Monsoon waterproofing in Indian facade systems relies on a 3-layer defence: First, factory-fitted EPDM gaskets create the primary weather seal inside the aluminium frames. Second, a continuous bead of structural silicone (Dow Corning 795 or Sika-228) forms the secondary weatherproof bond between glass and frame. Third, all perimeter joints and slab interfaces are sealed with weather-grade polysulfide or silicone. Unitized systems are superior in monsoon conditions as all seals are factory-applied under controlled conditions.",
    stats: { metric: "3-Layer", label: "Weather Seal" }
  },
  {
    id: "item-9",
    question: "Which cities do you work in? Do you take projects outside Pune and Mumbai?",
    category: "Coverage",
    icon: <MapPin className="w-5 h-5 text-amber-700" />,
    answer: "We operate from Pune and Mumbai — our office and fabrication unit are in Pune, and most of our sites are in Pune, PCMC, Mumbai, Navi Mumbai, Thane and Panvel. Projects elsewhere in India are considered case by case after a site visit, depending on scope and how we can supervise the work properly. Call +91 83692 33566 to discuss your location.",
    stats: { metric: "Pune · Mumbai", label: "Operating Cities" }
  },
  {
    id: "item-10",
    question: "What maintenance does an aluminium glass facade need annually?",
    category: "Maintenance",
    icon: <Wrench className="w-5 h-5 text-amber-700" />,
    answer: "An aluminium glass facade requires: Bi-annual full glass cleaning (interior and exterior). Annual sealant joint inspection and re-caulking of any compromised joints. Quarterly drain hole check to prevent water accumulation inside mullions. Every 3–5 years: structural silicone audit by an engineer. Every 5–7 years: aluminium touch-up or re-coating on exposed surfaces. Fine Glaze offers Annual Maintenance Contracts (AMC) that cover all of the above, starting from ₹15,000/year for small commercial properties.",
    stats: { metric: "2×/year", label: "Glass Cleaning" }
  },
  {
    id: "item-11",
    question: "What glass thickness is required for high-rise facade in India?",
    category: "Engineering",
    icon: <Wind className="w-5 h-5 text-amber-700" />,
    answer: "Glass thickness for high-rise facades in India is determined by wind load analysis per IS 875 (Part 3) and glass stress calculations per IS 2553. As a general guide: Up to 5 floors: 6mm toughened glass is often sufficient. 5–15 floors: 8mm toughened or 6+6mm DGU is standard. 15–30 floors: 10mm toughened or 8+8mm DGU with Low-E coating is typical. 30+ floors: 12mm toughened, often in DGU configuration, with structural silicone glazing for wind resistance. All glass specifications are confirmed by structural calculation — Fine Glaze provides certified engineering documents with every project.",
    stats: { metric: "IS 875", label: "Design Standard" }
  }
];

export default function FAQ() {
  const { open: openBooking } = useBookCall();
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
    <Layout>
    <div className="bg-slate-50 text-slate-900 font-sans selection:bg-amber-200">
      <SEO
        title="Facade Contractor FAQ India: Glazing and ACP | Fine Glaze"
        description="Answers to common questions on curtain wall, structural glazing, ACP cladding, facade leakage and maintenance AMC, written as general guidance by Fine Glaze."
        canonical="https://fineglaze.com/faq"
        keywords="facade contractor FAQ India, curtain wall FAQ, structural glazing FAQ, ACP cladding FAQ, facade cost, facade maintenance questions"
        schema={jsonLd}
      />

      <main className="relative max-w-4xl mx-auto py-12 md:py-16 px-6 md:px-8">
        
        {/* Header Section */}
        <header className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-amber-100 text-amber-800 text-sm font-semibold mb-6">
            <Building2 className="w-4 h-4" />
            Fine Glaze engineering
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Facade questions, answered.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
            The engineering, cost and maintenance questions architects and developers ask us most.
          </p>
        </header>

        {/* Shadcn Accordion List */}
        <div className="bg-white p-4 md:p-8 rounded-sm shadow-xl shadow-slate-200/50 border border-slate-100">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqDatabase.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id} 
                className="border rounded-sm px-6 bg-slate-50/50 data-[state=open]:bg-white data-[state=open]:border-amber-300 data-[state=open]:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="p-3 bg-white rounded-sm shadow-sm border border-slate-100 shrink-0">
                      {faq.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-amber-800 mb-1">
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
                        <button type="button" onClick={() => openBooking({ source: "faq_drawings", work: "Technical drawings" })} className="flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-900 transition-colors group">
                          <Ruler className="w-4 h-4 group-hover:scale-110 transition-transform" /> 
                          Book a call about drawings
                        </button>
                      </div>
                      
                      {/* Highlight Metric */}
                      <div className="bg-amber-50 rounded-sm p-6 flex flex-col justify-center items-center text-center border border-amber-200">
                        <span className="text-3xl font-black text-amber-800 tracking-tight">
                          {faq.stats.metric}
                        </span>
                        <span className="text-xs font-semibold text-stone-600 mt-2">
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
        <section className="mt-20 bg-slate-900 rounded-sm p-8 md:p-12 relative overflow-hidden shadow-2xl">
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
              <Button size="lg" onClick={() => openBooking({ source: "faq" })} className="bg-lamp hover:bg-amber-300 text-lamp-ink font-bold rounded-sm h-14 px-8 text-base">
                <PhoneCall className="w-5 h-5 mr-2" />
                Book a call
              </Button>
            </div>
          </div>
        </section>

      </main>
    </div>
    </Layout>
  );
}
