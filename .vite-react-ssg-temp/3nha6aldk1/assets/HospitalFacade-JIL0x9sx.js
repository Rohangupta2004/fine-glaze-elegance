import { jsxs, jsx } from "react/jsx-runtime";
import { L as Layout, S as SEO, B as Button, C as CTASection } from "../main.mjs";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import "vite-react-ssg";
import "react";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "@radix-ui/react-slot";
import "@radix-ui/react-dialog";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
import "@supabase/supabase-js";
import "framer-motion";
import "react-helmet-async";
import "@vercel/speed-insights";
function HospitalFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hospital & Healthcare Building Facade Contractor India – Fine Glaze",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fine Glaze",
      "@id": "https://fineglaze.com",
      "url": "https://fineglaze.com",
      "telephone": "+91-8369233566",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Pune" },
      { "@type": "City", "name": "Mumbai" },
      { "@type": "State", "name": "Maharashtra" }
    ],
    "description": "Specialist facade contractor for hospitals and healthcare buildings in India. Hygienic ACP cladding, anti-bacterial coatings, curtain wall systems. Pune & Mumbai projects."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What facade cladding is best for hospitals in India?", "acceptedAnswer": { "@type": "Answer", "text": "For external hospital facades, Fine Glaze recommends FR-grade ACP with PVDF coating for opaque zones (smooth, cleanable, fire-rated), and curtain wall with acoustic DGU for patient room floors. PVDF-coated surfaces resist biofilm adhesion and can be cleaned with standard hospital-grade disinfectants without surface degradation." } },
      { "@type": "Question", "name": "Does facade work need to happen while a hospital is operational?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, most hospital facade refurbishment projects must be completed with minimal disruption to ongoing operations. Fine Glaze uses section-by-section working strategies, noise and dust isolation, and scheduling critical work in periods of lower clinical activity. Our team has experience managing the logistics of working adjacent to ICUs, OTs, and wards." } },
      { "@type": "Question", "name": "What acoustic glass is used for hospital ward facades?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze specifies DGU with laminated outer pane (6.38mm VSG + 12mm argon + 6mm toughened) for hospital ward facades requiring acoustic performance. This specification achieves Rw 38-42 dB sound reduction, reducing external traffic and mechanical noise to acceptable levels for patient recovery." } }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Hospital & Healthcare Building Facade Contractor India – Fine Glaze", "item": "https://fineglaze.com/hospital-facade" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Hospital Facade Contractor Pune & Mumbai | Healthcare Building Facades - Fine Glaze",
        description: "Specialist hospital facade contractor in Pune & Mumbai. Hygienic ACP cladding, acoustic glass facades & curtain wall systems for healthcare facilities.",
        canonical: "https://fineglaze.com/hospital-facade",
        keywords: "hospital facade contractor, hospital glass facade, healthcare building facade, hygienic facade systems, hospital curtain wall",
        ogImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
          "Hospital & Healthcare ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Facade Specialist India" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 mb-8", children: "Hospital and healthcare building facades demand performance standards beyond typical commercial projects. Fine Glaze specialises in facade systems for hospitals, diagnostic centres, pharmaceutical facilities, and medical colleges — combining hygienic surface finishes, infection-control cladding materials, and robust weatherproofing with attractive architectural design." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get Free Quote" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "View Projects" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
          alt: "Hospital healthcare building facade cladding India Fine Glaze",
          className: "rounded-xl shadow-2xl object-cover h-[420px] w-full",
          loading: "eager",
          width: "600",
          height: "420"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Unique Facade Requirements for Healthcare Buildings" }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
        "Healthcare buildings have distinctive facade requirements driven by hygiene, patient comfort, operational continuity, and infection control. Fine Glaze's hospital facade specifications address: ",
        /* @__PURE__ */ jsx("strong", { children: "anti-bacterial and anti-fungal surface coatings" }),
        " for external wall areas adjacent to sterile zones; ",
        /* @__PURE__ */ jsx("strong", { children: "smooth, cleanable cladding surfaces" }),
        " (ACP with PVDF coating or powder coating) that resist biofilm adhesion; ",
        /* @__PURE__ */ jsx("strong", { children: "natural daylighting" }),
        " through considered glazing design to support patient recovery; and ",
        /* @__PURE__ */ jsx("strong", { children: "acoustic performance" }),
        " to reduce external noise transmission to sensitive clinical areas."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Indian healthcare facilities increasingly adopt international design standards as the sector upgrades facilities for JCI and NABH accreditation. These standards include requirements for facade materials free from volatile organic compounds (VOC), non-combustible external cladding materials, and passive design features that contribute to patient wellbeing including views of greenery through optimally-sized window openings." }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
        "Fine Glaze has completed facade projects for hospitals in Pune and surrounding areas, including both new build and facade refurbishment contracts. Our hospital facade packages typically include: ",
        /* @__PURE__ */ jsx("strong", { children: "ACP cladding" }),
        " for service zones and car parks; ",
        /* @__PURE__ */ jsx("strong", { children: "curtain wall glazing" }),
        " for patient ward floors (with acoustic DGU); ",
        /* @__PURE__ */ jsx("strong", { children: "aluminium windows" }),
        " for clinical areas requiring natural ventilation; and ",
        /* @__PURE__ */ jsx("strong", { children: "feature entrance structural glazing" }),
        " for welcoming, light-filled reception areas."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
        "For critical infrastructure considerations, Fine Glaze can provide ",
        /* @__PURE__ */ jsx("strong", { children: "blast-resistant or hurricane-rated facade systems" }),
        " for healthcare buildings requiring continuity of operations in extreme weather events — increasingly relevant for coastal hospitals in Maharashtra and Gujarat."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "What We Offer" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Anti-Bacterial ACP Coatings" })
        ] }, "Anti-Bacterial ACP Coatings"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Acoustic DGU Glass" })
        ] }, "Acoustic DGU Glass"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "NABH & JCI Compatible Materials" })
        ] }, "NABH & JCI Compatible Materials"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Low-VOC PVDF Finishes" })
        ] }, "Low-VOC PVDF Finishes"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Natural Daylighting Design" })
        ] }, "Natural Daylighting Design"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Cleanable Smooth Surfaces" })
        ] }, "Cleanable Smooth Surfaces")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What facade cladding is best for hospitals in India?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "For external hospital facades, Fine Glaze recommends FR-grade ACP with PVDF coating for opaque zones (smooth, cleanable, fire-rated), and curtain wall with acoustic DGU for patient room floors. PVDF-coated surfaces resist biofilm adhesion and can be cleaned with standard hospital-grade disinfectants without surface degradation." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "Does facade work need to happen while a hospital is operational?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Yes, most hospital facade refurbishment projects must be completed with minimal disruption to ongoing operations. Fine Glaze uses section-by-section working strategies, noise and dust isolation, and scheduling critical work in periods of lower clinical activity. Our team has experience managing the logistics of working adjacent to ICUs, OTs, and wards." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What acoustic glass is used for hospital ward facades?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Fine Glaze specifies DGU with laminated outer pane (6.38mm VSG + 12mm argon + 6mm toughened) for hospital ward facades requiring acoustic performance. This specification achieves Rw 38-42 dB sound reduction, reducing external traffic and mechanical noise to acceptable levels for patient recovery." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-slate-50 border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-800 mb-5", children: "Explore Related Services" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/acp-aluminium-cladding", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "ACP Cladding" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "ACP cladding systems" })
          ] })
        ] }, "/acp-aluminium-cladding"),
        /* @__PURE__ */ jsxs(Link, { to: "/curtain-wall-systems", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Curtain Wall Systems" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Curtain wall glazing" })
          ] })
        ] }, "/curtain-wall-systems"),
        /* @__PURE__ */ jsxs(Link, { to: "/facade-contractor-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Contractor Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Facade services Pune" })
          ] })
        ] }, "/facade-contractor-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/commercial-building-facade", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Commercial Facade Guide" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Commercial facade overview" })
          ] })
        ] }, "/commercial-building-facade"),
        /* @__PURE__ */ jsxs(Link, { to: "/maintenance-services", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Maintenance" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "AMC & maintenance" })
          ] })
        ] }, "/maintenance-services"),
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Get a Quote" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Free consultation" })
          ] })
        ] }, "/contact")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  HospitalFacade as default
};
