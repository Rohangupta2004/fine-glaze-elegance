import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { useProjects } from "@/hooks/useProjects";

export const PortfolioSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { projects } = useProjects();

  // Show first 3 projects (sorted by sort_order from Supabase, or static order)
  const featured = projects.slice(0, 3);

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div
            className={cn(
              "space-y-3 slide-up",
              isVisible && "visible"
            )}
          >
            <span className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase">
              Featured Work
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-900">
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
            <Button variant="outline" className="group border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200">
          {featured.map((project, index) => (
            <Link
              key={project.slug}
              to={`/project/${project.slug}`}
              className={cn(
                "group relative overflow-hidden aspect-[4/3] slide-up",
                isVisible && "visible"
              )}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading={index === 0 ? "eager" : "lazy"}
                width="800"
                height="600"
              />

              {/* Overlay */}
              <div 
                className="absolute inset-0 opacity-70 group-hover:opacity-85 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to top, hsl(25 40% 12% / 0.95) 0%, hsl(25 30% 20% / 0.4) 50%, transparent 100%)"
                }}
              />

              {/* View Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-stone-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Eye size={18} />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-amber-500/30 text-white mb-3">
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
