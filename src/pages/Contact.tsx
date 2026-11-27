import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { CTASection } from "@/components/home/CTASection";
import { Sec } from "@/components/common/Sheet";
import { company, telHref, whatsappHref } from "@/data/company";
import { submitLead } from "@/lib/leads";

const projectTypes = [
  "Facade Fabrication",
  "Structural Glazing",
  "Curtain Wall Systems",
  "ACP Cladding",
  "Custom Railings",
  "Doors & Windows",
  "Maintenance Services",
  "Other",
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
    preferCallback: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.projectType) {
      toast.error("Please select a project type");
      return;
    }

    setIsSubmitting(true);

    const ok = await submitLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      projectType: formData.projectType,
      message: formData.message,
      preferCallback: formData.preferCallback,
      source: "website",
      subject: "New Enquiry – Fine Glaze Website",
      fromName: "Fine Glaze Website",
    });
    if (ok) {
      setIsSubmitted(true);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", projectType: "", message: "", preferCallback: false });
    } else {
      toast.error("Something went wrong. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <Layout darkHero>
      <SEO
        title="Facade Contractor Consultation in Pune | Fine Glaze"
        description="Contact Fine Glaze about a facade project in Pune, Mumbai or elsewhere in India. Call, WhatsApp or write to us. Office in Mohammed Wadi (Undri), Pune."
        canonical="https://fineglaze.com/contact"
        keywords="facade contractor consultation in Pune and Mumbai, facade site visit, facade quotation, glazing contractor contact, facade project enquiry"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          mainEntity: {
            "@type": "LocalBusiness",
            name: "Fine Glaze",
            telephone: "+91-8369233566",
            email: "info@fineglaze.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "A3 LW-13, Pragati Serene Building, Sr.No.2, HDFC Bank Chowk, Plot B, Autadwadi Handewadi, Mahadev Wadi, Mohammed Wadi",
              addressLocality: "Pune",
              addressRegion: "Maharashtra",
              postalCode: "411060",
              addressCountry: "IN",
            },
          },
        }}
      />

      <PageHero
        crumbs={[{ label: "Contact" }]}
        title={<>Let&apos;s Build <span className="text-gradient-gold">Together.</span></>}
        intro="Office hours are Monday to Saturday, 9am to 6pm."
        image={{ src: "/contact-hero.webp", alt: "Fine Glaze, contact us" }}
        source="contact_hero"
      />

      <Sec no="01" label="Contact details" title="Reach the office directly." sheetLabel="Contact details">
        <dl className="sx-kv">
          <div>
            <dt>Mobile / WhatsApp</dt>
            <dd className="m">
              <a href={telHref}>{company.phone.mobileDisplay}</a> <small>Call or <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">message on WhatsApp</a></small>
            </dd>
          </div>
          <div>
            <dt>Office phone</dt>
            <dd className="m">
              <a href={`tel:${company.phone.officeE164}`}>{company.phone.officeDisplay}</a>
            </dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </dd>
          </div>
          <div>
            <dt>Office hours</dt>
            <dd className="m">
              {company.hours.days}, {company.hours.opens} to {company.hours.closes}
            </dd>
          </div>
          <div>
            <dt>Head office</dt>
            <dd>
              {company.address.street}, {company.address.locality} {company.address.postalCode}, Maharashtra{" "}
              <small>
                <a href="https://www.google.com/maps/search/?api=1&query=Fine+Glaze+A3+LW-13+Pragati+Serene+Mohammed+Wadi+Pune+411060" target="_blank" rel="noopener noreferrer">
                  Open in Google Maps
                </a>
              </small>
            </dd>
          </div>
          <div>
            <dt>Fabrication unit</dt>
            <dd>Interim unit, {company.fabricationUnit.location}</dd>
          </div>
        </dl>
      </Sec>

      <Sec no="02" label="Enquiry" title="Tell us what you need." sheetLabel="Enquiry form">
        <div className="sx-split">
          <div>
            {isSubmitted ? (
              <div className="sx-sent" role="status">
                <p className="sx-lab">Message sent</p>
                <p className="sx-note">Thank you. Office hours are Monday to Saturday, 9am to 6pm.</p>
                <button
                  type="button"
                  className="fg-btn2"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", projectType: "", message: "", preferCallback: false });
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="sx-form">
                <div className="sx-row">
                  <div>
                    <label htmlFor="name" className="sx-lab">Full name <i aria-hidden="true">*</i></label>
                    <input id="name" name="name" autoComplete="name" placeholder="Ramesh Sharma" required value={formData.name} onChange={handleChange} className="sx-in" />
                  </div>
                  <div>
                    <label htmlFor="email" className="sx-lab">Email <i aria-hidden="true">*</i></label>
                    <input id="email" name="email" type="email" autoComplete="email" placeholder="ramesh@company.com" required value={formData.email} onChange={handleChange} className="sx-in" />
                  </div>
                </div>
                <div className="sx-row">
                  <div>
                    <label htmlFor="phone" className="sx-lab">Phone <i aria-hidden="true">*</i></label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" required value={formData.phone} onChange={handleChange} className="sx-in" />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="sx-lab">Project type <i aria-hidden="true">*</i></label>
                    <select id="projectType" name="projectType" required value={formData.projectType} onChange={handleChange} className="sx-in">
                      <option value="">Select a service</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="sx-lab">Project details (optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="E.g. We need structural glazing for a 5-floor commercial building in Hinjewadi, Pune. Looking for site visit and quotation."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="sx-in"
                  />
                </div>
                <label className="sx-chk">
                  <input type="checkbox" checked={formData.preferCallback} onChange={(e) => setFormData((prev) => ({ ...prev, preferCallback: e.target.checked }))} />
                  <span>I'd prefer a callback to discuss details</span>
                </label>
                <div className="sx-more" style={{ margin: 0 }}>
                  <button type="submit" disabled={isSubmitting} className="fg-btn">
                    {isSubmitting ? "Sending…" : "Send enquiry"}
                  </button>
                  <a href={telHref} className="fg-btn2" data-call-now>
                    Call us
                  </a>
                </div>
                <p className="sx-hint">We'll never share your information. Office hours are Monday to Saturday, 9am to 6pm.</p>
              </form>
            )}
          </div>
          <div className="sx-side">
            <figure className="sx-photo">
              <img
                src="/fine-glaze-storefront.webp"
                alt="Fine Glaze office frontage with signage listing the full range of services"
                width={1243}
                height={1034}
                sizes="(max-width: 960px) 100vw, 440px"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="sx-cap"><span>FIG. 01</span> Head office frontage, Mohammed Wadi, Pune</figcaption>
            </figure>
            <p className="sx-note" style={{ margin: 0 }}>
              We confirm scope after surveying the site. Send drawings if you have them, or call to arrange a visit.
            </p>
          </div>
        </div>
      </Sec>

      <Sec no="03" label="Location" title="Find the office." sheetLabel="Map">
        <div className="sx-map">
          <iframe
            src="https://maps.google.com/maps?q=Fine+Glaze+A3+LW-13+Pragati+Serene+HDFC+Bank+Chowk+Mohammed+Wadi+Pune+411060&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Fine Glaze Office — Undri, Pune"
          />
        </div>
      </Sec>

      <CTASection />
    </Layout>
  );
};

export default Contact;
