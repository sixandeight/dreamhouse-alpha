# Dreamhouse — Development Journal

## 2026-03-26 17:20 — Project Kickoff

Read the brief PDF and all 30 reference images. The vibe is clear: Y2K fashion illustration meets Barbie Dreamhouse. Think Totally Spies, My Scene, Bratz — bold saturated pinks, flat vector art, playful but elevated.

Key decision: **Vanilla HTML/CSS/JS over Next.js**. No need for React for what is essentially an illustrated, interactive brochure. Vanilla gives maximum control over CSS illustration quality and zero build complexity for deployment.

---

## 2026-03-26 17:25 — Architecture Decisions

**Navigation model**: 3-level drill-down
- House view (2x3 room grid inside a dollhouse frame)
- Room view (full-screen detailed room with clickable objects)
- Project view (campaign details page)

**CSS illustration approach**: Each room is drawn entirely with CSS — colored divs with border-radius, clip-path, gradients, and pseudo-elements for furniture. No images, no canvas, no 3D. Pure flat illustration in code.

**Room assignments**:
| Room | Clickable Object | Project |
|------|-----------------|---------|
| Bathroom | Bathtub + razor | Gillette — Close Shave |
| Beauty Room | Vanity mirror | Kerastase — Hair Story |
| Studio | Camera | Sunset Boulevard editorial |
| Living Room | Magazine stack | Vogue Feature |
| Office | Laptop | About Naomi & Jana |
| Lounge | Cocktail glass | Midnight Glow fragrance |

---

## 2026-03-26 17:30 — Building the House

Started with the HTML structure: three view containers (house, room, project), each with show/hide logic. The house exterior uses CSS for the roof (clip-path triangle), chimney, and attic window.

The rooms grid is a CSS Grid with `aspect-ratio: 3/2` and 4px gaps with a dark pink background that acts as the wall dividers between rooms. This gives the dollhouse cutaway effect.

---

## 2026-03-26 17:33 — Room Illustration Strategy

Each room has two versions:
1. **Mini** (house view): Simplified furniture at small scale, just enough to identify the room
2. **Full** (room view): Detailed furniture with clickable objects

Rooms are differentiated by:
- Wall color + pattern (tiles, polka dots, stripes, etc.)
- Floor texture (checkered, wood, carpet, etc.)
- Unique furniture pieces drawn in CSS
- Distinct color palettes per room

---

## 2026-03-26 17:35 — Navigation & Polish

Implemented a state machine in JS for navigation with:
- Hash-based URLs for deep linking (#bathroom, #project-gillette)
- Browser back/forward support via History API
- Escape key to go back
- Sparkle particle effects on hovering clickable objects
- Custom pink cursor (SVG data URI)
- Gold glow border on interactive object hover

Project pages use a clean card layout with hero gradient, campaign details, and placeholder gallery grid.
