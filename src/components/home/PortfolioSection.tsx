import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    slug: "ltimindtree-campus",
    title: "LTIMindtree Campus",
    location: "Navi Mumbai",
    category: "Corporate",
    image: "/public/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp",
  },
  {
    id: 2,
    slug: "embassy-247",
    title: "Embassy 247",
    location: "Mumbai",
    category: "Award Winner",
    image: "/Embassy.webp",
  },
  {
    id: 3,
    slug: "salsette-27",
    title: "Salsette-27",
    location: "Byculla",
    category: "Residential",
    image: "/Salsette27.webp",
  },
];

export const PortfolioSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div
            className={cn(
              "space-y-3 slide-up",
              isVisible && "visible"
            )}
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Featured Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Recent Projects
            </h2>
          </div>
          <Link
            to="/portfolio"
            className={cn(
              "slide-up",
              isVisible && "visible"
            )}
            style={{ transitionDelay: "0.1s" }}
          >
            <Button variant="outline" className="group border-primary/30 hover:border-primary hover:bg-primary/5">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.slug}`}
              className={cn(
                "group relative overflow-hidden rounded-xl aspect-[4/3] slide-up",
                isVisible && "visible"
              )}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay - Warm brown gradient */}
              <div 
                className="absolute inset-0 opacity-70 group-hover:opacity-85 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to top, hsl(25 40% 12% / 0.95) 0%, hsl(25 30% 20% / 0.4) 50%, transparent 100%)"
                }}
              />

              {/* View Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Eye size={18} />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/40 text-white mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 text-white/80 text-sm">
                  <MapPin size={14} />
                  {project.location}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
