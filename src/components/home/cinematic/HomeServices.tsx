import { Link } from "react-router-dom";

// Hrefs match the services menu in Header.tsx.
const SERVICES = [
  { href: "/curtain-wall-systems", name: "Curtain Wall Systems", line: "Unitized and stick-built curtain walls for offices, IT parks and high-rises." },
  { href: "/structural-glazing", name: "Structural Glazing", line: "Frameless, silicone-bonded glass facades, from drawings to installation." },
  { href: "/acp-aluminium-cladding", name: "ACP Cladding", line: "Aluminium composite panel cladding, routed and prepared at our own unit." },
  { href: "/aluminium-windows-doors", name: "Aluminium Windows and Doors", line: "Sliding, casement, tilt-turn and lift-slide systems, fabricated in Pune." },
  { href: "/glass-railings", name: "Glass Railings", line: "Frameless toughened glass railings with stainless steel hardware for balconies and staircases." },
  { href: "/skylights-canopies", name: "Skylights and Canopies", line: "Glass skylights, spider canopies and retractable roof systems." },
  { href: "/aluminium-louvers", name: "Aluminium Louvers", line: "Fixed and operable louvers and sun-shading fins." },
  { href: "/glass-partitions", name: "Glass Partitions", line: "Frameless office partitions, with acoustic and switchable glass options." },
  { href: "/maintenance-services", name: "Facade Maintenance", line: "Rope-access cleaning, resealing, glass replacement and emergency repairs." },
];

/** Nine services laid out like a curtain-wall elevation; each panel lights from the bottom on hover. */
const HomeServices = () => (
  <section className="svc full rv" aria-label="Services">
    <div className="wrap">
      <div className="sec-h">
        <h2 className="wipe">What we build.</h2>
        <Link className="lnk" to="/services">
          All services
        </Link>
      </div>
      <ul className="sv">
        {SERVICES.map((s, i) => (
          <li key={s.href}>
            <Link to={s.href}>
              <span className="sv-n">{String(i + 1).padStart(2, "0")}</span>
              <b>{s.name}</b>
              <span className="sv-l">{s.line}</span>
              <span className="sv-go">See the service</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default HomeServices;
