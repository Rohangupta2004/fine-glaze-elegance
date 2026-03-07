import { Link } from "react-router-dom";

const seoClusters = [
  "Structural Glazing Contractors in India",
  "Curtain Wall and Unitized Facade Systems",
  "Aluminium Facade Fabrication and Installation",
  "ACP Cladding and Exterior Envelope Renovation",
  "Facade Maintenance, Leak Rectification, and AMC",
  "Airport, Commercial, and Institutional Facade Projects",
];

export const SeoContentSection = () => {
  return (
    <section className="py-20 bg-background border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto glass-card rounded-2xl p-6 md:p-10 space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">
            FineGlaze: Structural Glazing, Curtain Wall, and Aluminium Facade Specialists
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            FineGlaze works across the full facade lifecycle—from pre-construction coordination and system detailing to fabrication,
            installation, and maintenance support. Our team delivers structural glazing and curtain wall solutions for developers,
            consultants, EPC teams, and principal contractors that need reliable execution, technical clarity, and on-site responsiveness.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            If you are evaluating facade partners for airports, commercial campuses, retail projects, hospitals, or institutional buildings,
            our services are designed to reduce interface risk and protect project timelines. We support modern building envelopes with
            aluminium facade systems, ACP cladding, frameless glazing, skylight integration, and long-term maintenance planning.
          </p>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Popular Search Intents We Serve</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-foreground/85">
              {seoClusters.map((item) => (
                <li key={item} className="list-disc ml-5">{item}</li>
              ))}
            </ul>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            To review completed work, visit our <Link to="/portfolio" className="text-primary hover:underline">Portfolio</Link>.
            For project-specific discussions, connect through our <Link to="/contact" className="text-primary hover:underline">Contact page</Link> or explore the full
            <Link to="/services" className="text-primary hover:underline"> Services section</Link> to compare system options.
          </p>
        </div>
      </div>
    </section>
  );
};
