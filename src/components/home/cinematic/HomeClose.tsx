import GlassLightBg from "@/components/common/GlassLightBg";
import { useBookCall } from "@/components/booking/BookCallProvider";
import { company } from "@/data/company";

const HomeClose = () => {
  const { open } = useBookCall();
  return (
    <section className="end glb-host">
      <GlassLightBg />
      <div className="wrap">
        <div className="end-g">
          <div>
            <h2>Tell us about your <span className="text-gradient">facade.</span></h2>
            <button className="btn" type="button" onClick={() => open({ source: "home_close" })}>
              Book a call
            </button>
            <p className="promise">We call you back the same business day, Monday to Saturday, 9am to 6pm.</p>
          </div>
          <dl>
            <dt>Mobile and WhatsApp</dt>
            <dd>{company.phone.mobileDisplay}</dd>
            <dt>Office</dt>
            <dd>{company.phone.officeDisplay}</dd>
            <dt>Email</dt>
            <dd>{company.email}</dd>
            <dt>Address</dt>
            <dd>{company.address.short}</dd>
            <dt>Fabrication</dt>
            <dd>Interim unit at {company.fabricationUnit.location}</dd>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default HomeClose;
