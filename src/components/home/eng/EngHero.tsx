import { Link } from "react-router-dom";
import CallNow from "@/components/common/CallNow";
import { GridBg, TitleBlock } from "@/components/common/Drawing";
import { HERO } from "./data";

const ZONES = "ABCDEFGHIJKL".split("");

/** Hero: a real project photograph with drawing-sheet furniture. No 3D, no video. */
const EngHero = () => {
  const p = HERO.project;
  const rows: Array<[string, string]> = [
    ["PROJECT", p.title],
    ["LOCATION", p.location],
    ...(p.client ? ([["CLIENT", p.client]] as Array<[string, string]>) : []),
    ["SCOPE", p.scope],
    ["STATUS", p.status],
  ];
  return (
    <section className="eh" aria-label="Fine Glaze, facade contractor">
      <div className="eh-photo">
        <img
          src={HERO.src}
          width={HERO.width}
          height={HERO.height}
          alt={HERO.alt}
          decoding="async"
          loading="eager"
          {...({ fetchpriority: "high" } as Record<string, string>)}
        />
        <GridBg dark />
        <div className="eh-rt" aria-hidden="true">
          {ZONES.map((z) => (
            <span key={z}>{z}</span>
          ))}
        </div>
        <div className="eh-rl" aria-hidden="true">
          {[1, 2, 3, 4].map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>
      </div>

      <div className="fg-wrap eh-in">
        <div className="eh-panel">
          <p className="eh-eye">Facade contractor / Pune and Mumbai</p>
          <h1>Facade engineering, fabrication and installation.</h1>
          <p className="eh-sub">Curtain walls, structural glazing and cladding for developers and asset owners, from Pune and Mumbai.</p>
          <div className="eh-act">
            <CallNow className="fg-btn" number />
            <Link className="fg-btn2 eh-btn2" to="/portfolio">
              View projects
            </Link>
          </div>
        </div>
        <TitleBlock dark className="eh-tb" rows={rows} />
      </div>
    </section>
  );
};

export default EngHero;
