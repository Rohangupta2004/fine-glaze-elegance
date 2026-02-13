import { ArrowRight, CalendarCheck2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-background to-amber-200/20 p-8 md:p-12">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-amber-300/30 blur-3xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Ready to start?</p>
              <h2 className="text-3xl font-semibold leading-tight md:text-5xl">Let’s scope your facade in a 30-minute strategy call</h2>
              <p className="max-w-2xl text-muted-foreground">Share your drawings or project brief and get a practical execution roadmap covering design, budget range, and timeline.</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <ul className="mb-6 space-y-3 text-sm text-foreground/85">
                <li className="flex items-center gap-2"><CalendarCheck2 className="h-4 w-4 text-primary" /> Free feasibility discussion</li>
                <li className="flex items-center gap-2"><CalendarCheck2 className="h-4 w-4 text-primary" /> Preliminary scope in 48 hours</li>
                <li className="flex items-center gap-2"><CalendarCheck2 className="h-4 w-4 text-primary" /> Direct access to execution team</li>
              </ul>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild className="btn-glossy flex-1 border-0 text-white">
                  <a href="https://wa.me/918369233566?text=Hello%20Fine%20Glaze%2C%20I%20would%20like%20to%20discuss%20a%20facade%20project." target="_blank" rel="noopener noreferrer">
                    Get Instant Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <a href="tel:+918369233566">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
