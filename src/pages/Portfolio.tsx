import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { projectsData } from "@/data/projects";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";

const projects = Object.entries(projectsData).map(([slug, p]) => ({
  slug,
  ...p,
}));

const tabs = [
  { id: "all", label: "All" },
  { id: "corporate", label: "Corporate" },
  { id: "residential", label: "Residential" },
  { id: "award", label: "Awards" },
];

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Fine Glaze Project Portfolio",
  "description": "Award-winning facade projects delivered across Maharashtra — curtain walls, structural glazing, ACP cladding, and glass railings.",
  "url": "https://fineglaze.com/portfolio",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Fine Glaze",
    "url": "https://fineglaze.com",
    "telephone": "+91-8369233566",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 1 & 2, Ghule Premises, Jagdamb Bhavan Road, Undri",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411060",
      "addressCountry": "IN"
    }
  },
  "hasPart": projects.map((p) => ({
    "@type": "CreativeWork",
    "name": p.title,
    "description": p.scope,
    "locationCreated": {
      "@type": "Place",
      "name": p.location
    },
    "dateCreated": p.year,
    "creator": {
      "@type": "Organization",
      "name": "Fine Glaze"
    },
    "url": `https://fineglaze.com/project/${p.slug}`,
    "image": `https://fineglaze.com${p.image}`,
    "genre": p.category === "corporate" ? "Commercial Facade" : p.category === "residential" ? "Residential Facade" : "Award-Winning Facade",
  }))
};

const Portfolio = () => {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter(
          (p) =>
            p.category === active ||
            (active === "award" && p.isAwardWinner)
        );

  return (
    <Layout>
      <SEO
        title="Facade Projects Portfolio – LTIMindtree, Embassy, Pune Airport | Fine Glaze"
        description="Explore Fine Glaze's portfolio of 10+ landmark facade projects including LTIMindtree Mensa Campus, Embassy 247, Pune Airport Terminal, Salsette-27 & more. Award-winning execution across Mumbai & Pune."
        canonical="https://fineglaze.com/portfolio"
        keywords="facade projects India, aluminium facade portfolio, curtain wall projects Mumbai, glass facade Pune, building facade case studies, embassy facade work"
        schema={portfolioSchema}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(portfolioSchema)}
        </script>
      </Helmet>
      {/* INTRO */}
      <section className="pt-28 pb-14">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-end">
          <h1 className="text-6xl font-extrabold leading-tight">
            Built at{" "}
            <br />
            <span className="text-gradient-subtle">Landmark Scale</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            From international airports to corporate campuses — our portfolio
            reflects precision execution, safety-first methodology, and
            uncompromising architectural clarity.
          </p>
        </div>
      </section>

      {/* TABS */}
      <section className="border-y bg-muted/40">
        <div className="container mx-auto px-4 flex gap-3 py-4 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 ${
                active === t.id
                  ? "bg-primary text-white shadow-sm"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECT SECTIONS */}
      <section className="container mx-auto px-4 py-20 space-y-28">
        {filtered.map((p, i) => (
          <div
            key={p.id}
            className={`grid lg:grid-cols-2 gap-16 items-center ${
              i % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="relative h-[420px] overflow-hidden rounded-2xl">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />

              {p.isAwardWinner && (
                <span className="absolute top-6 left-6 bg-black/80 text-white text-xs px-4 py-1.5 rounded-full">
                  🏆 Award Winner
                </span>
              )}
            </div>

            {/* CONTENT */}
            <div className="space-y-5">
              <h2 className="text-4xl font-bold leading-tight">
                {p.title}
              </h2>

              <div className="flex items-center text-muted-foreground">
                <MapPin size={16} className="mr-2" />
                {p.location}
              </div>

              <p className="text-lg text-muted-foreground">
                {p.scope}
              </p>

              <Link
                to={`/project/${p.slug}`}
                className="inline-flex items-center text-primary font-semibold group"
              >
                Explore Project
                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition"
                />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default Portfolio;
