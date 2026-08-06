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
function StructuralGlazingPune() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Structural Glazing Contractor in Pune",
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
    "description": "Structural glazing contractor in Pune. 2-side, 4-side & spider glazing for showrooms, offices & high-rises. IS:875 compliant. Free site visit."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the cost of structural glazing in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Structural glazing in Pune costs Rs 300-900 per sq ft. 2-side SSG ranges from Rs 300-550/sq ft, 4-side full structural glazing is Rs 550-900/sq ft, and spider glazing is Rs 800-1400/sq ft for statement entries." } },
      { "@type": "Question", "name": "Is structural glazing safe in Pune earthquake zone?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze designs structural glazing for Pune's seismic zone III using redundant mechanical clamping at corners and certified sealants. Designs comply with IS:1893 and NBC 2016 guidelines." } },
      { "@type": "Question", "name": "What glass thickness is used for structural glazing in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "We use minimum 12mm fully toughened glass, heat-soaked (HST tested) for large panels above 3 sq m to eliminate spontaneous breakage risk. Laminated toughened glass is used where fall protection is required." } }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Structural Glazing Contractor in Pune", "item": "https://fineglaze.com/structural-glazing-pune" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Structural Glazing Pune | Frameless Glass Facade Contractor Hinjewadi - Fine Glaze",
        description: "Top structural glazing contractor in Pune. 2-side, 4-side & spider glazing for showrooms & commercial buildings in Hinjewadi, Kharadi, Baner & Wakad.",
        canonical: "https://fineglaze.com/structural-glazing-pune",
        keywords: "structural glazing Pune, structural glass facade Pune, frameless glazing Pune, spider glazing Pune",
        ogImage: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
          "Structural Glazing ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Contractor in Pune" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 mb-8", children: "Fine Glaze is Pune's premier structural glazing contractor, offering 2-side, 4-side, and spider glazing systems for commercial showrooms, corporate offices, IT campuses, and residential towers. Structural glazing creates a seamless, frameless glass exterior that maximises natural light and architectural impact." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get Free Quote" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "View Projects" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8",
          alt: "Structural glazing facade Pune office building - Fine Glaze",
          className: "rounded-xl shadow-2xl object-cover h-[420px] w-full",
          loading: "eager",
          width: "600",
          height: "420"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Why Pune Architects Choose Fine Glaze for Structural Glazing" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Structural glazing uses high-strength silicone sealants (Dow Corning 795/983 series) to bond glass panels directly to aluminium frames, eliminating visible exterior fixings. Fine Glaze has completed structural glazing projects across Hinjewadi IT Park, BKC Mumbai, and Navi Mumbai's MIDC corridor." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Our structural glazing systems are engineered for Pune's wind zone II/III conditions, meeting IS:875 Part 3 wind load requirements. We use only certified structural sealants with documented shear and tensile test results. Every installation includes a 24-hour water ponding test and pull-off test before final handover." }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
        "Popular applications in Pune include ",
        /* @__PURE__ */ jsx("strong", { children: "showroom glass facades" }),
        " along Nagar Road and FC Road, ",
        /* @__PURE__ */ jsx("strong", { children: "IT park entrance lobbies" }),
        " in Hinjewadi and Kharadi, ",
        /* @__PURE__ */ jsx("strong", { children: "high-rise residential towers" }),
        " in Wakad and Baner, and ",
        /* @__PURE__ */ jsx("strong", { children: "hospital building facades" }),
        " in Koregaon Park and Kalyani Nagar."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
        "Fine Glaze offers three structural glazing configurations: ",
        /* @__PURE__ */ jsx("strong", { children: "2-side SSG" }),
        " (structural sealant on two sides, mechanical caps on two sides) for a semi-frameless look at lower cost; ",
        /* @__PURE__ */ jsx("strong", { children: "4-side SSG" }),
        " (full frameless appearance) for premium architectural projects; and ",
        /* @__PURE__ */ jsx("strong", { children: "spider glazing" }),
        " for statement entries, atriums, and canopies where minimal structure is desired."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "For Pune's residential sector, structural glazing on balcony parapets and large bay windows is increasingly popular in premium projects in Koregaon Park, Kalyani Nagar, and Undri. Fine Glaze customises glass thickness and sealant joint sizing for these residential applications to balance aesthetics with structural safety at lower floor-to-floor heights." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "What We Offer" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "2-Side SSG Systems" })
        ] }, "2-Side SSG Systems"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "4-Side SSG Systems" })
        ] }, "4-Side SSG Systems"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Spider Glazing" })
        ] }, "Spider Glazing"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Dow Corning Sealants" })
        ] }, "Dow Corning Sealants"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Water Penetration Tested" })
        ] }, "Water Penetration Tested"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Thermal Insulated DGU Units" })
        ] }, "Thermal Insulated DGU Units")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What is the cost of structural glazing in Pune?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Structural glazing in Pune costs Rs 300-900 per sq ft. 2-side SSG ranges from Rs 300-550/sq ft, 4-side full structural glazing is Rs 550-900/sq ft, and spider glazing is Rs 800-1400/sq ft for statement entries." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "Is structural glazing safe in Pune earthquake zone?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Yes. Fine Glaze designs structural glazing for Pune's seismic zone III using redundant mechanical clamping at corners and certified sealants. Designs comply with IS:1893 and NBC 2016 guidelines." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What glass thickness is used for structural glazing in Pune?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "We use minimum 12mm fully toughened glass, heat-soaked (HST tested) for large panels above 3 sq m to eliminate spontaneous breakage risk. Laminated toughened glass is used where fall protection is required." })
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
        /* @__PURE__ */ jsxs(Link, { to: "/curtain-wall-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Curtain Wall Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Curtain wall systems Pune" })
          ] })
        ] }, "/curtain-wall-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/aluminium-facade", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Aluminium Facade" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Aluminium facade systems" })
          ] })
        ] }, "/aluminium-facade"),
        /* @__PURE__ */ jsxs(Link, { to: "/glass-railings", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Glass Railings" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Frameless glass railings" })
          ] })
        ] }, "/glass-railings"),
        /* @__PURE__ */ jsxs(Link, { to: "/acp-cladding-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "ACP Cladding Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "ACP panel facades Pune" })
          ] })
        ] }, "/acp-cladding-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/facade-contractor-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Contractor Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Complete facade solutions" })
          ] })
        ] }, "/facade-contractor-pune")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  StructuralGlazingPune as default
};
