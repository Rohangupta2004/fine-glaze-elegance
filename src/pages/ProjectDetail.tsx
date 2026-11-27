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
import { CTASection } from "@/components/home/CTASection";
import { Prose, Pull, Sec } from "@/components/common/Sheet";
import { TitleBlock } from "@/components/common/Drawing";
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
          <p className="sx-note">Loading project record.</p>
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

      <Sec no="01" label="Project record" title={project.scope} sheetLabel="Project record">
        <div className="sx-split">
          <div>
            <Prose>
              <p>{summary}</p>
            </Prose>
            {project.isAwardWinner && project.award && (
              <div style={{ marginTop: 28 }}>
                <Pull label="Client recognition">
                  {project.award}
                  <span style={{ display: "block", marginTop: 6, fontSize: 15, fontWeight: 400, color: "#555b62" }}>Awarded by Embassy REIT</span>
                </Pull>
              </div>
            )}
          </div>
          <div className="sx-side">
            <TitleBlock
              className="sx-pd-tb"
              rows={[
                ["PROJECT", project.title],
                ["LOCATION", project.location],
                ["CLIENT", project.client || "Not listed"],
                ["SCOPE", project.scope],
                ["STATUS", project.status === "Completed" && project.year ? `Completed ${project.year}` : project.status || "Not listed"],
                ["CATEGORY", project.category],
                ...(project.isAwardWinner && project.award ? ([["AWARD", project.award]] as Array<[string, string]>) : []),
              ]}
            />
            <p className="sx-more" style={{ margin: 0 }}>
              <CallNow className="fg-btn" number />
            </p>
          </div>
        </div>
      </Sec>

      {photos.length > 1 && (
        <Sec no="02" label="Photographs" title="Photographs of the works." sheetLabel="Photographs" dim={`${photos.length} photographs`}>
          <ProjectCarousel title={project.title} location={project.location} images={photos} />
        </Sec>
      )}

      <RelatedProjects no={photos.length > 1 ? "03" : "02"} heading="More Fine Glaze projects" excludeSlugs={[project.slug]} preferCategory={project.category} limit={4} />
      <CTASection />
    </Layout>
  );
};

export default ProjectDetail;
