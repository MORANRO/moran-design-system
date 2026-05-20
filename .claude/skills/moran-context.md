---
name: moran-context
description: Load at the start of any design system session. Contains Moran's background, current project state, tools, and working style.
---

# Moran's Context

## Who is Moran
- Product Design Lead at monday.com (4.5 years) → transitioning to Tenzai Cybersecurity
- Strong Figma skills, beginner coder (can read HTML/CSS, has never written it herself)
- Goal: learn the design-to-code workflow by building a real design system
- Based in Israel (work week Sunday–Thursday)
- Tools: Figma (free), Cursor (installed), Claude Code

## The Project
A personal design system built with React + TypeScript + Storybook 8 + CSS Modules.

**GitHub:** https://github.com/MORANRO/moran-design-system
**Spec:** docs/superpowers/specs/2026-05-20-design-system-design.md

**Components to build:** Button, Badge, Input, Card
**Sprint:** May 25 – June 8, 2026 (Sun–Thu work week)

## Design-to-Code Workflow
1. Design component in Figma using token values
2. Screenshot the Figma component
3. In Cursor: paste screenshot + "Build this [component] using our design tokens"
4. Review output like a design spec — adjust with plain English
5. Save → Storybook live-reloads in browser
6. Write stories for all variants

## Token File
All values come from `src/tokens/tokens.css`. Never hardcode colors, sizes, or fonts in components.

## Working Style
- Step-by-step guidance, explain the WHY
- Batched questions preferred (saves tokens)
- Moran makes design decisions, AI writes the code
- She wants to feel capable, not overwhelmed
