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
function AluminiumVsAcp() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Facade vs ACP Cladding: Which is Better for India? – Fine Glaze",
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
    "description": "Aluminium facade vs ACP cladding — detailed comparison of cost, durability, fire safety, aesthetics & maintenance for Indian buildings. Expert guide by Fine Glaze."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Is ACP cladding banned in India?", "acceptedAnswer": { "@type": "Answer", "text": "PE-core ACP is not banned but is restricted to buildings below 15m height under NBC 2016 and state fire regulations. For buildings above 15m, only FR-grade ACP with A2 or B1 mineral core is permitted. Fine Glaze exclusively uses FR-grade ACP for external facades." } },
      { "@type": "Question", "name": "Can ACP cladding be combined with glass on a building?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The most common combination is ACP spandrel panels combined with glass windows or curtain wall glazing. This creates a cost-effective facade with mixed opacity. Fine Glaze regularly designs and installs combination systems." } },
      { "@type": "Question", "name": "Which lasts longer — aluminium facade or ACP?", "acceptedAnswer": { "@type": "Answer", "text": "Pure aluminium facade systems can last 30-40+ years with minimal maintenance. PVDF-coated ACP panels last 20-25 years before colour degradation. In coastal environments, aluminium extrusions typically outperform ACP in the very long term." } }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Aluminium Facade vs ACP Cladding: Which is Better for India? – Fine Glaze", "item": "https://fineglaze.com/aluminium-vs-acp-cladding" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Aluminium Facade vs ACP Cladding: Which is Better for India? – Fine Glaze",
        description: "Aluminium facade vs ACP cladding — detailed comparison of cost, durability, fire safety, aesthetics & maintenance for Indian buildings. Expert guide by Fine Glaze.",
        canonical: "https://fineglaze.com/aluminium-vs-acp-cladding",
        keywords: "aluminium facade vs ACP cladding, ACP vs aluminium comparison India, which is better ACP or aluminium, ACP cladding vs glass facade, facade selection guide India",
        ogImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
          "Aluminium Facade vs ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "ACP Cladding" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 mb-8", children: "Choosing between an aluminium facade system and ACP (Aluminium Composite Panel) cladding is one of the most common decisions architects and developers face. Both offer excellent aesthetics and weather protection — but they differ significantly in cost, weight, fire safety, flexibility, and long-term performance." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get Free Quote" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "View Projects" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
          alt: "Aluminium facade vs ACP cladding comparison India buildings Fine Glaze",
          className: "rounded-xl shadow-2xl object-cover h-[420px] w-full",
          loading: "eager",
          width: "600",
          height: "420"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Head-to-Head: Aluminium Facade vs ACP Cladding" }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto mt-6", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse text-sm", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-muted", children: [
          /* @__PURE__ */ jsx("th", { className: "border border-border p-3 text-left font-semibold", children: "Parameter" }),
          /* @__PURE__ */ jsx("th", { className: "border border-border p-3 text-left font-semibold", children: "Aluminium Facade" }),
          /* @__PURE__ */ jsx("th", { className: "border border-border p-3 text-left font-semibold", children: "ACP Cladding" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3 font-medium", children: "Cost" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Rs 350–1,200/sq ft" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Rs 180–450/sq ft" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "bg-muted/30", children: [
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3 font-medium", children: "Fire Safety" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Non-combustible (Class A)" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "PE core combustible; FR-core required above G+2" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3 font-medium", children: "Weight" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Higher (extrusions + glass)" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Very lightweight (3–4 kg/sq m)" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "bg-muted/30", children: [
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3 font-medium", children: "Durability" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "25–40 years" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "15–25 years (PVDF)" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3 font-medium", children: "Design Flexibility" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Moderate" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Very high (CNC routing, 3D)" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "bg-muted/30", children: [
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3 font-medium", children: "Glass Integration" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Yes (windows, curtain walls)" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Opaque panels only" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3 font-medium", children: "Maintenance" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Low" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Low" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mt-10", children: "When to Choose ACP Cladding" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "ACP cladding is ideal when: (1) Budget is a primary constraint; (2) The project is low-rise (below 15m) or requires FR panels for mid-rise; (3) Complex 3D forms or curved cladding are required; (4) Fast installation is critical; (5) Large opaque facade areas need coverage without glass elements." }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mt-10", children: "When to Choose Aluminium Facade" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Aluminium facade systems are the right choice when: (1) Glass integration (curtain wall, windows) is required; (2) Building is high-rise (10+ storeys) requiring structural performance; (3) Long-term durability (30+ years) is prioritised; (4) The building is in a coastal zone requiring marine-grade performance; (5) Thermal performance and energy efficiency (LEED) are targets." }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mt-10", children: "Fire Safety in India — The Critical Difference" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Fire safety regulations in India are increasingly strict following incidents with combustible ACP cladding globally. NBC 2016 mandates FR-grade ACP (A2 or B1 mineral core) for all buildings above 15 metres. PE-core ACP, which is combustible, must not be used on buildings above 3 floors. Aluminium extrusions, by contrast, are inherently non-combustible (Class A) and have no height restriction. Fine Glaze always uses FR-grade ACP for external applications and provides material certification on request." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "What We Offer" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Detailed Cost Comparison" })
        ] }, "Detailed Cost Comparison"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Fire Safety Analysis India" })
        ] }, "Fire Safety Analysis India"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Durability Benchmarking" })
        ] }, "Durability Benchmarking"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Design Flexibility Guide" })
        ] }, "Design Flexibility Guide"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "NBC 2016 Compliance" })
        ] }, "NBC 2016 Compliance"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Expert Selection Framework" })
        ] }, "Expert Selection Framework")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "Is ACP cladding banned in India?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "PE-core ACP is not banned but is restricted to buildings below 15m height under NBC 2016 and state fire regulations. For buildings above 15m, only FR-grade ACP with A2 or B1 mineral core is permitted. Fine Glaze exclusively uses FR-grade ACP for external facades." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "Can ACP cladding be combined with glass on a building?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Yes. The most common combination is ACP spandrel panels combined with glass windows or curtain wall glazing. This creates a cost-effective facade with mixed opacity. Fine Glaze regularly designs and installs combination systems." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "Which lasts longer — aluminium facade or ACP?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Pure aluminium facade systems can last 30-40+ years with minimal maintenance. PVDF-coated ACP panels last 20-25 years before colour degradation. In coastal environments, aluminium extrusions typically outperform ACP in the very long term." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-slate-50 border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-800 mb-5", children: "Explore Related Services" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/aluminium-facade", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Aluminium Facade" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Aluminium facade systems" })
          ] })
        ] }, "/aluminium-facade"),
        /* @__PURE__ */ jsxs(Link, { to: "/acp-aluminium-cladding", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "ACP Cladding" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "ACP cladding systems" })
          ] })
        ] }, "/acp-aluminium-cladding"),
        /* @__PURE__ */ jsxs(Link, { to: "/curtain-wall-cost-guide", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Curtain Wall Cost Guide" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Curtain wall pricing India" })
          ] })
        ] }, "/curtain-wall-cost-guide"),
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
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Get a Quote" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Free site assessment" })
          ] })
        ] }, "/contact")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  AluminiumVsAcp as default
};
