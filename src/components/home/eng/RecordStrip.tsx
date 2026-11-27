import { DimLine, SectionHead, CornerTicks } from "@/components/common/Drawing";
import { company } from "@/data/company";

// Founder's years in facades: "11+ years" per the founder entry in company.ts.
const FOUNDER_YEARS = "11+";

const DATA: Array<[string, string, string]> = [
  [company.stats.projectRecords, "Projects on record", "documented in our company profile"],
  [String(company.clients.length), "Clients", "developers, contractors and owners"],
  [company.stats.coreTeam, "Core team", "engineering, supervision and site work"],
  [FOUNDER_YEARS, "Years in facades", "our founder's experience in the trade"],
  [String(company.award.year), "Best Vendor Performance", `awarded by ${company.award.by}`],
];

const RecordStrip = () => (
  <section className="eg-sec eg-alt" aria-label="Record">
    <div className="fg-wrap">
      <SectionHead no="05" label="Record" title="Figures from the company profile." sheet="FG-05" sheetLabel="Record">
        <DimLine label="Company profile 2026-27" className="eg-dim" />
      </SectionHead>
      <dl className="eg-data">
        {DATA.map(([v, k, d]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>
              <b>{v}</b>
              <span>{d}</span>
            </dd>
          </div>
        ))}
      </dl>
      <figure className="eg-award">
        <div className="eg-frame eg-frame-aw">
          <img
            src="/images/profile/award-best-vendor-performance-2024.webp"
            alt="Best Vendor Performance 2024 trophy and certificate of appreciation from Embassy REIT"
            width={1523}
            height={941}
            sizes="(max-width: 900px) 100vw, 520px"
            loading="lazy"
            decoding="async"
          />
          <CornerTicks />
        </div>
        <figcaption>
          <span className="eg-fig">FIG. 05</span>
          <b>{company.award.title}</b>
          <span>Awarded by {company.award.by}. {company.award.citation}</span>
        </figcaption>
      </figure>
    </div>
  </section>
);

export default RecordStrip;
