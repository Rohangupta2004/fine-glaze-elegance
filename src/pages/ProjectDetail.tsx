import { projectSummaries } from "@/data/projectPresentation";
import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useProject } from "@/hooks/useProjects";
import { Helmet } from "react-helmet-async";
import SEO from "@/components/SEO";

/** "Project – main scope | Fine Glaze", kept short enough to show in search results. */
const projectTitle = (title: string, scope: string) => {
  const full = `${title} – ${scope} | Fine Glaze`;
  if (full.length <= 65) return full;
  const mainScope = scope.split(/,|&| and | — | – /)[0].trim();
  return `${title} – ${mainScope} | Fine Glaze`;
};
import { MapPin, Building2, ArrowLeft, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { project, loading } = useProject(slug);

  if (loading) {
    return (
      <Layout darkHero>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary/30 border-t-primary animate-spin" />
        </div>
      </Layout>
    );
  }

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const summary = projectSummaries[project.slug] ?? project.scope;

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": summary,
    "url": `https://fineglaze.com/project/${slug}`,
    "image": {
      "@type": "ImageObject",
      "url": `https://fineglaze.com${project.image}`,
      "name": project.title,
      "description": `${project.scope} — ${project.location}`,
    },
    "dateCreated": project.year,
    "genre": project.category === "corporate" ? "Commercial Facade" : "Residential Facade",
    "locationCreated": {
      "@type": "Place",
      "name": project.location,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": project.location.split(",")[0].trim(),
        "addressCountry": "IN",
      },
    },
    "creator": {
      "@type": "Organization",
      "name": "Fine Glaze",
      "url": "https://fineglaze.com",
      "telephone": "+91-8369233566",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "A3 LW-13, Pragati Serene Building, Sr.No.2, HDFC Bank Chowk, Plot B, Autadwadi Handewadi, Mahadev Wadi, Mohammed Wadi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411060",
        "addressCountry": "IN",
      },
    },
    "client": project.client,
    "about": project.scope,
    ...(project.isAwardWinner && project.award
      ? {
          "award": project.award,
        }
      : {}),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com/" },
      { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://fineglaze.com/portfolio" },
      { "@type": "ListItem", "position": 3, "name": project.title, "item": `https://fineglaze.com/project/${slug}` },
    ],
  };

  return (
    <Layout darkHero>
      <SEO
        title={projectTitle(project.title, project.scope)}
        description={summary}
        canonical={`https://fineglaze.com/project/${slug}`}
        keywords={`${project.title}, ${project.scope}, facade contractor ${project.location}, ${project.category} facade India`}
        schema={breadcrumbSchema}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(projectSchema)}
        </script>
      </Helmet>

      {/* HERO IMAGE */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} – ${project.scope}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/40 to-night/20" />

        {/* Back button */}
        <div className="absolute top-8 left-0 right-0 container mx-auto px-4">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-paper/80 hover:text-paper text-sm font-medium transition-colors"
          >
            <ArrowLeft size={16} />
            All Projects
          </Link>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-10">
          {project.isAwardWinner && (
            <span className="inline-block mb-3 text-xs px-3 py-1 bg-lamp text-paper font-semibold">
              🏆 {project.award ?? "Award Winner"}
            </span>
          )}
          <h1 className="text-2xl md:text-4xl font-extrabold text-paper leading-tight mb-3">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-paper/80 text-sm">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} />
              {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Building2 size={14} />
              {project.client}
            </span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">

            <div>
              <p className="text-xs font-semibold text-primary mb-4">Our Contribution</p>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-5">{project.scope}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{summary}</p>
            </div>

            {project.isAwardWinner && project.award && (
              <div className="border-l-2 border-lamp/40 pl-5 py-2">
                <p className="text-xs text-muted-foreground mb-2">Client Recognition</p>
                <p className="text-lg font-semibold">{project.award}</p>
                <p className="text-sm text-muted-foreground mt-1">Awarded by Embassy REIT</p>
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24 self-start">

            {/* Project details card */}
            <div className="border border-border bg-card p-6 space-y-4">
              <h3 className="font-bold text-base">At a Glance</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-start gap-4">
                  <span className="text-muted-foreground">Client</span>
                  <span className="font-medium text-right">{project.client}</span>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium text-right">{project.location}</span>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <span className="text-muted-foreground">Status</span>
                  <span className="font-medium">{project.status}</span>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-medium capitalize">{project.category}</span>
                </div>
                {project.isAwardWinner && (
                  <div className="flex justify-between items-start gap-4 pt-2 border-t border-border">
                    <span className="text-muted-foreground">Award</span>
                    <span className="font-medium text-lamp text-right text-xs">{project.award}</span>
                  </div>
                )}
              </div>
            </div>

            {/* CTA card */}
            <div
              className="p-6 space-y-4 text-paper"
              style={{
                background: "linear-gradient(135deg, hsl(25 80% 25%) 0%, hsl(20 75% 18%) 100%)",
              }}
            >
              <h3 className="font-bold text-base">Discuss Your Project</h3>
              <p className="text-paper/75 text-sm leading-relaxed">
                Speak with our team about the right facade solution for your building.
              </p>
              <div className="space-y-2">
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-night text-primary hover:bg-night/90 font-semibold"
                >
                  <a
                    href="https://wa.me/918369233566?text=Hello%20Fine%20Glaze%2C%20I%20saw%20your%20project%20portfolio%20and%20would%20like%20to%20discuss%20a%20similar%20facade%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a call
                    <ArrowRight size={14} className="ml-1.5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="w-full bg-transparent border-paper/30 text-paper hover:bg-paper/10 hover:text-paper"
                >
                  <a href="tel:+918369233566">
                    <Phone size={13} className="mr-1.5" />
                    +91 8369 233 566
                  </a>
                </Button>
              </div>
            </div>

            {/* Back to portfolio */}
            <Link
              to="/portfolio"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={14} />
              Back to all projects
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
