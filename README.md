# Bruno Manfredi: portfolio

My personal site: **https://arthias.github.io/Portfolio/**

Solutions Architect and Technical Account Manager. The site covers who I am, the projects I build (Artemis Quiver, Artemis Flow, my local LLM infrastructure), my CV, what I am working on now and what I have written.

I built the first version at the *AI-Native Web Development, Hands-On* workshop at DevFest Milano on 10 October 2026, from [fabkrum/portfolio-template](https://github.com/fabkrum/portfolio-template), and have rewritten the content since.

## How it works

Plain HTML, CSS and JavaScript, with no npm packages and no framework. All content lives in one file, `site/content.json`, which must match `site/content.schema.json`. A Node build script puts that content into the pages, so the site shows its content without JavaScript and search engines and AI agents can read it. Every push to `main` builds and publishes to GitHub Pages through `.github/workflows/deploy.yml`, which also runs once a day.

Nothing loads from other servers: fonts are self-hosted and there are no trackers.

## Editing

Change content in `site/content.json`, never in the HTML. Then, from the repo folder:

| Command | What it does |
|---|---|
| `node tools/preview.mjs` | Builds the site and serves it locally; reload after a change |
| `node tools/check.mjs` | Schema, accessibility (axe), console errors, content without JavaScript, legal page |
| `node tools/look.mjs` | Screenshots at phone and wide width, light and dark, into `qa/`; LCP, CLS and layout checks |
| `node tools/build.mjs` | Writes the finished site into `_site/` |
| `node tools/live.mjs` | Waits until the published site matches the last commit |
| `node tools/photo.mjs <file>` | Makes `site/assets/photo.webp`: a 480 px square, with location and camera data removed |
| `node tools/legal.mjs` | Rewrites `site/privacy.html` (legal notice, privacy, accessibility) from the content file |

All of them need Node 22 or newer, and the Check and Look also need Google Chrome.

**Content rules.** Every claim on the site is checked against my own records before it goes up: dates, titles, numbers and education wording are exact, not rounded. Skills list only what I use hands-on. The copy avoids em dashes. Do not paraphrase a claim into something stronger.

## Changes from the template

- **Projects without a public repository.** `github` is optional on a project, and the "Code" link only shows when it is set. Artemis Flow and the LLM infrastructure are private.
- **Case-study styling.** The project screenshot and the problem / role / outcome / stack / AI list had no CSS in the generated stylesheet. They are styled in `site/assets/styles.css` with the existing tokens.
- **Language level.** Besides A1 to C2 and `native`, a language can be `professional working proficiency`.

## What is where

- `site/content.json`: all content. `site/content.schema.json`: what it may contain.
- `site/`: the source pages, styles, scripts, self-hosted fonts and images.
- `_site/`: the built site. Not in Git.
- `docs/spec.md`: who the site is for, what a visitor should do, and what is left out on purpose.
- `design/brief.md`: colours, type, layout, signature move and section order. `design/default-brief.md` is the template's default.
- `tools/`: build, preview, checks, screenshots, photo and legal-page tools. Node only, no dependencies.
- `.github/workflows/`: CI and the Pages deploy.
- `.agents/`, `AGENTS.md`, `checkpoints/`, `install.*`, `fonts/`: from the workshop template. The agent skills and the Modern Web Guidance are still useful for changes; the checkpoints and install scripts were for the workshop day.

## Public

This repo and the site are public, and Git keeps old versions. Nothing goes in here that should not be on the site.
