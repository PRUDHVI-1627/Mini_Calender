# Mini Calendar

A clean, minimal date card built with vanilla HTML, CSS, and JavaScript.
No libraries, no build step — just open `index.html` in a browser.

---

## What it does

- Shows today's **date**, **day of the week**, **month**, and **year**
- Automatically refreshes at midnight so it's always correct
- Smooth entry animations on load
- Subtle hover lift effect

---

## Files

```
mini-calendar/
├── index.html   — markup & Google Fonts import
├── style.css    — all styling, animations, and responsive rules
├── script.js    — date logic + midnight auto-refresh
└── README.md    — you're reading it
```

---

## Usage

Just double-click `index.html` or serve the folder with any static server:

```bash
# Python
python -m http.server 8080

# Node (npx)
npx serve .
```

Then visit `http://localhost:8080`.

---

## Design notes

**Palette**
| Token | Hex | Role |
|-------|-----|------|
| Cream | `#f5f0e8` | Page background |
| Ink | `#1a1614` | Card background |
| Terracotta | `#c0533a` | Accent — month label, divider, dot |
| Sand | `#e8dfd0` | Day name |
| Muted | `#8a7f75` | Labels, tagline |

**Fonts** — loaded from Google Fonts (requires internet on first open):
- *Playfair Display* — date number & day name (serif, editorial)
- *DM Sans* — labels & month (clean, lightweight)

**Animations** — pure CSS `@keyframes`, no JavaScript animation libraries.
Each element staggers in independently so the card feels assembled rather than just "popping in."

---

## Browser support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).
No polyfills needed.

---

## License

Do whatever you like with it.