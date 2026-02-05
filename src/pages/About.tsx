import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Target, Eye, Shield, Users, Award, Clock } from "lucide-react";
import { SeoHead } from "@/components/seo/SeoHead";

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every measurement, every cut, every installation is executed with meticulous accuracy.",
  },
  {
    icon: Shield,
    title: "Quality",
    description:
      "We use only premium materials and maintain stringent quality control at every stage.",
  },
  {
    icon: Clock,
    title: "Timeliness",
    description:
      "We understand project deadlines and deliver on time, every time.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with architects, contractors, and clients for seamless execution.",
  },
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "25+", label: "Skilled Team of Professionals" },
];

const About = () => {
  const heroRef = useScrollAnimation();
  const storyRef = useScrollAnimation();
  const videoRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();
  const statsRef = useScrollAnimation();

  return (
    <Layout>
      <SeoHead
        title="About Fine Glaze | Facade Engineering Company in Pune, India"
        description="Learn about Fine Glaze, a Pune-based facade engineering company delivering precision aluminium, glass, and architectural facade solutions across India."
        path="/about"
        keywords="about fine glaze, facade company pune, aluminium and glass experts"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted" ref={heroRef.ref}>
        <div className="container mx-auto px-4">
          <div
            className={cn(
              "max-w-3xl mx-auto text-center space-y-6 slide-up",
              heroRef.isVisible && "visible"
            )}
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Crafting Excellence in Facade Solutions
            </h1>
            <p className="text-muted-foreground text-lg">
              Fine Glaze is Pune's premier facade fabrication company,
              delivering precision-engineered glass and aluminium solutions
              for commercial and residential projects across India.
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
                "relative slide-up",
                storyRef.isVisible && "visible"
              )}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src="Embassy.webp"
                  alt="Fine Glaze Project"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
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
                Building Trust Through Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in Pune, Fine Glaze has grown from a specialized
                  glass fabrication unit to a comprehensive facade solutions
                  provider.
                </p>
                <p>
                  We combine traditional craftsmanship with modern technology
                  to deliver facade systems that are visually stunning and
                  structurally sound.
                </p>
                <p>
                  Our engineers and technicians work closely with architects
                  and contractors to bring architectural visions to life.
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
              See Fine Glaze in Action
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch how Fine Glaze delivers premium facade systems through
              precision engineering, skilled execution, and uncompromised
              quality.
            </p>

            <div className="aspect-video rounded-xl overflow-hidden shadow-xl bg-black">
              <video
                src="https://osbgcuuehfqxyvooogjy.supabase.co/storage/v1/object/public/Videos/FINE%20GLAZE.mp4"
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
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
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To deliver world-class facade solutions that enhance building
                aesthetics, improve energy efficiency, and provide lasting
                value to our clients.
              </p>
            </div>

            <div className="glass-card metallic-border p-8 space-y-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Eye size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To be India's most trusted facade partner, known for
                transforming architectural concepts into iconic structures.
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
              What Drives Us
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

      {/* Stats */}
      <section
        className="py-24"
        ref={statsRef.ref}
        style={{
          background:
            "linear-gradient(135deg, hsl(25 55% 35%) 0%, hsl(20 50% 25%) 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={cn(
                  "text-center slide-up",
                  statsRef.isVisible && "visible"
                )}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
