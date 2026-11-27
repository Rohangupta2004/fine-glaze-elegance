import { useState } from "react";
import { Link } from "react-router-dom";
import { DimLine, SectionHead, CornerTicks } from "@/components/common/Drawing";
import { projectsData } from "@/data/projects";
import { SELECTED } from "./data";

const SelectedProjects = () => {
  const [active, setActive] = useState(0);
  const cur = SELECTED[active];
  return (
    <section className="eg-sec eg-alt" aria-label="Selected projects">
      <div className="fg-wrap">
        <SectionHead no="03" label="Selected projects" title="Work on record." sheet="FG-03" sheetLabel="Projects">
          <DimLine label={`${SELECTED.length} of ${Object.keys(projectsData).length} project records`} className="eg-dim" />
        </SectionHead>

        <div className="eg-pj">
          <table className="eg-tbl">
            <caption className="sr-only">Selected projects with location, client, scope and status</caption>
            <thead>
              <tr>
                <th scope="col">Project</th>
                <th scope="col">Location</th>
                <th scope="col">Client</th>
                <th scope="col">Scope</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {SELECTED.map((p, i) => (
                <tr key={p.slug} className={i === active ? "on" : undefined} onMouseEnter={() => setActive(i)}>
                  <td data-l="Project" className="eg-t-p">
                    <span className="eg-t-th">
                      <img src={p.img} alt={p.alt} width={160} height={90} loading="lazy" decoding="async" />
                    </span>
                    <Link to={`/project/${p.slug}`} onFocus={() => setActive(i)}>
                      <span className="eg-t-no">{String(i + 1).padStart(2, "0")}</span>
                      {p.title}
                    </Link>
                  </td>
                  <td data-l="Location">{p.location}</td>
                  <td data-l="Client">{p.client || <span aria-label="not listed">{"—"}</span>}</td>
                  <td data-l="Scope">{p.scope}</td>
                  <td data-l="Status">
                    <span className={`eg-st eg-st-${p.status.toLowerCase()}`}>{p.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <figure className="eg-view" aria-hidden="true">
            <div className="eg-frame">
              {SELECTED.map((p, i) => (
                <img key={p.slug} src={p.img} alt="" loading="lazy" decoding="async" className={i === active ? "on" : undefined} />
              ))}
              <CornerTicks />
            </div>
            <figcaption>
              <span>FIG. {String(active + 1).padStart(2, "0")}</span> {cur.title}, {cur.location}
            </figcaption>
          </figure>
        </div>

        <p className="eg-more">
          <Link className="fg-btn2" to="/portfolio">
            All projects
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SelectedProjects;
