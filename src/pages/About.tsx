import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Target, Eye, Shield, Users, Award, Clock } from "lucide-react";
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
        title="About Fine Glaze: Facade and Glazing Specialists | Fine Glaze"
        description="Meet Fine Glaze, a facade and glazing specialist providing design, fabrication, installation and maintenance for commercial and residential projects."
        canonical="https://fineglaze.com/about"
        keywords="Fine Glaze facade contractor, Fine Glaze India, Fine Glaze Pune, facade fabrication company, facade installation company"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Fine Glaze",
            "url": "https://fineglaze.com",
            "foundingLocation": { "@type": "Place", "name": "Pune, Maharashtra" },
            "founder": { "@type": "Person", "name": "Deepak Gupta" },
            "award": "Best Performance Vendor – Embassy REIT 2024"
          }
        }}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" ref={heroRef.ref}>
        <div className="absolute inset-0">
          <img src={aboutHero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={cn(
              "max-w-3xl mx-auto text-center space-y-6 slide-up",
              heroRef.isVisible && "visible"
            )}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold uppercase tracking-wider border border-amber-500/30">
              About Us
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Crafting{" "}
              <span className="text-gradient-gold">Excellence</span>{" "}
              in Facade Solutions
            </h1>
            <p className="text-white/80 text-lg">
              Fine Glaze is Pune's premier facade fabrication company —
              delivering precision-engineered glass and aluminium solutions
              for landmark commercial and residential projects across India.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background" ref={storyRef.ref}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={cn(
                "relative mx-auto w-full max-w-md slide-up",
                storyRef.isVisible && "visible"
              )}
            >
              <figure className="rounded-xl overflow-hidden border border-border bg-card">
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
                  Our Store · Mohammed Wadi, Pune
                </figcaption>
              </figure>

              <div className="mt-5 bg-primary text-primary-foreground p-5 rounded-xl shadow-lg">
                <Award size={32} className="mb-2" />
                <p className="font-semibold">Best Vendor 2024</p>
                <p className="text-sm text-primary-foreground/70">
                  Embassy REIT
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
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Building{" "}
                <span className="text-gradient-subtle">Trust</span>{" "}
                Through Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded by <strong>Deepak Gupta</strong> in Pune, Fine Glaze
                  provides facade design, fabrication, installation and
                  maintenance for commercial and residential buildings.
                </p>
                <p>
                  We work with architects, developers and project teams to
                  deliver glass and aluminium systems with careful detailing,
                  quality workmanship and reliable coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎥 Video Section */}
      <section className="py-20 bg-muted" ref={videoRef.ref}>
        <div className="container mx-auto px-4">
          <div
            className={cn(
              "max-w-5xl mx-auto text-center space-y-6 slide-up",
              videoRef.isVisible && "visible"
            )}
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
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

            <div className="rounded-xl overflow-hidden shadow-xl" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/1191408845?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                title="FINE GLAZE"
              />
            </div>
            <script src="https://player.vimeo.com/api/player.js" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card metallic-border p-8 space-y-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Target size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Our <span className="text-gradient-subtle">Mission</span>
              </h3>
              <p className="text-muted-foreground">
                To deliver world-class facade solutions that enhance building
                aesthetics, improve energy efficiency, and create lasting
                value — for clients, communities, and the skylines we shape.
              </p>
            </div>

            <div className="glass-card metallic-border p-8 space-y-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Eye size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Our <span className="text-gradient-subtle">Vision</span>
              </h3>
              <p className="text-muted-foreground">
                To be India's most trusted facade partner — renowned for
                transforming bold architectural concepts into iconic,
                enduring structures that stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted" ref={valuesRef.ref}>
        <div className="container mx-auto px-4">
          <div
            className={cn(
              "text-center space-y-4 mb-12 slide-up",
              valuesRef.isVisible && "visible"
            )}
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
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
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
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
