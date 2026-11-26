import { useState } from "react";
import { Link } from "react-router-dom";
import { ClipboardCheck, Factory, HardHat, Layers, PenTool, ShieldCheck, Droplets, FileText, Phone } from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import StatBand from "@/components/common/StatBand";
import { Layout } from "@/components/layout/Layout";
import { QuoteModal } from "@/components/QuoteModal";
import { useCompanyProfile } from "@/context/CompanyProfileContext";
import { company, telHref } from "@/data/company";

const PAGE_URL = "https://fineglaze.com/quality-safety";

const VERIFY_CHECKLIST = [
  "Ask for three completed projects similar to yours — and a client contact for at least one.",
  "Ask who prepares the shop drawings and structural checks, and see a sample set.",
  "Ask where the fabrication happens, and visit it if you can.",
  "Ask for the material brands in writing, with test or mill certificates.",
  "Ask how the work will be water-tested on site, and what happens to a leak found at handover.",
  "Ask who the safety officer is, and to see work-at-height records from a running site.",
  "Ask for the defect liability period and AMC terms in the contract — not just verbally.",
];

export default function QualitySafety() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const { openProfile } = useCompanyProfile();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "How Fine Glaze controls quality and safety",
      about: { "@id": "https://fineglaze.com/#organization" },
      isPartOf: { "@id": "https://fineglaze.com/#website" },
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "From enquiry to handover — Fine Glaze facade delivery stages",
      step: company.deliveryStages.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.desc })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com/" },
        { "@type": "ListItem", position: 2, name: "Quality & Safety", item: PAGE_URL },
      ],
    },
  ];

  return (
    <Layout darkHero>
      <SEO
        title="Facade Contractor Quality Control and Safety | Fine Glaze"
        description="How Fine Glaze controls facade quality and safety: in-house shop drawings, stage inspections, a site water penetration test and a dedicated safety officer."
        canonical={PAGE_URL}
        keywords="facade quality control, facade water test, facade contractor safety, work at height facade, facade contractor vendor registration, Fine Glaze process"
        schemas={schemas}
      />

      <PageHero
        crumbs={[{ label: "Quality and safety" }]}
        title="One accountable team, from drawing to defect liability"
        intro="Large brands sell a product. On a facade, what decides the result is who draws it, who checks it, who builds it and who answers when it rains. Here is exactly how we do each step."
        source="quality_hero"
      />

      <section className="fg-sec">
        <div className="fg-wrap">
          <StatBand
            stats={[
              { value: String(company.stats.projectRecords), name: "Documented projects" },
              { value: String(company.stats.coreTeam), name: "Core team" },
              { value: "2024", name: `${company.award.by} Best Vendor` },
            ]}
          />
        </div>
      </section>


      {/* 8 STAGES */}
      <section className="fg-sec" aria-labelledby="stages">
        <div className="fg-wrap">
          <h2 id="stages" className="text-2xl md:text-4xl font-medium text-foreground">Eight controlled stages on every package</h2>
          <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {company.deliveryStages.map((s, i) => (
              <li key={s.title} className="border border-border bg-card p-5">
                <p className="text-xs font-bold text-lamp">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-1 font-medium text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DESIGN + FABRICATION */}
      <section className="fg-sec" aria-labelledby="design">
        <div className="fg-wrap grid lg:grid-cols-2 gap-8">
          <article className="bg-card border border-border p-7">
            <PenTool className="h-7 w-7 text-primary" aria-hidden="true" />
            <h2 id="design" className="mt-3 text-2xl font-medium text-foreground">Design &amp; engineering, in-house</h2>
            <p className="mt-3 text-muted-foreground">
              Every package is drawn in-house before anything is cut, so the workshop and the site work from one approved set.
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><strong className="text-foreground">Shop &amp; fabrication drawings</strong> — Yogesh, Design Head</li>
              <li><strong className="text-foreground">Member sizing, fixing &amp; anchorage</strong> checked against project wind load — Swikrut, Structural Engineer</li>
              <li><strong className="text-foreground">QHSE &amp; design lead</strong> — {company.founder.name}, Founder</li>
              <li><strong className="text-foreground">Approvals</strong> — submissions and revisions managed with architect, PMC and client until GFC release</li>
            </ul>
          </article>
          <article className="bg-card border border-border p-7">
            <Factory className="h-7 w-7 text-primary" aria-hidden="true" />
            <h2 className="mt-3 text-2xl font-medium text-foreground">Our fabrication unit — {company.fabricationUnit.location}</h2>
            <p className="mt-3 text-muted-foreground">
              Our own unit, feeding both Pune and Mumbai sites.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground list-disc pl-5">
              {company.fabricationUnit.capability.map((c) => <li key={c}>{c}</li>)}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              In plain terms: {company.fabricationUnit.note}
            </p>
          </article>
        </div>
      </section>

      {/* QA + TESTING */}
      <section className="fg-sec" aria-labelledby="qa">
        <div className="fg-wrap">
          <div className="flex items-center gap-3">
            <ClipboardCheck className="h-7 w-7 text-primary" aria-hidden="true" />
            <h2 id="qa" className="text-2xl md:text-4xl font-medium text-foreground">Checked at source, at site, and before handover</h2>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {company.qualityStages.map((q) => (
              <div key={q.title} className="border border-border bg-card p-5">
                <h3 className="font-medium text-foreground">{q.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{q.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 border border-lamp/30 bg-lamp/5 p-6">
            <div className="flex items-center gap-2 font-semibold text-foreground">
              <Droplets className="h-5 w-5 text-lamp" aria-hidden="true" /> Testing
            </div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
              {company.testing.map((t) => <li key={t}>{t}</li>)}
              <li>Snag register raised, tracked and closed before handover. {company.defectLiability}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="py-16 md:py-20 bg-night text-paper" aria-labelledby="safety">
        <div className="fg-wrap">
          <div className="flex items-center gap-3">
            <HardHat className="h-7 w-7 text-lamp" aria-hidden="true" />
            <h2 id="safety" className="text-2xl md:text-4xl font-medium">Facade work is height work — we manage it that way</h2>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {company.safety.map((s) => (
              <div key={s.title} className="border border-line bg-night-2 p-5">
                <h3 className="font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-mute">{s.desc}</p>
              </div>
            ))}
            <div className="border border-line bg-night-2 p-5">
              <h3 className="font-medium">Certification status</h3>
              <p className="mt-2 text-sm text-mute">{company.isoStatus}. We will say so plainly until it is granted.</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-mute">Safety officer: Akash, oversees elevation work across all active sites.</p>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="fg-sec" aria-labelledby="materials">
        <div className="fg-wrap">
          <div className="flex items-center gap-3">
            <Layers className="h-7 w-7 text-primary" aria-hidden="true" />
            <h2 id="materials" className="text-2xl md:text-4xl font-medium text-foreground">Material partners</h2>
          </div>
          <p className="mt-3 text-muted-foreground max-w-2xl">Brands are matched to the project specification and the consultant's approved list.</p>
          <dl className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {company.materialPartners.map((m) => (
              <div key={m.category} className="border border-border bg-card p-5">
                <dt className="text-xs font-bold text-muted-foreground">{m.category}</dt>
                <dd className="mt-1 text-foreground">{m.detail}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-muted-foreground">{company.materialPartnersNote}</p>
        </div>
      </section>

      {/* AFTER HANDOVER */}
      <section className="fg-sec" aria-labelledby="after">
        <div className="fg-wrap grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <ShieldCheck className="h-7 w-7 text-primary" aria-hidden="true" />
            <h2 id="after" className="mt-3 text-2xl md:text-4xl font-medium text-foreground">After handover, we are still your facade team</h2>
            <p className="mt-3 text-muted-foreground">
              Maintenance is a core service line for us, run with the same drawing control, safety protocol and snag discipline as new work —
              for example our running contract at Embassy Techzone, Hinjewadi for Embassy REIT.
            </p>
            <Link to="/maintenance-services" className="mt-5 inline-flex bg-primary text-primary-foreground px-5 py-3 font-semibold hover:opacity-90">
              Facade maintenance &amp; AMC
            </Link>
          </div>
          <ul className="grid gap-3">
            {company.maintenanceScope.map((m) => (
              <li key={m} className="border border-border bg-card px-5 py-4 text-foreground">{m}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW TO VERIFY */}
      <section className="fg-sec" aria-labelledby="verify">
        <div className="fg-wrap">
          <h2 id="verify" className="text-2xl md:text-4xl font-medium text-foreground">How to check any facade contractor — including us</h2>
          <p className="mt-3 text-muted-foreground">Seven questions that separate a capable contractor from a good brochure.</p>
          <ol className="mt-8 space-y-3">
            {VERIFY_CHECKLIST.map((v, i) => (
              <li key={v} className="flex gap-4 border border-border bg-card p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-lamp/15 text-sm font-bold text-paper">{i + 1}</span>
                <span className="text-foreground/90">{v}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PREQUALIFICATION */}
      <section className="py-16 bg-night-2 border-t border-line">
        <div className="fg-wrap grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-paper">Registering us as a vendor?</h2>
            <p className="mt-2 text-mute">
              We can send our company profile, GST registration ({company.gstin}), trademark details, project references and
              work-at-height documentation for prequalification.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <button onClick={() => setQuoteOpen(true)} className="bg-lamp text-lamp-ink font-bold px-6 py-4 hover:brightness-110 inline-flex items-center justify-center">
              <FileText className="mr-2 h-4 w-4" /> Book a call
            </button>
            <Link
              to="/company-profile"
              onClick={() => openProfile(1, "slides")}
              className="border-2 border-line text-paper font-bold px-6 py-4 text-center hover:bg-night-2 hover:text-paper"
            >
              View the company profile
            </Link>
            <a href={telHref} className="text-center font-semibold text-paper underline underline-offset-4 inline-flex items-center justify-center">
              <Phone className="mr-2 h-4 w-4" /> {company.phone.mobileDisplay}
            </a>
          </div>
        </div>
      </section>

      <QuoteModal
        open={quoteOpen}
        onOpenChange={setQuoteOpen}
        defaultProjectType="Other"
        defaultMessage="Please send your prequalification / vendor registration documents."
        source="prequalification"
      />
    </Layout>
  );
}
