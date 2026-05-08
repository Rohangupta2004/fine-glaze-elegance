import { useParams, Navigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ArrowRight, Building2, ShieldCheck, Clock, Award, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";

// ==========================================
// 1. THE MASSIVE LOCATION TRAP
// ==========================================
const microLocations: Record<string, { name: string; city: string; image: string }> = {
  // PUNE HUBS
  "pune": { name: "Pune", city: "Pune", image: "/Puneairport.webp" },
  "hinjewadi": { name: "Hinjewadi IT Park", city: "Pune", image: "/Puneairport.webp" },
  "kharadi": { name: "Kharadi", city: "Pune", image: "/Puneairport.webp" },
  "baner": { name: "Baner", city: "Pune", image: "/Puneairport.webp" },
  "wakad": { name: "Wakad", city: "Pune", image: "/Puneairport.webp" },
  "viman-nagar": { name: "Viman Nagar", city: "Pune", image: "/Puneairport.webp" },
  "magarpatta": { name: "Magarpatta City", city: "Pune", image: "/Puneairport.webp" },
  "hadapsar": { name: "Hadapsar", city: "Pune", image: "/Puneairport.webp" },
  "pimpri": { name: "Pimpri", city: "Pune", image: "/Puneairport.webp" },
  "chinchwad": { name: "Chinchwad", city: "Pune", image: "/Puneairport.webp" },
  "kalyani-nagar": { name: "Kalyani Nagar", city: "Pune", image: "/Puneairport.webp" },
  "koregaon-park": { name: "Koregaon Park", city: "Pune", image: "/Puneairport.webp" },
  "aundh": { name: "Aundh", city: "Pune", image: "/Puneairport.webp" },
  "balewadi": { name: "Balewadi", city: "Pune", image: "/Puneairport.webp" },

  // MUMBAI HUBS
  "mumbai": { name: "Mumbai", city: "Mumbai", image: "/Embassy.webp" },
  "bkc": { name: "BKC (Bandra Kurla Complex)", city: "Mumbai", image: "/Embassy.webp" },
  "andheri": { name: "Andheri", city: "Mumbai", image: "/Embassy.webp" },
  "powai": { name: "Powai", city: "Mumbai", image: "/Embassy.webp" },
  "lower-parel": { name: "Lower Parel", city: "Mumbai", image: "/Embassy.webp" },
  "vikhroli": { name: "Vikhroli", city: "Mumbai", image: "/Embassy.webp" },
  "goregaon": { name: "Goregaon", city: "Mumbai", image: "/Embassy.webp" },
  "worli": { name: "Worli", city: "Mumbai", image: "/Embassy.webp" },
  "byculla": { name: "Byculla", city: "Mumbai", image: "/Salsette27.webp" },
  "malad": { name: "Malad", city: "Mumbai", image: "/Embassy.webp" },
  "borivali": { name: "Borivali", city: "Mumbai", image: "/Embassy.webp" },
  "dadar": { name: "Dadar", city: "Mumbai", image: "/Embassy.webp" },
  "nariman-point": { name: "Nariman Point", city: "Mumbai", image: "/Embassy.webp" },

  // NAVI MUMBAI & THANE HUBS
  "navi-mumbai": { name: "Navi Mumbai", city: "Navi Mumbai", image: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp" },
  "vashi": { name: "Vashi", city: "Navi Mumbai", image: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp" },
  "mahape": { name: "Mahape", city: "Navi Mumbai", image: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp" },
  "airoli": { name: "Airoli", city: "Navi Mumbai", image: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp" },
  "belapur": { name: "CBD Belapur", city: "Navi Mumbai", image: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp" },
  "kharghar": { name: "Kharghar", city: "Navi Mumbai", image: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp" },
  "panvel": { name: "Panvel", city: "Navi Mumbai", image: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp" },
  "thane": { name: "Thane", city: "Thane", image: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp" },
};

// ==========================================
// 2. THE MASSIVE SERVICE/KEYWORD TRAP
// ==========================================
const serviceKeywords: Record<string, { label: string; desc: string }> = {
  "commercial-construction": { 
    label: "Commercial Construction Facades", 
    desc: "high-performance facade engineering for new commercial construction and high-rise developments" 
  },
  "structural-glazing": { 
    label: "Structural Glazing", 
    desc: "premium 2-side and 4-side structural glazing solutions for modern corporate towers" 
  },
  "curtain-wall": { 
    label: "Curtain Wall Systems", 
    desc: "unitized and semi-unitized glass curtain walls engineered for aggressive wind loads" 
  },
  "acp-cladding": { 
    label: "ACP Cladding", 
    desc: "fire-retardant Aluminium Composite Panel (ACP) cladding for exterior building elevations" 
  },
  "glass-facade": { 
    label: "Glass Facade Systems", 
    desc: "energy-efficient DGU and Low-E glass facade installations" 
  },
  "aluminium-fabrication": { 
    label: "Commercial Aluminium Fabrication", 
    desc: "heavy-duty commercial aluminium doors, windows, and structural framing" 
  },
  "facade-maintenance": { 
    label: "Facade Maintenance & Repair", 
    desc: "expert glass replacement, silicone sealant repair, and facade AMC services" 
  },
  "glass-railing": { 
    label: "Frameless Glass Railings", 
    desc: "heavy-duty toughened glass balustrades and railings for commercial spaces" 
  },
  "spider-glazing": { 
    label: "Spider Glazing", 
    desc: "architectural point-fixed spider glazing for grand lobbies and atriums" 
  },
  "unitized-glazing": { 
    label: "Unitized Glazing", 
    desc: "factory-assembled unitized glazing panels for rapid high-rise installation" 
  },
  "facade-contractor": { 
    label: "Commercial Facade Contractor", 
    desc: "comprehensive, end-to-end commercial facade contracting and execution" 
  }
};

const defaultServicesList = [
  "Unitized & Stick System Curtain Walls",
  "2-Side & 4-Side Structural Glazing",
  "Fire-Rated ACP Cladding",
  "Frameless Glass Railings",
  "Skylights & Glass Canopies",
  "Aluminium Doors & Louvers"
];

export default function CityLanding() {
  // Capture the URL parameter (e.g., "commercial-construction-bkc")
  const { city: slug } = useParams<{ city: string }>();
  
  if (!slug) return <Navigate to="/services" replace />;

  const lowerSlug = slug.toLowerCase();
  let matchedLocation = null;
  let matchedServiceKey = "facade-contractor"; // Fallback default

  // Parse Location from URL
  for (const locKey of Object.keys(microLocations)) {
    if (lowerSlug.includes(locKey)) {
      matchedLocation = microLocations[locKey];
      break; 
    }
  }

  // Parse Service from URL
  for (const srvKey of Object.keys(serviceKeywords)) {
    if (lowerSlug.includes(srvKey)) {
      matchedServiceKey = srvKey;
      break;
    }
  }

  // If no location matched at all, redirect to services page so we don't show a broken page
  if (!matchedLocation) return <Navigate to="/services" replace />;

  const serviceData = serviceKeywords[matchedServiceKey];

  // Dynamic SEO Generation
  const dynamicMetaTitle = `Top ${serviceData.label} in ${matchedLocation.name} | Fine Glaze`;
  const dynamicDescription = `Looking for ${serviceData.label} in ${matchedLocation.name}? Fine Glaze delivers ${serviceData.desc} across ${matchedLocation.city}. Call +91 8369233566 for a site consultation.`;
  const dynamicKeywords = `${serviceData.label} ${matchedLocation.name}, ${serviceData.label} ${matchedLocation.city}, commercial construction ${matchedLocation.name}, glass facade contractors ${matchedLocation.name}, Fine Glaze`;

  return (
    <Layout>
      <SEO
        title={dynamicMetaTitle}
        description={dynamicDescription}
        canonical={`https://fineglaze.com/facade-contractor/${slug}`}
        keywords={dynamicKeywords}
        ogImage={`https://fineglaze.com${matchedLocation.image}`}
      />

      {/* HERO SECTION */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900" />
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url('${matchedLocation.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="flex items-center gap-2 text-amber-400 text-sm font-bold mb-4 uppercase tracking-wider">
            <MapPin size={16} /> {matchedLocation.name}, {matchedLocation.city}
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight capitalize">
            Expert <span className="text-amber-500">{serviceData.label}</span> in {matchedLocation.name}
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
            Fine Glaze is the most trusted engineering partner for architects and developers requiring <strong>{serviceData.desc}</strong> in the {matchedLocation.name} region.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg">
                Get a Free Quote <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <a href="tel:+918369233566">
              <Button size="lg" variant="outline" className="border-white/40 text-white bg-white/10 hover:bg-white/20 hover:text-white px-8 py-6 gap-2 text-lg font-bold">
                <Phone size={18} /> Call +91 8369233566
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              Why Execute Your {matchedLocation.name} Project With Us?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Commercial construction in <strong>{matchedLocation.city}</strong> demands precision engineering, aggressive timelines, and strict adherence to safety codes. 
              Our localized fabrication capabilities and experienced execution teams ensure your {serviceData.label.toLowerCase()} is delivered flawlessly.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Building2, label: "Landmark Projects", sub: "Successfully Delivered" },
                { icon: ShieldCheck, label: "Stringent QC", sub: "Wind & Water Tested" },
                { icon: Clock, label: "On-Time Handover", sub: "Strict Milestone Tracking" },
                { icon: Award, label: "Premium Materials", sub: "Hindalco, Dow Corning" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <stat.icon size={24} className="text-amber-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900 text-sm mb-1">{stat.label}</p>
                    <p className="text-xs text-slate-500">{stat.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={matchedLocation.image}
              alt={`${serviceData.label} executed in ${matchedLocation.name}`}
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-6">
               <p className="text-white font-bold">{matchedLocation.name} Execution Zone</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-900">
            Comprehensive Glazing Capabilities
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {defaultServicesList.map((s) => (
              <div key={s} className="flex items-center gap-3 p-5 bg-white rounded-xl border shadow-sm hover:border-amber-400 transition-colors">
                <CheckCircle2 size={20} className="text-amber-600 shrink-0" />
                <span className="font-medium text-slate-700">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-white text-center bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Unitized.webp')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Discuss Your {matchedLocation.name} Site?
          </h2>
          <p className="text-slate-300 mb-10 text-lg">
            Connect directly with our engineering team for a free site evaluation, wind-load consultation, and detailed Bill of Quantities (BOQ).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-7 text-lg font-bold w-full sm:w-auto">
                Request a Consultation
              </Button>
            </Link>
            <a href="tel:+918369233566">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-slate-900 px-10 py-7 gap-3 text-lg font-bold w-full sm:w-auto transition-colors">
                <Phone size={20} /> Dial +91 8369233566
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
      }
