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
function FacadeContractorMumbai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade Contractor in Mumbai",
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
    "description": "Expert facade contractor in Mumbai. Curtain walls, structural glazing, ACP cladding for BKC, Andheri, Powai & Lower Parel. Cyclone-rated systems. Free site visit."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Does Fine Glaze serve all of Mumbai for facade work?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze serves all Mumbai zones including South Mumbai, Central Mumbai (Worli, Lower Parel, Dadar), Western suburbs (Bandra, Andheri, Goregaon, Borivali), Eastern suburbs (Vikhroli, Powai), and BKC. We also cover Navi Mumbai and Thane." } },
      { "@type": "Question", "name": "What makes Mumbai facade work different from Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Mumbai requires anti-corrosion engineering throughout: marine-grade SS hardware, PVDF-coated aluminium extrusions, high-build sealants for saline environments, and design for higher wind loads (Zone IV/V). Fine Glaze engineers all Mumbai facades specifically for these conditions." } },
      { "@type": "Question", "name": "How much does facade work cost in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Mumbai facade costs are typically 10-15% higher than Pune due to higher logistics costs, coastal engineering requirements, and higher labour rates. ACP cladding: Rs 200-500/sq ft; structural glazing: Rs 350-1000/sq ft; curtain walls: Rs 400-1300/sq ft installed." } }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Facade Contractor in Mumbai", "item": "https://fineglaze.com/facade-contractor-mumbai" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Facade Contractor in Mumbai | Glass, ACP & Curtain Wall – Fine Glaze",
        description: "Expert facade contractor in Mumbai. Curtain walls, structural glazing, ACP cladding for BKC, Andheri, Powai & Lower Parel. Cyclone-rated systems. Free site visit.",
        canonical: "https://fineglaze.com/facade-contractor-mumbai",
        keywords: "facade contractor Mumbai, glass facade Mumbai, curtain wall Mumbai, ACP cladding Mumbai, structural glazing BKC, facade contractor Andheri, facade company Mumbai",
        ogImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
          "Facade Contractor ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "in Mumbai" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 mb-8", children: "Fine Glaze brings award-winning facade expertise to Mumbai's demanding commercial and residential landscape. As an established facade contractor in Mumbai, we have delivered curtain wall systems, structural glazing, ACP cladding, and glass railings across BKC, Andheri, Powai, Lower Parel, Worli, Vikhroli, and beyond." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get Free Quote" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "View Projects" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
          alt: "Mumbai facade contractor curtain wall BKC high-rise Fine Glaze",
          className: "rounded-xl shadow-2xl object-cover h-[420px] w-full",
          loading: "eager",
          width: "600",
          height: "420"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Mumbai's Trusted Facade Partner" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Mumbai's real estate market — one of Asia's most dynamic — requires facade contractors with deep technical expertise, reliable supply chains, and the project management muscle to execute on tight urban timelines. Fine Glaze has built a strong Mumbai presence, delivering precision-engineered facade systems on landmark projects including the Leela Hotel facade, Leela Business Park, and Embassy 247 curtain wall installations." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Our Mumbai projects are engineered for cyclone-zone wind loads (IS:875 Zone IV/V coastal requirements), high humidity, and saline air conditions. We use marine-grade SS 316 hardware, high-build PVDF coatings, and heavy-duty EPDM gaskets to ensure longevity in Mumbai's aggressive climate." }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
        "Key service areas in Mumbai include ",
        /* @__PURE__ */ jsx("strong", { children: "BKC" }),
        " for corporate tower facades, ",
        /* @__PURE__ */ jsx("strong", { children: "Lower Parel & Worli" }),
        " for premium residential high-rises, ",
        /* @__PURE__ */ jsx("strong", { children: "Andheri MIDC & Powai" }),
        " for tech park campuses, ",
        /* @__PURE__ */ jsx("strong", { children: "Vikhroli" }),
        " for industrial and commercial cladding, and ",
        /* @__PURE__ */ jsx("strong", { children: "Nariman Point" }),
        " for heritage-zone compliant facade refurbishment."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Fine Glaze's Mumbai projects are coordinated from our Pune headquarters with a dedicated Mumbai site team and local procurement links. We maintain strong relationships with Mumbai-based structural engineers, architects, and project managers, enabling fast response to RFIs and change orders that are inevitable in Mumbai's complex construction environment." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Our Mumbai facade portfolio spans diverse building types: Grade-A commercial towers in BKC, 5-star hotel facades, premium residential towers in South Mumbai and the western suburbs, IT park campuses in Powai and Thane, healthcare facilities, and shopping centres. This breadth of experience means we bring relevant reference projects to every new Mumbai tender." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "What We Offer" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Cyclone Zone Wind Load Design" })
        ] }, "Cyclone Zone Wind Load Design"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Marine Grade SS 316 Hardware" })
        ] }, "Marine Grade SS 316 Hardware"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "High-Rise Facade Expertise" })
        ] }, "High-Rise Facade Expertise"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "PVDF Anti-Corrosion Coatings" })
        ] }, "PVDF Anti-Corrosion Coatings"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "BKC & South Mumbai Projects" })
        ] }, "BKC & South Mumbai Projects"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Leela Hotel & Embassy Reference" })
        ] }, "Leela Hotel & Embassy Reference")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "Does Fine Glaze serve all of Mumbai for facade work?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Yes. Fine Glaze serves all Mumbai zones including South Mumbai, Central Mumbai (Worli, Lower Parel, Dadar), Western suburbs (Bandra, Andheri, Goregaon, Borivali), Eastern suburbs (Vikhroli, Powai), and BKC. We also cover Navi Mumbai and Thane." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What makes Mumbai facade work different from Pune?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Mumbai requires anti-corrosion engineering throughout: marine-grade SS hardware, PVDF-coated aluminium extrusions, high-build sealants for saline environments, and design for higher wind loads (Zone IV/V). Fine Glaze engineers all Mumbai facades specifically for these conditions." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "How much does facade work cost in Mumbai?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Mumbai facade costs are typically 10-15% higher than Pune due to higher logistics costs, coastal engineering requirements, and higher labour rates. ACP cladding: Rs 200-500/sq ft; structural glazing: Rs 350-1000/sq ft; curtain walls: Rs 400-1300/sq ft installed." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-slate-50 border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-800 mb-5", children: "Explore Related Services" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/facade-contractor-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Contractor Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Facade services Pune" })
          ] })
        ] }, "/facade-contractor-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/curtain-wall-systems", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Curtain Wall Systems" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Full curtain wall service" })
          ] })
        ] }, "/curtain-wall-systems"),
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
        /* @__PURE__ */ jsxs(Link, { to: "/facade-contractor-navi-mumbai", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Contractor Navi Mumbai" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Navi Mumbai facade services" })
          ] })
        ] }, "/facade-contractor-navi-mumbai"),
        /* @__PURE__ */ jsxs(Link, { to: "/maintenance-services", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Maintenance" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "AMC & facade repair" })
          ] })
        ] }, "/maintenance-services")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  FacadeContractorMumbai as default
};
