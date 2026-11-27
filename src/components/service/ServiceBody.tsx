import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import CallNow from "@/components/common/CallNow";
import FaqList from "@/components/common/FaqList";
import { company } from "@/data/company";
import { DataStrip, LinkTable, Process, Prose, Pull, Sec, SpecList, SpecTable, type SchematicKey } from "@/components/common/Sheet";

export interface ServiceSystem {
  num: string;
  title: string;
  desc: string;
  glass: string;
  wind: string;
  bestFor: string;
  price: string;
}

export interface ServiceBodyProps {
  schematic: SchematicKey;
  intro: { lead: ReactNode; tail: ReactNode; body: ReactNode; extra?: ReactNode };
  /** Renders the scope table, given its section number. */
  overview?: (no: string) => ReactNode;
  systemsTitle: ReactNode;
  systems: ServiceSystem[];
  /** Column labels for the `glass` and `wind` fields of each system. */
  systemCols: [string, string];
  features: Array<{ title: string; desc: string }>;
  featuresTitle: ReactNode;
  steps: Array<{ title?: string; desc: string }>;
  stepsTitle: ReactNode;
  promise: ReactNode;
  pricing: { title: ReactNode; intro: ReactNode; colLabel: string; rows: Array<{ system: string; glass: string; price: string }> };
  faq: Array<{ q: ReactNode; a: ReactNode }>;
  areas: string[];
  others: Array<{ title: string; href: string }>;
  /** Renders the related-projects section, given its section number. */
  related: (no: string) => ReactNode;
  /** Extra sections that belong to one page only (rendered after Systems). */
  extra?: (no: () => string) => ReactNode;
}

/** The service pages share this drawing-set layout. All copy and data come from the page that calls it. */
export const ServiceBody = (p: ServiceBodyProps) => {
  let n = 0;
  const no = () => String(++n).padStart(2, "0");
  const stats = company.stats;
  return (
    <>
      <Sec no={no()} label="Overview" title={<>{p.intro.lead} {p.intro.tail}</>} sheetLabel="Overview">
        <div className="sx-split">
          <Prose>
            <p>{p.intro.body}</p>
            {p.intro.extra}
          </Prose>
          <div className="sx-side">
            <DataStrip
              items={[
                { value: stats.projectRecords, label: "Project records" },
                { value: stats.coreTeam, label: "Core team" },
                { value: String(company.award.year), label: `${company.award.by}, ${company.award.title}` },
              ]}
            />
          </div>
        </div>
      </Sec>

      {p.overview?.(no())}

      <Sec no={no()} label="Systems" title={p.systemsTitle} sheetLabel="System schedule" dim={`${p.systems.length} systems`}>
        <SpecTable
          caption="System schedule"
          columns={["No.", "System", p.systemCols[0], p.systemCols[1], "Best for", "Pricing"]}
          mono={[2, 3, 5]}
          rows={p.systems.map((s) => [
            s.num,
            <>
              <b>{s.title}</b>
              <small>{s.desc}</small>
            </>,
            s.glass,
            s.wind,
            s.bestFor,
            s.price,
          ])}
        />
      </Sec>

      {p.extra?.(no)}

      <Sec no={no()} label="Delivery" title={p.featuresTitle} sheetLabel="Delivery">
        <SpecList
          items={p.features.map((f) => (
            <>
              <b style={{ fontWeight: 500 }}>{f.title}</b>
              <span className="sx-d">{f.desc}</span>
            </>
          ))}
        />
        <div style={{ height: "clamp(32px, 4vw, 56px)" }} />
        <h3 className="sx-sub">{p.stepsTitle}</h3>
        <Process steps={p.steps.map((s, i) => ({ title: s.title || `Stage ${i + 1}`, desc: s.desc }))} />
        <Pull label="Our promise">{p.promise}</Pull>
        <p className="sx-note" style={{ marginTop: 28, marginBottom: 0 }}>
          Clients include {company.clients.slice(0, 3).map((c) => c.name).join(", ")}.
        </p>
      </Sec>

      <Sec no={no()} label="Pricing" title={p.pricing.title} sheetLabel="How we quote">
        <p className="sx-note">{p.pricing.intro}</p>
        <SpecTable
          caption="Pricing basis"
          columns={["System", p.pricing.colLabel, "Pricing"]}
          mono={[1, 2]}
          indexed={false}
          rows={p.pricing.rows.map((r) => [r.system, r.glass, r.price])}
        />
        <p className="sx-more">
          <CallNow className="fg-btn" number />
          <Link to="/contact" className="fg-btn2">
            Send drawings
          </Link>
        </p>
      </Sec>

      {p.related(no())}

      <Sec no={no()} label="FAQ" title="Frequently asked questions" sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList items={p.faq} />
        </div>
      </Sec>

      <Sec no={no()} label="Network" title="Where we work and related services" sheetLabel="Coverage">
        <p className="sx-note">
          <span className="sx-mono">Coverage:</span> {p.areas.join(", ")}.
        </p>
        <LinkTable items={p.others.map((o) => ({ to: o.href, title: o.title.replace(/\s*→$/, "") }))} />
      </Sec>
    </>
  );
};
