import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const trustHighlights = [
  "12+ years in facade and glazing execution across Mumbai",
  "250+ completed facade and envelope projects",
  "Experienced site, design, and QA teams",
  "Compliance-driven processes for high-rise safety",
];

const serviceDetails = [
  "Unitized and stick facade systems for commercial towers",
  "Structural glazing with engineered anchoring and sealing",
  "ACP and aluminium cladding with custom elevation detailing",
  "Facade refurbishment, waterproofing, and sealant replacement",
];

const faq = [
  {
    question: "How do I choose the right Mumbai facade contractor?",
    answer:
      "Prioritize contractors with proven high-rise experience, in-house technical teams, safety compliance records, and references from similar projects in Mumbai.",
  },
  {
    question: "Do you provide facade design support and shop drawings?",
    answer:
      "Yes. Fine Glaze supports design coordination, detail development, fabrication drawings, and site execution planning for end-to-end delivery.",
  },
  {
    question: "What is the typical timeline for facade installation?",
    answer:
      "Timelines depend on elevation size, system type, and approvals. Most medium-scale projects move from planning to installation in phased milestones.",
  },
];

export default function MumbaiFacadeContractor() {
  return (
    <Layout>
      <Helmet>
        <title>Mumbai Facade Contractor | Fine Glaze Facade Experts</title>
        <meta
          name="description"
          content="Looking for a trusted Mumbai facade contractor? Fine Glaze delivers structural glazing, ACP cladding, and facade execution for commercial and residential projects."
        />
        <link rel="canonical" href="https://fineglaze.com/mumbai-facade-contractor" />
      </Helmet>

      <section className="pt-32 pb-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Mumbai Facade Contractor for High-Performance Building Envelopes</h1>
          <p className="text-white/80 text-lg">
            Fine Glaze is a Mumbai facade contractor focused on durable, code-compliant, and architecturally refined facade systems.
          </p>
          <Link to="/contact" className="inline-flex bg-primary text-white px-8 py-4 rounded-lg font-semibold">
            Talk to a Facade Specialist
          </Link>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">Why clients trust Fine Glaze in Mumbai</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {trustHighlights.map((item) => (
              <div key={item} className="border rounded-lg p-4 bg-muted/40">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">Facade contractor services in Mumbai</h2>
          <ul className="space-y-3 list-disc pl-6">
            {serviceDetails.map((detail) => (
              <li key={detail}>{detail}</li>
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
          <h2 className="text-3xl font-bold">Need a dependable Mumbai facade contractor?</h2>
          <p>Get a project-specific consultation, BOQ support, and execution roadmap from our team.</p>
          <Link to="/contact" className="inline-flex bg-white text-primary px-8 py-4 rounded-lg font-semibold">
            Contact Fine Glaze
          </Link>
        </div>
      </section>
    </Layout>
  );
}
