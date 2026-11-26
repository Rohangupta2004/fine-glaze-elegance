import { ReactNode } from "react";

export interface FaqItem {
  q: ReactNode;
  a: ReactNode;
}

/**
 * Flat ruled FAQ list. Native details/summary, so every answer is in the server HTML (and matches
 * the page's FAQ schema), keyboard works, and the toggle is a square plus/minus drawn in CSS.
 */
export const FaqList = ({ items, openFirst = false }: { items: FaqItem[]; openFirst?: boolean }) => (
  <div className="fg-faq">
    {items.map((it, i) => (
      <details key={i} open={openFirst && i === 0}>
        <summary>
          <h3>{it.q}</h3>
        </summary>
        <div className="fg-a">{it.a}</div>
      </details>
    ))}
  </div>
);

export default FaqList;
