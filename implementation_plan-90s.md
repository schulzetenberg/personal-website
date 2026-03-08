# UI Re-design Implementation Plan: 90s Memphis / "Radical 90s" Aesthetic

Based on the provided reference image, the aesthetic is shifting away from the gray, Windows 95 "nerdy" interface and moving towards a vibrant, colorful, **"90s Memphis Pattern"** or **"Radical 90s"** style. This invokes classic MTV, Saved by the Bell, and bright geometric arcade carpeting.

## Design Concept & Aesthetic Direction

- **Colors:**
  - **Background:** Deep Purple/Midnight Navy (`#1d0d3b`)
  - **Accents:** Hot Pink (`#ff00a0`), Cyan/Aqua (`#00ffff`), Bright Yellow (`#ffea00`), and Lime Green (`#00ff66`).
- **Typography:**
  - Chunky, bold fonts for headings (like `Oswald` or `Righteous`) that can hold heavy, colorful drop shadows and outlines.
- **Shapes & Patterns:**
  - Floating geometric shapes (triangles, zigzags, squiggles, circles, and stairs) scattered across the layout.
  - Abstract fill patterns (diagonal stripes, polka dots) inside shapes or behind containers.
  - Thick black borders around brightly colored geometric containers, offset by hard, high-contrast drop shadows.
- **Layout:**
  - Energetic and slightly chaotic. Elements may feature rotated background accents or overlapping shapes to mimic the dynamic composition of Memphis design.

## User Review Required

> [!IMPORTANT]
> **Please review this new Memphis 90s design approach!**
> Since this is a very different vibe from Windows 95, I want to confirm:
>
> - Do you like the idea of the deep purple background with hot pink, cyan, and yellow geometric shapes scattered around?
> - Are you okay with chunky, bold typography with heavy colored drop-shadows?
>   Let me know if you approve this plan, or if there are specific shapes/colors you want emphasized!

## Proposed Changes

### Global Styling and Configuration

- **[globals.css](file:///Users/js/Documents/GitHub/personal-website/app/globals.css)**
  - Define the vibrant Memphis color palette via CSS variables.
  - Create utility classes for geometric background patterns (e.g., diagonal lines, dots).
  - Create utility classes for strong offset shadows (e.g., `box-shadow: 6px 6px 0px #ff00a0`).

### Component Refactoring

#### Hero ([FullPageHeader.tsx](file:///Users/js/Documents/GitHub/personal-website/components/FullPageHeader.tsx))

- Massive, colorful title text with offset shadow layers.
- Scatter pure CSS (or SVG) abstract geometric shapes (zigzags, scattered triangles) randomly behind the main content.

#### [AboutSection.tsx](file:///Users/js/Documents/GitHub/personal-website/components/AboutSection.tsx) & [SkillsSection.tsx](file:///Users/js/Documents/GitHub/personal-website/components/SkillsSection.tsx)

- Content lives inside bright, overlapping geometric boxes (e.g., a cyan box layered over a hot pink shadowed box).
- Marquees will use contrasting bright colors and bold borders.

#### [ProjectsSection.tsx](file:///Users/js/Documents/GitHub/personal-website/components/ProjectsSection.tsx)

- Cards should ditch the "desktop window" look for funky, asymmetrical borders or offset colorful shadow blocks.

#### [InstagramSection.tsx](file:///Users/js/Documents/GitHub/personal-website/components/InstagramSection.tsx) & [Footer.tsx](file:///Users/js/Documents/GitHub/personal-website/components/Footer.tsx)

- Consistent Memphis patterning, massive typography for "LET'S TALK", floating abstract shapes.

## Verification Plan

- Implement global styles and the Hero section first.
- Present a browser screenshot/walkthrough of the Hero to ensure the geometric patterns and colors hit the exact nostalgic tone intended by the reference image.
