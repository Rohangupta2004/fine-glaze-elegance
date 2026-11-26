import { Link } from "react-router-dom";
import { useSiteMedia } from "@/hooks/useSiteMedia";

// Hrefs match the services menu in Header.tsx.
const SERVICES = [
  { href: "/curtain-wall-systems", name: "Curtain Wall Systems", line: "Unitized and stick-built curtain walls for offices, IT parks and high-rises.", mediaKey: "services_card_curtain_wall", fallback: "/images/illustrations/svc-curtain-wall.webp", alt: "Curtain wall system on a commercial building" },
  { href: "/structural-glazing", name: "Structural Glazing", line: "Frameless, silicone-bonded glass facades, from drawings to installation.", mediaKey: "services_card_structural_glazing", fallback: "/images/illustrations/svc-structural-glazing.webp", alt: "Structural glazing on a glass facade" },
  { href: "/acp-aluminium-cladding", name: "ACP Cladding", line: "Aluminium composite panel cladding, routed and prepared at our own unit.", mediaKey: "services_card_acp_cladding", fallback: "/images/illustrations/svc-acp-cladding.webp", alt: "ACP cladding panels on a building facade" },
  { href: "/aluminium-windows-doors", name: "Aluminium Windows and Doors", line: "Sliding, casement, tilt-turn and lift-slide systems, fabricated in Pune.", mediaKey: "services_card_aluminium_windows", fallback: "/images/illustrations/svc-aluminium-windows.webp", alt: "Aluminium windows and sliding doors" },
  { href: "/glass-railings", name: "Glass Railings", line: "Frameless toughened glass railings with stainless steel hardware for balconies and staircases.", mediaKey: "services_card_glass_railings", fallback: "/images/illustrations/svc-glass-railings.webp", alt: "Frameless glass railing with stainless steel hardware" },
  { href: "/skylights-canopies", name: "Skylights and Canopies", line: "Glass skylights, spider canopies and retractable roof systems.", mediaKey: "services_card_skylights", fallback: "/images/illustrations/svc-skylights.webp", alt: "Glass canopy on spider fittings" },
  { href: "/aluminium-louvers", name: "Aluminium Louvers", line: "Fixed and operable louvers and sun-shading fins.", mediaKey: "services_card_louvers", fallback: "/images/illustrations/svc-louvers.webp", alt: "Aluminium louvers on a building facade" },
  { href: "/glass-partitions", name: "Glass Partitions", line: "Frameless office partitions, with acoustic and switchable glass options.", mediaKey: "services_card_glass_partitions", fallback: "/images/illustrations/svc-glass-partitions.webp", alt: "Frameless glass office partition" },
  { href: "/maintenance-services", name: "Facade Maintenance", line: "Rope-access cleaning, resealing, glass replacement and emergency repairs.", mediaKey: "services_card_amc", fallback: "/images/illustrations/svc-maintenance.webp", alt: "Facade maintenance and cleaning work" },
];

/** Nine services laid out like a curtain-wall elevation; each panel lights from the bottom on hover. */
const HomeServices = () => {
  const { getMedia } = useSiteMedia();
  return (
  <section className="svc full rv" aria-label="Services">
    <div className="wrap">
      <div className="sec-h">
        <h2 className="wipe">What we <span className="text-gradient">build.</span></h2>
        <Link className="lnk" to="/services">
          All services
        </Link>
      </div>
      <ul className="sv">
        {SERVICES.map((s, i) => (
          <li key={s.href}>
            <Link to={s.href}>
              <span className="sv-ph">
                <img
                  src={getMedia(s.mediaKey, s.fallback)}
                  srcSet={getMedia(s.mediaKey, s.fallback) === s.fallback ? s.fallback.replace(".webp", "-800.webp") + " 800w, " + s.fallback + " 1376w" : undefined}
                  sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 420px"
                  width={1376}
                  height={768}
                  loading="lazy"
                  decoding="async"
                />
              </span>
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
};

export default HomeServices;
