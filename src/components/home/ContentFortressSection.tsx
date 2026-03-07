import { Link } from "react-router-dom";

const clusterPages = [
  {
    title: "Structural Glazing Guide for Pune Commercial Buildings",
    summary: "Planning, system selection, and execution notes for developers and consultants in Pune's office and institutional zones.",
    href: "/structural-glazing",
  },
  {
    title: "ACP Cladding Retrofit Playbook for Mumbai Projects",
    summary: "When to retrofit, how to sequence work, and what technical checks reduce long-term facade failures.",
    href: "/acp-aluminium-cladding",
  },
  {
    title: "Curtain Wall Systems for High-Rise Envelope Performance",
    summary: "Performance priorities for daylight, weather sealing, wind loading, and maintainability in urban towers.",
    href: "/curtain-wall-systems",
  },
  {
    title: "Facade Maintenance and Leak Rectification Framework",
    summary: "Preventive and corrective workflows for maintaining envelope integrity in high-use commercial assets.",
    href: "/maintenance-services",
  },
];

const decisionPoints = [
  "Project Type: Airport, IT Park, Corporate Tower, Institutional Campus",
  "Scope Type: New Facade Installation, Envelope Upgrade, or Retrofit",
  "System Scope: Structural Glazing, ACP Cladding, Curtain Wall, Railing",
  "Commercial Filters: Timeline, Warranty, BOQ Clarity, Site Coordination",
];

export const ContentFortressSection = () => {
  return (
    <section className="py-20 bg-background border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="glass-card rounded-2xl p-6 md:p-10 space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">
              Content Fortress: Facade Knowledge Hub for Pune and Mumbai
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This section expands FineGlaze into a topic-authority hub. Instead of a single service page strategy, we map every commercial search intent to
              connected expert pages, case context, and trust-backed conversion paths.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our trust narrative remains anchored in two core proof assets: <strong>Embassy REIT 2024 Award</strong> recognition and
              <strong> Pune Airport project</strong> delivery exposure. These reinforce E-E-A-T and improve answerability for AI-first search experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {clusterPages.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="rounded-xl border border-border/70 bg-card/60 p-5 hover:border-primary/40 transition-colors"
              >
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.summary}</p>
              </Link>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-10 space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">How Buyers Evaluate Facade Partners</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
              {decisionPoints.map((point) => (
                <li key={point} className="list-disc ml-5">{point}</li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              For proposal-ready discussions, go to <Link className="text-primary hover:underline" to="/contact">Contact</Link>.
              For completed work references, review <Link className="text-primary hover:underline" to="/portfolio">Portfolio</Link>.
              For scope comparison, start from <Link className="text-primary hover:underline" to="/services">Services</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
