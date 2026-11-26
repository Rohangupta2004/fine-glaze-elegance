import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  PhoneCall,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight,
  Building2,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { submitLead } from "@/lib/leads";

/* ─── Reusable fade-in wrapper ─── */
function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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


      {/* ═══════════════════════════════════════════
          TRUST STRIP — quick reassurance before the form
          ═══════════════════════════════════════════ */}
      <section className="bg-night border-b border-line">
        <div className="container mx-auto px-5 md:px-16 py-4 md:py-5">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs md:text-sm text-mute">
            {[
              { icon: <ShieldCheck size={16} className="text-lamp" />, text: "Call, WhatsApp or write to our team" },
              { icon: <CheckCircle2 size={16} className="text-lamp" />, text: "Site survey and measurement for your project" },
              { icon: <Clock size={16} className="text-lamp" />, text: "Office hours Monday to Saturday, 9am to 6pm" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 font-medium">
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          MAIN — form (left) + info (right)
          ═══════════════════════════════════════════ */}
      <section className="fg-sec">
        <div className="container mx-auto px-5 md:px-16">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12">

            {/* ── Form — takes more space ── */}
            <FadeIn className="lg:col-span-7 order-1">
              <div className="bg-night border border-line">
                <div className="border-b border-line px-5 md:px-8 py-5 md:py-6">
                  <p className="text-lamp text-[10px] font-bold mb-1">
                    Start Your Project
                  </p>
                  <h2 className="text-xl md:text-2xl font-bold text-paper">
                    Tell us what you need
                  </h2>
                </div>

                <div className="px-5 md:px-8 py-5 md:py-7">
                  {isSubmitted ? (
                    <div className="text-center py-14 space-y-4">
                      <div className="w-14 h-14 border border-line flex items-center justify-center mx-auto">
                        <CheckCircle2 size={28} className="text-lamp" />
                      </div>
                      <h3 className="text-2xl font-bold text-paper">
                        Message Sent
                      </h3>
                      <p className="text-mute text-sm max-w-md mx-auto">
                        Thank you. Office hours are Monday to Saturday, 9am to 6pm.
                      </p>
                      <Button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: "", email: "", phone: "", projectType: "", message: "", preferCallback: false });
                        }}
                        variant="outline"
                        className="mt-4"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                        <div className="space-y-1.5">
                          <Label htmlFor="name" className="text-xs font-semibold text-mute">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Ramesh Sharma"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="border-line focus:border-lamp/40 focus:ring-lamp/20 h-11"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="email" className="text-xs font-semibold text-mute">
                            Email *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="ramesh@company.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="border-line focus:border-lamp/40 focus:ring-lamp/20 h-11"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                        <div className="space-y-1.5">
                          <Label htmlFor="phone" className="text-xs font-semibold text-mute">
                            Phone *
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="border-line focus:border-lamp/40 focus:ring-lamp/20 h-11"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="projectType" className="text-xs font-semibold text-mute">
                            Project Type *
                          </Label>
                          <Select
                            value={formData.projectType}
                            onValueChange={(value) =>
                              setFormData((prev) => ({ ...prev, projectType: value }))
                            }
                            required
                          >
                            <SelectTrigger className="border-line focus:border-lamp/40 focus:ring-lamp/20 h-11">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {projectTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="message" className="text-xs font-semibold text-mute">
                          Project Details <span className="text-mute normal-case tracking-normal">(optional)</span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="E.g. We need structural glazing for a 5-floor commercial building in Hinjewadi, Pune. Looking for site visit and quotation..."
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          className="border-line focus:border-lamp/40 focus:ring-lamp/20 resize-none"
                        />
                      </div>

                      {/* Callback preference */}
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData.preferCallback}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, preferCallback: e.target.checked }))
                          }
                          className="w-4 h-4 border-line text-lamp focus:ring-lamp/20"
                        />
                        <span className="text-sm text-mute group-hover:text-paper transition-colors">
                          I'd prefer a callback to discuss details
                        </span>
                      </label>

                      {/* Dual CTA — Send Enquiry + Call Now */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 bg-night-2 hover:bg-lamp/90 text-lamp-ink py-5 text-sm font-semibold tracking-wide transition-colors duration-300"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-paper/30 border-t-line animate-spin mr-2" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send size={16} className="mr-2" />
                              Send Enquiry
                            </>
                          )}
                        </Button>
                        <a
                          href="tel:+918369233566"
                          className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-lamp/40 text-lamp hover:bg-lamp/10 py-3 text-sm font-semibold tracking-wide transition-colors duration-200"
                        >
                          <PhoneCall size={16} />
                          Call Now
                        </a>
                      </div>

                      {/* Social proof nudge */}
                      <div className="flex items-center justify-center gap-3 pt-1">
                        <p className="text-[11px] text-mute">
                          Work for Embassy REIT, LTIMindtree and others
                        </p>
                      </div>

                      <p className="text-[11px] text-mute text-center">
                        We'll never share your information. Office hours are Monday to Saturday, 9am to 6pm.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </FadeIn>


            {/* ── Right column — why (first!) + contact + office + hours ── */}
            <FadeIn delay={120} className="lg:col-span-5 order-2 space-y-5 md:space-y-6">

              {/* Why reach out — moved ABOVE contact info for trust-first flow */}
              <div className="bg-night border border-line p-5 md:p-7">
                <p className="text-lamp text-[10px] font-bold mb-3">
                  Why Reach Out
                </p>
                <h3 className="text-lg font-bold text-paper mb-4">
                  Office hours are Monday to Saturday, 9am to 6pm.
                </h3>
                <p className="text-mute text-sm leading-relaxed mb-5">
                  Call or message us and we will take it from there.
                </p>
                <div className="space-y-3">
                  {[
                    { text: "Site survey & measurement", sub: "We confirm scope after surveying the site" },
                    { text: "No obligation", sub: "Get the information you need" },
                  ].map((item) => (
                    <div key={item.text} className="flex gap-3 group">
                      <div className="w-6 h-6 border border-line flex items-center justify-center shrink-0 mt-0.5">
                        <ArrowRight size={12} className="text-lamp" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-paper">{item.text}</p>
                        <p className="text-xs text-mute mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick contact links */}
              <div className="bg-night border border-line p-5 md:p-7 space-y-4">
                <p className="text-lamp text-[10px] font-bold mb-1">
                  Reach Us Directly
                </p>
                <a href="tel:+918369233566" className="flex items-center gap-3 text-paper hover:text-lamp transition-colors group">
                  <div className="w-9 h-9 border border-line group-hover:bg-lamp/10 flex items-center justify-center shrink-0 transition-colors">
                    <Phone size={16} className="text-lamp" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">+91 83692 33566</p>
                    <p className="text-[10px] text-mute">Call or WhatsApp</p>
                  </div>
                </a>
                <a href="mailto:info@fineglaze.com" className="flex items-center gap-3 text-paper hover:text-lamp transition-colors group">
                  <div className="w-9 h-9 border border-line group-hover:bg-lamp/10 flex items-center justify-center shrink-0 transition-colors">
                    <Mail size={16} className="text-lamp" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">info@fineglaze.com</p>
                    <p className="text-[10px] text-mute">Mon–Sat, 9am to 6pm</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-mute opacity-80">
                  <div className="w-9 h-9 bg-night-2 flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-mute" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-mute">Mon – Sat, 9 AM – 6 PM</p>
                    <p className="text-[10px] text-mute">Office hours</p>
                  </div>
                </div>
              </div>

              {/* Office address */}
              <div className="relative overflow-hidden bg-night-2 text-paper p-5 md:p-7">
                {/* decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 border border-line" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 size={18} className="text-lamp" />
                    <p className="text-[10px] font-bold text-mute">
                      Head Office
                    </p>
                  </div>
                  <p className="text-sm text-paper/80 leading-relaxed mb-1 font-medium">
                    Fine Glaze
                  </p>
                  <p className="text-sm text-mute leading-relaxed">
                    A3 LW-13, Pragati Serene Building, Sr.No.2, HDFC Bank Chowk, Plot B, Autadwadi Handewadi, Mahadev Wadi, Mohammed Wadi,<br />
                    Pune – 411060, Maharashtra
                  </p>

                  <div className="mt-5 pt-4 border-t border-line flex items-center gap-3">
                    <Clock size={14} className="text-lamp shrink-0" />
                    <p className="text-sm text-mute">Mon – Sat, 9:00 AM – 6:00 PM</p>
                  </div>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Fine+Glaze+A3+LW-13+Pragati+Serene+Mohammed+Wadi+Pune+411060"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lamp font-semibold text-xs mt-4 hover:gap-3 transition-all group"
                  >
                    <MapPin size={13} />
                    Open in Google Maps
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Quick stat strip */}
              <div className="grid grid-cols-3 gap-px bg-line">
                {[
                  { num: "16", label: "Project Records" },
                  { num: "40+", label: "Core Team" },
                  { num: "Mon–Sat", label: "9am to 6pm" },
                ].map((s) => (
                  <div key={s.label} className="bg-night text-center py-4 md:py-5">
                    <p className="text-lg md:text-xl font-extrabold text-paper">{s.num}</p>
                    <p className="text-[10px] text-mute font-bold mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          PHOTO BREAK — immersive strip
          ═══════════════════════════════════════════ */}
      <FadeIn>
        <section className="relative h-[30vh] md:h-[40vh] min-h-[200px] overflow-hidden">
          <img
            src="/Glazing.webp"
            alt="Fine Glaze facade work"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            style={{ objectPosition: "center 40%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.30) 50%, rgba(0,0,0,0.75) 100%)",
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
            <p className="text-lamp text-[10px] md:text-xs font-bold mb-2">
              Facade Projects in Pune and Mumbai
            </p>
            <p
              className="text-paper font-bold leading-snug max-w-xl"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.75rem)" }}
            >
              "From concept to completion — we engineer facades that define skylines."
            </p>
          </div>
        </section>
      </FadeIn>


      {/* ═══════════════════════════════════════════
          MAP — full-width embed with Fine Glaze search
          ═══════════════════════════════════════════ */}
      <FadeIn>
        <div className="w-full h-[250px] md:h-[380px] bg-line">
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
      </FadeIn>
    </Layout>
  );
};

export default Contact;
