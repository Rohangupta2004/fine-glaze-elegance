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
function FacadeDesignGuide() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Building Facade Design Guide India 2024",
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
    "description": "Complete facade design guide for India 2024. Principles, materials, energy performance, regulatory requirements & best practices for commercial and residential buildings."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What WWR (Window-to-Wall Ratio) is recommended for Indian commercial buildings?", "acceptedAnswer": { "@type": "Answer", "text": "ECBC 2017 recommends maximum 40% WWR for composite climate zones (Pune, Delhi, Hyderabad) and 35% for hot-humid coastal zones (Mumbai, Chennai, Kochi). Higher WWR requires Low-E glass with SHGC below 0.25 to meet energy compliance targets." } },
      { "@type": "Question", "name": "How do I choose the right glass for a facade in India?", "acceptedAnswer": { "@type": "Answer", "text": "Key parameters: Solar Heat Gain Coefficient (SHGC) — below 0.35 for most Indian climates; Visible Light Transmittance (VLT) — above 40% for daylighting quality; U-value — below 2.0 W/m2K for DGU. Fine Glaze works with facade consultants to select glass that balances energy performance, glare control, and aesthetic requirements." } },
      { "@type": "Question", "name": "What is a facade consultant and do I need one for my project?", "acceptedAnswer": { "@type": "Answer", "text": "A facade consultant (or facade engineer) specialises in the technical design of building envelopes, including structural analysis, thermal modelling, and specification. For buildings above 6 storeys or with complex geometry, engaging a facade consultant is strongly recommended. Fine Glaze regularly collaborates with India's leading facade consultants on large projects." } }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Building Facade Design Guide India 2024", "item": "https://fineglaze.com/facade-design-guide" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Building Facade Design Guide India 2024 | Principles & Materials – Fine Glaze",
        description: "Complete facade design guide for India 2024. Principles, materials, energy performance, regulatory requirements & best practices for commercial and residential buildings.",
        canonical: "https://fineglaze.com/facade-design-guide",
        keywords: "facade design guide India, building facade design principles India, commercial facade design India, window wall ratio India, facade design ECBC India, glass facade design India 2024",
        ogImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
          "Building Facade ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Design Guide India" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 mb-8", children: "Designing a building facade in India requires balancing architectural vision, structural engineering, energy performance, fire safety regulations, local climate conditions, and construction budget. This comprehensive guide covers all the key principles and best practices for facade design in the Indian context." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get Free Quote" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "View Projects" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
          alt: "Building facade design guide India commercial architecture Fine Glaze",
          className: "rounded-xl shadow-2xl object-cover h-[420px] w-full",
          loading: "eager",
          width: "600",
          height: "420"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Facade Design Principles for Indian Buildings" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "A well-designed facade is more than an aesthetic choice — it is a multi-performance system. In the Indian context, facade design must address: solar heat gain (India receives 4–6 kWh/sq m/day of solar radiation); monsoon weather resistance (wind-driven rain, high humidity); seismic resilience (Zones II–V across India); fire safety (NBC 2016); and long-term durability in a range of climate zones from coastal to semi-arid." }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mt-8 mb-3", children: "Glass-to-Wall Ratio (Window-to-Wall Ratio)" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "The Window-to-Wall Ratio (WWR) is one of the most important facade design parameters. ECBC (Energy Conservation Building Code) 2017 mandates maximum WWR values by climate zone for commercial buildings. For composite climate (Pune, Delhi): maximum 40% WWR. For hot-humid climate (Mumbai, Chennai): maximum 35% WWR. Higher WWR requires compensating Low-E glass with lower SHGC values." }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mt-8 mb-3", children: "Solar Shading — Reducing Cooling Load" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Fixed horizontal shading (chajjas) over south-facing windows can reduce solar heat gain by 30-50%. Vertical fins on east and west facades control low-angle morning and evening sun. Integrated aluminium louvres and brise-soleils combine shading with architectural character. Fine Glaze designs and installs custom aluminium shading systems as part of integrated facade packages." }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mt-8 mb-3", children: "Facade Modularity and Buildability" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Commercial facades should be modular — based on a regular structural bay grid (typically 1.2m or 1.5m module for stick systems; 1.2m x 3.0m to 1.5m x 3.6m for unitized panels). Modular design reduces fabrication waste, simplifies installation, and enables efficient future maintenance and panel replacement. Fine Glaze advises architects on optimising bay dimensions during the design development stage to reduce overall facade cost." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "What We Offer" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Window-to-Wall Ratio Guidance" })
        ] }, "Window-to-Wall Ratio Guidance"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Solar Shading Design" })
        ] }, "Solar Shading Design"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "ECBC 2017 Compliance" })
        ] }, "ECBC 2017 Compliance"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Modular Facade Planning" })
        ] }, "Modular Facade Planning"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Climate Zone Optimisation" })
        ] }, "Climate Zone Optimisation"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Material Selection Framework" })
        ] }, "Material Selection Framework")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What WWR (Window-to-Wall Ratio) is recommended for Indian commercial buildings?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "ECBC 2017 recommends maximum 40% WWR for composite climate zones (Pune, Delhi, Hyderabad) and 35% for hot-humid coastal zones (Mumbai, Chennai, Kochi). Higher WWR requires Low-E glass with SHGC below 0.25 to meet energy compliance targets." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "How do I choose the right glass for a facade in India?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Key parameters: Solar Heat Gain Coefficient (SHGC) — below 0.35 for most Indian climates; Visible Light Transmittance (VLT) — above 40% for daylighting quality; U-value — below 2.0 W/m2K for DGU. Fine Glaze works with facade consultants to select glass that balances energy performance, glare control, and aesthetic requirements." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What is a facade consultant and do I need one for my project?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "A facade consultant (or facade engineer) specialises in the technical design of building envelopes, including structural analysis, thermal modelling, and specification. For buildings above 6 storeys or with complex geometry, engaging a facade consultant is strongly recommended. Fine Glaze regularly collaborates with India's leading facade consultants on large projects." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-slate-50 border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-800 mb-5", children: "Explore Related Services" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4", children: [
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
        /* @__PURE__ */ jsxs(Link, { to: "/aluminium-vs-acp-cladding", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Aluminium vs ACP Guide" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Material comparison" })
          ] })
        ] }, "/aluminium-vs-acp-cladding"),
        /* @__PURE__ */ jsxs(Link, { to: "/pvdf-vs-powder-coating-aluminium", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "PVDF vs Powder Coating" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Coating guide" })
          ] })
        ] }, "/pvdf-vs-powder-coating-aluminium"),
        /* @__PURE__ */ jsxs(Link, { to: "/structural-glazing", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Structural Glazing" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Structural glazing" })
          ] })
        ] }, "/structural-glazing"),
        /* @__PURE__ */ jsxs(Link, { to: "/facade-contractor-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Contractor Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Facade contractor" })
          ] })
        ] }, "/facade-contractor-pune")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  FacadeDesignGuide as default
};
