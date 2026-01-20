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
    image: "/Itimindtree-mensa-campus-mahape-navi-mumbai-1 (1)-elementor-io-optimized.w",
  },
  {
    id: 2,
    title: "Embassy 247",
    location: "Vikhroli, Mumbai",
    category: "award",
    scope: "Facade Glass Replacement",
    image: "/Embassy.webp",
    isAwardWinner: true,
    award: "Best Performance Vendor – 2024 (Embassy REIT)",
  },
  {
    id: 3,
    title: "Salsette-27",
    location: "Byculla, Mumbai",
    category: "residential",
    scope: "Toilet Shaft Railing & Facade Works",
    image: "/Salsette27.webp",
  },
  {
    id: 4,
    title: "Leela Business Park",
    location: "Andheri East, Mumbai",
    category: "corporate",
    scope: "Aluminium Louvers",
    image: "/Business park.webp",
  },
  {
    id: 5,
    title: "Pune International Airport – New Terminal",
    location: "Pune",
    category: "corporate",
    scope: "SS Column Cladding & MS Framing",
    image: "/Puneairport.webp",
  },
  {
    id: 6,
    title: "Jindal House – Balkeshwar 32",
    location: "Mumbai",
    category: "residential",
    scope: "SS Glass Railing",
    image: "/Jindal house.webp",
  },
  {
    id: 7,
    title: "Nirmaann Estrellaa",
    location: "Pune",
    category: "residential",
    scope: "Aluminium Louvers, Windows & SS Railings",
    image: "/Nirmann.webp",
  },
  {
    id: 8,
    title: "SSG Honesty",
    location: "Panvel",
    category: "residential",
    scope: "Structural Glazing, Curtain Wall & ACP",
    image: "/Pan.webp",
  },
  {
    id: 9,
    title: "Leela Hotel",
    location: "Andheri East, Mumbai",
    category: "corporate",
    scope: "Openable Windows & Laundry Area Works",
    image: "/Hotel.webp",
  },
  {
    id: 10,
    title: "Embassy Techzone",
    location: "Hinjewadi, Pune",
    category: "corporate",
    scope: "Facade Maintenance Works",
    image: "/Embassyoark.webp",
  },
];
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
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Portfolio
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Landmark facade projects delivered with precision and excellence.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-20" ref={gridRef.ref}>
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Button
                  key={cat.id}
                  variant={
                    activeCategory === cat.id ? "default" : "outline"
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
              <div
                key={project.id}
                className="group overflow-hidden rounded-xl glass-card metallic-border"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition"
                  />
                </div>

                {project.isAwardWinner && (
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-accent text-xs font-medium">
                    🏆 Award Winner
                  </div>
                )}

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin size={14} />
                    {project.location}
                  </div>

                  <span className="inline-block px-2 py-1 text-xs rounded bg-primary/10 text-primary">
                    {project.scope}
                  </span>

                  {project.award && (
                    <p className="text-sm font-medium text-accent pt-2">
                      🏆 {project.award}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
      
