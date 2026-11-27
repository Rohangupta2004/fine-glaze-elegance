import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import FaqList from "@/components/common/FaqList";
import { Pull, Sec, SpecList } from "@/components/common/Sheet";
import { CTASection } from "@/components/home/CTASection";
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
          <a href={whatsappHref("Hi Fine Glaze, I'd like to report a facade issue. Sending photos:")} target="_blank" rel="noopener noreferrer" className="fg-btn2">
            Send photos on WhatsApp
          </a>
        }
      />


      <Sec no="01" label="Request" title="Tell us about the issue." sheetLabel="Service request">
        <div className="sx-split">
          {sent ? (
            <div className="sx-sent" role="status">
              <p className="sx-lab">Request received</p>
              <p className="sx-note">
                We'll call you on {form.phone || "the number you gave"} to arrange a visit. Photos help us bring the right
                material — you can send them on WhatsApp now.
              </p>
              <a href={whatsappHref(`${summary}\n\nPhotos:`)} target="_blank" rel="noopener noreferrer" className="fg-btn">
                Send photos on WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={submit} className="sx-form" aria-label="Service request form">
              <div className="sx-row">
                <div>
                  <label htmlFor="sr-name" className="sx-lab">Your name <i aria-hidden="true">*</i></label>
                  <input id="sr-name" required value={form.name} onChange={set("name")} className="sx-in" autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="sr-phone" className="sx-lab">Phone / WhatsApp <i aria-hidden="true">*</i></label>
                  <input id="sr-phone" required type="tel" value={form.phone} onChange={set("phone")} className="sx-in" autoComplete="tel" />
                </div>
              </div>
              <div className="sx-row">
                <div>
                  <label htmlFor="sr-building" className="sx-lab">Building name &amp; area <i aria-hidden="true">*</i></label>
                  <input id="sr-building" required value={form.building} onChange={set("building")} placeholder="e.g. Tower B, Baner" className="sx-in" />
                </div>
                <div>
                  <label htmlFor="sr-city" className="sx-lab">City</label>
                  <select id="sr-city" value={form.city} onChange={set("city")} className="sx-in">
                    {CITIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="sr-issue" className="sx-lab">What's the problem?</label>
                <select id="sr-issue" value={form.issue} onChange={set("issue")} className="sx-in">
                  {ISSUES.map((i) => <option key={i}>{i}</option>)}
                </select>
              </div>
              <fieldset style={{ border: 0, margin: 0, padding: 0 }}>
                <legend className="sx-lab">How urgent is it?</legend>
                <div style={{ display: "grid", gap: 0, borderTop: "1px solid #15181b" }}>
                  {URGENCY.map((u) => (
                    <label key={u} className="sx-chk" style={{ borderBottom: "1px solid #cfd2cd" }}>
                      <input type="radio" name="urgency" value={u} checked={form.urgency === u} onChange={set("urgency")} />
                      <span>{u}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <div>
                <label htmlFor="sr-details" className="sx-lab">Details</label>
                <textarea
                  id="sr-details"
                  value={form.details}
                  onChange={set("details")}
                  rows={4}
                  placeholder="Which floor / side of the building, when it happens, how long it's been going on…"
                  className="sx-in"
                />
              </div>
              <div className="sx-more" style={{ margin: 0 }}>
                <button type="submit" disabled={sending} className="fg-btn">
                  {sending ? "Sending…" : "Send service request"}
                </button>
              </div>
              <p className="sx-hint">
                We only use these details to contact you about this request. See our{" "}
                <Link to="/privacy-policy" style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>privacy policy</Link>.
              </p>
            </form>
          )}

          <aside className="sx-side">
            <div>
              <h3 className="sx-sub">What we handle</h3>
              <SpecList items={company.maintenanceScope} />
            </div>
            <Pull label="Broken glass at height?">Keep people away from the area below and call us. Don't try to remove loose glass yourself.</Pull>
            <div>
              <h3 className="sx-sub">Maintenance we run today</h3>
              <p className="sx-note">Running facade contract at Embassy Techzone, Hinjewadi (Embassy REIT), and sealant and glass work at Embassy 247, Vikhroli.</p>
              <p className="sx-more" style={{ margin: 0 }}>
                <Link to="/maintenance-services" className="fg-btn2">Maintenance services</Link>
                <Link to="/facade-amc-guide" className="fg-btn2">Facade AMC guide</Link>
              </p>
            </div>
          </aside>
        </div>
      </Sec>

      <Sec no="02" label="FAQ" title="Service FAQs." sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList items={FAQS} />
        </div>
      </Sec>

      <CTASection />
    </Layout>
  );
}
