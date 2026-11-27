import { DimLine, SectionHead } from "@/components/common/Drawing";
import { company } from "@/data/company";

const S = company.deliveryStages;

// Five stages, each line taken from the delivery stages in company.ts.
const STAGES = [
  { name: "Survey", line: S[0].desc },
  { name: "Design & engineering", line: `${S[1].desc} ${S[2].desc}` },
  { name: "Fabrication", line: S[4].desc },
  { name: "Installation", line: S[5].desc },
  { name: "Testing & handover", line: `${S[6].desc} ${S[7].desc}` },
];

const Method = () => (
  <section className="eg-sec" aria-label="Method">
    <div className="fg-wrap">
      <SectionHead no="04" label="Method" title="From survey to handover." sheet="FG-04" sheetLabel="Process">
        <DimLine label="Survey to handover" className="eg-dim" />
      </SectionHead>
      <ol className="eg-flow">
        {STAGES.map((s, i) => (
          <li key={s.name}>
            <span className="eg-node" aria-hidden="true">
              {i + 1}
            </span>
            <h3>{s.name}</h3>
            <p>{s.line}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Method;
