const PLATES = [
  {
    img: "/Embassy.webp",
    w: 1024,
    h: 1024,
    alt: "Embassy 247, Vikhroli West, Mumbai, at dusk",
    place: "Vikhroli West, Mumbai. Client: Embassy REIT",
    name: "Embassy 247",
    status: "Further work ongoing",
    scope: ["Approx. 80,500 running metres of sealant", "200+ glass panels replaced", "ACP cladding repair"],
  },
  {
    img: "/projects/pune-airport-terminal-42-1.webp",
    w: 1024,
    h: 576,
    alt: "Pune International Airport, new terminal",
    place: "New terminal, Pune. Client: Jindal Stainless Limited",
    name: "Pune International Airport",
    status: "Completed 2023",
    scope: ["Stainless steel column cladding", "MS framing"],
  },
  {
    img: "/projects/nanavati-max-hospital-38-1.webp",
    w: 1150,
    h: 647,
    alt: "Nanavati Max Hospital, Vile Parle",
    place: "Vile Parle, Mumbai. Client: L&T Construction",
    name: "Nanavati Max Hospital",
    status: "Work ongoing",
    scope: ["ACP cladding", "Top coping", "Window leakage rectification"],
  },
  {
    img: "/projects/ssg-honesty-30-1.webp",
    w: 1600,
    h: 900,
    alt: "SSG Honesty Nimkar Building, Panvel",
    place: "Panvel. Client: Hatchway Windoor Pvt. Ltd.",
    name: "SSG Honesty",
    status: "Completed",
    scope: ["Structural glazing", "Curtain wall", "ACP", "Openable windows"],
  },
  {
    img: "/projects/naman-chambers-48-1.webp",
    w: 1360,
    h: 765,
    alt: "Naman Chambers, Bandra Kurla Complex",
    place: "Bandra Kurla Complex, Mumbai",
    name: "Naman Chambers",
    status: "In progress",
    scope: ["Glazing", "ACP cladding"],
  },
];

const HomeWork = () => (
  <>
    <section className="voice full rv">
      <div className="wrap">
        <p className="wipe">Checked at source, checked at site, and closed before handover.</p>
        <p className="v2">Facade work is height work, and it is managed as height work.</p>
      </div>
    </section>

    <section className="rec" aria-label="Major projects">
      {PLATES.map((pl) => (
        <figure className="pl" key={pl.name}>
          <div className="pl-i">
            <img src={pl.img} width={pl.w} height={pl.h} alt={pl.alt} loading="lazy" />
          </div>
          <div className="mul" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <figcaption>
            <small>{pl.place}</small>
            <b>{pl.name}</b>
            <em>{pl.status}</em>
            <ul className="sc">
              {pl.scope.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </figcaption>
        </figure>
      ))}
      <p className="rec-n">Five of the 16 project records in our company profile.</p>
    </section>
  </>
);

export default HomeWork;
