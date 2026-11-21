# AI Portfolio — Agent Instructions

## Quick Commands

```bash
npm run dev              # dev server at localhost:4321
npm run build            # production build to ./dist
npm run preview          # preview built site
npx astro check          # typecheck (requires @astrojs/check)
```

## Architecture

- **Framework**: Astro 7.2 (static output), Tailwind CSS v4 (CSS-first, no tailwind.config.mjs)
- **React islands**: Only `ThemeToggle.tsx` uses `@astrojs/react` with `client:load`
- **Icons**: `lucide-react` — no brand icons (LinkedIn, GitHub, etc. don't exist)
- **Fonts**: `@fontsource-variable/inter` self-hosted via CSS import
- **Data**: Typed constants in `src/assets/data/*.ts` (profile, skills, experience, projects, education, achievements)
- **Pages**: Single-page `index.astro` + `404.astro`
- **Deploy**: GitHub Actions → GitHub Pages at `https://nhatnamha.github.io/`

## Known Issues (fix before extending)

1. `src/components/SocialIcons.astro:49` — destructures `iconComponent` but data uses `Icon` (capital I)
2. `src/components/SocialIcons.astro:14,19` — `Lucide.Linkedin` / `Lucide.Github` don't exist in lucide-react 1.30.0
3. Project data missing `repoUrl`/`demoUrl` (schema supports them, all are empty)

## Conventions

- Components: `.astro` for static, `.tsx` for React islands
- Styles: Tailwind v4 `@theme` in `src/styles/global.css` (no config file)
- Dark mode: `class` strategy via `html.dark` toggle in `BaseLayout.astro` + `ThemeToggle.tsx`
- Animations: `IntersectionObserver` fade-in (`.fade-in-section` → `.is-visible`)
- Node: `>=22.12.0` (see `package.json:engines`)

## File Map

```
src/
├── assets/data/      # typed content (single source of truth)
├── components/       # UI components (Header, Hero, SkillGroup, TimelineItem, ProjectCard, etc.)
├── layouts/          # BaseLayout.astro (SEO, theme script, scroll observer)
├── pages/            # index.astro, 404.astro
└── styles/           # global.css (Tailwind v4 + fonts)
```

## CI/CD

`.github/workflows/deploy.yml` — builds on push to `main`, uploads `./dist` to GitHub Pages. Requires repo Settings → Pages → Source: GitHub Actions.

## References

- Full Astro docs: https://docs.astro.build
- Portfolio plan: `docs/portfolio-plan.md`
- Improvement backlog: `docs/portfolio-improvements.md`