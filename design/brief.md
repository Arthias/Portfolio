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
- Projects: borderless rows with project name and description, and a GitHub link when the repository is public.
- Case study: optional screenshot (full width, 1px border, 0.25rem radius), then a two-column list with monospace muted labels (Problem, My role, Outcome, Stack, With AI); one column under 40rem.
- Photo: square, 480 px, made with `node tools/photo.mjs`.
- Skills: clean plain wrapped list with subtle hover interaction.
- Section headings: clear sans-serif with subtle spacing.
- Dividers: SVG mountain ridge line dividers with low opacity between primary sections.

## Signature

- Move: Staggered entrance on load
- Guide: guides/ui-behaviors/dynamic-sibling-animations.md
- Where: the parts of the intro and overview settle into place sequentially when the page loads.

## Sections

1. `bio`: photo, name, headline, pitch, highlights, availability, location and languages.
2. `projects`: leading section for a job search. Artemis Quiver as a full case study with a screenshot, then Artemis Flow and the local LLM infrastructure (private, no code link).
3. `links`: GitHub, LinkedIn and email links.
4. `cv`: experience timeline, education, and hands-on skills.
5. `events`: DevFest Milano and workshop details.
6. `now`: up to three current activities, with the month written.
7. `posts`: shown as "Writing": published LinkedIn posts with date and a one-line summary.

Section order on the page is fixed by `site/index.html` and `site/assets/render.js`: optional modules such as `posts` always come after the widgets.
