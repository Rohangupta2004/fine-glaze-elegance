import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const trustPoints = [
  "Proven structural glazing delivery in Pune IT parks and commercial blocks",
  "Project planning with load, wind, and water-penetration considerations",
  "Dedicated supervision teams for quality and timeline control",
  "Certified installation practices for long-term system reliability",
];

const services = [
  "Spider glazing and point-fixed systems",
  "Semi-unitized and unitized structural glazing",
  "Facade sealant and gasket specification",
  "Glazing retrofits and replacement for ageing envelopes",
];

const faq = [
  {
    question: "What does a Pune structural glazing company typically provide?",
    answer:
      "A complete service scope includes design coordination, detailing, fabrication support, installation, and post-installation checks for performance.",
  },
  {
    question: "Can structural glazing improve energy efficiency?",
    answer:
      "Yes. With the right glass and facade system, structural glazing can improve daylighting while reducing heat gain and HVAC load.",
  },
  {
    question: "Do you handle both new and retrofit projects?",
    answer:
      "Yes. Fine Glaze supports both new construction and retrofit glazing projects in Pune based on site and budget requirements.",
  },
];

export default function PuneStructuralGlazing() {
  return (
    <Layout>
      <Helmet>
        <title>Pune Structural Glazing Company | Fine Glaze</title>
        <meta
          name="description"
          content="Fine Glaze is a Pune structural glazing company delivering high-performance glass facades, spider glazing, and turnkey execution for commercial projects."
        />
        <link rel="canonical" href="https://fineglaze.com/pune-structural-glazing-company" />
      </Helmet>

      <section className="pt-32 pb-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Pune Structural Glazing Company for Commercial and Premium Buildings</h1>
          <p className="text-white/80 text-lg">
            We design and execute structural glazing systems that deliver strength, weather performance, and modern aesthetics.
          </p>
          <Link to="/contact" className="inline-flex bg-primary text-white px-8 py-4 rounded-lg font-semibold">
            Request Structural Glazing Consultation
          </Link>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">Why Pune developers choose us</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {trustPoints.map((point) => (
              <div key={point} className="border rounded-lg p-4 bg-muted/40">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">Structural glazing services in Pune</h2>
          <ul className="space-y-3 list-disc pl-6">
            {services.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Frequently asked questions</h2>
          <div className="space-y-6">
            {faq.map((item) => (
              <article key={item.question}>
                <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-5">
          <h2 className="text-3xl font-bold">Need structural glazing execution in Pune?</h2>
          <p>Share your project drawings and site details to get a practical execution plan.</p>
          <Link to="/contact" className="inline-flex bg-white text-primary px-8 py-4 rounded-lg font-semibold">
            Contact Our Pune Team
          </Link>
        </div>
      </section>
    </Layout>
  );
}
