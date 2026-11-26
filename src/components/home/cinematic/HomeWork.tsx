import { useEffect, useRef } from "react";
import { company } from "@/data/company";

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

const HomeWork = () => {
  const recRef = useRef<HTMLElement>(null);

  // Reveal: the js flag goes on the .fg-home wrapper, plates get "in" when 20% visible.
  // Without JS every plate is shown as is.
  useEffect(() => {
    const rec = recRef.current;
    if (!rec) return;
    const root = rec.closest(".fg-home");
    root?.classList.add("js");
    const plates = Array.from(rec.querySelectorAll<HTMLElement>(".pl"));
    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (es) => {
          es.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.2 },
      );
      plates.forEach((n) => io!.observe(n));
    } else {
      plates.forEach((n) => n.classList.add("in"));
    }
    return () => {
      io?.disconnect();
      root?.classList.remove("js");
      plates.forEach((n) => n.classList.remove("in"));
    };
  }, []);

  return (
    <>
      <section className="voice">
        <div className="wrap">
          <p>Checked at source, checked at site, and closed before handover.</p>
          <p className="v2">Facade work is height work, and it is managed as height work.</p>
        </div>
      </section>

      <section className="rec" ref={recRef} aria-label="Major projects and clients">
        <div className="wrap">
          <h2>Work we have put our name to.</h2>
        </div>
        <div className="plates">
          {PLATES.map((pl) => (
            <figure className="pl" key={pl.name}>
              <img src={pl.img} width={pl.w} height={pl.h} alt={pl.alt} loading="lazy" />
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
        </div>
        <div className="wrap">
          <p className="rec-n">Five of the 16 project records in our company profile.</p>
          <div className="ch">
            <h2>Worked with</h2>
            <ul className="cl">
              {company.clients.map((c) => (
                <li key={c.name}>
                  <b>{c.name}</b>
                  <span>{c.work.split(" · ").join(". ")}.</span>
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
