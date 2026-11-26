import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Building2, CheckCircle2, CloudSun, MapPin, MessageCircle, Phone, Route } from "lucide-react";
import SEO from "@/components/SEO";
import { QuoteModal } from "@/components/QuoteModal";
import { RelatedProjects } from "@/components/RelatedProjects";
import { projectsData } from "@/data/projects";
import { company, telHref, whatsappHref, SITE_URL } from "@/data/company";
import {
  LOCATIONS,
  SERVICE_SLUGS,
  canonicalCityPath,
  nearbyLocations,
  pageSlug,
  parseCitySlug,
  roughKm,
} from "@/data/locations";
import { SERVICE_INFO, buildCityPage, coverageText } from "@/data/cityContent";
import NotFound from "./NotFound";

/**
 * Pan-India location pages: /facade-contractor/<location> and
 * /facade-contractor/<service>-<location> (also /services/<service>/<location>).
 * Content is assembled per place and per service — see src/data/cityContent.ts.
 */
export default function CityLanding() {
  const { city, service } = useParams<{ city?: string; service?: string }>();
  const [quoteOpen, setQuoteOpen] = useState(false);

  const hit = parseCitySlug(service && city ? `${service}-${city}` : city ?? "");
  if (!hit) return <NotFound />;

  const { service: serviceSlug, location } = hit;
  const loc = LOCATIONS[location];
  const baseLocation = loc.sameAs ?? location;
  const svc = SERVICE_INFO[serviceSlug];
  const page = buildCityPage(serviceSlug, location);
  const coverage = coverageText(
    loc.coverage,
    loc.name,
    page.km,
    page.nearProjects[0] && projectsData[page.nearProjects[0].slug]
      ? { title: projectsData[page.nearProjects[0].slug].title, km: page.nearProjects[0].km }
      : undefined,
  );

  const canonicalPath = canonicalCityPath(serviceSlug, location);
  const canonical = `${SITE_URL}${canonicalPath}`;
  const servedPath = `/facade-contractor/${pageSlug(serviceSlug, location)}`;
  const preferredPage = canonicalPath !== servedPath ? canonicalPath : null;

  const nearest = page.nearProjects[0];
  const heroImage = loc.projects && nearest ? projectsData[nearest.slug]?.image ?? svc.image : svc.image;

  const otherServices = SERVICE_SLUGS.filter((s) => s !== serviceSlug).map((s) => ({
    label: SERVICE_INFO[s].label,
    path: canonicalCityPath(s, baseLocation),
  }));
  const nearby = nearbyLocations(location, 12).map((l) => ({
    name: LOCATIONS[l].name,
    path: canonicalCityPath(serviceSlug, l),
  }));

  // National page doubles as the index of every place we cover.
  const byState =
    loc.coverage === "national"
      ? Object.entries(LOCATIONS)
          .filter(([, l]) => !l.sameAs && l.coverage !== "national")
          .reduce<Record<string, { name: string; path: string }[]>>((acc, [slug, l]) => {
            (acc[l.state] ??= []).push({ name: l.name, path: canonicalCityPath(serviceSlug, slug) });
            return acc;
          }, {})
      : null;

  const areaServed =
    loc.coverage === "national"
      ? { "@type": "Country", name: "India" }
      : {
          "@type": loc.full ? "Place" : "City",
          name: loc.full ?? loc.name,
          address: { "@type": "PostalAddress", addressRegion: loc.state, addressCountry: "IN" },
        };

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      serviceType: svc.label,
      description: page.description,
      url: canonical,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: svc.hub.label, item: `${SITE_URL}${svc.hub.path}` },
        { "@type": "ListItem", position: 3, name: page.h1, item: canonical },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <Layout darkHero>
      <SEO title={page.title} description={page.description} canonical={canonical} schemas={schemas} ogImage={`${SITE_URL}${encodeURI(heroImage)}`} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-stone-950 pt-28 pb-16 text-white md:pb-20">
        <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/60 to-stone-950" />
        <div className="container relative z-10 mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mb-5 text-xs text-stone-400">
            <Link to="/" className="hover:text-amber-400">Home</Link>
            <span className="mx-2">/</span>
            <Link to={svc.hub.path} className="hover:text-amber-400">{svc.hub.label}</Link>
            <span className="mx-2">/</span>
            <span className="text-stone-300">{loc.full ?? loc.name}</span>
          </nav>
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-amber-400">
            <MapPin className="h-4 w-4" aria-hidden="true" /> {loc.coverage === "national" ? "Projects across India" : `${loc.name}, ${loc.state}`}
          </p>
          <h1 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl">{page.h1}</h1>
          <p className="mt-6 max-w-3xl border-l-4 border-amber-500 pl-4 text-base leading-relaxed text-stone-200 md:text-lg">
            {page.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={() => setQuoteOpen(true)} className="bg-amber-600 font-bold hover:bg-amber-500">
              Get a Project Quote <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
            <a href={telHref}>
              <Button size="lg" variant="outline" className="w-full border-white/40 bg-white/10 font-bold text-white hover:bg-white hover:text-stone-900">
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" /> {company.phone.mobileDisplay}
              </Button>
            </a>
            <a href={whatsappHref(`Hi Fine Glaze, I'd like to discuss ${svc.work} work in ${loc.name}.`)} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full border-white/40 bg-white/10 font-bold text-white hover:bg-white hover:text-stone-900">
                <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" /> WhatsApp
              </Button>
            </a>
          </div>
          {preferredPage && (
            <p className="mt-6 text-sm text-stone-300">
              Looking for more detail? See our main page:{" "}
              <Link to={preferredPage} className="font-semibold text-amber-400 underline-offset-4 hover:underline">
                {svc.heading(`in ${LOCATIONS[baseLocation].name}`)}
              </Link>
            </p>
          )}
        </div>
      </section>

      {/* CLIMATE → SPECIFICATION */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="flex items-start gap-3 text-2xl font-bold text-stone-900 md:text-3xl">
              <CloudSun className="mt-1 h-7 w-7 shrink-0 text-amber-600" aria-hidden="true" />
              Designing {svc.noun} for {loc.coverage === "national" ? "India's climates" : loc.name}
            </h2>
            <p className="mt-4 leading-relaxed text-stone-600">{page.climate}</p>
            <img src={svc.image} alt={`${svc.label} by Fine Glaze`} className="mt-6 hidden h-64 w-full rounded-xl object-cover lg:block" loading="lazy" />
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            {page.guidance.map((g) => (
              <li key={g.title} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                <h3 className="font-bold text-stone-900">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{g.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BUILDINGS TYPICAL HERE */}
      <section className="border-t border-stone-200 bg-white pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <h2 className="flex items-center gap-3 pt-14 text-2xl font-bold text-stone-900 md:text-3xl">
            <Building2 className="h-7 w-7 shrink-0 text-amber-600" aria-hidden="true" />
            {loc.coverage === "national" ? "Buildings we work on" : `Buildings we see in ${loc.name}`}
          </h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {page.buildings.map((b) => (
              <li key={b.label} className="flex flex-col rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900">{b.label}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">{b.text}</p>
                <Link to={b.guide.path} className="mt-4 inline-flex items-center text-sm font-semibold text-amber-700 hover:text-amber-600">
                  {b.guide.label} <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SCOPE + HOW WE DELIVER HERE */}
      <section className="border-t border-stone-200 bg-stone-50 py-16 md:py-20">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 md:text-3xl">
              What's included{loc.coverage === "national" ? "" : ` for ${svc.noun} in ${loc.name}`}
            </h2>
            <ul className="mt-6 space-y-3">
              {svc.scope.map((item) => (
                <li key={item} className="flex gap-3 text-stone-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
            <Link to={svc.hub.path} className="mt-6 inline-flex items-center font-semibold text-amber-700 hover:text-amber-600">
              More about {svc.hub.label.toLowerCase()} <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-stone-900">
              <Route className="h-6 w-6 text-amber-600" aria-hidden="true" /> {coverage.title}
            </h2>
            <p className="mt-4 leading-relaxed text-stone-600">{coverage.body}</p>
            <ul className="mt-5 space-y-2 text-sm text-stone-700">
              {coverage.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" /> {p}
                </li>
              ))}
            </ul>
            <Link to="/quality-safety" className="mt-5 inline-flex items-center text-sm font-semibold text-amber-700 hover:text-amber-600">
              Our quality & safety process <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* REAL PROJECTS — nearest first */}
      {loc.projects ? (
        <RelatedProjects
          heading={`Our work ${loc.projects.label}`}
          intro="Nearest first — client, scope and status as recorded in our company profile."
          slugs={page.nearProjects.length ? page.nearProjects.map((n) => n.slug) : undefined}
          rankBy={svc.rank}
        />
      ) : (
        <section className="bg-stone-950 py-16 text-white" aria-labelledby="nearest-projects">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <h2 id="nearest-projects" className="text-2xl font-bold md:text-3xl">Our nearest documented projects</h2>
                <p className="mt-2 text-stone-400">
                  Our documented work is in Pune and the Mumbai region. The same team, process and quality checks go to every site
                  {loc.coverage === "national" ? "." : `, including ${loc.name}.`}
                </p>
              </div>
              <Link to="/portfolio" className="inline-flex items-center font-semibold text-amber-400 hover:text-amber-300">
                All projects <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <ul className="divide-y divide-stone-800 rounded-xl border border-stone-800">
              {page.nearProjects
                .filter((n) => projectsData[n.slug])
                .map((n) => {
                  const p = projectsData[n.slug];
                  return (
                    <li key={n.slug} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                      <div className="min-w-0">
                        <Link to={`/project/${n.slug}`} className="break-words font-bold text-white hover:text-amber-400">
                          {p.title}
                        </Link>
                        <p className="mt-1 break-words text-sm text-stone-400">
                          {p.location} · {p.client}
                        </p>
                      </div>
                      {loc.geo && <p className="shrink-0 text-sm font-semibold text-amber-400">{roughKm(n.km)} from {loc.name}</p>}
                    </li>
                  );
                })}
            </ul>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-stone-900 md:text-3xl">
            {svc.label} {loc.coverage === "national" ? "across India" : `in ${loc.name}`} — FAQs
          </h2>
          <Accordion type="single" collapsible className="rounded-xl border p-2">
            {page.faqs.map((f, i) => (
              <AccordionItem value={`faq-${i}`} key={f.q}>
                <AccordionTrigger className="text-left font-bold">{f.q}</AccordionTrigger>
                <AccordionContent className="leading-relaxed text-stone-600">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="border-t border-stone-200 bg-stone-50 py-14">
        <div className="container mx-auto grid gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-bold text-stone-900">
              Other services {loc.coverage === "national" ? "across India" : `in ${loc.name}`}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {otherServices.map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="inline-block rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-semibold text-stone-700 transition-colors hover:border-amber-500 hover:text-amber-700">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {nearby.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-stone-900">{svc.label} in nearby areas</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {nearby.map((n) => (
                  <li key={n.path}>
                    <Link to={n.path} className="inline-block rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-semibold text-stone-700 transition-colors hover:border-amber-500 hover:text-amber-700">
                      {n.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {byState && (
          <div className="container mx-auto mt-12 px-4">
            <h2 className="text-lg font-bold text-stone-900">{svc.label} — every place we cover</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(byState).map(([state, places]) => (
                <div key={state}>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-700">{state}</h3>
                  <ul className="mt-2 space-y-1 text-sm">
                    {places.map((p) => (
                      <li key={p.path}>
                        <Link to={p.path} className="text-stone-700 hover:text-amber-700">{p.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />
    </Layout>
  );
}
