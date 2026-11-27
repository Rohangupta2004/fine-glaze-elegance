import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { company, telHref } from "@/data/company";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { CTASection } from "@/components/home/CTASection";
import { Prose, Sec, SpecList, SpecTable } from "@/components/common/Sheet";
import { TitleBlock } from "@/components/common/Drawing";
import { useSiteMedia } from "@/hooks/useSiteMedia";

const values = [
  {
    title: "Precision",
    description:
      "Careful measurements, detailing and fabrication at every stage.",
  },
  {
    title: "Quality",
    description:
      "Materials matched to project specifications, supported by checks throughout fabrication and installation.",
  },
  {
    title: "Timeliness",
    description:
      "Planned fabrication and installation coordinated with your construction schedule.",
  },
  {
    title: "Collaboration",
    description:
      "Close coordination with architects, consultants and contractors from planning to handover.",
  },
];

const About = () => {
  const { getMedia } = useSiteMedia();
  const aboutHero = getMedia("about_hero", "/Embassy.webp");
  const aboutStoryPhoto = "/fine-glaze-storefront.webp";

  return (
    <Layout darkHero>
      <SEO
        title="Facade Contractor in Pune & Mumbai: About Fine Glaze"
        description="Fine Glaze is a facade contractor in Pune and Mumbai, founded by Deepak Gupta. Fabrication unit in Pisoli, Pune, 40+ core team, Embassy REIT Best Vendor Performance 2024."
        canonical="https://fineglaze.com/about"
        keywords="about Fine Glaze, Fine Glaze Pune, Deepak Gupta Fine Glaze, facade contractor Pune team, facade fabrication unit Pune"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "url": "https://fineglaze.com/about",
          "mainEntity": { "@id": "https://fineglaze.com/#organization" },
          "about": {
            "@type": "Organization",
            "@id": "https://fineglaze.com/#organization",
            "name": "Fine Glaze",
            "founder": {
              "@type": "Person",
              "name": company.founder.name,
              "jobTitle": "Founder & Proprietor",
              "description": company.founder.bio,
            },
            "employee": company.team.map((m) => ({ "@type": "Person", "name": m.name, "jobTitle": m.role })),
            "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 40 },
            "award": `${company.award.title} — ${company.award.by}`,
            "taxID": company.gstin,
          },
        }}
      />
      <PageHero
        crumbs={[{ label: "About" }]}
        title={<>Facade Specialists in <span className="text-gradient-gold">Pune &amp; Mumbai</span></>}
        intro="Fine Glaze designs, fabricates, installs and maintains facade systems for developers and asset owners from Pune and Mumbai, across India. Everything on this page is taken from our company profile, and we are happy to share the documents behind it."
        image={{ src: aboutHero, alt: "Facade by Fine Glaze" }}
        secondary={{ label: "View Projects", to: "/portfolio" }}
        source="about_hero"
      />

      <Sec no="01" label="Company" title="One accountable team, from drawing to handover." sheetLabel="Company">
        <div className="sx-split">
          <div>
            <Prose>
              <p>
                Founded by <strong>{company.founder.name}</strong> in Pune, Fine Glaze is a specialist facade contractor: design, fabrication,
                installation and long-term maintenance handled by one accountable team.
              </p>
              <p>{company.founder.bio}</p>
              <p>
                Drawings and engineering are produced in-house before anything is cut. Fabrication happens at our interim unit in{" "}
                {company.fabricationUnit.location}, and installation is run under a dedicated site incharge and supervisor, with a nominated
                safety officer. Since starting out we have delivered facade projects across Pune and Mumbai, and were named{" "}
                <strong>{company.award.title}</strong> by {company.award.by}.
              </p>
            </Prose>
          </div>
          <div className="sx-side">
            <TitleBlock
              className="sx-pd-tb"
              rows={[
                ["FIRM", company.name],
                ["STATUS", company.legalStatus],
                ["FOUNDER", company.founder.name],
                ["BASED", "Pune and Mumbai"],
                ["FABRICATION", company.fabricationUnit.location],
                ["TEAM", `${company.stats.coreTeam} core team`],
                ["RECORDS", `${company.stats.projectRecords} project records`],
                ["AWARD", `${company.award.title}, ${company.award.by}`],
              ]}
            />
          </div>
        </div>
        <div className="sx-pair">
          <figure className="sx-photo">
            <img src={aboutStoryPhoto} alt="Fine Glaze store frontage in Mohammed Wadi, Pune" width={1243} height={1034} loading="lazy" decoding="async" />
            <figcaption className="sx-cap"><span>FIG. 01</span> Our store, Mohammed Wadi, Pune</figcaption>
          </figure>
          <figure className="sx-photo">
            <img
              src="/images/profile/award-best-vendor-performance-2024.webp"
              alt="Best Vendor Performance 2024 trophy and certificate of appreciation from Embassy REIT"
              width={1523}
              height={941}
              sizes="(max-width: 1024px) 100vw, 560px"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="sx-cap">
              <span>FIG. 02</span> {company.award.title}, awarded by {company.award.by}. {company.award.citation}
            </figcaption>
          </figure>
        </div>
      </Sec>

      <Sec no="02" label="Mission and vision" title="What we are working towards." sheetLabel="Direction">
        <dl className="sx-kv">
          <div>
            <dt>Mission</dt>
            <dd>{company.mission}</dd>
          </div>
          <div>
            <dt>Vision</dt>
            <dd>{company.vision}</dd>
          </div>
        </dl>
      </Sec>

      <Sec no="03" label="Team" title="The people who answer for your facade." sheetLabel="Team" dim={`${company.team.length + 1} named, ${company.stats.coreTeam} core team`}>
        <p className="sx-note">
          A core team of {company.stats.coreTeam} across engineering, supervision and site execution supports the leadership below.
        </p>
        <SpecTable
          caption="Leadership team with roles"
          columns={["No.", "Name", "Role", "Note"]}
          rows={[
            ["01", <b key="f">{company.founder.name}</b>, company.founder.role, company.founder.bio],
            ...company.team.map((m, i) => [String(i + 2).padStart(2, "0"), <b key={m.name}>{m.name}</b>, m.role, m.note]),
          ]}
        />
      </Sec>

      <Sec no="04" label="Facilities" title="Fabrication unit and offices." sheetLabel="Facilities">
        <div className="sx-split">
          <dl className="sx-kv">
            <div>
              <dt>Fabrication unit</dt>
              <dd>{company.fabricationUnit.summary}</dd>
            </div>
            <div>
              <dt>Capability</dt>
              <dd>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 4 }}>
                  {company.fabricationUnit.capability.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt>Note</dt>
              <dd>{company.fabricationUnit.note}</dd>
            </div>
          </dl>
          <div className="sx-side">
            {[
              { src: "/images/profile/office-director-room.webp", caption: "Director's Office", alt: "Director's office at the Fine Glaze head office in Pune" },
              { src: "/images/profile/office-design-project-room.webp", caption: "Design & Project Office", alt: "Design and project office at the Fine Glaze head office in Pune" },
              { src: "/images/profile/office-client-meeting-room.webp", caption: "Client Meeting Room", alt: "Client meeting room at the Fine Glaze head office in Pune" },
            ].map((r, i) => (
              <figure key={r.src} className="sx-photo">
                <img src={r.src} alt={r.alt} width={1600} height={493} sizes="(max-width: 960px) 100vw, 480px" loading="lazy" decoding="async" />
                <figcaption className="sx-cap"><span>FIG. {String(i + 3).padStart(2, "0")}</span> {r.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Sec>

      <Sec no="05" label="Overview film" title="See Fine Glaze in action." sheetLabel="Film">
        <p className="sx-note">Watch how Fine Glaze delivers facade systems, from design and fabrication to installation and maintenance.</p>
        <div className="sx-video">
          <iframe
                src="https://player.vimeo.com/video/1191408845?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                title="FINE GLAZE"
              />
        </div>
      </Sec>

      <Sec no="06" label="Coverage" title="Where we work." sheetLabel="Coverage">
        <div className="sx-split">
          <div>
            <Prose>
              <p>Based in Pune and Mumbai, taking projects across India.</p>
              <p>{company.serviceArea.join(", ")}.</p>
            </Prose>
          </div>
          <figure className="sx-photo" style={{ background: "#ffffff" }}>
            <img src="/images/profile/india-map-pune-mumbai.webp" alt="Map of India with Pune and Mumbai marked in Maharashtra" width={1516} height={1024} sizes="(max-width: 768px) 100vw, 40vw" loading="lazy" decoding="async" className="w-full h-auto max-h-[420px] object-contain" />
          </figure>
        </div>
      </Sec>

      <Sec no="07" label="Credentials" title="Credentials for vendor registration." sheetLabel="Company facts">
        <p className="sx-note">The details procurement teams usually ask for. Copies are available on request.</p>
        <dl className="sx-kv">
          {[
            ["Legal status", company.legalStatus],
            ["GSTIN", company.gstin],
            ["Trademark", company.trademark],
            ["Quality, environment & safety", company.isoStatus],
            ["Fabrication unit", `${company.fabricationUnit.location} (interim unit, about 2,500 sq ft)`],
            ["Registered office", company.registeredOffice],
            ["Work at height", "Documentation maintained and available on request"],
            ["Third-party testing", "Air, water and structural testing (ASTM) arranged on request"],
            ["Defect liability", "DLP support offered as per contract terms"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd className={k === "GSTIN" ? "m" : undefined}>{v}</dd>
            </div>
          ))}
        </dl>
        <p className="sx-more">
          <Link to="/quality-safety" className="fg-btn2">
            How we control quality &amp; safety
          </Link>
          <a href={telHref} className="fg-btn">
            Call {company.phone.mobileDisplay}
          </a>
        </p>
      </Sec>

      <Sec no="08" label="Values" title="What drives us." sheetLabel="Values">
        <SpecList
          items={values.map((v) => (
            <>
              <b style={{ fontWeight: 500 }}>{v.title}</b>
              <span className="sx-d">{v.description}</span>
            </>
          ))}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
};

export default About;
