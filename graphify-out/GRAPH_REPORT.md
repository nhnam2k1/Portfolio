# Graph Report - AI_Portfolio  (2026-11-21)

## Corpus Check
- 35 files · ~8,424 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 181 nodes · 199 edges · 17 communities (14 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Portfolio Improvement Plan
- skills.ts
- dependencies
- Portfolio Implementation Plan
- package.json
- index.astro
- tsconfig.json
- devDependencies
- Content Map (Resume → Portfolio)
- Astro Starter Kit: Minimal
- achievements.ts
- Header.astro
- projects.ts
- AI Portfolio — Agent Instructions

## God Nodes (most connected - your core abstractions)
1. `Portfolio Implementation Plan` - 12 edges
2. `Portfolio Improvement Plan` - 11 edges
3. `AI Portfolio — Agent Instructions` - 8 edges
4. `Content Map (Resume → Portfolio)` - 8 edges
5. `scripts` - 7 edges
6. `Data File Schemas` - 7 edges
7. `profile` - 6 edges
8. `�� 🚀 High Impact Improvements` - 5 edges
9. `Education` - 4 edges
10. `Experience` - 4 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (17 total, 3 thin omitted)

### Community 0 - "Portfolio Improvement Plan"
Cohesion: 0.06
Nodes (30): 1. Enable Prefetching, 2. Add View Transitions, 3. Optimize Project Images, 4. Migrate Projects to Content Collections, � ♿ Accessibility & SEO, Astro Config Updates, Astro Image Optimization, Content Collections Example (+22 more)

### Community 1 - "skills.ts"
Cohesion: 0.40
Nodes (3): Skill, SkillGroup, skillGroups

### Community 2 - "dependencies"
Cohesion: 0.08
Nodes (25): astro, @astrojs/react, @astrojs/sitemap, clsx, @fontsource-variable/inter, dependencies, astro, @astrojs/react (+17 more)

### Community 3 - "Portfolio Implementation Plan"
Cohesion: 0.10
Nodes (20): `astro.config.mjs`, Data File Schemas, Deployment Pipeline, Execution Order, First push, Future Enhancements, `.github/workflows/deploy.yml`, Open Items (+12 more)

### Community 4 - "package.json"
Cohesion: 0.15
Nodes (12): engines, node, name, scripts, astro, build, dev, preview (+4 more)

### Community 5 - "index.astro"
Cohesion: 0.13
Nodes (8): Education, Experience, profile, sizeMap, iconSizeMap, items, sizeMap, canonical

### Community 6 - "tsconfig.json"
Cohesion: 0.25
Nodes (7): **/*, astro/tsconfigs/strict, .astro/types.d.ts, dist, exclude, extends, include

### Community 7 - "devDependencies"
Cohesion: 0.18
Nodes (11): @astrojs/check, jsdom, devDependencies, @astrojs/check, jsdom, @testing-library/jest-dom, typescript, vitest (+3 more)

### Community 8 - "Content Map (Resume → Portfolio)"
Cohesion: 0.25
Nodes (8): Achievements / Highlights, Contact, Content Map (Resume → Portfolio), Education, Experience (reverse-chronological timeline), Hero, Projects (3 cards), Skills

### Community 9 - "Astro Starter Kit: Minimal"
Cohesion: 0.40
Nodes (4): Astro Starter Kit: Minimal, 🧞 Commands, 🚀 Project Structure, 👀 Want to learn more?

### Community 13 - "AI Portfolio — Agent Instructions"
Cohesion: 0.22
Nodes (8): AI Portfolio — Agent Instructions, Architecture, CI/CD, Conventions, File Map, Known Issues (fix before extending), Quick Commands, References

## Knowledge Gaps
- **97 isolated node(s):** `name`, `type`, `version`, `node`, `dev` (+92 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _97 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Portfolio Improvement Plan` be split into smaller, more focused modules?**
  _Cohesion score 0.06451612903225806 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Portfolio Implementation Plan` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `index.astro` be split into smaller, more focused modules?**
  _Cohesion score 0.12923076923076923 - nodes in this community are weakly interconnected._