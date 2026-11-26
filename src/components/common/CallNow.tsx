import { Phone } from "lucide-react";
import { company, telHref } from "@/data/company";

interface CallNowProps {
  /** Classes for the link itself (button look, size, width). */
  className?: string;
  /** Show the number beside the link on desktop widths. */
  number?: boolean | "under";
  /** Class for the wrapper when the number is shown. */
  wrapClassName?: string;
  iconSize?: number;
  label?: string;
  /** Extra classes on the number text (colour on dark or light surfaces). */
  numberClassName?: string;
}

/** The site's primary call to action: a plain tel: link with a phone icon, and the number for desktop visitors. */
export const CallNow = ({ className = "fg-btn", number = false, wrapClassName = "", iconSize = 16, label = "Call now", numberClassName = "" }: CallNowProps) => {
  const link = (
    <a href={telHref} className={`${className} cn-link`} data-call-now>
      <Phone size={iconSize} aria-hidden="true" className="shrink-0" style={{ marginRight: 8 }} />
      {label}
    </a>
  );
  if (!number) return link;
  return (
    <span className={`cn-wrap${number === "under" ? " cn-under" : ""} ${wrapClassName}`.trim()}>
      {link}
      <span className={`cn-num ${numberClassName}`.trim()}>{company.phone.mobileDisplay}</span>
    </span>
  );
};

export default CallNow;
