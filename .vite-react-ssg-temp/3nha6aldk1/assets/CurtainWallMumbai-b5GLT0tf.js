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
function CurtainWallMumbai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Curtain Wall Glazing Contractor in Mumbai",
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
    "description": "Curtain wall contractor in Mumbai. Unitized & stick system glazing for BKC, Andheri, Powai & Lower Parel. Cyclone Zone IV/V engineered. Free site visit."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What wind load standards apply to curtain walls in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Mumbai falls in IS:875 Part 3 Wind Zone IV (basic wind speed 44 m/s). All Fine Glaze curtain wall systems for Mumbai are designed for this wind zone with gust factors for building height. Above 30 storeys, CFD analysis is used for accurate wind pressure coefficients." } },
      { "@type": "Question", "name": "How does Fine Glaze handle curtain wall logistics in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze uses just-in-time delivery, crane coordination with building management, night shifts for road deliveries, and pre-positioned mobile cranes for efficient installation without disrupting building occupants or street traffic." } },
      { "@type": "Question", "name": "Does Fine Glaze provide curtain wall refurbishment in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer full curtain wall refurbishment including sealant replacement, glass panel replacement, gasket renewal, and frame recladding for older Mumbai commercial buildings needing facade upgrades." } }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Curtain Wall Glazing Contractor in Mumbai", "item": "https://fineglaze.com/curtain-wall-mumbai" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Curtain Wall Contractor Mumbai | Glass Curtain Walls BKC & Powai - Fine Glaze",
        description: "Premier curtain wall contractor in Mumbai. Unitized & stick system glass curtain walls for high-rises in BKC, Andheri, Powai, Goregaon & Worli.",
        canonical: "https://fineglaze.com/curtain-wall-mumbai",
        keywords: "curtain wall contractor Mumbai, curtain wall systems Mumbai, glass curtain wall Mumbai, commercial facade Mumbai",
        ogImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
          "Curtain Wall Glazing ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Contractor in Mumbai" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 mb-8", children: "Fine Glaze delivers engineering-grade curtain wall glazing systems in Mumbai — from complex unitized towers in BKC to stick system installations in Andheri's commercial belt. All Mumbai curtain walls are specifically engineered for coastal wind loads, cyclone zone requirements, and high-salinity environment." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get Free Quote" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "View Projects" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
          alt: "Curtain wall glazing Mumbai high-rise BKC - Fine Glaze contractor",
          className: "rounded-xl shadow-2xl object-cover h-[420px] w-full",
          loading: "eager",
          width: "600",
          height: "420"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Mumbai High-Rise Curtain Wall Specialists" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Mumbai is one of India's most demanding environments for facade systems — combining high-rise density, coastal wind loads (Zone IV/V), monsoon rainfall intensity, and saline air. Fine Glaze's Mumbai curtain wall systems are engineered from the ground up for these conditions, using marine-grade components, heavy-duty EPDM gaskets, and coastal-certified structural sealants." }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
        "Our Mumbai curtain wall portfolio includes prestigious projects in ",
        /* @__PURE__ */ jsx("strong", { children: "BKC" }),
        " (corporate towers), ",
        /* @__PURE__ */ jsx("strong", { children: "Lower Parel" }),
        " (premium residential and commercial high-rises), ",
        /* @__PURE__ */ jsx("strong", { children: "Andheri SEEPZ & MIDC" }),
        " (industrial and tech campus facades), and ",
        /* @__PURE__ */ jsx("strong", { children: "Powai" }),
        " (lakeside corporate parks). Each project undergoes independent third-party water penetration and air infiltration testing per ASTM E331 / IS:11197 standards."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
        "For Mumbai high-rises above 30 storeys, Fine Glaze recommends ",
        /* @__PURE__ */ jsx("strong", { children: "unitized curtain wall systems" }),
        " with inter-lock pressure equalisation — the industry gold standard for tall buildings in cyclone-prone coastal zones. This system design prevents water ingress even at wind speeds up to 220 km/h, far exceeding Mumbai's design wind speed of 44 m/s."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Glass selection is critical in Mumbai's coastal environment. Fine Glaze specifies Low-E DGU glass with argon fill for all BKC and CBD towers, delivering LEED EAc1 energy performance credits while maintaining high visible light transmittance. For residential towers near the seafront, we recommend tinted glass with 30-40% solar heat gain coefficient (SHGC) to reduce cooling loads." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Fine Glaze provides complete Mumbai curtain wall services: structural design coordination, shop drawings, material procurement, factory fabrication, logistics management (including crane and gondola planning for tight urban sites), installation, testing, and post-completion AMC." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "What We Offer" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Cyclone Zone IV/V Engineering" })
        ] }, "Cyclone Zone IV/V Engineering"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "ASTM E331 Water Test" })
        ] }, "ASTM E331 Water Test"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Marine Grade Hardware" })
        ] }, "Marine Grade Hardware"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Inter-lock Pressure Equalisation" })
        ] }, "Inter-lock Pressure Equalisation"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "BKC & South Mumbai Projects" })
        ] }, "BKC & South Mumbai Projects"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "LEED DGU Low-E Glass" })
        ] }, "LEED DGU Low-E Glass")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What wind load standards apply to curtain walls in Mumbai?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Mumbai falls in IS:875 Part 3 Wind Zone IV (basic wind speed 44 m/s). All Fine Glaze curtain wall systems for Mumbai are designed for this wind zone with gust factors for building height. Above 30 storeys, CFD analysis is used for accurate wind pressure coefficients." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "How does Fine Glaze handle curtain wall logistics in Mumbai?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Fine Glaze uses just-in-time delivery, crane coordination with building management, night shifts for road deliveries, and pre-positioned mobile cranes for efficient installation without disrupting building occupants or street traffic." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "Does Fine Glaze provide curtain wall refurbishment in Mumbai?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Yes. We offer full curtain wall refurbishment including sealant replacement, glass panel replacement, gasket renewal, and frame recladding for older Mumbai commercial buildings needing facade upgrades." })
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
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Curtain wall service overview" })
          ] })
        ] }, "/curtain-wall-systems"),
        /* @__PURE__ */ jsxs(Link, { to: "/curtain-wall-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Curtain Wall Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Curtain wall Pune" })
          ] })
        ] }, "/curtain-wall-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/facade-contractor-mumbai", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Contractor Mumbai" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Full facade services Mumbai" })
          ] })
        ] }, "/facade-contractor-mumbai"),
        /* @__PURE__ */ jsxs(Link, { to: "/structural-glazing-mumbai", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Structural Glazing Mumbai" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Structural glazing Mumbai" })
          ] })
        ] }, "/structural-glazing-mumbai"),
        /* @__PURE__ */ jsxs(Link, { to: "/acp-aluminium-cladding", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "ACP Cladding" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "ACP panel cladding" })
          ] })
        ] }, "/acp-aluminium-cladding"),
        /* @__PURE__ */ jsxs(Link, { to: "/maintenance-services", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Maintenance" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Curtain wall AMC" })
          ] })
        ] }, "/maintenance-services")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  CurtainWallMumbai as default
};
