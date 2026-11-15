# Price ranges — for internal approval

**Status: NOT APPROVED — hidden from the public site.** The switch is `PRICING_APPROVED` in `src/data/costRanges.ts` (currently `false`).

These are *indicative installed rates before GST* that the new cost estimator and the Aluminium Windows & Doors page would show. They were copied from the system cards already on each service page — they have **not** been checked by the estimation team.

## How to approve

1. Founder / estimation team: correct the **Min** and **Max** columns below (or strike a line to drop that system).
2. Send the edited sheet back; the developer updates `src/data/costRanges.ts` to match and sets `PRICING_APPROVED = true`.
3. Until then, reviewers can try the tool privately at `https://fineglaze.com/facade-cost-estimator?preview=1` (it is `noindex` and not linked).

| # | Service | System | Unit | Min ₹ | Max ₹ | Approved Min | Approved Max | Comment |
|---|---|---|---|---:|---:|---|---|---|
| 1 | Aluminium windows & doors | Sliding windows / doors | per sq ft | 450 | 800 |  |  |  |
| 2 | Aluminium windows & doors | Casement / awning windows | per sq ft | 500 | 900 |  |  |  |
| 3 | Aluminium windows & doors | Tilt-turn windows | per sq ft | 700 | 1,200 |  |  |  |
| 4 | Aluminium windows & doors | Lift-slide doors | per sq ft | 900 | 1,500 |  |  |  |
| 5 | Curtain wall | Stick system curtain wall | per sq ft | 400 | 700 |  |  |  |
| 6 | Curtain wall | Semi-unitized curtain wall | per sq ft | 500 | 900 |  |  |  |
| 7 | Curtain wall | Unitized curtain wall | per sq ft | 600 | 1,200 |  |  |  |
| 8 | Structural glazing | 2-side structural glazing | per sq ft | 350 | 550 |  |  |  |
| 9 | Structural glazing | 4-side structural glazing | per sq ft | 500 | 800 |  |  |  |
| 10 | Structural glazing | Spider / point-fixed glazing | per sq ft | 800 | 1,500 |  |  |  |
| 11 | ACP cladding | ACP cladding — PVDF finish | per sq ft | 180 | 350 |  |  |  |
| 12 | ACP cladding | ACP — wood-grain / stone finish | per sq ft | 220 | 400 |  |  |  |
| 13 | Louvers | Fixed aluminium louvers | per sq ft | 250 | 500 |  |  |  |
| 14 | Louvers | Operable louvers | per sq ft | 400 | 700 |  |  |  |
| 15 | Glass railings | Frameless glass railing | per running ft | 800 | 1,400 |  |  |  |
| 16 | Glass railings | Spigot glass railing | per running ft | 700 | 1,200 |  |  |  |
| 17 | Skylights & canopies | Atrium skylight | per sq ft | 600 | 1,200 |  |  |  |
| 18 | Skylights & canopies | Frameless glass canopy | per sq ft | 800 | 1,500 |  |  |  |
| 19 | Glass partitions | Frameless office partition | per sq ft | 350 | 600 |  |  |  |
| 20 | Glass partitions | Acoustic double-glazed partition | per sq ft | 600 | 1,000 |  |  |  |

## Prices already live on older pages (published before this change)

These pages showed ₹ figures before this work and still do. Please review them too — some disagree with each other, which a careful buyer will notice:

| Topic | Page A | Page B |
|---|---|---|
| Stick curtain wall | `/curtain-wall-systems` system card: ₹400–700/sq ft | same page comparison table: ₹350–550/sq ft; `/curtain-wall-pune`: ₹350–600 |
| Unitized curtain wall | `/curtain-wall-systems` card: ₹600–1,200 | same page table: ₹650–1,200; `/curtain-wall-pune`: ₹700–1,200 |
| ACP cladding | `/acp-aluminium-cladding` PVDF: ₹180–350 | `/acp-cladding-pune` & `/facade-contractor-pune`: ₹180–450; FAQ: ₹80–220 installed |
| Structural glazing | `/structural-glazing` 2-side: ₹350–550 | `/structural-glazing-pune`: ₹300–550; `/facade-contractor-pune`: ₹300–900 |
| Aluminium windows | `/aluminium-windows-doors` (hidden): ₹450–1,500 | `/facade-contractor-pune` FAQ: ₹350–800 |

If you prefer, every ₹ figure on the site can be switched off the same way until the team has agreed one price list.
