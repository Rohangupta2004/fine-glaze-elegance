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
    question: "How do unitized curtain walls reduce high-rise construction timelines?",
    category: "Engineering",
    icon: <Construction className="w-5 h-5 text-amber-700" />,
    answer: "Unitized curtain walls shorten high-rise timelines because panels are built and glazed in a factory while the structure rises, so less work is done at height on site. The saving depends on the project's design, programme and site access.",
    stats: { metric: "Factory-built", label: "Panels" }
  },
  {
    id: "item-2",
    question: "What wind load standards does Fine Glaze follow for tall buildings?",
    category: "Safety",
    icon: <ShieldCheck className="w-5 h-5 text-amber-700" />,
    answer: "Facade wind loads in India are normally taken from IS 875 Part 3 using the project's basic wind speed, building height and terrain. Fine Glaze's engineering check verifies member sizing, fixing and anchorage against the wind load in the project design basis.",
    stats: { metric: "IS 875", label: "Design Standard" }
  },
  {
    id: "item-3",
    question: "Does double glazed (DGU) glass help a project earn a green-building rating?",
    category: "Sustainability",
    icon: <ThermometerSnowflake className="w-5 h-5 text-amber-700" />,
    answer: "Double glazed low-E glass can help a project earn green-building credits, but a rating is awarded to the whole building, not to the glass. The glass supports the energy model by lowering solar heat gain and cooling load.",
    stats: { metric: "Whole-Building", label: "Rating" }
  },
  {
    id: "item-4",
    question: "How much does structural glazing cost per sq ft in India?",
    category: "Costing",
    icon: <Building2 className="w-5 h-5 text-amber-700" />,
    answer: "Structural glazing cost per sq ft in India depends on the configuration, glass, sealant, height and access, so a reliable figure needs drawings. Fine Glaze prepares BOQ-based quotations rather than publishing a rate.",
    stats: { metric: "Quoted", label: "On Drawings" }
  },
  {
    id: "item-5",
    question: "What is the difference between structural glazing and curtain wall?",
    category: "Engineering",
    icon: <Layers className="w-5 h-5 text-amber-700" />,
    answer: "Structural glazing bonds glass to the aluminium frame with structural silicone, giving a frameless look from outside, while a curtain wall is the whole non-load-bearing system of mullions, transoms and glass. Structural glazing is one way to finish a curtain wall.",
    stats: { metric: "Frameless", label: "Glass Appearance" }
  },
  {
    id: "item-6",
    question: "How long does curtain wall installation take for a commercial building in India?",
    category: "Timeline",
    icon: <Clock className="w-5 h-5 text-amber-700" />,
    answer: "Curtain wall installation time depends on the building's size, system, glass lead time and site access, so contractors confirm a programme after survey and design approval. Stages are engineering and approvals, fabrication, installation, testing and snagging.",
    stats: { metric: "Per Project", label: "Programme" }
  },
  {
    id: "item-7",
    question: "How much does ACP cladding cost per sq ft in India?",
    category: "Costing",
    icon: <DollarSign className="w-5 h-5 text-amber-700" />,
    answer: "ACP cladding cost per sq ft in India depends on the panel brand, core type (PE or fire-retardant), finish, sub-frame, height and access, so a fair figure needs drawings. Fine Glaze prepares BOQ-based quotations with the brand and finish stated.",
    stats: { metric: "Quoted", label: "On Drawings" }
  },
  {
    id: "item-8",
    question: "How do you waterproof a glass facade against India's monsoon?",
    category: "Safety",
    icon: <ShieldCheck className="w-5 h-5 text-amber-700" />,
    answer: "A glass facade is made monsoon-proof by layered seals: gaskets forming the primary weather seal, structural or weather silicone at the glass-to-frame and perimeter joints, and drainage paths that carry water out. Installation quality decides the result, so installed glazing should be water-tested.",
    stats: { metric: "Layered", label: "Weather Seals" }
  },
  {
    id: "item-9",
    question: "Which cities do you work in? Do you take projects outside Pune and Mumbai?",
    category: "Coverage",
    icon: <MapPin className="w-5 h-5 text-amber-700" />,
    answer: "Fine Glaze is based in Pune and Mumbai and takes facade projects across India, with our office and fabrication unit in Pune. All our project records to date are in Pune, PCMC, Mumbai, Navi Mumbai, Thane and Panvel. Call +91 83692 33566 to discuss your location.",
    stats: { metric: "Pune · Mumbai", label: "Offices" }
  },
  {
    id: "item-10",
    question: "What maintenance does an aluminium glass facade need annually?",
    category: "Maintenance",
    icon: <Wrench className="w-5 h-5 text-amber-700" />,
    answer: "An aluminium glass facade needs regular cleaning, an annual inspection of sealant joints and drainage, and prompt repair of cracked joints or loose gaskets. Coastal buildings benefit from inspection before and after each monsoon. Fine Glaze offers AMC covering inspection, cleaning, sealant repair, glass replacement and leakage investigation.",
    stats: { metric: "Annual", label: "Inspection" }
  },
  {
    id: "item-11",
    question: "What glass thickness is required for high-rise facade in India?",
    category: "Engineering",
    icon: <Wind className="w-5 h-5 text-amber-700" />,
    answer: "Glass thickness for a high-rise facade is set by wind load analysis to IS 875 Part 3 and glass stress calculations to IS 2553, not by a fixed rule. It depends on panel size, height, support and whether the unit is double glazed. The structural engineer confirms the specification.",
    stats: { metric: "Calculated", label: "Per Project" }
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
