import { jsx, jsxs } from "react/jsx-runtime";
import { useParams, Navigate, Link } from "react-router-dom";
import { L as Layout, S as SEO, B as Button } from "../main.mjs";
import { MapPin, ShieldCheck, CheckCircle2 } from "lucide-react";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-b6vWRJCV.js";
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
import "@radix-ui/react-accordion";
const puneLocations = [
  "pune",
  "hinjewadi",
  "kharadi",
  "baner",
  "wakad",
  "viman-nagar",
  "magarpatta",
  "hadapsar",
  "pimpri",
  "chinchwad",
  "kalyani-nagar",
  "koregaon-park",
  "aundh",
  "balewadi"
];
const mumbaiLocations = [
  "mumbai",
  "bkc",
  "andheri",
  "powai",
  "lower-parel",
  "vikhroli",
  "goregaon",
  "worli",
  "byculla",
  "malad",
  "borivali",
  "dadar",
  "nariman-point"
];
const naviMumbaiLocations = ["navi-mumbai", "vashi", "mahape", "airoli", "belapur", "kharghar", "panvel"];
const thaneLocations = ["thane"];
const allLocations = {};
[...puneLocations, ...mumbaiLocations, ...naviMumbaiLocations, ...thaneLocations].forEach((loc) => {
  allLocations[loc] = {
    name: loc.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    parentCity: puneLocations.includes(loc) ? "pune" : mumbaiLocations.includes(loc) ? "mumbai" : naviMumbaiLocations.includes(loc) ? "navi-mumbai" : "thane",
    image: puneLocations.includes(loc) ? "/Puneairport.webp" : mumbaiLocations.includes(loc) ? "/Embassy.webp" : "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1)-elementor-io-optimized.webp"
  };
});
const serviceKeywords = {
  "structural-glazing": {
    label: "Structural Glazing",
    uniqueParagraph: "Precision-engineered flush glass facades using high-performance structural silicone bonding. Our systems eliminate visible frames for a seamless, contemporary appearance.",
    features: ["Flush Glass Aesthetics", "Wind-Load Tested", "Dow Corning Silicone", "Superior Insulation"],
    image: "/Glazing.webp"
  },
  "curtain-wall": {
    label: "Curtain Wall Systems",
    uniqueParagraph: "Advanced unitized and semi-unitized curtain wall systems for high-rise commercial towers. Factory-assembled panels reduce installation time by 40% while guaranteeing waterproof integrity.",
    features: ["Factory Assembled", "Thermal Break Tech", "EPDM Gaskets", "Rapid Installation"],
    image: "/Unitized.webp"
  },
  "acp-cladding": {
    label: "ACP Cladding",
    uniqueParagraph: "Durable and fire-retardant aluminium composite paneling for modern building elevations. FR-grade cores and PVDF coatings ensure weather-proof, safety-compliant exteriors.",
    features: ["FR-Grade Core", "PVDF Coating", "CNC Routing", "Weather Sealing"],
    image: "/Panel.webp"
  },
  "glass-railing": {
    label: "Glass Railing Systems",
    uniqueParagraph: "Modern, frameless glass railings for commercial balconies, staircases, and public spaces. Toughened safety glass with concealed hardware for a sleek, uninterrupted finish.",
    features: ["Toughened Safety Glass", "Hidden Mounting", "Corrosion Resistant", "Custom Profiles"],
    image: "/Custom railing.webp"
  },
  "facade-maintenance": {
    label: "Facade Maintenance",
    uniqueParagraph: "Comprehensive AMC services including glass replacement, sealant repair, and high-rise facade cleaning. Preventive contracts to protect your building's envelope long-term.",
    features: ["AMC Contracts", "Leakage Repair", "Glass Replacement", "High-Rise Cleaning"],
    image: "/Amc.webp"
  },
  "commercial-construction": {
    label: "Commercial Facade Construction",
    uniqueParagraph: "End-to-end facade execution for corporate offices, malls, and tech parks. Turnkey project management from design coordination to final handover.",
    features: ["Turnkey Execution", "Project Management", "Safety Compliant", "On-Time Delivery"],
    image: "/Business park.webp"
  },
  "facade-contractor": {
    label: "Facade Contracting",
    uniqueParagraph: "Leading architectural glazing and facade engineering specialists for the Maharashtra region. Trusted by developers, architects, and PMCs for complex commercial projects.",
    features: ["Expert Engineering", "On-Time Delivery", "Premium Quality", "Full Warranty"],
    image: "/Glass installation.webp"
  }
};
const cityProfiles = {
  "pune": {
    intro: "Pune's expanding IT corridors and corporate parks demand high-performance, energy-efficient facade systems built to handle extreme monsoon conditions.",
    challenges: "Heavy monsoon exposure across sprawling campuses makes waterproofing critical. Our DGU systems reduce HVAC costs, while integrated EPDM gaskets guarantee zero water ingress during Pune's rainy season.",
    faqs: [
      { q: "What facade system is best for Pune's monsoon season?", a: "Unitized curtain walls are ideal. Factory-assembled seals provide mathematically precise waterproofing, guaranteed for heavy rain regions like Pune." },
      { q: "How do your glass systems help with IT park thermal insulation?", a: "We use low-E glass and thermal-break profiles to reflect solar heat, drastically cutting electricity costs for large-scale office towers." }
    ]
  },
  "mumbai": {
    intro: "Mumbai's vertical skyline demands precision facade engineering with coastal-grade materials rated for high-rise wind loads and salt-air environments.",
    challenges: "Coastal humidity demands aggressive protection. Our systems use coastal-grade PVDF coatings, 25-micron anodization, and SS-316 grade hardware to resist salt-air corrosion at extreme heights.",
    faqs: [
      { q: "How do you prevent salt-water corrosion in Mumbai?", a: "We use specialized coastal-grade PVDF painting and heavy 25-micron anodization, with SS-316 grade hardware to prevent rusting in humid, coastal conditions." },
      { q: "Are your curtain walls tested for high-rise wind loads?", a: "Yes, our systems are engineered and tested for wind-loads exceeding 4.5kPa, ensuring maximum safety for Mumbai skyscrapers." }
    ]
  },
  "navi-mumbai": {
    intro: "As Navi Mumbai evolves into a premier corporate destination, we deliver robust facade solutions for modern office towers and large-scale industrial-to-commercial transitions.",
    challenges: "Bridging industrial durability with corporate aesthetics, our systems offer heavy-duty structural integrity for the high-growth zones of Mahape, Airoli, and Belapur.",
    faqs: [
      { q: "Do you handle industrial-to-commercial facade conversions in Navi Mumbai?", a: "Yes, we specialize in retrofitting older industrial structures with modern ACP cladding and structural glazing to meet premium corporate standards." },
      { q: "Do you work in CBD Belapur and Kharghar?", a: "Yes, we have active projects across all major Navi Mumbai nodes including Mahape, Belapur, Kharghar, and Airoli." }
    ]
  },
  "thane": {
    intro: "Thane's rapidly developing commercial corridors demand modern, durable facade systems for its growing base of office complexes and mixed-use developments.",
    challenges: "High humidity and proximity to water bodies require corrosion-resistant aluminium profiles and sealed glazing systems to protect long-term facade integrity.",
    faqs: [
      { q: "Do you execute facade projects in Thane?", a: "Yes, we handle full-scope facade projects across Thane including structural glazing, curtain walls, and ACP cladding for commercial developments." },
      { q: "What is your project turnaround for Thane commercial projects?", a: "Depending on scale, most Thane commercial facade projects are completed within 8–16 weeks with dedicated on-site supervision." }
    ]
  }
};
function CityLanding() {
  const { city: slug } = useParams();
  if (!slug) return /* @__PURE__ */ jsx(Navigate, { to: "/services", replace: true });
  const lowerSlug = slug.toLowerCase();
  const sortedLocationKeys = Object.keys(allLocations).sort((a, b) => b.length - a.length);
  const sortedServiceKeys = Object.keys(serviceKeywords).sort((a, b) => b.length - a.length);
  const matchedLocationKey = sortedLocationKeys.find((key) => lowerSlug.endsWith(key)) || "";
  const matchedServiceKey = sortedServiceKeys.find((key) => lowerSlug.startsWith(key)) || "facade-contractor";
  const matchedLocation = allLocations[matchedLocationKey];
  const serviceData = serviceKeywords[matchedServiceKey];
  if (!matchedLocation) return /* @__PURE__ */ jsx(Navigate, { to: "/services", replace: true });
  const profile = cityProfiles[matchedLocation.parentCity] || cityProfiles["pune"];
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": profile.faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://fineglaze.com/services" },
        { "@type": "ListItem", "position": 3, "name": `${serviceData.label} in ${matchedLocation.name}`, "item": `https://fineglaze.com/facade-contractor/${slug}` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Fine Glaze",
      "description": `${serviceData.label} specialists in ${matchedLocation.name}`,
      "url": `https://fineglaze.com/facade-contractor/${slug}`,
      "telephone": "+918369233566",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": matchedLocation.name,
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    }
  ];
  const relatedLocations = Object.keys(allLocations).filter((k) => allLocations[k].parentCity === matchedLocation.parentCity && k !== matchedLocationKey).slice(0, 10);
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: `${serviceData.label} in ${matchedLocation.name} | Fine Glaze`,
        description: `Expert ${serviceData.label} services in ${matchedLocation.name}, Maharashtra. ${profile.intro}`,
        canonical: `https://fineglaze.com/facade-contractor/${slug}`,
        schemas
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative pt-28 pb-20 bg-slate-900 text-white overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-30 bg-cover bg-center", style: { backgroundImage: `url('${matchedLocation.image}')` } }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-amber-400 text-sm font-bold mb-4 uppercase", children: [
          /* @__PURE__ */ jsx(MapPin, { size: 16 }),
          " ",
          matchedLocation.name
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-5xl font-bold mb-6", children: [
          serviceData.label,
          " in ",
          /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: matchedLocation.name })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl max-w-3xl border-l-4 border-amber-500 pl-4 leading-relaxed", children: profile.intro }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-8", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get Quote" }) }),
          /* @__PURE__ */ jsx("a", { href: "tel:+918369233566", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-white text-slate-900 hover:bg-white/90 font-bold", children: "Call Expert" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold mb-6", children: [
          "Expert ",
          serviceData.label,
          " in ",
          matchedLocation.name
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 p-6 rounded-xl border border-slate-100 mb-6", children: [
          /* @__PURE__ */ jsxs("h3", { className: "flex items-center gap-2 font-bold mb-2", children: [
            /* @__PURE__ */ jsx(ShieldCheck, { className: "text-amber-600" }),
            " Regional Challenges"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-sm", children: profile.challenges })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-600 mb-8", children: serviceData.uniqueParagraph }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: serviceData.features.map((f) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 p-3 bg-slate-50 rounded-lg text-xs font-bold", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 16, className: "text-amber-600" }),
          " ",
          f
        ] }, f)) })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: serviceData.image,
          alt: `${serviceData.label} in ${matchedLocation.name}`,
          className: "rounded-2xl shadow-xl object-cover h-96 w-full"
        }
      )
    ] }) }),
    relatedLocations.length > 0 && /* @__PURE__ */ jsx("section", { className: "py-16 bg-slate-50 border-t", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold mb-8", children: [
        serviceData.label,
        " — Other Locations in ",
        allLocations[matchedLocationKey].parentCity.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3", children: relatedLocations.map((key) => /* @__PURE__ */ jsx(
        Link,
        {
          to: `/facade-contractor/${matchedServiceKey}-${key}`,
          className: "px-4 py-2 bg-white border rounded-full text-xs font-bold hover:border-amber-500 transition-colors",
          children: allLocations[key].name
        },
        key
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-3xl", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold mb-10 text-center", children: [
        serviceData.label,
        " in ",
        matchedLocation.name,
        " — FAQs"
      ] }),
      /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "border rounded-xl p-2", children: profile.faqs.map((f, i) => /* @__PURE__ */ jsxs(AccordionItem, { value: `item-${i}`, children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left font-bold", children: f.q }),
        /* @__PURE__ */ jsx(AccordionContent, { children: f.a })
      ] }, i)) })
    ] }) })
  ] });
}
export {
  CityLanding as default
};
