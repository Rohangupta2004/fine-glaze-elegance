import CallNow from "@/components/common/CallNow";
import { company } from "@/data/company";

const HomeClose = () => {
  return (
    <section className="end">
      <div className="wrap">
        <div className="end-g">
          <div>
            <h2>Tell us about your <span className="text-gradient">facade.</span></h2>
            <CallNow className="btn" number="under" />
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
