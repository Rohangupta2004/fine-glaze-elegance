import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import {
  Building2,
  Fence,
  DoorOpen,
  Wrench,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

/* -------------------- SERVICES DATA -------------------- */
const services = [
  {
    id: "facade",
    icon: Building2,
    title: "Facade Systems",
    subtitle: "Curtain Walls & Structural Glazing",
    description:
      "End-to-end facade solutions engineered for performance, aesthetics, and durability in modern commercial architecture.",
    features: [
      "Unitized Curtain Walls",
      "Structural Glazing",
      "Spider Glazing",
      "Double Skin Facades",
      "ACP Cladding",
    ],
    images: [
      "https://images.pexels.com/photos/417325/pexels-photo-417325.jpeg",
      "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg",
      "https://images.pexels.com/photos/3837649/pexels-photo-3837649.jpeg",
      "https://images.pexels.com/photos/1497366/pexels-photo-1497366.jpeg",
    ],
  },
  {
    id: "railings",
    icon: Fence,
    title: "Glass Railings",
    subtitle: "Frameless & Semi-Frameless",
    description:
      "Premium railing systems combining safety, transparency, and contemporary design.",
    features: [
      "Frameless Glass Railings",
      "Balustrades",
      "Handrails",
      "Stainless Steel Systems",
    ],
    images: [
      "https://images.pexels.com/photos/2253826/pexels-photo-2253826.jpeg",
      "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg",
      "https://images.pexels.com/photos/1072171/pexels-photo-1072171.jpeg",
    ],
  },
  {
    id: "doors-windows",
    icon: DoorOpen,
    title: "Doors & Windows",
    subtitle: "Aluminium Systems",
    description:
      "High-performance aluminium doors and windows offering thermal efficiency and sleek aesthetics.",
    features: [
      "Sliding Systems",
      "Casement & Tilt-Turn",
      "Automatic Doors",
      "Fire Rated Systems",
    ],
    images: [
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      "https://images.pexels.com/photos/17243242/pexels-photo-17243242.jpeg",
    ],
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "AMC & Maintenance",
    subtitle: "Facade Care Services",
    description:
      "Preventive and corrective maintenance services to keep your facade performing and looking new.",
    features: [
      "Facade Cleaning",
      "Glass Replacement",
      "Sealant Renewal",
      "Leak Repairs",
    ],
    images: [
      "https://images.pexels.com/photos/327482/pexels-photo-327482.jpeg",
      "https://images.pexels.com/photos/295000/pexels-photo-295000.jpeg",
      "https://images.pexels.com/photos/374861/pexels-photo-374861.jpeg",
    ],
  },
];

/* -------------------- PAGE -------------------- */
export default function ServicesPage() {
  const hero = useScrollAnimation();

  return (
    <Layout>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-muted" ref={hero.ref}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Complete facade solutions from design to execution and long-term
            maintenance.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      {services.map((service, index) => {
        const Icon = service.icon;
        const section = useScrollAnimation();
        const isEven = index % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            ref={section.ref}
            className={cn("py-20", isEven ? "bg-background" : "bg-muted")}
          >
            <div className="container mx-auto px-4">
              <div
                className={cn(
                  "grid lg:grid-cols-2 gap-12 items-center",
                  !isEven && "lg:grid-flow-col-dense"
                )}
              >
                {/* IMAGE GALLERY */}
                <div
                  className={cn(
                    "grid grid-cols-2 gap-4 slide-up",
                    section.isVisible && "visible",
                    !isEven && "lg:col-start-2"
                  )}
                >
                  {service.images.map((img, i) => (
                    <div
                      key={i}
                      className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
                    >
                      <img
                        src={img}
                        alt={`${service.title} ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition"
                      />
                    </div>
                  ))}
                </div>

                {/* CONTENT */}
                <div
                  className={cn(
                    "space-y-6 slide-up",
                    section.isVisible && "visible",
                    !isEven && "lg:col-start-1"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="text-primary" />
                    </div>
                    <div>
                      <span className="text-primary text-sm uppercase">
                        {service.subtitle}
                      </span>
                      <h2 className="text-3xl font-bold">
                        {service.title}
                      </h2>
                    </div>
                  </div>

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
      })}
    </Layout>
  );
    }
