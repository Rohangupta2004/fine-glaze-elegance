# Fine Glaze — SEO & Growth Plan (Nov 2026)

Goal: when someone in Pune or Mumbai searches for a facade, glazing or window contractor, they find Fine Glaze, trust what they read, and call. No overselling — every claim on the site comes from the company profile (`src/data/company.ts`).

## Fine Glaze vs Fenesta — where we can win

| Area | Fenesta | Fine Glaze (after this PR) | Play |
|---|---|---|---|
| Scale | National brand, own extrusion plant and multiple fabrication units | ~20,566 sqm, 16 documented projects, Pisoli unit, Pune & Mumbai | Don't compete on size. Compete on facade depth and one accountable team. |
| What they lead with | uPVC / aluminium windows & doors | Curtain wall, structural glazing, ACP, louvers, railings, windows, maintenance | Lead with facades and maintenance — Fenesta's weaker ground. Windows page added for the overlap. |
| Consultation | "Book a free consultation", studios | "Get a project quote" / site survey, WhatsApp, call | Decide if site surveys are free in Pune/Mumbai — if yes, say "free" (strong lever). |
| After-sales | Service requests, year-round support | **New `/service-request`** (leaks, broken/foggy glass, sealant, hardware, ACP, AMC — incl. facades we didn't install) | Answer every request the same day; it's a lead source, not a cost. |
| Warranty | Published warranty years by product | Defect liability as per contract | **Biggest remaining trust gap.** Publish a written warranty policy once the business decides terms. |
| Process & quality | "Fenesta Difference" page | **New `/quality-safety`**: 8 stages, in-house design & engineering, QA, testing, safety, partners, vendor registration | Send this page to every PMC / procurement team. |
| Price transparency | Quote only | Estimator built, **hidden until prices are approved** (`docs/PRICING_FOR_APPROVAL.md`) | Approved prices would be a real differentiator. |
| Proof | Reviews, builder/architect pages | Embassy REIT Best Vendor 2024, project records with client/scope/status | Add Google reviews and monthly case studies (below). |

## Already done on the website (PR #137)
- Claims aligned to the company profile; "Pan India", inflated numbers, unlisted clients, unverified warranties removed.
- ~616 thin city pages retired with 301 redirects (Google penalises this pattern sitewide).
- New pages: aluminium windows & doors, quality & safety, service request; About page with real team and credentials.
- Clean structured data, real share image, robots.txt fix, missing pages now pre-rendered, `llms.txt` for AI search.
- GA4 tracking for calls, WhatsApp taps, emails, downloads and form leads.
- Homepage hero keeps the original design and headline, with the new facade film as background (labelled as an AI illustration).

## Do next — only your team can do these (highest impact first)

1. **Google Business Profile** (the #1 lever for "facade contractor in Pune / near me").
   - Verify the listing at the exact address and phone used on the site: *A3 LW-13, Pragati Serene Building, Mohammed Wadi, Pune 411060 · +91 83692 33566*.
   - Pick the closest primary category Google offers for glazing / window / facade work, add secondary categories for the other services, list every service.
   - Upload 30+ real project photos (not stock), add the logo and storefront photo, post one project update a week.
   - Send the profile link to the developer to add to the site's structured data.
2. **Google reviews.** Ask every client from completed work (Embassy REIT facility team, Nirmaann, Jindal House, Salsette-27, Samundra Tarang, Leela). Reply to every review. Never buy or incentivise reviews. Message to send:
   > Namaste [Name], thank you for trusting Fine Glaze with [project]. If you were happy with our work, could you share a short Google review? It helps other building owners find us: [review link]. — Deepak Gupta, Fine Glaze
3. **Google Search Console + Bing Webmaster Tools.** Verify the domain, submit `https://fineglaze.com/sitemap.xml`, request indexing for the new pages. "Page with redirect" for old `/facade-contractor/...` URLs is expected.
4. **GA4.** Mark `contact_call`, `contact_whatsapp` and `generate_lead` as key events; link GA4 to Search Console.
5. **Real photos.** ~50 stock (Unsplash) images still sit inside service pages. Replace them with site photos. From every site: before / during / after, 10 photos, one short vertical video.
6. **Citations** with the identical name, address and phone: LinkedIn company page, IndiaMART, Justdial, Sulekha, TradeIndia, Bing Places, Apple Business Connect.
7. **Business decisions waiting:** price ranges, site-labour mobilisation (profile says both 50 and 540), response-time promise (site says "within 1 hour" in one place and "2 business hours" in another), free site visit/inspection, written warranty, ISO status (update the site the day certification is granted).

## Content rhythm (quality over volume)
- One real case study a month: the problem, our scope, photos, the client's words.
- Update the facade leakage / monsoon pages every April–May, when those searches peak.
- Enrich the Pune and Mumbai pages with the projects actually done there.

## Measure monthly
- Calls, WhatsApp taps and form leads (GA4 key events) — by page.
- Google Business Profile: calls, direction requests, website clicks.
- Search Console clicks and positions for: facade contractor Pune, facade contractor Mumbai, structural glazing contractor Mumbai, curtain wall contractor Pune, aluminium windows Pune, ACP cladding contractor Pune, facade leakage repair Mumbai.
- Number and average of Google reviews.
