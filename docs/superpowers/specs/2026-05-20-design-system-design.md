# Moran's Personal Design System — Design Spec

**Date:** 2026-05-20
**Sprint:** May 25 – ~June 8, 2026
**Goal:** Learn design-to-code workflow by building a real design system with Storybook

---

## 1. Purpose

Build a personal design system as a hands-on learning project before starting at Tenzai Cybersecurity. The output matters less than the workflow — the goal is to internalize the Figma → tokens → React components → Storybook loop using AI tools (Claude + Cursor).

---

## 2. Tech Stack

- **Figma** (free plan) — design source of truth, tokens defined as Figma Variables
- **React + TypeScript** — component framework
- **Storybook 8** — component documentation and development environment
- **Vite** — build tool (comes with Storybook scaffolding)
- **CSS Modules** — component-scoped styles
- **Cursor** — AI-native code editor for design-to-code translation
- **GitHub** — project backup and computer-transfer mechanism

---

## 3. Project Structure

```
moran-design-system/
├── .storybook/
│   └── main.ts
├── src/
│   ├── tokens/
│   │   └── tokens.css          # CSS custom properties from Figma variables
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── Button.module.css
│   │   ├── Badge/
│   │   ├── Input/
│   │   └── Card/
│   └── index.ts
├── docs/                        # Guidelines as MDX pages in Storybook
├── package.json
└── README.md
```

---

## 4. Design Tokens

Defined first in Figma Variables, then mirrored as CSS custom properties in `tokens.css`.

**Token categories:**
- **Color** — primary, neutral, semantic (success, warning, error, info)
- **Typography** — font family, sizes (xs/sm/md/lg/xl), weights, line heights
- **Spacing** — 4px base scale (4, 8, 12, 16, 24, 32, 48, 64)
- **Border radius** — none, sm, md, lg, full
- **Shadow** — sm, md, lg

---

## 5. Component Scope (10 working days)

| Component | Variants | Storybook Stories |
|-----------|----------|-------------------|
| Button | primary/secondary/ghost, sm/md/lg, disabled | All variants documented |
| Badge | default/success/warning/error/info | Color semantic variants |
| Input | default, focus, error, disabled | States documented |
| Card | default, with header, with footer | Layout variants |

Plus: Typography showcase page and a written guidelines page in Storybook docs.

---

## 6. Design-to-Code Workflow (per component)

1. Design component in Figma using token values
2. Screenshot or export the design
3. In Cursor: paste screenshot + prompt → AI writes React + CSS Module code
4. Review output as a designer reviewing a spec — adjust with plain English prompts
5. Save → Storybook live-reloads in browser
6. Write a `.stories.tsx` file documenting all variants

---

## 7. The Design-to-Code Loop

```
FIGMA → screenshot → CURSOR (AI writes code) → STORYBOOK (live preview)
           ↑                    ↓
           └────── refine with plain English prompts ──────┘
```

---

## 8. Custom Skills

Two Claude Code skills to be created on Day 1:

- **`moran-context`** — loads Moran's background, tools, project state, and working style so every session starts with full context
- **`component-builder`** — step-by-step recipe for building one component end-to-end

---

## 9. Computer Transfer Plan

- Git repository initialized on Day 1
- GitHub remote created (free account)
- Every session ends with a commit + push
- On new computer: install tools (Node 18+, Cursor, Git), `git clone`, done

---

## 10. Day-by-Day Schedule

| Day | Date (2026) | Focus |
|-----|-------------|-------|
| 1 | Sun May 25 | Setup: Node upgrade, GitHub, Storybook scaffold, skills created |
| 2 | Mon May 26 | Figma tokens: color, typography, spacing |
| 3 | Tue May 27 | Tokens in code: CSS custom properties |
| 4 | Wed May 28 | Button component (design + code) |
| 5 | Thu May 29 | Button polish + Storybook stories |
| 6 | Sun Jun 1 | Badge component |
| 7 | Mon Jun 2 | Input component |
| 8 | Tue Jun 3 | New computer setup + Card component start |
| 9 | Wed Jun 4 | Card component + guidelines page |
| 10 | Thu Jun 5 | Polish, typography showcase, final review |
