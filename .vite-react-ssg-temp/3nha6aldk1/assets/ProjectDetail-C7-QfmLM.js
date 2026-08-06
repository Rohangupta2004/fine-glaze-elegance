import { jsx, jsxs } from "react/jsx-runtime";
import { useParams, Navigate, Link } from "react-router-dom";
import { b as useProject, L as Layout, S as SEO, B as Button } from "../main.mjs";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, MapPin, Calendar, Building2, CheckCircle2, ArrowRight, Phone } from "lucide-react";
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
import "@vercel/speed-insights";
const ProjectDetail = () => {
  const { slug } = useParams();
  const { project, loading } = useProject(slug);
  if (loading) {
    return /* @__PURE__ */ jsx(Layout, { darkHero: true, children: /* @__PURE__ */ jsx("div", { className: "min-h-[60vh] flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" }) }) });
  }
  if (!project) {
    return /* @__PURE__ */ jsx(Navigate, { to: "/portfolio", replace: true });
  }
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "url": `https://fineglaze.com/project/${slug}`,
    "image": {
      "@type": "ImageObject",
      "url": `https://fineglaze.com${project.image}`,
      "name": project.title,
      "description": `${project.scope} — ${project.location}`
    },
    "dateCreated": project.year,
    "genre": project.category === "corporate" ? "Commercial Facade" : "Residential Facade",
    "locationCreated": {
      "@type": "Place",
      "name": project.location,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": project.location.split(",")[0].trim(),
        "addressCountry": "IN"
      }
    },
    "creator": {
      "@type": "Organization",
      "name": "Fine Glaze",
      "url": "https://fineglaze.com",
      "telephone": "+91-8369233566",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop No. 1 & 2, Jagdamba Bhawan Marg, Near Sunshine Hills, Undri",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411060",
        "addressCountry": "IN"
      }
    },
    "client": project.client,
    "about": project.scope,
    ...project.isAwardWinner && project.award ? {
      "award": project.award
    } : {}
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com/" },
      { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://fineglaze.com/portfolio" },
      { "@type": "ListItem", "position": 3, "name": project.title, "item": `https://fineglaze.com/project/${slug}` }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: `${project.title} – ${project.scope} | Fine Glaze`,
        description: `${project.description.slice(0, 155)}...`,
        canonical: `https://fineglaze.com/project/${slug}`,
        keywords: `${project.title}, ${project.scope}, facade contractor ${project.location}, ${project.category} facade India`,
        schema: breadcrumbSchema
      }
    ),
    /* @__PURE__ */ jsx(Helmet, { children: /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(projectSchema) }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative h-[55vh] min-h-[400px] overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: project.image,
          alt: `${project.title} – ${project.scope}`,
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-8 left-0 right-0 container mx-auto px-4", children: /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/portfolio",
          className: "inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { size: 16 }),
            "All Projects"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-10", children: [
        project.isAwardWinner && /* @__PURE__ */ jsxs("span", { className: "inline-block mb-3 text-xs px-3 py-1 rounded-full bg-amber-400 text-black font-semibold", children: [
          "🏆 ",
          project.award ?? "Award Winner"
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-2xl md:text-4xl font-extrabold text-white leading-tight mb-3", children: project.title }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 text-white/80 text-sm", children: [
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 14 }),
            project.location
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Calendar, { size: 14 }),
            project.year
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Building2, { size: 14 }),
            project.client
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "container mx-auto px-4 py-16 max-w-5xl", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-10", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20", children: project.scope }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: "Project Overview" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed text-base", children: project.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-muted/50 border border-border", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-3 text-foreground", children: "The Challenge" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: project.challenge })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-primary/5 border border-primary/20", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-3 text-primary", children: "Outcome" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: project.outcome })
        ] }),
        project.features && project.features.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-xl mb-5", children: "Scope & Features" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: project.features.map((f, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { size: 18, className: "text-primary mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: f })
          ] }, i)) })
        ] }),
        project.gallery && project.gallery.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-xl mb-5", children: "Project Gallery" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3", children: project.gallery.map((img, i) => /* @__PURE__ */ jsx(
            "div",
            {
              className: "relative overflow-hidden rounded-xl aspect-[4/3] bg-muted",
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: img,
                  alt: `${project.title} – site photo ${i + 1}`,
                  className: "w-full h-full object-cover transition-transform duration-500 hover:scale-105",
                  loading: "lazy"
                }
              )
            },
            i
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 space-y-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-base", children: "Project Details" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Client" }),
              /* @__PURE__ */ jsx("span", { className: "font-medium text-right", children: project.client })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Location" }),
              /* @__PURE__ */ jsx("span", { className: "font-medium text-right", children: project.location })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Year" }),
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: project.year })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Scope" }),
              /* @__PURE__ */ jsx("span", { className: "font-medium text-right", children: project.scope })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Category" }),
              /* @__PURE__ */ jsx("span", { className: "font-medium capitalize", children: project.category })
            ] }),
            project.isAwardWinner && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start gap-4 pt-2 border-t border-border", children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Award" }),
              /* @__PURE__ */ jsx("span", { className: "font-medium text-amber-600 text-right text-xs", children: project.award })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "rounded-2xl p-6 space-y-4 text-white",
            style: {
              background: "linear-gradient(135deg, hsl(25 80% 25%) 0%, hsl(20 75% 18%) 100%)"
            },
            children: [
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-base", children: "Have a similar project?" }),
              /* @__PURE__ */ jsx("p", { className: "text-white/75 text-sm leading-relaxed", children: "Get a free site visit and detailed quotation for your facade project." }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    asChild: true,
                    size: "sm",
                    className: "w-full bg-white text-primary hover:bg-white/90 font-semibold",
                    children: /* @__PURE__ */ jsxs(
                      "a",
                      {
                        href: "https://wa.me/918369233566?text=Hello%20Fine%20Glaze%2C%20I%20saw%20your%20project%20portfolio%20and%20would%20like%20to%20discuss%20a%20similar%20facade%20project.",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                          "Get Free Quote",
                          /* @__PURE__ */ jsx(ArrowRight, { size: 14, className: "ml-1.5" })
                        ]
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    asChild: true,
                    size: "sm",
                    variant: "outline",
                    className: "w-full border-white/30 text-white hover:bg-white/10",
                    children: /* @__PURE__ */ jsxs("a", { href: "tel:+918369233566", children: [
                      /* @__PURE__ */ jsx(Phone, { size: 13, className: "mr-1.5" }),
                      "+91 8369 233 566"
                    ] })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/portfolio",
            className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors",
            children: [
              /* @__PURE__ */ jsx(ArrowLeft, { size: 14 }),
              "Back to all projects"
            ]
          }
        )
      ] })
    ] }) })
  ] });
};
export {
  ProjectDetail as default
};
