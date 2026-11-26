import { useBookCall } from "@/components/booking/BookCallProvider";
import { company, telHref, whatsappHref } from "@/data/company";

/** Closing band used at the foot of the service, city and guide pages. */
export const CTASection = () => {
  const { open } = useBookCall();

  return (
    <section className="bg-night-2 text-paper">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[7fr_5fr] md:items-end">
          <div>
            <h2 className="font-display font-medium leading-[1.04] tracking-[-0.015em] text-4xl md:text-6xl max-w-[11ch]">
              Tell us about your facade.
            </h2>
            <button
              type="button"
              onClick={() => open({ source: "page_close" })}
              className="mt-8 h-[52px] px-7 bg-lamp text-lamp-ink font-semibold transition-transform active:scale-[0.98] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-glass"
            >
              Book a call
            </button>
            <p className="mt-5 max-w-sm text-[15.5px] text-mute">
              We call you back the same business day, Monday to Saturday, 9am to 6pm.
            </p>
          </div>

          <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-6 gap-y-2.5 text-base">
            <dt className="text-mute">Mobile</dt>
            <dd>
              <a href={telHref} className="underline underline-offset-4">
                {company.phone.mobileDisplay}
              </a>
            </dd>
            <dt className="text-mute">WhatsApp</dt>
            <dd>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                Message us
              </a>
            </dd>
            <dt className="text-mute">Email</dt>
            <dd>
              <a href={`mailto:${company.email}`} className="underline underline-offset-4">
                {company.email}
              </a>
            </dd>
            <dt className="text-mute">Office</dt>
            <dd>{company.address.short}</dd>
          </dl>
        </div>
      </div>
    </section>
  );
};
