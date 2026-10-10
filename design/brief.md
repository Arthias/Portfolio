# Design brief

Source: Stitch HTML
Mood: structured, welcoming, precise. Minimal and crisp with an architectural, engineering feel: lists instead of heavy boxes, lots of space, and subtle technical accents.

## Style

- Style: Modern, with a Technical touch: monospace dates and metadata.
- Feel: structured, welcoming, precise.
- Personal detail: a subtle mountain ridge line divider between sections.
- Motion: subtle and short, 150 to 300 ms: things settle into place, nothing bounces. When the visitor prefers reduced motion, nothing moves.

## Colours

| Token | Light | Dark | Used for |
|---|---|---|---|
| background | #fafaf9 | #121414 | page background |
| surface | #f1f1ef | #1e2020 | cards, hover backgrounds, tags |
| text | #1b1b1a | #e2e2e2 | headings and body text |
| muted | #5f5f5b | #bec9c8 | headline under the name, dates, secondary text |
| accent | #0f6e6d | #4fd1ae | links, focus ring, buttons: dark cyan tone |
| on-accent | #ffffff | #121414 | text on an accent button |

## Type

| Role | Font | Size | Weight |
|---|---|---|---|
| headings | "Geist", system-ui, sans-serif | name 2rem, section 1.5rem, item 1.125rem | 600 |
| body | "Geist", system-ui, sans-serif | 1rem, line height 1.6 | 400 |
| details | "JetBrains Mono", ui-monospace, Menlo, Consolas, monospace | dates and labels 0.8125rem | 500 |

## Shapes

- Corner radius: 0.25rem (lg in Stitch) on hover list items and interactive badges; subtle rounded borders.
- Borders: thin 1px dividers in the muted colour thinned out, or light/dark surface container borders.
- Shadows: none.

## Layout

- Page width: single column, max-w-4xl (approx 56rem), centered with 1.5rem gutter padding on mobile.
- Space between sections: 4rem to 5rem; space between items in lists: 1rem to 1.5rem.
- How projects are arranged: clean borderless list stacked vertically with hover row treatment.

## Components

- Links: accent colour, subtle hover shift and keyboard focus outline.
- Projects: borderless rows with project name, description, and GitHub external link.
- Skills: clean plain wrapped list with subtle hover interaction.
- Section headings: clear sans-serif with subtle spacing.
- Dividers: SVG mountain ridge line dividers with low opacity between primary sections.

## Signature

- Move: Staggered entrance on load
- Guide: guides/ui-behaviors/dynamic-sibling-animations.md
- Where: the parts of the intro and overview settle into place sequentially when the page loads.

## Sections

1. `bio`: name, headline, pitch, highlights, availability and location.
2. `projects`: leading section for a job search, featuring Artemis Quiver and GitHub link.
3. `links`: GitHub, LinkedIn and email links.
4. `cv`: experience timeline, education, and technical competencies.
5. `events`: DevFest Milano and workshop details.
