import { Link } from "react-router-dom";

const serviceLinks = [
  { name: "Aluminium Facade Systems", href: "/aluminium-facade" },
  { name: "Structural Glazing", href: "/structural-glazing" },
  { name: "Curtain Wall Systems", href: "/curtain-wall-systems" },
  { name: "ACP Aluminium Cladding", href: "/acp-aluminium-cladding" },
  { name: "Glass Railings", href: "/glass-railings" },
  { name: "Facade Maintenance Services", href: "/maintenance-services" },
];

const cityKeywords = [
  "Mumbai",
  "Pune",
  "Navi Mumbai",
  "Bengaluru",
  "Hyderabad",
  "Ahmedabad",
  "Delhi NCR",
  "Chennai",
];

export const SeoContentSection = () => {
  return (
    <section className="py-20 border-t bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Aluminium Facade, Glazing & Curtain Wall Experts in India
        </h2>

        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Fine Glaze delivers end-to-end facade engineering, design,
          fabrication, and installation for modern architecture. We support
          architects, consultants, developers, and project teams with
          high-performance aluminium facade systems, structural glazing,
          curtain walls, ACP cladding, and glass railing solutions. Our teams
          work with strict quality checks, project scheduling, and safety-first
          execution standards from concept to handover.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <article>
            <h3 className="text-2xl font-semibold mb-4">What We Build</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Unitized and stick curtain wall systems</li>
              <li>Structural glazing and spider glazing assemblies</li>
              <li>ACP cladding and custom aluminium panel facades</li>
              <li>Commercial entrance systems and glazed partitions</li>
              <li>Balustrades and laminated glass railings</li>
              <li>Facade upgrades, sealant replacement, and maintenance</li>
            </ul>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-4">Industries We Serve</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Corporate offices and IT parks</li>
              <li>Hotels, hospitals, and institutional campuses</li>
              <li>Retail malls and mixed-use developments</li>
              <li>Residential high-rise and premium housing projects</li>
              <li>Industrial and logistics infrastructure</li>
              <li>Airport and transport-linked developments</li>
            </ul>
          </article>
        </div>

        <article className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">
            Service Pages for Detailed Specifications
          </h3>
          <p className="text-muted-foreground mb-4">
            Explore service-specific pages to review materials, technical scope,
            and use-cases for your project.
          </p>
          <div className="flex flex-wrap gap-3">
            {serviceLinks.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                className="inline-flex items-center px-4 py-2 rounded-full border bg-background hover:bg-primary hover:text-white transition-colors"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </article>

        <article>
          <h3 className="text-2xl font-semibold mb-4">
            Facade Project Support Across Major Indian Cities
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Our project teams support execution requirements across {cityKeywords.join(", ")} and
            other key growth corridors. For planning discussions, BOQ reviews,
            drawings, and site coordination, connect with our team through the
            contact page.
          </p>
        </article>
      </div>
    </section>
  );
};
