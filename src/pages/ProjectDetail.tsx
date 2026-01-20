import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Award,
  CheckCircle2,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

/* -------------------- DATA -------------------- */
const projectsData = {
  "ltimindtree-campus": {
    title: "LTIMindtree Campus",
    location: "Navi Mumbai, Maharashtra",
    category: "Corporate",
    year: "2023",
    client: "LTIMindtree Ltd.",
    scope: "Unitized Curtain Wall System",
    description:
      "A landmark corporate campus featuring a state-of-the-art unitized curtain wall system with high-performance glazing. The project highlights our expertise in large-scale commercial facade execution with precision and timely delivery.",
    features: [
      "Unitized aluminium curtain wall system",
      "High-performance double glazed units",
      "Thermal break profiles",
      "Integrated sun-shading elements",
      "LEED-compliant specifications",
    ],
    images: ["/Itimindtree-mensa-campus-mahape-navi-mumbai-1 (1)-elementor-io-optimized.webp"]
  },

  "embassy-247": {
    title: "Embassy 247",
    location: "Vikhroli, Mumbai",
    category: "Award Winner",
    year: "2024",
    client: "Embassy REIT Ltd.",
    scope: "Facade Glass Replacement",
    description:
      "Complete facade glass replacement for a premium commercial tower, executed while the building remained operational. This project earned the Best Performance Vendor – 2024 award for flawless execution and safety.",
    features: [
      "Live-building glass replacement",
      "Solar control high-performance glass",
      "Structural silicone glazing",
      "Zero disruption to occupants",
      "Weather-tight installation",
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
    scope: "Structural Glazing & Glass Railings",
    description:
      "A premium residential development featuring floor-to-ceiling structural glazing and frameless glass railings, executed with high-end finishes and strict quality control.",
    features: [
      "Minimal-frame structural glazing",
      "Frameless balcony glass railings",
      "Acoustic laminated safety glass",
      "Premium fittings & hardware",
      "Precision installation",
    ],
    images: ["/Salsette27.webp"],
  },
};

/* -------------------- RELATED -------------------- */
const relatedProjects = [
  { slug: "ltimindtree-campus", title: "LTIMindtree Campus", image: "/Itimindtree-mensa-campus-mahape-navi-mumbai-1 (1)-elementor-io-optimized.w" },
  { slug: "embassy-247", title: "Embassy 247", image: "/Embassy.webp" },
  { slug: "salsette-27", title: "Salsette-27", image: "/Salsette27.webp" },
];

/* -------------------- PAGE -------------------- */
const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;

  const heroRef = useScrollAnimation();
  const detailsRef = useScrollAnimation();

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center text-center">
          <div>
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <Link to="/portfolio">
              <Button>Back to Portfolio</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const otherProjects = relatedProjects.filter(p => p.slug !== slug);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[400px]" ref={heroRef.ref}>
        <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <Link to="/portfolio" className="absolute top-24 left-6 z-10">
          <Button variant="outline" size="sm" className="bg-background/80">
            <ArrowLeft size={16} className="mr-2" />
            Back
          </Button>
        </Link>

        <div className="absolute bottom-8 left-6 right-6">
          <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm">
            {project.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-white mt-3">
            {project.title}
          </h1>

          <div className="flex items-center gap-2 text-white/80 mt-2">
            <MapPin size={16} />
            {project.location}
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="py-16" ref={detailsRef.ref}>
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">About This Project</h2>
              <p className="text-muted-foreground text-lg">{project.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.features.map((f) => (
                  <div key={f} className="flex gap-3 p-3 bg-muted rounded-lg">
                    <CheckCircle2 className="text-primary mt-0.5" size={18} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <div className="bg-card border rounded-xl p-6 space-y-5">
              <h3 className="font-semibold text-lg">Project Details</h3>

              <div className="flex gap-3">
                <Calendar className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Year</p>
                  <p className="font-medium">{project.year}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Briefcase className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Client</p>
                  <p className="font-medium">{project.client}</p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">Scope of Work</p>
                <p className="font-medium">{project.scope}</p>
              </div>
            </div>

            <Link to="/contact">
              <Button className="w-full">Get Free Quote</Button>
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
                View All <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                to={`/project/${p.slug}`}
                className="group relative aspect-[16/9] rounded-xl overflow-hidden"
              >
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
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
