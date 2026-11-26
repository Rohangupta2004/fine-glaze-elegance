import { company } from "@/data/company";

// Founder's years in facades: "11+ years" per the founder entry in company.ts.
const FOUNDER_YEARS = 11;

/** On the record: five figures that count up when the section enters view (see useReveal). */
const HomeNumbers = () => {
  const team = parseInt(company.stats.coreTeam, 10);
  return (
    <section className="nums full rv" aria-label="Fine Glaze in numbers">
      <div className="wrap">
        <h2 className="wipe">On the record.</h2>
        <dl className="ng">
          <div>
            <dt>
              <span data-count={company.stats.projectRecords}>{company.stats.projectRecords}</span>
            </dt>
            <dd>project records in our company profile</dd>
          </div>
          <div>
            <dt>
              <span data-count={company.clients.length}>{company.clients.length}</span>
            </dt>
            <dd>clients we have delivered for</dd>
          </div>
          <div>
            <dt>
              <span data-count={team}>{team}</span>+
            </dt>
            <dd>people in engineering, supervision and site work</dd>
          </div>
          <div>
            <dt>
              <span data-count={FOUNDER_YEARS}>{FOUNDER_YEARS}</span>+
            </dt>
            <dd>years our founder has worked in facades</dd>
          </div>
          <div>
            <dt>
              <span data-count={company.award.year} data-from="2000">
                {company.award.year}
              </span>
            </dt>
            <dd>Best Vendor Performance, awarded by Embassy REIT</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default HomeNumbers;
