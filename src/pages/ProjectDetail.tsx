import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { projectsData } from "@/data/projects";
import { Helmet } from "react-helmet-async";
import SEO from "@/components/SEO";
import { MapPin, Calendar, Building2, ArrowLeft, CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
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
        "streetAddress": "Shop No. 1 & 2, Ghule Premises, Jagdamb Bhavan Road, Undri",
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
    <Layout>
      <SEO
        title={`${project.title} – ${project.scope} | Fine Glaze`}
        description={`${project.description.slice(0, 155)}...`}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* Back button */}
        <div className="absolute top-8 left-0 right-0 container mx-auto px-4">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
          >
            <ArrowLeft size={16} />
            All Projects
          </Link>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-10">
          {project.isAwardWinner && (
            <span className="inline-block mb-3 text-xs px-3 py-1 rounded-full bg-amber-400 text-black font-semibold">
              🏆 {project.award ?? "Award Winner"}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-3">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-white/80 text-sm">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} />
              {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {project.year}
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

            {/* Scope badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
              {project.scope}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                {project.description}
              </p>
            </div>

            {/* Challenge */}
            <div className="p-6 rounded-2xl bg-muted/50 border border-border">
              <h3 className="font-bold text-lg mb-3 text-foreground">The Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Outcome */}
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <h3 className="font-bold text-lg mb-3 text-primary">Outcome</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.outcome}
              </p>
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="font-bold text-xl mb-5">Scope & Features</h3>
                <ul className="space-y-3">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div>
                <h3 className="font-bold text-xl mb-5">Project Gallery</h3>
                <div className="grid grid-cols-2 gap-3">
                  {project.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden rounded-xl aspect-[4/3] bg-muted"
                    >
                      <img
                        src={img}
                        alt={`${project.title} – site photo ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Project details card */}
            <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
              <h3 className="font-bold text-base">Project Details</h3>
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
                  <span className="text-muted-foreground">Year</span>
                  <span className="font-medium">{project.year}</span>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <span className="text-muted-foreground">Scope</span>
                  <span className="font-medium text-right">{project.scope}</span>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-medium capitalize">{project.category}</span>
                </div>
                {project.isAwardWinner && (
                  <div className="flex justify-between items-start gap-4 pt-2 border-t border-border">
                    <span className="text-muted-foreground">Award</span>
                    <span className="font-medium text-amber-600 text-right text-xs">{project.award}</span>
                  </div>
                )}
              </div>
            </div>

            {/* CTA card */}
            <div
              className="rounded-2xl p-6 space-y-4 text-white"
              style={{
                background: "linear-gradient(135deg, hsl(25 80% 25%) 0%, hsl(20 75% 18%) 100%)",
              }}
            >
              <h3 className="font-bold text-base">Have a similar project?</h3>
              <p className="text-white/75 text-sm leading-relaxed">
                Get a free site visit and detailed quotation for your facade project.
              </p>
              <div className="space-y-2">
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
                >
                  <a
                    href="https://wa.me/918369233566?text=Hello%20Fine%20Glaze%2C%20I%20saw%20your%20project%20portfolio%20and%20would%20like%20to%20discuss%20a%20similar%20facade%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Free Quote
                    <ArrowRight size={14} className="ml-1.5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white/10"
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
