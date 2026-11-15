import { describe, expect, it } from "vitest";
import { fitDescription, fitTitle } from "./seoText";

describe("fitTitle", () => {
  it("leaves short titles alone", () => {
    expect(fitTitle("Facade Contractor in Pune | Fine Glaze")).toBe("Facade Contractor in Pune | Fine Glaze");
  });
  it("drops a secondary phrase but keeps the brand", () => {
    expect(fitTitle("Aluminium Section Profiles for Curtain Walls India | Technical Guide | Fine Glaze")).toBe(
      "Aluminium Section Profiles for Curtain Walls India | Fine Glaze",
    );
  });
  it("shortens long project titles to the project name and main scope", () => {
    const t = fitTitle("Pune International Airport – New Integrated Terminal – SS Column Cladding with MS Framing | Fine Glaze");
    expect(t.length).toBeLessThanOrEqual(65);
    expect(t.startsWith("Pune International Airport")).toBe(true);
  });
});

describe("fitDescription", () => {
  it("ends on a full sentence when possible", () => {
    const d = fitDescription(
      "Compare unitized and stick curtain walls by assembly, access, programme and scope. Use our specification checklist to compare facade quotations in India before you sign.",
    );
    expect(d.endsWith(".")).toBe(true);
    expect(d.length).toBeLessThanOrEqual(160);
  });
  it("never exceeds the limit", () => {
    expect(fitDescription("word ".repeat(80)).length).toBeLessThanOrEqual(160);
  });
});
