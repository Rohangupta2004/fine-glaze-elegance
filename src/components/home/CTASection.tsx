import CallNow from "@/components/common/CallNow";
import { Link } from "react-router-dom";
import { GridBg, TitleBlock } from "@/components/common/Drawing";
import { company, whatsappHref } from "@/data/company";
import "@/components/common/sheet.css";

/** Dark closing band used at the foot of the service, city, guide and static pages. Same language as the home page close. */
export const CTASection = () => (
  <section className="sx-close" aria-label="Contact">
    <GridBg dark />
    <div className="fg-wrap sx-close-in">
      <div>
        <p className="dw-no">Contact</p>
        <h2>Tell us about your facade.</h2>
        <p className="sx-close-p">
          Call us to arrange a site visit, or send drawings for a quotation. We call back the same business day.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 22px", marginTop: 28 }}>
          <CallNow className="fg-btn" number />
          <Link to="/contact" className="fg-btn2" style={{ color: "#ffffff", borderColor: "#e9eae6" }}>
            Send an enquiry
          </Link>
        </div>
        <p className="sx-close-h">
          Open {company.hours.days}, {company.hours.opens} to {company.hours.closes}.
        </p>
      </div>
      <TitleBlock
        dark
        className="sx-close-tb"
        rows={[
          ["MOBILE", <a key="m" href={`tel:${company.phone.mobileE164}`}>{company.phone.mobileDisplay}</a>],
          ["WHATSAPP", <a key="w" href={whatsappHref()} target="_blank" rel="noopener noreferrer">Message us</a>],
          ["EMAIL", <a key="e" href={`mailto:${company.email}`}>{company.email}</a>],
          ["OFFICE", company.address.short],
        ]}
      />
    </div>
  </section>
);
