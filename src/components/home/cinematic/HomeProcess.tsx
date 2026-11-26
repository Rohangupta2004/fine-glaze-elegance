import { company } from "@/data/company";

const STEPS: { name: string; line: string; photo?: string; caption?: string }[] = [
  { name: "Survey and shop drawings", line: "We measure on site and prepare the drawings for approval." },
  { name: "Engineering and approvals", line: "Our engineers check members and fixings, and drawings are released once approved." },
  { name: "Fabrication at our Pune unit", line: `Aluminium, steel and ACP are cut and assembled at ${company.fabricationUnit.location}, with checks at source.` },
  { name: "Installation", line: "Our crews install floor by floor, with a safety officer on site.", photo: "/98ad845b-f086-4ad5-8739-57a5d0a8c436.jpg", caption: "Column cladding on site, Pune International Airport" },
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
            {s.photo && (
              <figure className="pr-f">
                <img src={s.photo} alt="Stainless steel column cladding being installed under scaffolding" width={963} height={1280} loading="lazy" decoding="async" />
                <figcaption>{s.caption}</figcaption>
              </figure>
            )}
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default HomeProcess;
