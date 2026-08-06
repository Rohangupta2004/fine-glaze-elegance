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
function IndustrialFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Industrial Building Facade Contractor India",
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
    "description": "Industrial building facade contractor in India. ACP cladding, metal composite panels, aluminium windows for factories, warehouses & industrial facilities. Maharashtra projects."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the most cost-effective facade for an industrial building in India?", "acceptedAnswer": { "@type": "Answer", "text": "For industrial buildings in India, FR-grade ACP with polyester powder coating (not PVDF) is typically the most cost-effective option — balancing fire safety compliance, adequate weather performance, and low installed cost. For office blocks within industrial facilities, PVDF-coated ACP is recommended for better long-term appearance." } },
      { "@type": "Question", "name": "Does Fine Glaze work in MIDC zones in Maharashtra?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze regularly works in Pune's Bhosari, Pimpri, Chakan, and Hadapsar MIDC zones, and Navi Mumbai's Mahape and Turbhe MIDC corridors. We understand MIDC building regulations, local contractor coordination requirements, and the logistics of working in active industrial zones." } },
      { "@type": "Question", "name": "What windows are recommended for factory buildings in India?", "acceptedAnswer": { "@type": "Answer", "text": "For factory and warehouse buildings, aluminium fixed lights with 6mm toughened glass in simple aluminium frames are the most practical and cost-effective solution. Where natural ventilation is required, aluminium louvre windows or top-hung ventilators are recommended. Fine Glaze sizes window openings to meet NBC 2016 minimum daylight factor requirements for industrial buildings." } }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Industrial Building Facade Contractor India", "item": "https://fineglaze.com/industrial-facade" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Industrial Facade Contractor Pune & Mumbai | Factory Cladding Systems - Fine Glaze",
        description: "Industrial facade contractor in Pune & Mumbai. Durable ACP cladding, metal composite panels & industrial curtain walls for factories, warehouses & MIDC industrial parks.",
        canonical: "https://fineglaze.com/industrial-facade",
        keywords: "industrial facade contractor, factory facade, warehouse facade, industrial cladding, industrial curtain wall",
        ogImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
          "Industrial Building ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Facade Contractor India" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 mb-8", children: "Industrial buildings — factories, warehouses, pharmaceutical plants, and logistics facilities — require facade systems that prioritise durability, weather resistance, maintenance efficiency, and structural performance over architectural complexity. Fine Glaze provides cost-effective, high-durability facade solutions for industrial buildings across Maharashtra." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get Free Quote" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "View Projects" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1486325212027-8081e485255e",
          alt: "Industrial building ACP cladding facade contractor India Fine Glaze",
          className: "rounded-xl shadow-2xl object-cover h-[420px] w-full",
          loading: "eager",
          width: "600",
          height: "420"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Industrial Facade Systems — Durability First" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Industrial facilities operate in demanding environments — chemical exposure, heavy vehicle vibration, thermal cycling from process heat, and reduced maintenance access windows. Fine Glaze's industrial facade systems are engineered for these conditions, prioritising service life and weather performance over aesthetic complexity." }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
        "The most suitable facade systems for industrial buildings in India include: ",
        /* @__PURE__ */ jsx("strong", { children: "FR-grade ACP cladding" }),
        " with heavy-gauge aluminium sub-frames for administrative blocks and office areas; ",
        /* @__PURE__ */ jsx("strong", { children: "Metal composite panels (MCM)" }),
        " with aluminium or steel face for extreme durability in production and warehouse areas; ",
        /* @__PURE__ */ jsx("strong", { children: "Aluminium fixed windows" }),
        " with toughened glass for natural light without compromising thermal envelope; and ",
        /* @__PURE__ */ jsx("strong", { children: "Polycarbonate or translucent sheeting" }),
        " for controlled diffused daylighting in production halls without direct glare."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Fine Glaze regularly works in MIDC (Maharashtra Industrial Development Corporation) zones including Pune's Bhosari, Pimpri, and Chakan MIDC, and Navi Mumbai's Mahape and Turbhe MIDC corridors. Our familiarity with MIDC building regulations, local authorities, and the specific facade needs of industrial clients means we can mobilise quickly and deliver cost-effective results." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Pharmaceutical manufacturing facilities in India are subject to GMP (Good Manufacturing Practice) requirements that extend to building exteriors. Fine Glaze provides smooth, chemical-resistant ACP cladding and sealed window systems appropriate for pharma exterior walls in containment and controlled environment zones, in compliance with WHO and PICS GMP guidelines." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "What We Offer" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "FR-Grade ACP for Industrial" })
        ] }, "FR-Grade ACP for Industrial"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Heavy-Gauge Aluminium Sub-Frames" })
        ] }, "Heavy-Gauge Aluminium Sub-Frames"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "MIDC Zone Experience" })
        ] }, "MIDC Zone Experience"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Pharma GMP Compliant Cladding" })
        ] }, "Pharma GMP Compliant Cladding"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Metal Composite Panels" })
        ] }, "Metal Composite Panels"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Cost-Effective Industrial Specs" })
        ] }, "Cost-Effective Industrial Specs")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What is the most cost-effective facade for an industrial building in India?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "For industrial buildings in India, FR-grade ACP with polyester powder coating (not PVDF) is typically the most cost-effective option — balancing fire safety compliance, adequate weather performance, and low installed cost. For office blocks within industrial facilities, PVDF-coated ACP is recommended for better long-term appearance." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "Does Fine Glaze work in MIDC zones in Maharashtra?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Yes. Fine Glaze regularly works in Pune's Bhosari, Pimpri, Chakan, and Hadapsar MIDC zones, and Navi Mumbai's Mahape and Turbhe MIDC corridors. We understand MIDC building regulations, local contractor coordination requirements, and the logistics of working in active industrial zones." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What windows are recommended for factory buildings in India?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "For factory and warehouse buildings, aluminium fixed lights with 6mm toughened glass in simple aluminium frames are the most practical and cost-effective solution. Where natural ventilation is required, aluminium louvre windows or top-hung ventilators are recommended. Fine Glaze sizes window openings to meet NBC 2016 minimum daylight factor requirements for industrial buildings." })
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
        /* @__PURE__ */ jsxs(Link, { to: "/aluminium-facade", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Aluminium Facade" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Aluminium facade" })
          ] })
        ] }, "/aluminium-facade"),
        /* @__PURE__ */ jsxs(Link, { to: "/facade-contractor-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Contractor Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Facade contractor Pune" })
          ] })
        ] }, "/facade-contractor-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/facade-contractor-navi-mumbai", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Contractor Navi Mumbai" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Navi Mumbai facade" })
          ] })
        ] }, "/facade-contractor-navi-mumbai"),
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
  IndustrialFacade as default
};
