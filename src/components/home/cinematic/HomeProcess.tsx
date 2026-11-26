import { company } from "@/data/company";

type Photo = { src: string; alt: string; w: number; h: number; caption: string };
const STEPS: { name: string; line: string; photo?: Photo }[] = [
  {
    name: "Survey and shop drawings",
    line: "We measure on site and prepare the drawings for approval.",
    photo: {
      src: "/images/profile/ss-glass-railing-shop-drawing-jindal-house.webp",
      alt: "Shop drawing of a stainless steel glass railing for Jindal House, Mumbai",
      w: 879,
      h: 554,
      caption: "Shop drawing, SS glass railing, Jindal House",
    },
  },
  { name: "Engineering and approvals", line: "Our engineers check members and fixings, and drawings are released once approved." },
  {
    name: "Fabrication at our Pune unit",
    line: `Aluminium, steel and ACP are cut and assembled at ${company.fabricationUnit.location}, with checks at source.`,
    photo: {
      src: "/images/profile/acp-sheets-on-site-salsette-27.webp",
      alt: "Aluminium composite panel sheets stacked on site at Salsette-27, Byculla East, Mumbai",
      w: 761,
      h: 720,
      caption: "ACP sheets, Salsette-27, Byculla East",
    },
  },
  {
    name: "Installation",
    line: "Our crews install floor by floor, with a safety officer on site.",
    photo: {
      src: "/98ad845b-f086-4ad5-8739-57a5d0a8c436.jpg",
      alt: "Stainless steel column cladding being installed under scaffolding at Pune International Airport",
      w: 963,
      h: 1280,
      caption: "Column cladding on site, Pune International Airport",
    },
  },
  {
    name: "Checks and handover",
    line: "We clear the snag list with you and hand over drawings and maintenance information.",
    photo: {
      src: "/images/profile/glass-entrance-embassy-techzone.webp",
      alt: "New glass entrance at Embassy TechZone, Hinjewadi, Pune",
      w: 1280,
      h: 606,
      caption: "Glass entrance, Embassy TechZone, Hinjewadi",
    },
  },
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
                <img src={s.photo.src} alt={s.photo.alt} width={s.photo.w} height={s.photo.h} sizes="(max-width: 1000px) 260px, 230px" loading="lazy" decoding="async" />
                <figcaption>{s.photo.caption}</figcaption>
              </figure>
            )}
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default HomeProcess;
