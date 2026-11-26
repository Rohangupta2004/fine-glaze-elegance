export interface Stat {
  value: string;
  name: string;
  line?: string;
}

/** Light large numerals, short name, quiet line, vertical rules: same treatment as the home numbers. */
export const StatBand = ({ stats }: { stats: Stat[] }) => (
  <dl className="fg-stats" style={{ ["--n" as string]: stats.length }}>
    {stats.map((s) => (
      <div key={s.name}>
        <dt>{s.value}</dt>
        <dd className="nm">{s.name}</dd>
        {s.line && <dd className="ex">{s.line}</dd>}
      </div>
    ))}
  </dl>
);

export default StatBand;
