import { projectsData } from "@/data/projects";
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

const projects: ProjectReference[] = Object.values(projectsData).map((project) => ({
  title: project.title,
  location: project.location,
  city: /panvel/i.test(project.location) ? "panvel" : /pune/i.test(project.location) ? "pune" : "mumbai",
  status: project.status,
  year: project.year,
  scope: project.scope,
  client: project.client,
  image: project.image,
}));

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

      <main className="min-h-screen bg-[#e9eae6] text-[#15181b]">
        <section className="mx-auto w-full max-w-6xl px-3 py-3 pb-24 sm:px-5 lg:py-5">
          <header className="sticky top-3 z-20 flex items-center justify-between gap-3 border border-[#cfd2cd] bg-[#ffffff]/95 p-3 sm:p-4">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid h-12 w-12 flex-none place-items-center border border-[#9b5520] bg-night">
                <img decoding="async"
                  src="/favicon.png"
                  alt=""
                  className="h-9 w-9 object-contain"
                  aria-hidden="true"
                />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-normal text-[#9b5520]">
                  Compact project reference
                </p>
                <h1 className="truncate text-2xl font-medium leading-none tracking-normal sm:text-3xl">
                  Fine Glaze
                </h1>
              </div>
            </div>

            <div className="hidden gap-2 sm:flex">
              <a
                href={contact.mobileHref}
                className="inline-flex min-h-11 items-center gap-2 bg-[#15181b] px-4 text-sm font-semibold text-paper transition hover:bg-[#7f4318]"
              >
                <Phone size={17} />
                Call
              </a>
              <a
                href={`mailto:${contact.email}?subject=Project%20enquiry%20for%20Fine%20Glaze`}
                className="inline-flex min-h-11 items-center gap-2 border border-[#9b5520] bg-[#e9eae6] px-4 text-sm font-semibold text-[#15181b] transition hover:bg-[#e9eae6]"
              >
                <Mail size={17} />
                Email
              </a>
              <a
                href="/fine-glaze-contact.vcf"
                className="inline-flex min-h-11 items-center gap-2 border border-[#9b5520] bg-[#ffffff] px-4 text-sm font-semibold text-[#15181b] transition hover:bg-[#e9eae6]"
              >
                <Download size={17} />
                Save
              </a>
            </div>
          </header>

          <section className="mt-3 grid gap-3 lg:grid-cols-[minmax(0,1fr)_380px]">
            <div className="border border-[#cfd2cd] bg-[#ffffff] p-4 sm:p-6">
              <p className="text-xs font-semibold tracking-normal text-[#9b5520]">
                Project owners and new clients
              </p>
              <h2 className="mt-2 max-w-3xl text-2xl font-medium leading-tight tracking-normal sm:text-4xl">
                Projects and direct contact in one scan.
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {scopeTags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#9b5520]/40 bg-[#e9eae6] px-3 py-2 text-sm font-semibold text-[#7f4318]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <address className="grid gap-2 border border-[#cfd2cd] bg-[#ffffff] p-4 not-italic sm:p-5">
              <a href={contact.landlineHref} className="border border-[#cfd2cd] bg-[#e9eae6] p-3 transition hover:border-[#9b5520]">
                <span className="text-xs font-semibold text-[#555b62]">Landline</span>
                <strong className="mt-1 flex items-center gap-2 text-lg">
                  <Phone size={17} />
                  {contact.landline}
                </strong>
              </a>
              <a href={contact.mobileHref} className="border border-[#cfd2cd] bg-[#e9eae6] p-3 transition hover:border-[#9b5520]">
                <span className="text-xs font-semibold text-[#555b62]">Mobile</span>
                <strong className="mt-1 flex items-center gap-2 text-lg">
                  <Smartphone size={17} />
                  {contact.mobile}
                </strong>
              </a>
              <a href={`mailto:${contact.email}`} className="border border-[#cfd2cd] bg-[#e9eae6] p-3 transition hover:border-[#9b5520]">
                <span className="text-xs font-semibold text-[#555b62]">Email</span>
                <strong className="mt-1 block break-words text-lg">{contact.email}</strong>
              </a>
              <a href="/fine-glaze-contact.vcf" className="border border-[#cfd2cd] bg-[#e9eae6] p-3 transition hover:border-[#9b5520]">
                <span className="text-xs font-semibold text-[#555b62]">Save</span>
                <strong className="mt-1 block text-lg">Contact card</strong>
              </a>
            </address>
          </section>

          <section className="mt-3 border border-[#cfd2cd] bg-[#ffffff] p-4 sm:p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-normal text-[#9b5520]">
                  Project references
                </p>
                <h2 className="mt-1 text-2xl font-medium leading-tight tracking-normal sm:text-4xl">
                  Selected work from Fine Glaze
                </h2>
              </div>
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveFilter(filter.id)}
                    className={`min-h-10 border px-3 text-sm font-semibold transition ${
                      activeFilter === filter.id
                        ? "border-[#15181b] bg-[#15181b] text-paper"
                        : "border-[#9b5520] bg-[#ffffff] text-[#7f4318] hover:border-[#15181b] hover:bg-[#e9eae6] hover:text-[#15181b]"
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
                  className="grid min-h-40 grid-cols-[104px_minmax(0,1fr)] overflow-hidden border border-[#cfd2cd] bg-night"
                >
                  <img decoding="async"
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="min-w-0 p-3">
                    <span
                      className={`inline-flex px-2 py-1 text-[13px] font-semibold  ${
                        project.status === "Completed"
                          ? "bg-[#15181b] text-[#e9eae6]"
                          : "bg-[#e9eae6] text-[#7f4318]"
                      }`}
                    >
                      {project.status}
                      {project.year ? ` ${project.year}` : ""}
                    </span>
                    <h3 className="mt-2 text-lg font-medium leading-snug">{project.title}</h3>
                    <p className="mt-1 flex items-start gap-1 text-sm text-[#555b62]">
                      <MapPin size={15} className="mt-0.5 flex-none" />
                      {project.location}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#555b62]">{project.scope}</p>
                    {project.client && (
                      <p className="mt-2 text-xs font-bold text-[#555b62]">
                        Client: <span className="normal-case text-[#555b62]">{project.client}</span>
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>

        <nav className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-3 border-t border-[#9b5520]/30 bg-[#15181b] text-paper sm:hidden">
          <a
            href={contact.mobileHref}
            className="grid min-h-14 place-items-center bg-[#9b5520] font-semibold text-paper"
          >
            Call
          </a>
          <a
            href={`mailto:${contact.email}?subject=Project%20enquiry%20for%20Fine%20Glaze`}
            className="grid min-h-14 place-items-center font-semibold"
          >
            Email
          </a>
          <a href="/fine-glaze-contact.vcf" className="grid min-h-14 place-items-center font-semibold">
            Save
          </a>
        </nav>
      </main>
    </>
  );
};

export default ProjectsQR;
