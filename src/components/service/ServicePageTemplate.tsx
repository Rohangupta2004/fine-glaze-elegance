import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  image: string;
  highlights: string[];
}

export const ServicePageTemplate = ({ title, subtitle, image, highlights }: ServicePageTemplateProps) => {
  return (
    <Layout>
      <section className="bg-slate-950 py-16 text-white">
        <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-300">Service Page Remake</p>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="mt-4 max-w-xl text-slate-300">{subtitle}</p>
            <div className="mt-6 flex gap-3">
              <Link to="/contact"><Button>Get Quote</Button></Link>
              <Link to="/portfolio"><Button variant="secondary">See Projects</Button></Link>
            </div>
          </div>
          <img src={image} alt={title} className="h-[360px] w-full rounded-2xl object-cover" />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-slate-900">What you get</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="rounded-xl border p-5 text-slate-700">{item}</div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
