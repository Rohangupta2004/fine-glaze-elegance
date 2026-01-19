import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import {
  MapPin,
  Award,
  Building2,
  Home,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* -------------------- Categories -------------------- */
const categories = [
  { id: "all", label: "All Projects", icon: Building2 },
  { id: "corporate", label: "Corporate", icon: Briefcase },
  { id: "residential", label: "Residential", icon: Home },
  { id: "award", label: "Award Winners", icon: Award },
];

/* -------------------- Projects -------------------- */
const projects = [
  {
    id: 1,
    title: "LTIMindtree Mensa Campus",
    location: "Mahape, Navi Mumbai",
    category: "corporate",
    scope: "ACP & Silicone Facade Work",
    area: "50,000 sq.ft.",
    image:
      "https://fineglaze.com/wp-content/uploads/2023/12/ltimindtree-mensa-campus-mahape-navi-mumbai.jpg.webp",
  },
  {
    id: 2,
    title: "Embassy 247",
    location: "Vikhroli, Mumbai",
    category: "award",
    scope: "Facade Glass Replacement",
    area: "75,000 sq.ft.",
    image:
      "https://fineglaze.com/wp-content/uploads/2025/01/112406.SMFG-India-Credit-Company-Limited-Formerly-Fullerton-India-Credit-Co.-Ltd.-And-Embassy-REIT-Announce-Partnership-with-194k-sf-Lease-at-Embassy-247-in-Mumbai-nnew.png",
    isAwardWinner: true,
    award: "Best Performance Vendor – 2024 (Embassy REIT)",
  },
  {
    id: 3,
    title: "Salsette-27",
    location: "Byculla, Mumbai",
    category: "residential",
    scope: "Toilet Shaft Railing & Facade Works",
    area: "30,000 sq.ft.",
    image:
      "https://fineglaze.com/wp-content/uploads/2024/05/a4ce7051-1985-4eb6-9e75-faa19ee48def-e1735930548879.jpg",
  },
  {
    id: 4,
    title: "Leela Business Park",
    location: "Andheri East, Mumbai",
    category: "corporate",
    scope: "Aluminium Louvers",
    area: "40,000 sq.ft.",
    image:
      "https://fineglaze.com/wp-content/uploads/2024/03/enhanced-image-3.png",
  },
  {
    id: 5,
    title: "Pune International Airport – New Terminal",
    location: "Pune",
    category: "corporate",
    scope: "SS Column Cladding with MS Framing",
    area: "60,000 sq.ft.",
    image:
      "https://fineglaze.com/wp-content/uploads/2024/05/IMG-20231226-WA0026.jpg",
  },
  {
    id: 6,
    title: "Jindal House – Balkeshwar 32",
    location: "Mumbai",
    category: "residential",
    scope: "SS Glass Railing",
    area: "18,000 sq.ft.",
    image:
      "https://fineglaze.com/wp-content/uploads/2023/12/02971513-7b21-4565-8759-828d4affb52d-e1702880920162.jpg",
  },
  {
    id: 7,
    title: "Nirmaann Estrellaa",
    location: "Pune",
    category: "residential",
    scope:
      "Aluminium Louvers, Fins, Windows & SS Railings (Ongoing)",
    area: "25,000 sq.ft.",
    image:
      "https://fineglaze.com/wp-content/uploads/2023/12/big2.jpg.webp",
  },
  {
    id: 8,
    title: "SSG Honesty",
    location: "Panvel",
    category: "residential",
    scope:
      "Structural Glazing, Curtain Wall, ACP & Windows",
    area: "28,000 sq.ft.",
    image:
      "https://fineglaze.com/wp-content/uploads/2023/12/0f9c4324-b83b-44b4-8612-7c797ff8ec30-e1735927974146.jpg",
  },
];

/* -------------------- Portfolio Page -------------------- */
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const heroRef = useScrollAnimation();
  const gridRef = useScrollAnimation();

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(
          (p) =>
            p.category === activeCategory ||
            (activeCategory === "award" && p.isAwardWinner)
        );

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-muted" ref={heroRef.ref}>
        <div className="container mx-auto px-4">
          <div
            className={cn(
              "max-w-3xl mx-auto text-center space-y-6 slide-up",
              heroRef.isVisible && "visible"
            )}
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Our Masterpieces
            </h1>
            <p className="text-muted-foreground text-lg">
              Landmark facade projects delivered with precision,
              safety, and excellence across India.
            </p>
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-20" ref={gridRef.ref}>
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div
            className={cn(
              "flex flex-wrap justify-center gap-3 mb-12 slide-up",
              gridRef.isVisible && "visible"
            )}
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Button
                  key={cat.id}
                  variant={
                    activeCategory === cat.id
                      ? "default"
                      : "outline"
                  }
                  className="gap-2"
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <Icon size={16} />
                  {cat.label}
                </Button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                isVisible={gridRef.isVisible}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No projects found.
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

/* -------------------- Card -------------------- */
interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
  isVisible: boolean;
}

const ProjectCard = ({
  project,
  index,
  isVisible,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl glass-card metallic-border slide-up",
        isVisible && "visible"
      )}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Award */}
      {project.isAwardWinner && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-xs font-medium">
          <Award size={14} />
          Award Winner
        </div>
      )}

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-semibold group-hover:text-primary transition">
          {project.title}
        </h3>

        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin size={14} />
          {project.location}
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <span className="px-2 py-1 text-xs rounded bg-primary/10 text-primary">
            {project.scope}
          </span>
          <span className="px-2 py-1 text-xs rounded bg-secondary">
            {project.area}
          </span>
        </div>

        {project.award && (
          <p className="text-sm font-medium text-accent pt-2">
            🏆 {project.award}
          </p>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
