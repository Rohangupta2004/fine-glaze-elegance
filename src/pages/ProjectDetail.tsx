import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, Ruler, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const projectsData = {
  "ltimindtree-campus": {
    id: 1,
    title: "LTIMindtree Campus",
    location: "Navi Mumbai, Maharashtra",
    category: "Corporate",
    year: "2023",
    area: "50,000 sq.ft.",
    client: "LTIMindtree Ltd.",
    scope: "Unitized Curtain Wall System",
    description: "A landmark corporate campus featuring state-of-the-art unitized curtain wall system with high-performance glazing. The project showcases our expertise in large-scale commercial facade solutions with impeccable attention to detail and timely delivery.",
    features: [
      "Unitized aluminum curtain wall system",
      "High-performance double glazed units",
      "Thermal break profiles for energy efficiency",
      "Integrated sun shading system",
      "LEED compliant specifications",
    ],
    images: [
      "https://fineglaze.com/wp-content/uploads/2025/01/ltimindtree-mensa-campus-mahape-navi-mumbai-1.jpg",
    ],
  },
  "embassy-247": {
    id: 2,
    title: "Embassy 247",
    location: "Vikhroli, Mumbai",
    category: "Award Winner",
    year: "2024",
    area: "75,000 sq.ft.",
    client: "Embassy REIT Ltd.",
    scope: "Facade Glass Replacement",
    description: "Complete facade glass replacement for this prestigious commercial tower. This project earned us the 'Best Performance Vendor 2024' award from Embassy REIT for exceptional quality and execution. The seamless replacement was completed while the building remained operational.",
    features: [
      "Complete glass replacement without disruption",
      "High-performance solar control glass",
      "Structural silicone glazing system",
      "Weather-tight installation",
      "Minimal occupant disturbance",
    ],
    images: [
      "https://fineglaze.com/wp-content/uploads/2025/01/112406.SMFG-India-Credit-Company-Limited-Formerly-Fullerton-India-Credit-Co.-Ltd.-And-Embassy-REIT-Announce-Partnership-with-194k-sf-Lease-at-Embassy-247-in-Mumbai-nnew.png",
    ],
    isAwardWinner: true,
    award: "Best Performance Vendor 2024",
  },
  "salsette-27": {
    id: 3,
    title: "Salsette-27",
    location: "Byculla, Mumbai",
    category: "Residential",
    year: "2023",
    area: "30,000 sq.ft.",
    client: "Private Developer",
    scope: "Structural Glazing & Railings",
    description: "An ultra-luxury residential tower featuring floor-to-ceiling structural glazing and premium glass railings. The project demanded meticulous craftsmanship to meet the exacting standards of high-end residential construction.",
    features: [
      "Structural glazing with minimal frames",
      "Frameless glass balcony railings",
      "Acoustic laminated glass",
      "Anti-reflective coating options",
      "Premium hardware and fittings",
    ],
    images: [
      "https://fineglaze.com/wp-content/uploads/2024/05/a4ce7051-1985-4eb6-9e75-faa19ee48def-e1735930548879.jpg",
    ],
  },
};

const relatedProjects = [
  { slug: "ltimindtree-campus", title: "LTIMindtree Campus", image: "https://fineglaze.com/wp-content/uploads/2025/01/ltimindtree-mensa-campus-mahape-navi-mumbai-1.jpg" },
  { slug: "embassy-247", title: "Embassy 247", image: "https://fineglaze.com/wp-content/uploads/2025/01/112406.SMFG-India-Credit-Company-Limited-Formerly-Fullerton-India-Credit-Co.-Ltd.-And-Embassy-REIT-Announce-Partnership-with-194k-sf-Lease-at-Embassy-247-in-Mumbai-nnew.png" },
  { slug: "salsette-27", title: "Salsette-27", image: "https://fineglaze.com/wp-content/uploads/2024/05/a4ce7051-1985-4eb6-9e75-faa19ee48def-e1735930548879.jpg" },
];

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;
  const heroRef = useScrollAnimation();
  const detailsRef = useScrollAnimation();

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-foreground">Project Not Found</h1>
            <Link to="/portfolio">
              <Button>View All Projects</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const otherProjects = relatedProjects.filter(p => p.slug !== slug);

  return (
    <Layout>
      {/* Hero Image */}
      <section className="relative h-[60vh] min-h-[400px]" ref={heroRef.ref}>
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        
        {/* Back Button */}
        <Link
          to="/portfolio"
          className="absolute top-24 left-4 md:left-8 z-10"
        >
          <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm">
            <ArrowLeft size={16} className="mr-2" />
            Back to Portfolio
          </Button>
        </Link>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                {project.category}
              </span>
              {"isAwardWinner" in project && project.isAwardWinner && (
                <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium flex items-center gap-1">
                  <Award size={14} />
                  {("award" in project ? String(project.award) : "")}
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-2">
              {project.title}
            </h1>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <MapPin size={16} />
              {project.location}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-background" ref={detailsRef.ref}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className={cn("lg:col-span-2 space-y-8 slide-up", detailsRef.isVisible && "visible")}>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">About This Project</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                      <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div
              className={cn("space-y-6 slide-up", detailsRef.isVisible && "visible")}
              style={{ transitionDelay: "0.1s" }}
            >
              {/* Project Info Card */}
              <div className="bg-card border border-border rounded-xl p-6 space-y-5">
                <h3 className="text-lg font-semibold text-foreground">Project Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Year</p>
                      <p className="font-medium text-foreground">{project.year}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Ruler size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Area Covered</p>
                      <p className="font-medium text-foreground">{project.area}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">{project.location}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-1">Scope of Work</p>
                  <p className="font-medium text-foreground">{project.scope}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary rounded-xl p-6 text-center space-y-4">
                <h3 className="text-lg font-semibold text-primary-foreground">
                  Have a Similar Project?
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  Let's discuss how we can help bring your vision to life.
                </p>
                <Link to="/contact" className="block">
                  <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">More Projects</h2>
            <Link to="/portfolio">
              <Button variant="ghost" className="group">
                View All
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((item) => (
              <Link
                key={item.slug}
                to={`/project/${item.slug}`}
                className="group relative overflow-hidden rounded-xl aspect-[16/9]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-primary-foreground group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;