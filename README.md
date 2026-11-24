# Academic PhD Homepage & Research Blog

A modern, minimalist academic website built with **Astro**, **Tailwind CSS**, and **KaTeX**, tailored for PhD students in physics, materials science, and computational sciences.

## Features

- **Home**: Hero bio + portrait, research interests, news timeline, selected publications, and recent writing.
- **Publications**: Interactive filtering by year, type, and topic; expandable abstracts; one-click BibTeX copy; optional teaser thumbnails.
- **Blog & Research Notes**: Markdown posts with **LaTeX math** (KaTeX), syntax-highlighted code blocks (Shiki dual light/dark themes), auto-generated Table of Contents, tag filtering, and RSS feed (`/rss.xml`).
- **Projects**: Clean card grid for open-source codes, datasets, and demos.
- **Online CV**: Web-based academic CV timeline with print-ready styling and PDF download support.
- **Light & Dark Mode**: Zero-flash theme toggle respecting system preference.
- **GitHub Pages Ready**: Includes `.github/workflows/deploy.yml` for automated deployment.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:4321` in your browser.

## Customizing Your Information

All sample data (currently populated for a Physics / Materials Science PhD persona) is cleanly separated:

| What to Edit | File |
|---|---|
| Name, bio, email, socials, news | `src/data/profile.ts` |
| Publications & BibTeX | `src/data/publications.ts` |
| Open-source projects & demos | `src/data/projects.ts` |
| CV (Education, Experience, Awards, Skills) | `src/data/cv.ts` |
| Blog posts & research notes | `src/content/blog/*.md` |
| Portrait photo & thumbnails | `public/images/` (replace `avatar.svg` with your photo and update `profile.ts`) |
| Downloadable PDF CV | Place your file at `public/cv.pdf` |
| Site URL / Base Path | `astro.config.mjs` |

## Deploying to GitHub Pages

1. Create a repository named `<your-github-username>.github.io`.
2. Update `site` in `astro.config.mjs` to `https://<your-github-username>.github.io`.
3. Push this project to the `main` branch.
4. In your repository **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
5. Every push to `main` will automatically build and publish your site.
