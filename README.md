# crossroad

A lightweight, minimalist personal browser startpage and dashboard designed for quick access to daily links, study resources, and cheat sheets.

Styled with the **Rosé Pine** dark palette and clean monospace typography.

## Features

- **Categorized Dashboard**: Organize links into color-accented columns (General, Music, School, Tools, etc.).
- **Rosé Pine Aesthetic**: Dark, distraction-free color scheme with subtle hover animations.
- **Reference Docs**: Built-in reference pages (like [Git Commit Cheat-Sheet](commit_cheat_sheet.html)) with styled code blocks and copy-to-clipboard functionality.
- **Zero Dependencies**: Pure HTML5, CSS3, and vanilla JavaScript—no build step or server required.

## Project Structure

```text
crossroad/
├── index.html               # Main startpage dashboard
├── commit_cheat_sheet.html  # Git semantic commit reference page
├── theme.css                # Base styles & Rosé Pine color variables
├── crossroad.css            # Dashboard grid layout & column accents
├── document.css             # Document & table layout for reference pages
└── theme.js                 # Interactive code blocks with copy button
```

## Getting Started

1. Open `index.html` directly in your browser:
   - Double-click `index.html` or drag it into any browser window.
   - (Optional) Set `file:///path/to/crossroad/index.html` as your browser's default homepage or new tab page using an extension like *New Tab Redirect*.

## Customization

- **Add/edit links**: Edit the `<div class="column">` sections in [index.html](index.html).
- **Colors & Themes**: Modify color tokens and accents in [theme.css](theme.css) and [crossroad.css](crossroad.css).
