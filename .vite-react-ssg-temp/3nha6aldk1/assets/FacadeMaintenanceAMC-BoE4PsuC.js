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
function FacadeMaintenanceAMC() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade AMC & Annual Maintenance Contract India",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fine Glaze",
      "@id": "https://fineglaze.com",
      "url": "https://fineglaze.com",
      "telephone": "+91-8369233566",
      "address": { "@type": "PostalAddress", "addressLocality": "Pune", "addressRegion": "Maharashtra", "addressCountry": "IN" }
    },
    "areaServed": [{ "@type": "City", "name": "Pune" }, { "@type": "City", "name": "Mumbai" }, { "@type": "State", "name": "Maharashtra" }],
    "description": "Facade AMC (Annual Maintenance Contract) for curtain walls, structural glazing, ACP cladding and glass railings in Pune and Mumbai. Comprehensive inspection, sealant, glass & hardware services."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is included in a facade AMC?", "acceptedAnswer": { "@type": "Answer", "text": "A Fine Glaze facade AMC typically includes: annual inspection of all glass, sealant joints, hardware, and drainage channels; pre-monsoon sealant repair and touch-up; glass cleaning (exterior); hardware lubrication and adjustment; minor repair of damaged or loose gaskets; and priority emergency callout response (24-48 hours) for monsoon-season leaks." } },
      { "@type": "Question", "name": "How much does a facade AMC cost in India?", "acceptedAnswer": { "@type": "Answer", "text": "Facade AMC costs depend on building size, facade type, and access equipment requirements. Typical rates are Rs 15-40 per sq ft per year for curtain wall and structural glazing facades, and Rs 8-20 per sq ft per year for ACP and aluminium window facades. A detailed scope and pricing is provided after a free site assessment." } },
      { "@type": "Question", "name": "How often should a building facade be professionally inspected?", "acceptedAnswer": { "@type": "Answer", "text": "Minimum annual inspection is recommended for all commercial building facades. For coastal buildings (Mumbai, Navi Mumbai) or buildings with structural glazing, bi-annual inspection (pre-monsoon and post-monsoon) is strongly recommended. Fine Glaze's AMC programme includes a written inspection report with photographic evidence after every visit." } }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Facade AMC Guide", "item": "https://fineglaze.com/facade-amc-guide" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Facade AMC Guide India | What to Expect from Facade Maintenance – Fine Glaze",
        description: "Complete guide to facade AMC (Annual Maintenance Contracts) in India. What's included, costs, inspection frequency, and why it matters for your building. By Fine Glaze.",
        canonical: "https://fineglaze.com/facade-amc-guide",
        keywords: "facade AMC India, facade annual maintenance contract, curtain wall AMC Pune, facade maintenance contract Mumbai, building facade inspection India, glass facade AMC",
        ogImage: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
          "Facade AMC ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Guide India" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 mb-8", children: "A facade Annual Maintenance Contract (AMC) is the most cost-effective way to protect your building's glass, sealant, and cladding systems — preventing expensive reactive repairs and maintaining property value. Fine Glaze provides comprehensive facade AMC programmes for buildings of all types across Pune and Mumbai." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get AMC Quote" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/maintenance-services", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "Our Services" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e", alt: "Facade AMC annual maintenance contract India building inspection Fine Glaze", className: "rounded-xl shadow-2xl object-cover h-[420px] w-full", loading: "eager", width: "600", height: "420" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Why Every Building Needs a Facade AMC" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Building facades are complex engineered systems that deteriorate gradually over time. Without regular professional inspection and maintenance, minor issues — a hairline sealant crack, a loose gasket, a blocked drainage channel — escalate into major water ingress events that damage interiors, disrupt tenants, and require expensive emergency repairs. A facade AMC prevents this cycle." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "India's climate makes facade maintenance particularly critical. Mumbai's 2,400mm annual rainfall and saline coastal air accelerate sealant deterioration. Pune's thermal cycling (from 8°C winter nights to 42°C summer afternoons) stresses facade joints with constant expansion and contraction. Pre-monsoon inspection and repair is the single most important facade maintenance activity for any Indian building." }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mt-10", children: "Fine Glaze Facade AMC Scope" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "A standard Fine Glaze facade AMC includes two annual visits (pre-monsoon April-May and post-monsoon November) covering:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-muted-foreground space-y-2 mt-4", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Full facade visual inspection" }),
          " — all glass panels, sealant joints, capping, gaskets, drainage weep holes, anchor fixings, and hardware"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Written inspection report" }),
          " with photographic evidence, condition ratings, and recommended repairs prioritised by urgency"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Sealant repair" }),
          " — re-sealing of any deteriorating, cracked, or debonded sealant joints identified during inspection (up to a defined area per visit)"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Hardware inspection and lubrication" }),
          " — all operable windows, louvres, and doors checked for operation, adjusted, and lubricated"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Gasket and weatherseal check" }),
          " — replacement of any failed EPDM or TPE gaskets"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Drainage channel clearance" }),
          " — pressure-flush of all weep holes and drainage slots to maintain free drainage"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Priority emergency response" }),
          " — 24-48 hour response for active leaks during monsoon season outside scheduled visits"
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mt-10", children: "Facade AMC Cost Benchmarks India" }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto mt-4", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse text-sm", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-muted", children: [
          /* @__PURE__ */ jsx("th", { className: "border border-border p-3 text-left font-semibold", children: "Facade Type" }),
          /* @__PURE__ */ jsx("th", { className: "border border-border p-3 text-left font-semibold", children: "AMC Rate (per sq ft / year)" }),
          /* @__PURE__ */ jsx("th", { className: "border border-border p-3 text-left font-semibold", children: "Typical Annual Cost (1000 sq m)" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Curtain Wall Glazing" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Rs 20–40" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Rs 2.1–4.3 lakh" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "bg-muted/30", children: [
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Structural Glazing (SSG)" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Rs 25–45" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Rs 2.7–4.8 lakh" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "ACP Cladding" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Rs 8–18" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Rs 0.9–1.9 lakh" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "bg-muted/30", children: [
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Aluminium Windows" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Rs 10–20" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Rs 1.1–2.1 lakh" })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "What Our AMC Covers" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: ["Bi-Annual Professional Inspection", "Pre-Monsoon Sealant Repair", "Hardware Lubrication & Adjustment", "Drainage Channel Clearance", "Gasket & Weatherseal Replacement", "Priority Monsoon Emergency Response"].map((f) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: f })
      ] }, f)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What is included in a facade AMC?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "A Fine Glaze facade AMC includes: annual inspection of all glass, sealant joints, hardware, and drainage; pre-monsoon sealant repair; glass cleaning; hardware lubrication and adjustment; minor gasket repairs; and priority emergency callout response (24-48 hours) for monsoon-season leaks." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "How much does a facade AMC cost in India?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Facade AMC rates are Rs 15-40 per sq ft per year for curtain wall and structural glazing, and Rs 8-20 per sq ft per year for ACP and aluminium window facades. Detailed pricing is provided after a free site assessment." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "How often should a building facade be professionally inspected?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Minimum annual inspection is recommended. For coastal buildings (Mumbai, Navi Mumbai) or structural glazing facades, bi-annual inspection (pre-monsoon and post-monsoon) is strongly recommended. Fine Glaze's AMC includes a written report with photographic evidence after every visit." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-slate-50 border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-800 mb-5", children: "Related Services" }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4", children: [
        { title: "Facade Maintenance", href: "/maintenance-services", desc: "Full maintenance service" },
        { title: "Facade Waterproofing", href: "/facade-waterproofing", desc: "Leak diagnosis & repair" },
        { title: "Curtain Wall Systems", href: "/curtain-wall-systems", desc: "Curtain wall service" },
        { title: "Structural Glazing", href: "/structural-glazing", desc: "Structural glazing" },
        { title: "Facade Contractor Pune", href: "/facade-contractor-pune", desc: "Facade services Pune" },
        { title: "Facade Contractor Mumbai", href: "/facade-contractor-mumbai", desc: "Facade services Mumbai" }
      ].map((r) => /* @__PURE__ */ jsxs(Link, { to: r.href, className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
        /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: r.title }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: r.desc })
        ] })
      ] }, r.href)) })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  FacadeMaintenanceAMC as default
};
