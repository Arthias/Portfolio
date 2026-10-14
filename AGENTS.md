# Portfolio — agent context

Bruno's personal site, live at https://arthias.github.io/Portfolio/. Started from the
DevFest Milano 2026 workshop template; the workshop roles and checkpoints no longer apply.
Read `README.md` first. **A push to `main` deploys the site**, so the never-push rule matters here.

<!-- COMMIT-RULE: revised 2026-10-14. Canonical text: F:\Dev\.commit-queue\_rule.md -->

## Git: commit your work, never push

- Commit your own changes with git as normal. Stage explicit paths, not `git add -A`:
  other sessions' work may be pending in the same repo.
- **Never push.** **Never delete a file that is untracked or has uncommitted changes.**
- If git fails (a sandbox that can't delete files leaves `index.lock` / `tmp_obj_*`
  behind), stop: don't retry and don't clean up the locks. Append one line to
  `F:\Dev\.commit-queue\queue.jsonl` — or to `.pending-commit.jsonl` in the repo root
  if `F:\Dev` isn't mounted — and Bruno commits it and prunes the leftovers by hand:

  `{"ts":"2026-10-14T09:00:00Z","source":"session:<id>","repo":"F:\\Dev\\<Repo>","action":"commit","paths":["docs/a.md"],"message":"..."}`

  All six fields are required. `repo` is an absolute path.
- Report in one line: "committed" or "queued".

## The site

- The site is plain HTML, CSS and JavaScript in `site/`. One build tool turns it into the finished site: `node tools/build.mjs` (the same command on every system) puts the content of `site/content.json` into the pages and writes the finished site into `_site/`. It uses only what comes with Node: never add npm packages, a `package.json` or another build tool. The preview, look, the Check and publishing build the site themselves.
- JavaScript is only for extras, never for content. The content is in the page itself, so it shows without JavaScript, and search engines and AI agents read it. Never load `site/content.json` in the browser.
- All content lives in `site/content.json`, which must match `site/content.schema.json`. Change content there, not in the HTML. That includes the page's own words, such as section headings, in the site's language: they are the `labels` in the content file.
- A photo of the person goes on the site only through `node tools/photo.mjs <file>` (the same command on every system): it saves a small square copy as `site/assets/photo.webp`, without the hidden data a phone saves in a photo, such as where it was taken. Never put the original photo into `site/`.
- The legal page, `site/privacy.html`, is written by `node tools/legal.mjs` (the same command on every system) from `site/content.json`: the legal notice with the person's name and email address, and their address, phone number and VAT number if the content file has them, the privacy notice and the accessibility statement, in English. Never write the legal page by hand.
- Load nothing from other servers: no fonts from fonts.googleapis.com, no scripts or styles from a CDN. A web font goes into `site/assets/fonts/` and is loaded from there. Loading it from Google would send every visitor's IP address to Google, which EU privacy law does not allow without consent.
- See whether the published site is live with `node tools/live.mjs` (the same command on every system). It prints the site's address on GitHub Pages and waits until the site online matches the last commit.
- Preview the site with `node tools/preview.mjs` (the same command on every system). It builds the site and prints a local address to open in Chrome; after a change, reload the page.
- Before choosing how to build any part of the page, read the matching guide in `.agents/skills/modern-web-guidance/`.
- Look at the site with `node tools/look.mjs` (the same command on every system). It saves screenshots of every page at phone and wide width, in light and dark mode, into `qa/`, and measures how fast the home page loads on a phone. Open the screenshots and look at them: the Check cannot see the layout.
- Check the site with `node tools/check.mjs` (the same command on every system). The Check is a tool next to the site, not part of it: it uses Node, the site never does. It reports what passes and what needs attention and never blocks.
