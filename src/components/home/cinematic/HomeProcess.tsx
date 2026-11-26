import { company } from "@/data/company";

const STEPS = [
  { name: "Survey and shop drawings", line: "We measure on site and prepare the drawings for approval." },
  { name: "Engineering and approvals", line: "Our engineers check members and fixings, and drawings are released once approved." },
  { name: "Fabrication at our Pune unit", line: `Aluminium, steel and ACP are cut and assembled at ${company.fabricationUnit.location}, with checks at source.` },
  { name: "Installation", line: "Our crews install floor by floor, with a safety officer on site." },
  { name: "Checks and handover", line: "We clear the snag list with you and hand over drawings and maintenance information." },
];

/** How we work: five rectangles joined by a hairline that draws across on reveal. */
const HomeProcess = () => (
  <section className="prc full rv" aria-label="How we work">
    <div className="wrap">
      <h2 className="wipe">How we work.</h2>
      <ol className="pr">
        <li className="pr-line" aria-hidden="true" />
        {STEPS.map((s, i) => (
          <li key={s.name} style={{ ["--i" as string]: i }}>
            <span className="pr-n">{i + 1}</span>
            <b>{s.name}</b>
            <p>{s.line}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default HomeProcess;
