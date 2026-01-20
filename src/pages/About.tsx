import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Target, Eye, Shield, Users, Award, Clock } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every measurement, every cut, every installation is executed with meticulous accuracy.",
  },
  {
    icon: Shield,
    title: "Quality",
    description: "We use only premium materials and maintain stringent quality control at every stage.",
  },
  {
    icon: Clock,
    title: "Timeliness",
    description: "We understand project deadlines and deliver on time, every time.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with architects, contractors, and clients for seamless execution.",
  },
];

const stats = [
  { value: "5+",label: "Years Experience" },
  { value: "10+",label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "25+", label: "Skilled Team of Professionals" },
  
];

const About = () => {
  const heroRef = useScrollAnimation();
  const storyRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();
  const statsRef = useScrollAnimation();

  return (
    <Layout>
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
            {/* Image */}
            <div
              className={cn(
                "relative slide-up",
                storyRef.isVisible && "visible"
              )}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src="ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp"
                  alt="Fine Glaze Project"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Award Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <Award size={32} className="mb-2" />
                <p className="font-semibold">Best Vendor 2024</p>
                <p className="text-sm text-primary-foreground/70">Embassy REIT</p>
              </div>
            </div>

            {/* Content */}
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
                  provider. Our journey has been marked by a relentless 
                  pursuit of quality and innovation.
                </p>
                <p>
                  We combine traditional craftsmanship with modern technology 
                  to deliver facade systems that are not just visually stunning 
                  but also structurally sound and energy-efficient.
                </p>
                <p>
                  Our team of experienced engineers and skilled technicians 
                  work closely with architects and contractors to bring 
                  architectural visions to life, ensuring every project 
                  meets the highest standards of quality and safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="glass-card metallic-border p-8 space-y-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Target size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver world-class facade solutions that enhance building 
                aesthetics, improve energy efficiency, and provide lasting value 
                to our clients through innovation, precision, and exceptional service.
              </p>
            </div>

            {/* Vision */}
            <div className="glass-card metallic-border p-8 space-y-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Eye size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most trusted facade partner, known for transforming 
                architectural concepts into iconic structures that stand the test 
                of time and inspire future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background" ref={valuesRef.ref}>
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

      {/* Stats Section */}
      <section 
        className="py-24" 
        ref={statsRef.ref}
        style={{ background: "linear-gradient(135deg, hsl(25 55% 35%) 0%, hsl(20 50% 25%) 100%)" }}
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
