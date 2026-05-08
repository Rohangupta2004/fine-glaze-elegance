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
    <section className="bg-background py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className={cn("max-w-3xl space-y-3 slide-up", isVisible && "visible")}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">Flagship portfolio</p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Case studies that combine aesthetics with engineering rigor</h2>
            <p className="text-muted-foreground">From business parks to premium residences, each project reflects system-level coordination and execution quality.</p>
          </div>
          <Link to="/portfolio" className={cn("slide-up", isVisible && "visible")} style={{ transitionDelay: "0.1s" }}>
            <Button variant="outline" className="group border-primary/30 hover:border-primary hover:bg-primary/5">
              View Full Portfolio
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {projects.map((project, index) => {
            const isFeatured = index === 0;
            return (
              <Link
                key={project.id}
                to={`/project/${project.slug}`}
                className={cn(
                  "group relative overflow-hidden rounded-2xl slide-up",
                  isVisible && "visible",
                  isFeatured ? "aspect-[16/10] lg:col-span-7" : "aspect-[16/11] lg:col-span-5"
                )}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/90 text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <Eye size={17} />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="mb-3 inline-block rounded-full bg-primary/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <div className="mt-2 flex items-center gap-1.5 text-sm text-white/80">
                    <MapPin size={14} />
                    {project.location}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
