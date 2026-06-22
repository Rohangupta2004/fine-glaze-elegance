import { LucideIcon } from "lucide-react";

export interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceFeatureStripProps {
  /** Top row of circular-icon feature cards (4–5 items recommended) */
  features: ServiceFeature[];
  /** Bottom dark feature bar (3–4 items recommended) */
  bottomBar: ServiceFeature[];
}

/**
 * Reusable feature UI block matching the marketing-banner layout:
 *  1. A row of circular-icon feature cards separated by thin dividers
 *  2. A dark feature bar with outline icons
 * Colors follow the existing service-page palette (slate hero / muted body).
 */
export const ServiceFeatureStrip = ({
  features,
  bottomBar,
}: ServiceFeatureStripProps) => {
  return (
    <>
      {/* Circular-icon feature row */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 md:divide-x md:divide-border">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center text-center px-4"
                >
                  <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center mb-4 shadow-md">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-sm uppercase tracking-wide text-foreground mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-snug">
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dark feature bar */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x lg:divide-white/15">
            {bottomBar.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="flex items-start gap-4 px-4">
                  <Icon
                    className="text-white/90 flex-shrink-0 mt-0.5"
                    size={32}
                    strokeWidth={1.5}
                  />
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide mb-1">
                      {f.title}
                    </h4>
                    <p className="text-sm text-white/70 leading-snug">
                      {f.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
