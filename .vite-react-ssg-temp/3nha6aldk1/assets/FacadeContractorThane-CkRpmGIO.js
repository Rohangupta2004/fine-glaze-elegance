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
function FacadeContractorThane() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade Contractor in Thane",
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
    "areaServed": [{ "@type": "City", "name": "Thane" }, { "@type": "State", "name": "Maharashtra" }],
    "description": "Facade contractor in Thane. Curtain walls, ACP cladding, structural glazing & glass railings for Thane's residential and commercial buildings. Free site visit."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Does Fine Glaze serve Thane for facade work?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze serves all of Thane city including Majiwada, Wagle Estate, Ghodbunder Road, Kolshet, Manpada, and Thane West. We provide curtain walls, ACP cladding, structural glazing, glass railings, aluminium windows, and facade AMC services." } },
      { "@type": "Question", "name": "What facade systems are popular in Thane?", "acceptedAnswer": { "@type": "Answer", "text": "Thane's fast-growing residential market drives demand for glass balcony railings and ACP cladding for apartment elevations. Commercial buildings along Ghodbunder Road increasingly specify curtain wall systems and structural glazing for modern office park aesthetics." } },
      { "@type": "Question", "name": "What is the cost of ACP cladding in Thane?", "acceptedAnswer": { "@type": "Answer", "text": "ACP cladding in Thane costs Rs 190-450 per sq ft installed, comparable to Navi Mumbai rates. Costs depend on panel brand, FR-grade specification, finish quality, and sub-frame complexity. Contact Fine Glaze for a free site assessment and BOQ." } }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Facade Contractor in Thane", "item": "https://fineglaze.com/facade-contractor-thane" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Facade Contractor in Thane | Glass, ACP & Curtain Wall – Fine Glaze",
        description: "Facade contractor in Thane. Curtain walls, ACP cladding, structural glazing & glass railings for Thane's growing commercial and residential market. Free site visit.",
        canonical: "https://fineglaze.com/facade-contractor-thane",
        keywords: "facade contractor Thane, ACP cladding Thane, glass facade Thane, curtain wall Thane, glass railing Thane, building facade Ghodbunder Road",
        ogImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
          "Facade Contractor ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "in Thane" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 mb-8", children: "Fine Glaze serves Thane's booming residential and commercial real estate market with complete facade solutions — ACP cladding, curtain walls, glass railings, structural glazing, and facade AMC — all engineered for Maharashtra's coastal-proximate environment." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get Free Quote" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "View Projects" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e", alt: "Facade contractor Thane commercial building Fine Glaze", className: "rounded-xl shadow-2xl object-cover h-[420px] w-full", loading: "eager", width: "600", height: "420" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Serving Thane's Fast-Growing Real Estate Market" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Thane has emerged as one of Mumbai Metropolitan Region's most dynamic real estate markets — with large-scale residential townships, growing commercial corridors along Ghodbunder Road, and expanding industrial zones in Wagle Estate and Thane MIDC. Fine Glaze brings its full range of facade capabilities to Thane, serving both the premium residential segment and the growing commercial office market." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "For Thane's residential apartment towers — particularly the large-scale developments along Ghodbunder Road, Manpada, and Kolshet — Fine Glaze offers competitive glass railing packages, ACP cladding for building elevations, and aluminium window replacement programmes. Our bulk developer pricing is structured for projects of 100+ apartments, delivering consistent quality across all floors and blocks." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "For Thane's commercial sector — corporate offices, malls, and mixed-use developments — Fine Glaze provides curtain wall systems, structural glazing, and ACP cladding that meet the standards expected by Grade-A commercial tenants. We are experienced in working within Thane Municipal Corporation (TMC) regulatory requirements and obtaining necessary approvals for facade work." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Thane's proximity to Mumbai means our coastal-engineering standards — marine-grade hardware, PVDF coatings, and cyclone zone wind load design — are applied as standard to all Thane projects. Fine Glaze's Thane projects benefit from our established supply chain connecting Pune and Mumbai, ensuring competitive material pricing and reliable delivery schedules." }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
        "Fine Glaze also provides ",
        /* @__PURE__ */ jsx("strong", { children: "facade AMC (Annual Maintenance Contract)" }),
        " services for Thane's existing building stock — an increasingly important service as the buildings constructed during Thane's construction boom of 2005-2015 reach the end of their original sealant warranty period and require professional maintenance programmes."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "What We Offer in Thane" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: ["ACP Cladding for Residential & Commercial", "Curtain Wall Systems", "Frameless Glass Railings", "Structural Glazing", "Aluminium Windows & Doors", "Facade AMC & Waterproofing"].map((f) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: f })
      ] }, f)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "Does Fine Glaze serve Thane for facade work?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Yes. Fine Glaze serves all of Thane city including Majiwada, Wagle Estate, Ghodbunder Road, Kolshet, Manpada, and Thane West. We provide curtain walls, ACP cladding, structural glazing, glass railings, aluminium windows, and facade AMC services." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What facade systems are popular in Thane?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Thane's fast-growing residential market drives demand for glass balcony railings and ACP cladding for apartment elevations. Commercial buildings along Ghodbunder Road increasingly specify curtain wall systems and structural glazing for modern office park aesthetics." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What is the cost of ACP cladding in Thane?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "ACP cladding in Thane costs Rs 190-450 per sq ft installed. Costs depend on panel brand, FR-grade specification, finish quality, and sub-frame complexity. Contact Fine Glaze for a free site assessment and BOQ." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-slate-50 border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-800 mb-5", children: "Explore Related Services" }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4", children: [
        { title: "Facade Contractor Mumbai", href: "/facade-contractor-mumbai", desc: "Mumbai facade services" },
        { title: "Facade Contractor Navi Mumbai", href: "/facade-contractor-navi-mumbai", desc: "Navi Mumbai facade" },
        { title: "ACP Cladding", href: "/acp-aluminium-cladding", desc: "ACP composite panels" },
        { title: "Glass Railings", href: "/glass-railings", desc: "Frameless glass railings" },
        { title: "Curtain Wall Systems", href: "/curtain-wall-systems", desc: "Curtain wall glazing" },
        { title: "Facade Maintenance", href: "/maintenance-services", desc: "AMC & repair services" }
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
  FacadeContractorThane as default
};
