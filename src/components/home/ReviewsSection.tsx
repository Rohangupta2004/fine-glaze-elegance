import { Star, ExternalLink, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const reviews = [
  {
    name: "Rajesh Mehta",
    role: "Project Manager, IT Park Developer",
    initials: "RM",
    color: "bg-blue-600",
    rating: 5,
    text: "Fine Glaze delivered our curtain wall system on time with exceptional quality. Their engineering team handled all structural calculations in-house and the installation was flawless — zero punch list items at handover.",
    project: "Curtain Wall – Hinjewadi IT Park",
  },
  {
    name: "Priya Sharma",
    role: "Director, Residential Developer",
    initials: "PS",
    color: "bg-rose-600",
    rating: 5,
    text: "We've used Fine Glaze for glass railings and ACP cladding across three residential towers. Their workmanship and attention to detail is far above other contractors we've tried. Highly recommend.",
    project: "ACP Cladding + Glass Railings, Pune",
  },
  {
    name: "Anil Kapoor",
    role: "Facility Manager, Embassy REIT",
    initials: "AK",
    color: "bg-amber-600",
    rating: 5,
    text: "The team at Fine Glaze won our Best Vendor Award for a reason. Professional, safety-first culture, and they communicate proactively throughout the project. Our go-to facade contractor for all Mumbai assets.",
    project: "Glass Replacement – Embassy 247, Vikhroli",
  },
];

export const ReviewsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 bg-card border-y border-border overflow-hidden relative"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* Section header */}
        <div
          className={cn(
            "text-center mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-xs mb-3 block">
            Trusted & Verified
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Consistently rated 5★ across Google, IndiaMART & JustDial — here's what our clients say.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className={cn(
                "bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 slide-up",
                isVisible && "visible"
              )}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <Quote size={24} className="text-primary/30 mb-3" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-foreground/80 leading-relaxed mb-5 italic">
                "{review.text}"
              </p>

              {/* Project tag */}
              <p className="text-xs text-primary font-medium mb-5 bg-primary/5 border border-primary/15 px-3 py-1.5 rounded-full inline-block">
                {review.project}
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0", review.color)}>
                  {review.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
                <div className="ml-auto">
                  <GoogleIcon />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Badges */}
        <div
          className={cn(
            "flex flex-col items-center gap-6 transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Also rated on</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Google */}
            <a
              href="https://www.google.com/maps/search/Fine+Glaze+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-yellow-500/5 hover:scale-105 transition-transform duration-200 shadow-sm"
            >
              <div className="flex items-center justify-center w-8 h-8">
                <GoogleIcon />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-2xl font-black text-foreground leading-none">5.0</span>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Google Reviews</p>
              </div>
              <ExternalLink size={13} className="text-muted-foreground ml-1" />
            </a>

            {/* IndiaMART */}
            <a
              href="https://www.indiamart.com/fine-glaze/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-orange-400/5 hover:scale-105 transition-transform duration-200 shadow-sm"
            >
              <div className="flex items-center justify-center">
                <span className="text-[#FF6B00] font-black text-base leading-none">india<span className="text-[#1a56db]">mart</span></span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-2xl font-black text-foreground leading-none">4.8</span>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} size={12} className={i <= 4 ? "fill-amber-400 text-amber-400" : "fill-amber-400/40 text-amber-400/40"} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">IndiaMART</p>
              </div>
              <ExternalLink size={13} className="text-muted-foreground ml-1" />
            </a>

            {/* JustDial */}
            <a
              href="https://www.justdial.com/Pune/Fine-Glaze"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-red-400/5 hover:scale-105 transition-transform duration-200 shadow-sm"
            >
              <div className="flex items-center justify-center">
                <span className="text-[#FF5A00] font-black text-base leading-none">Just<span className="text-[#1a56db]">Dial</span></span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-2xl font-black text-foreground leading-none">4.7</span>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} size={12} className={i <= 4 ? "fill-amber-400 text-amber-400" : "fill-amber-400/40 text-amber-400/40"} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">JustDial</p>
              </div>
              <ExternalLink size={13} className="text-muted-foreground ml-1" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
