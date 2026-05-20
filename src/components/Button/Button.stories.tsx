import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import '../../tokens/tokens.css'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    label: 'Button',
  },
}
export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { variant: 'primary', size: 'md' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', size: 'md' },
}

export const Ghost: Story = {
  args: { variant: 'ghost', size: 'md' },
}

export const Small: Story = {
  args: { variant: 'primary', size: 'sm' },
}

export const Large: Story = {
  args: { variant: 'primary', size: 'lg' },
}

export const Disabled: Story = {
  args: { variant: 'primary', size: 'md', disabled: true },
}
