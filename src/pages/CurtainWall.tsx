import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";

export default function CurtainWall() {
  return (
    <ServicePageTemplate
      title="Curtain Wall Systems"
      subtitle="Completely reworked presentation for large-scale commercial curtain wall packages."
      image="/Unitized.webp"
      highlights={[
        "Unitized and semi-unitized solutions",
        "Efficient project phasing for high-rise towers",
        "Integrated anchors, gaskets, and sealants",
        "On-site logistics and crane-lift planning",
      ]}
    />
  );
}
