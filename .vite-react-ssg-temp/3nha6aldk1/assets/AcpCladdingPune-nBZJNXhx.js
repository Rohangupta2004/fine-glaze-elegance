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
function AcpCladdingPune() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ACP Cladding Contractor in Pune",
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
    "description": "ACP cladding contractor in Pune. Fire-retardant aluminium composite panels, PVDF finishes, CNC routing. NBC 2016 compliant. Free site visit."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the cost of ACP cladding in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "ACP cladding in Pune costs Rs 180-450 per sq ft installed, depending on panel brand, core type (PE vs FR), finish quality (polyester vs PVDF), and sub-frame complexity. Fine Glaze provides detailed BOQ-based quotations with brand specifications." } },
      { "@type": "Question", "name": "Is FR-grade ACP mandatory in Pune buildings?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. As per NBC 2016 and Maharashtra Fire Safety regulations, buildings above 15 metres or G+2 floors must use FR ACP panels with A2 or B1 core classification for external cladding. Fine Glaze uses only certified FR panels." } },
      { "@type": "Question", "name": "How long does ACP cladding installation take in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "For a typical 3-4 storey commercial building (300-500 sq m), ACP cladding takes 2-3 weeks. Larger projects of 1000+ sq m take 4-6 weeks. Fabrication and site preparation run in parallel for faster completion." } }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "ACP Cladding Contractor in Pune", "item": "https://fineglaze.com/acp-cladding-pune" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "ACP Cladding Contractor Pune | Aluminium Composite Panel Baner & Hinjewadi - Fine Glaze",
        description: "Top ACP cladding contractor in Pune. Fire-retardant aluminium composite panels for commercial facades in Baner, Hinjewadi, Kharadi & Wakad.",
        canonical: "https://fineglaze.com/acp-cladding-pune",
        keywords: "ACP cladding contractor Pune, ACP facade Pune, aluminium composite panel Pune, ACP sheet installation Pune",
        ogImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
          "ACP Cladding ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Contractor in Pune" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 mb-8", children: "Fine Glaze is a leading ACP cladding contractor in Pune, providing fire-retardant aluminium composite panel cladding for commercial buildings, retail showrooms, hospitals, corporate offices, and residential exteriors. We work with premium brands including Aludecor, Viva, Alstone, and Alubond." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get Free Quote" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "View Projects" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
          alt: "ACP aluminium composite panel cladding Pune - Fine Glaze",
          className: "rounded-xl shadow-2xl object-cover h-[420px] w-full",
          loading: "eager",
          width: "600",
          height: "420"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "ACP Cladding Expertise Across Pune" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "ACP (Aluminium Composite Panels) are 3-layer sandwich panels — two thin aluminium sheets bonded to a polyethylene or fire-retardant (FR) mineral core. For buildings above 15 metres, NBC 2016 mandates FR-grade cores (A2 or B1 classification). Fine Glaze exclusively uses FR-grade panels for all external cladding on buildings above ground + 2 floors." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Our Pune ACP projects span brand showrooms on MG Road and Baner Road, corporate office parks in Hinjewadi and Kharadi, hospital exteriors, and residential compound walls. We handle complete turnkey execution from surface preparation, sub-frame fabrication, panel routing, folding, and final weather-sealed installation." }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
        "PVDF (Polyvinylidene Fluoride) coated ACP panels are strongly recommended for Pune's climate — the PVDF coating resists UV fading, acid rain, and humidity, maintaining colour vibrancy for ",
        /* @__PURE__ */ jsx("strong", { children: "20+ years without repainting" }),
        ". We offer 300+ colour options including metallic, brushed, mirror, and wood-grain finishes."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Fine Glaze's Pune ACP cladding projects include complete building elevation cladding, canopy and entrance feature cladding, signage fascia systems, parapet and sunshade cladding, and ACP spandrel infill panels within curtain wall systems. Our experienced Pune fabrication team ensures precise CNC-routed panel edges and consistent joint widths for a professional finish." }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
        "We serve all Pune zones for ACP cladding — from ",
        /* @__PURE__ */ jsx("strong", { children: "Hinjewadi's tech parks" }),
        " and ",
        /* @__PURE__ */ jsx("strong", { children: "Kharadi's commercial corridor" }),
        " to ",
        /* @__PURE__ */ jsx("strong", { children: "Undri's residential developments" }),
        " and ",
        /* @__PURE__ */ jsx("strong", { children: "Pimpri-Chinchwad's industrial sector" }),
        ". Contact Fine Glaze for a detailed BOQ and brand comparison before making your ACP panel selection."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "What We Offer" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "FR-Grade A2/B1 Panels" })
        ] }, "FR-Grade A2/B1 Panels"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "PVDF Coating" })
        ] }, "PVDF Coating"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "CNC Routed Designs" })
        ] }, "CNC Routed Designs"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Aludecor / Alubond / Viva" })
        ] }, "Aludecor / Alubond / Viva"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Lightweight Sub-Frame System" })
        ] }, "Lightweight Sub-Frame System"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "300+ Colour Options" })
        ] }, "300+ Colour Options")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What is the cost of ACP cladding in Pune?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "ACP cladding in Pune costs Rs 180-450 per sq ft installed, depending on panel brand, core type (PE vs FR), finish quality (polyester vs PVDF), and sub-frame complexity. Fine Glaze provides detailed BOQ-based quotations with brand specifications." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "Is FR-grade ACP mandatory in Pune buildings?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Yes. As per NBC 2016 and Maharashtra Fire Safety regulations, buildings above 15 metres or G+2 floors must use FR ACP panels with A2 or B1 core classification for external cladding. Fine Glaze uses only certified FR panels." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "How long does ACP cladding installation take in Pune?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "For a typical 3-4 storey commercial building (300-500 sq m), ACP cladding takes 2-3 weeks. Larger projects of 1000+ sq m take 4-6 weeks. Fabrication and site preparation run in parallel for faster completion." })
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
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Full ACP cladding service" })
          ] })
        ] }, "/acp-aluminium-cladding"),
        /* @__PURE__ */ jsxs(Link, { to: "/curtain-wall-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Curtain Wall Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Glass curtain wall Pune" })
          ] })
        ] }, "/curtain-wall-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/aluminium-facade", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Aluminium Facade" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Aluminium facade systems" })
          ] })
        ] }, "/aluminium-facade"),
        /* @__PURE__ */ jsxs(Link, { to: "/structural-glazing-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Structural Glazing Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Structural glazing Pune" })
          ] })
        ] }, "/structural-glazing-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/facade-contractor-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Contractor Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Complete facade services" })
          ] })
        ] }, "/facade-contractor-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/maintenance-services", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Maintenance" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Cladding maintenance" })
          ] })
        ] }, "/maintenance-services")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  AcpCladdingPune as default
};
