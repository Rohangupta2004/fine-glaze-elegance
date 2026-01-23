import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Wrench, Search, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Maintenance() {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-6">Facade Maintenance & AMC Services</h1>
            <p className="text-slate-300 text-lg mb-8">
              Protect your asset. We provide comprehensive Annual Maintenance Contracts (AMC), glass replacement, and sealant rectification services.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">Schedule Inspection</Button>
            </Link>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Sparkles className="text-amber-400 mb-3" size={32} />
              <h3 className="font-bold">Deep Cleaning</h3>
              <p className="text-sm text-slate-300">Removal of hard water stains and oxidation.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Wrench className="text-amber-400 mb-3" size={32} />
              <h3 className="font-bold">Hardware Repair</h3>
              <p className="text-sm text-slate-300">Fixing alignment, hinges, and locks.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Search className="text-amber-400 mb-3" size={32} />
              <h3 className="font-bold">Leakage Audit</h3>
              <p className="text-sm text-slate-300">Identifying and sealing water ingress points.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Clock className="text-amber-400 mb-3" size={32} />
              <h3 className="font-bold">Rapid Response</h3>
              <p className="text-sm text-slate-300">Emergency glass replacement services.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Why Sign an AMC?</h2>
          <p className="text-slate-600 mb-12">
            Facades deteriorate over time due to pollution, weather, and structural settling. Regular maintenance extends the life of your glazing by up to 10 years and prevents costly emergency repairs.
          </p>
          <div className="p-8 bg-slate-50 border rounded-xl text-left">
            <h3 className="font-bold text-xl mb-4">Our Maintenance Checklist Includes:</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-slate-700">
              <li className="flex gap-2">✔ Inspection of silicone sealants</li>
              <li className="flex gap-2">✔ Checking pressure plates & caps</li>
              <li className="flex gap-2">✔ Tightening of structural bolts</li>
              <li className="flex gap-2">✔ Glass stability check</li>
              <li className="flex gap-2">✔ Cleaning of weep holes</li>
              <li className="flex gap-2">✔ Butterfly gasket replacement</li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
                }
