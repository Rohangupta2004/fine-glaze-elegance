import CallNow from "@/components/common/CallNow";

export interface ServiceQuickOverviewProps {
  serviceTitle: string;
  whatWeProvide: string;
  locationsServed?: string[];
  bestProjectTypes: string[];
  priceBenchmark?: string;
  relevantProjects: string[];
}

/** Service overview as a ruled grid of rectangular panels, like the home services elevation. */
export const ServiceQuickOverview = ({
  serviceTitle,
  whatWeProvide,
  locationsServed = ["Pune & PCMC", "Mumbai", "Navi Mumbai", "Thane"],
  bestProjectTypes,
  relevantProjects,
}: ServiceQuickOverviewProps) => {
  return (
    <section className="bg-night-2 border-y border-line py-12 md:py-16">
      <div className="fg-wrap">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-8">
          <h2 className="font-display font-medium text-3xl md:text-4xl tracking-[-0.015em] text-paper">
            {serviceTitle} overview
          </h2>
          <CallNow className="fg-btn" number />
        </div>

        <div className="fg-grid">
          <div>
            <h3 className="text-lg font-medium text-paper mb-3">What Fine Glaze provides</h3>
            <p className="text-[15.5px] text-mute leading-relaxed">{whatWeProvide}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-paper mb-3">Service locations</h3>
            <ul className="text-[15.5px] text-mute space-y-1.5">
              {locationsServed.map((loc) => (
                <li key={loc}>{loc}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-paper mb-3">Ideal building types</h3>
            <ul className="text-[15.5px] text-mute space-y-1.5">
              {bestProjectTypes.map((type) => (
                <li key={type}>{type}</li>
              ))}
            </ul>
          </div>
          <div style={{ gridColumn: "1 / -1" }}>
            <h3 className="text-lg font-medium text-paper mb-3">Project references</h3>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-1.5 text-[15.5px] text-mute">
              {relevantProjects.map((proj) => (
                <li key={proj}>{proj}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
