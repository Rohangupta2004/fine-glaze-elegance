import { Layout } from "@/components/layout/Layout";
import { useParams, Link } from "react-router-dom";

const projectMap: Record<string, { title: string; image: string; summary: string }> = {
  "embassy-tech-park": {
    title: "Embassy Tech Park",
    image: "/Embassy.webp",
    summary: "Large-scale curtain wall and glazing package for a multi-building corporate campus.",
  },
  "pune-airport-zone": {
    title: "Pune Airport Zone",
    image: "/Puneairport.webp",
    summary: "Facade modernization and ACP cladding works with accelerated completion timelines.",
  },
  "business-park-west": {
    title: "Business Park West",
    image: "/Business park.webp",
    summary: "High-performance envelope system tuned for thermal and acoustic requirements.",
  },
  "jindal-house": {
    title: "Jindal House",
    image: "/Jindal house.webp",
    summary: "Premium residential glazing and railing package with bespoke aluminium details.",
  },
};

export default function ProjectDetail() {
  const { slug = "" } = useParams();
  const project = projectMap[slug];

  if (!project) {
    return (
      <Layout>
        <section className="container mx-auto px-4 py-20">
          <h1 className="text-3xl font-bold">Project not found</h1>
          <Link to="/portfolio" className="mt-4 inline-block text-primary underline">Back to portfolio</Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="container mx-auto px-4 py-14">
        <h1 className="text-4xl font-bold text-slate-900">{project.title}</h1>
        <p className="mt-4 max-w-3xl text-slate-600">{project.summary}</p>
        <img src={project.image} alt={project.title} className="mt-8 h-[420px] w-full rounded-2xl object-cover" />
      </section>
    </Layout>
  );
}
