# Dreamhouse — Approach & Architecture

## Philosophy
Build a dollhouse portfolio that feels like a Y2K flash game — bold, playful, and interactive — using only CSS shapes, SVGs, and vanilla JavaScript. No frameworks, no images, no external dependencies beyond fonts.

## Architecture

### Single-Page Application
```
index.html
├── House View (default, visible on load)
├── Room Views × 6 (hidden, shown on room click)
├── Project Views × 6 (hidden, shown on object click)
└── SVG Defs (shared gradients)
```

All views exist in the DOM simultaneously. Navigation is purely CSS class toggling:
- `.active` — visible, interactive
- `.exiting` — fading out
- `.entering` — fading in

### CSS Architecture
```
css/
├── main.css       — Reset, variables, cursor, view system, shared components
├── house.css      — House view: sky, roof, dollhouse frame, room cell previews
├── rooms.css      — Full room detail views: wall patterns, furniture, objects
├── projects.css   — Project pages: hero, body, gallery, about page
└── animations.css — Transitions, hover effects, ambient animations, responsive
```

Variables in `:root` define the color system, typography, spacing, and easing curves. Each room has a unique color palette applied directly to its elements.

### JavaScript
```
js/
├── app.js     — Navigation state machine, event listeners, keyboard nav
└── effects.js — Custom cursor, sparkle particles, floating ambient particles
```

Zero dependencies. ~150 lines total. The navigation state machine tracks three levels: house → room → project, with Escape key support for backwards navigation.

## Aesthetic Choices

### Color Palette
Derived from reference images — Totally Spies, My Scene, Barbie, Kim Possible:
- **Hot pink** (#FF69B4) — primary accent, buttons, highlights
- **Magenta** (#FF00FF) — neon effects, lounge room
- **Baby blue** (#87CEEB) — bathroom, sky elements
- **Lavender** (#E6E6FA) — studio, soft accents
- **Gold** (#FFD700) — trim, doorknobs, frames, vanity lights
- **Coral** (#FF7F7F) — living room warmth

### Typography
- **Playfair Display** — Display headlines (serif, elegant)
- **Space Grotesk** — Body text (geometric sans, modern)
- **Caveat** — Accent text, handwritten labels (casual, personal)

### Illustration Style
Every piece of "furniture" is built from CSS primitives:
- `border-radius` for rounded shapes
- `clip-path` for complex shapes (roof, lamp shades)
- `linear-gradient` / `radial-gradient` for walls, floors, surfaces
- Inline SVG for detailed items (razors, sneakers, milk cartons)
- `box-shadow` for depth and glow
- CSS patterns (repeating-linear-gradient) for wall textures

### Interaction Design
- **Room cells** glow on hover with label reveal
- **Interactive objects** pulse subtly, show project label on hover
- **Click sparkles** burst from cursor position (✦ characters)
- **Custom cursor** — pink circle that grows when hovering interactive elements
- **View transitions** — fade + scale for rooms, slide for projects
- **Escape key** navigates back one level

## Deployment
Static HTML/CSS/JS deployed to GitHub Pages via `gh-pages` npm package. No build step required. The `.nojekyll` file prevents GitHub from processing files through Jekyll.
