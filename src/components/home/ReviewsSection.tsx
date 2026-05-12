import { Star, ExternalLink, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Rajesh Mehta",
    company: "Embassy REIT",
    role: "Facilities Manager",
    rating: 5,
    text: "Fine Glaze executed our Embassy 247 glass replacement without disrupting a single tenant. Zero complaints across all 15 floors. Exceptional professionalism — they truly earned the Best Performance Vendor award.",
  },
  {
    name: "Priya Nair",
    company: "LTIMindtree Ltd.",
    role: "Project Manager",
    rating: 5,
    text: "Delivered the entire ACP and glazing scope for Mensa Campus on schedule. Their site coordination and quality of finish were outstanding. We've recommended Fine Glaze to our other facilities teams.",
  },
  {
    name: "Arvind Kulkarni",
    company: "Nirmaann Developers",
    role: "Director",
    rating: 5,
    text: "We gave Fine Glaze three scopes simultaneously — windows, louvers, and railings. They managed all three without a single interface issue. Will continue working with them on our upcoming projects.",
  },
];

const badges = [
  {
    label: "Google",
    rating: "5.0",
    reviews: "5 Reviews",
    color: "from-blue-500/10 to-green-500/10",
    border: "border-blue-500/20",
    link: "https://www.google.com/maps/search/Fine+Glaze+Pune",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    label: "IndiaMART",
    rating: "4.8",
    reviews: "Verified",
    color: "from-orange-500/10 to-yellow-500/10",
    border: "border-orange-500/20",
    link: "https://www.indiamart.com/fineglazeundri/",
    icon: (
      <span className="text-orange-500 font-black text-lg leading-none">iM</span>
    ),
  },
  {
    label: "JustDial",
    rating: "4.7",
    reviews: "Verified",
    color: "from-red-500/10 to-orange-500/10",
    border: "border-red-500/20",
    link: "https://www.justdial.com/Pune/Fine-Glaze-Near-Sunshine-Colony-Undri/020PXX20-XX20-181004151942-G5D5_BZDET",
    icon: (
      <span className="text-red-600 font-black text-lg leading-none">JD</span>
    ),
  },
];

export const ReviewsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-24 bg-card border-y border-border overflow-hidden relative"
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
            "text-center mb-14 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-xs mb-3 block">
            Trusted By Industry
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From IT parks to five-star hotels — architects, developers, and facility managers trust Fine Glaze for precision facade work.
          </p>
        </div>

        {/* Trust badges row */}
        <div
          className={cn(
            "flex flex-wrap justify-center gap-4 mb-16 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          {badges.map((badge) => (
            <a
              key={badge.label}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-3 px-5 py-3 rounded-xl border bg-gradient-to-br hover:scale-105 transition-transform duration-200",
                badge.color,
                badge.border
              )}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                {badge.icon}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-sm text-foreground">{badge.rating}</span>
                  <Star size={12} className="fill-amber-400 text-amber-400" />
                </div>
                <p className="text-xs text-muted-foreground">{badge.label} · {badge.reviews}</p>
              </div>
            </a>
          ))}

          {/* Google Rating Hero Badge */}
          <a
            href="https://www.google.com/maps/search/Fine+Glaze+Pune"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 hover:scale-105 transition-transform duration-200"
          >
            <div className="text-center">
              <p className="text-2xl font-black text-foreground leading-none">5.0</p>
              <div className="flex gap-0.5 my-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={10} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Google Reviews</p>
            </div>
            <ExternalLink size={14} className="text-muted-foreground" />
          </a>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={cn(
                "relative p-6 rounded-2xl border border-border bg-background/60 backdrop-blur-sm transition-all duration-700 hover:shadow-lg hover:-translate-y-1",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
            >
              {/* Quote icon */}
              <Quote size={32} className="text-primary/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} size={14} className={cn(
                    s <= review.rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"
                  )} />
                ))}
              </div>

              {/* Review text */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                "{review.text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}, {review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google Reviews */}
        <div
          className={cn(
            "text-center transition-all duration-700 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <a
            href="https://www.google.com/maps/search/Fine+Glaze+Pune"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Read all Google Reviews
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
};
