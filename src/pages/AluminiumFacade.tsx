import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Layers, ShieldCheck, Phone } from "lucide-react";

export default function FineGlazeLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
          FineGlaze
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Premium Facade • Aluminium • Glass Solutions
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Button className="rounded-2xl px-6">Get Quote</Button>
          <Button variant="outline" className="rounded-2xl px-6">View Projects</Button>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <Building2 className="h-8 w-8 mb-4" />
            <h3 className="font-semibold text-lg">Modern Facades</h3>
            <p className="text-sm text-slate-600 mt-2">High‑performance facade systems designed for strength and elegance.</p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <Layers className="h-8 w-8 mb-4" />
            <h3 className="font-semibold text-lg">Precision Engineering</h3>
            <p className="text-sm text-slate-600 mt-2">Accurate fabrication and installation with premium materials.</p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <ShieldCheck className="h-8 w-8 mb-4" />
            <h3 className="font-semibold text-lg">Trusted Quality</h3>
            <p className="text-sm text-slate-600 mt-2">Safety, durability and transparency in every project.</p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="mt-20 bg-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Let’s Build Something Iconic</h2>
          <p className="mt-4 text-slate-300">Contact FineGlaze for facade and aluminium solutions across India.</p>
          <Button className="mt-6 rounded-2xl px-8">
            <Phone className="mr-2 h-4 w-4" /> Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
      }
