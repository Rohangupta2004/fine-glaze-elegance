import type { ReactNode } from "react";
import "./drawing.css";

/** Drawing-sheet title block: a small bordered box of mono label / value rows. */
export const TitleBlock = ({
  rows,
  dark = false,
  className = "",
}: {
  rows: Array<[string, ReactNode]>;
  dark?: boolean;
  className?: string;
}) => (
  <dl className={`dw-tb${dark ? " dw-tb-dark" : ""} ${className}`.trim()}>
    {rows.map(([k, v]) => (
      <div key={k}>
        <dt>{k}</dt>
        <dd>{v}</dd>
      </div>
    ))}
  </dl>
);

/** Dimension line: a thin rule with end ticks and a mono label. Decorative. */
export const DimLine = ({ label, dark = false, className = "" }: { label: string; dark?: boolean; className?: string }) => (
  <div className={`dw-dim${dark ? " dw-dim-dark" : ""} ${className}`.trim()} aria-hidden="true">
    <i />
    <span>{label}</span>
    <i />
  </div>
);

/** Faint 12-column grid, drawn as 12 hairline columns. Decorative. */
export const GridBg = ({ dark = false, className = "" }: { dark?: boolean; className?: string }) => (
  <div className={`dw-grid${dark ? " dw-grid-dark" : ""} ${className}`.trim()} aria-hidden="true">
    {Array.from({ length: 12 }, (_, i) => (
      <i key={i} />
    ))}
  </div>
);

/** Corner ticks for a framed viewport. Decorative. */
export const CornerTicks = () => (
  <span className="dw-ticks" aria-hidden="true">
    <i /> <i /> <i /> <i />
  </span>
);

/** "02 — Capabilities" section head with a sheet title block on the right. */
export const SectionHead = ({
  no,
  label,
  title,
  sheet,
  sheetLabel,
  dark = false,
  children,
}: {
  no: string;
  label: string;
  title: ReactNode;
  sheet: string;
  sheetLabel: string;
  dark?: boolean;
  children?: ReactNode;
}) => (
  <header className={`dw-sh${dark ? " dw-sh-dark" : ""}`}>
    <GridBg dark={dark} />
    <div className="dw-sh-l">
      <p className="dw-no">
        {no} <span aria-hidden="true">{"—"}</span>
        <span className="sr-only">:</span> {label}
      </p>
      <h2>{title}</h2>
      {children}
    </div>
    <TitleBlock dark={dark} rows={[["SHEET", sheet], ["SUBJECT", sheetLabel]]} className="dw-sh-tb" />
  </header>
);
