import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, CheckCircle2, ArrowRight, Phone, Mail, FileText, MapPin, ChevronDown } from "lucide-react";
import { u as useScrollAnimation } from "./useScrollAnimation-BUkRNC2S.js";
import { L as Layout, S as SEO, B as Button, c as cn, C as CTASection } from "../main.mjs";
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
  hero: "/curtain-wall.webp",
  unitized: "/structural-glazing.webp",
  stick: "/curtain-wall.webp",
  semi: "/spider-glazing.webp",
  point: "/Glass installation.webp",
  process: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?fm=jpg&q=85&w=1400&auto=format&fit=crop"
};
const SYSTEMS = [
  {
    num: "01",
    title: "Unitized Curtain Wall",
    desc: "Factory-assembled panels shipped ready to install. Fastest method — ideal for high-rises. Each panel interlocks with the next for a seamless, watertight envelope.",
    glass: "6063-T6 aluminium",
    wind: "Up to 4.5 kPa",
    bestFor: "High-rises, IT parks",
    price: "₹600 – ₹1,200 /sq ft",
    img: "unitized"
  },
  {
    num: "02",
    title: "Stick System Curtain Wall",
    desc: "Aluminium mullions and transoms assembled piece-by-piece on site. Cost-effective for low-to-mid rise buildings with varying floor heights.",
    glass: "6063-T6 aluminium",
    wind: "Up to 3.5 kPa",
    bestFor: "Offices, showrooms",
    price: "₹400 – ₹700 /sq ft",
    img: "stick"
  },
  {
    num: "03",
    title: "Semi-Unitized System",
    desc: "Mullions fixed on-site, pre-glazed panels slotted in. Combines unitized speed with stick-system flexibility — great for renovation projects.",
    glass: "6063-T6 aluminium",
    wind: "Up to 4.0 kPa",
    bestFor: "Renovations, mid-rises",
    price: "₹500 – ₹900 /sq ft",
    img: "semi"
  },
  {
    num: "04",
    title: "Point-Supported Glass Wall",
    desc: "Minimal structure with stainless-steel point fixings and structural glass fins. Maximum transparency for atriums, lobbies, and feature facades.",
    glass: "SS 316 fittings",
    wind: "Structural glass fins",
    bestFor: "Lobbies, atriums",
    price: "₹900 – ₹1,500 /sq ft",
    img: "point"
  }
];
function CurtainWall() {
  const [activeSystem, setActiveSystem] = useState(0);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Curtain Wall Manufacturers & Glazing Systems",
    serviceType: "Curtain Wall Manufacturing & Installation",
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
    description: "Leading curtain wall manufacturers in Pune & Mumbai. Unitized, stick & semi-unitized glass curtain wall systems."
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "Curtain Wall Systems", item: "https://fineglaze.com/curtain-wall-systems" }
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who are the leading curtain wall manufacturers in Pune and Mumbai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fine Glaze is a leading curtain wall manufacturer in Pune and Mumbai, engineering unitized, stick, and semi-unitized curtain wall systems for commercial towers and IT parks."
        }
      },
      {
        "@type": "Question",
        name: "What is a unitized curtain wall system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unitized curtain walls are factory pre-assembled and pre-glazed glass modules that interlock on site, offering 40% faster erection and superior weather sealing for high-rise buildings."
        }
      },
      {
        "@type": "Question",
        name: "How much does a curtain wall cost per sq ft in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stick curtain wall systems range from ₹350–₹550/sq ft, unitized curtain wall systems cost ₹650–₹1,200/sq ft, and point-fixed spider glazing costs ₹800–₹1,500/sq ft."
        }
      }
    ]
  };
  const current = SYSTEMS[activeSystem];
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Curtain Wall Manufacturers & Systems Pune & Mumbai | Fine Glaze",
        description: "Leading curtain wall manufacturers in Pune & Mumbai. Unitized, stick & semi-unitized glass curtain wall systems for IT parks & commercial towers. Get a free quote!",
        canonical: "https://fineglaze.com/curtain-wall-systems",
        keywords: "Curtain wall manufacturers, curtain wall manufacturers Pune, curtain wall manufacturers Mumbai, unitized curtain wall, curtain wall cost, curtain wall systems",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative h-screen overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: IMG.hero,
          alt: "Curtain wall manufacturers glass facade — Fine Glaze",
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
              "Curtain Wall",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Manufacturers" }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { style: { fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 600, color: "rgba(255,255,255,0.85)" }, children: "Pune & Mumbai." })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "mt-6 text-white/70 text-base md:text-lg max-w-xl leading-relaxed animate-fade-in-up",
            style: { animationDelay: "0.2s" },
            children: "As premier curtain wall manufacturers in Pune and Mumbai, Fine Glaze delivers engineered unitized, stick, and semi-unitized glass curtain wall systems for commercial towers, IT parks, and high-rise office developments."
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
                  children: "Request a Quotation"
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
              /* @__PURE__ */ jsx("span", { className: "text-white/50 text-xs font-medium ml-0.5", children: "5.0 Google Rating · Embassy REIT Vendor · 50+ Projects Delivered" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-40", children: [
        /* @__PURE__ */ jsx("span", { className: "text-white text-[10px] uppercase tracking-[0.25em] rotate-90 mb-3", children: "Scroll" }),
        /* @__PURE__ */ jsx("div", { className: "w-px h-12 bg-gradient-to-b from-white to-transparent" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 md:px-16 max-w-4xl text-center", children: /* @__PURE__ */ jsxs(FadeIn, { children: [
      /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-4", children: "Leading Curtain Wall Manufacturers" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-bold text-stone-900 leading-snug mb-5", children: [
        "Top-Tier Curtain Wall Manufacturers for Modern Architecture —",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-stone-500", children: "engineered for wind load, thermal performance & longevity." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-[15px] md:text-base leading-relaxed mb-6", children: "As specialized curtain wall manufacturers, Fine Glaze designs, fabricates, and installs high-performance building envelopes. We utilize 6063-T6 grade aluminium extrusions, Dow Corning structural silicone, and double-glazed units (DGU) with Low-E coatings to achieve superior energy efficiency and weather protection across Maharashtra." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4 text-xs font-medium text-stone-500", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-stone-100 px-3 py-1.5 rounded-full", children: "In-House CNC Fabrication" }),
        /* @__PURE__ */ jsx("span", { className: "bg-stone-100 px-3 py-1.5 rounded-full", children: "IS 875 Wind Load Compliance" }),
        /* @__PURE__ */ jsx("span", { className: "bg-stone-100 px-3 py-1.5 rounded-full", children: "Dow Corning Certified Silicone" }),
        /* @__PURE__ */ jsx("span", { className: "bg-stone-100 px-3 py-1.5 rounded-full", children: "IS 2553 Glass Safety" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-stone-900 py-10", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 md:px-16", children: /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-stone-700", children: [
      { number: "15+", label: "Years Experience" },
      { number: "50+", label: "Facade Projects" },
      { number: "4.5 kPa", label: "Max Wind Load" },
      { number: "40%", label: "Faster (Unitized)" }
    ].map((s) => /* @__PURE__ */ jsxs("div", { className: "text-center px-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-2xl md:text-3xl font-bold text-white", children: s.number }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-[11px] uppercase tracking-widest mt-1", children: s.label })
    ] }, s.label)) }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-stone-900 text-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 md:px-16", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs(FadeIn, { children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-3", children: "High-Rise Technology" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-4xl font-bold mb-6 leading-tight", children: "Unitized Curtain Wall Systems" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-300 text-sm md:text-base leading-relaxed mb-6", children: "Unitized curtain wall systems consist of large pre-assembled, factory-glazed panels that are transported to the construction site and anchored directly to the building floor slab. This system is the preferred solution for high-rise commercial towers and IT parks above 15 floors." }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm text-stone-300 mb-8", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { size: 18, className: "text-amber-400 shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "40% Faster On-Site Installation" }),
              " — Pre-fabricated modules eliminate scaffolding constraints."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { size: 18, className: "text-amber-400 shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Controlled Factory Quality" }),
              " — Structural silicone application and EPDM gasket sealing are executed in controlled indoor environments."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { size: 18, className: "text-amber-400 shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Superior Weather Tightness" }),
              " — Interlocking stack joints accommodate building movement and thermal expansion naturally."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxs(Button, { className: "bg-amber-400 hover:bg-amber-500 text-stone-950 font-bold gap-2", children: [
          "Request Unitized Quotation ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(FadeIn, { delay: 150, children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl overflow-hidden shadow-2xl border border-stone-800", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: IMG.hero,
            alt: "Unitized curtain wall manufacturers — Fine Glaze",
            className: "w-full h-[400px] object-cover"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 left-6 right-6 p-4 bg-stone-900/90 backdrop-blur-md rounded-xl border border-stone-800", children: [
          /* @__PURE__ */ jsx("p", { className: "text-amber-400 text-xs font-bold uppercase tracking-wider", children: "Unitized Curtain Wall Specs" }),
          /* @__PURE__ */ jsx("p", { className: "text-white text-sm mt-1", children: "6063-T6 Extrusions · 6mm + 12mm Argon + 6mm Low-E DGU · EPDM Gasket Seal" })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-stone-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-16", children: [
      /* @__PURE__ */ jsxs(FadeIn, { className: "mb-10", children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3", children: "Our Product Range" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-stone-900", children: "Curtain Wall Systems We Manufacture & Install" })
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
                alt: `${current.title} — Curtain wall manufacturers Fine Glaze`,
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
                /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-wider text-stone-400 mb-1", children: "Frame" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-stone-800", children: current.glass })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-stone-50 p-3", children: [
                /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-wider text-stone-400 mb-1", children: "Wind Load" }),
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
              "Request Quote for ",
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
        /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3", children: "Landmark Portfolio" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-4xl font-bold text-stone-900", children: "Pune and Mumbai Curtain Wall Projects" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-sm max-w-2xl mx-auto mt-2", children: "From high-rise IT hubs in Pune to commercial headquarters in BKC & Vikhroli, Mumbai — examine our completed projects." })
      ] }),
      /* @__PURE__ */ jsx(FadeIn, { delay: 100, children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [
        {
          name: "Embassy 247",
          location: "Vikhroli, Mumbai",
          tech: "Unitized Glass Curtain Wall",
          img: IMG.hero,
          desc: "Commercial tower facade featuring unitized DGU glass panels and integrated aluminium louvers."
        },
        {
          name: "LTIMindtree Mensa Campus",
          location: "Mahape, Navi Mumbai",
          tech: "Structural Glazing & Curtain Wall",
          img: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1)-elementor-io-optimized.webp",
          desc: "Corporate campus envelope engineered for acoustic privacy and high solar heat rejection."
        },
        {
          name: "Pune International Airport",
          location: "Lohegaon, Pune",
          tech: "Spider Glazing & Curtain Wall",
          img: "/Puneairport.webp",
          desc: "High-span terminal entrance curtain wall with point-fixed spider fittings and toughened laminated glass."
        }
      ].map((proj) => /* @__PURE__ */ jsxs("div", { className: "group bg-stone-50 rounded-xl overflow-hidden border border-stone-200 hover:shadow-lg transition-all duration-300", children: [
        /* @__PURE__ */ jsxs("div", { className: "h-48 overflow-hidden relative", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: proj.img,
              alt: `${proj.name} — Curtain wall manufacturers Pune Mumbai`,
              className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute top-3 left-3 bg-stone-900/80 text-amber-400 text-xs font-bold px-2.5 py-1 rounded", children: proj.location })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-stone-900 group-hover:text-amber-600 transition-colors", children: proj.name }),
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-amber-700 mt-0.5 mb-2", children: proj.tech }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-500 leading-relaxed mb-4", children: proj.desc }),
          /* @__PURE__ */ jsxs(Link, { to: "/portfolio", className: "text-xs font-bold text-stone-900 inline-flex items-center gap-1 hover:gap-2 transition-all", children: [
            "View Project ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 12 })
          ] })
        ] })
      ] }, proj.name)) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-stone-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-16 max-w-4xl", children: [
      /* @__PURE__ */ jsxs(FadeIn, { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3", children: "Cost & Rate Breakdown" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-stone-900 mb-2", children: "Curtain Wall Cost Per Sq Ft in India (2026 Guide)" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-sm max-w-xl mx-auto", children: "Transparent rate comparison based on project complexity, glass specifications, and installation methods across Maharashtra." })
      ] }),
      /* @__PURE__ */ jsxs(FadeIn, { delay: 100, children: [
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-8", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-stone-900 text-white", children: [
            /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6 text-xs font-bold uppercase tracking-wider", children: "System Type" }),
            /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6 text-xs font-bold uppercase tracking-wider", children: "Specifications" }),
            /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-right", children: "Curtain Wall Cost (₹/sq ft)" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-stone-100 text-sm", children: [
            { system: "Unitized Curtain Wall", glass: "Factory pre-assembled 6063-T6, DGU Low-E, EPDM", price: "₹650 – ₹1,200" },
            { system: "Stick Curtain Wall System", glass: "On-site assembled mullions, 6mm / DGU glass", price: "₹350 – ₹550" },
            { system: "Semi-Unitized System", glass: "Pre-glazed shop units with site-fixed frames", price: "₹500 – ₹900" },
            { system: "Spider Point-Fixed System", glass: "SS 316 fittings with laminated toughened glass", price: "₹800 – ₹1,500" }
          ].map((row) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-stone-50 transition-colors", children: [
            /* @__PURE__ */ jsx("td", { className: "py-4 px-6 font-bold text-stone-900", children: row.system }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-6 text-stone-500 text-xs", children: row.glass }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-6 text-right font-bold text-amber-700", children: row.price })
          ] }, row.system)) })
        ] }) }) }),
        /* @__PURE__ */ jsxs("p", { className: "text-center text-xs text-stone-400", children: [
          "Note: Rates include materials, structural silicone, and installation. High-rise scaffolding (>5 floors) adds ₹30-60/sq ft. Read our detailed guide on ",
          /* @__PURE__ */ jsx(Link, { to: "/blog/curtain-wall-cost-per-sq-ft-india-2026", className: "text-amber-700 underline font-medium", children: "curtain wall cost per sq ft" }),
          "."
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-stone-900 text-white relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 md:px-16 relative z-10 max-w-4xl text-center", children: /* @__PURE__ */ jsxs(FadeIn, { children: [
      /* @__PURE__ */ jsx("span", { className: "inline-block bg-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6", children: "Get Expert Advice & Free BOQ" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-extrabold mb-6 tracking-tight", children: "Request a Quotation from Leading Curtain Wall Manufacturers" }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-300 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed", children: "Planning a commercial facade, office tower, or IT park in Pune, Mumbai, or Navi Mumbai? Receive a detailed BOQ, structural feasibility assessment, and glass specification options within 48 hours." }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10", children: [
        /* @__PURE__ */ jsxs("a", { href: "tel:+918369233566", className: "flex items-center justify-center gap-3 p-4 bg-stone-800/80 hover:bg-stone-800 rounded-xl border border-stone-700 transition-colors", children: [
          /* @__PURE__ */ jsx(Phone, { size: 18, className: "text-amber-400" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold", children: "+91 83692 33566" })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "mailto:info@fineglaze.com", className: "flex items-center justify-center gap-3 p-4 bg-stone-800/80 hover:bg-stone-800 rounded-xl border border-stone-700 transition-colors", children: [
          /* @__PURE__ */ jsx(Mail, { size: 18, className: "text-amber-400" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold", children: "info@fineglaze.com" })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "flex items-center justify-center gap-3 p-4 bg-amber-400 hover:bg-amber-500 text-stone-950 font-bold rounded-xl transition-colors", children: [
          /* @__PURE__ */ jsx(FileText, { size: 18 }),
          /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Submit Project BOQ" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-stone-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-16 max-w-3xl", children: [
      /* @__PURE__ */ jsxs(FadeIn, { className: "mb-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-stone-900", children: "Curtain Wall Manufacturers FAQ" })
      ] }),
      /* @__PURE__ */ jsx(FadeIn, { delay: 100, children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "Who are the leading curtain wall manufacturers in Pune and Mumbai?",
            a: "Fine Glaze is a premier curtain wall manufacturer in Pune & Mumbai, providing complete in-house design, CNC aluminium fabrication, and certified installation for commercial towers, IT parks, and high-rise developments."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "What is the advantage of a unitized curtain wall system?",
            a: "Unitized curtain wall systems are factory-assembled and pre-glazed in controlled indoor conditions. This offers 40% faster on-site erection, superior quality control, and excellent wind load resistance for high-rise buildings."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "What is the typical curtain wall cost per sq ft in India?",
            a: "Stick curtain wall systems range from ₹350–₹550/sq ft, unitized curtain wall systems range from ₹650–₹1,200/sq ft, and point-fixed spider glazing systems cost ₹800–₹1,500/sq ft based on glass specifications and building height."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "How do I request a quotation for a commercial curtain wall project?",
            a: "You can request a quotation by uploading your project drawings or BOQ on our contact page, calling +91 8369233566, or emailing info@fineglaze.com. We provide comprehensive estimates within 48 hours."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "Do you install structural glazing and ACP cladding alongside curtain walls?",
            a: "Yes, Fine Glaze offers complete building envelope solutions including structural glazing, ACP aluminium cladding, glass railings, and glass skylights."
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-stone-900 py-12", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 md:px-16", children: /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-10 md:gap-16", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4", children: "Key Service Areas" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-x-6 gap-y-2", children: ["Pune", "Mumbai BKC", "Navi Mumbai", "Thane", "Nashik", "Hinjewadi", "Kharadi"].map((city) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(MapPin, { size: 11, className: "text-amber-500" }),
          /* @__PURE__ */ jsx("span", { className: "text-white/60 text-sm", children: city })
        ] }, city)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4", children: "Explore Related Facade Services" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-x-6 gap-y-1.5", children: [
          { title: "Structural Glazing", href: "/structural-glazing" },
          { title: "ACP Aluminium Cladding", href: "/acp-aluminium-cladding" },
          { title: "Glass Railings", href: "/glass-railings" },
          { title: "Glass Partitions", href: "/glass-partitions" },
          { title: "Facade Maintenance AMC", href: "/maintenance-services" },
          { title: "All Facade Services →", href: "/services" }
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
  CurtainWall as default
};
