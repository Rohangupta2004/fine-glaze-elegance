import CallNow from "@/components/common/CallNow";
import { GridBg, TitleBlock } from "@/components/common/Drawing";
import { company } from "@/data/company";

const Close = () => (
  <section className="eg-close" aria-label="Contact">
    <GridBg dark />
    <div className="fg-wrap eg-close-in">
      <div className="eg-close-l">
        <p className="dw-no">07 {"—"} Contact</p>
        <h2>Start with a site survey.</h2>
        <p className="eg-close-p">
          Call us to arrange a visit. We measure, study access and freeze the scope with you and your consultant before any drawing is issued.
        </p>
        <CallNow className="fg-btn eg-cta" number />
        <p className="eg-close-h">
          Open {company.hours.days}, {company.hours.opens} to {company.hours.closes}.
        </p>
      </div>
      <TitleBlock
        dark
        className="eg-close-tb"
        rows={[
          ["SHEET", "FG-07 / CONTACT"],
          ["MOBILE", <a key="m" href={`tel:${company.phone.mobileE164}`}>{company.phone.mobileDisplay}</a>],
          ["OFFICE", <a key="o" href={`tel:${company.phone.officeE164}`}>{company.phone.officeDisplay}</a>],
          ["EMAIL", <a key="e" href={`mailto:${company.email}`}>{company.email}</a>],
          ["ADDRESS", company.address.short],
          ["FABRICATION", `Interim unit, ${company.fabricationUnit.location}`],
        ]}
      />
    </div>
  </section>
);

export default Close;
