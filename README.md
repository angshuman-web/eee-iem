# Department of Electrical & Electronics Engineering — IEM Kolkata

A premium, single-page departmental website redesign for the Department of EEE,
Institute of Engineering & Management. Built with **Vite + React + Tailwind CSS**.

Primary brand colour **#1656C4** on a predominantly white canvas, supported by
navy, light-blue and neutral-gray tones. Clean, editorial and restrained — soft
shadows, thin borders, subtle hover states and scroll-reveal motion.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  data/
    images.js      # image sources (Unsplash CDN — swap for department photos)
    menu.js        # navigation + quick-access shortcuts
    content.js     # all section content (edit copy/data here)
  components/
    common/        # Logo, Reveal (scroll animation), SectionHeader, CountUp
    layout/        # TopBar, Navbar, MegaMenu, Footer
    sections/      # Hero, About, WhyChoose, Programs, Faculty, Research,
                   # Labs, Achievements, Placements, Industry, News, Gallery,
                   # Resources, Alumni, Testimonials, CTA
  App.jsx          # composes the page + back-to-top
  index.css        # design tokens, base styles, utilities
```

## Sections

Hero + animated stats · About (vision / mission / HOD message) · Why Choose EEE ·
Academic Programs (searchable) · Faculty Spotlight · Research & Innovation ·
Laboratories · Student Achievements · Placements · Industry Collaborations ·
News & Events · Gallery · Student Resources · Alumni · Testimonials · Final CTA.

## Notes

- **Photography** is loaded from the Unsplash CDN via `src/data/images.js` for the
  demo. Replace those URLs with the department's own image library before launch.
- **Content** lives in `src/data/content.js` — copy, statistics, faculty, news and
  more are all data-driven, so editing text never requires touching components.
- The navbar **search** broadcasts a term to the Programs section (`iem:search`
  event) and filters programme cards.
- Motion honours `prefers-reduced-motion`.
