import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const servicePages = [
  { title: "Aluminium Facade", path: "/aluminium-facade", image: "/Aluminium windows.webp" },
  { title: "Structural Glazing", path: "/structural-glazing", image: "/Glazing.webp" },
  { title: "Curtain Wall Systems", path: "/curtain-wall-systems", image: "/Unitized.webp" },
  { title: "ACP Cladding", path: "/acp-aluminium-cladding", image: "/Panel.webp" },
  { title: "Glass Railings", path: "/glass-railings", image: "/Railing.webp" },
  { title: "Maintenance Services", path: "/maintenance-services", image: "/Amc.webp" },
];

export default function Services() {
  return (
    <Layout>
      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Services (Remade)</h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Every service page has been refreshed with consistent structure, modern layout, and clearer action paths.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
          {servicePages.map((service) => (
            <Link to={service.path} key={service.path} className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <img src={service.image} alt={service.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h2 className="text-lg font-semibold text-slate-900">{service.title}</h2>
                <p className="mt-2 text-sm text-slate-600">Open page</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
