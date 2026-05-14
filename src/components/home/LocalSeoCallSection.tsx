import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const highIntentLinks = [
  { href: "/facade-contractor-pune", label: "Facade Contractor Pune" },
  { href: "/facade-contractor-mumbai", label: "Facade Contractor Mumbai" },
  { href: "/curtain-wall-pune", label: "Curtain Wall Pune" },
  { href: "/structural-glazing-pune", label: "Structural Glazing Pune" },
  { href: "/acp-cladding-pune", label: "ACP Cladding Pune" },
  { href: "/glass-railing-pune", label: "Glass Railing Pune" },
];

export const LocalSeoCallSection = () => {
  return (
    <section className="py-16 bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="space-y-5">
            <span className="inline-flex rounded-full bg-amber-500/15 px-4 py-2 text-sm font-semibold text-amber-300 border border-amber-400/20">
              Free site visit & quotation support
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Need a facade contractor in Pune or Mumbai?
            </h2>
            <p className="text-white/75 text-lg leading-relaxed">
              Fine Glaze handles structural glazing, curtain wall systems, ACP cladding, aluminium facades and glass railings for offices, IT parks, malls, hotels, hospitals and residential towers across Maharashtra.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold">
                <a href="tel:+918369233566" aria-label="Call Fine Glaze for facade quotation">
                  <Phone className="mr-2 h-4 w-4" /> Call +91 83692 33566
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/25 bg-white/10 text-white hover:bg-white hover:text-slate-950">
                <a
                  href="https://wa.me/918369233566?text=Hello%20Fine%20Glaze%2C%20I%20need%20a%20facade%20quotation%20and%20site%20visit."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp for Quote <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <h3 className="text-lg font-bold mb-4">Popular searches we serve</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {highIntentLinks.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="mt-5 text-sm text-white/55">
              Serving Pune, Mumbai, Navi Mumbai, Thane, Hinjewadi, Baner, Wakad, Kharadi, Andheri, Powai and nearby commercial zones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
