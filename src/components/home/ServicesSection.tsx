import { Link } from "react-router-dom";
import { ArrowRight, Building2, Cog, DoorOpen, Fence, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const metrics = [
  { value: "350+", label: "Projects completed" },
  { value: "42", label: "Enterprise clients" },
  { value: "12", label: "Cities served" },
  { value: "99.2%", label: "Safety compliance" },
];

const services = [
  {
    icon: Building2,
    title: "Facade Systems",
    description: "Unitized and semi-unitized facade packages built for speed, durability, and clean visual lines.",
  },
  {
    icon: Fence,
    title: "Glass Railings",
    description: "Frameless and structural railing systems with tested hardware and premium finishing.",
  },
  {
    icon: DoorOpen,
    title: "Doors & Windows",
    description: "High-performance aluminium systems optimized for wind load, insulation, and operation cycles.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Retrofit",
    description: "Facade AMC, replacement, resealing, and repair programs for occupied buildings.",
  },
  {
    icon: Cog,
    title: "Design Engineering",
    description: "Shop drawings, structural checks, mockups, and execution planning under one team.",
  },
  {
    icon: Building2,
    title: "Turnkey Delivery",
    description: "Single accountability from procurement to installation and handover documentation.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="bg-muted/40 py-20 md:py-24">
      <div className="container mx-auto space-y-12 px-4">
        <div className="grid gap-4 rounded-2xl border border-border bg-card p-6 md:grid-cols-4 md:p-8">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-3xl font-semibold text-primary">{metric.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Core Solutions</p>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Everything required to deliver high-performance facades</h2>
            <p className="text-muted-foreground">Built as modular service tracks so clients can engage us for full-turnkey execution or specialized support.</p>
          </div>
          <Button asChild variant="outline" className="w-fit">
            <Link to="/services">
              Explore Service Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="group rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
