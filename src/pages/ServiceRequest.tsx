import { useState } from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, CheckCircle2, MessageCircle, Phone, Send, Wrench } from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { Layout } from "@/components/layout/Layout";
import { company, telHref, whatsappHref } from "@/data/company";
import { submitLead } from "@/lib/leads";

const PAGE_URL = "https://fineglaze.com/service-request";

const ISSUES = [
  "Water leakage through glazing / windows",
  "Broken or cracked glass",
  "Foggy double-glazed (DGU) panels",
  "Sealant / silicone failure",
  "Windows or doors not closing / hardware",
  "ACP cladding damage or loose panels",
  "Facade cleaning",
  "Annual maintenance contract (AMC)",
  "Other",
];

const URGENCY = ["Urgent — safety risk or active leak", "Within 1–2 weeks", "Planning / budgeting"];
const CITIES = ["Pune", "PCMC", "Mumbai", "Navi Mumbai", "Thane", "Other"];

const FAQS = [
  {
    q: "Do you repair facades that another company installed?",
    a: "Yes. Much of our maintenance work is on facades we did not install — for example sealant renewal and the replacement of 200+ foggy or damaged glass panels at Embassy 247, Vikhroli, for Embassy REIT.",
  },
  {
    q: "What should I send with the request?",
    a: "Photos of the problem from inside and outside, where it is on the building (floor and elevation), when it happens (for leaks: during which rain), and how the area can be reached. Photos on WhatsApp are the quickest way.",
  },
  {
    q: "How quickly can someone visit?",
    a: "We call back to agree a site visit. Breakage that is a safety risk and active leaks are prioritised; planned repairs and AMC surveys are scheduled with your facility team.",
  },
  {
    q: "Do you give a written report?",
    a: "Yes. Leakage investigations and periodic inspections end with a written condition report and a repair scope before any work starts.",
  },
];

export default function ServiceRequest() {
  const [form, setForm] = useState({ name: "", phone: "", building: "", city: "Pune", issue: ISSUES[0], urgency: URGENCY[1], details: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const summary = `Service request\n- Name: ${form.name}\n- Phone: ${form.phone}\n- Building: ${form.building}, ${form.city}\n- Issue: ${form.issue}\n- Urgency: ${form.urgency}\n- Details: ${form.details || "—"}`;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const ok = await submitLead({
      name: form.name,
      phone: form.phone,
      city: form.city,
      projectType: `Service: ${form.issue}`,
      approxArea: form.urgency,
      message: `${form.building}\n${form.details}`,
      source: "service_request",
      subject: `Service request: ${form.issue} — ${form.building}, ${form.city}`,
      fromName: "Fine Glaze Service Request",
      extra: { building: form.building, issue: form.issue, urgency: form.urgency },
    });
    if (!ok) {
      // Never lose a request: hand it to WhatsApp instead.
      window.open(whatsappHref(summary), "_blank");
    }
    setSent(true);
    setSending(false);
  };

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Facade repair, leakage rectification and maintenance",
      serviceType: "Facade maintenance and repair",
      provider: { "@id": "https://fineglaze.com/#localbusiness" },
      areaServed: ["Pune", "Pimpri-Chinchwad", "Mumbai", "Navi Mumbai", "Thane"].map((name) => ({ "@type": "City", name })),
      url: PAGE_URL,
      description: "Service requests for glass facade leakage, broken or foggy glass, sealant failure, window and door hardware, ACP cladding repairs, facade cleaning and AMC.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com/" },
        { "@type": "ListItem", position: 2, name: "Facade Maintenance", item: "https://fineglaze.com/maintenance-services" },
        { "@type": "ListItem", position: 3, name: "Service Request", item: PAGE_URL },
      ],
    },
  ];

  const field = "w-full  border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-lamp";

  return (
    <Layout darkHero>
      <SEO
        title="Facade Service Request: Leaks & Broken Glass | Fine Glaze"
        description="Report a glass facade leak, broken or foggy glass, sealant failure, window hardware or ACP damage in Pune or Mumbai. We repair facades we didn't install too."
        canonical={PAGE_URL}
        keywords="facade leakage repair Mumbai, glass facade repair Pune, broken glass replacement, foggy double glazing replacement, structural glazing sealant repair, aluminium window repair Pune, facade maintenance service request"
        schemas={schemas}
      />

      <PageHero
        crumbs={[{ label: "Service request" }]}
        title="Facade service request"
        intro="Leaking glazing, broken or foggy glass, failed sealant, windows that won't close, loose cladding. Tell us what's happening at your building in Pune or Mumbai. We work on facades we didn't install, too."
        source="service_request_hero"
        secondary={{ label: `Urgent? Call ${company.phone.mobileDisplay}`, href: telHref }}
        extra={
          <a href={whatsappHref("Hi Fine Glaze, I'd like to report a facade issue. Sending photos:")} target="_blank" rel="noopener noreferrer" className="fg-lnk">
            Send photos on WhatsApp
          </a>
        }
      />


      <section className="fg-sec">
        <div className="fg-wrap grid lg:grid-cols-[1.3fr_1fr] gap-8">
          {sent ? (
            <div className="border border-emerald-500/40 bg-emerald-500/5 p-8">
              <CheckCircle2 className="h-10 w-10 text-emerald-600" />
              <h2 className="mt-3 text-2xl font-medium text-foreground">Request received</h2>
              <p className="mt-2 text-muted-foreground">
                We'll call you on {form.phone || "the number you gave"} to arrange a visit. Photos help us bring the right
                material — you can send them on WhatsApp now.
              </p>
              <a
                href={whatsappHref(`${summary}\n\nPhotos:`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center bg-emerald-600 text-paper font-bold px-5 py-3 hover:bg-emerald-500"
              >
                <MessageCircle className="mr-2 h-4 w-4" /> Send photos on WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={submit} className="border border-border bg-card p-6 space-y-4" aria-labelledby="sr-form">
              <h2 id="sr-form" className="text-xl font-medium text-foreground">Tell us about the issue</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block text-sm font-medium text-foreground">
                  Your name *
                  <input required value={form.name} onChange={set("name")} className={`mt-1 ${field}`} autoComplete="name" />
                </label>
                <label className="block text-sm font-medium text-foreground">
                  Phone / WhatsApp *
                  <input required type="tel" value={form.phone} onChange={set("phone")} className={`mt-1 ${field}`} autoComplete="tel" />
                </label>
              </div>
              <div className="grid sm:grid-cols-[1.6fr_1fr] gap-4">
                <label className="block text-sm font-medium text-foreground">
                  Building name &amp; area *
                  <input required value={form.building} onChange={set("building")} placeholder="e.g. Tower B, Baner" className={`mt-1 ${field}`} />
                </label>
                <label className="block text-sm font-medium text-foreground">
                  City
                  <select value={form.city} onChange={set("city")} className={`mt-1 ${field}`}>
                    {CITIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </label>
              </div>
              <label className="block text-sm font-medium text-foreground">
                What's the problem?
                <select value={form.issue} onChange={set("issue")} className={`mt-1 ${field}`}>
                  {ISSUES.map((i) => <option key={i}>{i}</option>)}
                </select>
              </label>
              <fieldset>
                <legend className="text-sm font-medium text-foreground">How urgent is it?</legend>
                <div className="mt-2 grid gap-2">
                  {URGENCY.map((u) => (
                    <label key={u} className={`flex items-center gap-2 border px-3 py-2 text-sm cursor-pointer ${form.urgency === u ? "border-lamp/40 bg-lamp/5" : "border-border"}`}>
                      <input type="radio" name="urgency" value={u} checked={form.urgency === u} onChange={set("urgency")} />
                      {u}
                    </label>
                  ))}
                </div>
              </fieldset>
              <label className="block text-sm font-medium text-foreground">
                Details
                <textarea
                  value={form.details}
                  onChange={set("details")}
                  rows={4}
                  placeholder="Which floor / side of the building, when it happens, how long it's been going on…"
                  className={`mt-1 ${field}`}
                />
              </label>
              <button
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center bg-night text-paper font-bold px-6 py-3.5 hover:bg-night-2 disabled:opacity-60"
              >
                <Send className="mr-2 h-4 w-4" /> {sending ? "Sending…" : "Send service request"}
              </button>
              <p className="text-xs text-muted-foreground">
                We only use these details to contact you about this request. See our{" "}
                <Link to="/privacy-policy" className="underline underline-offset-2">privacy policy</Link>.
              </p>
            </form>
          )}

          <aside className="space-y-4">
            <div className="border border-border bg-muted p-6">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <Wrench className="h-5 w-5 text-primary" aria-hidden="true" /> What we handle
              </div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {company.maintenanceScope.map((m) => (
                  <li key={m} className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-primary" aria-hidden="true" /> {m}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-lamp/30 bg-lamp/5 p-6 text-sm">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <AlertTriangle className="h-5 w-5 text-lamp" aria-hidden="true" /> Broken glass at height?
              </div>
              <p className="mt-2 text-muted-foreground">
                Keep people away from the area below and call us. Don't try to remove loose glass yourself.
              </p>
            </div>
            <div className="border border-border bg-card p-6 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Maintenance we run today</p>
              <p className="mt-1">Running facade contract at Embassy Techzone, Hinjewadi (Embassy REIT), and sealant and glass work at Embassy 247, Vikhroli.</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <Link to="/maintenance-services" className="font-semibold text-primary underline underline-offset-4">Maintenance services</Link>
                <Link to="/facade-amc-guide" className="font-semibold text-primary underline underline-offset-4">Facade AMC guide</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="fg-sec">
        <div className="fg-wrap">
          <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-6">Service FAQs</h2>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group border border-border bg-card p-5">
                <summary className="cursor-pointer font-semibold text-foreground list-none flex justify-between gap-4">
                  {f.q}
                  <span className="text-primary group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
