import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { p as projectsData, a as useProjects, L as Layout, S as SEO, c as cn, C as CTASection } from "../main.mjs";
import { Link } from "react-router-dom";
import { MapPin, Calendar, User, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { u as useScrollAnimation } from "./useScrollAnimation-BUkRNC2S.js";
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
const staticProjects = Object.entries(projectsData).map(([slug, p]) => ({
  slug,
  ...p
}));
const TABS = [
  { id: "all", label: "All" },
  { id: "corporate", label: "Corporate" },
  { id: "residential", label: "Residential" },
  { id: "award", label: "Award Winning" }
];
const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Fine Glaze Project Portfolio",
  description: "Landmark facade projects delivered across Maharashtra — curtain walls, structural glazing, ACP cladding, and glass railings.",
  url: "https://fineglaze.com/portfolio",
  provider: {
    "@type": "LocalBusiness",
    name: "Fine Glaze",
    url: "https://fineglaze.com",
    telephone: "+91-8369233566",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 1 & 2, Jagdamba Bhawan Marg, Near Sunshine Hills, Undri",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411060",
      addressCountry: "IN"
    }
  },
  hasPart: staticProjects.map((p) => ({
    "@type": "CreativeWork",
    name: p.title,
    description: p.scope,
    locationCreated: { "@type": "Place", name: p.location },
    dateCreated: p.year,
    creator: { "@type": "Organization", name: "Fine Glaze" },
    url: `https://fineglaze.com/project/${p.slug}`,
    image: `https://fineglaze.com${p.image}`,
    genre: p.category === "corporate" ? "Commercial Facade" : p.category === "residential" ? "Residential Facade" : "Award-Winning Facade"
  }))
};
function ShowcaseProject({
  p,
  index,
  reversed
}) {
  const num = String(index + 1).padStart(2, "0");
  return /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsxs(
    Link,
    {
      to: `/project/${p.slug}`,
      className: cn(
        "group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white border border-stone-200 hover:border-amber-300 transition-all duration-300 overflow-hidden"
      ),
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "relative h-[240px] sm:h-[300px] lg:h-[400px] overflow-hidden",
              reversed && "lg:order-2"
            ),
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: p.image,
                  alt: p.title,
                  className: "w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700",
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" }),
              p.isAwardWinner && /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 bg-amber-600 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1", children: "Award Winner" }),
              /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 right-4 lg:bottom-6 lg:right-6", children: /* @__PURE__ */ jsx("span", { className: "text-white/15 text-6xl lg:text-8xl font-black leading-none", children: num }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "p-6 sm:p-8 lg:p-10 flex flex-col justify-center",
              reversed && "lg:order-1"
            ),
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsx("span", { className: "text-amber-700 text-xs font-bold tracking-[0.2em] uppercase", children: p.category === "award" ? "Award Winner" : p.category === "corporate" ? "Corporate" : "Residential" }),
                /* @__PURE__ */ jsx("span", { className: "w-8 h-px bg-stone-300" }),
                /* @__PURE__ */ jsx("span", { className: "text-stone-400 text-xs font-bold", children: num })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900 leading-tight mb-4 group-hover:text-amber-700 transition-colors", children: p.title }),
              /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-sm leading-relaxed mb-6 line-clamp-3", children: p.scope }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 mb-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-stone-400 text-xs", children: [
                  /* @__PURE__ */ jsx(MapPin, { size: 13, className: "text-amber-600 shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: p.location })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-stone-400 text-xs", children: [
                  /* @__PURE__ */ jsx(Calendar, { size: 13, className: "text-amber-600 shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: p.year })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-stone-400 text-xs col-span-2", children: [
                  /* @__PURE__ */ jsx(User, { size: 13, className: "text-amber-600 shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: p.client })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-stone-800 font-semibold text-sm group-hover:text-amber-700 group-hover:gap-3 transition-all", children: [
                "View Project ",
                /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
              ] })
            ]
          }
        )
      ]
    }
  ) });
}
function CompactCard({ p, index }) {
  const num = String(index + 1).padStart(2, "0");
  return /* @__PURE__ */ jsx(FadeIn, { delay: index % 3 * 80, children: /* @__PURE__ */ jsxs(
    Link,
    {
      to: `/project/${p.slug}`,
      className: "group block bg-white border border-stone-200 hover:border-amber-300 transition-all duration-300 overflow-hidden",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-[200px] sm:h-[240px] overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: p.image,
              alt: p.title,
              className: "w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" }),
          p.isAwardWinner && /* @__PURE__ */ jsx("div", { className: "absolute top-3 left-3 bg-amber-600 text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5", children: "Award" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-3 right-3", children: /* @__PURE__ */ jsx("span", { className: "text-white/20 text-4xl font-black", children: num }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 sm:p-5", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-[10px] font-bold tracking-[0.2em] uppercase text-amber-700 mb-1.5", children: [
            p.category === "award" ? "Award Winner" : p.category === "corporate" ? "Corporate" : "Residential",
            " ",
            "· ",
            p.year
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-stone-900 leading-snug mb-2 group-hover:text-amber-700 transition-colors", children: p.title }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-stone-400 text-xs mb-2", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 11 }),
            /* @__PURE__ */ jsx("span", { children: p.location })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-xs leading-relaxed mb-3 line-clamp-2", children: p.scope }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-stone-800 font-semibold text-xs group-hover:text-amber-700 group-hover:gap-2.5 transition-all", children: [
            "View Project ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 12 })
          ] })
        ] })
      ]
    }
  ) });
}
const Portfolio = () => {
  const { projects } = useProjects();
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? projects : projects.filter(
    (p) => p.category === active || active === "award" && p.isAwardWinner
  );
  const chunks = [];
  filtered.forEach((p, i) => {
    const patternPos = i % 4;
    if (patternPos === 0) {
      const showcaseCount = Math.floor(i / 4);
      chunks.push({ type: "showcase", project: p, reversed: showcaseCount % 2 === 1, globalIdx: i });
    } else {
      const lastChunk = chunks[chunks.length - 1];
      if (lastChunk && lastChunk.type === "grid") {
        lastChunk.projects.push({ p, globalIdx: i });
      } else {
        chunks.push({ type: "grid", projects: [{ p, globalIdx: i }] });
      }
    }
  });
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Facade Projects Portfolio India | Fine Glaze Completed Projects",
        description: "Explore Fine Glaze's portfolio of landmark glass facade, ACP cladding & curtain wall projects across Pune & Mumbai — including Pune Airport, Embassy 247 & LTIMindtree.",
        canonical: "https://fineglaze.com/portfolio",
        keywords: "facade projects portfolio India, Fine Glaze projects, glass facade projects, ACP cladding projects, Pune facade projects, Mumbai facade projects",
        schema: portfolioSchema
      }
    ),
    /* @__PURE__ */ jsx(Helmet, { children: /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(portfolioSchema) }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative h-[60vh] md:h-[70vh] min-h-[400px] md:min-h-[520px] overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/Unitized.webp",
          alt: "Fine Glaze facade portfolio",
          className: "absolute inset-0 w-full h-full object-cover",
          loading: "eager",
          style: { animation: "pfZoom 22s ease-in-out infinite alternate" }
        }
      ),
      /* @__PURE__ */ jsx("style", { children: `@keyframes pfZoom { from { transform: scale(1.0); } to { transform: scale(1.06); } }` }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0",
          style: {
            background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.20) 35%, rgba(0,0,0,0.50) 65%, rgba(0,0,0,0.90) 100%)"
          }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 px-5 md:px-16 pb-8 md:pb-16", children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-400 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-3 md:mb-4", children: "Fine Glaze · Portfolio" }),
        /* @__PURE__ */ jsxs(
          "h1",
          {
            className: "font-extrabold text-white leading-tight tracking-tight",
            style: { fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" },
            children: [
              "Built at",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Landmark" }),
              " Scale."
            ]
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "mt-3 md:mt-5 text-white/60 text-sm md:text-lg max-w-lg leading-relaxed", children: "From international airports to corporate campuses — precision execution and architectural clarity." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-stone-900 py-6 md:py-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-5 md:px-16", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-stone-700", children: [
      { number: "10+", label: "Projects Completed" },
      { number: "5+", label: "Years in Facade" },
      { number: "3", label: "Cities Covered" },
      { number: "1", label: "Award Won" }
    ].map((s) => /* @__PURE__ */ jsxs("div", { className: "text-center px-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl font-bold text-white", children: s.number }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-[10px] uppercase tracking-widest mt-1", children: s.label })
    ] }, s.label)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "sticky top-16 lg:top-20 z-30 bg-white border-b border-stone-200", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-5 md:px-16 flex items-center gap-4 md:gap-8 overflow-x-auto", children: [
      TABS.map((t) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setActive(t.id),
          className: cn(
            "py-3 md:py-4 text-xs md:text-sm font-semibold tracking-wide transition-all duration-200 border-b-2 -mb-px whitespace-nowrap",
            active === t.id ? "border-stone-900 text-stone-900" : "border-transparent text-stone-400 hover:text-stone-600"
          ),
          children: t.label
        },
        t.id
      )),
      /* @__PURE__ */ jsxs("span", { className: "ml-auto text-xs text-stone-400 font-medium hidden sm:block whitespace-nowrap", children: [
        filtered.length,
        " ",
        filtered.length === 1 ? "project" : "projects"
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-8 md:py-14 bg-stone-100", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-5 md:px-16", children: filtered.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-center text-stone-400 py-20", children: "No projects in this category yet." }) : /* @__PURE__ */ jsx("div", { className: "space-y-5 md:space-y-6", children: chunks.map((chunk, ci) => {
      if (chunk.type === "showcase") {
        return /* @__PURE__ */ jsx(
          ShowcaseProject,
          {
            p: chunk.project,
            index: chunk.globalIdx,
            reversed: chunk.reversed
          },
          `showcase-${ci}`
        );
      }
      return /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: chunk.projects.map(({ p, globalIdx }) => /* @__PURE__ */ jsx(CompactCard, { p, index: globalIdx }, p.id)) }, `grid-${ci}`);
    }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-10 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-5 md:px-16 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-stone-400 text-xs font-bold tracking-[0.3em] uppercase mb-6", children: "Trusted By" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center justify-center gap-x-8 md:gap-x-10 gap-y-3", children: [
        "Embassy REIT",
        "LTIMindtree",
        "Leela Group",
        "Jindal Stainless",
        "SSG Group",
        "Nirmaann Developers"
      ].map((name) => /* @__PURE__ */ jsx(
        "span",
        {
          className: "text-stone-300 text-base md:text-xl font-bold tracking-wide",
          children: name
        },
        name
      )) })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
};
export {
  Portfolio as default
};
