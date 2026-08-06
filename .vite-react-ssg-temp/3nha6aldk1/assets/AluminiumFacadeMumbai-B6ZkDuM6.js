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
function AluminiumFacadeMumbai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Facade Contractor in Mumbai",
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
    "description": "Aluminium facade contractor in Mumbai. Thermal break doors, windows, louvers & ACP cladding for BKC, Andheri, Powai & Vikhroli. Marine-grade quality. Free site visit."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What aluminium coating is best for Mumbai coastal environment?", "acceptedAnswer": { "@type": "Answer", "text": "PVDF coating at 25+ microns is the standard for coastal Mumbai. For buildings within 1 km of the seafront, Fine Glaze additionally recommends marine-grade anodising (AA25 class) as a base treatment before PVDF coating." } },
      { "@type": "Question", "name": "What is thermal break aluminium and why is it important in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Thermal break aluminium uses a polyamide barrier between inner and outer sections, reducing heat transfer by up to 75%. In Mumbai, thermally broken windows reduce AC load by 20-30%, yielding significant long-term energy savings." } },
      { "@type": "Question", "name": "Does Fine Glaze supply and install aluminium windows in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze provides full supply and installation for aluminium windows, doors, and louvres in Mumbai. We handle glass supply, hardware, and weather sealing as part of a complete package." } }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Aluminium Facade Contractor in Mumbai", "item": "https://fineglaze.com/aluminium-facade-mumbai" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Aluminium Facade Contractor in Mumbai | Doors, Windows & Cladding – Fine Glaze",
        description: "Aluminium facade contractor in Mumbai. Thermal break doors, windows, louvers & ACP cladding for BKC, Andheri, Powai & Vikhroli. Marine-grade quality. Free site visit.",
        canonical: "https://fineglaze.com/aluminium-facade-mumbai",
        keywords: "aluminium facade contractor Mumbai, aluminium windows Mumbai, thermal break windows Mumbai, aluminium cladding BKC, aluminium doors Mumbai, facade contractor Andheri, aluminium facade Worli",
        ogImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
          "Aluminium Facade ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Contractor in Mumbai" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 mb-8", children: "Fine Glaze provides marine-grade aluminium facade systems in Mumbai, including thermally broken aluminium windows and doors, sun louvres, spandrel cladding, and aluminium composite panel systems. Every Mumbai aluminium facade installation is engineered for high humidity, saline air, and extreme monsoon rainfall." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get Free Quote" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "View Projects" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
          alt: "Aluminium facade contractor Mumbai commercial building - Fine Glaze",
          className: "rounded-xl shadow-2xl object-cover h-[420px] w-full",
          loading: "eager",
          width: "600",
          height: "420"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Marine-Grade Aluminium Facades for Mumbai" }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
        "Aluminium is the material of choice for Mumbai's coastal facade environment — lightweight, naturally corrosion-resistant, and highly recyclable. However, standard aluminium systems are not sufficient for Mumbai's saline coastal air. Fine Glaze uses ",
        /* @__PURE__ */ jsx("strong", { children: "anodized or PVDF-coated aluminium extrusions" }),
        " with minimum 25-micron coating thickness for all Mumbai coastal projects, providing 25+ year service life even 100 metres from the seafront."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
        "Our Mumbai aluminium facade services include: ",
        /* @__PURE__ */ jsx("strong", { children: "thermally broken casement and sliding windows" }),
        " for energy-efficient residential and commercial buildings; ",
        /* @__PURE__ */ jsx("strong", { children: "aluminium louvre systems" }),
        " for natural ventilation and solar shading; ",
        /* @__PURE__ */ jsx("strong", { children: "aluminium spandrel panels" }),
        " for seamless curtain wall integration; and ",
        /* @__PURE__ */ jsx("strong", { children: "aluminium soffit and fascia systems" }),
        " for retail and hospitality interiors."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Notable Mumbai aluminium facade projects by Fine Glaze include the Leela Hotel facade programme, Embassy 247 curtain wall with aluminium spandrel panels, and multiple premium residential towers in Worli and Lower Parel. We work with systems from YKK AP, Schuco, Aluprof, and Technal for international brand specifications." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "For Mumbai residential developers, Fine Glaze offers competitive aluminium window and door packages with full supply and installation. Our standard Mumbai residential specification uses aluminium sliding windows with EPDM pile seals and stainless steel hardware, sized to resist Mumbai's monsoon-driven wind-driven rain at 50 mm/hour rainfall intensity." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Fine Glaze's aluminium facade team is experienced in working within Mumbai's challenging logistics environment — managing material movements in narrow streets, crane restrictions, and tight site access in the central business districts of Andheri, BKC, Lower Parel, and Nariman Point." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "What We Offer" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "PVDF-Coated Extrusions 25+ micron" })
        ] }, "PVDF-Coated Extrusions 25+ micron"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Thermal Break Technology" })
        ] }, "Thermal Break Technology"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Marine Grade Anodising" })
        ] }, "Marine Grade Anodising"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Schuco & YKK AP Systems" })
        ] }, "Schuco & YKK AP Systems"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Monsoon-Tested Weatherseals" })
        ] }, "Monsoon-Tested Weatherseals"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Leela Hotel Reference" })
        ] }, "Leela Hotel Reference")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What aluminium coating is best for Mumbai coastal environment?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "PVDF coating at 25+ microns is the standard for coastal Mumbai. For buildings within 1 km of the seafront, Fine Glaze additionally recommends marine-grade anodising (AA25 class) as a base treatment before PVDF coating." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What is thermal break aluminium and why is it important in Mumbai?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Thermal break aluminium uses a polyamide barrier between inner and outer sections, reducing heat transfer by up to 75%. In Mumbai, thermally broken windows reduce AC load by 20-30%, yielding significant long-term energy savings." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "Does Fine Glaze supply and install aluminium windows in Mumbai?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Yes. Fine Glaze provides full supply and installation for aluminium windows, doors, and louvres in Mumbai. We handle glass supply, hardware, and weather sealing as part of a complete package." })
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
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Full aluminium facade service" })
          ] })
        ] }, "/aluminium-facade"),
        /* @__PURE__ */ jsxs(Link, { to: "/facade-contractor-mumbai", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Contractor Mumbai" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Complete facade services" })
          ] })
        ] }, "/facade-contractor-mumbai"),
        /* @__PURE__ */ jsxs(Link, { to: "/curtain-wall-mumbai", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Curtain Wall Mumbai" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Curtain wall glazing Mumbai" })
          ] })
        ] }, "/curtain-wall-mumbai"),
        /* @__PURE__ */ jsxs(Link, { to: "/acp-aluminium-cladding", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "ACP Cladding" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "ACP composite panels" })
          ] })
        ] }, "/acp-aluminium-cladding"),
        /* @__PURE__ */ jsxs(Link, { to: "/structural-glazing-mumbai", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Structural Glazing Mumbai" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Structural glazing" })
          ] })
        ] }, "/structural-glazing-mumbai"),
        /* @__PURE__ */ jsxs(Link, { to: "/maintenance-services", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Maintenance" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "AMC & maintenance" })
          ] })
        ] }, "/maintenance-services")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  AluminiumFacadeMumbai as default
};
