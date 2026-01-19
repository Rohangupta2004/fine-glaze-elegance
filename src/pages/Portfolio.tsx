import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { MapPin, Award, Building2, Home, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", label: "All Projects", icon: Building2 },
  { id: "corporate", label: "Corporate", icon: Briefcase },
  { id: "residential", label: "Residential", icon: Home },
  { id: "award", label: "Award Winners", icon: Award },
];

const projects = [
  {
    id: 1,
    title: "LTIMindtree Campus",
    location: "Navi Mumbai",
    category: "corporate",
    scope: "Curtain Wall System",
    area: "50,000 sq.ft.",
    image: "https://fineglaze.com/wp-content/uploads/2025/01/ltimindtree-mensa-campus-mahape-navi-mumbai-1.jpg",
  },
  {
    id: 2,
    title: "Embassy 247",
    location: "Mumbai",
    category: "award",
    scope: "Facade Glass Replacement",
    area: "75,000 sq.ft.",
    image: "https://fineglaze.com/wp-content/uploads/2025/01/112406.SMFG-India-Credit-Company-Limited-Formerly-Fullerton-India-Credit-Co.-Ltd.-And-Embassy-REIT-Announce-Partnership-with-194k-sf-Lease-at-Embassy-247-in-Mumbai-nnew.png",
    isAwardWinner: true,
    award: "Best Performance Vendor 2024",
  },
  {
    id: 3,
    title: "Salsette-27",
    location: "Byculla, Mumbai",
    category: "residential",
    scope: "Structural Glazing",
    area: "30,000 sq.ft.",
    image: "https://fineglaze.com/wp-content/uploads/2024/05/a4ce7051-1985-4eb6-9e75-faa19ee48def-e1735930548879.jpg",
  },
  {
    id: 4,
    title: "ICICI Prudential Tower",
    location: "Mumbai",
    category: "corporate",
    scope: "Unitized Curtain Wall",
    area: "45,000 sq.ft.",
    image: "https://fineglaze.com/wp-content/uploads/2025/01/ltimindtree-mensa-campus-mahape-navi-mumbai-1.jpg",
  },
  {
    id: 5,
    title: "Edelweiss Financial Center",
    location: "Mumbai",
    category: "corporate",
    scope: "Spider Glazing System",
    area: "35,000 sq.ft.",
    image: "https://fineglaze.com/wp-content/uploads/2025/01/112406.SMFG-India-Credit-Company-Limited-Formerly-Fullerton-India-Credit-Co.-Ltd.-And-Embassy-REIT-Announce-Partnership-with-194k-sf-Lease-at-Embassy-247-in-Mumbai-nnew.png",
  },
  {
    id: 6,
    title: "Premium Residences",
    location: "Pune",
    category: "residential",
    scope: "Glass Railings & Facades",
    area: "20,000 sq.ft.",
    image: "https://fineglaze.com/wp-content/uploads/2024/05/a4ce7051-1985-4eb6-9e75-faa19ee48def-e1735930548879.jpg",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const heroRef = useScrollAnimation();
  const gridRef = useScrollAnimation();

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Masterpieces
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our collection of stunning facade projects delivered
              across India. Each project reflects our commitment to precision,
              quality, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-20 bg-background" ref={gridRef.ref}>
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div
            className={cn(
              "flex flex-wrap justify-center gap-3 mb-12 slide-up",
              gridRef.isVisible && "visible"
            )}
          >
            {categories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={cn(
                    "gap-2",
                    activeCategory === category.id &&
                      "btn-glossy text-primary-foreground border-0"
                  )}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <CategoryIcon size={16} />
                  {category.label}
                </Button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isVisible={gridRef.isVisible}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
  isVisible: boolean;
}

const ProjectCard = ({ project, index, isVisible }: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl glass-card metallic-border slide-up",
        isVisible && "visible"
      )}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Award Badge */}
      {project.isAwardWinner && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium">
          <Award size={14} />
          Award Winner
        </div>
      )}

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
          <MapPin size={14} />
          {project.location}
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium">
            {project.scope}
          </span>
          <span className="px-2 py-1 rounded bg-secondary text-secondary-foreground text-xs">
            {project.area}
          </span>
        </div>

        {project.isAwardWinner && project.award && (
          <p className="text-sm text-accent font-medium pt-2">
            🏆 {project.award}
          </p>
        )}
      </div>
    </div>
  );
};

export default Portfolio;