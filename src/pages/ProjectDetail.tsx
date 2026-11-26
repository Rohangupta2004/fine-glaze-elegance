import { projectSummaries } from "@/data/projectPresentation";
import CallNow from "@/components/common/CallNow";
import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useProject } from "@/hooks/useProjects";
import { Helmet } from "react-helmet-async";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { RelatedProjects } from "@/components/RelatedProjects";
import projectPhotos from "@/data/projectPhotos.json";

/** "Project – main scope | Fine Glaze", kept short enough to show in search results. */
const projectTitle = (title: string, scope: string) => {
  const full = `${title} – ${scope} | Fine Glaze`;
  if (full.length <= 65) return full;
  const mainScope = scope.split(/,|&| and | — | – /)[0].trim();
  return `${title} – ${mainScope} | Fine Glaze`;
};

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
  // every photograph of this project, once each; the curated list first, then anything only the record has
  const curated = (projectPhotos as Record<string, string[]>)[project.slug] ?? [];
  const photos = Array.from(new Set([...curated, project.image, ...project.gallery].filter(Boolean)));

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
    "dateCreated": project.year || undefined,
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
    "client": project.client || undefined,
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

      <PageHero
        crumbs={[{ label: "Projects", to: "/portfolio" }, { label: project.title }]}
        title={project.title}
        intro={project.client ? `${project.location}. ${project.client}.` : `${project.location}.`}
        image={{ src: project.image, alt: `${project.title} – ${project.scope}` }}
        secondary={{ label: "All projects", to: "/portfolio" }}
        extra={project.isAwardWinner ? project.award ?? "Award winner" : undefined}
        source="project_hero"
      />

      {photos.length > 1 && (
        <section className="fg-sec">
          <div className="fg-wrap">
            <ProjectCarousel title={project.title} location={project.location} images={photos} />
          </div>
        </section>
      )}

      <section className="fg-sec">
        <div className="fg-wrap">
          <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-12 lg:gap-0 items-start">
            <div className="lg:pr-16 space-y-10">
              <div>
                <p className="text-[15px] text-mute mb-4">Our contribution</p>
                <h2 className="font-display font-medium text-3xl md:text-5xl leading-[1.05] tracking-[-0.015em] mb-6">{project.scope}</h2>
                <p className="text-mute leading-relaxed text-lg max-w-[68ch]">{summary}</p>
              </div>

              {project.isAwardWinner && project.award && (
                <div className="border-l border-line pl-6 py-1">
                  <p className="text-[15px] text-mute mb-2">Client recognition</p>
                  <p className="text-xl font-semibold">{project.award}</p>
                  <p className="text-[15px] text-mute mt-1">Awarded by Embassy REIT</p>
                </div>
              )}
            </div>

            <aside className="lg:border-l border-line lg:pl-10 space-y-10 lg:sticky lg:top-28 self-start">
              <div>
                <h3 className="text-xl font-medium tracking-[-0.015em] mb-4">At a glance</h3>
                <dl className="border-t border-line text-[15.5px]">
                  {[
                    ...(project.client ? [["Client", project.client]] : []),
                    ["Location", project.location],
                    ["Status", project.status],
                    ["Category", project.category],
                    ...(project.isAwardWinner ? [["Award", project.award]] : []),
                  ].map(([k, v]) => (
                    <div key={k} className="grid grid-cols-[96px_minmax(0,1fr)] gap-4 py-3 border-b border-line">
                      <dt className="text-mute">{k}</dt>
                      <dd className="capitalize-first">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <h3 className="text-xl font-medium tracking-[-0.015em] mb-3">Discuss your project</h3>
                <p className="text-[15.5px] text-mute leading-relaxed mb-5">
                  Speak with our team about the right facade solution for your building.
                </p>
                <CallNow className="fg-btn" number />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <RelatedProjects heading="More Fine Glaze projects" excludeSlugs={[project.slug]} preferCategory={project.category} limit={4} />
    </Layout>
  );
};

export default ProjectDetail;
