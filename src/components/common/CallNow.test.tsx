import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import CallNow from "./CallNow";
import { company, telHref } from "@/data/company";
import { projectsData } from "@/data/projects";
import { blogPosts } from "@/data/blog";

describe("Call now call to action", () => {
  it("is a tel: link to the mobile number, not a booking button", () => {
    const html = renderToStaticMarkup(<CallNow />);
    expect(telHref).toBe("tel:+918369233566");
    expect(html).toContain(`href="${telHref}"`);
    expect(html).toContain("Call now");
    expect(html).not.toMatch(/book a call/i);
    expect(html).toContain("<svg");
  });

  it("can show the number for desktop visitors", () => {
    const html = renderToStaticMarkup(<CallNow number />);
    expect(html).toContain(company.phone.mobileDisplay);
  });
});

describe("site copy", () => {
  it("the project count shown on the site matches the project records", () => {
    expect(company.stats.projectRecords).toBe(String(Object.keys(projectsData).length));
  });

  it("articles no longer tell readers to book a call", () => {
    expect(JSON.stringify(blogPosts)).not.toMatch(/book a call/i);
  });
});

// WCAG relative luminance contrast
const lum = (hex: string) => {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a: string, b: string) => {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

describe("aurora accent colours", () => {
  it("every dark-ink stop is at least 3:1 on the cream page", () => {
    for (const stop of ["#4a2108", "#8a4512", "#a85a1c", "#7a3a0e", "#9b5520"]) expect(ratio(stop, "#f9f7f4")).toBeGreaterThanOrEqual(3);
  });
  it("every light stop is at least 3:1 on the dark story scrim", () => {
    for (const stop of ["#f3d9b8", "#e8b47a", "#d08a45"]) expect(ratio(stop, "#2a1f17")).toBeGreaterThanOrEqual(3);
  });
});
