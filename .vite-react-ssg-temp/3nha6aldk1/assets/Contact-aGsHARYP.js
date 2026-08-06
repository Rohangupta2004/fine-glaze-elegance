import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { L as Layout, S as SEO, B as Button, d as Label, I as Input, e as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, T as Textarea, c as cn, j as isSupabaseConfigured, s as supabase } from "../main.mjs";
import { u as useScrollAnimation } from "./useScrollAnimation-BUkRNC2S.js";
import { ShieldCheck, CheckCircle2, Clock, Star, Send, PhoneCall, ArrowRight, Phone, Mail, Building2, MapPin } from "lucide-react";
import { toast } from "sonner";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-router-dom";
import "@radix-ui/react-slot";
import "@radix-ui/react-dialog";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
import "@supabase/supabase-js";
import "framer-motion";
import "react-helmet-async";
import "@vercel/speed-insights";
function FadeIn({
  children,
  className,
  delay = 0
}) {
  const { ref, isVisible } = useScrollAnimation();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      ),
      style: { transitionDelay: `${delay}ms` },
      children
    }
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
  "Other"
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
    preferCallback: false
  });
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = async (e) => {
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
          subject: "New Enquiry – Fine Glaze Website",
          from_name: "Fine Glaze Website"
        })
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
            source: "website"
          });
        } catch {
          console.warn("Supabase lead save failed (non-blocking)");
        }
      }
      if (data.success) {
        setIsSubmitted(true);
        toast.success("Message sent successfully!");
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "generate_lead", {
            event_category: "Contact",
            event_label: formData.projectType || "General",
            value: 1
          });
        }
        setFormData({ name: "", email: "", phone: "", projectType: "", message: "", preferCallback: false });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Contact Fine Glaze for a Facade Project Consultation | Fine Glaze",
        description: "Contact Fine Glaze for a facade project consultation in Pune & Mumbai. Request a site visit, quotation, and engineering assessment for aluminium facades, curtain walls, and structural glazing.",
        canonical: "https://fineglaze.com/contact",
        keywords: "facade contractor consultation Pune, facade site visit, facade quotation, glazing contractor contact, facade project enquiry",
        schema: {
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
              addressCountry: "IN"
            }
          }
        }
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative h-[55vh] md:h-[65vh] min-h-[380px] overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/contact-hero.webp",
          alt: "Fine Glaze — Contact us",
          className: "absolute inset-0 w-full h-full object-cover",
          loading: "eager",
          style: { animation: "ctZoom 22s ease-in-out infinite alternate" }
        }
      ),
      /* @__PURE__ */ jsx("style", { children: `@keyframes ctZoom { from { transform: scale(1.0); } to { transform: scale(1.06); } }` }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0",
          style: {
            background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.20) 35%, rgba(0,0,0,0.50) 65%, rgba(0,0,0,0.92) 100%)"
          }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 px-5 md:px-16 pb-8 md:pb-16", children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-400 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-3 md:mb-4", children: "Fine Glaze · Get In Touch" }),
        /* @__PURE__ */ jsxs(
          "h1",
          {
            className: "font-extrabold text-white leading-tight tracking-tight",
            style: { fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" },
            children: [
              "Let's Build",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Together." })
            ]
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "mt-3 md:mt-4 text-white/60 text-sm md:text-lg max-w-md leading-relaxed", children: "Free site consultation. Detailed quote within 24 hours." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-white border-b border-stone-200", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-5 md:px-16 py-4 md:py-5", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs md:text-sm text-stone-600", children: [
      { icon: /* @__PURE__ */ jsx(ShieldCheck, { size: 16, className: "text-amber-600" }), text: "No automated replies — real engineers" },
      { icon: /* @__PURE__ */ jsx(CheckCircle2, { size: 16, className: "text-amber-600" }), text: "Free site visit & measurement" },
      { icon: /* @__PURE__ */ jsx(Clock, { size: 16, className: "text-amber-600" }), text: "Written proposal in 48 hours" },
      { icon: /* @__PURE__ */ jsx(Star, { size: 16, className: "text-amber-600" }), text: "5-Star Rated on Google" }
    ].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-medium", children: [
      item.icon,
      /* @__PURE__ */ jsx("span", { children: item.text })
    ] }, item.text)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 md:py-20 bg-stone-50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-5 md:px-16", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-8 md:gap-12", children: [
      /* @__PURE__ */ jsx(FadeIn, { className: "lg:col-span-7 order-1", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-stone-200 shadow-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "border-b border-stone-100 px-5 md:px-8 py-5 md:py-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-[10px] font-bold tracking-[0.3em] uppercase mb-1", children: "Start Your Project" }),
          /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl font-bold text-stone-900", children: "Tell us what you need" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "px-5 md:px-8 py-5 md:py-7", children: isSubmitted ? /* @__PURE__ */ jsxs("div", { className: "text-center py-14 space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-amber-50 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsx(CheckCircle2, { size: 28, className: "text-amber-600" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-stone-900", children: "Message Sent" }),
          /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-sm max-w-md mx-auto", children: "Thank you. Our team will review your inquiry and get back to you within 1 business hour during working hours." }),
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: () => {
                setIsSubmitted(false);
                setFormData({ name: "", email: "", phone: "", projectType: "", message: "", preferCallback: false });
              },
              variant: "outline",
              className: "mt-4",
              children: "Send Another Message"
            }
          )
        ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "name", className: "text-xs font-semibold text-stone-600 uppercase tracking-wider", children: "Full Name *" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "name",
                  name: "name",
                  placeholder: "Ramesh Sharma",
                  required: true,
                  value: formData.name,
                  onChange: handleChange,
                  className: "border-stone-200 focus:border-amber-400 focus:ring-amber-400/20 h-11"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "email", className: "text-xs font-semibold text-stone-600 uppercase tracking-wider", children: "Email *" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "email",
                  name: "email",
                  type: "email",
                  placeholder: "ramesh@company.com",
                  required: true,
                  value: formData.email,
                  onChange: handleChange,
                  className: "border-stone-200 focus:border-amber-400 focus:ring-amber-400/20 h-11"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "phone", className: "text-xs font-semibold text-stone-600 uppercase tracking-wider", children: "Phone *" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "phone",
                  name: "phone",
                  type: "tel",
                  placeholder: "+91 98765 43210",
                  required: true,
                  value: formData.phone,
                  onChange: handleChange,
                  className: "border-stone-200 focus:border-amber-400 focus:ring-amber-400/20 h-11"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "projectType", className: "text-xs font-semibold text-stone-600 uppercase tracking-wider", children: "Project Type *" }),
              /* @__PURE__ */ jsxs(
                Select,
                {
                  value: formData.projectType,
                  onValueChange: (value) => setFormData((prev) => ({ ...prev, projectType: value })),
                  required: true,
                  children: [
                    /* @__PURE__ */ jsx(SelectTrigger, { className: "border-stone-200 focus:border-amber-400 focus:ring-amber-400/20 h-11", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select a service" }) }),
                    /* @__PURE__ */ jsx(SelectContent, { children: projectTypes.map((type) => /* @__PURE__ */ jsx(SelectItem, { value: type, children: type }, type)) })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxs(Label, { htmlFor: "message", className: "text-xs font-semibold text-stone-600 uppercase tracking-wider", children: [
              "Project Details ",
              /* @__PURE__ */ jsx("span", { className: "text-stone-400 normal-case tracking-normal", children: "(optional)" })
            ] }),
            /* @__PURE__ */ jsx(
              Textarea,
              {
                id: "message",
                name: "message",
                placeholder: "E.g. We need structural glazing for a 5-floor commercial building in Hinjewadi, Pune. Looking for site visit and quotation...",
                rows: 3,
                value: formData.message,
                onChange: handleChange,
                className: "border-stone-200 focus:border-amber-400 focus:ring-amber-400/20 resize-none"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 cursor-pointer group", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                checked: formData.preferCallback,
                onChange: (e) => setFormData((prev) => ({ ...prev, preferCallback: e.target.checked })),
                className: "w-4 h-4 rounded border-stone-300 text-amber-600 focus:ring-amber-400/20"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-stone-600 group-hover:text-stone-800 transition-colors", children: "I'd prefer a callback to discuss details" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "submit",
                disabled: isSubmitting,
                className: "flex-1 bg-stone-900 hover:bg-amber-700 text-white py-5 text-sm font-semibold tracking-wide transition-colors duration-300",
                children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("div", { className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" }),
                  "Sending..."
                ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(Send, { size: 16, className: "mr-2" }),
                  "Send Enquiry"
                ] })
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "tel:+918369233566",
                className: "flex-1 inline-flex items-center justify-center gap-2 border-2 border-amber-600 text-amber-700 hover:bg-amber-50 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 rounded-md",
                children: [
                  /* @__PURE__ */ jsx(PhoneCall, { size: 16 }),
                  "Call Now"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 pt-1", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-0.5", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { size: 12, className: "fill-amber-400 text-amber-400" }, i)) }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-stone-500", children: "5-Star Rated on Google · Trusted by Embassy REIT, LTIMindtree & more" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-stone-400 text-center", children: "We'll never share your information. Expect a reply within 1 business hour." })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxs(FadeIn, { delay: 120, className: "lg:col-span-5 order-2 space-y-5 md:space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-stone-200 p-5 md:p-7", children: [
          /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-[10px] font-bold tracking-[0.3em] uppercase mb-3", children: "Why Reach Out" }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-stone-900 mb-4", children: "We respond within 1 business hour." }),
          /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-sm leading-relaxed mb-5", children: "No automated replies — you'll speak directly with our engineering team." }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
            { text: "Free site visit & measurement", sub: "Our engineers visit at no cost" },
            { text: "Written proposal in 48 hours", sub: "Transparent scope, specs & pricing" },
            { text: "No obligation", sub: "Get the information you need" }
          ].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex gap-3 group", children: [
            /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-amber-50 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsx(ArrowRight, { size: 12, className: "text-amber-600" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-stone-800", children: item.text }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-400 mt-0.5", children: item.sub })
            ] })
          ] }, item.text)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-stone-200 p-5 md:p-7 space-y-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-[10px] font-bold tracking-[0.3em] uppercase mb-1", children: "Reach Us Directly" }),
          /* @__PURE__ */ jsxs("a", { href: "tel:+918369233566", className: "flex items-center gap-3 text-stone-700 hover:text-amber-700 transition-colors group", children: [
            /* @__PURE__ */ jsx("div", { className: "w-9 h-9 bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center shrink-0 transition-colors", children: /* @__PURE__ */ jsx(Phone, { size: 16, className: "text-amber-600" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: "+91 83692 33566" }),
              /* @__PURE__ */ jsx("p", { className: "text-[10px] text-stone-400", children: "Call or WhatsApp" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "mailto:info@fineglaze.com", className: "flex items-center gap-3 text-stone-700 hover:text-amber-700 transition-colors group", children: [
            /* @__PURE__ */ jsx("div", { className: "w-9 h-9 bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center shrink-0 transition-colors", children: /* @__PURE__ */ jsx(Mail, { size: 16, className: "text-amber-600" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: "info@fineglaze.com" }),
              /* @__PURE__ */ jsx("p", { className: "text-[10px] text-stone-400", children: "We reply within 1 hour" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-stone-400 opacity-80", children: [
            /* @__PURE__ */ jsx("div", { className: "w-9 h-9 bg-stone-100 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Clock, { size: 16, className: "text-stone-400" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-stone-500", children: "Mon – Sat, 9 AM – 6 PM" }),
              /* @__PURE__ */ jsx("p", { className: "text-[10px] text-stone-400", children: "Office hours" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden bg-stone-900 text-white p-5 md:p-7", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-24 h-24 bg-amber-600/10" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx(Building2, { size: 18, className: "text-amber-400" }),
              /* @__PURE__ */ jsx("p", { className: "text-[10px] font-bold tracking-[0.3em] uppercase text-white/50", children: "Head Office" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-white/80 leading-relaxed mb-1 font-medium", children: "Fine Glaze" }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-white/60 leading-relaxed", children: [
              "Shop No. 1 & 2, Jagdamba Bhawan Marg,",
              /* @__PURE__ */ jsx("br", {}),
              "Near Sunshine Hills, Shree Siddhivinayak Meera,",
              /* @__PURE__ */ jsx("br", {}),
              "Undri, Pune – 411060, Maharashtra"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-5 pt-4 border-t border-white/10 flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-amber-400 shrink-0" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-white/50", children: "Mon – Sat, 9:00 AM – 6:00 PM" })
            ] }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://maps.app.goo.gl/JDF3ESXQGHtwKoAr6",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-2 text-amber-400 font-semibold text-xs mt-4 hover:gap-3 transition-all group",
                children: [
                  /* @__PURE__ */ jsx(MapPin, { size: 13 }),
                  "Open in Google Maps",
                  /* @__PURE__ */ jsx(ArrowRight, { size: 12, className: "group-hover:translate-x-0.5 transition-transform" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-px bg-stone-200", children: [
          { num: "10+", label: "Projects" },
          { num: "5+", label: "Years" },
          { num: "<1hr", label: "Response" }
        ].map((s) => /* @__PURE__ */ jsxs("div", { className: "bg-white text-center py-4 md:py-5", children: [
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl font-extrabold text-stone-900", children: s.num }),
          /* @__PURE__ */ jsx("p", { className: "text-[10px] text-stone-400 font-bold tracking-[0.15em] uppercase mt-1", children: s.label })
        ] }, s.label)) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsxs("section", { className: "relative h-[30vh] md:h-[40vh] min-h-[200px] overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/Glazing.webp",
          alt: "Fine Glaze facade work",
          className: "absolute inset-0 w-full h-full object-cover",
          loading: "lazy",
          style: { objectPosition: "center 40%" }
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0",
          style: {
            background: "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.30) 50%, rgba(0,0,0,0.75) 100%)"
          }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-center px-5", children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-400 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-2", children: "Trusted Across Maharashtra" }),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-white font-bold leading-snug max-w-xl",
            style: { fontSize: "clamp(1.1rem, 2.5vw, 1.75rem)" },
            children: '"From concept to completion — we engineer facades that define skylines."'
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsx("div", { className: "w-full h-[250px] md:h-[380px] bg-stone-200", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        src: "https://maps.google.com/maps?q=Fine+Glaze,+Shop+No+1+2+Jagdamba+Bhawan+Marg+Near+Sunshine+Hills+Undri+Pune+411060&output=embed",
        width: "100%",
        height: "100%",
        style: { border: 0 },
        allowFullScreen: true,
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade",
        title: "Fine Glaze Office — Undri, Pune"
      }
    ) }) })
  ] });
};
export {
  Contact as default
};
