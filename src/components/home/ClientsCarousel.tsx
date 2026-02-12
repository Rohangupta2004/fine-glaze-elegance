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
    <section className="py-12" ref={ref}>
      <div className="glass-card-dark p-8">
        <p
          className={cn(
            "text-center text-xs text-white/60 uppercase tracking-[0.2em] mb-8 slide-up",
            isVisible && "visible",
          )}
        >
          Trusted by Leading Brands
        </p>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#141414] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#141414] to-transparent" />

          <div className="flex animate-marquee">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-10 flex items-center justify-center h-14 min-w-[140px] grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling?.classList.remove("hidden");
                  }}
                />
                <span className="hidden text-white font-semibold text-sm">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
