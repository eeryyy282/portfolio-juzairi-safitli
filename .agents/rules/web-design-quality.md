---
paths:
  - "**/*.css"
  - "**/*.scss"
  - "**/*.sass"
  - "**/*.less"
  - "**/*.html"
  - "**/*.tsx"
  - "**/*.jsx"
  - "**/*.vue"
  - "**/*.svelte"
---
> This file extends [common/patterns.md](common-patterns.md) with web-specific design-quality guidance.

# Web Design Quality Standards

## Anti-Template Policy

Do not ship generic template-looking UI. Frontend output should look intentional, opinionated, and specific to the product.

### Banned Patterns

- Default card grids with uniform spacing and no hierarchy
- Stock hero section with centered headline, gradient blob, and generic CTA
- Unmodified library defaults passed off as finished design
- Flat layouts with no layering, depth, or motion
- Uniform radius, spacing, and shadows across every component
- Safe gray-on-white styling with one decorative accent color
- Dashboard-by-numbers layouts with sidebar + cards + charts and no point of view
- Default font stacks used without a deliberate reason

### Required Qualities

Every meaningful frontend surface should demonstrate at least four of these:

1. Clear hierarchy through scale contrast
2. Intentional rhythm in spacing, not uniform padding everywhere
3. Depth or layering through overlap, shadows, surfaces, or motion
4. Typography with character and a real pairing strategy
5. Color used semantically, not just decoratively
6. Hover, focus, and active states that feel designed
7. Grid-breaking editorial or bento composition where appropriate
8. Texture, grain, or atmosphere when it fits the visual direction
9. Motion that clarifies flow instead of distracting from it
10. Data visualization treated as part of the design system, not an afterthought

## Before Writing Frontend Code

1. Pick a specific style direction. Avoid vague defaults like "clean minimal".
2. Define a palette intentionally.
3. Choose typography deliberately.
4. Gather at least a small set of real references.
5. Use ECC design/frontend skills where relevant.

## Worthwhile Style Directions

- Editorial / magazine
- Neo-brutalism
- Glassmorphism with real depth
- Dark luxury or light luxury with disciplined contrast
- Bento layouts
- Scrollytelling
- 3D integration
- Swiss / International
- Retro-futurism

Do not default to dark mode automatically. Choose the visual direction the product actually wants.

## Portfolio Contextual Alignment, Motion & Anti-AI-Slop Guardrails

- **Contextual Alignment:** Use centered framing where symmetry aids balance (e.g., mobile hero text above a stacked portrait, `explorePrompt` centered beneath `HeartbeatLine`, and centered section headers above symmetrical timelines or grids). Use left-alignment for dense body copy, asymmetric two-column splits, and all card/timeline internals for clean scanning.
- **Lively yet Controlled Motion:** Support deliberate signature motifs (`CONNECTED PULSE` heartbeat `pulse-beat` + `ekg-flow`, and organic `BlobPhotoFrame` `blob-morph` contour) alongside subtle `transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md` card/button micro-interactions. Always include `@media (prefers-reduced-motion: reduce)` to disable keyframe animations, and avoid harsh `animate-bounce` or `animate-ping`.
- **Anti-AI-Slop Guardrails:** Avoid purple gradients, gradient text (`bg-clip-text text-transparent`), heavy `blur-3xl`/`blur-2xl` neon glow blobs, pill badges stacked above every section heading, generic stat banners, decorative icon boxes around every icon, tiny ALL-CAPS labels (`10px–11px uppercase`), and emojis in navigation bars or hero badges. Stick to a 4-point spacing grid, clean `rounded-lg`/`rounded-xl` radii, and one primary solid-accent CTA per section.

## Component Checklist

- [ ] Does it avoid looking like a default Tailwind or shadcn template?
- [ ] Does it have intentional hover/focus/active states?
- [ ] Does it use hierarchy rather than uniform emphasis?
- [ ] Would this look believable in a real product screenshot?
- [ ] If it supports both themes, do both light and dark feel intentional?
