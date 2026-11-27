import type { ComponentType, ReactNode } from "react";
import { Link } from "react-router-dom";
import { company } from "@/data/company";
import { DimLine, SectionHead, CornerTicks } from "./Drawing";
import {
  CurtainWallDrawing, StructuralGlazingDrawing, CladdingDrawing, WindowDoorDrawing, RailingDrawing,
  SkylightDrawing, LouverDrawing, PartitionDrawing, MaintenanceDrawing,
} from "@/components/home/eng/Schematics";
import "./sheet.css";

/** Inline schematics, keyed by service. Generic line drawings, never project photos. */
export const SCHEMATICS = {
  curtain: { Drawing: CurtainWallDrawing, caption: "Elevation: mullions, transoms and floor slab" },
  structural: { Drawing: StructuralGlazingDrawing, caption: "Plan section: glass bonded to a mullion" },
  cladding: { Drawing: CladdingDrawing, caption: "Section: cladding panels on a sub-frame" },
  windows: { Drawing: WindowDoorDrawing, caption: "Elevation: window and door framing" },
  railing: { Drawing: RailingDrawing, caption: "Elevation: glass balustrade with fittings" },
  skylight: { Drawing: SkylightDrawing, caption: "Section: glazed roof on a support structure" },
  louver: { Drawing: LouverDrawing, caption: "Section: louver blades on a frame" },
  partition: { Drawing: PartitionDrawing, caption: "Elevation: glass partition panels" },
  maintenance: { Drawing: MaintenanceDrawing, caption: "Detail: sealant joint at a glass edge" },
} as const satisfies Record<string, { Drawing: ComponentType; caption: string }>;
export type SchematicKey = keyof typeof SCHEMATICS;

/** Framed schematic with corner ticks and a mono caption. Illustrative only. */
export const SchematicFig = ({ kind, fig = "01", className = "" }: { kind: SchematicKey; fig?: string; className?: string }) => {
  const { Drawing, caption } = SCHEMATICS[kind];
  return (
    <figure className={`sx-fig ${className}`.trim()}>
      <div className="sx-fig-f">
        <Drawing />
        <CornerTicks />
      </div>
      <figcaption>
        <span>FIG. {fig}</span> {caption}. Illustrative, not to scale.
      </figcaption>
    </figure>
  );
};

/** A numbered drawing-set section: SectionHead, then content. */
export const Sec = ({
  no, label, title, sheet, sheetLabel, dim, alt = false, id, children,
}: {
  no: string; label: string; title: ReactNode; sheet?: string; sheetLabel?: string; dim?: string; alt?: boolean; id?: string; children?: ReactNode;
}) => (
  <section className={`sx-sec${alt ? " sx-alt" : ""}`} id={id} aria-label={label}>
    <div className="fg-wrap">
      <SectionHead no={no} label={label} title={title} sheet={sheet || `FG-${no}`} sheetLabel={sheetLabel || label}>
        {dim && <DimLine label={dim} className="sx-dim" />}
      </SectionHead>
      {children}
    </div>
  </section>
);

/** Spec table: first column is a mono index, other cells are values. Stacks into labelled rows on phones. */
export const SpecTable = ({
  caption, columns, rows, mono = [], className = "", indexed = true,
}: {
  caption: string; columns: string[]; rows: ReactNode[][]; mono?: number[]; className?: string; indexed?: boolean;
}) => (
  <div className={`sx-tw ${className}`.trim()}>
    <table className="sx-tbl">
      <caption className="sr-only">{caption}</caption>
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c} scope="col">{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            {r.map((cell, j) => (
              <td key={j} data-l={columns[j]} className={j === 0 && indexed ? "sx-t-no" : mono.includes(j) ? "sx-mono" : undefined}>
                <div className="sx-c">{cell}</div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/** Two-column hairline list with mono index numbers. */
export const SpecList = ({ items }: { items: readonly ReactNode[] }) => (
  <ol className="sx-list">
    {items.map((t, i) => (
      <li key={i}>
        <span className="sx-n">{String(i + 1).padStart(2, "0")}</span>
        <span>{t}</span>
      </li>
    ))}
  </ol>
);

/** Hairline link table: title, descriptor, arrow. */
export const LinkTable = ({ items }: { items: Array<{ to: string; title: string; desc?: string }> }) => (
  <ul className="sx-links">
    {items.map((l) => (
      <li key={l.to}>
        <Link to={l.to}>
          <b>{l.title}</b>
          {l.desc && <span>{l.desc}</span>}
          <i aria-hidden="true">{"→"}</i>
        </Link>
      </li>
    ))}
  </ul>
);

/** Numbered process strip with a rule running through the nodes. */
export const Process = ({ steps }: { steps: Array<{ title: string; desc: string }> }) => (
  <ol className="sx-flow" style={{ ["--n" as string]: steps.length }}>
    {steps.map((s, i) => (
      <li key={s.title}>
        <span className="sx-node" aria-hidden="true">{i + 1}</span>
        <h3>{s.title}</h3>
        <p>{s.desc}</p>
      </li>
    ))}
  </ol>
);

/** Company delivery stages from company.ts, as a process strip. */
export const DeliveryProcess = () => {
  const S = company.deliveryStages;
  return (
    <Process
      steps={[
        { title: "Survey", desc: S[0].desc },
        { title: "Design & engineering", desc: `${S[1].desc} ${S[2].desc}` },
        { title: "Fabrication", desc: S[4].desc },
        { title: "Installation", desc: S[5].desc },
        { title: "Testing & handover", desc: `${S[6].desc} ${S[7].desc}` },
      ]}
    />
  );
};

/** Row of mono figures, ruled. */
export const DataStrip = ({ items }: { items: Array<{ value: string; label: string }> }) => (
  <dl className="sx-data" style={{ ["--n" as string]: items.length }}>
    {items.map((d) => (
      <div key={d.label}>
        <dt>{d.label}</dt>
        <dd>{d.value}</dd>
      </div>
    ))}
  </dl>
);

/** Rule-edged statement. */
export const Pull = ({ label, children }: { label?: string; children: ReactNode }) => (
  <blockquote className="sx-pull">
    {label && <p>{label}</p>}
    <div>{children}</div>
  </blockquote>
);

/** Wrapper for long-form copy: readable measure, Plex Sans. */
export const Prose = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`sx-prose ${className}`.trim()}>{children}</div>
);
