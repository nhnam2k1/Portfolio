# Graph Report - AI_Portfolio  (2026-11-22)

## Corpus Check
- 35 files · ~8,425 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 195 nodes · 213 edges · 17 communities (14 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `69cc7a47`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Portfolio Improvement Plan
- skills.ts
- dependencies
- Portfolio Implementation Plan
- package.json
- index.astro
- tsconfig.json
- devDependencies
- Data File Schemas
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
Cohesion: 0.05
Nodes (39): astro, @astrojs/react, @astrojs/sitemap, clsx, devalue, @fontsource-variable/inter, http-cache-semantics, js-yaml (+31 more)

### Community 3 - "Portfolio Implementation Plan"
Cohesion: 0.09
Nodes (21): Achievements / Highlights, `astro.config.mjs`, Contact, Content Map (Resume → Portfolio), Deployment Pipeline, Education, Execution Order, Experience (reverse-chronological timeline) (+13 more)

### Community 4 - "package.json"
Cohesion: 0.15
Nodes (12): engines, bun, name, scripts, astro, build, dev, preview (+4 more)

### Community 5 - "index.astro"
Cohesion: 0.13
Nodes (8): Education, Experience, profile, sizeMap, iconSizeMap, items, sizeMap, canonical

### Community 6 - "tsconfig.json"
Cohesion: 0.25
Nodes (7): **/*, astro/tsconfigs/strict, .astro/types.d.ts, dist, exclude, extends, include

### Community 7 - "devDependencies"
Cohesion: 0.18
Nodes (11): @astrojs/check, jsdom, devDependencies, @astrojs/check, jsdom, @testing-library/jest-dom, typescript, vitest (+3 more)

### Community 8 - "Data File Schemas"
Cohesion: 0.29
Nodes (7): Data File Schemas, `src/assets/data/achievements.ts`, `src/assets/data/education.ts`, `src/assets/data/experience.ts`, `src/assets/data/profile.ts`, `src/assets/data/projects.ts`, `src/assets/data/skills.ts`

### Community 9 - "Astro Starter Kit: Minimal"
Cohesion: 0.40
Nodes (4): Astro Starter Kit: Minimal, 🧞 Commands, 🚀 Project Structure, 👀 Want to learn more?

### Community 13 - "AI Portfolio — Agent Instructions"
Cohesion: 0.22
Nodes (8): AI Portfolio — Agent Instructions, Architecture, CI/CD, Conventions, File Map, Known Issues (fix before extending), Quick Commands, References

## Knowledge Gaps
- **104 isolated node(s):** `name`, `type`, `version`, `bun`, `dev` (+99 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.085) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _104 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Portfolio Improvement Plan` be split into smaller, more focused modules?**
  _Cohesion score 0.06451612903225806 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05128205128205128 - nodes in this community are weakly interconnected._
- **Should `Portfolio Implementation Plan` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Should `index.astro` be split into smaller, more focused modules?**
  _Cohesion score 0.12923076923076923 - nodes in this community are weakly interconnected._