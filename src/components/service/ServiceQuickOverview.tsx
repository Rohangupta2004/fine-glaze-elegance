import { useState } from "react";
import { CheckCircle2, MapPin, Building2, Briefcase, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/QuoteModal";

export interface ServiceQuickOverviewProps {
  serviceTitle: string;
  whatWeProvide: string;
  locationsServed?: string[];
  bestProjectTypes: string[];
  priceBenchmark?: string;
  relevantProjects: string[];
}

export const ServiceQuickOverview = ({
  serviceTitle,
  whatWeProvide,
  locationsServed = ["Pune & PCMC", "Mumbai", "Navi Mumbai", "Thane"],
  bestProjectTypes,
  relevantProjects,
}: ServiceQuickOverviewProps) => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <section className="bg-night-2 border-y border-line text-paper py-10 my-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 border-b border-line pb-4">
            <div>
              <span className="text-lamp text-xs font-bold">
                Service Specification
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-paper mt-1">
                {serviceTitle} Overview
              </h2>
            </div>
            <Button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-lamp hover:bg-lamp/90 text-lamp-ink font-bold px-6 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lamp"
            >
              <FileText className="w-4 h-4 mr-2" />
              Book a call
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* What Fine Glaze Provides */}
            <div className="bg-night/70 p-5 border border-line">
              <div className="flex items-center gap-2 text-lamp font-semibold mb-3 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>What Fine Glaze Provides</span>
              </div>
              <p className="text-xs sm:text-sm text-paper/80 leading-relaxed">
                {whatWeProvide}
              </p>
            </div>

            {/* Locations Served */}
            <div className="bg-night/70 p-5 border border-line">
              <div className="flex items-center gap-2 text-lamp font-semibold mb-3 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Service Locations</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {locationsServed.map((loc) => (
                  <span
                    key={loc}
                    className="bg-night-2 text-paper/80 text-xs font-medium px-2.5 py-1"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            {/* Best Project Types */}
            <div className="bg-night/70 p-5 border border-line">
              <div className="flex items-center gap-2 text-lamp font-semibold mb-3 text-sm">
                <Building2 className="w-4 h-4" />
                <span>Ideal Building Types</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-paper/80">
                {bestProjectTypes.map((type) => (
                  <li key={type} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-lamp" />
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Relevant Projects */}
            <div className="bg-night/70 p-5 border border-line md:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 text-lamp font-semibold mb-3 text-sm">
                <Briefcase className="w-4 h-4" />
                <span>Verified Project References</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-paper/80">
                {relevantProjects.map((proj) => (
                  <div key={proj} className="flex items-center gap-2 bg-night-2 px-3 py-2">
                    <span className="w-2 h-2 bg-emerald-500" />
                    <span className="font-medium text-paper">{proj}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal open={isQuoteOpen} onOpenChange={setIsQuoteOpen} />
    </>
  );
};
