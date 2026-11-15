import { Star, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, scaleUp, stagger, viewport } from "@/hooks/useMotion";
import { company, whatsappHref } from "@/data/company";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export const ReviewsSection = () => {
  return (
    <section className="py-20 bg-card border-y border-border overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-10 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-xs mb-3 block">
            Reviews &amp; References
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Don&apos;t take our word for it</h2>
          <p className="text-muted-foreground">
            Read what clients say on Google, or ask us for a reference contact from a completed
            project similar to yours.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-stretch justify-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.1)}
        >
          <motion.a
            variants={scaleUp}
            href={company.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-4 border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-yellow-500/5 hover:border-amber-500 transition-colors shadow-sm"
          >
            <GoogleIcon />
            <div>
              <div className="flex gap-0.5 mb-0.5" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm font-semibold text-foreground">Read our Google reviews</p>
            </div>
            <ExternalLink size={13} className="text-muted-foreground ml-1" />
          </motion.a>

          <motion.a
            variants={scaleUp}
            href={whatsappHref("Hi Fine Glaze, could you share a client reference for a project similar to mine?")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-4 border border-border bg-background hover:border-primary transition-colors shadow-sm"
          >
            <div>
              <p className="text-sm font-semibold text-foreground">Ask for a client reference</p>
              <p className="text-xs text-muted-foreground">We&apos;ll connect you with a past client, with their permission</p>
            </div>
            <ExternalLink size={13} className="text-muted-foreground ml-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
