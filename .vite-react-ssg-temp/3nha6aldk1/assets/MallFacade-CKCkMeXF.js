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
function MallFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Shopping Mall Facade Contractor India",
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
    "description": "Shopping mall facade contractor in India. Structural glazing, ACP cladding, entrance canopies & curtain wall for retail malls. Maharashtra projects. Free site visit."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What facade system is used for shopping mall entrances in India?", "acceptedAnswer": { "@type": "Answer", "text": "Shopping mall grand entrances in India most commonly use spider glazing or 4-side SSG structural glazing for a dramatic frameless glass effect. These are often combined with a steel space frame or cable-net structure for very large spans. Fine Glaze designs and installs complete structural glazing entrance systems including the glass, fixing hardware, and weatherseal." } },
      { "@type": "Question", "name": "How is ACP cladding used in shopping malls?", "acceptedAnswer": { "@type": "Answer", "text": "ACP cladding in malls is used for: external elevations above curtain wall level; parking structure facades; service entrances and back-of-house areas; signage and brand feature walls; and interior atrium walls where a smooth, colourful surface is required. PVDF-coated ACP is specified for all external applications for longevity and easy cleaning." } },
      { "@type": "Question", "name": "What glass is best for a mall facade in India?", "acceptedAnswer": { "@type": "Answer", "text": "For Indian malls, solar control glass with SHGC 0.25-0.30 is recommended to reduce air conditioning costs. Fine Glaze typically specifies Saint-Gobain Parsol or Pilkington Suncool reflective glass, which provides strong external reflectivity for architectural character while controlling solar heat gain. DGU configuration improves thermal comfort for occupants near the glass." } }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Shopping Mall Facade Contractor India", "item": "https://fineglaze.com/mall-facade" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Mall Facade Contractor Pune & Mumbai | Shopping Mall Glass Facades - Fine Glaze",
        description: "Top shopping mall facade contractor in Pune & Mumbai. High-impact glass facades, retail ACP cladding, spider glass canopies & curtain wall systems.",
        canonical: "https://fineglaze.com/mall-facade",
        keywords: "mall facade contractor, shopping mall glass facade, retail facade, mall ACP cladding, mall entrance canopy",
        ogImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
          "Shopping Mall ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Facade Specialist India" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 mb-8", children: "Shopping mall facades are high-impact, high-visibility architectural statements that must attract footfall, withstand heavy public use, and require minimal maintenance. Fine Glaze delivers complete mall facade solutions — from grand entrance structural glazing to ACP cladding and aluminium retail fronts — for shopping centres across Maharashtra." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get Free Quote" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "View Projects" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
          alt: "Shopping mall facade glass ACP cladding India Fine Glaze",
          className: "rounded-xl shadow-2xl object-cover h-[420px] w-full",
          loading: "eager",
          width: "600",
          height: "420"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Mall Facade Design and Construction Expertise" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Shopping malls represent some of the most architecturally ambitious facade projects in India's construction sector — requiring large-format structural glazing, dramatic entrance canopies, complex geometric cladding, and the ability to create powerful brand identity through architecture. Fine Glaze brings proven experience in delivering these complex facade systems on time and within budget." }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
        "Key facade elements for shopping malls include: ",
        /* @__PURE__ */ jsx("strong", { children: "Grand entrance atrium glazing" }),
        " — spider-fix or structural silicone for maximum transparency and architectural drama; ",
        /* @__PURE__ */ jsx("strong", { children: "Multi-level curtain wall" }),
        " on all elevations with solar control glass; ",
        /* @__PURE__ */ jsx("strong", { children: "ACP cladding" }),
        " for service areas, parking structures, and brand identification zones; ",
        /* @__PURE__ */ jsx("strong", { children: "Aluminium shopfront systems" }),
        " for ground floor retail frontages; and ",
        /* @__PURE__ */ jsx("strong", { children: "Entrance canopies" }),
        " spanning 10-20+ metres with structural glass and steel."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Mall facades also require careful consideration of maintenance access. Fine Glaze designs all mall facade systems with gondola and Building Maintenance Unit (BMU) track provisions, ensuring efficient future window cleaning and periodic sealant maintenance without requiring scaffold setup for every access." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "For retailers and mall developers concerned about energy costs, Fine Glaze's mall facade specifications include solar control glass with SHGC below 0.30 for the Pune and Mumbai climate, integrated sun shading systems for south and west facades, and thermally broken aluminium systems to reduce HVAC load on the tenant floors." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "What We Offer" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Large Atrium Spider Glazing" })
        ] }, "Large Atrium Spider Glazing"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Multi-Level Curtain Wall" })
        ] }, "Multi-Level Curtain Wall"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "ACP Brand Zone Cladding" })
        ] }, "ACP Brand Zone Cladding"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Entrance Canopy Systems" })
        ] }, "Entrance Canopy Systems"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "BMU Track Integration" })
        ] }, "BMU Track Integration"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Solar Control Glass Specification" })
        ] }, "Solar Control Glass Specification")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What facade system is used for shopping mall entrances in India?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Shopping mall grand entrances in India most commonly use spider glazing or 4-side SSG structural glazing for a dramatic frameless glass effect. These are often combined with a steel space frame or cable-net structure for very large spans. Fine Glaze designs and installs complete structural glazing entrance systems including the glass, fixing hardware, and weatherseal." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "How is ACP cladding used in shopping malls?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "ACP cladding in malls is used for: external elevations above curtain wall level; parking structure facades; service entrances and back-of-house areas; signage and brand feature walls; and interior atrium walls where a smooth, colourful surface is required. PVDF-coated ACP is specified for all external applications for longevity and easy cleaning." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What glass is best for a mall facade in India?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "For Indian malls, solar control glass with SHGC 0.25-0.30 is recommended to reduce air conditioning costs. Fine Glaze typically specifies Saint-Gobain Parsol or Pilkington Suncool reflective glass, which provides strong external reflectivity for architectural character while controlling solar heat gain. DGU configuration improves thermal comfort for occupants near the glass." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-slate-50 border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-800 mb-5", children: "Explore Related Services" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/structural-glazing", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Structural Glazing" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Structural glazing systems" })
          ] })
        ] }, "/structural-glazing"),
        /* @__PURE__ */ jsxs(Link, { to: "/acp-aluminium-cladding", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "ACP Cladding" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "ACP cladding" })
          ] })
        ] }, "/acp-aluminium-cladding"),
        /* @__PURE__ */ jsxs(Link, { to: "/curtain-wall-systems", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Curtain Wall Systems" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Curtain wall service" })
          ] })
        ] }, "/curtain-wall-systems"),
        /* @__PURE__ */ jsxs(Link, { to: "/commercial-building-facade", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Commercial Facade Guide" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Commercial facade overview" })
          ] })
        ] }, "/commercial-building-facade"),
        /* @__PURE__ */ jsxs(Link, { to: "/facade-contractor-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Contractor Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Facade services Pune" })
          ] })
        ] }, "/facade-contractor-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/maintenance-services", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Maintenance" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "AMC & cleaning" })
          ] })
        ] }, "/maintenance-services")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  MallFacade as default
};
