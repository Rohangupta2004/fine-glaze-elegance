import GlassLightBg from "@/components/common/GlassLightBg";
import { company } from "@/data/company";

// Founder's years in facades: "11+ years" per the founder entry in company.ts.
const FOUNDER_YEARS = 11;

/** On the record: five figures that count up when the section enters view (see useReveal). */
const HomeNumbers = () => {
  const team = parseInt(company.stats.coreTeam, 10);
  return (
    <section className="nums full rv glb-host" aria-label="Fine Glaze in numbers">
      <GlassLightBg />
      <div className="wrap">
        <h2 className="wipe">On the <span className="text-gradient">record.</span></h2>
        <dl className="ng">
          <div>
            <dt>
              <span data-count={company.stats.projectRecords}>{company.stats.projectRecords}</span>
            </dt>
            <dd className="nm">Projects on record</dd>
            <dd className="ex">documented in our company profile</dd>
          </div>
          <div>
            <dt>
              <span data-count={company.clients.length}>{company.clients.length}</span>
            </dt>
            <dd className="nm">Clients served</dd>
            <dd className="ex">developers, contractors and owners</dd>
          </div>
          <div>
            <dt>
              <span data-count={team}>{team}</span>
              <span className="plus" aria-hidden="true">+</span>
              <span className="sr">or more</span>
            </dt>
            <dd className="nm">Core team</dd>
            <dd className="ex">engineering, supervision and site work</dd>
          </div>
          <div>
            <dt>
              <span data-count={FOUNDER_YEARS}>{FOUNDER_YEARS}</span>
              <span className="plus" aria-hidden="true">+</span>
              <span className="sr">or more</span>
            </dt>
            <dd className="nm">Years in facades</dd>
            <dd className="ex">our founder&apos;s experience in the trade</dd>
          </div>
          <div>
            <dt>
              <span data-count={company.award.year} data-from="2000">
                {company.award.year}
              </span>
            </dt>
            <dd className="nm">Best Vendor Performance</dd>
            <dd className="ex">awarded by {company.award.by}</dd>
          </div>
          <div className="ng-f">
            <dt className="sr">Award photograph</dt>
            <dd>
            <figure>
            <img
              src="/images/profile/award-best-vendor-performance-2024.webp"
              alt="Best Vendor Performance 2024 trophy and certificate of appreciation from Embassy REIT"
              width={1523}
              height={941}
              sizes="(max-width: 820px) 100vw, 30vw"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Best Vendor Performance 2024, awarded by {company.award.by}</figcaption>
          </figure>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default HomeNumbers;
