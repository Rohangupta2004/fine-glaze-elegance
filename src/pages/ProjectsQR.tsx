import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Download, Mail, MapPin, Phone, Smartphone } from "lucide-react";

type ProjectStatus = "Completed" | "Ongoing";

type ProjectReference = {
  title: string;
  location: string;
  city: "mumbai" | "pune" | "panvel";
  status: ProjectStatus;
  year?: string;
  scope: string;
  client?: string;
  image: string;
};

const contact = {
  landline: "020-6829-9428",
  landlineHref: "tel:+912068299428",
  mobile: "8369233566",
  mobileHref: "tel:+918369233566",
  email: "info@fineglaze.com",
  website: "www.fineglaze.com",
};

const projects: ProjectReference[] = [
  {
    title: "Salsette-27",
    location: "Byculla East, Mumbai",
    city: "mumbai",
    status: "Ongoing",
    year: "2023",
    scope: "Toilet shaft railing work",
    image: "/Salsette27.webp",
  },
  {
    title: "LTIMindtree Mensa Campus",
    location: "Mahape, Navi Mumbai",
    city: "mumbai",
    status: "Ongoing",
    scope: "ACP and silicone facade work",
    client: "L&T Construction",
    image: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1)-elementor-io-optimized.webp",
  },
  {
    title: "Pune International Airport",
    location: "New Integrated Terminal, Pune",
    city: "pune",
    status: "Completed",
    year: "2023",
    scope: "SS column cladding with MS framing",
    client: "Jindal Stainless Limited",
    image: "/Puneairport.webp",
  },
  {
    title: "Jindal House",
    location: "Balkeshwar 32, Mumbai",
    city: "mumbai",
    status: "Completed",
    year: "2023",
    scope: "SS glass railing and SS wire mesh railing",
    image: "/Jindal house.webp",
  },
  {
    title: "Leela Business Park",
    location: "Andheri East, Mumbai",
    city: "mumbai",
    status: "Completed",
    year: "2023",
    scope: "Aluminium louvers installed on all floors",
    image: "/Business park.webp",
  },
  {
    title: "Leela Hotel",
    location: "Andheri East, Mumbai",
    city: "mumbai",
    status: "Completed",
    year: "2023",
    scope: "Laundry area fixed and openable windows",
    image: "/Hotel.webp",
  },
  {
    title: "Nirmaann Estrellaa",
    location: "Somji Chowk, Pune",
    city: "pune",
    status: "Ongoing",
    scope: "Windows, louvers, fins, maintenance and SS glass railing",
    client: "Nirmaann Encon Developer",
    image: "/Nirmann.webp",
  },
  {
    title: "SSG Honesty",
    location: "Panvel, Raigad",
    city: "panvel",
    status: "Ongoing",
    scope: "Structural glazing, curtain wall glazing, ACP and openable windows",
    client: "Hatchway Windoor Pvt. Ltd.",
    image: "/Pan.webp",
  },
  {
    title: "Embassy 247",
    location: "Vikhroli, Mumbai",
    city: "mumbai",
    status: "Completed",
    year: "2024",
    scope: "Facade glass replacement",
    client: "Embassy REIT",
    image: "/Embassy.webp",
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "completed", label: "Completed" },
  { id: "ongoing", label: "Ongoing" },
  { id: "mumbai", label: "Mumbai" },
  { id: "pune", label: "Pune" },
];

const scopeTags = [
  "Facade",
  "Structural glazing",
  "ACP / cladding",
  "Windows",
  "Glass railing",
  "Louvers",
  "Maintenance",
];

const ProjectsQR = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;

    return projects.filter((project) => {
      if (activeFilter === "completed" || activeFilter === "ongoing") {
        return project.status.toLowerCase() === activeFilter;
      }

      return project.city === activeFilter;
    });
  }, [activeFilter]);

  return (
    <>
      <Helmet>
        <title>Fine Glaze Projects & Contact</title>
        <meta
          name="description"
          content="Fine Glaze compact project references and contact details for project owners and new clients."
        />
        <link rel="canonical" href="https://fineglaze.com/projects-qr" />
      </Helmet>

      <main className="min-h-screen bg-[#f1ebe3] text-[#120f0c]">
        <section className="mx-auto w-full max-w-6xl px-3 py-3 pb-24 sm:px-5 lg:py-5">
          <header className="sticky top-3 z-20 flex items-center justify-between gap-3 border border-[#d5bea0] bg-[#fffaf3]/95 p-3 shadow-[0_14px_40px_rgba(45,28,14,0.14)] backdrop-blur sm:p-4">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid h-12 w-12 flex-none place-items-center border border-[#c49a5f] bg-white">
                <img
                  src="/favicon.png"
                  alt=""
                  className="h-9 w-9 object-contain"
                  aria-hidden="true"
                />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-extrabold uppercase tracking-normal text-[#8a541f]">
                  Compact project reference
                </p>
                <h1 className="truncate text-3xl font-extrabold leading-none tracking-normal sm:text-5xl">
                  Fine Glaze
                </h1>
              </div>
            </div>

            <div className="hidden gap-2 sm:flex">
              <a
                href={contact.mobileHref}
                className="inline-flex min-h-11 items-center gap-2 bg-[#17120e] px-4 text-sm font-extrabold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition hover:bg-[#5f3515]"
              >
                <Phone size={17} />
                Call
              </a>
              <a
                href={`mailto:${contact.email}?subject=Project%20enquiry%20for%20Fine%20Glaze`}
                className="inline-flex min-h-11 items-center gap-2 border border-[#c49a5f] bg-[#f7ead7] px-4 text-sm font-extrabold text-[#2b1a0e] transition hover:bg-[#ead2ae]"
              >
                <Mail size={17} />
                Email
              </a>
              <a
                href="/fine-glaze-contact.vcf"
                className="inline-flex min-h-11 items-center gap-2 border border-[#c49a5f] bg-[#fffaf3] px-4 text-sm font-extrabold text-[#2b1a0e] transition hover:bg-[#ead2ae]"
              >
                <Download size={17} />
                Save
              </a>
            </div>
          </header>

          <section className="mt-3 grid gap-3 lg:grid-cols-[minmax(0,1fr)_380px]">
            <div className="border border-[#d5bea0] bg-[#fffaf3] p-4 shadow-[0_12px_34px_rgba(45,28,14,0.1)] sm:p-6">
              <p className="text-xs font-extrabold uppercase tracking-normal text-[#8a541f]">
                Project owners and new clients
              </p>
              <h2 className="mt-2 max-w-3xl text-3xl font-extrabold leading-tight tracking-normal sm:text-5xl">
                Projects and direct contact in one scan.
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {scopeTags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#b98548]/40 bg-[#f3dfc2] px-3 py-2 text-sm font-extrabold text-[#583414]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <address className="grid gap-2 border border-[#d5bea0] bg-[#fffaf3] p-4 not-italic shadow-[0_12px_34px_rgba(45,28,14,0.1)] sm:p-5">
              <a href={contact.landlineHref} className="border border-[#d8c2a5] bg-[#f8efe3] p-3 transition hover:border-[#9a642b]">
                <span className="text-xs font-extrabold uppercase text-[#72512b]">Landline</span>
                <strong className="mt-1 flex items-center gap-2 text-lg">
                  <Phone size={17} />
                  {contact.landline}
                </strong>
              </a>
              <a href={contact.mobileHref} className="border border-[#d8c2a5] bg-[#f8efe3] p-3 transition hover:border-[#9a642b]">
                <span className="text-xs font-extrabold uppercase text-[#72512b]">Mobile</span>
                <strong className="mt-1 flex items-center gap-2 text-lg">
                  <Smartphone size={17} />
                  {contact.mobile}
                </strong>
              </a>
              <a href={`mailto:${contact.email}`} className="border border-[#d8c2a5] bg-[#f8efe3] p-3 transition hover:border-[#9a642b]">
                <span className="text-xs font-extrabold uppercase text-[#72512b]">Email</span>
                <strong className="mt-1 block break-words text-lg">{contact.email}</strong>
              </a>
              <a href="/fine-glaze-contact.vcf" className="border border-[#d8c2a5] bg-[#f8efe3] p-3 transition hover:border-[#9a642b]">
                <span className="text-xs font-extrabold uppercase text-[#72512b]">Save</span>
                <strong className="mt-1 block text-lg">Contact card</strong>
              </a>
            </address>
          </section>

          <section className="mt-3 border border-[#d5bea0] bg-[#fffaf3] p-4 shadow-[0_12px_34px_rgba(45,28,14,0.1)] sm:p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-normal text-[#8a541f]">
                  Project references
                </p>
                <h2 className="mt-1 text-2xl font-extrabold leading-tight tracking-normal sm:text-4xl">
                  Selected work from Fine Glaze
                </h2>
              </div>
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveFilter(filter.id)}
                    className={`min-h-10 border px-3 text-sm font-extrabold transition ${
                      activeFilter === filter.id
                        ? "border-[#17120e] bg-[#17120e] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]"
                        : "border-[#c49a5f] bg-[#fffaf3] text-[#5e3a18] hover:border-[#17120e] hover:bg-[#f3dfc2] hover:text-[#17120e]"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <article
                  key={`${project.title}-${project.location}`}
                  className="grid min-h-40 grid-cols-[104px_minmax(0,1fr)] overflow-hidden border border-[#d8c2a5] bg-white shadow-[0_8px_22px_rgba(45,28,14,0.06)]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="min-w-0 p-3">
                    <span
                      className={`inline-flex px-2 py-1 text-[11px] font-extrabold uppercase ${
                        project.status === "Completed"
                          ? "bg-[#17120e] text-[#f6dfb7]"
                          : "bg-[#f0d6ac] text-[#5d3515]"
                      }`}
                    >
                      {project.status}
                      {project.year ? ` ${project.year}` : ""}
                    </span>
                    <h3 className="mt-2 text-lg font-extrabold leading-snug">{project.title}</h3>
                    <p className="mt-1 flex items-start gap-1 text-sm text-[#735332]">
                      <MapPin size={15} className="mt-0.5 flex-none" />
                      {project.location}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#3b2a1d]">{project.scope}</p>
                    {project.client && (
                      <p className="mt-2 text-xs font-bold uppercase text-[#735332]">
                        Client: <span className="normal-case text-[#3b2a1d]">{project.client}</span>
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>

        <nav className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-3 border-t border-[#c49a5f]/30 bg-[#17120e] text-white sm:hidden">
          <a
            href={contact.mobileHref}
            className="grid min-h-14 place-items-center bg-[#b98548] font-extrabold text-white"
          >
            Call
          </a>
          <a
            href={`mailto:${contact.email}?subject=Project%20enquiry%20for%20Fine%20Glaze`}
            className="grid min-h-14 place-items-center font-extrabold"
          >
            Email
          </a>
          <a href="/fine-glaze-contact.vcf" className="grid min-h-14 place-items-center font-extrabold">
            Save
          </a>
        </nav>
      </main>
    </>
  );
};

export default ProjectsQR;
