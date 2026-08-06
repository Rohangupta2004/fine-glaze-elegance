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
  hero: "/smart-glass.webp",
  office: "/office-partition.webp",
  acoustic: "/smart-glass.webp",
  smart: "/smart-glass.webp",
  shower: "/shower-enclosure.webp",
  process: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?fm=jpg&q=85&w=1400&auto=format&fit=crop"
};
const SYSTEMS = [
  {
    num: "01",
    title: "Frameless Office Partitions",
    desc: "Floor-to-ceiling toughened glass panels with minimal hardware. Creates transparent, open-plan workspaces while providing separation for meeting rooms, cabins, and focus areas.",
    glass: "10–12mm toughened",
    wind: "Frameless patch fittings",
    bestFor: "Offices, co-working spaces",
    price: "₹350 – ₹600 /sq ft",
    img: "office"
  },
  {
    num: "02",
    title: "Acoustic Double-Glazed Walls",
    desc: "Two glass panels with an air gap for superior sound insulation up to 42dB. Ideal for boardrooms, HR offices, and conference rooms where speech privacy is critical.",
    glass: "6+12+6mm DGU",
    wind: "Up to 42dB STC rating",
    bestFor: "Boardrooms, conference rooms",
    price: "₹600 – ₹1,000 /sq ft",
    img: "acoustic"
  },
  {
    num: "03",
    title: "Switchable Smart Glass",
    desc: "PDLC glass that switches from transparent to opaque with an electric current. Instant privacy for glass-walled meeting rooms without blinds or curtains. App and switch control available.",
    glass: "Smart PDLC laminated",
    wind: "Electric privacy switch",
    bestFor: "CEO cabins, meeting rooms",
    price: "₹1,200 – ₹2,500 /sq ft",
    img: "smart"
  },
  {
    num: "04",
    title: "Shower Enclosures",
    desc: "Luxury frameless shower enclosures in sliding, hinged, and walk-in designs. 8–12mm toughened glass with anti-limescale nano-coating that keeps glass sparkling clean with minimal effort.",
    glass: "8–12mm toughened",
    wind: "Nano anti-limescale coat",
    bestFor: "Premium homes, hotels",
    price: "₹15,000 – ₹45,000 /unit",
    img: "shower"
  }
];
const STEPS = [
  { num: "01", title: "Space Planning", desc: "Understand layout, privacy needs & acoustic requirements" },
  { num: "02", title: "Design", desc: "Glass type, hardware finish & door configuration approval" },
  { num: "03", title: "Fabrication", desc: "Glass tempering, hardware sourcing & quality checks" },
  { num: "04", title: "Installation", desc: "Precision fitting with plumb-level alignment & sealing" }
];
function GlassPartitions() {
  const [activeSystem, setActiveSystem] = useState(0);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Glass Partitions & Shower Enclosures",
    serviceType: "Glass Partition & Shower Enclosure Installation",
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
    description: "Frameless glass partitions for offices and luxury shower enclosures for homes. Single-glazed, double-glazed & smart glass options. 8–12mm toughened glass."
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "Glass Partitions & Shower Enclosures", item: "https://fineglaze.com/glass-partitions" }
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are glass partitions soundproof?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Single-glazed glass partitions provide basic visual separation but limited sound insulation (~28dB). For speech privacy, we recommend double-glazed (DGU) glass walls that achieve up to 42dB STC rating — sufficient for boardrooms and HR offices."
        }
      },
      {
        "@type": "Question",
        name: "What is switchable smart glass?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Smart glass uses PDLC (Polymer Dispersed Liquid Crystal) technology. When electric current is applied, the glass turns transparent. When switched off, it becomes frosted/opaque — providing instant privacy without blinds. Controlled via wall switch or smartphone app."
        }
      },
      {
        "@type": "Question",
        name: "How much do glass partitions cost per sq ft?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Frameless single-glazed partitions start at ₹350/sq ft. Double-glazed acoustic walls range from ₹600–₹1,000/sq ft. Switchable smart glass costs ₹1,200–₹2,500/sq ft. Shower enclosures are priced per unit at ₹15,000–₹45,000."
        }
      }
    ]
  };
  const current = SYSTEMS[activeSystem];
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Glass Partition Contractor Pune & Mumbai | Office Glass Partitions - Fine Glaze",
        description: "Top glass partition contractor in Pune & Mumbai. Frameless office glass partitions, acoustic DGU partitions, smart glass, and luxury shower enclosures.",
        canonical: "https://fineglaze.com/glass-partitions",
        keywords: "glass partition contractor, office glass partitions, frameless glass partition, DGU glass partition, acoustic glass partition",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative h-screen overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: IMG.hero,
          alt: "Frameless glass partition — Fine Glaze",
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
              "Glass Partitions",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "& Enclosures" }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { style: { fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 600, color: "rgba(255,255,255,0.85)" }, children: "Pune · Mumbai." })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "mt-6 text-white/70 text-base md:text-lg max-w-lg leading-relaxed animate-fade-in-up",
            style: { animationDelay: "0.2s" },
            children: "Office glass partitions, acoustic meeting-room walls and toughened-glass shower enclosures designed and installed across Pune and Mumbai."
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
      /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-4", children: "Why Glass Interiors" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-bold text-stone-900 leading-snug mb-5", children: [
        "Open, light-filled spaces without losing privacy —",
        "  ",
        /* @__PURE__ */ jsx("span", { className: "text-stone-400", children: "toughened glass that divides space without blocking it." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-[15px] md:text-base leading-relaxed", children: "Glass partitions create visually open workspaces while providing acoustic separation. Available in single-glazed, double-glazed (for sound insulation up to 42dB), and switchable smart glass that turns opaque at the touch of a button. Our shower enclosures use 8–12mm toughened glass with anti-limescale nano-coating." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-stone-900 py-10", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 md:px-16", children: /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-stone-700", children: [
      { number: "42dB", label: "Sound Insulation (DGU)" },
      { number: "5+", label: "Years Experience" },
      { number: "12mm", label: "Max Glass Thickness" },
      { number: "0", label: "Safety Incidents" }
    ].map((s) => /* @__PURE__ */ jsxs("div", { className: "text-center px-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-2xl md:text-3xl font-bold text-white", children: s.number }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-[11px] uppercase tracking-widest mt-1", children: s.label })
    ] }, s.label)) }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-stone-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-16", children: [
      /* @__PURE__ */ jsxs(FadeIn, { className: "mb-10", children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3", children: "Our Systems" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-stone-900", children: "Glass Partition & Enclosure Systems We Install" })
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
                /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-wider text-stone-400 mb-1", children: "Glass" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-stone-800", children: current.glass })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-stone-50 p-3", children: [
                /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-wider text-stone-400 mb-1", children: "Feature" }),
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
          title: "Safety Glass",
          desc: "All panels are IS 2553 certified toughened glass. Shower glass has anti-shatter lamination options."
        },
        {
          icon: Clock,
          title: "Quick Install",
          desc: "Most office partition projects completed in 5–10 days. Shower enclosures installed in 1–2 days."
        },
        {
          icon: Award,
          title: "Premium Hardware",
          desc: "European patch fittings and door closers. Brushed SS, matt black & champagne gold finishes."
        },
        {
          icon: Wrench,
          title: "Easy Maintenance",
          desc: "Nano-coated shower glass repels water and limescale. Office partitions need just regular glass cleaner."
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
          alt: "Fine Glaze glass partition installation",
          className: "w-full h-full object-cover",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/40" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center text-center px-4", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-white/60 text-sm uppercase tracking-widest mb-2", children: "Our Promise" }),
        /* @__PURE__ */ jsx("p", { className: "text-white text-xl md:text-3xl font-bold max-w-xl", children: "Modern workspaces and luxury bathrooms — built with precision glass craftsmanship." })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-16 max-w-3xl", children: [
      /* @__PURE__ */ jsxs(FadeIn, { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3", children: "Pricing" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-stone-900 mb-2", children: "Glass Partition & Enclosure Cost — 2026" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-400 text-sm", children: "Indicative rates. Final cost depends on specifications & complexity. GST extra." })
      ] }),
      /* @__PURE__ */ jsxs(FadeIn, { delay: 100, children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b-2 border-stone-800", children: [
            /* @__PURE__ */ jsx("th", { className: "py-3 text-xs font-bold uppercase tracking-wider text-stone-500", children: "System" }),
            /* @__PURE__ */ jsx("th", { className: "py-3 text-xs font-bold uppercase tracking-wider text-stone-500", children: "Glass Type" }),
            /* @__PURE__ */ jsx("th", { className: "py-3 text-xs font-bold uppercase tracking-wider text-stone-500 text-right", children: "Rate / sq ft" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { className: "text-sm", children: [
            { system: "Frameless Partition", glass: "10–12mm toughened", price: "₹350 – ₹600 /sq ft" },
            { system: "Acoustic DGU Partition", glass: "6+12+6mm DGU", price: "₹600 – ₹1,000 /sq ft" },
            { system: "Smart Glass Wall", glass: "PDLC laminated", price: "₹1,200 – ₹2,500 /sq ft" },
            { system: "Shower Enclosure", glass: "8–12mm toughened", price: "₹15,000 – ₹45,000 /unit" }
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
            q: "Are glass partitions soundproof?",
            a: "Single-glazed glass partitions provide basic visual separation but limited sound insulation (~28dB). For speech privacy, we recommend double-glazed (DGU) glass walls that achieve up to 42dB STC rating — sufficient for boardrooms and HR offices."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "What is switchable smart glass?",
            a: "Smart glass uses PDLC (Polymer Dispersed Liquid Crystal) technology. When electric current is applied, the glass turns transparent. When switched off, it becomes frosted/opaque — providing instant privacy without blinds. Controlled via wall switch or smartphone app."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "How much do glass partitions cost per sq ft?",
            a: "Frameless single-glazed partitions start at ₹350/sq ft. Double-glazed acoustic walls range from ₹600–₹1,000/sq ft. Switchable smart glass costs ₹1,200–₹2,500/sq ft. Shower enclosures are priced per unit at ₹15,000–₹45,000."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "Can glass partitions have doors?",
            a: "Yes. We install frameless glass swing doors, sliding doors, and even automatic sensor doors within glass partition systems. All doors come with floor springs or patch fittings and soft-close mechanisms."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "Is the nano-coating on shower glass worth it?",
            a: "Yes. Nano-coating creates a hydrophobic surface that repels water and prevents limescale build-up. Shower glass stays cleaner for longer and requires significantly less scrubbing — especially valuable in hard-water areas like Pune and Mumbai."
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
          { title: "Glass Railings", href: "/glass-railings" },
          { title: "Structural Glazing", href: "/structural-glazing" },
          { title: "Curtain Wall Systems", href: "/curtain-wall-systems" },
          { title: "Aluminium Facade", href: "/aluminium-facade" },
          { title: "Facade AMC", href: "/maintenance-services" },
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
  GlassPartitions as default
};
