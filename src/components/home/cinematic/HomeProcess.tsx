import { company } from "@/data/company";

type Photo = { src: string; alt: string; w: number; h: number; caption?: string; srcSet?: string };
const PHOTOS: Record<number, Photo> = {
  0: {
      src: "/images/illustrations/process-survey.webp",
      srcSet: "/images/illustrations/process-survey-800.webp 800w, /images/illustrations/process-survey.webp 1376w",
      alt: "Gloved hand measuring a concrete column with a laser measure on a building site",
      w: 1376,
      h: 768,
    },
  2: {
      src: "/images/illustrations/process-engineering.webp",
      srcSet: "/images/illustrations/process-engineering-800.webp 800w, /images/illustrations/process-engineering.webp 1376w",
      alt: "Engineering drawings and an aluminium profile sample on a desk beside a laptop",
      w: 1376,
      h: 768,
    },
  4: {
      src: "/projects/salsette-27-32-1.webp",
      alt: "Aluminium composite panel sheets stacked on site at Salsette-27, Byculla East, Mumbai",
      w: 761,
      h: 720,
      caption: "ACP sheets, Salsette-27, Byculla East",
    },
  5: {
      src: "/98ad845b-f086-4ad5-8739-57a5d0a8c436.jpg",
      alt: "Stainless steel column cladding being installed under scaffolding at Pune International Airport",
      w: 963,
      h: 1280,
      caption: "Column cladding on site, Pune International Airport",
    },
  7: {
      src: "/projects/embassy-techzone-41-2.webp",
      alt: "New glass entrance at Embassy TechZone, Hinjewadi, Pune",
      w: 1280,
      h: 606,
      caption: "Glass entrance, Embassy TechZone, Hinjewadi",
    },
};

const STEPS: { name: string; line: string; photo?: Photo }[] = company.deliveryStages.map((st, i) => ({ name: st.title, line: st.desc, photo: PHOTOS[i] }));

/** How we work: five rectangles joined by a hairline that draws across on reveal. */
const HomeProcess = () => (
  <section className="prc full rv" aria-label="How we deliver">
    <div className="wrap">
      <h2 className="wipe">From enquiry to <span className="text-gradient">handover.</span></h2>
      <ol className="pr">
        <li className="pr-line" aria-hidden="true" />
        {STEPS.map((s, i) => (
          <li key={s.name} style={{ ["--i" as string]: i }}>
            <span className="pr-n">{i + 1}</span>
            <b>{s.name}</b>
            <p>{s.line}</p>
            {s.photo && (
              <figure className="pr-f">
                <img src={s.photo.src} srcSet={s.photo.srcSet} alt={s.photo.alt} width={s.photo.w} height={s.photo.h} sizes="(max-width: 1000px) 260px, 230px" loading="lazy" decoding="async" />
                {s.photo.caption && <figcaption>{s.photo.caption}</figcaption>}
              </figure>
            )}
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default HomeProcess;
