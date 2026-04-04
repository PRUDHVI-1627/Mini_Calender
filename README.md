# 📅 Mini Calendar

A clean, minimal calendar widget that displays the current date, day, month, and year — styled with a modern two-tone card design.

## Preview

The calendar renders as a card split into two sections:
- **Left (white):** Large date number and day name
- **Right (red):** Month and year

## Project Structure

```
├── index.html      # Main HTML structure
├── style.css       # Styling and layout
└── script.js       # JavaScript to populate current date
```

## Features

- Automatically displays today's date on load
- Shows full day name (e.g., Sunday), month (e.g., January), and year
- Zero-padded date (e.g., `01` instead of `1`)
- Fully static — no dependencies or frameworks required

## Getting Started

1. Clone or download the project files.
2. Open `index.html` in any modern browser.

No build tools or installations needed.

## How It Works

`script.js` uses the built-in JavaScript `Date` object to get the current date and populates the four elements in the HTML:

| Element ID | Value shown          |
|------------|----------------------|
| `#date`    | Day of month (01–31) |
| `#day`     | Day name (Sunday–Saturday) |
| `#month`   | Month name (January–December) |
| `#year`    | Full year (e.g., 2026) |

## Tech Stack

- HTML5
- CSS3 (Flexbox, linear-gradient)
- Vanilla JavaScript