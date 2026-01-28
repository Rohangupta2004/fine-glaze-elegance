import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Droplets,
  Hammer,
  FileCheck,
  Phone,
  ShieldCheck,
  Building2,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

const Maintenance = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Facade Maintenance AMC",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fine Glaze",
      "areaServed": "Maharashtra",
    },
  };

  return (
    <Layout>
      <Helmet>
        <title>Facade Maintenance AMC Services Mumbai | Fine Glaze</title>
        <meta
          name="description"
          content="Facade cleaning, waterproofing, silicon sealant replacement & glass repair services in Mumbai. AMC contracts for residential & commercial buildings."
        />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[70vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Amc1.webp"
            alt="Facade Maintenance Work"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
        </div>

        <div className="container relative z-10 px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Facade Maintenance <br />
              That <span className="text-amber-500">Protects Your Building</span>
            </h1>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Prevent leakage, glass damage, and facade deterioration with
              professional maintenance, waterproofing, and AMC solutions.
            </p>

            {/* Trust Strip */}
            <div className="flex flex-wrap gap-6 text-slate-200 mb-10">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-amber-400" />
                Fully Insured Work
              </div>
              <div className="flex items-center gap-2">
                <Building2 size={18} className="text-amber-400" />
                High-Rise Specialists
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-amber-400" />
                On-Time Execution
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 h-auto py-4 px-8 text-lg"
                >
                  Request Site Inspection
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-white hover:bg-white hover:text-slate-900 h-auto py-4 px-8 text-lg gap-2"
                >
                  <Phone size={18} /> Emergency Support
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICE CARDS --- */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8 -mt-32 relative z-20">
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <Droplets className="text-blue-600 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3">Waterproofing</h3>
                <p className="text-slate-600">
                  Replacement of damaged silicon sealant and sealing of leakage
                  points using weather-resistant materials.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <FileCheck className="text-amber-600 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3">AMC Contracts</h3>
                <p className="text-slate-600">
                  Annual Maintenance Contracts including inspection, cleaning,
                  and preventive facade repairs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <Hammer className="text-emerald-600 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3">Glass Replacement</h3>
                <p className="text-slate-600">
                  Safe removal and installation of toughened glass panels at all
                  building heights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-24 bg-white">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible>
            <AccordionItem value="1">
              <AccordionTrigger>
                Why does water leakage occur in glass facades?
              </AccordionTrigger>
              <AccordionContent>
                Leakage is mainly due to aging silicon sealant, gasket failure,
                or structural movement over time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="2">
              <AccordionTrigger>
                Do you work with housing societies?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we provide facade maintenance and AMC services for
                residential societies and commercial buildings.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 bg-amber-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Make Your Building Monsoon-Ready
        </h2>
        <p className="text-amber-100 mb-8">
          Book a free inspection and prevent costly repairs later.
        </p>
        <Link to="/contact">
          <Button size="lg" variant="secondary" className="font-bold">
            Book Free Audit
          </Button>
        </Link>
      </section>
    </Layout>
  );
};

export default Maintenance;
