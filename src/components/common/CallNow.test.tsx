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

describe("engineering palette", () => {
  const PAPER = "#f4f4f1";
  const PANEL = "#e9eae6";
  const INK = "#15181b";
  const GRAPHITE = "#555b62";
  const BRONZE = "#9b5520";

  it("ink and graphite text reach 4.5:1 on the paper and panel grounds", () => {
    for (const ground of [PAPER, PANEL]) {
      expect(ratio(INK, ground)).toBeGreaterThanOrEqual(4.5);
      expect(ratio(GRAPHITE, ground)).toBeGreaterThanOrEqual(4.5);
    }
  });
  it("the bronze accent reaches 4.5:1 as text on paper and panel, and white on bronze reaches 4.5:1", () => {
    expect(ratio(BRONZE, PAPER)).toBeGreaterThanOrEqual(4.5);
    expect(ratio(BRONZE, PANEL)).toBeGreaterThanOrEqual(4.5);
    expect(ratio("#ffffff", BRONZE)).toBeGreaterThanOrEqual(4.5);
  });
  it("text on the dark section reaches 4.5:1, including the soft bronze accent", () => {
    for (const fg of ["#e9eae6", "#c9ced3", "#aab0b6", "#d9a574"]) expect(ratio(fg, INK)).toBeGreaterThanOrEqual(4.5);
  });
});
