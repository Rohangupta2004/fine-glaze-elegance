import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";

export default function Maintenance() {
  return (
    <ServicePageTemplate
      title="Facade Maintenance Services"
      subtitle="A rebuilt page covering preventive maintenance, repairs, and long-term asset care."
      image="/Amc1.webp"
      highlights={[
        "Annual maintenance contracts (AMC)",
        "Sealant replacement and leakage treatment",
        "Hardware repairs and adjustment work",
        "Facade audit and condition reporting",
      ]}
    />
  );
}
