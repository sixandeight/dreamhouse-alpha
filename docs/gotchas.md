# Dreamhouse — Gotchas & Solutions

## 1. History API infinite loop

**Problem**: Wrapping `showRoom`/`showView` to add `history.pushState` meant the `popstate` handler (which calls these functions) would also push state, creating an infinite loop.

**Solution**: Separated display logic (`displayRoom`, `displayView`) from navigation logic (`navigateToRoom`, `navigateToHouse`). The popstate handler only calls display functions (no state push), while click handlers call navigate functions (with state push).

## 2. CSS aspect-ratio on grid children

**Problem**: Room cells inside the grid needed to fill their grid area, but `aspect-ratio` on the parent grid only constrains the grid container itself, not the children.

**Solution**: Used `aspect-ratio: 3/2` on `.rooms-grid` which makes the whole grid maintain the right proportions. Children automatically fill their grid cells since they're in a 2-row, 3-column layout.

## 3. GitHub Pages base path

**Problem**: GitHub Pages serves from `/dreamhouse-alpha/` not `/`. Relative paths in HTML need to account for this.

**Solution**: Used `./` relative paths for all asset references (`./styles.css`, `./app.js`). This works both locally and on GitHub Pages since the HTML file and assets are in the same directory.

## 4. .nojekyll required

**Problem**: GitHub Pages uses Jekyll by default, which can ignore files starting with underscores and process files differently.

**Solution**: Created a `.nojekyll` file in the root. Also using `gh-pages -t` flag to include dotfiles during deployment.

## 5. Custom cursor on Windows

**Problem**: Custom CSS cursors need to be small (max 32x32) and have a hotspot at the right position.

**Solution**: Used inline SVG data URIs for the cursor, keeping dimensions at 20x20 and 24x24. The cursor path draws a classic arrow shape. Falls back to `auto` / `pointer` if the SVG fails to load.

## 6. Room detail positioning

**Problem**: Using `position: absolute` for room details inside the room view caused stacking issues and prevented proper scrolling.

**Solution**: Changed to flow-based layout with `margin-top: 60px` to clear the fixed back button, and `height: calc(100vh - 60px)` for proper viewport filling.
