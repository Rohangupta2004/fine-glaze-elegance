import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";

export default function AcpCladding() {
  return (
    <ServicePageTemplate
      title="ACP Aluminium Cladding"
      subtitle="A cleaner and more modern service page for ACP solutions across commercial and residential projects."
      image="/Panel.webp"
      highlights={[
        "Custom colors and surface finishes",
        "Fire-rated and code-compliant panel options",
        "Substructure detailing and junction treatment",
        "Rapid installation with consistent workmanship",
      ]}
    />
  );
}
