import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import '../../tokens/tokens.css'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: { label: 'Button' },
}
export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { variant: 'primary', label: 'Subscribe' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', label: 'Sign In' },
}

export const Ghost: Story = {
  args: { variant: 'ghost', label: 'Join Stream' },
}

export const Purple: Story = {
  args: { variant: 'purple', label: 'Read Review' },
}

export const Small: Story = {
  args: { variant: 'primary', size: 'sm', label: 'Subscribe' },
}

export const Large: Story = {
  args: { variant: 'primary', size: 'lg', label: 'Subscribe' },
}

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true, label: 'Subscribe' },
}
