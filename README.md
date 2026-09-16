# Sohail M — Portfolio

My personal portfolio, hosted **free** on GitHub Pages.

🔗 **Live site:** https://msohail15999.github.io

> Note: content is edited via `js/main.js` (the `CONFIG` block) and `index.html`. Bump the `?v=` query on the CSS/JS `<link>`/`<script>` in `index.html` after big changes to bust browser caches.

## ✨ What's inside
- Dark, bold, modern design with animated gradient background, glassmorphism, and scroll animations
- Fully responsive (looks great on phones)
- Light/dark theme toggle
- An extensible **"Cool Stuff" lab** section for interactive experiments
- No build step, no frameworks — just HTML, CSS, and vanilla JS

## 🗂 Structure
```
index.html      → the page and its content sections
css/style.css   → all styling (design tokens are at the top — tweak colors there)
js/main.js      → interactions + the CONFIG block where most content lives
assets/         → images (add your photo, project screenshots, etc.)
```

## ✏️ How to edit content
Most of what you'll change lives in **two easy places**:

1. **`js/main.js` → `CONFIG`** — your name's tagline words, skills, projects, and experience timeline are plain arrays. Edit the text, add/remove items.
2. **`index.html`** — the About cards, hero text, and contact links.

### Change the colors / vibe
Open `css/style.css` and edit the tokens under `:root` (e.g. `--violet`, `--pink`, `--cyan`). The whole site recolors instantly.

### Auto-load your GitHub projects (optional)
In `js/main.js`, find `githubAutoload`, set `enabled: true` and put your username. Your most recent public repos will appear as project cards automatically.

### Make the contact form send email (optional, free)
1. Create a free account at [formspree.io](https://formspree.io)
2. Make a new form, copy your endpoint (looks like `https://formspree.io/f/abcd1234`)
3. In `index.html`, replace the `action="https://formspree.io/f/your-id-here"` with your endpoint.

Until then, the form falls back to opening your email app — it still works.

## 🚀 Deploying updates
This repo IS the website. After editing:
```bash
git add .
git commit -m "Update content"
git push
```
GitHub Pages redeploys automatically in ~1 minute.

---
Built with care. Hosted free on GitHub Pages.
