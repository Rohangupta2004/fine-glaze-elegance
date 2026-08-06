import { jsxs, jsx } from "react/jsx-runtime";
import { L as Layout, S as SEO, c as cn, B as Button, C as CTASection } from "../main.mjs";
import { Link } from "react-router-dom";
import { Star, ArrowRight, Shield, Clock, Award, Wrench, MapPin, ChevronDown } from "lucide-react";
import { u as useScrollAnimation } from "./useScrollAnimation-BUkRNC2S.js";
import { useState } from "react";
import "vite-react-ssg";
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
function FadeIn({
  children,
  className,
  delay = 0
}) {
  const { ref, isVisible } = useScrollAnimation();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      ),
      style: { transitionDelay: `${delay}ms` },
      children
    }
  );
}
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "border-b border-stone-200", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setOpen(!open),
        className: "w-full flex items-center justify-between py-4 text-left group",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-[15px] font-semibold text-stone-800 pr-8 group-hover:text-amber-700 transition-colors", children: q }),
          /* @__PURE__ */ jsx(
            ChevronDown,
            {
              size: 18,
              className: cn(
                "text-stone-400 shrink-0 transition-transform duration-300",
                open && "rotate-180"
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-96 pb-4" : "max-h-0"
        ),
        children: /* @__PURE__ */ jsx("p", { className: "text-stone-500 leading-relaxed text-sm", children: a })
      }
    )
  ] });
}
const IMG = {
  hero: "/facade-maintenance.webp",
  sealant: "/Sealent.webp",
  glass: "/Glass.webp",
  cleaning: "/Amc.webp",
  amc: "/Amc1.webp",
  process: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?fm=jpg&q=85&w=1400&auto=format&fit=crop"
};
const SYSTEMS = [
  {
    num: "01",
    title: "Sealant Renewal & Waterproofing",
    desc: "Complete removal and replacement of degraded structural silicone and weather sealants. We use Dow Corning and Sika sealants rated for 25+ years. Includes joint preparation, priming, and quality-tested application.",
    glass: "Dow Corning / Sika",
    wind: "Every 8–12 years",
    bestFor: "Leaking facades, old buildings",
    price: "₹80 – ₹200 /rft",
    img: "sealant"
  },
  {
    num: "02",
    title: "Glass Panel Replacement",
    desc: "Safe removal and replacement of cracked, broken, or hazy glass panels. We stock common DGU and toughened glass specifications for fast turnaround. Includes gasket and sealant renewal.",
    glass: "Rope-access / scaffold",
    wind: "As needed",
    bestFor: "Damaged panels, upgrades",
    price: "₹350 – ₹1,200 /sq ft",
    img: "glass"
  },
  {
    num: "03",
    title: "Facade Cleaning",
    desc: "Professional rope-access or BMU-based facade cleaning using pH-neutral solutions. Removes pollution deposits, hard water stains, and biological growth without damaging glass coatings or sealants.",
    glass: "Rope-access / BMU",
    wind: "2x per year",
    bestFor: "Commercial towers, malls",
    price: "₹8 – ₹25 /sq ft",
    img: "cleaning"
  },
  {
    num: "04",
    title: "Annual Maintenance Contract",
    desc: "Comprehensive AMC covering bi-annual inspections, sealant checks, hardware lubrication, drainage clearing, and priority emergency repairs. Includes detailed condition reports with photo documentation.",
    glass: "Scheduled programme",
    wind: "Bi-annual visits",
    bestFor: "All commercial buildings",
    price: "Custom quote",
    img: "amc"
  }
];
const STEPS = [
  { num: "01", title: "Inspection", desc: "Full facade audit with photo documentation of all issues" },
  { num: "02", title: "Report", desc: "Detailed condition report with prioritised repair recommendations" },
  { num: "03", title: "Execution", desc: "Scheduled repairs by trained rope-access technicians" },
  { num: "04", title: "Handover", desc: "Completion report with before/after photos & warranty" }
];
function Maintenance() {
  const [activeSystem, setActiveSystem] = useState(0);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Facade AMC & Maintenance Services",
    serviceType: "Facade Maintenance & AMC",
    provider: {
      "@type": "LocalBusiness",
      name: "Fine Glaze",
      "@id": "https://fineglaze.com",
      url: "https://fineglaze.com",
      telephone: "+91-8369233566",
      priceRange: "₹₹₹",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN"
      }
    },
    areaServed: [
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Navi Mumbai" }
    ],
    description: "Comprehensive facade maintenance — sealant renewal, glass replacement, cleaning, waterproofing & annual maintenance contracts (AMC) for commercial buildings."
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "Facade AMC & Maintenance", item: "https://fineglaze.com/maintenance-services" }
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How often should a facade be maintained?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend bi-annual inspections — once before monsoon and once after. Cleaning should be done 2x per year for commercial buildings. Sealant replacement is typically needed every 8–12 years depending on exposure and quality."
        }
      },
      {
        "@type": "Question",
        name: "What does a facade AMC include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our AMC covers bi-annual inspections, sealant integrity checks, hardware lubrication, drainage clearing, minor repairs, and detailed condition reports with photo documentation. Emergency repairs get priority 48-hour response."
        }
      },
      {
        "@type": "Question",
        name: "How much does facade cleaning cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional rope-access facade cleaning costs ₹8–₹25 per sq ft depending on building height, accessibility, and contamination level. BMU-based cleaning for very tall buildings is quoted per project."
        }
      }
    ]
  };
  const current = SYSTEMS[activeSystem];
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Facade Maintenance Company Pune & Mumbai | Glass Cleaning & Repair - Fine Glaze",
        description: "Leading facade maintenance company in Pune & Mumbai. Facade AMC, structural sealant replacement, glass panel repair, curtain wall restoration & inspections.",
        canonical: "https://fineglaze.com/maintenance-services",
        keywords: "facade maintenance company, facade maintenance AMC, glass facade cleaning, sealant replacement, curtain wall repair, facade inspection",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative h-screen overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: IMG.hero,
          alt: "Facade maintenance work — Fine Glaze",
          className: "absolute inset-0 w-full h-full object-cover object-center",
          style: { animation: "sgZoom 20s ease-in-out infinite alternate" },
          loading: "eager"
        }
      ),
      /* @__PURE__ */ jsx("style", { children: `@keyframes sgZoom { from { transform: scale(1.0); } to { transform: scale(1.08); } }` }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0",
          style: {
            background: "linear-gradient(to bottom, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.92) 100%)"
          }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 px-5 md:px-16 pb-10 md:pb-20 pt-24", children: [
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-amber-400 text-xs font-bold tracking-[0.4em] uppercase mb-5 animate-fade-in",
            style: { animationDelay: "0.05s" },
            children: "Fine Glaze · Pune · Mumbai · Maharashtra"
          }
        ),
        /* @__PURE__ */ jsxs(
          "h1",
          {
            className: "font-extrabold text-white leading-tight tracking-tight animate-fade-in-up",
            style: { fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", animationDelay: "0.1s" },
            children: [
              "Facade",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Maintenance" }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { style: { fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 600, color: "rgba(255,255,255,0.85)" }, children: "& AMC." })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "mt-6 text-white/70 text-base md:text-lg max-w-lg leading-relaxed animate-fade-in-up",
            style: { animationDelay: "0.2s" },
            children: "Sealant renewal, glass replacement, cleaning & annual maintenance contracts for commercial buildings."
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "mt-8 flex items-center gap-8 animate-fade-in-up",
            style: { animationDelay: "0.3s" },
            children: [
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/contact",
                  className: "text-white font-semibold text-base border-b border-amber-400 pb-0.5 hover:text-amber-400 transition-colors tracking-wide",
                  children: "Get Free Quote"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "tel:+918369233566",
                  className: "text-white/60 font-medium text-base hover:text-white transition-colors tracking-wide",
                  children: "+91 83692 33566"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center gap-1.5 mt-4 animate-fade-in-up",
            style: { animationDelay: "0.4s" },
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { size: 12, className: "text-amber-400 fill-amber-400" }, i)) }),
              /* @__PURE__ */ jsx("span", { className: "text-white/50 text-xs font-medium ml-0.5", children: "5.0 Google · Embassy REIT Vendor · 10+ Landmark Projects" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-40", children: [
        /* @__PURE__ */ jsx("span", { className: "text-white text-[10px] uppercase tracking-[0.25em] rotate-90 mb-3", children: "Scroll" }),
        /* @__PURE__ */ jsx("div", { className: "w-px h-12 bg-gradient-to-b from-white to-transparent" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 md:px-16 max-w-3xl text-center", children: /* @__PURE__ */ jsxs(FadeIn, { children: [
      /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-4", children: "Why Facade Maintenance" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-bold text-stone-900 leading-snug mb-5", children: [
        "Protect your building investment —",
        "  ",
        /* @__PURE__ */ jsx("span", { className: "text-stone-400", children: "preventive care that saves lakhs in emergency repairs." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-[15px] md:text-base leading-relaxed", children: "Facade systems need regular maintenance to perform. UV-degraded sealant causes leaks, dirty glass reduces building value, and unchecked corrosion leads to costly structural failures. Our AMC programs catch problems early with scheduled inspections and proactive repairs." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-stone-900 py-10", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 md:px-16", children: /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-stone-700", children: [
      { number: "2x/yr", label: "Recommended Checks" },
      { number: "5+", label: "Years Experience" },
      { number: "0", label: "Safety Incidents" },
      { number: "48hr", label: "Emergency Response" }
    ].map((s) => /* @__PURE__ */ jsxs("div", { className: "text-center px-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-2xl md:text-3xl font-bold text-white", children: s.number }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-[11px] uppercase tracking-widest mt-1", children: s.label })
    ] }, s.label)) }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-stone-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-16", children: [
      /* @__PURE__ */ jsxs(FadeIn, { className: "mb-10", children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3", children: "Our Services" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-stone-900", children: "Facade Maintenance Services We Offer" })
      ] }),
      /* @__PURE__ */ jsxs(FadeIn, { delay: 100, children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-8", children: SYSTEMS.map((sys, i) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setActiveSystem(i),
            className: cn(
              "px-4 py-2 text-sm font-medium transition-all duration-200",
              activeSystem === i ? "bg-stone-900 text-white" : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
            ),
            children: sys.title
          },
          sys.num
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-0 bg-white overflow-hidden", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative h-[280px] md:h-[360px] overflow-hidden", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: IMG[current.img],
                alt: current.title,
                className: "w-full h-full object-cover transition-opacity duration-500",
                loading: "lazy"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 bg-stone-900/80 text-white text-xs font-bold px-3 py-1.5 tracking-wider", children: current.num })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-8 md:p-10 flex flex-col justify-center", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold text-stone-900 mb-3", children: current.title }),
            /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-sm leading-relaxed mb-6", children: current.desc }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 mb-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-stone-50 p-3", children: [
                /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-wider text-stone-400 mb-1", children: "Method" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-stone-800", children: current.glass })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-stone-50 p-3", children: [
                /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-wider text-stone-400 mb-1", children: "Frequency" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-stone-800", children: current.wind })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-stone-50 p-3", children: [
                /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-wider text-stone-400 mb-1", children: "Best For" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-stone-800", children: current.bestFor })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-amber-50 p-3 border border-amber-200", children: [
                /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-wider text-amber-600 mb-1", children: "Rate" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-stone-900", children: current.price })
              ] })
            ] }),
            /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxs(Button, { size: "sm", className: "bg-stone-900 hover:bg-stone-800 text-white gap-2", children: [
              "Get Quote for ",
              current.title.split(" ")[0],
              " ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] }) })
          ] })
        ] }, current.num)
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-16", children: [
      /* @__PURE__ */ jsxs(FadeIn, { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3", children: "Why Fine Glaze" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-stone-900", children: "Built for performance. Delivered on schedule." })
      ] }),
      /* @__PURE__ */ jsx(FadeIn, { delay: 100, children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: [
        {
          icon: Shield,
          title: "Certified Crews",
          desc: "All technicians are IRATA-trained for rope-access work. Full safety compliance on every project."
        },
        {
          icon: Clock,
          title: "48-Hour Response",
          desc: "Emergency glass replacement and leak repairs within 48 hours for AMC clients."
        },
        {
          icon: Award,
          title: "Original Installer",
          desc: "As facade installers ourselves, we understand every system inside-out — faster, better repairs."
        },
        {
          icon: Wrench,
          title: "Quality Materials",
          desc: "Only Dow Corning & Sika sealants. OEM-spec glass and hardware. No shortcuts, no substitutes."
        }
      ].map((item) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-12 h-12 bg-amber-50 text-amber-700 mb-4", children: /* @__PURE__ */ jsx(item.icon, { size: 22 }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-stone-900 mb-2", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-xs leading-relaxed", children: item.desc })
      ] }, item.title)) }) }),
      /* @__PURE__ */ jsx(FadeIn, { delay: 200, className: "mt-12 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-stone-400 text-sm", children: [
        "Trusted by ",
        /* @__PURE__ */ jsx("span", { className: "text-stone-700 font-semibold", children: "Embassy REIT" }),
        " ·",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-stone-700 font-semibold", children: "LTIMindtree" }),
        " ·",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-stone-700 font-semibold", children: "Pune International Airport" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-stone-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-16", children: [
      /* @__PURE__ */ jsxs(FadeIn, { className: "mb-10", children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3", children: "How We Work" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-stone-900", children: "From first visit to final handover" })
      ] }),
      /* @__PURE__ */ jsx(FadeIn, { delay: 100, children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: STEPS.map((step, i) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        i < STEPS.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-5 left-[60%] right-0 h-px bg-stone-300" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-5 relative", children: [
          /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold text-stone-100 block mb-3", children: step.num }),
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-stone-900 mb-1", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-xs leading-relaxed", children: step.desc })
        ] })
      ] }, step.num)) }) })
    ] }) }),
    /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsxs("div", { className: "relative h-[35vh] md:h-[40vh] overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: IMG.process,
          alt: "Fine Glaze maintenance crew at work",
          className: "w-full h-full object-cover",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/40" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center text-center px-4", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-white/60 text-sm uppercase tracking-widest mb-2", children: "Our Promise" }),
        /* @__PURE__ */ jsx("p", { className: "text-white text-xl md:text-3xl font-bold max-w-xl", children: "Every repair done right — because we built these facades in the first place." })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-16 max-w-3xl", children: [
      /* @__PURE__ */ jsxs(FadeIn, { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3", children: "Pricing" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-stone-900 mb-2", children: "Facade Maintenance Cost — 2026" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-400 text-sm", children: "Indicative rates. Final cost depends on specifications & complexity. GST extra." })
      ] }),
      /* @__PURE__ */ jsxs(FadeIn, { delay: 100, children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b-2 border-stone-800", children: [
            /* @__PURE__ */ jsx("th", { className: "py-3 text-xs font-bold uppercase tracking-wider text-stone-500", children: "System" }),
            /* @__PURE__ */ jsx("th", { className: "py-3 text-xs font-bold uppercase tracking-wider text-stone-500", children: "Method" }),
            /* @__PURE__ */ jsx("th", { className: "py-3 text-xs font-bold uppercase tracking-wider text-stone-500 text-right", children: "Rate / sq ft" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { className: "text-sm", children: [
            { system: "Sealant Renewal", glass: "Dow Corning / Sika", price: "₹80 – ₹200 /rft" },
            { system: "Glass Replacement", glass: "DGU / toughened", price: "₹350 – ₹1,200 /sq ft" },
            { system: "Facade Cleaning", glass: "Rope-access / BMU", price: "₹8 – ₹25 /sq ft" },
            { system: "Annual AMC", glass: "Bi-annual programme", price: "Custom quote" }
          ].map((row) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-stone-100 hover:bg-stone-50 transition-colors", children: [
            /* @__PURE__ */ jsx("td", { className: "py-3 font-semibold text-stone-800", children: row.system }),
            /* @__PURE__ */ jsx("td", { className: "py-3 text-stone-500", children: row.glass }),
            /* @__PURE__ */ jsx("td", { className: "py-3 text-right font-bold text-stone-900", children: row.price })
          ] }, row.system)) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-stone-900 hover:bg-stone-800 text-white gap-2 px-8", children: [
          "Get Exact Quote — Free Site Visit ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
        ] }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-14 md:py-16 bg-stone-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-16 max-w-3xl", children: [
      /* @__PURE__ */ jsxs(FadeIn, { className: "mb-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3", children: "Common Questions" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-stone-900", children: "FAQ" })
      ] }),
      /* @__PURE__ */ jsx(FadeIn, { delay: 100, children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "How often should a facade be maintained?",
            a: "We recommend bi-annual inspections — once before monsoon and once after. Cleaning should be done 2x per year for commercial buildings. Sealant replacement is typically needed every 8–12 years depending on exposure and quality."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "What does a facade AMC include?",
            a: "Our AMC covers bi-annual inspections, sealant integrity checks, hardware lubrication, drainage clearing, minor repairs, and detailed condition reports with photo documentation. Emergency repairs get priority 48-hour response."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "How much does facade cleaning cost?",
            a: "Professional rope-access facade cleaning costs ₹8–₹25 per sq ft depending on building height, accessibility, and contamination level. BMU-based cleaning for very tall buildings is quoted per project."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "Can you replace glass panels on occupied buildings?",
            a: "Yes. Our rope-access teams work safely on occupied buildings without disrupting tenants. We schedule work during low-traffic hours and use safety nets and debris protection throughout the process."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "Do you service facades installed by other companies?",
            a: "Yes. We service all facade types regardless of the original installer. Our engineers assess the system, identify the glass and sealant specifications, and source matching materials for seamless repairs."
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-stone-900 py-12", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 md:px-16", children: /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-10 md:gap-16", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4", children: "Where We Work" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-x-6 gap-y-2", children: ["Pune", "Mumbai BKC", "Navi Mumbai", "Thane", "Nashik", "Hinjewadi", "Pimpri-Chinchwad"].map((city) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(MapPin, { size: 11, className: "text-amber-500" }),
          /* @__PURE__ */ jsx("span", { className: "text-white/60 text-sm", children: city })
        ] }, city)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4", children: "Other Services" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-x-6 gap-y-1.5", children: [
          { title: "Curtain Wall Systems", href: "/curtain-wall-systems" },
          { title: "Structural Glazing", href: "/structural-glazing" },
          { title: "ACP Cladding", href: "/acp-aluminium-cladding" },
          { title: "Aluminium Facade", href: "/aluminium-facade" },
          { title: "Glass Railings", href: "/glass-railings" },
          { title: "All Services →", href: "/services" }
        ].map((link) => /* @__PURE__ */ jsx(
          Link,
          {
            to: link.href,
            className: "text-white/50 text-sm hover:text-amber-400 transition-colors",
            children: link.title
          },
          link.href
        )) })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  Maintenance as default
};
