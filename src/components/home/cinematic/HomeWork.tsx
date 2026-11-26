import { useRef, useState, type KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import { company } from "@/data/company";

const PROJECTS = [
  {
    img: "/Embassy.webp",
    alt: "Embassy 247, Vikhroli West, Mumbai, at dusk",
    place: "Vikhroli West, Mumbai",
    client: "Embassy REIT",
    name: "Embassy 247",
    status: "Further work ongoing",
    scope: ["Approx. 80,500 running metres of sealant", "200+ glass panels replaced", "ACP cladding repair"],
  },
  {
    img: "/projects/pune-airport-terminal-42-1.webp",
    alt: "Pune International Airport, new terminal",
    place: "New terminal, Pune",
    client: "Jindal Stainless Limited",
    name: "Pune International Airport",
    status: "Completed 2023",
    scope: ["Stainless steel column cladding", "MS framing"],
  },
  {
    img: "/projects/nanavati-max-hospital-38-1.webp",
    alt: "Nanavati Max Hospital, Vile Parle",
    place: "Vile Parle, Mumbai",
    client: "L&T Construction",
    name: "Nanavati Max Hospital",
    status: "Work ongoing",
    scope: ["ACP cladding", "Top coping", "Window leakage rectification"],
  },
  {
    img: "/projects/ssg-honesty-30-1.webp",
    alt: "SSG Honesty Nimkar Building, Panvel",
    place: "Panvel",
    client: "Hatchway Windoor Pvt. Ltd.",
    name: "SSG Honesty",
    status: "Completed",
    scope: ["Structural glazing", "Curtain wall", "ACP", "Openable windows"],
  },
  {
    img: "/projects/naman-chambers-48-1.webp",
    alt: "Naman Chambers, Bandra Kurla Complex",
    place: "Bandra Kurla Complex, Mumbai",
    client: "",
    name: "Naman Chambers",
    status: "In progress",
    scope: ["Glazing", "ACP cladding"],
  },
];

const COLS = 4;
const ROWS = 3;
const PANES = Array.from({ length: COLS * ROWS }, (_, i) => ({ c: i % COLS, r: Math.floor(i / COLS) }));

const facts = (p: (typeof PROJECTS)[number]) => (p.client ? `${p.place}. Client: ${p.client}` : p.place);

const HomeWork = () => {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(0);
  const [swaps, setSwaps] = useState(0);
  const warmed = useRef(false);
  const items = useRef<Array<HTMLButtonElement | null>>([]);

  // Preload every photograph on first interaction.
  const warm = () => {
    if (warmed.current) return;
    warmed.current = true;
    PROJECTS.forEach((p) => {
      const im = new Image();
      im.src = p.img;
    });
  };

  const pick = (i: number) => {
    warm();
    if (i === active) return;
    setPrev(active);
    setActive(i);
    setSwaps((n) => n + 1);
  };

  const onKey = (e: KeyboardEvent<HTMLOListElement>) => {
    const d = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const n = (active + d + PROJECTS.length) % PROJECTS.length;
    pick(n);
    items.current[n]?.focus();
  };

  const cur = PROJECTS[active];
  const old = PROJECTS[prev];

  return (
    <>
      <section className="voice full rv">
        <div className="wrap">
          <p className="wipe">Checked at source, checked at site, and closed before handover.</p>
          <p className="v2">Facade work is height work, and it is managed as height work.</p>
        </div>
      </section>

      <section className="wk full rv" aria-label="Major projects" onPointerEnter={warm} onTouchStart={warm}>
        <div className="wrap">
          <div className="sec-h">
            <div>
              <h2 className="wipe">Recent work.</h2>
              <p className="wk-n">Five of the {company.stats.projectRecords} project records in our company profile.</p>
            </div>
            <Link className="lnk" to="/portfolio">
              See all projects
            </Link>
          </div>

          <div className="wk-g">
            <ol className="wk-l" onKeyDown={onKey}>
              {PROJECTS.map((p, i) => (
                <li key={p.name}>
                  <button
                    type="button"
                    ref={(el) => (items.current[i] = el)}
                    aria-pressed={i === active}
                    className={i === active ? "on" : undefined}
                    onMouseEnter={() => pick(i)}
                    onFocus={() => pick(i)}
                    onClick={() => pick(i)}
                  >
                    <span className="wk-i">{String(i + 1).padStart(2, "0")}</span>
                    <span className="wk-t">
                      <b>{p.name}</b>
                      <span>{facts(p)}</span>
                    </span>
                    <em>{p.status}</em>
                  </button>
                </li>
              ))}
            </ol>

            <div className="wk-r">
              <div className="tilt">
                <div className="tilt-i">
                  <div className="bay" role="img" aria-label={cur.alt}>
                    {PANES.map(({ c, r }) => {
                      const place = {
                        left: `${(c * 100) / COLS}%`,
                        top: `${(r * 100) / ROWS}%`,
                        width: `${100 / COLS}%`,
                        height: `${100 / ROWS}%`,
                      };
                      const fit = { left: `${-100 * c}%`, top: `${-100 * r}%`, width: `${100 * COLS}%`, height: `${100 * ROWS}%` };
                      return (
                        <div className="pane" style={place} key={`${c}-${r}`}>
                          {swaps > 0 && <img src={old.img} alt="" style={fit} loading="lazy" decoding="async" />}
                          <img
                            key={active}
                            className={swaps > 0 ? "swap" : undefined}
                            src={cur.img}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            style={{ ...fit, animationDelay: `${(c * ROWS + r) * 40}ms` }}
                          />
                        </div>
                      );
                    })}
                    <div className="bay-m" aria-hidden="true">
                      {PANES.map(({ c, r }) => (
                        <i key={`${c}-${r}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <ul className="sc" aria-label={`Scope of work, ${cur.name}`}>
                {cur.scope.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            <ul className="wk-s" tabIndex={0} aria-label="Projects, scroll sideways">
              {PROJECTS.map((p) => (
                <li key={p.name}>
                  <img src={p.img} alt={p.alt} loading="lazy" decoding="async" />
                  <b>{p.name}</b>
                  <span>{facts(p)}</span>
                  <em>{p.status}</em>
                  <ul className="sc">
                    {p.scope.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeWork;
