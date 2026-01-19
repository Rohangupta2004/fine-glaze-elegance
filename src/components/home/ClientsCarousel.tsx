import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const clients = [
  { name: "ICICI Prudential", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/ICICI_Prudential_Life_Insurance_logo.svg/200px-ICICI_Prudential_Life_Insurance_logo.svg.png" },
  { name: "Decathlon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Decathlon_Logo.png/200px-Decathlon_Logo.png" },
  { name: "HDFC Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/200px-HDFC_Bank_Logo.svg.png" },
  { name: "Edelweiss", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Edelweiss_Financial_Services_logo.svg/200px-Edelweiss_Financial_Services_logo.svg.png" },
  { name: "Schindler", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Schindler_logo.svg/200px-Schindler_logo.svg.png" },
  { name: "Johnson Matthey", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Johnson_Matthey_Logo.svg/200px-Johnson_Matthey_Logo.svg.png" },
];

export const ClientsCarousel = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 bg-muted border-y border-border" ref={ref}>
      <div className="container mx-auto px-4">
        <p
          className={cn(
            "text-center text-sm text-muted-foreground uppercase tracking-wider mb-8 slide-up",
            isVisible && "visible"
          )}
        >
          Trusted by Leading Brands
        </p>

        <div className="relative overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted to-transparent z-10" />

          {/* Marquee */}
          <div className="flex animate-marquee">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-12 min-w-[120px] grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-8 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden text-foreground font-semibold text-sm">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};