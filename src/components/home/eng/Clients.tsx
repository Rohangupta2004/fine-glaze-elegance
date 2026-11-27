import { DimLine, SectionHead } from "@/components/common/Drawing";
import { company } from "@/data/company";

/** Static name grid, taken from the clients listed in the company profile. */
const Clients = () => (
  <section className="eg-sec" aria-label="Clients">
    <div className="fg-wrap">
      <SectionHead no="06" label="Clients" title="Who we have built for." sheet="FG-06" sheetLabel="Clients">
        <DimLine label={`${company.clients.length} clients in the profile`} className="eg-dim" />
      </SectionHead>
      <ul className="eg-cli">
        {company.clients.map((c) => (
          <li key={c.name}>
            <b>{c.name}</b>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Clients;
