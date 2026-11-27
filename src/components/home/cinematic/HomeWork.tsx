import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projectsData } from "@/data/projects";

const PROJECTS = [
  {
    img: "/Embassy.webp",
    alt: "Embassy 247, Vikhroli West, Mumbai, at dusk",
    place: "Gandhi Nagar, Vikhroli West, Mumbai",
    client: "Embassy REIT",
    name: "Embassy 247",
    status: "Further work ongoing",
    scope: ["Water treatment and sealant, approx. 80,500 RMT", "200+ foggy or damaged glass panels replaced", "ACP cladding repair"],
  },
  {
    img: "/projects/pune-airport-terminal-42-1.webp",
    alt: "Pune International Airport, new terminal",
    place: "New Integrated Terminal, Pune",
    client: "Jindal Stainless Limited",
    name: "Pune International Airport",
    status: "Completed 2023",
    scope: ["Stainless steel column cladding", "MS framing"],
  },
  {
    img: "/projects/nanavati-max-hospital-38-1.webp",
    alt: "Nanavati Max Hospital, Vile Parle, Mumbai",
    place: "Vile Parle, Mumbai",
    client: "L & T Building & Construction",
    name: "Nanavati Max Hospital",
    status: "Work ongoing",
    scope: ["ACP cladding", "ACP top coping", "Window leakage rectification"],
  },
  {
    img: "/projects/ssg-honesty-30-1.webp",
    alt: "SSG Honesty Nimkar Building, Panvel",
    place: "Panvel, District Raigad",
    client: "Hatchway Windoor Pvt. Ltd.",
    name: "SSG Honesty Nimkar Building",
    status: "Completed",
    scope: ["Structural glazing", "Curtain wall glazing", "ACP work", "Openable windows"],
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

// The real number of project records on the site, so the line below never drifts from the data.
const PROJECT_COUNT = Object.keys(projectsData).length;

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
  const rail = useRef<HTMLUListElement>(null);
  const [slide, setSlide] = useState(0);
  const busy = useRef<number | undefined>();

  // Phone carousel: which slide is in view, from the scroll position.
  const onRail = useCallback(() => {
    const el = rail.current;
    if (!el || busy.current !== undefined) return;
    const kids = Array.from(el.children) as HTMLElement[];
    const x = el.scrollLeft + (kids[0]?.offsetLeft ?? 0);
    let best = 0;
    kids.forEach((k, i) => {
      if (Math.abs(k.offsetLeft - x) < Math.abs(kids[best].offsetLeft - x)) best = i;
    });
    setSlide(best);
  }, []);

  const goSlide = (i: number) => {
    const el = rail.current;
    if (!el) return;
    const n = Math.min(PROJECTS.length - 1, Math.max(0, i));
    const kids = Array.from(el.children) as HTMLElement[];
    const reduce = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.clearTimeout(busy.current);
    busy.current = window.setTimeout(() => {
      busy.current = undefined;
      onRail();
    }, reduce ? 50 : 750);
    el.scrollTo({ left: kids[n].offsetLeft - kids[0].offsetLeft, behavior: reduce ? "auto" : "smooth" });
    setSlide(n);
  };

  const onRailKey = (e: KeyboardEvent<HTMLUListElement>) => {
    if (e.key === "ArrowRight") { e.preventDefault(); goSlide(slide + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); goSlide(slide - 1); }
  };

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    el.addEventListener("scrollend", onRail);
    return () => el.removeEventListener("scrollend", onRail);
  }, [onRail]);

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
          <p className="wipe">Checked at source and at site, closed before handover.</p>
          <p className="v2">Facade work is height work, and we manage it that way.</p>
        </div>
      </section>

      <section className="wk full rv" aria-label="Major projects" onPointerEnter={warm} onTouchStart={warm}>
        <div className="wrap">
          <div className="sec-h">
            <div>
              <h2 className="wipe">Recent <span className="text-gradient">work.</span></h2>
              <p className="wk-n">Five of {PROJECT_COUNT} projects in our profile.</p>
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
                          {swaps > 0 && <img src={old.img} alt="" style={fit} decoding="async" />}
                          <img
                            key={active}
                            className={swaps > 0 ? "swap" : undefined}
                            src={cur.img}
                            alt=""
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

            <div className="wk-m" role="region" aria-roledescription="carousel" aria-label="Recent projects">
            <ul className="wk-s" ref={rail} onScroll={onRail} onKeyDown={onRailKey} tabIndex={0} aria-label="Projects, swipe sideways">
              {PROJECTS.map((p, i) => (
                <li key={p.name} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${PROJECTS.length}`}>
                  <img src={p.img} alt={p.alt} loading="eager" decoding="async" />
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
            <div className="wk-c">
              <button type="button" aria-label="Previous project" onClick={() => goSlide(slide - 1)} disabled={slide === 0}>
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <span className="wk-cn" aria-live="polite">
                {String(slide + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
              </span>
              <span className="wk-dots" aria-hidden="true">
                {PROJECTS.map((p, i) => (
                  <i key={p.name} className={i === slide ? "on" : undefined} />
                ))}
              </span>
              <button type="button" aria-label="Next project" onClick={() => goSlide(slide + 1)} disabled={slide === PROJECTS.length - 1}>
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeWork;
