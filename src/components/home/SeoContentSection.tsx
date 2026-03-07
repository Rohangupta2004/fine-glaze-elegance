import { Link } from "react-router-dom";

const entityPillars = [
  {
    entity: "Structural Glazing Pune",
    intent: "Airport terminals, IT parks, and commercial towers",
    page: "/structural-glazing",
  },
  {
    entity: "Structural Glazing Mumbai",
    intent: "High-rise facade upgrades and new developments",
    page: "/structural-glazing",
  },
  {
    entity: "ACP Cladding Pune",
    intent: "Exterior envelope modernization and retrofit",
    page: "/acp-aluminium-cladding",
  },
  {
    entity: "ACP Cladding Mumbai",
    intent: "Corporate facades, hospitals, and mixed-use buildings",
    page: "/acp-aluminium-cladding",
  },
];

const faqItems = [
  {
    question: "Do you handle structural glazing projects in Pune and Mumbai?",
    answer:
      "Yes. FineGlaze executes structural glazing projects across Pune and Mumbai with support for design coordination, fabrication, installation, and handover documentation.",
  },
  {
    question: "Is FineGlaze experienced in airport-grade facade work?",
    answer:
      "Yes. Our Pune Airport project experience helps us plan high-compliance, high-coordination infrastructure scopes with strict quality and timeline controls.",
  },
  {
    question: "What ACP cladding services do you provide?",
    answer:
      "We provide ACP cladding system selection, detailing support, substructure planning, fabrication, installation, and maintenance assistance for commercial and institutional projects.",
  },
  {
    question: "How does FineGlaze demonstrate credibility and quality?",
    answer:
      "FineGlaze was recognized with the 2024 Embassy Award and follows QA/QC-led workflows, milestone tracking, and site-ready documentation for reliable delivery.",
  },
];

export const SeoContentSection = () => {
  return (
    <section className="py-20 bg-background border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="glass-card rounded-2xl p-6 md:p-10 space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">
              Entity-Based SEO Hub: Structural Glazing & ACP Cladding in Pune and Mumbai
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              FineGlaze is building an entity-first content architecture around two core service entities—Structural Glazing and ACP Cladding—mapped to
              Pune and Mumbai. This helps Google AI Search connect our brand with project intent, location relevance, and verified execution signals.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Our E-E-A-T foundation is backed by real project proof and industry recognition, including our <strong>2024 Embassy Award</strong> and
              infrastructure execution context from the <strong>Pune Airport project</strong>. This is supported by service-level pages, portfolio evidence,
              and clear internal linking that improves topical authority.
            </p>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Content Cluster Pillars</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {entityPillars.map((item) => (
                  <Link
                    key={item.entity}
                    to={item.page}
                    className="rounded-xl border border-border/70 bg-card/60 p-4 hover:border-primary/40 transition-colors"
                  >
                    <p className="font-semibold text-foreground">{item.entity}</p>
                    <p className="text-sm text-muted-foreground">{item.intent}</p>
                  </Link>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Continue exploring our <Link to="/services" className="text-primary hover:underline">Services</Link>, validated
              <Link to="/portfolio" className="text-primary hover:underline"> Portfolio</Link>, and direct
              <Link to="/contact" className="text-primary hover:underline"> Contact channel</Link> for project-specific proposals.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-10 space-y-5">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">FAQ: Structural Glazing & ACP Cladding</h3>
            <div className="space-y-4">
              {faqItems.map((faq) => (
                <article key={faq.question} className="border-b border-border/60 pb-4 last:border-0 last:pb-0">
                  <h4 className="font-semibold text-foreground">{faq.question}</h4>
                  <p className="text-muted-foreground mt-1">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
