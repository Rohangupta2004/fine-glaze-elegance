import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "LTIMindtree Campus",
    location: "Navi Mumbai",
    category: "Corporate",
    image: "https://fineglaze.com/wp-content/uploads/2025/01/ltimindtree-mensa-campus-mahape-navi-mumbai-1.jpg",
  },
  {
    id: 2,
    title: "Embassy 247",
    location: "Mumbai",
    category: "Award Winner",
    image: "https://fineglaze.com/wp-content/uploads/2025/01/112406.SMFG-India-Credit-Company-Limited-Formerly-Fullerton-India-Credit-Co.-Ltd.-And-Embassy-REIT-Announce-Partnership-with-194k-sf-Lease-at-Embassy-247-in-Mumbai-nnew.png",
    isAwardWinner: true,
  },
  {
    id: 3,
    title: "Salsette-27",
    location: "Byculla",
    category: "Residential",
    image: "https://fineglaze.com/wp-content/uploads/2024/05/a4ce7051-1985-4eb6-9e75-faa19ee48def-e1735930548879.jpg",
  },
];

export const PortfolioSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={cn(
            "text-center space-y-4 mb-12 slide-up",
            isVisible && "visible"
          )}
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Masterpieces
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of stunning facade projects delivered across India
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "group relative overflow-hidden rounded-xl slide-up",
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

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Award Badge */}
              {project.isAwardWinner && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                  <Award size={14} />
                  Award Winner
                </div>
              )}

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-2 py-1 rounded bg-primary/20 text-primary-foreground text-xs font-medium mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 text-primary-foreground/70 text-sm">
                  <MapPin size={14} />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link to="/portfolio">
            <Button variant="outline" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};