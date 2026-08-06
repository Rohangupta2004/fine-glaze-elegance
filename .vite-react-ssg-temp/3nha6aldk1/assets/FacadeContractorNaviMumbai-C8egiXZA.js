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
function FacadeContractorNaviMumbai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade Contractor in Navi Mumbai",
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
    "description": "Facade contractor in Navi Mumbai. Curtain walls, structural glazing & ACP cladding for Vashi, Mahape, Airoli, Kharghar & Belapur. LTIMindtree campus reference. Free site visit."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What projects has Fine Glaze done in Navi Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze's most prominent Navi Mumbai project is the LTIMindtree Mensa Campus in Mahape — a multi-building IT campus with curtain wall and ACP cladding. We have also completed projects in Airoli, Vashi, and Belapur." } },
      { "@type": "Question", "name": "Does Fine Glaze provide facade AMC in Navi Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer Annual Maintenance Contracts covering glass cleaning, sealant inspection, hardware lubrication, minor repairs, and emergency callouts for buildings of any size in Navi Mumbai." } },
      { "@type": "Question", "name": "What facade systems are popular in Navi Mumbai IT parks?", "acceptedAnswer": { "@type": "Answer", "text": "Unitized curtain wall systems are most popular for large IT campuses due to fast installation and factory quality. ACP cladding is used for service areas and parking structures. Structural glazing is preferred for entrance lobbies and atrium walls." } }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Facade Contractor in Navi Mumbai", "item": "https://fineglaze.com/facade-contractor-navi-mumbai" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Facade Contractor in Navi Mumbai | Curtain Wall & Glass Facade – Fine Glaze",
        description: "Facade contractor in Navi Mumbai. Curtain walls, structural glazing & ACP cladding for Vashi, Mahape, Airoli, Kharghar & Belapur. LTIMindtree campus reference. Free site visit.",
        canonical: "https://fineglaze.com/facade-contractor-navi-mumbai",
        keywords: "facade contractor Navi Mumbai, curtain wall Navi Mumbai, glass facade Mahape, ACP cladding Airoli, structural glazing Vashi, facade company Belapur, IT park facade Navi Mumbai",
        ogImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
          "Facade Contractor ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "in Navi Mumbai" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 mb-8", children: "Fine Glaze has established a strong foothold in Navi Mumbai as a go-to facade contractor for large-scale IT campuses, commercial complexes, and residential towers. Our flagship Navi Mumbai project — the LTIMindtree Mensa Campus in Mahape — showcases our capability to deliver complex, multi-block facade systems on India's fastest-growing tech corridor." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get Free Quote" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "View Projects" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1486325212027-8081e485255e",
          alt: "Navi Mumbai IT campus facade curtain wall - Fine Glaze LTIMindtree",
          className: "rounded-xl shadow-2xl object-cover h-[420px] w-full",
          loading: "eager",
          width: "600",
          height: "420"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Navi Mumbai's IT Campus Facade Specialist" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Navi Mumbai has emerged as one of India's premier IT and industrial destinations, with major multinational companies establishing their campuses in Mahape MIDC, Airoli, and Belapur CBD. Fine Glaze has been part of this growth story, delivering facade systems that meet LEED and GRIHA green building certification standards increasingly demanded by MNC occupiers." }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
        "Our Navi Mumbai services cover the full facade spectrum: ",
        /* @__PURE__ */ jsx("strong", { children: "unitized curtain walls" }),
        " for IT park towers, ",
        /* @__PURE__ */ jsx("strong", { children: "structural glazing" }),
        " for showroom and lobby entries, ",
        /* @__PURE__ */ jsx("strong", { children: "ACP cladding" }),
        " for industrial and commercial building elevations, ",
        /* @__PURE__ */ jsx("strong", { children: "glass railings" }),
        " for corporate campus common areas, and ",
        /* @__PURE__ */ jsx("strong", { children: "facade AMC" }),
        " for ongoing building management."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
        "We serve all major Navi Mumbai nodes: ",
        /* @__PURE__ */ jsx("strong", { children: "Mahape MIDC" }),
        " (IT/BPO campuses), ",
        /* @__PURE__ */ jsx("strong", { children: "Airoli" }),
        " (pharma and finance), ",
        /* @__PURE__ */ jsx("strong", { children: "Vashi" }),
        " (commercial and retail), ",
        /* @__PURE__ */ jsx("strong", { children: "Belapur CBD" }),
        " (government and corporate), ",
        /* @__PURE__ */ jsx("strong", { children: "Kharghar" }),
        " (educational and residential), and ",
        /* @__PURE__ */ jsx("strong", { children: "Panvel" }),
        " (new development zone adjacent to NAINA)."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "The LTIMindtree Mensa Campus project in Mahape is Fine Glaze's flagship Navi Mumbai reference — a multi-building IT campus that required coordinated facade execution across several blocks with different facade systems, tight schedule constraints, and LEED certification requirements. This project exemplifies our capability to manage large-scale, multi-system facade contracts in Navi Mumbai." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Fine Glaze actively supports Navi Mumbai's growing residential development corridor in Kharghar and Panvel, offering competitive glass railing and ACP cladding packages for residential developers in these emerging zones. Contact us for project-specific pricing and timeline estimates." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "What We Offer" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "LTIMindtree Campus Reference" })
        ] }, "LTIMindtree Campus Reference"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "LEED-Compatible Systems" })
        ] }, "LEED-Compatible Systems"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Mahape MIDC Expertise" })
        ] }, "Mahape MIDC Expertise"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Large IT Campus Projects" })
        ] }, "Large IT Campus Projects"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Multi-Block Coordination" })
        ] }, "Multi-Block Coordination"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "GRIHA Compliant Glass Specs" })
        ] }, "GRIHA Compliant Glass Specs")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What projects has Fine Glaze done in Navi Mumbai?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Fine Glaze's most prominent Navi Mumbai project is the LTIMindtree Mensa Campus in Mahape — a multi-building IT campus with curtain wall and ACP cladding. We have also completed projects in Airoli, Vashi, and Belapur." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "Does Fine Glaze provide facade AMC in Navi Mumbai?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Yes. We offer Annual Maintenance Contracts covering glass cleaning, sealant inspection, hardware lubrication, minor repairs, and emergency callouts for buildings of any size in Navi Mumbai." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What facade systems are popular in Navi Mumbai IT parks?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Unitized curtain wall systems are most popular for large IT campuses due to fast installation and factory quality. ACP cladding is used for service areas and parking structures. Structural glazing is preferred for entrance lobbies and atrium walls." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-slate-50 border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-800 mb-5", children: "Explore Related Services" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/facade-contractor-mumbai", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Contractor Mumbai" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Mumbai facade services" })
          ] })
        ] }, "/facade-contractor-mumbai"),
        /* @__PURE__ */ jsxs(Link, { to: "/facade-contractor-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Contractor Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Pune facade services" })
          ] })
        ] }, "/facade-contractor-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/curtain-wall-systems", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Curtain Wall Systems" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Unitized curtain walls" })
          ] })
        ] }, "/curtain-wall-systems"),
        /* @__PURE__ */ jsxs(Link, { to: "/acp-aluminium-cladding", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "ACP Cladding" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "ACP composite panels" })
          ] })
        ] }, "/acp-aluminium-cladding"),
        /* @__PURE__ */ jsxs(Link, { to: "/maintenance-services", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Maintenance" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "AMC & repair services" })
          ] })
        ] }, "/maintenance-services"),
        /* @__PURE__ */ jsxs(Link, { to: "/structural-glazing", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Structural Glazing" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Spider & SSG glazing" })
          ] })
        ] }, "/structural-glazing")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  FacadeContractorNaviMumbai as default
};
