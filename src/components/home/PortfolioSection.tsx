import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    slug: "ltimindtree-campus",
    title: "LTIMindtree Campus",
    location: "Navi Mumbai",
    scope: "Unitized facade + glazing",
    image: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp",
  },
  {
    slug: "embassy-247",
    title: "Embassy 247",
    location: "Mumbai",
    scope: "Glass replacement retrofit",
    image: "/Embassy.webp",
  },
  {
    slug: "salsette-27",
    title: "Salsette-27",
    location: "Byculla",
    scope: "Residential facade package",
    image: "/Salsette27.webp",
  },
];

export const PortfolioSection = () => {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Featured Projects</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Landmark deliveries with measurable impact</h2>
            <p className="text-muted-foreground">From corporate campuses to complex retrofit projects, we execute with strict QA and schedule discipline.</p>
          </div>
          <Button asChild variant="outline" className="w-fit">
            <Link to="/portfolio">
              View Full Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/project/${project.slug}`}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="aspect-[5/4] overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.scope}</p>
                <div className="flex items-center gap-1 text-sm text-foreground/80">
                  <MapPin className="h-4 w-4 text-primary" />
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
