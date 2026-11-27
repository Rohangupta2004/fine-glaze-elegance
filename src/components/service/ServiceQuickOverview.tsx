import CallNow from "@/components/common/CallNow";
import { Sec } from "@/components/common/Sheet";

export interface ServiceQuickOverviewProps {
  serviceTitle: string;
  whatWeProvide: string;
  locationsServed?: string[];
  bestProjectTypes: string[];
  priceBenchmark?: string;
  relevantProjects: string[];
  /** Section number in the sheet set; defaults to "02". */
  no?: string;
  alt?: boolean;
}

/** Service overview as a key / value spec table. */
export const ServiceQuickOverview = ({
  serviceTitle,
  whatWeProvide,
  locationsServed = ["Pune & PCMC", "Mumbai", "Navi Mumbai", "Thane"],
  bestProjectTypes,
  relevantProjects,
  no = "02",
  alt = false,
}: ServiceQuickOverviewProps) => (
  <Sec no={no} label="Scope" title={`${serviceTitle} overview`} sheetLabel="Scope of supply" alt={alt}>
    <dl className="sx-kv">
      <div>
        <dt>What we provide</dt>
        <dd>{whatWeProvide}</dd>
      </div>
      <div>
        <dt>Service locations</dt>
        <dd>{locationsServed.join(", ")}</dd>
      </div>
      <div>
        <dt>Building types</dt>
        <dd>{bestProjectTypes.join(", ")}</dd>
      </div>
      <div>
        <dt>Project references</dt>
        <dd>{relevantProjects.join("; ")}</dd>
      </div>
    </dl>
    <p className="sx-more">
      <CallNow className="fg-btn" number />
    </p>
  </Sec>
);
