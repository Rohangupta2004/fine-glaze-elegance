import { Layout } from "@/components/layout/Layout";
import CallNow from "@/components/common/CallNow";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { CTASection } from "@/components/home/CTASection";
import { Process, Sec, SchematicFig, SpecList, type SchematicKey } from "@/components/common/Sheet";
import "./services.css";

interface ServiceItem {
  id: string;
  schematic: SchematicKey;
  title: string;
  subtitle: string;
  href: string;
  longDescription: string;
  features: string[];
}

/** Short label for the index at the top of the page. */
const indexLabel: Record<string, string> = {
  facade: "Curtain Wall & Structural Glazing",
};

/* ================= SERVICES DATA ================= */
const services: ServiceItem[] = [
  {
    id: "facade",
    schematic: "curtain",
    title: "Facade Systems",
    subtitle: "Curtain Walls & Structural Glazing",
    href: "/curtain-wall-systems",
    longDescription:
      "From unitized curtain walls for IT parks to structural glazing for showrooms, we prepare shop drawings in-house and check member sizing, fixing and anchorage against the project wind load. Systems use aluminium extrusions from major Indian mills, DOWSIL structural silicone or approved equivalents, and DGU or Low-E glass where the specification calls for it.",
    features: [
      "Unitized Curtain Walls",
      "Structural & Spider Glazing",
      "Double Skin Facades",
      "ACP & Aluminium Cladding",
      "Stick System Facades",
      "Point-Fixed Glass Systems",
    ],
  },
  {
    id: "railings",
    schematic: "railing",
    title: "Glass Railings",
    subtitle: "Frameless & Semi-Frameless Systems",
    href: "/glass-railings",
    longDescription:
      "We install frameless toughened glass railings using toughened or laminated glass with thickness set by the structural check. Stainless steel hardware is graded to the site, with extra care at coastal locations. Available with aluminium U-channels, SS spigots, or standoff fittings.",
    features: [
      "Frameless Glass Railings",
      "Balcony & Terrace Railings",
      "Stainless Steel Handrails",
      "Custom Railing Designs",
      "Pool Fencing Systems",
      "Staircase Glass Panels",
    ],
  },
  {
    id: "doors-windows",
    schematic: "windows",
    title: "Aluminium Doors & Windows",
    subtitle: "Premium Aluminium Systems",
    href: "/aluminium-windows-doors",
    longDescription:
      "Our aluminium door and window systems are available with thermal break profiles that slow heat transfer through the frame. Available in sliding, casement, tilt-turn, and lift-slide configurations, powder-coated or anodised to specification.",
    features: [
      "Sliding & Lift-Slide Systems",
      "Casement & Tilt-Turn Windows",
      "Thermal Break Profiles",
      "Automatic & Entry Doors",
      "Acoustic Glass Options",
      "Multi-Point Locking Systems",
    ],
  },
  {
    id: "maintenance",
    schematic: "maintenance",
    title: "Facade AMC & Maintenance",
    subtitle: "Facade Care & Repair Services",
    href: "/maintenance-services",
    longDescription:
      "Don't let leaking silicone or broken glass panels degrade your building's value. We handle facade glass cleaning, sealant replacement, glass panel replacement and leakage investigation, and we offer Annual Maintenance Contracts (AMC) with periodic inspection and a written condition report.",
    features: [
      "Facade & Glass Cleaning",
      "Sealant Renewal & Waterproofing",
      "Glass Panel Replacement",
      "Preventive Maintenance AMC",
      "Periodic Facade Inspection",
      "Emergency Repair Services",
    ],
  },
  {
    id: "acp-cladding",
    schematic: "cladding",
    title: "ACP & Metal Cladding",
    subtitle: "Aluminium Composite Panels",
    href: "/acp-aluminium-cladding",
    longDescription:
      "Our ACP cladding uses panels from approved brands such as Alubond, or strictly from the project's approved vendor list. We offer fire-retardant (FR) core panels, with the core confirmed against your project's fire requirements. Available in solid colours, metallic finishes, wood-grain, stone, and mirror finishes; colour warranty terms come from the panel maker.",
    features: [
      "PVDF & PE Coated Panels",
      "Fire Retardant (FR) Grade ACP",
      "Wood-Grain & Stone Finishes",
      "Column & Soffit Cladding",
      "Signage & Fascia Panels",
      "Canopy Cladding",
    ],
  },
  {
    id: "skylights",
    schematic: "skylight",
    title: "Skylights & Glass Canopies",
    subtitle: "Overhead Glazing Solutions",
    href: "/skylights-canopies",
    longDescription:
      "We design and install structural skylight systems using laminated safety glass with heat-reflective coatings. Our canopy solutions include frameless glass canopies with SS spider fittings, aluminium-framed pergola canopies, and retractable roof systems. Each system is detailed for drainage and checked against the project wind load.",
    features: [
      "Atrium Skylight Systems",
      "Frameless Glass Canopies",
      "Spider Fitting Canopies",
      "Polycarbonate Roofing",
      "Retractable Roof Systems",
      "Heat-Reflective Glass Options",
    ],
  },
  {
    id: "louvers",
    schematic: "louver",
    title: "Aluminium Louvers & Sun Shading",
    subtitle: "Solar Control Systems",
    href: "/aluminium-louvers",
    longDescription:
      "Our aluminium louver systems are available in fixed, operable, and motorised configurations. They cut direct sun on the glass while maintaining airflow and visibility. Available in elliptical, aerofoil, and flat blade profiles with powder-coated or anodised finishes in any custom colour.",
    features: [
      "Fixed & Operable Louvers",
      "Motorised Sun Control",
      "Vertical & Horizontal Fins",
      "Aerofoil Blade Profiles",
      "Parking Ventilation Louvers",
      "Acoustic Louver Systems",
    ],
  },
  {
    id: "partitions",
    schematic: "partition",
    title: "Glass Partitions & Shower Enclosures",
    subtitle: "Interior Glass Solutions",
    href: "/glass-partitions",
    longDescription:
      "Create open, light-filled workspaces with our frameless glass partition systems. Available in single-glazed, double-glazed (for sound insulation), and switchable smart glass options. Our shower enclosure range includes sliding, hinged, and walk-in designs using 8mm-12mm toughened glass with anti-limescale nano-coating.",
    features: [
      "Frameless Office Partitions",
      "Acoustic Double-Glazed Walls",
      "Switchable Smart Glass",
      "Sliding Shower Enclosures",
      "Walk-In Shower Panels",
      "Anti-Limescale Nano Coating",
    ],
  },
];

/* ================= PROCESS STEPS ================= */
const processSteps = [
  {
    title: "Consultation",
    desc: "Site survey and requirement discussion with our team.",
  },
  {
    title: "Survey & Design",
    desc: "Measurements and in-house shop drawings for approval.",
  },
  {
    title: "Fabrication",
    desc: "Cutting, assembly and quality checks at our Pisoli, Pune unit.",
  },
  {
    title: "Installation",
    desc: "Sequenced on-site erection with a dedicated site in-charge, supervisor and safety officer.",
  },
];

/* ================= WHY CHOOSE US ================= */
const whyUs = [
  {
    title: "Quality Assurance",
    desc: "Materials from approved brands — Saint-Gobain glass, Alubond ACP, DOWSIL sealants — with a site water test on installed glazing and third-party ASTM testing arranged on request.",
  },
  {
    title: "Programme Planning",
    desc: "We plan fabrication in project batches and sequence erection to the main contractor's programme. Programmes are confirmed per project.",
  },
  {
    title: "Expert Team",
    desc: "A core engineering, supervision and site team of 40+, led by a founder with 11+ years in the facade industry.",
  },
  {
    title: "Landmark Projects",
    desc: "Work for Embassy REIT, L&T Construction, Jindal Stainless and Nirmaann. Embassy REIT Best Vendor 2024.",
  },
];

/* ================= PAGE ================= */
export default function Services() {
  return (
    <Layout darkHero>
      <SEO
        title="Facade Services in Pune, Mumbai & India | Fine Glaze"
        description="Facade services in Pune, Mumbai and across India: curtain wall, structural glazing, ACP, windows, railings, louvers, skylights and AMC. In-house drawings."
        canonical="https://fineglaze.com/services"
        keywords="facade services in Pune and Mumbai, facade systems, glass facade services, curtain wall, structural glazing, ACP cladding, glass railings, skylights"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Facade & Glazing Services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Fine Glaze",
            "areaServed": ["Pune", "Mumbai", "India"],
          },
          "description":
            "Facade and glazing services including curtain walls, structural glazing, ACP cladding, glass railings, skylights, louvers, partitions and AMC maintenance in Pune, Mumbai and across India.",
        }}
      />

      <PageHero
        crumbs={[{ label: "Services" }]}
        title={<>Facade, Glazing &amp; <span className="text-gradient-gold">Aluminium Solutions</span></>}
        intro="Curtain walls, structural glazing, ACP cladding, windows, railings, skylights, louvers, partitions and facade maintenance, from one team in Pune and Mumbai."
        secondary={{ label: "View Our Projects", to: "/portfolio" }}
        extra="Best Vendor Performance 2024, awarded by Embassy REIT."
        source="services_hero"
      />

      <Sec no="01" label="Index" title="Facade, glazing and aluminium services." sheetLabel="Service index" dim={`${services.length} service groups`}>
        <ol className="sx-links">
          {services.map((service, index) => (
            <li key={service.id}>
              <a href={`#${service.id}`}>
                <b>
                  <span className="sx-mono" style={{ color: "#555b62", marginRight: 12, fontWeight: 400, fontSize: 13 }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {indexLabel[service.id] || service.title}
                </b>
                <span>{service.subtitle}</span>
                <i aria-hidden="true">{"→"}</i>
              </a>
            </li>
          ))}
        </ol>
      </Sec>

      {services.map((service, index) => (
        <Sec
          key={service.id}
          id={service.id}
          no={String(index + 2).padStart(2, "0")}
          label={service.subtitle}
          title={service.title}
          sheetLabel={service.title}
        >
          <div className="sx-split">
            <div>
              <div className="sx-prose">
                <p>{service.longDescription}</p>
              </div>
              <div style={{ height: 28 }} />
              <SpecList items={service.features} />
              <p className="sx-more">
                <CallNow className="fg-btn" number />
                <Link className="fg-btn2" to={service.href}>
                  Learn more
                </Link>
              </p>
            </div>
            <div className="sx-side">
              <SchematicFig kind={service.schematic} fig={String(index + 1).padStart(2, "0")} />
            </div>
          </div>
        </Sec>
      ))}

      <Sec no={String(services.length + 2).padStart(2, "0")} label="Process" title="Our execution process" sheetLabel="Process">
        <Process steps={processSteps} />
      </Sec>

      <Sec no={String(services.length + 3).padStart(2, "0")} label="Record" title="What sets us apart" sheetLabel="Why Fine Glaze">
        <SpecList
          items={whyUs.map((w) => (
            <>
              <b style={{ fontWeight: 500 }}>{w.title}</b>
              <span className="sx-d">{w.desc}</span>
            </>
          ))}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
