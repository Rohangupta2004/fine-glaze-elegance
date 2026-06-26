import { useState } from "react";
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
  Send,
  CheckCircle2,
  PhoneCall,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { toast } from "sonner";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

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

export const ContactFormSection = () => {
  const { ref, isVisible } = useScrollAnimation();

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
          message: formData.message || "(No details provided)",
          prefers_callback: formData.preferCallback ? "Yes" : "No",
          subject: "New Enquiry – Fine Glaze Website (Homepage)",
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
            message: formData.message || null,
            prefers_callback: formData.preferCallback,
            source: "website_homepage",
          });
        } catch {
          console.warn("Supabase lead save failed (non-blocking)");
        }
      }

      if (data.success) {
        setIsSubmitted(true);
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
          preferCallback: false,
        });
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
    <section
      ref={ref}
      id="contact"
      className="py-16 md:py-24 bg-stone-50"
    >
      <div className="container mx-auto px-5 md:px-16">
        {/* Section header */}
        <div
          className={cn(
            "text-center mb-10 md:mb-14 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-amber-700 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-3">
            Get In Touch
          </p>
          <h2
            className="font-extrabold text-stone-900 leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            Start Your Project Today
          </h2>
          <p className="mt-3 text-stone-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Free site consultation. Detailed quote within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
          {/* ── Form ── */}
          <div
            className={cn(
              "lg:col-span-7 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="bg-white border border-stone-200 shadow-sm">
              <div className="border-b border-stone-100 px-5 md:px-8 py-5 md:py-6">
                <p className="text-amber-700 text-[10px] font-bold tracking-[0.3em] uppercase mb-1">
                  Start Your Project
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-stone-900">
                  Tell us what you need
                </h3>
              </div>

              <div className="px-5 md:px-8 py-5 md:py-7">
                {isSubmitted ? (
                  <div className="text-center py-14 space-y-4">
                    <div className="w-14 h-14 bg-amber-50 flex items-center justify-center mx-auto">
                      <CheckCircle2 size={28} className="text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900">
                      Message Sent
                    </h3>
                    <p className="text-stone-500 text-sm max-w-md mx-auto">
                      Thank you. Our team will review your inquiry and get back
                      to you within 1 business hour during working hours.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          projectType: "",
                          message: "",
                          preferCallback: false,
                        });
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
                        <Label
                          htmlFor="home-name"
                          className="text-xs font-semibold text-stone-600 uppercase tracking-wider"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="home-name"
                          name="name"
                          placeholder="Ramesh Sharma"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="border-stone-200 focus:border-amber-400 focus:ring-amber-400/20 h-11"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="home-email"
                          className="text-xs font-semibold text-stone-600 uppercase tracking-wider"
                        >
                          Email *
                        </Label>
                        <Input
                          id="home-email"
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
                        <Label
                          htmlFor="home-phone"
                          className="text-xs font-semibold text-stone-600 uppercase tracking-wider"
                        >
                          Phone *
                        </Label>
                        <Input
                          id="home-phone"
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
                        <Label
                          htmlFor="home-projectType"
                          className="text-xs font-semibold text-stone-600 uppercase tracking-wider"
                        >
                          Project Type *
                        </Label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) =>
                            setFormData((prev) => ({
                              ...prev,
                              projectType: value,
                            }))
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
                      <Label
                        htmlFor="home-message"
                        className="text-xs font-semibold text-stone-600 uppercase tracking-wider"
                      >
                        Project Details{" "}
                        <span className="text-stone-400 normal-case tracking-normal">
                          (optional)
                        </span>
                      </Label>
                      <Textarea
                        id="home-message"
                        name="message"
                        placeholder="E.g. We need structural glazing for a 5-floor commercial building in Hinjewadi, Pune. Looking for site visit and quotation..."
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="border-stone-200 focus:border-amber-400 focus:ring-amber-400/20 resize-none"
                      />
                    </div>

                    {/* Callback preference */}
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.preferCallback}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            preferCallback: e.target.checked,
                          }))
                        }
                        className="w-4 h-4 rounded border-stone-300 text-amber-600 focus:ring-amber-400/20"
                      />
                      <span className="text-sm text-stone-600 group-hover:text-stone-800 transition-colors">
                        I'd prefer a callback to discuss details
                      </span>
                    </label>

                    {/* Dual CTA — Send Enquiry + Call Now */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-stone-900 hover:bg-amber-700 text-white py-5 text-sm font-semibold tracking-wide transition-colors duration-300"
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
                      <a
                        href="tel:+918369233566"
                        className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-amber-600 text-amber-700 hover:bg-amber-50 py-3 text-sm font-semibold tracking-wide transition-colors duration-200"
                      >
                        <PhoneCall size={16} />
                        Call Now
                      </a>
                    </div>

                    {/* Social proof nudge */}
                    <div className="flex items-center justify-center gap-3 pt-1">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className="fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <p className="text-[11px] text-stone-500">
                        5-Star Rated on Google · Trusted by Embassy REIT,
                        LTIMindtree & more
                      </p>
                    </div>

                    <p className="text-[11px] text-stone-400 text-center">
                      We'll never share your information. Expect a reply within
                      1 business hour.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* ── Right column — why reach out + quick contact ── */}
          <div
            className={cn(
              "lg:col-span-5 space-y-5 md:space-y-6 transition-all duration-700 delay-150",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {/* Why reach out */}
            <div className="bg-white border border-stone-200 p-5 md:p-7">
              <p className="text-amber-700 text-[10px] font-bold tracking-[0.3em] uppercase mb-3">
                Why Reach Out
              </p>
              <h3 className="text-lg font-bold text-stone-900 mb-4">
                We respond within 1 business hour.
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-5">
                No automated replies — you'll speak directly with our
                engineering team.
              </p>
              <div className="space-y-3">
                {[
                  {
                    text: "Free site visit & measurement",
                    sub: "Our engineers visit at no cost",
                  },
                  {
                    text: "Written proposal in 48 hours",
                    sub: "Transparent scope, specs & pricing",
                  },
                  {
                    text: "No obligation",
                    sub: "Get the information you need",
                  },
                ].map((item) => (
                  <div key={item.text} className="flex gap-3 group">
                    <div className="w-6 h-6 bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                      <ArrowRight size={12} className="text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-stone-800">
                        {item.text}
                      </p>
                      <p className="text-xs text-stone-400 mt-0.5">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick contact links */}
            <div className="bg-white border border-stone-200 p-5 md:p-7 space-y-4">
              <p className="text-amber-700 text-[10px] font-bold tracking-[0.3em] uppercase mb-1">
                Reach Us Directly
              </p>
              <a
                href="tel:+918369233566"
                className="flex items-center gap-3 text-stone-700 hover:text-amber-700 transition-colors group"
              >
                <div className="w-9 h-9 bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center shrink-0 transition-colors">
                  <Phone size={16} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold">+91 83692 33566</p>
                  <p className="text-[10px] text-stone-400">
                    Call or WhatsApp
                  </p>
                </div>
              </a>
              <a
                href="mailto:info@fineglaze.com"
                className="flex items-center gap-3 text-stone-700 hover:text-amber-700 transition-colors group"
              >
                <div className="w-9 h-9 bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center shrink-0 transition-colors">
                  <Mail size={16} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold">info@fineglaze.com</p>
                  <p className="text-[10px] text-stone-400">
                    We reply within 1 hour
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-3 text-stone-500">
                <div className="w-9 h-9 bg-amber-50 flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-700">
                    Mon – Sat, 9 AM – 6 PM
                  </p>
                  <p className="text-[10px] text-stone-400">Office hours</p>
                </div>
              </div>
            </div>

            {/* Quick stat strip */}
            <div className="grid grid-cols-3 gap-px bg-stone-200">
              {[
                { num: "10+", label: "Projects" },
                { num: "5+", label: "Years" },
                { num: "<1hr", label: "Response" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white text-center py-4 md:py-5"
                >
                  <p className="text-lg md:text-xl font-extrabold text-stone-900">
                    {s.num}
                  </p>
                  <p className="text-[10px] text-stone-400 font-bold tracking-[0.15em] uppercase mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
