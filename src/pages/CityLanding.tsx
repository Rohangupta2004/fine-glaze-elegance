import { useParams, Navigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, CheckCircle2, ArrowRight, Building2, ShieldCheck, Clock, Award } from "lucide-react";
import SEO from "@/components/SEO";

// 1. Define your massive list of targets (This is how you capture "All Words")
const microLocations = {
  "bkc": { name: "BKC (Bandra Kurla Complex)", city: "Mumbai", image: "/Embassy.webp" },
  "hinjewadi": { name: "Hinjewadi IT Park", city: "Pune", image: "/Puneairport.webp" },
  "kharadi": { name: "Kharadi", city: "Pune", image: "/Puneairport.webp" },
  "vikhroli": { name: "Vikhroli", city: "Mumbai", image: "/Embassy.webp" },
  "mahape": { name: "Mahape", city: "Navi Mumbai", image: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp" },
  "pune": { name: "Pune", city: "Pune", image: "/Puneairport.webp" },
  "mumbai": { name: "Mumbai", city: "Mumbai", image: "/Embassy.webp" }
  // Add 50+ more locations here!
};

const serviceKeywords = {
  "commercial-construction": "Commercial Construction Facades",
  "structural-glazing": "Structural Glazing",
  "curtain-wall": "Curtain Wall Systems",
  "acp-cladding": "ACP Cladding Installation",
  "facade-contractor": "Facade Contractor"
};

export default function CityLanding() {
  // We expect URLs like: /facade-contractor/structural-glazing-bkc
  const { city: slug } = useParams<{ city: string }>();
  
  if (!slug) return <Navigate to="/services" replace />;

  // 2. Dynamically parse the URL to figure out what the user searched for
  let matchedLocation = null;
  let matchedService = serviceKeywords["facade-contractor"]; // Default

  // Find the location in the slug
  Object.keys(microLocations).forEach(loc => {
    if (slug.includes(loc)) matchedLocation = microLocations[loc as keyof typeof microLocations];
  });

  // Find the service in the slug
  Object.keys(serviceKeywords).forEach(srv => {
    if (slug.includes(srv)) matchedService = serviceKeywords[srv as keyof typeof serviceKeywords];
  });

  // If no location matched, fallback
  if (!matchedLocation) return <Navigate to="/services" replace />;

  // 3. Dynamically generate the SEO Data based on the exact search
  const dynamicMetaTitle = `Best ${matchedService} in ${matchedLocation.name} | Fine Glaze`;
  const dynamicDescription = `Looking for ${matchedService} in ${matchedLocation.name}? Fine Glaze is the top-rated commercial contractor for IT parks and high-rises in ${matchedLocation.city}. Call +91 8369233566.`;

  return (
    <Layout>
      <SEO
        title={dynamicMetaTitle}
        description={dynamicDescription}
        canonical={`https://fineglaze.com/facade-contractor/${slug}`}
        keywords={`${matchedService} ${matchedLocation.name}, commercial construction ${matchedLocation.name}, glass facade ${matchedLocation.name}`}
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
          <div className="flex items-center gap-2 text-amber-400 text-sm font-bold mb-4">
            <MapPin size={16} /> {matchedLocation.name}, {matchedLocation.city}
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight capitalize">
            Top Rated <span className="text-amber-500">{matchedService}</span> in {matchedLocation.name}
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mb-8">
            Fine Glaze is the most trusted engineering partner for high-rise developments and commercial construction projects requiring premium <strong>{matchedService}</strong> in the {matchedLocation.name} region.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6">
                Get Free Quote <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <a href="tel:+918369233566">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-6 gap-2">
                <Phone size={16} /> Call +91 8369233566
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* REMAINDER OF YOUR PAGE (Stats, Services, CTA) GOES HERE... */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to execute your {matchedLocation.name} project?</h2>
             <Link to="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Contact Our Engineering Team
              </Button>
            </Link>
        </div>
      </section>

    </Layout>
  );
}
