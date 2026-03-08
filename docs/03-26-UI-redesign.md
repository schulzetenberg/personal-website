# UI Re-design (3/2026) - Implementation Plan

This document outlines the approach for redesigning the portfolio website to a **90s Memphis & Neo-Brutalist** aesthetic. The goal is to create a loud, confident, and highly structured design featuring high-contrast borders, solid blocks of color, varied retro patterns, and strong typography.

## Proposed Changes

### Global Styling and Configuration

These changes will set up the core design system for the Memphis/Neo-Brutalist theme.

#### [MODIFY] globals.css

- Define a high-contrast color palette: Jet Black (`#0f0f0f`), Cream/Off-White (`#f4f4f0`), pure White (`#ffffff`), and Neon Red-Orange (`#ff4500`) for accents.
- Add utility classes for brutalist elements: thick 4px solid borders (`neo-border`, `neo-card`), offset box shadows (`neo-shadow`).
- Add custom SVG pattern utilities for the Memphis theme to be used as section backgrounds:
  - `.bg-memphis-dots`
  - `.bg-memphis-plus`
  - `.bg-memphis-grid`
  - `.bg-memphis-stripes`
  - `.bg-memphis-waves`
  - `.bg-memphis-triangles`
- Add a custom repeating SVG stripe for transitions between sections.

---

### Layout and Base Application

#### [MODIFY] page.tsx

- Remove massive gaps between sections (`gap-24`) to allow the 4px black bottom borders on each section to sit flush against the next, creating a solid, structured page flow.

---

### Component Refactoring

#### [MODIFY] FullPageHeader.tsx (Hero Section)

- Redesign the hero section to be a striking focal point with large, high-impact typography.
- Background: `#f4f4f0` with `.bg-memphis-dots`.
- Apply a thick black border and a slight rotation to elements like the "Software Engineer" badge.
- Add a `z-index` fix by moving the decorative bottom stripe to sit above the pattern base.

#### [MODIFY] AboutSection.tsx

- Convert to a clean, stark layout with a white background (`#ffffff`) and the `.bg-memphis-plus` pattern.
- Incorporate a brutalist "System Profile" tag.
- Add a "Status: Crafting digital experiences" pixel/retro styled status bar with a pinging neon dot.

#### [MODIFY] SkillsSection.tsx

- Completely refactor the scrolling marquees into a clean, 3-column brutalist grid (Frontend Development, Backend & Data, Tools & DevOps) for better recruiter scannability.
- Add distinct Memphis colors (Teal, Purple, Orange) to the respective skill category cards.
- Background: `#f4f4f0` with `.bg-memphis-triangles` pattern.

#### [MODIFY] ProjectsSection.tsx

- Update project cards to use the new `.neo-card` styling with thick borders and striking hard-shadow hover states.
- Background: `#ffffff` with `.bg-memphis-stripes` pattern to ensure an alternating visual tempo from the grey Skills section.
- Apply a brutalist multiply-blend hover effect over the grayscale project images.

#### [MODIFY] InstagramSection.tsx

- Update the header copy from "Life & Lens" back to "Instagram".
- Apply the dark grey background (`#f4f4f0`) with `.bg-memphis-waves` to continue the alternating section tempo.

#### [MODIFY] Footer.tsx

- Simplify the footer back to a clean black background (`#000000`).
- Implement `framer-motion` scroll-reveal animations to smoothly slide the massive "Let's Talk" CTA, the social icons, and the copyright base into view.
- Fix mobile overflow styling on the social icons by reducing their default hover scaling.

## Verification Plan

### Automated Tests

- Run `npm run build` to ensure there are no TypeScript or compilation errors introduced during the refactor.
- Run `npm run lint` to ensure code quality rules are maintained.

### Manual Verification

- Run the local development server (`npm run dev`).
- Open the site in a browser and visually inspect:
  - The alternating background colors (grey / white) flow correctly without accidental gaps.
  - The distinct Memphis patterns correctly load as background textures.
  - The thick borders and shadow utilities render perfectly with high contrast.
  - Hover interactions on neo-cards and buttons feel sharp and immediate.
  - The footer layout scales well on mobile devices without horizontal overflow cutting off the icons.
  - Footer elements animate correctly into view upon scrolling.
