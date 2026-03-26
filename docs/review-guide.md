# Dreamhouse — Review Guide

## Quick Start
Open `index.html` in a browser (or visit the GitHub Pages URL). No build step needed.

## What to Look At

### 1. House View (Landing)
- The dollhouse should be centered with a dark sky background and city skyline
- Roof with pink gradient, gold trim, chimney, and spinning star antenna
- 2×3 grid of rooms — each with a different color palette and miniature furniture
- Title "Dreamhouse" with glowing pink/lavender text
- Hovering over a room cell → glow effect + room name label appears
- Custom pink cursor follows mouse, grows on hover over interactive elements
- Click anywhere → sparkle burst effect

### 2. Room Views (click any room)
Test all 6 rooms:
- **Bathroom** — Blue tiles, bathtub with floating bubbles, mirror, towel rack, razor. Click bathtub → Gillette project.
- **Beauty Room** — Pink polka dots, Hollywood vanity with glowing bulbs, clothing rack, hair dryer. Click vanity → Kérastase project.
- **Studio** — Lavender stripes, easel with canvas, mood board, desk with pencils. Click easel → Nike project.
- **Living Room** — Warm coral, pink sofa with cushions, photo wall, monstera plant, candle. Click photo wall → About Us.
- **Office** — Mint grid, computer monitor, keyboard, bookshelf, oat milk carton. Click computer → Oatly project.
- **Lounge** — Dark purple, record player with spinning vinyl, neon sign, disco ball, lava lamp, bean bag. Click record player → Spotify project.

### 3. Project Pages (click interactive objects)
Each project page has:
- Colored hero banner with campaign name and tagline
- Meta info (Role, Type, Year)
- Campaign description text
- Gallery grid with placeholder illustrations
- Back button to return to the room

### 4. Navigation
- House → Room (click room cell) → Room fills screen
- Room → Project (click glowing object) → Project page slides in
- Back button in top-left returns to previous level
- Escape key also navigates back
- All transitions should be smooth (no flashing, no broken states)

### 5. Visual Polish
- Custom cursor (pink circle + trail dot)
- Click sparkles (✦ ✧ ⋆ characters)
- Ambient floating particles on house view
- Spinning vinyl in lounge
- Floating bubbles in bathroom
- Neon glow text in lounge
- Candle flame flicker in living room
- Lava lamp blobs moving in lounge
- Disco ball rotating with light rays
- Hollywood bulbs glowing on vanity mirror

## Known Issues
1. **Mobile**: Site is designed for desktop. On phones, the room cells in the house grid become very small. A future version would need a mobile-specific layout.
2. **Placeholder Content**: Project galleries use SVG/CSS placeholders where real campaign images would go. The text content is representative but would be replaced with actual campaign work.
3. **Avatar Silhouettes**: The About Us page has simplified SVG avatar sketches. Real photos would replace these.
4. **No Loading State**: The site renders immediately with no loading screen. On slow connections, fonts may FOUT briefly.
5. **Touch Devices**: The custom cursor is invisible on touch (no mouse), which is correct behavior. Sparkles still fire on tap.

## File Structure
```
index.html          — All HTML (views, rooms, projects)
css/main.css        — Base styles, variables, cursor, view system
css/house.css       — House view and room cell previews
css/rooms.css       — Full room interiors
css/projects.css    — Project pages and about page
css/animations.css  — Transitions, hover effects, ambient animations
js/app.js           — Navigation state machine
js/effects.js       — Cursor, sparkles, particles
docs/               — Documentation
.nojekyll           — Prevents Jekyll processing on GitHub Pages
```
