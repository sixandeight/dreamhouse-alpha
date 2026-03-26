# Dreamhouse — Technical Gotchas

## 1. GitHub Pages + .nojekyll
GitHub Pages runs Jekyll by default, which ignores files starting with `_` and can mess with CSS. Must include a `.nojekyll` file in the root of the deployed directory.

## 2. CSS `aspect-ratio` on Room Cells
The room cells in the house grid use `aspect-ratio: 1 / 0.85` to maintain proportions. Older browsers may not support this — fallback would be the padding-top hack, but modern browsers are fine.

## 3. View Transition Timing
The `isTransitioning` lock in `app.js` prevents double-clicks from breaking navigation. The 350ms timeout before showing the next view must match the CSS exit transition duration. If you change one, change the other.

## 4. CSS `mix-blend-mode: difference` on Cursor
The custom cursor uses `mix-blend-mode: difference` which makes it visible on any background. This can look odd on very saturated colors. The fallback is just the pink border circle.

## 5. Inline SVGs vs External
All SVGs are inline in the HTML rather than in separate `.svg` files. This avoids CORS issues on GitHub Pages and makes the site truly zero-dependency. Tradeoff: the HTML file is large (~60KB).

## 6. `overflow: hidden` on body
The body has `overflow: hidden` because views handle their own scrolling. This prevents double scrollbars but means the house view doesn't scroll — fine since it's designed to fit in the viewport.

## 7. Font Loading
Google Fonts are loaded via `<link>` tags. If they fail to load, the fallback stack is Georgia (display), system-ui (body), and cursive (accent). The design still works without the custom fonts.

## 8. `cursor: none` on body
We hide the system cursor globally and replace it with the custom pink cursor. This means on touch devices the cursor elements are invisible (which is fine — no cursor needed). The `mousemove` listener just won't fire.

## 9. CSS Custom Properties Scope
All CSS variables are defined on `:root`. Room-specific colors are set directly on elements rather than overriding variables, to avoid cascade complexity.

## 10. Animation Performance
Multiple CSS animations run simultaneously (bubbles, vinyl spin, lava lamp, disco ball, neon flicker). All are GPU-friendly (using `transform` and `opacity`). On low-end devices, the floating particles in the house view could be throttled.
