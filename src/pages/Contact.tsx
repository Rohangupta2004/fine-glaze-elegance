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
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

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

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "74dce7dc-85a9-4479-ab00-bd002f23409a",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          message: formData.message,
          subject: "New Enquiry – Fine Glaze Website",
          from_name: "Fine Glaze Website",
        }),
      });

      const data = await res.json();

      if (isSupabaseConfigured) {
        try {
          await supabase.from("contact_leads").insert({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            project_type: formData.projectType,
            message: formData.message,
            source: "website",
          });
        } catch {
          console.warn("Supabase lead save failed (non-blocking)");
        }
      }

      if (data.success) {
        setIsSubmitted(true);
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout darkHero>
      <SEO
        title="Contact Fine Glaze – Get a Free Facade Quote | Pune & Mumbai"
        description="Contact Fine Glaze for aluminium facade, curtain wall, structural glazing & ACP cladding projects. Call +91 8369233566 or email info@fineglaze.com. Free site consultation in Pune & Mumbai."
        canonical="https://fineglaze.com/contact"
        keywords="contact facade company, facade quote Pune, glass facade Mumbai contact, aluminium cladding enquiry, facade contractor phone number"
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
              streetAddress: "Shop No. 1 & 2, Jagdamba Bhawan Marg, Near Sunshine Hills",
              addressLocality: "Pune",
              addressRegion: "Maharashtra",
              postalCode: "411060",
              addressCountry: "IN",
            },
          },
        }}
      />

      {/* ════════════════════════════════════════════════════
          HERO — full-bleed cinematic
          ════════════════════════════════════════════════════ */}
      <section className="relative h-[55vh] md:h-[60vh] min-h-[380px] overflow-hidden">
        <img
          src="/Glass installation.webp"
          alt="Fine Glaze — Contact us"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          style={{ animation: "ctZoom 22s ease-in-out infinite alternate" }}
        />
        <style>{`@keyframes ctZoom { from { transform: scale(1.0); } to { transform: scale(1.06); } }`}</style>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.20) 35%, rgba(0,0,0,0.50) 65%, rgba(0,0,0,0.90) 100%)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 px-5 md:px-16 pb-8 md:pb-16">
          <p className="text-amber-400 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-3 md:mb-4">
            Fine Glaze · Get In Touch
          </p>
          <h1
            className="font-extrabold text-white leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)" }}
          >
            Let's Build<br />
            <span className="text-gradient-gold">Together.</span>
          </h1>
          <p className="mt-3 md:mt-4 text-white/60 text-sm md:text-lg max-w-md leading-relaxed">
            Free site consultation. Detailed quote within 24 hours.
          </p>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          FORM + DETAILS — directly after hero
          ════════════════════════════════════════════════════ */}
      <section className="py-10 md:py-20 bg-stone-50">
        <div className="container mx-auto px-5 md:px-16">
          <div className="grid lg:grid-cols-5 gap-8 md:gap-14">

            {/* Left column — contact details + why reach out */}
            <FadeIn className="lg:col-span-2 order-2 lg:order-1">
              {/* Quick contact — inline text, no strip */}
              <div className="space-y-4 mb-8 pb-8 border-b border-stone-200">
                <a href="tel:+918369233566" className="flex items-center gap-3 text-stone-700 hover:text-amber-700 transition-colors">
                  <Phone size={16} className="text-amber-600 shrink-0" />
                  <span className="text-sm font-semibold">+91 83692 33566</span>
                </a>
                <a href="mailto:info@fineglaze.com" className="flex items-center gap-3 text-stone-700 hover:text-amber-700 transition-colors">
                  <Mail size={16} className="text-amber-600 shrink-0" />
                  <span className="text-sm font-semibold">info@fineglaze.com</span>
                </a>
                <div className="flex items-center gap-3 text-stone-500">
                  <Clock size={16} className="text-amber-600 shrink-0" />
                  <span className="text-sm">Mon – Sat, 9:00 AM – 6:00 PM</span>
                </div>
              </div>

              <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">
                Why Reach Out
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4">
                We respond within 1 business hour.
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed mb-6">
                Whether you need a quote for a new project, want to schedule a free site visit,
                or have questions about our facade systems — we're here. No automated replies, you'll
                speak directly with our engineering team.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { label: "Free site visit & measurement", desc: "Our engineers visit your site at no cost" },
                  { label: "Detailed written proposal", desc: "Transparent scope, specs & pricing within 48 hours" },
                  { label: "No obligation", desc: "Get the information you need to make the right call" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <ArrowRight size={14} className="text-amber-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-stone-800">{item.label}</p>
                      <p className="text-xs text-stone-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-white border border-stone-200">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 mb-3">
                  Office Address
                </p>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-amber-600 mt-0.5 shrink-0" />
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Shop No. 1 & 2, Jagdamba Bhawan Marg,<br />
                    Near Sunshine Hills, Shree Siddhivinayak Meera,<br />
                    Undri, Pune – 411060, Maharashtra
                  </p>
                </div>
                <a
                  href="https://maps.app.goo.gl/JDF3ESXQGHtwKoAr6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-700 font-semibold text-xs mt-3 hover:gap-2.5 transition-all"
                >
                  Open in Google Maps <ArrowRight size={12} />
                </a>
              </div>
            </FadeIn>

            {/* Right column — form */}
            <FadeIn delay={100} className="lg:col-span-3 order-1 lg:order-2">
              <div className="bg-white border border-stone-200 p-5 md:p-8">
                {isSubmitted ? (
                  <div className="text-center py-14 space-y-4">
                    <div className="w-14 h-14 bg-amber-50 flex items-center justify-center mx-auto">
                      <CheckCircle2 size={28} className="text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900">
                      Message Sent
                    </h3>
                    <p className="text-stone-500 text-sm max-w-md mx-auto">
                      Thank you. Our team will review your inquiry and get back to you
                      within 1 business hour during working hours.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
                      }}
                      variant="outline"
                      className="mt-4"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-1">
                        Enquiry Form
                      </p>
                      <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-5">
                        Tell us about your project
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Ramesh Sharma"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="border-stone-200 focus:border-amber-400 focus:ring-amber-400/20 h-11"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
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
                          className="border-stone-200 focus:border-amber-400 focus:ring-amber-400/20 h-11"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                      <div className="space-y-1.5">
                        <Label htmlFor="phone" className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
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
                          className="border-stone-200 focus:border-amber-400 focus:ring-amber-400/20 h-11"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="projectType" className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                          Project Type *
                        </Label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) =>
                            setFormData((prev) => ({ ...prev, projectType: value }))
                          }
                          required
                        >
                          <SelectTrigger className="border-stone-200 focus:border-amber-400 focus:ring-amber-400/20 h-11">
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
                      <Label htmlFor="message" className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                        Project Details *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="E.g. We need structural glazing for a 5-floor commercial building in Hinjewadi, Pune. Looking for site visit and quotation..."
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="border-stone-200 focus:border-amber-400 focus:ring-amber-400/20 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-stone-900 hover:bg-stone-800 text-white py-5 text-sm font-semibold tracking-wide"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} className="mr-2" />
                          Send Enquiry
                        </>
                      )}
                    </Button>

                    <p className="text-[11px] text-stone-400 text-center">
                      We'll never share your information. Expect a reply within 1 business hour.
                    </p>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          MAP — full-width Google Maps showing Fine Glaze
          ════════════════════════════════════════════════════ */}
      <FadeIn>
        <div className="w-full h-[250px] md:h-[380px] bg-stone-200">
          <iframe
            src="https://maps.google.com/maps?q=Fine+Glaze,+Shop+No+1+2+Jagdamba+Bhawan+Marg+Near+Sunshine+Hills+Undri+Pune+411060&output=embed"
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
