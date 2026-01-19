import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Fence,
  DoorOpen,
  Wrench,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "facade-fabrication",
    icon: Building2,
    title: "Facade Fabrication",
    subtitle: "Curtain Walls & Structural Glazing",
    description:
      "Transform your building's exterior with our precision-engineered facade systems. We specialize in curtain walls, structural glazing, and unitized facade solutions that combine aesthetic appeal with superior performance.",
    features: [
      "Unitized Curtain Wall Systems",
      "Stick-Built Curtain Walls",
      "Structural Glazing Systems",
      "Spider Glazing",
      "Double Skin Facades",
      "Aluminum Composite Panel Cladding",
    ],
    image: "https://fineglaze.com/wp-content/uploads/2025/01/ltimindtree-mensa-campus-mahape-navi-mumbai-1.jpg",
  },
  {
    id: "custom-railings",
    icon: Fence,
    title: "Custom Railings",
    subtitle: "Glass & MS Railing Solutions",
    description:
      "Enhance safety without compromising aesthetics. Our custom railing solutions are designed to complement your architecture while meeting all safety standards and regulations.",
    features: [
      "Frameless Glass Railings",
      "Semi-Frameless Systems",
      "MS Railings with Glass Infill",
      "Stainless Steel Railings",
      "Balustrade Systems",
      "Handrail Solutions",
    ],
    image: "https://fineglaze.com/wp-content/uploads/2024/05/a4ce7051-1985-4eb6-9e75-faa19ee48def-e1735930548879.jpg",
  },
  {
    id: "doors-windows",
    icon: DoorOpen,
    title: "Doors & Windows",
    subtitle: "Premium Aluminium Systems",
    description:
      "High-performance door and window systems designed for energy efficiency, security, and durability. Our aluminium solutions offer slim profiles with maximum glass area for unobstructed views.",
    features: [
      "Sliding Door Systems",
      "Casement Windows",
      "Tilt & Turn Windows",
      "Fixed Glazing Panels",
      "Automatic Entrance Doors",
      "Fire-Rated Door Systems",
    ],
    image: "https://fineglaze.com/wp-content/uploads/2025/01/112406.SMFG-India-Credit-Company-Limited-Formerly-Fullerton-India-Credit-Co.-Ltd.-And-Embassy-REIT-Announce-Partnership-with-194k-sf-Lease-at-Embassy-247-in-Mumbai-nnew.png",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance Services",
    subtitle: "Facade Care & Repair",
    description:
      "Keep your building looking pristine with our comprehensive maintenance services. From routine cleaning to emergency repairs, we ensure your facade maintains its beauty and performance.",
    features: [
      "Facade Cleaning Services",
      "Glass Replacement",
      "Sealant Renewal",
      "Hardware Maintenance",
      "Leak Investigation & Repair",
      "Annual Maintenance Contracts",
    ],
    image: "https://fineglaze.com/wp-content/uploads/2025/01/ltimindtree-mensa-campus-mahape-navi-mumbai-1.jpg",
  },
];

const Services = () => {
  const heroRef = useScrollAnimation();

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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Comprehensive Facade Solutions
            </h1>
            <p className="text-muted-foreground text-lg">
              From concept to completion, we provide end-to-end facade services
              that transform architectural visions into stunning realities.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      {services.map((service, index) => {
        const ServiceIcon = service.icon;
        const isEven = index % 2 === 0;

        return (
          <ServiceSection
            key={service.id}
            service={service}
            isEven={isEven}
            ServiceIcon={ServiceIcon}
          />
        );
      })}

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Contact us today for a free consultation and quote. Our team is
              ready to bring your facade vision to life.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-base group"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface ServiceSectionProps {
  service: (typeof services)[0];
  isEven: boolean;
  ServiceIcon: typeof Building2;
}

const ServiceSection = ({ service, isEven, ServiceIcon }: ServiceSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id={service.id}
      className={cn("py-20", isEven ? "bg-background" : "bg-muted")}
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "grid lg:grid-cols-2 gap-12 items-center",
            !isEven && "lg:grid-flow-col-dense"
          )}
        >
          {/* Image */}
          <div
            className={cn(
              "relative slide-up",
              isVisible && "visible",
              !isEven && "lg:col-start-2"
            )}
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Icon Badge */}
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
              <ServiceIcon size={32} />
            </div>
          </div>

          {/* Content */}
          <div
            className={cn(
              "space-y-6 slide-up",
              isVisible && "visible",
              !isEven && "lg:col-start-1"
            )}
            style={{ transitionDelay: "0.1s" }}
          >
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                {service.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                {service.title}
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {service.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-primary shrink-0" />
                  <span className="text-foreground/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/contact">
              <Button className="btn-glossy text-primary-foreground border-0 mt-4 group">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;