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
function CurtainWallPune() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Curtain Wall Glazing Contractor in Pune",
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
    "description": "Expert curtain wall glazing contractor in Pune. Unitized & stick system curtain walls for IT parks, offices & malls. Projects in Hinjewadi, Kharadi, Baner. Free site visit."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the cost of curtain wall glazing in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Curtain wall glazing in Pune costs Rs 350-1200 per sq ft. Stick system curtain walls range from Rs 350-600/sq ft, while unitized systems are Rs 700-1200/sq ft. Pricing depends on glass type, aluminium profile grade, building height, and wind zone." } },
      { "@type": "Question", "name": "Which areas in Pune does Fine Glaze serve for curtain walls?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze serves all of Pune including Hinjewadi, Kharadi, Baner, Wakad, Viman Nagar, Magarpatta, Hadapsar, Pimpri-Chinchwad, Undri, Kalyani Nagar, Koregaon Park, Aundh, and Balewadi." } },
      { "@type": "Question", "name": "How long does curtain wall installation take in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "For a typical 10-storey building, fabrication takes 6-10 weeks and on-site installation 4-8 weeks. Fine Glaze runs parallel fabrication and site prep to compress overall timelines." } }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Curtain Wall Glazing Contractor in Pune", "item": "https://fineglaze.com/curtain-wall-pune" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Curtain Wall Contractor Pune | Glass Facades Hinjewadi & Baner - Fine Glaze",
        description: "Expert curtain wall contractor in Pune. Unitized & stick system glass curtain walls for IT parks & commercial towers in Hinjewadi, Kharadi, Baner & Wakad.",
        canonical: "https://fineglaze.com/curtain-wall-pune",
        keywords: "curtain wall contractor Pune, curtain wall systems Pune, glass facade Pune, unitized curtain wall Pune",
        ogImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
          "Curtain Wall Glazing ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Contractor in Pune" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 mb-8", children: "Fine Glaze is Pune's most trusted curtain wall glazing contractor, specialising in unitized, semi-unitized, and stick system installations for IT parks, corporate towers, hospitals, shopping malls, and residential high-rises." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get Free Quote" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "View Projects" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1486325212027-8081e485255e",
          alt: "Curtain wall glazing project Pune - Fine Glaze contractor",
          className: "rounded-xl shadow-2xl object-cover h-[420px] w-full",
          loading: "eager",
          width: "600",
          height: "420"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Pune's Leading Curtain Wall Specialist" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Fine Glaze has been at the centre of Pune's commercial real estate growth, installing curtain wall systems on projects ranging from 5-storey tech parks to 30-storey residential towers. Every project begins with a detailed site survey, wind load analysis, and shop drawing submission — ensuring structural compliance with IS:875 and BIS standards." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Our Pune fabrication team works with premium aluminium extrusions sourced from Hindalco and Jindal Aluminium, combined with Dow Corning structural sealants and Pilkington / Saint-Gobain glass. This translates into curtain walls certified for seismic zone III requirements applicable to the Pune region." }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
        "We serve all major Pune micro-markets: ",
        /* @__PURE__ */ jsx("strong", { children: "Hinjewadi IT Park (Phase 1, 2 & 3), Kharadi EON IT Park, Baner–Balewadi corporate corridor, Magarpatta Cybercity, Viman Nagar, Kalyani Nagar, Koregaon Park, Undri–Pisoli residential zone," }),
        " and the Pimpri-Chinchwad industrial belt."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Fine Glaze's Pune curtain wall installations include stick system glazing for 4–8 storey office buildings, semi-unitized systems for mid-rise commercial projects, and fully unitized panel systems for high-rise residential and commercial towers. Each project is delivered with complete as-built documentation, water penetration test certificates, and a structured AMC offer for long-term maintenance." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "We understand that Pune's construction market runs on tight schedules — particularly in Hinjewadi and Kharadi where IT park handovers drive hard deadlines. Fine Glaze's dedicated Pune project team runs parallel fabrication and site preparation workflows to ensure we hit critical milestones without compromising quality or safety standards." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "What We Offer" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Unitized Curtain Walls" })
        ] }, "Unitized Curtain Walls"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Stick System Glazing" })
        ] }, "Stick System Glazing"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Structural Silicone Bonding" })
        ] }, "Structural Silicone Bonding"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "DGU & Low-E Glass" })
        ] }, "DGU & Low-E Glass"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "IS:875 Wind Load Compliance" })
        ] }, "IS:875 Wind Load Compliance"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Seismic Zone III Ready" })
        ] }, "Seismic Zone III Ready")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What is the cost of curtain wall glazing in Pune?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Curtain wall glazing in Pune costs Rs 350-1200 per sq ft. Stick system curtain walls range from Rs 350-600/sq ft, while unitized systems are Rs 700-1200/sq ft. Pricing depends on glass type, aluminium profile grade, building height, and wind zone." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "Which areas in Pune does Fine Glaze serve for curtain walls?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Fine Glaze serves all of Pune including Hinjewadi, Kharadi, Baner, Wakad, Viman Nagar, Magarpatta, Hadapsar, Pimpri-Chinchwad, Undri, Kalyani Nagar, Koregaon Park, Aundh, and Balewadi." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "How long does curtain wall installation take in Pune?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "For a typical 10-storey building, fabrication takes 6-10 weeks and on-site installation 4-8 weeks. Fine Glaze runs parallel fabrication and site prep to compress overall timelines." })
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
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Full curtain wall overview" })
          ] })
        ] }, "/curtain-wall-systems"),
        /* @__PURE__ */ jsxs(Link, { to: "/structural-glazing-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Structural Glazing Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Frameless glass facades Pune" })
          ] })
        ] }, "/structural-glazing-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/aluminium-facade", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Aluminium Facade" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Aluminium cladding systems" })
          ] })
        ] }, "/aluminium-facade"),
        /* @__PURE__ */ jsxs(Link, { to: "/acp-cladding-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "ACP Cladding Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Composite panel facades Pune" })
          ] })
        ] }, "/acp-cladding-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/facade-contractor-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Contractor Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Complete facade services" })
          ] })
        ] }, "/facade-contractor-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/glass-railings", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Glass Railings" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Balcony glass railings Pune" })
          ] })
        ] }, "/glass-railings")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  CurtainWallPune as default
};
