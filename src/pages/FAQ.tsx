import PageHero from "@/components/common/PageHero";
import FaqList from "@/components/common/FaqList";
import { Sec } from "@/components/common/Sheet";
import { CTASection } from "@/components/home/CTASection";
import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";

// --- DATA & SCHEMA ---
const faqDatabase = [
  {
    id: "item-1",
    question: "How do unitized curtain walls reduce high-rise construction timelines?",
    category: "Engineering",
    answer: "Unitized curtain walls shorten high-rise timelines because panels are built and glazed in a factory while the structure rises, so less work is done at height on site. The saving depends on the project's design, programme and site access.",
  },
  {
    id: "item-2",
    question: "What wind load standards does Fine Glaze follow for tall buildings?",
    category: "Safety",
    answer: "Facade wind loads in India are normally taken from IS 875 Part 3 using the project's basic wind speed, building height and terrain. Fine Glaze's engineering check verifies member sizing, fixing and anchorage against the wind load in the project design basis.",
  },
  {
    id: "item-3",
    question: "Does double glazed (DGU) glass help a project earn a green-building rating?",
    category: "Sustainability",
    answer: "Double glazed low-E glass can help a project earn green-building credits, but a rating is awarded to the whole building, not to the glass. The glass supports the energy model by lowering solar heat gain and cooling load.",
  },
  {
    id: "item-4",
    question: "How much does structural glazing cost per sq ft in India?",
    category: "Costing",
    answer: "Structural glazing cost per sq ft in India depends on the configuration, glass, sealant, height and access, so a reliable figure needs drawings. Fine Glaze prepares BOQ-based quotations rather than publishing a rate.",
  },
  {
    id: "item-5",
    question: "What is the difference between structural glazing and curtain wall?",
    category: "Engineering",
    answer: "Structural glazing bonds glass to the aluminium frame with structural silicone, giving a frameless look from outside, while a curtain wall is the whole non-load-bearing system of mullions, transoms and glass. Structural glazing is one way to finish a curtain wall.",
  },
  {
    id: "item-6",
    question: "How long does curtain wall installation take for a commercial building in India?",
    category: "Timeline",
    answer: "Curtain wall installation time depends on the building's size, system, glass lead time and site access, so contractors confirm a programme after survey and design approval. Stages are engineering and approvals, fabrication, installation, testing and snagging.",
  },
  {
    id: "item-7",
    question: "How much does ACP cladding cost per sq ft in India?",
    category: "Costing",
    answer: "ACP cladding cost per sq ft in India depends on the panel brand, core type (PE or fire-retardant), finish, sub-frame, height and access, so a fair figure needs drawings. Fine Glaze prepares BOQ-based quotations with the brand and finish stated.",
  },
  {
    id: "item-8",
    question: "How do you waterproof a glass facade against India's monsoon?",
    category: "Safety",
    answer: "A glass facade is made monsoon-proof by layered seals: gaskets forming the primary weather seal, structural or weather silicone at the glass-to-frame and perimeter joints, and drainage paths that carry water out. Installation quality decides the result, so installed glazing should be water-tested.",
  },
  {
    id: "item-9",
    question: "Which cities do you work in? Do you take projects outside Pune and Mumbai?",
    category: "Coverage",
    answer: "Fine Glaze is based in Pune and Mumbai and takes facade projects across India, with our office and fabrication unit in Pune. All our project records to date are in Pune, PCMC, Mumbai, Navi Mumbai, Thane and Panvel. Call +91 83692 33566 to discuss your location.",
  },
  {
    id: "item-10",
    question: "What maintenance does an aluminium glass facade need annually?",
    category: "Maintenance",
    answer: "An aluminium glass facade needs regular cleaning, an annual inspection of sealant joints and drainage, and prompt repair of cracked joints or loose gaskets. Coastal buildings benefit from inspection before and after each monsoon. Fine Glaze offers AMC covering inspection, cleaning, sealant repair, glass replacement and leakage investigation.",
  },
  {
    id: "item-11",
    question: "What glass thickness is required for high-rise facade in India?",
    category: "Engineering",
    answer: "Glass thickness for a high-rise facade is set by wind load analysis to IS 875 Part 3 and glass stress calculations to IS 2553, not by a fixed rule. It depends on panel size, height, support and whether the unit is double glazed. The structural engineer confirms the specification.",
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

      <Sec no="01" label="Questions" title="Engineering, cost and maintenance." sheetLabel="FAQ" dim={`${faqDatabase.length} questions`}>
        <div className="sx-faq">
          <FaqList
            items={faqDatabase.map((f) => ({
              q: (
                <>
                  <span className="sx-cat">{f.category}</span>
                  {f.question}
                </>
              ),
              a: f.answer,
            }))}
          />
        </div>
      </Sec>

      <CTASection />
    </Layout>
  );
}
