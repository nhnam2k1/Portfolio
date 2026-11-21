# Portfolio Implementation Plan

## Overview

Build a personal portfolio site for **Nhat Nam Ha** and host it on **GitHub Pages** at `https://<github-username>.github.io/AI_Portfolio`.

**Tagline:** Software Engineer | Backend & Cloud

---

## Tech Stack

| Layer | Tool | Purpose |
|---|---|---|
| Framework | Astro 5 | Component-based, ships zero JS by default, fast TTI |
| UI / Styling | Tailwind CSS | Industry standard, customizable, tiny CSS bundle |
| Interactivity | React islands (via `@astrojs/react`) | Used only where needed (theme toggle) |
| Icons | `lucide-react` | Lightweight icon set |
| Fonts | `@fontsource-variable/inter` | Self-hosted variable Inter font |
| Sitemap | `@astrojs/sitemap` | SEO |
| Linting | ESLint + Prettier | Code quality |
| Deployment | GitHub Actions → GitHub Pages | Free, automatic deploys on push |

---

## Content Map (Resume → Portfolio)

### Hero
- Avatar: Initials "NH" (styled gradient circle)
- Name: Nhat Nam Ha
- Tagline: "Software Engineer | Backend & Cloud"
- Subtitle: Eindhoven, Netherlands · Open to opportunities
- CTAs: `View Projects` · `Download CV` · `Contact`

### Skills
```
Languages    → C# (4y) · C++ (3y) · JavaScript (3y) · Java (1y) · Python (1y)
Web & DB     → React · ASP.NET Core · RESTful APIs · MySQL · MongoDB
DevOps/Cloud → GitHub · GitLab CI/CD · Docker · Kubernetes · Azure
```

### Experience (reverse-chronological timeline)
1. **Fontys ICT InnovationLab** — Software Engineering (Platform) Intern · Feb–Jul 2025 · Eindhoven, NL
   - Developed and maintained Kafka topic management features and associated message schemas.
   - Set up Apache Kafka and Kubernetes clusters on Fontys' Virtual Machines for testing and production.
   - Collaborated with Tech Lead and research group students to integrate Kafka queues into academic assignments.

2. **Vanderlande Industries** — Software Engineering Intern · Sep 2022 – Jan 2023 · Veghel, NL
   - Trained in the DCS APS department, providing IT solutions to major airports; collaborated with 2 engineers.
   - Improved RESTful APIs for test integration tool, reducing processing time by 95%.
   - Collaborated on setting up and testing new automated CI/CD pipelines.

### Projects (3 cards)
1. **Virtual Human** — AI software architecture for interaction between virtual and real humans
   - Stack: Spring Boot (Java), Apache Kafka, Strimzi, Docker, Kubernetes, Docker-in-Docker (DinD)
   - Experimented with compression algorithms and message formats to improve Kafka message latency by 50%.
   - Applied Parallel Garbage Collector to keep Kafka broker memory usage around 600MB while maintaining low latency.
   - Implemented CI/CD pipeline with Unit Tests, SonarQube analysis, and Trivy scanning to automate quality and security checks.

2. **ChatsApp** — Cloud-native chat application
   - Stack: React JS, ASP.NET Core (C#), Docker, Azure (Container App, Message Bus, API Management), MongoDB
   - Earned grade 3/4 (Proficient) on Cloud Native, Scalable Architectures, and Distributed Data.
   - Earned grade 4/4 (Advanced) on DevOps and Security by Design.

3. **Vanderlande Tool (REST APIs)** — Internal test integration API modernization
   - Stack: C#, NUnit, REST APIs, Application Lifecycle Management (ALM)
   - Modernized C# source code and reduced processing time from 2–3 hours to 15–100 seconds.
   - Implemented 50 unit tests using NUnit for behavior validation before deployment.
   - Released new version to departments across the organization after 3 months.

### Education
- **Fontys University of Applied Science** (Sep 2019 – Jul 2025) · B.S. in ICT – Software Engineering · Eindhoven, NL
  - Completed Foundations of Computer Science, Advanced Software Engineering with grade 8.9/10.
- **The Hague University of Applied Science** (Sep 2024 – Jan 2025) · ICT Minor – Innovative Data Visualization · Den Haag, NL
  - Recommended improvements to 3D underground data visualization (Municipality of Zoetermeer).
  - Received grade 8 for presentation on applying Concurrent Programming in Python.

### Achievements / Highlights
- Accepted Software Engineering Internship offer — **Uber B.V** (Feb 2025)
- Accepted Software Engineering Internship offer — **TomTom B.V** (Jul 2022)
- **Google Hash Code 2021** — Ranked 4331st globally, 22nd in Vietnam
- **ACM ICPC — NWERC** — 99/123 (2019), 92/120 (2020)
- **ACM ICPC — BAPC** — 24/56 (2019), 29/90 (2020)

### Contact
- Email: nhnam.ha@gmail.com
- LinkedIn, GitHub, HackerRank icons in footer + contact section
- Phone (optional): +84346202759 (VN), +31645494214 (NL)

---

## Project Structure

```
AI_Portfolio/
├── public/
│   ├── resume/
│   │   └── Nhat Nam Ha_2026.pdf        ← moved from root
│   ├── favicon.svg
│   └── og-image.png
├── src/
│   ├── assets/
│   │   └── data/
│   │       ├── profile.ts              ← name, tagline, social URLs
│   │       ├── skills.ts               ← categorized skill arrays
│   │       ├── experience.ts           ← role objects
│   │       ├── education.ts
│   │       ├── projects.ts             ← 3 project objects
│   │       └── achievements.ts
│   ├── components/
│   │   ├── Avatar.astro                ← initials avatar
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Section.astro               ← reusable section wrapper
│   │   ├── SkillGroup.astro
│   │   ├── TimelineItem.astro
│   │   ├── ProjectCard.astro
│   │   ├── EducationCard.astro
│   │   ├── AchievementItem.astro
│   │   ├── SocialIcons.astro
│   │   └── ThemeToggle.tsx             ← React island for dark mode
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro                 ← single-page with all sections
│   │   └── 404.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml                  ← GitHub Actions → GitHub Pages
```

---

## Data File Schemas

### `src/assets/data/profile.ts`
```ts
export const profile = {
  name: 'Nhat Nam Ha',
  initials: 'NH',
  tagline: 'Software Engineer | Backend & Cloud',
  email: 'nhnam.ha@gmail.com',
  phone: { vn: '+84346202759', nl: '+31645494214' },
  location: 'Eindhoven, Netherlands',
  cvUrl: '/resume/Nhat Nam Ha_2026.pdf',
  social: {
    linkedin:   'https://linkedin.com/in/...',   // ← TODO
    github:     'https://github.com/...',        // ← TODO
    hackerrank: 'https://hackerrank.com/...',    // ← TODO
  },
};
```

### `src/assets/data/skills.ts`
```ts
export const skillGroups = [
  {
    category: 'Languages',
    skills: [
      { name: 'C#',         years: 4 },
      { name: 'C++',        years: 3 },
      { name: 'JavaScript', years: 3 },
      { name: 'Java',       years: 1 },
      { name: 'Python',     years: 1 },
    ],
  },
  {
    category: 'Web & Databases',
    skills: [
      { name: 'React' },
      { name: 'ASP.NET Core' },
      { name: 'RESTful APIs' },
      { name: 'MySQL' },
      { name: 'MongoDB' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    skills: [
      { name: 'GitHub' },
      { name: 'GitLab CI/CD' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'Azure' },
    ],
  },
];
```

### `src/assets/data/projects.ts`
```ts
export type Project = {
  title: string;
  summary: string;
  stack: string[];
  highlights: string[];
  period?: string;
  repoUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: 'Virtual Human',
    summary: 'AI software architecture for interaction between virtual and real humans.',
    stack: ['Spring Boot', 'Apache Kafka', 'Strimzi', 'Docker', 'Kubernetes', 'DinD'],
    highlights: [
      'Improved Kafka message latency by 50% via compression algorithms and message-format tuning.',
      'Applied Parallel Garbage Collector to keep Kafka broker memory usage around 600MB with low latency.',
      'Built CI/CD pipeline with Unit Tests, SonarQube analysis, and Trivy security scanning.',
    ],
  },
  {
    title: 'ChatsApp',
    summary: 'Cloud-native chat application built with React and ASP.NET Core on Azure.',
    stack: ['React JS', 'ASP.NET Core', 'Docker', 'Azure Container App', 'Azure Message Bus', 'Azure API Management', 'MongoDB'],
    highlights: [
      'Proficient grade (3/4) on Cloud Native, Scalable Architectures, and Distributed Data.',
      'Advanced grade (4/4) on DevOps and Security by Design.',
    ],
  },
  {
    title: 'Vanderlande Tool (REST APIs)',
    summary: 'Modernization of an internal test integration tool used across airport operations.',
    stack: ['C#', 'NUnit', 'REST APIs', 'ALM'],
    highlights: [
      'Reduced processing time from 2–3 hours to 15–100 seconds.',
      'Implemented 50 NUnit unit tests to validate behavior before deployment.',
      'Released new version org-wide after a 3-month rollout.',
    ],
  },
];
```

### `src/assets/data/experience.ts`
```ts
export const experience = [
  {
    company: 'The lectorate Interaction Design — Fontys ICT InnovationLab',
    role: 'Software Engineering (Platform) Intern',
    location: 'Eindhoven, Netherlands',
    period: 'Feb 2025 – Jul 2025',
    bullets: [
      'Developed and maintained Kafka topic management features and their associated message schemas.',
      'Set up Apache Kafka and Kubernetes clusters on Fontys’ Virtual Machines for testing and production.',
      'Collaborated with the Tech Lead and research group students to integrate Kafka queues into academic assignments.',
    ],
  },
  {
    company: 'Vanderlande Industries',
    role: 'Software Engineering Intern',
    location: 'Veghel, Netherlands',
    period: 'Sep 2022 – Jan 2023',
    bullets: [
      'Trained in the DCS APS department, providing IT solutions to major airports; collaborated with 2 engineers.',
      'Improved RESTful APIs for the test integration tool, reducing processing time by 95%.',
      'Collaborated on setting up and testing new automated CI/CD pipelines.',
    ],
  },
];
```

### `src/assets/data/education.ts`
```ts
export const education = [
  {
    school: 'Fontys University of Applied Science',
    degree: 'B.S. in ICT – Software Engineering',
    location: 'Eindhoven, Netherlands',
    period: 'Sep 2019 – Jul 2025',
    notes: [
      'Completed Foundations of Computer Science and Advanced Software Engineering with grade 8.9/10.',
    ],
  },
  {
    school: 'The Hague University of Applied Science',
    degree: 'ICT Minor – Innovative Data Visualization',
    location: 'Den Haag, Netherlands',
    period: 'Sep 2024 – Jan 2025',
    notes: [
      'Recommended improvements to 3D underground-data visualization for the Municipality of Zoetermeer.',
      'Received grade 8 for presenting on applying Concurrent Programming in Python.',
    ],
  },
];
```

### `src/assets/data/achievements.ts`
```ts
export const achievements = [
  { title: 'Uber B.V — Software Engineering Internship Offer', period: 'Feb 2025' },
  { title: 'TomTom B.V — Software Engineering Internship Offer', period: 'Jul 2022' },
  { title: 'Google Hash Code 2021',  detail: '4331st globally · 22nd in Vietnam', period: '2021' },
  { title: 'ACM ICPC — NWERC',       detail: '99/123 teams (2019), 92/120 teams (2020)', period: '2019–2020' },
  { title: 'ACM ICPC — BAPC',        detail: '24/56 teams (2019), 29/90 teams (2020)', period: '2019–2020' },
];
```

---

## Section Composition (`src/pages/index.astro`)

```
<BaseLayout>
  <Header />
  <Hero />
  <Section id="skills">       {skillGroups.map(...)}</Section>
  <Section id="experience">   {experience.map(TimelineItem)}</Section>
  <Section id="projects">     {projects.map(ProjectCard)}</Section>
  <Section id="education">    {education.map(EducationCard)}</Section>
  <Section id="achievements">{achievements.map(AchievementItem)}</Section>
  <Section id="contact">      <SocialIcons</Section>
  <Footer />
</BaseLayout>
```

---

## Styling Direction

- **Theme:** Light / dark toggle · system preference default · persisted in `localStorage`
- **Palette:** Neutral base (`slate`/`zinc`) + one accent (`indigo` or `emerald`) — professional feel for backend/cloud positioning
- **Typography:** Inter variable (self-hosted) for body · JetBrains Mono for tech labels
- **Layout:** Single column, max-width ~1100px, generous vertical rhythm, sticky minimal header
- **Animations:** Subtle fade-in on scroll via `IntersectionObserver` (no library)

---

## Deployment Pipeline

### `astro.config.mjs`
```js
export default defineConfig({
  site: 'https://<github-username>.github.io',
  base: '/AI_Portfolio',
  output: 'static',
  integrations: [
    react(),
    tailwind(),
    sitemap(),
  ],
});
```

### `.github/workflows/deploy.yml`
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v5
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### First push
```bash
git init
git add .
git commit -m "feat: initial portfolio setup"
git branch -M main
git remote add origin git@github.com:<username>/AI_Portfolio.git
git push -u origin main
```

Then in GitHub UI: **Settings → Pages → Source: GitHub Actions**

---

## Execution Order

1. Scaffold Astro + Tailwind + TypeScript in the empty directory.
2. Install deps: `@astrojs/tailwind`, `@astrojs/react`, `@astrojs/sitemap`, `@fontsource-variable/inter`, `lucide-react`, `clsx`.
3. Move `Nhat Nam Ha_2026.pdf` from root → `public/resume/`.
4. Create `src/assets/data/*.ts` with all resume-derived content.
5. Build `BaseLayout.astro` (head, SEO, theme bootstrap, fonts).
6. Build `Header.astro`, `Footer.astro`, `Section.astro`.
7. Build `Avatar.astro`, `Hero.astro`, `ThemeToggle.tsx`.
8. Build `SkillGroup.astro`; wire skills section.
9. Build `TimelineItem.astro`; wire experience section.
10. Build `ProjectCard.astro`; wire projects section.
11. Build `EducationCard.astro`, `AchievementItem.astro`; wire those sections.
12. Build `SocialIcons.astro`; wire contact + footer.
13. Compose `pages/index.astro` and `pages/404.astro`.
14. Configure `astro.config.mjs` (GH Pages) and `tailwind.config.mjs` (dark mode: 'class').
15. Add `deploy.yml` workflow.
16. `git init`, commit, push to GitHub.
17. Enable GitHub Pages (Settings → Pages → Source: GitHub Actions).
18. Verify live at `https://<username>.github.io/AI_Portfolio`.

---

## Open Items

- [ ] **GitHub username** — needed for repo name + profile URL
- [ ] **LinkedIn URL** — needed for footer/contact link
- [ ] **HackerRank profile URL** — optional, only if you want it linked

> If URLs are not provided, placeholder values will be used in `profile.ts` and can be filled in later.

---

## Future Enhancements

- Blog section via Astro Content Collections (Markdown)
- Privacy-friendly analytics (Plausible / Cloudflare Web Analytics)
- Project filtering by tag (React island)
- MDX support for embedding React components in project write-ups
- `astro:assets` for optimized images once real screenshots are available
- Lighthouse + accessibility audit pass
