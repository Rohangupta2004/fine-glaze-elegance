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
    image: "https://fineglaze.com/wp-content/uploads/2025/01/ltimindtree-mensa-campus-mahape-navi-mumbai-1.jpg",
  },
  {
    id: 2,
    slug: "embassy-247",
    title: "Embassy 247",
    location: "Mumbai",
    category: "Award Winner",
    image: "https://fineglaze.com/wp-content/uploads/2025/01/112406.SMFG-India-Credit-Company-Limited-Formerly-Fullerton-India-Credit-Co.-Ltd.-And-Embassy-REIT-Announce-Partnership-with-194k-sf-Lease-at-Embassy-247-in-Mumbai-nnew.png",
  },
  {
    id: 3,
    slug: "salsette-27",
    title: "Salsette-27",
    location: "Byculla",
    category: "Residential",
    image: "https://fineglaze.com/wp-content/uploads/2024/05/a4ce7051-1985-4eb6-9e75-faa19ee48def-e1735930548879.jpg",
  },
];

export const PortfolioSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div
            className={cn(
              "space-y-2 slide-up",
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
            <Button variant="outline" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Projects Grid - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* View Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/80 text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Eye size={18} />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-primary/30 text-primary-foreground mb-2">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-primary-foreground mb-1">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1 text-primary-foreground/70 text-sm">
                  <MapPin size={12} />
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