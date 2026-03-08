import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
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
    image: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp",
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
    <section className="bg-transparent" ref={ref}>
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className={cn("space-y-3 slide-up", isVisible && "visible")}>
            <span className="section-heading">Featured Work</span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-[0.16em] text-white">
              Signature Projects
            </h2>
          </div>
          <Link to="/portfolio" className={cn("slide-up", isVisible && "visible")}>
            <Button variant="outline" className="group">
              View All Projects
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.slug}`}
              className={cn(
                "group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10 slide-up",
                isVisible && "visible",
              )}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 group-hover:from-black/90 transition-colors duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.12em] bg-white/15 text-white mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold uppercase tracking-[0.08em] text-white mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 text-white/75 text-sm">
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
