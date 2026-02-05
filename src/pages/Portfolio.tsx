import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const projects = [
  { slug: "embassy-tech-park", title: "Embassy Tech Park", image: "/Embassy.webp" },
  { slug: "pune-airport-zone", title: "Pune Airport Zone", image: "/Puneairport.webp" },
  { slug: "business-park-west", title: "Business Park West", image: "/Business park.webp" },
  { slug: "jindal-house", title: "Jindal House", image: "/Jindal house.webp" },
];

export default function Portfolio() {
  return (
    <Layout>
      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Portfolio</h1>
          <p className="mt-4 max-w-2xl text-slate-300">A rebuilt portfolio experience with cleaner cards and dedicated project pages.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.slug} to={`/project/${project.slug}`} className="group overflow-hidden rounded-xl border bg-white shadow-sm">
              <img src={project.image} alt={project.title} className="h-64 w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-slate-900">{project.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
