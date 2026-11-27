import { useState } from "react";
import CallNow from "@/components/common/CallNow";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { DataStrip, Prose, Sec, SpecList, SpecTable } from "@/components/common/Sheet";
import { CTASection } from "@/components/home/CTASection";
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

      <Sec no="01" label="Record" title="The firm in figures." sheetLabel="Company facts">
        <DataStrip
          items={[
            { value: String(company.stats.projectRecords), label: "Documented projects" },
            { value: String(company.stats.coreTeam), label: "Core team" },
            { value: "2024", label: `${company.award.by} Best Vendor` },
          ]}
        />
      </Sec>

      <Sec no="02" label="Stages" title="Eight controlled stages on every package." sheetLabel="Delivery stages" dim="8 stages">
        <SpecTable
          caption="Delivery stages"
          columns={["No.", "Stage", "What happens"]}
          rows={company.deliveryStages.map((s, i) => [String(i + 1).padStart(2, "0"), <b key={s.title}>{s.title}</b>, s.desc])}
        />
      </Sec>

      <Sec no="03" label="Design and fabrication" title="Drawn in-house, built in our own unit." sheetLabel="Design and fabrication">
        <div className="sx-split">
          <div>
            <h3 className="sx-sub">Design &amp; engineering, in-house</h3>
            <p className="sx-note">Every package is drawn in-house before anything is cut, so the workshop and the site work from one approved set.</p>
            <dl className="sx-kv">
              <div><dt>Shop &amp; fabrication drawings</dt><dd>Yogesh, Design Head</dd></div>
              <div><dt>Member sizing, fixing &amp; anchorage</dt><dd>Checked against project wind load. Swikrut, Structural Engineer</dd></div>
              <div><dt>QHSE &amp; design lead</dt><dd>{company.founder.name}, Founder</dd></div>
              <div><dt>Approvals</dt><dd>Submissions and revisions managed with architect, PMC and client until GFC release</dd></div>
            </dl>
          </div>
          <div>
            <h3 className="sx-sub">Our fabrication unit, {company.fabricationUnit.location}</h3>
            <p className="sx-note">Our own unit, feeding both Pune and Mumbai sites.</p>
            <SpecList items={company.fabricationUnit.capability} />
            <p className="sx-note" style={{ marginTop: 18 }}>In plain terms: {company.fabricationUnit.note}</p>
          </div>
        </div>
      </Sec>

      <Sec no="04" label="Quality and testing" title="Checked at source, at site, and before handover." sheetLabel="Quality control">
        <SpecTable
          caption="Quality checks"
          columns={["No.", "Check", "What is verified"]}
          rows={company.qualityStages.map((q, i) => [String(i + 1).padStart(2, "0"), <b key={q.title}>{q.title}</b>, q.desc])}
        />
        <h3 className="sx-sub" style={{ marginTop: 36 }}>Testing</h3>
        <SpecList
          items={[...company.testing, `Snag register raised, tracked and closed before handover. ${company.defectLiability}`]}
        />
      </Sec>

      <Sec no="05" label="Safety" title="Facade work is height work, and we manage it that way." sheetLabel="Safety">
        <SpecTable
          caption="Safety measures"
          columns={["No.", "Measure", "Detail"]}
          rows={[
            ...company.safety.map((s, i) => [String(i + 1).padStart(2, "0"), <b key={s.title}>{s.title}</b>, s.desc]),
            [String(company.safety.length + 1).padStart(2, "0"), <b key="cert">Certification status</b>, `${company.isoStatus}. We will say so plainly until it is granted.`],
          ]}
        />
        <p className="sx-note" style={{ marginTop: 18, marginBottom: 0 }}>Safety officer: Akash, oversees elevation work across all active sites.</p>
      </Sec>

      <Sec no="06" label="Materials" title="Material partners." sheetLabel="Materials">
        <p className="sx-note">Brands are matched to the project specification and the consultant's approved list.</p>
        <dl className="sx-kv">
          {company.materialPartners.map((m) => (
            <div key={m.category}>
              <dt>{m.category}</dt>
              <dd>{m.detail}</dd>
            </div>
          ))}
        </dl>
        <p className="sx-note" style={{ marginTop: 18, marginBottom: 0 }}>{company.materialPartnersNote}</p>
      </Sec>

      <Sec no="07" label="After handover" title="After handover, we are still your facade team." sheetLabel="Maintenance">
        <div className="sx-split">
          <div>
            <Prose>
              <p>
                Maintenance is a core service line for us, run with the same drawing control, safety protocol and snag discipline as new work —
                for example our running contract at Embassy Techzone, Hinjewadi for Embassy REIT.
              </p>
            </Prose>
            <p className="sx-more">
              <Link to="/maintenance-services" className="fg-btn2">
                Facade maintenance &amp; AMC
              </Link>
            </p>
          </div>
          <SpecList items={company.maintenanceScope} />
        </div>
      </Sec>

      <Sec no="08" label="Verification" title="How to check any facade contractor, including us." sheetLabel="Checklist">
        <p className="sx-note">Seven questions that separate a capable contractor from a good brochure.</p>
        <SpecList items={VERIFY_CHECKLIST} />
      </Sec>

      <Sec no="09" label="On site" title="On site." sheetLabel="Photographs">
        <div className="sx-pair3">
          {[
              { src: "/projects/nanavati-max-hospital-39-2.webp", w: 1073, h: 900, alt: "Site crew installing ACP panels from a scaffold at Nanavati Max Hospital, Vile Parle, Mumbai", cap: "ACP panel installation, Nanavati Max Hospital, Vile Parle" },
              { src: "/projects/nanavati-max-hospital-39-3.webp", w: 1071, h: 899, alt: "Site crew in safety gear at facade shutter louvers, Nanavati Max Hospital, Vile Parle, Mumbai", cap: "Site crew, Nanavati Max Hospital, Vile Parle" },
              { src: "/images/profile/award-best-vendor-performance-2024.webp", w: 1523, h: 941, alt: "Best Vendor Performance 2024 trophy and certificate of appreciation from Embassy REIT", cap: "Best Vendor Performance 2024, awarded by Embassy REIT" },
          ].map((f, i) => (
            <figure key={f.src} className="sx-photo">
              <img src={f.src} alt={f.alt} width={f.w} height={f.h} sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" decoding="async" style={{ aspectRatio: "4 / 3", objectFit: "cover" }} />
              <figcaption className="sx-cap"><span>FIG. {String(i + 1).padStart(2, "0")}</span> {f.cap}</figcaption>
            </figure>
          ))}
        </div>
      </Sec>

      <Sec no="10" label="Prequalification" title="Registering us as a vendor?" sheetLabel="Vendor registration">
        <p className="sx-note">
          We can send our company profile, GST registration ({company.gstin}), trademark details, project references and
          work-at-height documentation for prequalification.
        </p>
        <p className="sx-more">
          <CallNow className="fg-btn" number />
          <Link to="/company-profile" onClick={() => openProfile(1, "slides")} className="fg-btn2">
            View the company profile
          </Link>
        </p>
      </Sec>

      <CTASection />

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
