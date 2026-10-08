import { useState } from "react";
import { CheckCircle2, MapPin, Building2, Tag, Briefcase, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/QuoteModal";

export interface ServiceQuickOverviewProps {
  serviceTitle: string;
  whatWeProvide: string;
  locationsServed?: string[];
  bestProjectTypes: string[];
  priceBenchmark: string;
  relevantProjects: string[];
}

export const ServiceQuickOverview = ({
  serviceTitle,
  whatWeProvide,
  locationsServed = ["Pan India", "Pune", "Mumbai", "Delhi NCR", "Bengaluru"],
  bestProjectTypes,
  priceBenchmark,
  relevantProjects,
}: ServiceQuickOverviewProps) => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <section className="bg-stone-900 border-y border-stone-800 text-stone-200 py-10 my-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 border-b border-stone-800 pb-4">
            <div>
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                Service Specification &amp; Pricing Benchmark
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">
                {serviceTitle} Overview
              </h2>
            </div>
            <Button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-2.5 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <FileText className="w-4 h-4 mr-2" />
              Request BOQ &amp; Quote
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* What Fine Glaze Provides */}
            <div className="bg-stone-950/70 rounded-xl p-5 border border-stone-800">
              <div className="flex items-center gap-2 text-amber-400 font-semibold mb-3 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>What Fine Glaze Provides</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {whatWeProvide}
              </p>
            </div>

            {/* Locations Served */}
            <div className="bg-stone-950/70 rounded-xl p-5 border border-stone-800">
              <div className="flex items-center gap-2 text-amber-400 font-semibold mb-3 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Service Locations</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {locationsServed.map((loc) => (
                  <span
                    key={loc}
                    className="bg-stone-800 text-stone-300 text-xs font-medium px-2.5 py-1 rounded-md"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            {/* Best Project Types */}
            <div className="bg-stone-950/70 rounded-xl p-5 border border-stone-800">
              <div className="flex items-center gap-2 text-amber-400 font-semibold mb-3 text-sm">
                <Building2 className="w-4 h-4" />
                <span>Ideal Building Types</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-stone-300">
                {bestProjectTypes.map((type) => (
                  <li key={type} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing Benchmark */}
            <div className="bg-stone-950/70 rounded-xl p-5 border border-stone-800">
              <div className="flex items-center gap-2 text-amber-400 font-semibold mb-3 text-sm">
                <Tag className="w-4 h-4" />
                <span>Price / BOQ Benchmark</span>
              </div>
              <p className="text-sm font-bold text-amber-300 mb-1">
                {priceBenchmark}
              </p>
              <p className="text-xs text-stone-400">
                *Final rates depend on glass specification, structural wind load calculations &amp; site access.
              </p>
            </div>

            {/* Relevant Projects */}
            <div className="bg-stone-950/70 rounded-xl p-5 border border-stone-800 md:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 text-amber-400 font-semibold mb-3 text-sm">
                <Briefcase className="w-4 h-4" />
                <span>Verified Project References</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-300">
                {relevantProjects.map((proj) => (
                  <div key={proj} className="flex items-center gap-2 bg-stone-900 px-3 py-2 rounded-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-medium text-stone-200">{proj}</span>
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
