import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const clients = [
  {
    name: "Peninsula",
    logo: "https://fineglaze.com/wp-content/uploads/2023/09/logo1-1-1.png",
  },
  {
    name: "Larsen & Toubro",
    logo: "https://fineglaze.com/wp-content/uploads/2023/12/download-e1702879135621.png",
  },
  {
    name: "JSL",
    logo: "https://fineglaze.com/wp-content/uploads/2023/12/Logo-Dark.png",
  },
  {
    name: "Nirmaann",
    logo: "https://fineglaze.com/wp-content/uploads/2023/12/nirmaann_logo_text.png",
  },
];

export const ClientsCarousel = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="border-y border-border bg-background py-16" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={cn("mb-10 text-center slide-up", isVisible && "visible")}>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">Trusted by teams that build at scale</p>
          <h2 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">Strategic delivery partner to top developers</h2>
        </div>

        <div className="rounded-2xl border border-border/80 bg-secondary/50 p-6 md:p-8">
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-secondary/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-secondary/90 to-transparent" />

            <div className="flex animate-marquee">
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="mx-10 flex h-16 min-w-[160px] flex-shrink-0 items-center justify-center rounded-xl border border-transparent bg-white/70 px-6 grayscale transition-all duration-300 hover:border-primary/25 hover:grayscale-0"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-9 w-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                  <span className="hidden text-sm font-semibold text-foreground">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
