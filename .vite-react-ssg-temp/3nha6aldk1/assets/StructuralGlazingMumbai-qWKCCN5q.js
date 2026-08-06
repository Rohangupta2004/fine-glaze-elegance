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
function StructuralGlazingMumbai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Structural Glazing Contractor in Mumbai",
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
    "description": "Structural glazing contractor in Mumbai. 2-side, 4-side & spider glazing for commercial towers, showrooms & hotels. Cyclone-rated design. Free site visit."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Is structural glazing safe in Mumbai cyclone zone?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, when designed to IS:875 Zone IV/V specifications. Fine Glaze uses redundant mechanical clamping at panel corners and Dow Corning 795 sealant, certified for coastal and tropical climates with 30+ year service life." } },
      { "@type": "Question", "name": "How does structural glazing perform during Mumbai monsoon?", "acceptedAnswer": { "@type": "Answer", "text": "Properly designed structural glazing is impermeable to water. Two-stage drainage channels provide secondary protection. Fine Glaze includes a hose test (AAMA 501.2) on all installations before handover to verify monsoon-proof performance." } },
      { "@type": "Question", "name": "What glass thickness for structural glazing on Mumbai high-rises?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze uses minimum 12mm fully toughened heat-soaked glass (HST). For buildings above 30 storeys, 15mm HST toughened or 6+6 laminated toughened glass is used depending on structural engineer specifications." } }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Structural Glazing Contractor in Mumbai", "item": "https://fineglaze.com/structural-glazing-mumbai" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Structural Glazing Mumbai | Frameless Glass Facade BKC & Worli - Fine Glaze",
        description: "Premier structural glazing contractor in Mumbai. 2-side, 4-side & spider glass facades for commercial towers in BKC, Andheri, Powai, Goregaon & Worli.",
        canonical: "https://fineglaze.com/structural-glazing-mumbai",
        keywords: "structural glazing Mumbai, structural glass facade Mumbai, frameless glazing Mumbai, spider glazing Mumbai",
        ogImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
          "Structural Glazing ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Contractor in Mumbai" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 mb-8", children: "Fine Glaze delivers precision-engineered structural glazing systems in Mumbai for corporate towers, luxury hotels, showroom facades, and high-rise residential buildings. Our systems are cyclone-rated, coastal-engineered, and designed to withstand Mumbai's extreme weather while delivering breathtaking glass exteriors." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get Free Quote" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "View Projects" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1486325212027-8081e485255e",
          alt: "Structural glazing Mumbai high-rise glass facade - Fine Glaze",
          className: "rounded-xl shadow-2xl object-cover h-[420px] w-full",
          loading: "eager",
          width: "600",
          height: "420"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Coastal-Engineered Structural Glazing for Mumbai" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Mumbai's skyline is defined by glass — from the iconic towers of BKC to the residential high-rises of Worli Seaface. Fine Glaze has contributed to this vision, installing structural glazing systems that create seamless, frameless glass facades with exceptional wind resistance and visual impact." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "For Mumbai coastal projects, structural glazing presents unique engineering challenges: cyclone-zone wind pressures, high seismic risk, and saline air affecting sealant longevity. Fine Glaze addresses these through structural sealant selection rated for coastal exposure (Dow Corning 795 with extended UV and moisture resistance), redundant mechanical retention at panel corners, and two-stage drainage silicone weather seals designed for Mumbai's 2,400mm+ annual rainfall." }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
        "Our Mumbai structural glazing portfolio includes ",
        /* @__PURE__ */ jsx("strong", { children: "showroom facades" }),
        " along Linking Road, Hill Road, and SV Road in the western suburbs; ",
        /* @__PURE__ */ jsx("strong", { children: "corporate lobby entrances" }),
        " in BKC and Nariman Point; and ",
        /* @__PURE__ */ jsx("strong", { children: "high-rise residential glass elements" }),
        " in Lower Parel and Worli. Spider glazing installations for statement entries complete our Mumbai portfolio."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Fine Glaze's Mumbai structural glazing projects include installations for 5-star hotel entrance canopies in South Mumbai — where the aesthetic demand is extremely high and the tolerance for any visual defect is near zero. Our installation team includes specialist structural glazing applicators with 10+ years of Mumbai high-rise experience." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "All Fine Glaze structural glazing projects in Mumbai include pre-construction mock-up panel testing, certified sealant application training records, a hose test (AAMA 501.2) after installation, and a 5-year structural sealant warranty backed by Dow Corning certification." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "What We Offer" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Cyclone Wind Pressure Design" })
        ] }, "Cyclone Wind Pressure Design"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Dow Corning 795 Coastal Sealant" })
        ] }, "Dow Corning 795 Coastal Sealant"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Redundant Mechanical Retention" })
        ] }, "Redundant Mechanical Retention"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Two-Stage Weather Drainage" })
        ] }, "Two-Stage Weather Drainage"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Spider Glazing Systems" })
        ] }, "Spider Glazing Systems"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "5-Year Sealant Warranty" })
        ] }, "5-Year Sealant Warranty")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "Is structural glazing safe in Mumbai cyclone zone?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Yes, when designed to IS:875 Zone IV/V specifications. Fine Glaze uses redundant mechanical clamping at panel corners and Dow Corning 795 sealant, certified for coastal and tropical climates with 30+ year service life." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "How does structural glazing perform during Mumbai monsoon?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Properly designed structural glazing is impermeable to water. Two-stage drainage channels provide secondary protection. Fine Glaze includes a hose test (AAMA 501.2) on all installations before handover to verify monsoon-proof performance." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What glass thickness for structural glazing on Mumbai high-rises?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Fine Glaze uses minimum 12mm fully toughened heat-soaked glass (HST). For buildings above 30 storeys, 15mm HST toughened or 6+6 laminated toughened glass is used depending on structural engineer specifications." })
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
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Full structural glazing service" })
          ] })
        ] }, "/structural-glazing"),
        /* @__PURE__ */ jsxs(Link, { to: "/structural-glazing-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Structural Glazing Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Structural glazing Pune" })
          ] })
        ] }, "/structural-glazing-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/facade-contractor-mumbai", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Contractor Mumbai" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Complete facade solutions" })
          ] })
        ] }, "/facade-contractor-mumbai"),
        /* @__PURE__ */ jsxs(Link, { to: "/curtain-wall-mumbai", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Curtain Wall Mumbai" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Curtain wall Mumbai" })
          ] })
        ] }, "/curtain-wall-mumbai"),
        /* @__PURE__ */ jsxs(Link, { to: "/aluminium-facade-mumbai", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Aluminium Facade Mumbai" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Aluminium facade Mumbai" })
          ] })
        ] }, "/aluminium-facade-mumbai"),
        /* @__PURE__ */ jsxs(Link, { to: "/maintenance-services", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Maintenance" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Structural glazing maintenance" })
          ] })
        ] }, "/maintenance-services")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  StructuralGlazingMumbai as default
};
