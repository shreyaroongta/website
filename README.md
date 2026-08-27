# Shreya Roongta — Learning Design Portfolio

A static professional portfolio for Shreya Roongta, a graduate student in Learning Design and Technology. It is designed to grow with case studies in instructional design, curriculum development, and educational technology.

## Stack and local development

Astro 7, TypeScript, Markdown/MDX-ready content collections, plain CSS, GitHub Actions, and GitHub Pages. Use Node.js 22 or newer.

```bash
npm install
npm run dev
```

Astro normally serves the site at `http://localhost:4321/website/`. Validate and build with:

```bash
npm run check
npm run build
npm run preview
```

The production output is `dist/`. Because this repository is `shreyaroongta/website`, the expected URL is `https://shreyaroongta.github.io/website/`.

## Add a portfolio project

Create `src/content/projects/project-name.md`:

```md
---
title: Project title
summary: A concise, factual description.
date: 2026-09-01
course: Optional course name
category: Instructional Design
featured: true
tools: [Tool name]
skills: [Learner analysis]
draft: false
---

## Overview
## Challenge
## Audience / Learners
## Design Process
## Solution
## Outcome
## Reflection
```

The index and detail route are generated automatically. Set `draft: true` to hide work. Fields besides title and summary are optional; `thumbnail` is also supported. Report only verified facts and outcomes.

## Important folders and personal content

- `src/pages/` — all primary routes; edit biography in `about.astro`, home copy in `index.astro`, and placeholders in `contact.astro` and `resume.astro`
- `src/components/` and `src/layouts/` — shared UI and project template
- `src/content/projects/` — Markdown/MDX case studies
- `src/styles/global.css` — design system and responsive rules
- `public/images/` — user-provided images
- `public/resume/` — add `shreya-roongta-resume.pdf`, then link it from the résumé page
- `.github/workflows/deploy.yml` — deployment workflow

## GitHub Pages

Every push to `main` installs locked dependencies, validates and builds Astro, then deploys `dist/`. For the first deployment, choose **Repository → Settings → Pages → Source → GitHub Actions**. No custom domain is required. If the repository moves, update `site` and `base` in `astro.config.mjs`.

This public repository must not contain secrets, private student information, transcripts, recommendation letters, or other sensitive documents. Environment files and generated output are ignored.
