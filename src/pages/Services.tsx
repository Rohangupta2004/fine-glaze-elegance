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

/* -------------------- Services Data -------------------- */
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
    image:
      "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&w=1600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=80",
  },
];

/* -------------------- Page -------------------- */
const Services = () => {
  const heroRef = useScrollAnimation();

  return (
    <Layout>
      {/* Hero */}
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
            <h1 className="text-4xl md:text-5xl font-bold">
              Comprehensive Facade Solutions
            </h1>
            <p className="text-muted-foreground text-lg">
              From concept to completion, we provide end-to-end facade services
              that transform architectural visions into stunning realities.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => {
        const ServiceIcon = service.icon;
        return (
          <ServiceSection
            key={service.id}
            service={service}
            isEven={index % 2 === 0}
            ServiceIcon={ServiceIcon}
          />
        );
      })}

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Contact us today for a free consultation and quote.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary px-8 py-6 group"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

/* -------------------- Section -------------------- */
interface ServiceSectionProps {
  service: (typeof services)[0];
  isEven: boolean;
  ServiceIcon: typeof Building2;
}

const ServiceSection = ({
  service,
  isEven,
  ServiceIcon,
}: ServiceSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id={service.id}
      ref={ref}
      className={cn("py-20", isEven ? "bg-background" : "bg-muted")}
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
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-lg">
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
          >
            <span className="text-primary font-medium uppercase text-sm">
              {service.subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              {service.title}
            </h2>

            <p className="text-muted-foreground">
              {service.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {service.features.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>

            <Link to="/contact">
              <Button className="btn-glossy mt-4 group">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
