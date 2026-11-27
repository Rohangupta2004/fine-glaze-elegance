import { Link } from "react-router-dom";
import { DimLine, SectionHead } from "@/components/common/Drawing";
import { CAPABILITIES } from "./data";

const Capabilities = () => (
  <section className="eg-sec" aria-label="Capabilities">
    <div className="fg-wrap">
      <SectionHead no="02" label="Capabilities" title="Nine service lines, one accountable team." sheet="FG-02" sheetLabel="Services">
        <DimLine label={`${CAPABILITIES.length} service lines`} className="eg-dim" />
      </SectionHead>
      <ul className="eg-cap">
        {CAPABILITIES.map(({ href, name, line, Drawing }, i) => (
          <li key={href}>
            <Link to={href}>
              <span className="eg-cap-d">
                <Drawing />
              </span>
              <span className="eg-cap-n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{name}</h3>
              <span className="eg-cap-l">{line}</span>
              <span className="eg-cap-go" aria-hidden="true">
                {"→"}
              </span>
              <span className="sr-only">See the {name} service</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="eg-more">
        <Link className="fg-btn2" to="/services">
          All services
        </Link>
      </p>
    </div>
  </section>
);

export default Capabilities;
