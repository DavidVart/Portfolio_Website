# 📐 Implementation Guidelines (For Collaborators – SI 338 Final Project)

This project is the **SI 338 – Advanced Web Design & Accessibility** Final Project for *David Vargas*.
If you contribute code, **please follow these guidelines strictly** to ensure the project meets the course requirements for structure, accessibility, and technology usage.

These constraints are *non-negotiable* for academic compliance.

---

## 🔧 1. Tech Stack Requirements

**Allowed:**

* HTML5
* CSS3
* Vanilla JavaScript (no TypeScript)
* Small CDN-loaded libraries only if strictly necessary and accessibility-safe

**Not allowed:**

* No frameworks (❌ React, ❌ Vue, ❌ Angular, ❌ Svelte)
* No CSS frameworks (❌ Bootstrap, ❌ Tailwind, ❌ Bulma)
* No build tools (❌ npm, ❌ Webpack, ❌ Vite, ❌ Parcel)
* No back-end code (serverless functions, Node.js servers, etc.)
* No SCSS/Sass unless compiled *before* submission and not required to run the site

**Everything must run by simply opening** `index.html` in a browser.

---

## 📁 2. Required Project Structure

Follow this exact structure unless discussed beforehand:

```
.
├─ index.html
├─ css/
│  └─ styles.css
├─ js/
│  └─ main.js
└─ img/  (or assets/)
   └─ ...
```

* All HTML goes into `index.html`
* All styling goes into external CSS files under `/css`
* All JavaScript goes into external JS under `/js`
* No inline CSS unless extremely minor

---

## 🧩 3. HTML Guidelines (Semantic & Accessible)

**General**

* Use proper semantic elements:
  `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<form>`, `<h1>`…`<h3>`
* Exactly **one `<h1>`** on the entire page
* Sections must follow logical heading order (`h2` for each major section)

**Accessibility Requirements**

* Include a working **Skip to main content** link as the first focusable element
* Forms must use:

  * `<label for="id">`
  * Matching `id=""` attributes
  * `required` on mandatory fields
* Every interactive element MUST be a semantic element:

  * Buttons → `<button>`
  * Links → `<a href="…">`
  * No “div buttons” or “span links”

**Navigation**

* The mobile menu toggle must use:

  * `aria-expanded`
  * `aria-controls`
* Keyboard accessibility required:

  * You MUST be able to tab through the entire nav

---

## 🎨 4. CSS Guidelines (Responsiveness & WCAG)

**Accessibility**

* Provide visible, high-contrast **focus states**:

```css
:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 2px;
}
```

* Maintain **WCAG AA contrast ratios** for text & backgrounds

**Responsiveness**

* Use mobile-first CSS
* Use CSS Grid and Flexbox
* Include at least **two breakpoints** (e.g. 640px and 900px)

**Styling Rules**

* Use external CSS only (no massive inline styles)
* Organize CSS by component/section:

  * `.site-header`
  * `.hero`
  * `.card`
  * `.contact-form`
* Avoid resetting outlines or disabling text selection

---

## 🧠 5. JavaScript Guidelines (Behavior Only)

**General**

* Use `"use strict";`
* Keep logic modular inside functions
* Avoid polluting global scope

**Content Rendering**

* Projects, Experience, and Leadership content must be stored as **JS arrays of objects** and rendered dynamically (already implemented).

Example:

```javascript
const projects = [
  {
    title: "Ping.Me",
    description: "WhatsApp personal assistant.",
    tech: ["Node.js", "Twilio", "GCP"],
    link: "https://github.com/..."
  }
];
```

* Use `document.createElement` instead of dumping raw HTML with `innerHTML` whenever possible

**Navigation**

* Hamburger menu must:

  * Toggle `.is-open`
  * Update `aria-expanded="true/false"`
  * Close when clicking a nav link

**Forms**

* Client-side validation only
* Use `role="status"` + `aria-live="polite"` for feedback
* No API calls or backend integrations out of scope

---

## ♿ 6. Accessibility (WCAG 2.2 AA)

Contributors must test:

* Full keyboard navigation
* Skip link works
* Correct heading hierarchy
* Enough color contrast
* No keyboard traps
* No content hidden behind hover-only elements
* Focus order follows DOM order
* Mobile menu accessible with keyboard
* aria attributes correctly used and never misused

If unsure, test with:

* Chrome DevTools Accessibility Audit
* WAVE Browser Extension
* Axe DevTools

---

## ⚡ 7. Performance & Assets

* Optimize images (no 5 MB PNGs)
* Prefer `.webp` when possible
* Avoid unnecessary JS
* No auto-playing videos or audio

---

## 📝 8. Documentation & Comments

* Add comments for:

  * Navigation JS logic
  * Form validation logic
  * Non-obvious CSS (e.g., grid setups)

**README must include**:

* How to run the project
* Project purpose (SI 338 final)
* Structure and where to edit data (projects, experience, etc.)

---

## ❌ 9. Things Explicitly Not Allowed

* No React, Vue, Angular
* No Bootstrap, Tailwind, Material UI
* No npm, package.json, node_modules
* No backend or API keys
* No SCSS/Sass build pipelines
* No jQuery unless justified for accessibility (rare)
* No animations that violate **prefers-reduced-motion**

---

## 🎯 10. Developer Responsibility

Any collaborator must:

* Write semantic, accessible HTML
* Maintain a consistent coding style
* Leave the site working standalone
* Respect SI 338 constraints at all times
* Test before committing

If unsure whether something is allowed:
**Ask before implementing.**