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

export const ReviewsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 bg-stone-900 overflow-hidden relative"
    >
      <div className="container mx-auto px-4 md:px-16 relative z-10">

        {/* Section header */}
        <div
          className={cn(
            "text-center mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <span className="text-amber-400 font-bold uppercase tracking-[0.3em] text-xs mb-3 block">
            Trusted & Verified
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
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
              className="flex items-center gap-4 px-6 py-4 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200"
            >
              <div className="flex items-center justify-center w-8 h-8">
                <GoogleIcon />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-2xl font-black text-white leading-none">5.0</span>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-stone-400">Google Reviews</p>
              </div>
              <ExternalLink size={13} className="text-stone-500 ml-1" />
            </a>

            {/* IndiaMART */}
            <a
              href="https://www.indiamart.com/fine-glaze/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-4 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200"
            >
              <div className="flex items-center justify-center">
                <span className="text-[#FF6B00] font-black text-base leading-none">india<span className="text-[#7db6f5]">mart</span></span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-2xl font-black text-white leading-none">4.8</span>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} size={12} className={i <= 4 ? "fill-amber-400 text-amber-400" : "fill-amber-400/40 text-amber-400/40"} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-stone-400">IndiaMART</p>
              </div>
              <ExternalLink size={13} className="text-stone-500 ml-1" />
            </a>

            {/* JustDial */}
            <a
              href="https://www.justdial.com/Pune/Fine-Glaze"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-4 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200"
            >
              <div className="flex items-center justify-center">
                <span className="text-[#FF5A00] font-black text-base leading-none">Just<span className="text-[#7db6f5]">Dial</span></span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-2xl font-black text-white leading-none">4.7</span>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} size={12} className={i <= 4 ? "fill-amber-400 text-amber-400" : "fill-amber-400/40 text-amber-400/40"} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-stone-400">JustDial</p>
              </div>
              <ExternalLink size={13} className="text-stone-500 ml-1" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
