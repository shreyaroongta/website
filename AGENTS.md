# Portfolio Project Instructions

## Purpose

This repository contains Shreya Roongta's professional Learning Design and
Technology portfolio. It supports her graduate work and should remain useful as
a long-term professional portfolio.

Primary audiences:

- Learning Design and Instructional Design hiring teams
- EdTech companies and curriculum-development teams
- Faculty, academic reviewers, and classmates

## Project architecture

- Astro static site with TypeScript and plain CSS
- Primary routes in `src/pages/`
- Shared UI in `src/components/`
- Page and case-study layouts in `src/layouts/`
- Project case studies in `src/content/projects/`
- Content schema in `src/content.config.ts`
- Design system and responsive rules in `src/styles/global.css`
- Static assets in `public/`
- GitHub Pages deployment in `.github/workflows/deploy.yml`

The repository is a GitHub project site. Preserve the production configuration
in `astro.config.mjs` unless the repository name or owner changes:

- Site: `https://shreyaroongta.github.io`
- Base path: `/website`
- Public URL: `https://shreyaroongta.github.io/website/`

## Design principles

Keep the experience professional, modern, warm, clean, accessible, responsive,
content-focused, and consistent. Prefer excellent typography, clear hierarchy,
generous spacing, restrained visual details, and minimal client-side JavaScript.

Avoid generic AI gradients, excessive rounded cards, glassmorphism, decorative
clutter, large animations, carousels, and unnecessary frameworks or dependencies.
Preserve the established color, typography, spacing, and component system.

## Content integrity

Never invent or imply unverified:

- Employment, employers, or job titles
- Credentials, degrees, certifications, or dates
- Projects, responsibilities, or outcomes
- Metrics, awards, skills, tools, or software expertise
- Contact information or other personal details

Use source material provided by Shreya. When information is missing, use
restrained placeholder copy or leave the field unpublished. Do not publish
private student information, transcripts, recommendation letters, secrets, or
other sensitive material.

Write in a natural, warm, reflective, and professional voice. Avoid inflated
marketing language and unsupported accessibility claims.

## Project and case-study standards

Add projects as Markdown or MDX files in `src/content/projects/`; do not build a
one-off project page. Begin with `case-study-template.md`, use verified content,
and set `draft: false` only when the project is ready to publish.

Case studies should generally include:

1. Overview
2. Challenge
3. Audience / Learners
4. Design Process
5. Solution
6. Tools / Technologies
7. Outcome
8. Reflection

Optional sections may cover research, learning objectives, storyboards,
prototypes, accessibility, evaluation, iteration, or deliverables when supported
by the project evidence.

## Accessibility and responsive standards

- Use semantic HTML and a logical heading hierarchy.
- Preserve visible keyboard focus and keyboard-accessible navigation.
- Use descriptive link text and meaningful alt text.
- Maintain sufficient contrast and never rely on color alone.
- Respect `prefers-reduced-motion`.
- Check layouts at narrow mobile and wide desktop viewports.
- Prevent horizontal overflow and verify long text remains readable.

## Engineering workflow

Use the existing, dependency-light Astro architecture. Do not add React, Vue, a
CMS, backend, database, or form service without a clear requirement.

Common commands:

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

Before completing substantial changes:

1. Run `npm run build` and fix all errors and meaningful warnings.
2. Check internal links, including the `/website/` base path.
3. Inspect affected pages at mobile and desktop widths.
4. Check browser console output when UI behavior changes.
5. Preserve accessibility, metadata, and the established design system.
6. Review `git diff` and `git status` for secrets or unrelated files.

## Deployment

Pushes to `main` trigger GitHub Actions and deploy the generated `dist/` folder
to GitHub Pages. Do not commit `dist/`, `node_modules/`, environment files, or
machine-specific artifacts. Do not configure or require a custom domain unless
Shreya explicitly requests one.
