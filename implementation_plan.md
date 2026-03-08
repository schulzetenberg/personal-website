# UI Re-design Implementation Plan

This document outlines the approach for redesigning the portfolio website to a modern, dark-themed, glassmorphic design while retaining the vertical scrolling layout. The goal is to create a unique, creative, and premium aesthetic without being overwhelming.

## Proposed Changes

### Global Styling and Configuration

These changes will set up the core design system for the dark theme and glassmorphism.

#### [MODIFY] globals.css

- Remove the existing light theme tokens.
- Add a new dark theme color palette (deep dark blues/blacks for base background, vibrant accents like glowing purple/blue/cyan for gradients).
- Introduce CSS variables for glassmorphism effects (e.g., `backdrop-blur`, semi-transparent background colors with varying opacities).
- Define unique smooth CSS animations (e.g., slow floating background elements, gentle pulse effects, smooth entrance fades).
- Define custom utilities for different layers of glass (`glass-panel`, `glass-card`, `glass-pill`).

---

### Layout and Base Application

Updates to the root layout to support the new theme.

#### [MODIFY] layout.tsx

- Update the `<body>` class to use a dark background instead of white.
- Add fixed, subtle ambient background elements (like massive glowing orbs or blurred gradients behind the content) to give the glass panels something beautiful to refract.
- Simplify font loading if necessary, prioritizing a modern clean sans-serif for UI elements and a bold display font for headings.

---

### Page Structure

Updates to the main landing page to incorporate new sections and adjust spacing for the new design.

#### [MODIFY] page.tsx

- Reorganize sections.
- Introduce new elements: an "About Me" blurb, and a "Skills" section (using a bento-box or pill design).
- Ensure smooth transitions and generous spacing between sections.

---

### Component Refactoring

#### [MODIFY] FullPageHeader.tsx (Hero Section)

- Completely redesign to be a striking focal point.
- Keep the headshot but potentially style it with a glowing border or glass container.
- Use animated gradient text for the name/title.
- Update the background from the static image to a dynamic CSS-based glowing dark background.

#### [NEW] AboutSection.tsx

- A new section featuring a sleek glassmorphic card containing a brief professional summary and a dynamically styled "Current Status" or "Currently building..." tag.
- Will use mock data for now.

#### [NEW] SkillsSection.tsx

- A new section displaying skills.
- Use a bento-box layout where each "box" is a frosted glass panel, or a floating cloud of glass pills.

#### [MODIFY] ProjectsSection.tsx

- Convert [ProjectCard](file:///Users/js/Documents/GitHub/personal-website/components/ProjectsSection.tsx#5-92) to use the new `glass-card` utility.
- Make the background of the cards partially transparent with a strong backdrop filter.
- Update hover effects to be smooth (e.g., slight lift, increased border glow, subtle sheen effect passing over the card).
- Adjust typography colors to ensure contrast against the dark background.

#### [MODIFY] InstagramSection.tsx

- Wrap the feed in a glassmorphic container to integrate it smoothly into the dark theme.

#### [MODIFY] Footer.tsx

- Simplify and modernize the footer, applying a dark translucent background.

## Verification Plan

### Automated Tests

- Run `npm run build` to ensure there are no TypeScript or compilation errors introduced during the refactor.
- Run `npm run lint` to ensure code quality rules are maintained.

### Manual Verification

- Run the local development server (`npm run dev`).
- Open the site in a browser and visually inspect:
  - The dark theme is applied consistently across all sections.
  - Glassmorphic panels correctly blur the background elements behind them.
  - Animations (hero entrance, floating backgrounds, hover states) are smooth and performant.
  - The vertical scrolling flow feels natural and well-paced.
  - The site remains responsive on mobile viewports.
