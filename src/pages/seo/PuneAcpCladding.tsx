import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const trustSignals = [
  "Turnkey ACP cladding execution for commercial and institutional buildings",
  "Skilled workforce for cutting, bending, and precision fixing",
  "Vendor coordination for approved shades, textures, and panel grades",
  "Quality checks for joint alignment, sealant finish, and weather resistance",
];

const acpServices = [
  "Exterior ACP cladding for building facades",
  "Column, canopy, and entrance feature cladding",
  "Interior ACP panelling for lobbies and common spaces",
  "Refurbishment and replacement of damaged ACP facades",
];

const faq = [
  {
    question: "Why choose ACP cladding for Pune projects?",
    answer:
      "ACP offers a strong balance of aesthetics, weather durability, and cost efficiency, making it popular for commercial and mixed-use buildings.",
  },
  {
    question: "Can ACP cladding be customized for branding and design?",
    answer:
      "Yes. ACP is available in multiple colors, metallic finishes, textures, and patterns that align with project branding and architectural intent.",
  },
  {
    question: "Do you handle both new installations and replacement work?",
    answer:
      "Yes. We execute greenfield ACP cladding projects and also retrofit or replace existing worn-out cladding systems.",
  },
];

export default function PuneAcpCladding() {
  return (
    <Layout>
      <Helmet>
        <title>Pune ACP Cladding Contractor | Fine Glaze</title>
        <meta
          name="description"
          content="Fine Glaze is a Pune ACP cladding contractor offering exterior and interior ACP panel installation, facade upgrades, and detail-driven execution."
        />
        <link rel="canonical" href="https://fineglaze.com/pune-acp-cladding" />
      </Helmet>

      <section className="pt-32 pb-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Pune ACP Cladding Contractor for Contemporary Facade Finishes</h1>
          <p className="text-white/80 text-lg">
            Fine Glaze delivers clean, durable ACP cladding systems with design flexibility for modern residential and commercial projects.
          </p>
          <Link to="/contact" className="inline-flex bg-primary text-white px-8 py-4 rounded-lg font-semibold">
            Request ACP Cladding Quote
          </Link>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">Why clients trust our ACP cladding team</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {trustSignals.map((signal) => (
              <div key={signal} className="border rounded-lg p-4 bg-muted/40">
                {signal}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">ACP cladding services in Pune</h2>
          <ul className="space-y-3 list-disc pl-6">
            {acpServices.map((service) => (
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
          <h2 className="text-3xl font-bold">Need a reliable Pune ACP cladding contractor?</h2>
          <p>Share your elevation and budget goals to get a tailored cladding execution plan.</p>
          <Link to="/contact" className="inline-flex bg-white text-primary px-8 py-4 rounded-lg font-semibold">
            Talk to Fine Glaze
          </Link>
        </div>
      </section>
    </Layout>
  );
}
