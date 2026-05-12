import { Star, ExternalLink } from "lucide-react";
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

const IndiaMartIcon = () => (
  <svg viewBox="0 0 40 20" className="w-8 h-4" fill="none">
    <rect width="40" height="20" rx="3" fill="#FF6B00"/>
    <text x="4" y="14" fill="white" fontSize="9" fontWeight="bold" fontFamily="Arial">indiamart</text>
  </svg>
);

const JustDialIcon = () => (
  <svg viewBox="0 0 40 20" className="w-8 h-4" fill="none">
    <rect width="40" height="20" rx="3" fill="#FF5A00"/>
    <text x="3" y="14" fill="white" fontSize="9" fontWeight="bold" fontFamily="Arial">JustDial</text>
  </svg>
);

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
            Rated 5.0 on Google
          </h2>
        </div>

        {/* Platform Badges */}
        <div
          className={cn(
            "flex flex-col items-center gap-6 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
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
                <p className="text-sm font-bold text-foreground leading-none mb-0.5">Listed</p>
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
                <p className="text-sm font-bold text-foreground leading-none mb-0.5">Listed</p>
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
