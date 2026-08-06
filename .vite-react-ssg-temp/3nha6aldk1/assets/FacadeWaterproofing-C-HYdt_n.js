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
function FacadeWaterproofing() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade Waterproofing & Leak Repair in Pune & Mumbai",
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
    "description": "Facade waterproofing and glass facade leak repair in Pune & Mumbai. Sealant replacement, curtain wall leakage diagnosis & remediation. Free inspection."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much does facade leak repair cost in India?", "acceptedAnswer": { "@type": "Answer", "text": "Facade sealant remediation costs Rs 150-400 per running metre for standard joint re-sealing, depending on joint depth, access difficulty, and sealant specification. A comprehensive waterproofing programme for a 10-storey building typically costs Rs 5-20 lakh." } },
      { "@type": "Question", "name": "How often should facade sealant be replaced in India?", "acceptedAnswer": { "@type": "Answer", "text": "Silicone facade sealants typically last 15-20 years under normal conditions. In coastal Mumbai, 10-12 years is more realistic. For Pune buildings, a full sealant inspection every 7-10 years with replacement as needed is recommended." } },
      { "@type": "Question", "name": "Can Fine Glaze repair leaking curtain wall in an occupied building?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze regularly performs curtain wall sealant repair in occupied buildings. Our team uses low-odour, fast-curing sealants, works in section-by-section sequence to minimise disruption, and can schedule critical work in evenings or weekends to avoid business disruption." } }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Facade Waterproofing & Leak Repair in Pune & Mumbai", "item": "https://fineglaze.com/facade-waterproofing" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Facade Waterproofing Contractor Pune & Mumbai | Leak Repair Solutions - Fine Glaze",
        description: "Top facade waterproofing contractor in Pune & Mumbai. Glass facade leak repair, curtain wall leakage remediation, sealant replacement & building waterproofing.",
        canonical: "https://fineglaze.com/facade-waterproofing",
        keywords: "facade waterproofing contractor, glass facade leak repair, curtain wall leakage repair, facade sealant replacement, building facade waterproofing",
        ogImage: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
          "Facade Waterproofing ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "& Leak Repair" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 mb-8", children: "Facade leakage is the most common complaint reported by building owners and facility managers in India. Fine Glaze specialises in facade waterproofing, leak diagnosis, and sealant remediation for curtain walls, structural glazing, ACP cladding, and aluminium window systems." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get Free Quote" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "View Projects" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e",
          alt: "Facade waterproofing sealant repair curtain wall India Fine Glaze",
          className: "rounded-xl shadow-2xl object-cover h-[420px] w-full",
          loading: "eager",
          width: "600",
          height: "420"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Why Facade Leakage Happens — and How to Fix It" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Water ingress through building facades causes significant damage to interiors, false ceilings, MEP installations, and even structural steel. In India's high-rainfall climate — particularly in Mumbai (2,400mm/year) and Pune (700mm/year) — facade waterproofing is essential." }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mt-8 mb-3", children: "Common Causes of Facade Leakage in India" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-muted-foreground space-y-2", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Failed silicone sealant joints:" }),
          " Silicone degrades after 10-15 years due to UV exposure, thermal cycling, and building movement. Cracked or debonded sealant is the number-one cause of facade leakage."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Improper original installation:" }),
          " Inadequate joint depth, wrong sealant type, or contaminated surfaces at installation lead to premature sealant failure."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Thermal movement fatigue:" }),
          " Building facades expand and contract with temperature. Joints that are too narrow or stiff crack over time."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Missing or failed drainage channels:" }),
          " Curtain wall systems rely on internal pressure-equalisation drainage. Blocked drainage directs water inward."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Glass seal failure:" }),
          " DGU units lose their edge seal allowing inter-pane condensation."
        ] })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mt-8 mb-3", children: "Fine Glaze Waterproofing Repair Process" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Fine Glaze uses a systematic approach: (1) Hose test diagnosis per AAMA 501.2 to locate all active leak points; (2) Core sampling of sealant joints to assess adhesion; (3) Detailed remediation specification; (4) Sealant removal and surface preparation; (5) New sealant application using Dow Corning, Sika, or Master Builders products; (6) Post-remediation water test to verify 100% water-tightness before sign-off." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Fine Glaze offers AMC-based facade waterproofing programmes that include annual inspection of all sealant joints, pre-monsoon repair of any deteriorating sealant, and priority callout response for active leaks during the monsoon season. Proactive AMC programmes significantly reduce the risk of interior water damage and extend facade sealant life." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "What We Offer" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Hose Test Leak Diagnosis" })
        ] }, "Hose Test Leak Diagnosis"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Sealant Core Sampling" })
        ] }, "Sealant Core Sampling"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Joint-by-Joint Remediation" })
        ] }, "Joint-by-Joint Remediation"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Dow Corning & Sika Sealants" })
        ] }, "Dow Corning & Sika Sealants"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Post-Repair Water Testing" })
        ] }, "Post-Repair Water Testing"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Annual AMC Programmes" })
        ] }, "Annual AMC Programmes")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "How much does facade leak repair cost in India?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Facade sealant remediation costs Rs 150-400 per running metre for standard joint re-sealing, depending on joint depth, access difficulty, and sealant specification. A comprehensive waterproofing programme for a 10-storey building typically costs Rs 5-20 lakh." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "How often should facade sealant be replaced in India?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Silicone facade sealants typically last 15-20 years under normal conditions. In coastal Mumbai, 10-12 years is more realistic. For Pune buildings, a full sealant inspection every 7-10 years with replacement as needed is recommended." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "Can Fine Glaze repair leaking curtain wall in an occupied building?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Yes. Fine Glaze regularly performs curtain wall sealant repair in occupied buildings. Our team uses low-odour, fast-curing sealants, works in section-by-section sequence to minimise disruption, and can schedule critical work in evenings or weekends to avoid business disruption." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-slate-50 border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-800 mb-5", children: "Explore Related Services" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/maintenance-services", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Maintenance" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Full AMC service" })
          ] })
        ] }, "/maintenance-services"),
        /* @__PURE__ */ jsxs(Link, { to: "/curtain-wall-systems", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Curtain Wall Systems" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Curtain wall systems" })
          ] })
        ] }, "/curtain-wall-systems"),
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
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Facade contractor Pune" })
          ] })
        ] }, "/facade-contractor-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/facade-contractor-mumbai", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Contractor Mumbai" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Facade contractor Mumbai" })
          ] })
        ] }, "/facade-contractor-mumbai"),
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Get a Quote" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Free leak inspection" })
          ] })
        ] }, "/contact")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  FacadeWaterproofing as default
};
