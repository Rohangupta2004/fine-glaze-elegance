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
import PageHero from "@/components/common/PageHero";
import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { useBookCall } from "@/components/booking/BookCallProvider";

// --- DATA & SCHEMA ---
const faqDatabase = [
  {
    id: "item-1",
    question: "How do unitized curtain walls reduce high-rise construction timelines?",
    category: "Engineering",
    icon: <Construction className="w-5 h-5 text-lamp" />,
    answer: "Unitized curtain walls shorten high-rise timelines because panels are built and glazed in a factory while the structure rises, so less work is done at height on site. The saving depends on the project's design, programme and site access.",
    stats: { metric: "Factory-built", label: "Panels" }
  },
  {
    id: "item-2",
    question: "What wind load standards does Fine Glaze follow for tall buildings?",
    category: "Safety",
    icon: <ShieldCheck className="w-5 h-5 text-lamp" />,
    answer: "Facade wind loads in India are normally taken from IS 875 Part 3 using the project's basic wind speed, building height and terrain. Fine Glaze's engineering check verifies member sizing, fixing and anchorage against the wind load in the project design basis.",
    stats: { metric: "IS 875", label: "Design Standard" }
  },
  {
    id: "item-3",
    question: "Does double glazed (DGU) glass help a project earn a green-building rating?",
    category: "Sustainability",
    icon: <ThermometerSnowflake className="w-5 h-5 text-lamp" />,
    answer: "Double glazed low-E glass can help a project earn green-building credits, but a rating is awarded to the whole building, not to the glass. The glass supports the energy model by lowering solar heat gain and cooling load.",
    stats: { metric: "Whole-Building", label: "Rating" }
  },
  {
    id: "item-4",
    question: "How much does structural glazing cost per sq ft in India?",
    category: "Costing",
    icon: <Building2 className="w-5 h-5 text-lamp" />,
    answer: "Structural glazing cost per sq ft in India depends on the configuration, glass, sealant, height and access, so a reliable figure needs drawings. Fine Glaze prepares BOQ-based quotations rather than publishing a rate.",
    stats: { metric: "Quoted", label: "On Drawings" }
  },
  {
    id: "item-5",
    question: "What is the difference between structural glazing and curtain wall?",
    category: "Engineering",
    icon: <Layers className="w-5 h-5 text-lamp" />,
    answer: "Structural glazing bonds glass to the aluminium frame with structural silicone, giving a frameless look from outside, while a curtain wall is the whole non-load-bearing system of mullions, transoms and glass. Structural glazing is one way to finish a curtain wall.",
    stats: { metric: "Frameless", label: "Glass Appearance" }
  },
  {
    id: "item-6",
    question: "How long does curtain wall installation take for a commercial building in India?",
    category: "Timeline",
    icon: <Clock className="w-5 h-5 text-lamp" />,
    answer: "Curtain wall installation time depends on the building's size, system, glass lead time and site access, so contractors confirm a programme after survey and design approval. Stages are engineering and approvals, fabrication, installation, testing and snagging.",
    stats: { metric: "Per Project", label: "Programme" }
  },
  {
    id: "item-7",
    question: "How much does ACP cladding cost per sq ft in India?",
    category: "Costing",
    icon: <DollarSign className="w-5 h-5 text-lamp" />,
    answer: "ACP cladding cost per sq ft in India depends on the panel brand, core type (PE or fire-retardant), finish, sub-frame, height and access, so a fair figure needs drawings. Fine Glaze prepares BOQ-based quotations with the brand and finish stated.",
    stats: { metric: "Quoted", label: "On Drawings" }
  },
  {
    id: "item-8",
    question: "How do you waterproof a glass facade against India's monsoon?",
    category: "Safety",
    icon: <ShieldCheck className="w-5 h-5 text-lamp" />,
    answer: "A glass facade is made monsoon-proof by layered seals: gaskets forming the primary weather seal, structural or weather silicone at the glass-to-frame and perimeter joints, and drainage paths that carry water out. Installation quality decides the result, so installed glazing should be water-tested.",
    stats: { metric: "Layered", label: "Weather Seals" }
  },
  {
    id: "item-9",
    question: "Which cities do you work in? Do you take projects outside Pune and Mumbai?",
    category: "Coverage",
    icon: <MapPin className="w-5 h-5 text-lamp" />,
    answer: "Fine Glaze is based in Pune and Mumbai and takes facade projects across India, with our office and fabrication unit in Pune. All our project records to date are in Pune, PCMC, Mumbai, Navi Mumbai, Thane and Panvel. Call +91 83692 33566 to discuss your location.",
    stats: { metric: "Pune and Mumbai", label: "Offices" }
  },
  {
    id: "item-10",
    question: "What maintenance does an aluminium glass facade need annually?",
    category: "Maintenance",
    icon: <Wrench className="w-5 h-5 text-lamp" />,
    answer: "An aluminium glass facade needs regular cleaning, an annual inspection of sealant joints and drainage, and prompt repair of cracked joints or loose gaskets. Coastal buildings benefit from inspection before and after each monsoon. Fine Glaze offers AMC covering inspection, cleaning, sealant repair, glass replacement and leakage investigation.",
    stats: { metric: "Annual", label: "Inspection" }
  },
  {
    id: "item-11",
    question: "What glass thickness is required for high-rise facade in India?",
    category: "Engineering",
    icon: <Wind className="w-5 h-5 text-lamp" />,
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
    <Layout darkHero>
      <SEO
        title="Facade Contractor FAQ India: Glazing and ACP | Fine Glaze"
        description="Answers to common questions on curtain wall, structural glazing, ACP cladding, facade leakage and maintenance AMC, written as general guidance by Fine Glaze."
        canonical="https://fineglaze.com/faq"
        keywords="facade contractor FAQ India, curtain wall FAQ, structural glazing FAQ, ACP cladding FAQ, facade cost, facade maintenance questions"
        schema={jsonLd}
      />

      <PageHero
        crumbs={[{ label: "FAQ" }]}
        title="Facade questions, answered."
        intro="The engineering, cost and maintenance questions architects and developers ask us most."
        source="faq_hero"
      />

      <section className="fg-sec">
        <div className="fg-wrap">
          <div className="fg-faq">
            {faqDatabase.map((faq) => (
              <details key={faq.id}>
                <summary>
                  <h3>
                    <span className="flex flex-col items-start gap-1 text-left">
                      <span className="text-sm font-normal text-mute">{faq.category}</span>
                      <span className="text-lg md:text-xl font-medium text-paper leading-snug">{faq.question}</span>
                    </span>
                  </h3>
                </summary>
                <div className="fg-a" style={{ maxWidth: "none", paddingTop: 4 }}>
                  <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,18rem)] gap-8 items-start">
                    <div className="space-y-4">
                      <p className="text-mute leading-relaxed text-base max-w-[68ch]">{faq.answer}</p>
                      <button
                        type="button"
                        onClick={() => openBooking({ source: "faq_drawings", work: "Technical drawings" })}
                        className="fg-lnk"
                      >
                        Book a call
                      </button>
                    </div>
                    <div className="border-l border-line pl-6">
                      <div className="font-light text-3xl text-paper tracking-tight">{faq.stats.metric}</div>
                      <div className="text-sm text-mute mt-2">{faq.stats.label}</div>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
