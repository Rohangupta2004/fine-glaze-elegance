import { Link } from "react-router-dom";

const entityPillars = [
  {
    entity: "Facade Solutions in Pune",
    intent: "Structural glazing, ACP cladding, and curtain wall systems for IT parks and commercial hubs",
    page: "/services",
  },
  {
    entity: "Facade Solutions in Mumbai",
    intent: "High-rise facade modernization and envelope execution for corporate and mixed-use projects",
    page: "/services",
  },
  {
    entity: "Structural Glazing Pune & Mumbai",
    intent: "Airport, institutional, and premium commercial facade systems",
    page: "/structural-glazing",
  },
  {
    entity: "ACP Cladding Pune & Mumbai",
    intent: "Exterior cladding upgrades, retrofit envelopes, and long-term weather protection",
    page: "/acp-aluminium-cladding",
  },
];

const faqItems = [
  {
    question: "Do you handle facade solutions in both Pune and Mumbai?",
    answer:
      "Yes. FineGlaze executes facade solutions in Pune and Mumbai with complete support for engineering coordination, fabrication planning, installation, and handover workflows.",
  },
  {
    question: "What trust signals prove FineGlaze capability?",
    answer:
      "FineGlaze highlights two core proof points: the 2024 Embassy REIT Award and project execution experience in the Pune Airport zone.",
  },
  {
    question: "Do you provide both Structural Glazing and ACP Cladding?",
    answer:
      "Yes. We deliver structural glazing and ACP cladding as integrated envelope packages for commercial, institutional, and infrastructure developments.",
  },
  {
    question: "How do you help with timeline and quality risk?",
    answer:
      "Our QA/QC-led process, milestone tracking, and site-ready detailing help reduce delays, rework, and coordination gaps across facade packages.",
  },
];

export const SeoContentSection = () => {
  return (
    <section className="py-20 bg-background border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="glass-card rounded-2xl p-6 md:p-10 space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">
              Content Cluster: Facade Solutions in Pune and Mumbai
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              This content cluster is built around a central entity: <strong>Facade Solutions in Pune and Mumbai</strong>. Supporting entities include
              Structural Glazing and ACP Cladding, mapped to local project intent, commercial building demand, and infrastructure execution requirements.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              For stronger E-E-A-T signals, FineGlaze highlights real-world proof points: the <strong>Embassy REIT 2024 Award</strong> and
              <strong> Pune Airport project</strong> execution context. These trust assets reinforce authority and improve relevance for Google AI Search.
            </p>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Cluster Pillars and Internal Links</h3>
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
              Explore our <Link to="/services" className="text-primary hover:underline">Services</Link>, project-backed
              <Link to="/portfolio" className="text-primary hover:underline"> Portfolio</Link>, and direct
              <Link to="/contact" className="text-primary hover:underline"> Contact channel</Link> to scope your facade package.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-10 space-y-5">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">FAQ: Facade Solutions in Pune and Mumbai</h3>
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
