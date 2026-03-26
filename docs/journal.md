# Dreamhouse — Development Journal

## 2026-03-26 — Initial Build

### Decision: Vanilla HTML/CSS/JS over Next.js
Went with vanilla stack because:
- No build step = simpler deploy, fewer moving parts
- Full control over CSS animations without framework overhead
- Single HTML file keeps navigation state simple (show/hide sections with CSS transitions)
- GitHub Pages serves static files directly — no `output: "export"` config dance

### Decision: Single-Page App Architecture
All views (house, 6 rooms, 6 projects) live in one `index.html`. JavaScript handles view switching by toggling `.active` class with CSS transitions. This gives us:
- Instant navigation (no page loads)
- Smooth zoom/fade transitions between views
- Simple state management (just track current view + room)

### Decision: CSS-first Illustration
Built all room furniture and objects using pure CSS shapes and inline SVGs. No external images needed for the core experience. This means:
- Zero image loading = instant visual rendering
- Everything scales perfectly at any screen size
- Easier to tweak colors/shapes on the fly
- Y2K illustration style comes through via bold gradients, geometric shapes, and polka-dot/stripe patterns

### Room Layout (2x3 grid)
```
┌──────────┬─────────────┬──────────┐
│ BATHROOM │ BEAUTY ROOM │  STUDIO  │ ← Floor 2
│(Gillette)│ (Kérastase) │  (Nike)  │
├──────────┼─────────────┼──────────┤
│  LIVING  │   OFFICE    │  LOUNGE  │ ← Floor 1
│(About Us)│   (Oatly)   │(Spotify) │
└──────────┴─────────────┴──────────┘
```

### Color System
Each room has its own palette to feel distinct:
- Bathroom: Baby blue (#87CEEB) + white + silver — clean, spa-like
- Beauty Room: Hot pink (#FF69B4) + magenta + gold — Hollywood glam
- Studio: Lavender (#E6E6FA) + purple + coral — creative energy
- Living Room: Coral (#FF7F7F) + warm pink + cream — cozy, personal
- Office: Mint (#98FB98) + pink + white — fresh, modern
- Lounge: Deep purple (#2a1a3e) + magenta + neon — nightlife vibes

### Navigation Flow
1. **House View** — See all 6 rooms in the dollhouse
2. **Room View** — Click a room cell → zoom transition → full-screen room
3. **Project View** — Click an interactive object → slide transition → project page
4. Back buttons and Escape key navigate backwards

### Visual Details That Sell the Y2K Vibe
- Custom cursor (pink circle + trail)
- Click sparkles (✦ ✧ ⋆ characters in gold/pink)
- Floating particles on house view
- Polka dot wall patterns (beauty room)
- Tile grid pattern (bathroom)
- Neon text glow (lounge)
- Spinning vinyl record animation
- Lava lamp blob animation
- Hollywood vanity bulb glow
- Bubble float animation (bathtub)
- Disco ball rotation with light rays

### What Worked Well
- The dollhouse frame with roof, chimney, and golden trim immediately reads as "dollhouse"
- Room previews show enough furniture to identify each room at a glance
- The dark purple/night sky background with city skyline sets a nice mood
- Individual room palettes give strong personality to each space
- Object hover effects (glow + label) make clickable items obvious

### Known Simplifications
- Project pages use placeholder SVG illustrations instead of real campaign images
- Avatar silhouettes are simplified SVG sketches
- No mobile-specific layout (rooms may be small on phones)
- No loading screen/animation
