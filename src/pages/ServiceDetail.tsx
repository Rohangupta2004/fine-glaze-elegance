import { useParams, Navigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, CheckCircle2, MapPin, Building2, ChevronRight } from "lucide-react";
import SEO from "@/components/SEO";

/* ─────────────────────────────────────────────────────────
   TYPE DEFINITIONS
───────────────────────────────────────────────────────── */
interface ServiceType {
  name: string;
  tagline: string;
  description: string;
  specs: string[];
  bestFor: string;
  image: string;
}

interface ServiceData {
  label: string;
  desc: string;
  extendedDesc: string;
  benefits: string[];
  image: string;
  types: ServiceType[];
}

/* ─────────────────────────────────────────────────────────
   SERVICE DATA WITH DETAILED TYPES
───────────────────────────────────────────────────────── */
const serviceKeywords: Record<string, ServiceData> = {
  "structural-glazing": {
    label: "Structural Glazing Systems",
    desc: "Premium 2-side and 4-side structural glazing solutions for modern corporate towers.",
    extendedDesc:
      "Structural glazing is the pinnacle of modern architectural design. By utilizing high-tensile structural silicone to bond glass directly to the concealed aluminium framing, we eliminate the need for exterior pressure plates or caps. The result is a seamless, flush glass facade that offers superior thermal performance and a striking, uninterrupted aesthetic.",
    benefits: [
      "Seamless Flush Exterior",
      "Superior Wind-Load Resistance",
      "Enhanced Thermal & Acoustic Insulation",
      "Maximum Natural Light Transmission",
    ],
    image: "/Glazing.webp",
    types: [
      {
        name: "2-Side Structural Glazing (SSG)",
        tagline: "Horizontal or vertical silicone-bonded edges",
        description:
          "Two sides of the glass panel are bonded to the frame using structural silicone; the remaining two sides use conventional pressure caps. Ideal for cost-sensitive projects that still want a partially frameless look.",
        specs: [
          "6mm – 12mm toughened glass",
          "Dow Corning / Sika structural silicone",
          "Aluminium 6063-T6 extrusions",
          "Wind load up to 3.0 kPa",
        ],
        bestFor: "IT parks, commercial offices, showroom facades",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
      },
      {
        name: "4-Side Structural Glazing (SSG)",
        tagline: "Fully flush, no visible frame on exterior",
        description:
          "All four edges bonded with structural silicone, creating a completely frameless exterior. The most premium structural glazing variant — favoured for high-end corporate towers and luxury hotels.",
        specs: [
          "10mm – 19mm DGU / Low-E glass",
          "Dual-component structural silicone",
          "Concealed hidden-fix aluminium frames",
          "Wind load up to 4.5 kPa",
        ],
        bestFor: "High-rise towers, luxury hotels, airport terminals",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      },
      {
        name: "Spider / Point-Fixed Glazing",
        tagline: "Glass suspended by stainless steel spider fittings",
        description:
          "Glass panels are held by stainless steel spiders (rosettes) drilled into the glass at precise points. The result is a near-invisible structural connection that maximises transparency — popular for atrium walls and lobbies.",
        specs: [
          "12mm – 19mm laminated safety glass",
          "SS 316 marine-grade spider fittings",
          "Countersunk bolt fixings",
          "Expansion joints every 6m",
        ],
        bestFor: "Atrium walls, grand lobbies, feature facades",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
      },
      {
        name: "Frameless Glass Canopies",
        tagline: "Overhead structural glass for entrances & atriums",
        description:
          "Canopy systems using laminated glass panels supported by structural fins or steel cables. Fully weatherproof with integrated drainage channels. Creates a dramatic, open entrance while protecting from elements.",
        specs: [
          "17.52mm or 21.52mm laminated glass",
          "Thermally broken aluminium or steel fins",
          "Integrated EPDM weather seals",
          "Live load rated to NBC standards",
        ],
        bestFor: "Building entrances, shopping malls, sky bridges",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      },
    ],
  },

  "curtain-wall": {
    label: "Curtain Wall Engineering",
    desc: "Unitized and semi-unitized glass curtain walls engineered for aggressive wind loads.",
    extendedDesc:
      "Our curtain wall systems are designed to protect mid-to-high-rise buildings from the harshest environmental elements. Whether utilizing factory-assembled unitized panels for rapid crane-installation or traditional stick-built systems for complex geometries, our engineering ensures total weatherproofing and structural integrity.",
    benefits: [
      "Rapid Factory-Assembled Deployment",
      "Integrated EPDM Weather Sealing",
      "Thermal-Break Technology",
      "Accommodates Building Sway & Seismic Shifts",
    ],
    image: "/Unitized.webp",
    types: [
      {
        name: "Unitized Curtain Wall",
        tagline: "Factory-assembled panels, crane-mounted installation",
        description:
          "Floor-to-floor modules are fully glazed and fabricated in the factory, then hoisted and interlocked on-site. Faster installation, better quality control, and ideal for high-rise projects where scaffold access is limited.",
        specs: [
          "Floor-to-floor module sizes up to 1.8m × 4.2m",
          "DGU / Low-E / solar control glass options",
          "Inter-lock stack joint with EPDM triple seal",
          "Wind load rated 4.5 kPa",
        ],
        bestFor: "High-rise towers (12+ floors), IT parks, hotels",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
      },
      {
        name: "Stick System Curtain Wall",
        tagline: "On-site assembled for complex geometries",
        description:
          "Horizontal and vertical aluminium mullions are assembled stick-by-stick on site. More flexible for curved or irregular facades and lower-rise buildings. Cost-effective for mid-rise and complex shapes.",
        specs: [
          "Aluminium mullion depths: 100mm – 200mm",
          "Pressure plate & cap system or SSG infill",
          "Thermally broken profiles with polyamide strips",
          "Suitable for up to 12-storey buildings",
        ],
        bestFor: "Mid-rise offices (4–12 floors), complex geometries",
        image: "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=800&q=80",
      },
      {
        name: "Semi-Unitized Curtain Wall",
        tagline: "Hybrid of speed and site flexibility",
        description:
          "Vertical mullions are pre-fabricated as full-height units; horizontal transoms and glass are installed on-site. Combines the installation speed of unitized with the site adaptability of stick systems.",
        specs: [
          "Pre-fab mullion columns up to 6m height",
          "Site-installed horizontal transoms",
          "Flexible for slab variation up to ±50mm",
          "Reduced crane dependency vs full unitized",
        ],
        bestFor: "Mixed-use buildings, phased construction projects",
        image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=800&q=80",
      },
      {
        name: "Double-Skin Facade",
        tagline: "Two glass layers with ventilated air cavity",
        description:
          "An outer weather skin and an inner insulating skin create a ventilated cavity that dramatically reduces solar heat gain and improves acoustic performance. Also enables natural ventilation in intermediate seasons.",
        specs: [
          "Cavity width: 200mm – 1200mm",
          "Outer skin: 6mm or 8mm toughened glass",
          "Inner skin: DGU with Low-E coating",
          "Energy savings up to 35% vs single skin",
        ],
        bestFor: "Green-certified buildings, LEED/IGBC projects",
        image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=800&q=80",
      },
    ],
  },

  "acp-cladding": {
    label: "ACP & Aluminium Cladding",
    desc: "Fire-retardant Aluminium Composite Panel cladding for exterior building elevations.",
    extendedDesc:
      "Aluminium Composite Panels (ACP) offer the perfect balance of durability, weight, and aesthetic flexibility. We strictly utilize Fire Retardant (FR) grade cores combined with anti-fading PVDF coatings, ensuring your commercial facade not only looks exceptional but complies with all modern fire and safety codes.",
    benefits: [
      "Class B1/A2 Fire Retardant Cores",
      "25-Year PVDF Coating Guarantee",
      "High Strength-to-Weight Ratio",
      "Precision CNC Routing",
    ],
    image: "/Panel.webp",
    types: [
      {
        name: "PVDF-Coated ACP",
        tagline: "Premium fluoropolymer finish, 20-year colour warranty",
        description:
          "Polyvinylidene fluoride (PVDF) coating provides exceptional UV resistance, chalk resistance, and colour stability. The industry-standard choice for commercial facades where long-term aesthetics are critical.",
        specs: [
          "Panel thickness: 3mm or 4mm",
          "PVDF 70% coating per AAMA 2605",
          "Available in 200+ RAL/NCS colours",
          "FR core: Class B1 / A2 (NBC compliant)",
        ],
        bestFor: "Commercial towers, IT campuses, retail facades",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
      },
      {
        name: "PE-Coated ACP",
        tagline: "Cost-effective for interior & low-rise applications",
        description:
          "Polyester (PE) coating offers good aesthetics at a lower cost than PVDF. Suitable for interior wall cladding, signage, and low-rise buildings not exposed to harsh UV or coastal environments.",
        specs: [
          "Panel thickness: 3mm",
          "PE coating per AAMA 2603",
          "Lower UV resistance than PVDF",
          "Not recommended for coastal / high-rise use",
        ],
        bestFor: "Interior cladding, shopfronts, signage boards",
        image: "https://images.unsplash.com/photo-1565117099498-30d27b9a81c4?w=800&q=80",
      },
      {
        name: "Wood-Grain & Stone-Finish ACP",
        tagline: "Natural texture, aluminium durability",
        description:
          "High-resolution digitally printed or embossed wood-grain and stone-texture ACP panels. Achieve the warmth of timber or granite at a fraction of the cost and weight, with zero maintenance.",
        specs: [
          "Digital print with PVDF topcoat",
          "Teak, Walnut, Wenge wood finishes",
          "Marble, Travertine, Granite stone textures",
          "FR core standard",
        ],
        bestFor: "Hospitality facades, retail interiors, feature walls",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      },
      {
        name: "Aluminium Solid Panels",
        tagline: "Thicker, premium metal for complex shapes",
        description:
          "Single-skin aluminium sheets (3mm – 6mm) powder-coated or PVDF-coated. Can be CNC-routed into perforated patterns, curved sections, or 3D shapes. More rigid and premium than ACP composite panels.",
        specs: [
          "Thickness: 3mm – 6mm solid aluminium",
          "Powder coat or PVDF finish",
          "CNC-routable for custom perforations",
          "Fabricated into cassette or flat-fix systems",
        ],
        bestFor: "Signature facades, soffits, column cladding",
        image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?w=800&q=80",
      },
    ],
  },
};

/* ─────────────────────────────────────────────────────────
   PRIORITY HUBS FOR INTERNAL SILO LINKING
───────────────────────────────────────────────────────── */
const priorityHubs = [
  { slug: "mumbai", name: "Mumbai" },
  { slug: "pune", name: "Pune" },
  { slug: "navi-mumbai", name: "Navi Mumbai" },
  { slug: "thane", name: "Thane" },
  { slug: "bkc", name: "BKC" },
  { slug: "hinjewadi", name: "Hinjewadi" },
  { slug: "kharadi", name: "Kharadi" },
  { slug: "andheri", name: "Andheri" },
];

/* ─────────────────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────────────────── */
export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <Navigate to="/services" replace />;

  const matchedServiceKey = Object.keys(serviceKeywords).find(
    (key) => slug === key
  );

  if (!matchedServiceKey) return <Navigate to="/services" replace />;

  const serviceData = serviceKeywords[matchedServiceKey];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: serviceData.label,
      description: serviceData.extendedDesc,
      provider: { "@type": "Organization", name: "Fine Glaze" },
      areaServed: { "@type": "State", name: "Maharashtra" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://fineglaze.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://fineglaze.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: serviceData.label,
          item: `https://fineglaze.com/services/${slug}`,
        },
      ],
    },
  ];

  return (
    <Layout darkHero>
      <SEO
        title={`${serviceData.label} Contractors in India | Fine Glaze`}
        description={serviceData.desc}
        canonical={`https://fineglaze.com/services/${slug}`}
        schemas={schemas}
      />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-24 bg-slate-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url('${serviceData.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />

        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services" className="hover:text-amber-400 transition-colors">Services</Link>
            <ChevronRight size={14} />
            <span className="text-amber-400">{serviceData.label}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm font-bold mb-6">
            <Building2 size={16} /> Commercial Facade Engineering
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Advanced{" "}
            <span className="text-amber-500">{serviceData.label}</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-10">
            {serviceData.desc}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 px-8 py-6 text-lg border-0 text-white"
              >
                Consult an Engineer <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Precision Engineering & Execution
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {serviceData.extendedDesc}
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <ShieldCheck className="text-amber-600" /> Core Advantages
            </h3>
            <div className="space-y-4">
              {serviceData.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100"
                >
                  <CheckCircle2
                    size={20}
                    className="text-amber-600 shrink-0"
                  />
                  <span className="font-semibold text-slate-800">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-amber-500 rounded-2xl transform translate-x-4 translate-y-4 opacity-20" />
            <img
              src={serviceData.image}
              alt={serviceData.label}
              className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover"
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
        </div>
      </section>

      {/* ── TYPES SECTION ── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-600 font-bold uppercase tracking-widest text-xs mb-3">
              All Variants & Types
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {serviceData.label}:{" "}
              <span className="text-amber-600">Which Type Suits You?</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Not every project is the same. Choose from our complete range of{" "}
              {serviceData.label.toLowerCase()} variants — each engineered for
              specific building types, budgets, and performance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceData.types.map((type, idx) => (
              <div
                key={type.name}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-amber-300 transition-all duration-300 group"
              >
                {/* Card image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-amber-400 text-xs font-bold uppercase tracking-wider">
                    Type {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Card header */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {type.name}
                      </h3>
                      <p className="text-slate-400 text-sm mt-1">
                        {type.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 space-y-5">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {type.description}
                  </p>

                  {/* Specs */}
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Technical Specs
                    </p>
                    <div className="space-y-2">
                      {type.specs.map((spec) => (
                        <div
                          key={spec}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                          <span className="text-slate-700">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Best for */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-amber-50 rounded-xl border border-amber-100">
                    <CheckCircle2
                      size={16}
                      className="text-amber-600 shrink-0"
                    />
                    <span className="text-sm text-amber-800">
                      <span className="font-bold">Best for:</span>{" "}
                      {type.bestFor}
                    </span>
                  </div>

                  {/* CTA */}
                  <Link to="/contact">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-amber-300 text-amber-700 hover:bg-amber-50 group-hover:border-amber-500 transition-colors"
                    >
                      Get Quote for {type.name.split("(")[0].trim()}
                      <ArrowRight size={14} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison CTA */}
          <div className="mt-12 text-center p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Not sure which type you need?
            </h3>
            <p className="text-slate-500 mb-6">
              Our engineers will assess your project requirements — building
              height, wind zone, budget, and aesthetics — and recommend the
              optimal system.
            </p>
            <Link to="/contact">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-5">
                Free Engineering Consultation{" "}
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── LOCALIZED EXECUTION ZONES ── */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Localized Execution Zones
          </h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
            We provide dedicated engineering and installation teams for{" "}
            {serviceData.label.toLowerCase()} across major commercial hubs in
            Maharashtra.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {priorityHubs.map((hub) => (
              <Link
                key={hub.slug}
                to={`/facade-contractor/${slug}-${hub.slug}`}
                className="flex flex-col items-center justify-center gap-2 p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-amber-500 hover:shadow-md transition-all group"
              >
                <MapPin
                  className="text-slate-400 group-hover:text-amber-500 transition-colors"
                  size={24}
                />
                <span className="font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                  {hub.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
