# Dreamhouse — Technical Approach

## Architecture

**Stack**: Vanilla HTML + CSS + JavaScript. No frameworks, no build step.

**Why vanilla?** This is fundamentally an illustrated interactive experience, not a web application. Every pixel of visual output comes from CSS — frameworks would add complexity without benefit. The entire site is 3 files (+ docs).

```
index.html   — All markup for house, rooms, and project views
styles.css   — CSS illustrations, layout, animations (~1800 lines)
app.js       — Navigation state machine, sparkle effects (~190 lines)
```

## CSS Illustration Technique

Each room is "drawn" using layered CSS elements:

1. **Wall**: Full-height div with gradient + pattern overlay (repeating-linear-gradient for tiles, radial-gradient for polka dots)
2. **Floor**: Positioned at bottom 20-25%, distinct texture per room
3. **Furniture**: Absolutely positioned divs with border-radius, gradients, and pseudo-elements for detail
4. **Interactive objects**: Same as furniture but with `.clickable-object` class for hover effects

### Example: Bathtub
The bathtub is a white div with asymmetric border-radius (`8px 8px 50% 50% / 8px 8px 25% 25%`) creating the curved bottom. The faucet is a `::after` pseudo-element. The razor is a child div with a grey `::after` for the blade.

### Color System
Each room has a dominant hue:
- **Bathroom**: Baby blue (#87CEEB) — clean, fresh
- **Beauty Room**: Hot pink (#FF69B4) — glamorous, bold
- **Studio**: Lavender (#D8C4E9) — creative, calm
- **Living Room**: Coral (#FFB6A3) — warm, inviting
- **Office**: Magenta (#E91E90) — energetic, modern
- **Lounge**: Deep purple (#3D1040) — moody, sophisticated

## Navigation Model

Three-level drill-down with smooth transitions:

```
HOUSE VIEW  →  click room cell  →  ROOM VIEW  →  click object  →  PROJECT VIEW
                                    ← back btn                     ← back btn
                                    ← Escape                       ← Escape
```

State managed via simple variables (`currentView`, `currentRoom`, `currentProject`). URL hash updates for deep linking. Browser back/forward supported via History API.

## Aesthetic Choices

**Y2K fashion illustration** is the guiding aesthetic, drawn from 30 reference images (Totally Spies, My Scene, Bratz, fashion vector art). Key visual decisions:

- **Bold saturated colors** over pastels — pink is hot pink, not blush
- **Polka dots and stripes** as wallpaper patterns
- **Gold (#FFD700) accents** for mirrors, frames, interactive highlights
- **Sparkle effects** on hover — stars that float upward
- **Custom pink cursor** — matching the Y2K web aesthetic
- **Neon text effect** in the lounge (CSS text-shadow glow)
- **Spinning record** in the lounge (CSS animation)
- **City skyline** through the living room window (layered div buildings)

## Deployment

Static files deployed to GitHub Pages via `gh-pages` npm package:
```bash
npx gh-pages -d . -b gh-pages -t
```
The `-t` flag ensures `.nojekyll` is included. No build step needed.
