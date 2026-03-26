# Dreamhouse — Review Guide

## How to Navigate

1. **Open the site** — you see the full dollhouse with 6 rooms in a 2x3 grid
2. **Hover over a room** — the room name and "Enter" button appear
3. **Click a room** — zooms into the detailed room view
4. **Find the glowing object** — hover over furniture pieces to find the clickable one (gold glow + "Click me" hint)
5. **Click the object** — opens the project page
6. **Press Escape or Back button** — returns to previous level

## What to Look At

### House View
- Roof with triangular clip-path, chimney, attic window
- 6 rooms with distinct colors and miniature furniture
- Dark pink "wall" dividers between rooms (grid gap)
- Floating star/heart/flower decorations
- Hover effects on room cells (scale + glow)

### Room Details (click into each room)
- **Bathroom** (top-left): Blue tiles, white bathtub, gold mirror, pink towel. Click the bathtub → Gillette
- **Beauty Room** (top-center): Pink polka dot walls, vanity with lit mirror, closet with clothes. Click the vanity → Kerastase
- **Studio** (top-right): Lavender walls, wood floor, mood board, camera on tripod. Click the camera → Sunset Boulevard
- **Living Room** (bottom-left): Coral walls, hot pink sofa, city skyline window. Click the coffee table magazines → Vogue Feature
- **Office** (bottom-center): Magenta walls, bookshelf with colorful books, desk with laptop. Click the desk/laptop → About Us
- **Lounge** (bottom-right): Dark purple walls, bar with bottles, neon "cheers" sign, spinning record. Click the cocktail → Midnight Glow

### Interactions
- Custom pink cursor everywhere, gold cursor on interactive elements
- Gold glow border appears on hoverable objects
- Sparkle particles (gold stars) on hover
- Smooth transitions between views
- Escape key to go back
- Browser back/forward buttons work
- URL hashes for deep linking (try #bathroom or #project-gillette)

### Project Pages
- Clean card layout with gradient hero
- Campaign title, description, role/team/type details
- Placeholder gallery (colored gradient blocks — replace with real images)
- About Us page has dual profile cards

## Known Issues / Limitations

1. **No real project images** — Gallery items are gradient placeholders. Real campaign images need to be added.
2. **Responsive on very small screens** — The room illustrations are complex CSS and may not scale perfectly below 375px width. The layout adapts but furniture proportions may look off.
3. **No loading state** — Google Fonts load asynchronously; there may be a brief flash of unstyled text.
4. **Custom cursor** — May not render on all browsers/OS. Falls back to default pointer.
5. **Room furniture at mini scale** — Some furniture details are too small to be clearly visible in the house view. This is by design — the room names and hover labels help identify rooms.

## Testing Checklist

- [ ] House loads with all 6 rooms visible
- [ ] Each room can be clicked to enter
- [ ] Each room has a distinct color/theme
- [ ] Each room has at least one clickable object with gold glow on hover
- [ ] Each clickable object links to the correct project
- [ ] All 6 project pages display correctly
- [ ] Back buttons work (room → house, project → room)
- [ ] Escape key navigates back
- [ ] Browser back/forward works
- [ ] URL hash updates on navigation
- [ ] Mobile layout is usable (try resizing browser)
- [ ] Custom cursor appears (pink arrow, gold on interactive)
- [ ] Sparkle effect appears on hovering clickable objects
