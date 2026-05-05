import { useParams, Navigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  CheckCircle2,
  ArrowRight,
  Building2,
  ShieldCheck,
  Clock,
  Award,
} from "lucide-react";
import SEO from "@/components/SEO";

interface CityData {
  name: string;
  fullName: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  heroImage: string;
  intro: string;
  longIntro: string;
  areas: string[];
  projects: { name: string; type: string }[];
}

const cities: Record<string, CityData> = {
  pune: {
    name: "Pune",
    fullName: "Pune, Maharashtra",
    metaTitle:
      "Best Facade Contractor in Pune | Curtain Wall, Glazing & ACP – Fine Glaze",
    metaDescription:
      "Fine Glaze is Pune's #1 facade contractor for curtain wall systems, structural glazing, ACP cladding & glass railings. 10+ projects in Hinjewadi, Kharadi, Baner & more. Call +91 8369233566.",
    keywords:
      "facade contractor Pune, curtain wall Pune, structural glazing Pune, ACP cladding Pune, glass railing Pune, facade company near me Pune, glazing contractor Hinjewadi, facade Kharadi",
    heroImage: "/Puneairport.webp",
    intro:
      "Fine Glaze is Pune's most trusted facade contractor, delivering premium curtain wall, structural glazing, ACP cladding, and glass railing solutions across the city.",
    longIntro:
      "With our fabrication facility based in Pune, we offer faster turnaround times and lower logistics costs compared to Mumbai-based competitors. We've delivered landmark projects across Pune including IT parks in Hinjewadi, commercial towers in Kharadi, residential high-rises in Baner, and the iconic Pune International Airport Terminal facade.",
    areas: [
      "Hinjewadi IT Park",
      "Kharadi",
      "Baner & Balewadi",
      "Wakad",
      "Viman Nagar",
      "Magarpatta",
      "Hadapsar",
      "Pimpri-Chinchwad",
      "Koregaon Park",
      "Aundh",
    ],
    projects: [
      { name: "Pune International Airport Terminal", type: "Curtain Wall" },
      { name: "Nirmaann Estrellaa, Kharadi", type: "Structural Glazing" },
      { name: "SSG Honesty, Wakad", type: "ACP Cladding" },
    ],
  },
  mumbai: {
    name: "Mumbai",
    fullName: "Mumbai, Maharashtra",
    metaTitle:
      "Best Facade Contractor in Mumbai | Curtain Wall, Glazing & ACP – Fine Glaze",
    metaDescription:
      "Fine Glaze delivers premium facade solutions across Mumbai — BKC, Andheri, Powai, Navi Mumbai & Thane. Curtain walls, structural glazing, ACP cladding for high-rises. Call +91 8369233566.",
    keywords:
      "facade contractor Mumbai, curtain wall Mumbai, structural glazing BKC, ACP cladding Andheri, glass facade Navi Mumbai, facade company near me Mumbai, glazing contractor Powai",
    heroImage: "/Embassy.webp",
    intro:
      "Fine Glaze is a leading facade contractor serving Mumbai's skyline with world-class curtain wall, structural glazing, and ACP cladding solutions for high-rise commercial and residential projects.",
    longIntro:
      "Mumbai's demanding construction environment — tight spaces, monsoon exposure, high wind loads, and aggressive timelines — requires a facade partner who understands the city's unique challenges. Fine Glaze has delivered multiple landmark projects across Mumbai including Embassy 247 (Vikhroli), LTIMindtree Mensa Campus (Mahape), Salsette-27 (Byculla), and Leela Business Park.",
    areas: [
      "BKC (Bandra Kurla Complex)",
      "Andheri East & West",
      "Powai",
      "Lower Parel",
      "Vikhroli",
      "Navi Mumbai (Vashi, Mahape)",
      "Thane",
      "Goregaon",
      "Worli",
      "Byculla",
    ],
    projects: [
      { name: "Embassy 247, Vikhroli", type: "Unitized Curtain Wall" },
      { name: "LTIMindtree Mensa Campus, Mahape", type: "Facade Systems" },
      { name: "Salsette-27, Byculla", type: "Structural Glazing" },
      { name: "Leela Business Park", type: "ACP Cladding" },
    ],
  },
  "navi-mumbai": {
    name: "Navi Mumbai",
    fullName: "Navi Mumbai, Maharashtra",
    metaTitle:
      "Facade Contractor in Navi Mumbai | Glazing & Cladding – Fine Glaze",
    metaDescription:
      "Looking for a facade contractor in Navi Mumbai? Fine Glaze offers curtain wall, structural glazing & ACP cladding in Vashi, Mahape, Airoli, Belapur & Kharghar. Call +91 8369233566.",
    keywords:
      "facade contractor Navi Mumbai, curtain wall Navi Mumbai, glazing Vashi, ACP cladding Mahape, glass facade Airoli, facade company Kharghar",
    heroImage: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp",
    intro:
      "Fine Glaze brings premium facade solutions to Navi Mumbai's rapidly growing commercial and residential landscape.",
    longIntro:
      "Navi Mumbai is witnessing a construction boom with IT parks, commercial complexes, and residential towers transforming the skyline. Fine Glaze has established a strong presence here with landmark projects like the LTIMindtree Mensa Campus in Mahape and Embassy Techzone. Our proximity to Navi Mumbai ensures faster response times and competitive pricing.",
    areas: [
      "Vashi",
      "Mahape",
      "Airoli",
      "Belapur",
      "Kharghar",
      "Panvel",
      "Nerul",
      "Seawoods",
      "Ghansoli",
      "Sanpada",
    ],
    projects: [
      { name: "LTIMindtree Mensa Campus, Mahape", type: "Facade Systems" },
      { name: "Embassy Techzone", type: "Curtain Wall" },
    ],
  },
};

const services = [
  "Unitized & Stick System Curtain Walls",
  "2-Side & 4-Side Structural Glazing",
  "ACP & Aluminium Composite Cladding",
  "Frameless Glass Railings",
  "Skylights & Glass Canopies",
  "Aluminium Doors & Windows",
  "Aluminium Louvers & Sun Shading",
  "Facade AMC & Maintenance",
];

export default function CityLanding() {
  const { city } = useParams<{ city: string }>();
  const data = city ? cities[city] : undefined;

  if (!data) return <Navigate to="/services" replace />;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Fine Glaze – ${data.name}`,
    "image": `https://fineglaze.com${data.heroImage}`,
    "url": `https://fineglaze.com/facade-contractor/${city}`,
    "telephone": "+91-8369233566",
    "email": "info@fineglaze.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": data.name,
      "addressRegion": "Maharashtra",
      "addressCountry": "IN",
    },
    "areaServed": data.areas.map((a) => ({
      "@type": "Place",
      "name": a,
    })),
  };

  return (
    <Layout>
      <SEO
        title={data.metaTitle}
        description={data.metaDescription}
        canonical={`https://fineglaze.com/facade-contractor/${city}`}
        keywords={data.keywords}
        ogImage={`https://fineglaze.com${data.heroImage}`}
        schema={localBusinessSchema}
      />

      {/* HERO */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900" />
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url('${data.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="flex items-center gap-2 text-amber-400 text-sm font-bold mb-4">
            <MapPin size={16} /> {data.fullName}
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Best Facade Contractor in{" "}
            <span className="text-gradient">{data.name}</span>
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mb-8">
            {data.intro}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6"
              >
                Get Free Quote <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <a href="tel:+918369233566">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-6 gap-2"
              >
                <Phone size={16} /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Fine Glaze in {data.name}?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {data.longIntro}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { icon: Building2, label: "10+ Projects", sub: "Delivered" },
                { icon: Award, label: "Award", sub: "Winning Quality" },
                { icon: Clock, label: "On-Time", sub: "Delivery Record" },
                {
                  icon: ShieldCheck,
                  label: "5-Year",
                  sub: "Workmanship Warranty",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 p-3 bg-muted rounded-xl"
                >
                  <stat.icon size={20} className="text-amber-600 shrink-0" />
                  <div>
                    <p className="font-bold text-sm">{stat.label}</p>
                    <p className="text-xs text-muted-foreground">{stat.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <img
            src={data.heroImage}
            alt={`Facade project by Fine Glaze in ${data.name}`}
            className="rounded-2xl shadow-xl w-full h-[360px] object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Services in {data.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <div
                key={s}
                className="flex items-start gap-3 p-4 bg-background rounded-xl border"
              >
                <CheckCircle2
                  size={18}
                  className="text-amber-600 mt-0.5 shrink-0"
                />
                <span className="text-sm font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL PROJECTS */}
      {data.projects.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-8">
              Projects in {data.name}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {data.projects.map((p) => (
                <div
                  key={p.name}
                  className="p-6 bg-muted rounded-xl border hover:shadow-md transition-shadow"
                >
                  <Building2 size={24} className="text-amber-600 mb-3" />
                  <h3 className="font-bold mb-1">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.type}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/portfolio">
                <Button variant="outline" className="gap-2">
                  View Full Portfolio <ArrowRight size={14} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* AREAS SERVED */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-8">
            Areas We Serve in {data.name}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {data.areas.map((area) => (
              <span
                key={area}
                className="flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full text-sm hover:bg-amber-600 transition-colors cursor-default"
              >
                <MapPin size={14} /> {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-white text-center"
        style={{
          background:
            "linear-gradient(135deg, hsl(25 55% 35%) 0%, hsl(20 50% 25%) 100%)",
        }}
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your {data.name} Project?
          </h2>
          <p className="text-white/80 mb-8">
            Free site visit, detailed BOQ, and transparent pricing — call us or
            fill out the form.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-6 font-bold"
              >
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:+918369233566">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 hover:text-white px-10 py-6 gap-2"
              >
                <Phone size={18} /> +91 8369233566
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
