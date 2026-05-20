---
name: component-builder
description: Step-by-step recipe for building one design system component from Figma to Storybook. Use when Moran says "let's build [component name]".
---

# Component Builder

## Before Starting — Ask Moran:
1. What are the **variants**? (e.g. primary / secondary / ghost)
2. What are the **states**? (e.g. default / hover / focus / disabled / error)
3. What **sizes**? (e.g. sm / md / lg)

## Step 1: Figma First
Confirm the component is designed in Figma with real token values (not hardcoded hex colors or px values).

## Step 2: Create the Three Files

```bash
mkdir -p src/components/ComponentName
touch src/components/ComponentName/ComponentName.tsx
touch src/components/ComponentName/ComponentName.module.css
touch src/components/ComponentName/ComponentName.stories.tsx
```

## Step 3: Design-to-Code in Cursor
1. Screenshot the Figma component (all variants)
2. Open Cursor, navigate to `ComponentName.tsx`
3. Paste screenshot and type:
   > "Build this [ComponentName] React component using our design tokens from src/tokens/tokens.css. Use CSS Modules for styles. Include these variants: [list them]. Include these states: [list them]."
4. Review the output — does it match the Figma design?
5. Adjust with plain English: "Make the padding bigger", "The border radius should use --border-radius-md"

## Step 4: Tokens Rule
Every value in `ComponentName.module.css` must reference a token:
- ✅ `background: var(--color-primary)`
- ❌ `background: #6366f1`

## Step 5: Write Stories
In `ComponentName.stories.tsx`, document every variant and state:

```typescript
import type { Meta, StoryObj } from '@storybook/react'
import { ComponentName } from './ComponentName'

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
}
export default meta
type Story = StoryObj<typeof ComponentName>

export const Primary: Story = { args: { variant: 'primary' } }
export const Secondary: Story = { args: { variant: 'secondary' } }
```

## Step 6: Export
Add to `src/index.ts`:
```typescript
export { ComponentName } from './components/ComponentName/ComponentName'
```

## Step 7: Commit
```bash
git add src/components/ComponentName/
git add src/index.ts
git commit -m "feat: add ComponentName component"
git push
```
