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
function GlassRailingPune() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Glass Railing Contractor in Pune",
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
    "description": "Frameless toughened glass railing contractor in Pune. Balcony, staircase & terrace railings for residential & commercial buildings. IS:2553 compliant. Free site visit."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the cost of glass railing in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Glass railing in Pune costs Rs 800-2500 per running foot depending on system type (frameless vs post system), glass thickness, hardware finish, and site conditions. Frameless systems start from Rs 1200/running ft installed." } },
      { "@type": "Question", "name": "Is toughened glass railing safe for balconies in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, when properly specified. Fine Glaze uses toughened + laminated glass compliant with IS:2553 Part 1. Even if broken, the PVB interlayer holds glass in place, preventing shard fall risk — critical for elevated balconies." } },
      { "@type": "Question", "name": "Do glass railings need maintenance in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Glass railings are low-maintenance. Regular cleaning with mild detergent is sufficient. Stainless steel hardware should be checked annually. Sealant joints at the base channel should be re-done every 7-10 years as preventive maintenance." } }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Glass Railing Contractor in Pune", "item": "https://fineglaze.com/glass-railing-pune" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Glass Railing Contractor Pune | Frameless Balcony Railings Baner & Kharadi - Fine Glaze",
        description: "Top glass railing contractor in Pune. Frameless balcony, staircase & terrace glass railings for residential & commercial properties in Baner, Kharadi, Wakad & Viman Nagar.",
        canonical: "https://fineglaze.com/glass-railing-pune",
        keywords: "glass railing contractor Pune, balcony glass railing Pune, staircase glass railing Pune, frameless railing Pune",
        ogImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
          "Glass Railing ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Contractor in Pune" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 mb-8", children: "Fine Glaze installs premium frameless and semi-frameless glass railing systems across Pune for residential apartments, commercial offices, hotels, shopping centres, and public spaces. Our glass railings combine toughened safety glass with precision-engineered stainless steel fittings." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get Free Quote" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "View Projects" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
          alt: "Frameless glass railing balcony Pune apartment - Fine Glaze",
          className: "rounded-xl shadow-2xl object-cover h-[420px] w-full",
          loading: "eager",
          width: "600",
          height: "420"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Premium Glass Railings for Pune's Best Buildings" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Glass railings are the defining feature of premium apartments, penthouses, and commercial lobbies across Pune's upscale developments. Fine Glaze offers multiple system types: fully frameless glass railings with concealed base channels, handrail-top-fix systems for balconies, stainless steel post systems with glass infill, and structural glass balustrades." }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
        "Safety is paramount. All our glass railing installations use ",
        /* @__PURE__ */ jsx("strong", { children: "toughened + laminated glass (10mm toughened + 10mm toughened with PVB interlayer)" }),
        " or 12mm heat-soaked toughened glass, compliant with IS:2553 and NBC 2016 fall protection requirements. Every installation is load-tested to 0.74 kN/m horizontal thrust."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
        "We serve ",
        /* @__PURE__ */ jsx("strong", { children: "residential projects" }),
        " in Wakad, Baner, Kharadi, Viman Nagar, Koregaon Park, and Undri, as well as ",
        /* @__PURE__ */ jsx("strong", { children: "commercial projects" }),
        " in Hinjewadi IT Park, Magarpatta Cybercity, and Pune's hospitality sector. Our stainless steel fittings are available in mirror polish, satin finish, and PVD gold/black coating."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Fine Glaze handles complete glass railing project execution — from site measurement and structural check, glass procurement (toughened/laminated to exact sizes), hardware supply and fabrication, installation, and silicone joint finishing. Our Pune team can typically complete a standard apartment balcony railing installation in 1-2 days per floor." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "For Pune developers and builders, we offer competitive rates for bulk glass railing contracts across multiple floors or multiple buildings in a project. Our team has completed glass railing installations on Pune projects of up to 30 floors with consistent quality and finish standards across all levels." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "What We Offer" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Frameless Glass Railings" })
        ] }, "Frameless Glass Railings"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Toughened + Laminated Glass" })
        ] }, "Toughened + Laminated Glass"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "SS 316 Marine Grade Fittings" })
        ] }, "SS 316 Marine Grade Fittings"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Balcony & Staircase Systems" })
        ] }, "Balcony & Staircase Systems"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "IS:2553 Compliant" })
        ] }, "IS:2553 Compliant"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "PVD Coated Hardware Options" })
        ] }, "PVD Coated Hardware Options")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What is the cost of glass railing in Pune?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Glass railing in Pune costs Rs 800-2500 per running foot depending on system type (frameless vs post system), glass thickness, hardware finish, and site conditions. Frameless systems start from Rs 1200/running ft installed." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "Is toughened glass railing safe for balconies in Pune?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Yes, when properly specified. Fine Glaze uses toughened + laminated glass compliant with IS:2553 Part 1. Even if broken, the PVB interlayer holds glass in place, preventing shard fall risk — critical for elevated balconies." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "Do glass railings need maintenance in Pune?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Glass railings are low-maintenance. Regular cleaning with mild detergent is sufficient. Stainless steel hardware should be checked annually. Sealant joints at the base channel should be re-done every 7-10 years as preventive maintenance." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-slate-50 border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-800 mb-5", children: "Explore Related Services" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/glass-railings", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Glass Railings" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Full glass railing service" })
          ] })
        ] }, "/glass-railings"),
        /* @__PURE__ */ jsxs(Link, { to: "/structural-glazing-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Structural Glazing Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Structural glazing systems" })
          ] })
        ] }, "/structural-glazing-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/facade-contractor-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Contractor Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Complete facade solutions" })
          ] })
        ] }, "/facade-contractor-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/acp-cladding-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "ACP Cladding Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "ACP panel facades" })
          ] })
        ] }, "/acp-cladding-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/curtain-wall-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Curtain Wall Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Glass curtain walls" })
          ] })
        ] }, "/curtain-wall-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/maintenance-services", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Maintenance" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Glass railing maintenance" })
          ] })
        ] }, "/maintenance-services")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  GlassRailingPune as default
};
