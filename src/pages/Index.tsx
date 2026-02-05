import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const services = [
  "Aluminium Facade Systems",
  "Structural Glazing",
  "Curtain Wall Systems",
  "ACP Aluminium Cladding",
  "Glass Railings",
  "Facade Maintenance",
];

const stats = [
  { label: "Projects Delivered", value: "120+" },
  { label: "Cities Served", value: "18" },
  { label: "Sq Ft Installed", value: "2.1M" },
  { label: "Client Satisfaction", value: "98%" },
];

export default function Index() {
  return (
    <Layout>
      <section className="bg-slate-950 py-20 text-white md:py-28">
        <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-slate-300">Remade Experience</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Fine Glaze, reimagined for modern facade delivery.
            </h1>
            <p className="mb-8 max-w-xl text-slate-300 md:text-lg">
              A fully refreshed digital experience showcasing our design-to-maintenance
              capabilities for glass and aluminium facade systems.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact"><Button size="lg">Start Your Project</Button></Link>
              <Link to="/portfolio"><Button size="lg" variant="secondary">View Portfolio</Button></Link>
            </div>
          </div>
          <img
            src="/Embassy.webp"
            alt="Modern facade"
            className="h-[420px] w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-xl border bg-white p-6 shadow-sm">
              <p className="text-3xl font-bold text-slate-900">{item.value}</p>
              <p className="mt-1 text-sm text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">Core Services</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service} className="rounded-xl border bg-white p-5">
                <h3 className="font-semibold text-slate-900">{service}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Engineered execution, compliant materials, and clean project handover.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
