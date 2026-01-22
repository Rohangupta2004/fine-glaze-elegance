import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/* ================= PROJECT DATA ================= */
const projectsData = {
  "ltimindtree-campus": {
    title: "LTIMindtree Mensa Campus",
    location: "Mahape, Navi Mumbai",
    category: "Corporate",
    year: "2023",
    client: "LTIMindtree Ltd.",
    scope: "ACP & Silicone Facade Work",
    description:
      "Large-scale corporate campus executed with precision facade engineering and premium aluminium systems.",
    features: [
      "ACP facade system",
      "Structural silicone glazing",
      "High wind-load design",
      "Premium sealants",
    ],
    images: [
      "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1)-elementor-io-optimized.webp",
    ],
  },

  "embassy-247": {
    title: "Embassy 247",
    location: "Vikhroli, Mumbai",
    category: "Award Winner",
    year: "2024",
    client: "Embassy REIT",
    scope: "Facade Glass Replacement",
    description:
      "Live-building facade glass replacement executed with zero disruption, earning Best Performance Vendor 2024.",
    features: [
      "Live operational replacement",
      "Solar control glass",
      "Zero disruption execution",
      "Safety-first methodology",
    ],
    images: ["/Embassy.webp"],
    isAwardWinner: true,
    award: "Best Performance Vendor – 2024",
  },

  "salsette-27": {
    title: "Salsette-27",
    location: "Byculla, Mumbai",
    category: "Residential",
    year: "2023",
    client: "Private Developer",
    scope: "Toilet Shaft Railing & Facade Works",
    description:
      "Premium residential facade and railing works with high-quality finishes.",
    features: [
      "SS glass railings",
      "Structural glazing",
      "Corrosion-resistant fittings",
    ],
    images: ["/Salsette27.webp"],
  },

  "leela-business-park": {
    title: "Leela Business Park",
    location: "Andheri East, Mumbai",
    category: "Corporate",
    year: "2022",
    client: "Leela Group",
    scope: "Aluminium Louvers",
    description:
      "Architectural aluminium louvers enhancing facade aesthetics and solar control.",
    features: [
      "Custom aluminium louvers",
      "Powder-coated finish",
      "High wind resistance",
    ],
    images: ["/Business park.webp"],
  },

  "pune-airport-terminal": {
    title: "Pune International Airport – New Terminal",
    location: "Pune",
    category: "Corporate",
    year: "2023",
    client: "AAI",
    scope: "SS Column Cladding & MS Framing",
    description:
      "Heavy-duty stainless steel cladding and framing works for airport infrastructure.",
    features: [
      "SS column cladding",
      "MS structural framing",
      "Airport-grade finish",
    ],
    images: ["/Puneairport.webp"],
  },

  "jindal-house": {
    title: "Jindal House – Balkeshwar 32",
    location: "Mumbai",
    category: "Residential",
    year: "2022",
    client: "Jindal Group",
    scope: "SS Glass Railing",
    description:
      "Luxury residential glass railing systems with premium detailing.",
    features: ["SS handrails", "Laminated safety glass"],
    images: ["/Jindal house.webp"],
  },

  "nirmaann-estrellaa": {
    title: "Nirmaann Estrellaa",
    location: "Pune",
    category: "Residential",
    year: "2023",
    client: "Nirmaann Developers",
    scope: "Aluminium Louvers, Windows & SS Railings",
    description:
      "Complete facade and railing package for a premium residential project.",
    features: [
      "Aluminium windows",
      "Architectural louvers",
      "SS railings",
    ],
    images: ["/Nirmann.webp"],
  },

  "ssg-honesty": {
    title: "SSG Honesty",
    location: "Panvel",
    category: "Residential",
    year: "2022",
    client: "SSG Group",
    scope: "Structural Glazing, Curtain Wall & ACP",
    description:
      "Modern residential facade with glazing, curtain wall and ACP systems.",
    features: [
      "Curtain wall system",
      "ACP cladding",
      "Structural glazing",
    ],
    images: ["/Pan.webp"],
  },

  "leela-hotel": {
    title: "Leela Hotel",
    location: "Andheri East, Mumbai",
    category: "Corporate",
    year: "2021",
    client: "Leela Group",
    scope: "Openable Windows & Laundry Area Works",
    description:
      "Hotel-grade aluminium window systems with durability and acoustic control.",
    features: [
      "Openable window systems",
      "Waterproof detailing",
    ],
    images: ["/Hotel.webp"],
  },

  "embassy-techzone": {
    title: "Embassy Techzone",
    location: "Hinjewadi, Pune",
    category: "Corporate",
    year: "2024",
    client: "Embassy Group",
    scope: "Facade Maintenance Works",
    description:
      "Facade maintenance ensuring safety, longevity and visual quality.",
    features: [
      "Facade inspection",
      "Glass replacement",
      "Sealant renewal",
    ],
    images: ["/Embassyoark.webp"],
  },
};

/* ================= PAGE ================= */
const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;

  const heroRef = useScrollAnimation();
  const detailsRef = useScrollAnimation();

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <Link to="/portfolio">
            <Button>Back to Portfolio</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedProjects = Object.entries(projectsData)
    .filter(([key]) => key !== slug)
    .slice(0, 2)
    .map(([key, value]) => ({
      slug: key,
      title: value.title,
      image: value.images[0],
    }));

  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-[60vh]" ref={heroRef.ref}>
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <Link to="/portfolio" className="absolute top-24 left-6 z-10">
          <Button variant="outline" size="sm">
            <ArrowLeft size={16} className="mr-2" /> Back
          </Button>
        </Link>

        <div className="absolute bottom-8 left-6">
          <span className="px-3 py-1 rounded-full bg-primary text-white text-sm">
            {project.category}
          </span>
          <h1 className="text-4xl font-bold text-white mt-3">
            {project.title}
          </h1>
          <div className="flex items-center gap-2 text-white/80 mt-2">
            <MapPin size={16} /> {project.location}
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="py-16" ref={detailsRef.ref}>
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg text-muted-foreground">
              {project.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {project.features.map((f) => (
                <div
                  key={f}
                  className="flex gap-3 p-3 bg-muted rounded-lg"
                >
                  <CheckCircle2 className="text-primary" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border rounded-xl p-6 space-y-4">
            <div className="flex gap-3">
              <Calendar className="text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Year</p>
                <p>{project.year}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Briefcase className="text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Client</p>
                <p>{project.client}</p>
              </div>
            </div>

            <div className="pt-3 border-t">
              <p className="text-sm text-muted-foreground">Scope</p>
              <p>{project.scope}</p>
            </div>

            <Link to="/contact">
              <Button className="w-full mt-4">Get Free Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-bold">More Projects</h2>
            <Link to="/portfolio">
              <Button variant="ghost">
                View All <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {relatedProjects.map((p) => (
              <Link
                key={p.slug}
                to={`/project/${p.slug}`}
                className="group relative aspect-[16/9] rounded-xl overflow-hidden"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />
                <div className="absolute inset-0 bg-black/60" />
                <h3 className="absolute bottom-4 left-4 text-white text-xl">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
