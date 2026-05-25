# sophie-strassmann.github.io

Personal academic website for Sophie Strassmann-Peña, built with [Jekyll](https://jekyllrb.com/)
and hosted on GitHub Pages. Ported from the previous Quarto site.

## Quick start

### 1. Install Ruby

You need Ruby 3.x. On macOS, the easiest way is via Homebrew:

```bash
brew install ruby
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

On Ubuntu/Debian:

```bash
sudo apt install ruby-full build-essential zlib1g-dev
```

On Windows, use [RubyInstaller](https://rubyinstaller.org/) with the Devkit.

### 2. Install Bundler and project gems

From the project root:

```bash
gem install bundler
bundle install
```

### 3. Serve locally

```bash
bundle exec jekyll serve --livereload
```

Visit <http://localhost:4000>. Edits to `.md`, `.scss`, `.html`, and `_data/*.yml`
hot-reload. Changes to `_config.yml` require restarting the server.

## What lives where

```
.
├── _config.yml              # Site settings, nav, plugins
├── _data/
│   ├── publications.yml     # ← add/edit papers here
│   └── news.yml             # ← add/edit news items here
├── _includes/               # Reusable HTML partials
│   ├── head.html
│   ├── header.html
│   ├── footer.html
│   └── publication.html     # Per-publication renderer
├── _layouts/                # Page templates
│   ├── default.html         # Shell (header + footer)
│   ├── page.html            # Standard page with title block
│   ├── home.html            # Wider, no auto-title
│   └── post.html            # For any future blog posts
├── _pages/                  # Main content pages
│   ├── about.md
│   ├── cv.md
│   ├── research.md
│   └── teaching.md
├── _sass/                   # Source stylesheets (SCSS)
│   ├── _variables.scss      # ← change palette/fonts here
│   ├── _base.scss
│   ├── _layout.scss
│   ├── _components.scss
│   └── _dark.scss
├── assets/
│   ├── css/main.scss        # SCSS entry point
│   ├── js/theme.js          # Dark-mode toggle
│   ├── img/                 # ← put portrait.png and favicon.png here
│   └── pdf/                 # ← put resume.pdf here
├── index.md                 # Homepage
├── 404.html
├── robots.txt
└── Gemfile
```

## Common tasks

### Add a publication

Edit `_data/publications.yml`. Each entry is a YAML block:

```yaml
- year: 2026
  title: "Computational adoption lag in economics: a bibliometric measure"
  authors: "Strassmann-Peña, S."
  venue: "Working paper"
  type: "Working paper"   # or "Article" | "Preprint" | "Essay" | "Report"
  abstract: "One-sentence summary, optional."
  links:
    - label: "PDF"
      url: "/assets/pdf/computational-adoption-lag.pdf"
    - label: "DOI"
      url: "https://doi.org/..."
```

Entries auto-sort by year (descending) on both the homepage (top 4) and the
research page (all).

### Add a news item

Edit `_data/news.yml`. Pattern:

```yaml
- date: 2026-05-25
  text: >-
    Started reading group on computational social science methods at UdeM.
```

The homepage shows the 5 most recent.

### Change the palette

Edit `_sass/_variables.scss`. The `:root` block holds the light-mode tokens;
`_sass/_dark.scss` holds the dark-mode overrides. Both share names so a single
change propagates through the whole site.

### Change a page's body

Pages are plain Markdown in `_pages/`. The YAML front-matter at the top
controls the title block:

```yaml
---
layout: page
title: "Research"
eyebrow: "Research agenda &amp; publications"
subtitle: "Optional one-liner."
permalink: /research/
---
```

### Swap the portrait

Drop a square portrait at `assets/img/portrait.png`. The homepage hero displays it
in a circle with a subtle border. If no image is present it silently hides.

### Update the CV PDF

Replace `assets/pdf/resume.pdf`. The CV page's "Download CV" button points there.

## Analytics &amp; consent

The site loads **Google Analytics 4** and **PostHog (EU instance)** only
after the visitor explicitly accepts the cookie banner. Both services are
disabled until consent is given — this is what makes the site compliant
with Quebec's Law 25 and the EU's GDPR.

### Configuration

All analytics config lives in `_config.yml` under the `analytics:` key:

```yaml
analytics:
  ga_id: "G-YD2X7B39XH"
  posthog_key: "phc_REPLACE_WITH_YOUR_KEY"
  posthog_host: "https://eu.i.posthog.com"
```

### PostHog setup (5 minutes)

1. Sign up at <https://eu.posthog.com> (free tier: 1M events/month).
2. Create a new project. Use "Sophie Strassmann personal site" or similar.
3. From the project's **Settings → Project → Project API Key**, copy the
   key that starts with `phc_`.
4. Paste it into `_config.yml` replacing `phc_REPLACE_WITH_YOUR_KEY`.
5. Commit and push — no other changes needed.

### Turning a provider off

Set its ID to the empty string in `_config.yml`:

```yaml
analytics:
  ga_id: ""              # GA disabled
  posthog_key: "phc_..."  # PostHog still on
```

The corresponding loader becomes a no-op, no script tag is injected.

### What the banner actually does

- "Accept analytics" → loads both GA and PostHog, stores `consent=accept`
  in localStorage. Re-visits skip the banner and load analytics directly.
- "Essentials only" → loads nothing tracking-related, stores
  `consent=essentials`. Re-visits skip the banner and load nothing.
- Footer "Cookie preferences" link → clears the stored choice and
  reloads, showing the banner again.

The `/privacy/` page explains all of this to visitors in plain language —
worth reviewing for accuracy before launch.

### Verifying analytics post-deploy

After pushing to GitHub Pages:

1. Open the site in a private/incognito window.
2. Open the browser devtools → Network tab.
3. **Before** clicking Accept: confirm no requests to `google-analytics.com`,
   `googletagmanager.com`, or `eu.i.posthog.com`. (You will see the gtag
   loader script itself only **after** clicking Accept.)
4. Click "Accept analytics" — confirm requests appear to both services.
5. Refresh the page — confirm requests fire on every page load without
   re-showing the banner.
6. Click "Cookie preferences" in the footer — confirm the banner returns
   and the choice resets.

If GA shows zero traffic 24 hours after launch, the most likely cause is
an ad blocker. Test in a clean browser profile without uBlock/AdBlock.

## Deploying to GitHub Pages

This site is configured to build cleanly on GitHub Pages with no custom build
step required — every gem and plugin in the `Gemfile` is on the GH Pages
allowlist.

### Option A — User/organization site (recommended)

1. Create a new GitHub repo named **`<your-username>.github.io`** (the name
   must match your GH username exactly).
2. Push this project to the `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Initial Jekyll site"
   git branch -M main
   git remote add origin git@github.com:<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```

3. In the repo: **Settings → Pages → Source → "Deploy from a branch"**. Pick
   `main` and folder `/ (root)`. Save.
4. Wait 1–3 minutes for the first build. Site is live at
   `https://<your-username>.github.io`.
5. Update `_config.yml`:

   ```yaml
   url: "https://<your-username>.github.io"
   baseurl: ""
   ```

### Option B — Project site (`/<repo-name>/` URL)

If you'd rather use a repo named something other than your username:

1. Create the repo, push as above.
2. In `_config.yml`:

   ```yaml
   url: "https://<your-username>.github.io"
   baseurl: "/<repo-name>"
   ```

3. Same Pages setting (main / root).

### Option C — Custom domain

After steps in A or B:

1. Add a file named `CNAME` at the project root containing just your domain
   (e.g. `sophiestrassmann.com`).
2. At your DNS provider, point an `A` record at GitHub Pages' IPs
   ([current list here](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)).
3. **Settings → Pages → Custom domain** — enter the domain, save, enable
   "Enforce HTTPS" once GitHub provisions the cert (5–60 min).
4. Update `_config.yml` `url:` to the custom domain.

## Migrating from Netlify

The old Quarto site at `sophie-strassmann.netlify.app` can stay live until
you're happy with this one. When ready:

1. Confirm the new site works at its GH Pages URL.
2. Either: take the Netlify site down via the Netlify dashboard, or set up a
   redirect at Netlify pointing to the new domain.
3. If you keep the same custom domain, switch the DNS to GitHub Pages (Option C)
   — there is no need to coordinate; DNS will propagate within ~1 hour.

## Adding a custom plugin (advanced)

GitHub Pages runs a fixed allowlist of plugins. If you ever need one outside
that list (e.g. `jekyll-archives`, `jekyll-katex`), switch the deploy to a
GitHub Actions workflow:

1. Add a `.github/workflows/jekyll.yml` (template is in this repo at
   `.github/workflows/jekyll.yml`, currently disabled — rename to `.yml.example`
   if you don't need it).
2. In **Settings → Pages → Source**, switch to "GitHub Actions".

For now, the stock allowlisted build is enough.

## Estimated time to set up

| Task                                       | Burned-out neurodivergent | Regulated baseline |
| ------------------------------------------ | ------------------------- | ------------------ |
| Install Ruby + Bundler                     | 1.5 hours                 | 25 minutes         |
| First `bundle install` + serve locally     | 45 minutes                | 10 minutes         |
| Push to GitHub and enable Pages            | 1 hour                    | 15 minutes         |
| Drop in portrait + CV PDF                  | 30 minutes                | 5 minutes          |
| Custom domain (optional)                   | 1.5 hours                 | 30 minutes         |
| **Total to a live site at GH URL**         | **~3.5 hours**            | **~55 minutes**    |

The burned-out estimates assume context-switching costs and the small
debugging detours that happen with Ruby on a fresh machine (rbenv issues,
permission errors, etc.). The regulated estimates assume Ruby is already
installed and the GitHub workflow is familiar.

## License

Content (text, CV, publications): © Sophie Strassmann-Peña.
Code (templates, SCSS, JS): MIT, do as you like.
