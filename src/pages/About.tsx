import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Target, Eye, Shield, Users, Award, Clock, FileCheck2, Factory, MapPin, HardHat } from "lucide-react";
import { Link } from "react-router-dom";
import { company, telHref } from "@/data/company";
import SEO from "@/components/SEO";
import { useSiteMedia } from "@/hooks/useSiteMedia";

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Careful measurements, detailing and fabrication at every stage.",
  },
  {
    icon: Shield,
    title: "Quality",
    description:
      "Materials matched to project specifications, supported by checks throughout fabrication and installation.",
  },
  {
    icon: Clock,
    title: "Timeliness",
    description:
      "Planned fabrication and installation coordinated with your construction schedule.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Close coordination with architects, consultants and contractors from planning to handover.",
  },
];

const About = () => {
  const heroRef = useScrollAnimation();
  const storyRef = useScrollAnimation();
  const videoRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();
  const { getMedia } = useSiteMedia();
  const aboutHero = getMedia("about_hero", "/Embassy.webp");
  const aboutStoryPhoto = "/fine-glaze-storefront.webp";

  return (
    <Layout darkHero>
      <SEO
        title="Facade Contractor in Pune & Mumbai: About Fine Glaze"
        description="Fine Glaze is a facade contractor in Pune and Mumbai, founded by Deepak Gupta. Own fabrication unit in Pune, 40+ core team, Embassy REIT Best Vendor 2024."
        canonical="https://fineglaze.com/about"
        keywords="about Fine Glaze, Fine Glaze Pune, Deepak Gupta Fine Glaze, facade contractor Pune team, facade fabrication unit Pune"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "url": "https://fineglaze.com/about",
          "mainEntity": { "@id": "https://fineglaze.com/#organization" },
          "about": {
            "@type": "Organization",
            "@id": "https://fineglaze.com/#organization",
            "name": "Fine Glaze",
            "founder": {
              "@type": "Person",
              "name": company.founder.name,
              "jobTitle": "Founder & Proprietor",
              "description": company.founder.bio,
            },
            "employee": company.team.map((m) => ({ "@type": "Person", "name": m.name, "jobTitle": m.role })),
            "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 40 },
            "award": `${company.award.title} — ${company.award.by}`,
            "taxID": company.gstin,
          },
        }}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" ref={heroRef.ref}>
        <div className="absolute inset-0">
          <img src={aboutHero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-night-2" />
        </div>
        <div className="fg-wrap">
          <div
            className={cn(
              "max-w-3xl mx-auto text-center space-y-6 slide-up",
              heroRef.isVisible && "visible"
            )}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-lamp/20 text-lamp text-sm font-bold border border-lamp/30">
              About Us
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-paper">
              Facade Specialists in{" "}
              <span className="text-gradient-gold">Pune &amp; Mumbai</span>
            </h1>
            <p className="text-paper/80 text-lg">
              Fine Glaze designs, fabricates, installs and maintains facade
              systems for developers and building owners in Pune and Mumbai.
              Everything on this page is taken from our company profile — and
              we are happy to share the documents behind it.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background" ref={storyRef.ref}>
        <div className="fg-wrap">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={cn(
                "relative mx-auto w-full max-w-md slide-up",
                storyRef.isVisible && "visible"
              )}
            >
              <figure className="overflow-hidden border border-border bg-card">
                <img
                  src={aboutStoryPhoto}
                  alt="Fine Glaze store frontage in Mohammed Wadi, Pune"
                  className="w-full h-auto object-contain"
                  width={1243}
                  height={1034}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="px-5 py-4 text-sm font-semibold">
                  Our Store, Mohammed Wadi, Pune
                </figcaption>
              </figure>

              <div className="mt-5 bg-primary text-primary-foreground p-5">
                <Award size={32} className="mb-2" />
                <p className="font-semibold">{company.award.title}</p>
                <p className="text-sm text-primary-foreground/70">
                  {company.award.by} — {company.award.citation}
                </p>
              </div>
            </div>

            <div
              className={cn(
                "space-y-6 slide-up",
                storyRef.isVisible && "visible"
              )}
              style={{ transitionDelay: "0.1s" }}
            >
              <span className="text-primary font-medium text-sm">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Building{" "}
                <span className="text-gradient-subtle">Trust</span>{" "}
                Through Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded by <strong>{company.founder.name}</strong> in Pune, Fine Glaze
                  is a specialist facade contractor — design, fabrication,
                  installation and long-term maintenance handled by one
                  accountable team.
                </p>
                <p>
                  {company.founder.bio}
                </p>
                <p>
                  Drawings and engineering are produced in-house before anything
                  is cut. Fabrication happens at our own unit
                  in {company.fabricationUnit.location}, and installation is run by our
                  own site in-charges and supervisors under a dedicated safety officer.
                  Since starting out we have delivered facade projects across Pune and
                  Mumbai, and were named{" "}
                  <strong>{company.award.title}</strong> by {company.award.by}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎥 Video Section */}
      <section className="py-20 bg-muted" ref={videoRef.ref}>
        <div className="fg-wrap">
          <div
            className={cn(
              "max-w-5xl mx-auto text-center space-y-6 slide-up",
              videoRef.isVisible && "visible"
            )}
          >
            <span className="text-primary font-medium text-sm">
              Company Overview
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              See Fine Glaze{" "}
              <span className="text-gradient-subtle">in Action</span>
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch how Fine Glaze delivers premium facade systems through
              precision engineering, skilled site execution, and an uncompromised
              commitment to quality and safety.
            </p>

            <div className="overflow-hidden" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/1191408845?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                title="FINE GLAZE"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card metallic-border p-8 space-y-4">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center">
                <Target size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Our <span className="text-gradient-subtle">Mission</span>
              </h3>
              <p className="text-muted-foreground">
                {company.mission}
              </p>
            </div>

            <div className="glass-card metallic-border p-8 space-y-4">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center">
                <Eye size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Our <span className="text-gradient-subtle">Vision</span>
              </h3>
              <p className="text-muted-foreground">
                {company.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted" aria-labelledby="team-heading">
        <div className="fg-wrap">
          <div className="text-center space-y-3 mb-12 max-w-2xl mx-auto">
            <span className="text-primary font-medium text-sm">Our Team</span>
            <h2 id="team-heading" className="text-3xl md:text-4xl font-bold text-foreground">
              The people who answer for your facade
            </h2>
            <p className="text-muted-foreground">
              A core team of {company.stats.coreTeam} across engineering, supervision and site execution
              supports the leadership below.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            <article className="lg:row-span-2 border border-lamp/30 bg-lamp/5 p-6 space-y-3">
              <p className="text-xs font-bold text-lamp">{company.founder.role}</p>
              <h3 className="text-2xl font-bold text-foreground">{company.founder.name}</h3>
              <p className="text-muted-foreground">{company.founder.bio}</p>
            </article>
            {company.team.map((m) => (
              <article key={m.name} className="border border-border bg-card p-5">
                <h3 className="text-lg font-semibold text-foreground">{m.name}</h3>
                <p className="text-sm font-medium text-primary">{m.role}</p>
                <p className="text-sm text-muted-foreground mt-1">{m.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-background" aria-labelledby="credentials-heading">
        <div className="fg-wrap">
          <div className="text-center space-y-3 mb-12 max-w-2xl mx-auto">
            <span className="text-primary font-medium text-sm">Company Facts</span>
            <h2 id="credentials-heading" className="text-3xl md:text-4xl font-bold text-foreground">
              Credentials for vendor registration
            </h2>
            <p className="text-muted-foreground">
              The details procurement teams usually ask for. Copies are available on request.
            </p>
          </div>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { icon: FileCheck2, k: "Legal status", v: company.legalStatus },
              { icon: FileCheck2, k: "GSTIN", v: company.gstin },
              { icon: FileCheck2, k: "Trademark", v: company.trademark },
              { icon: Shield, k: "Quality, environment & safety", v: company.isoStatus },
              { icon: Factory, k: "Fabrication unit", v: company.fabricationUnit.location },
              { icon: MapPin, k: "Registered office", v: `${company.address.short}` },
              { icon: HardHat, k: "Work at height", v: "Documentation maintained and available on request" },
              { icon: Shield, k: "Third-party testing", v: "Air, water and structural testing (ASTM) arranged on request" },
              { icon: Award, k: "Defect liability", v: "DLP support offered as per contract terms" },
            ].map(({ icon: Icon, k, v }) => (
              <div key={k} className="border border-border bg-card p-5 flex gap-3">
                <Icon size={20} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <dt className="text-xs font-bold text-muted-foreground">{k}</dt>
                  <dd className="text-sm font-medium text-foreground mt-1">{v}</dd>
                </div>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/quality-safety"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 font-semibold hover:opacity-90"
            >
              How we control quality &amp; safety
            </Link>
            <a
              href={telHref}
              className="inline-flex items-center justify-center border border-border bg-card px-6 py-3 font-semibold hover:border-primary"
            >
              Call {company.phone.mobileDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted" ref={valuesRef.ref}>
        <div className="fg-wrap">
          <div
            className={cn(
              "text-center space-y-4 mb-12 slide-up",
              valuesRef.isVisible && "visible"
            )}
          >
            <span className="text-primary font-medium text-sm">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What <span className="text-gradient-subtle">Drives</span> Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={cn(
                  "text-center p-6 space-y-4 slide-up",
                  valuesRef.isVisible && "visible"
                )}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto">
                  <value.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default About;
