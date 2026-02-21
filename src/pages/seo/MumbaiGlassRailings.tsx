import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const trustItems = [
  "Extensive execution in residences, podiums, and commercial decks",
  "High-grade toughened and laminated glass specifications",
  "On-site precision for alignment, fixing, and edge finishing",
  "Projects delivered with safety-first installation protocols",
];

const railingServices = [
  "Frameless glass railings for balconies and terraces",
  "Staircase glass railing systems with SS handrails",
  "Podium and deck guardrails for mixed-use projects",
  "Custom railing hardware and finishing options",
];

const faq = [
  {
    question: "Are frameless glass railings safe for homes and high-rises?",
    answer:
      "Yes, when designed with correct glass thickness, certified hardware, and code-compliant anchoring. We tailor specifications to site conditions.",
  },
  {
    question: "What glass types are used for railings?",
    answer:
      "Most projects use toughened or laminated toughened glass based on span, height, and use-case.",
  },
  {
    question: "Do you provide custom finishes and handrails?",
    answer:
      "Yes. We provide multiple hardware finishes and optional handrail profiles to match project interiors and architecture.",
  },
];

export default function MumbaiGlassRailings() {
  return (
    <Layout>
      <Helmet>
        <title>Mumbai Glass Railings Contractor | Fine Glaze</title>
        <meta
          name="description"
          content="Fine Glaze is a Mumbai glass railings contractor for frameless balcony railings, staircase glass systems, and custom safety-compliant installations."
        />
        <link rel="canonical" href="https://fineglaze.com/mumbai-glass-railings" />
      </Helmet>

      <section className="pt-32 pb-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Mumbai Glass Railings Contractor for Modern, Safe Spaces</h1>
          <p className="text-white/80 text-lg">
            We deliver elegant and structurally sound glass railing systems for residential and commercial projects across Mumbai.
          </p>
          <Link to="/contact" className="inline-flex bg-primary text-white px-8 py-4 rounded-lg font-semibold">
            Get Glass Railing Proposal
          </Link>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">Why choose Fine Glaze for Mumbai glass railings</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {trustItems.map((item) => (
              <div key={item} className="border rounded-lg p-4 bg-muted/40">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">Glass railing services in Mumbai</h2>
          <ul className="space-y-3 list-disc pl-6">
            {railingServices.map((service) => (
              <li key={service}>{service}</li>
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
          <h2 className="text-3xl font-bold">Planning glass railings for your Mumbai project?</h2>
          <p>Connect with our team for technical guidance, measurement planning, and installation scheduling.</p>
          <Link to="/contact" className="inline-flex bg-white text-primary px-8 py-4 rounded-lg font-semibold">
            Contact Us Today
          </Link>
        </div>
      </section>
    </Layout>
  );
}
