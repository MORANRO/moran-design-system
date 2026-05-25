import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import '../../tokens/tokens.css'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: { label: 'Button' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'purple'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { variant: 'primary' },
}

export const Secondary: Story = {
  args: { variant: 'secondary' },
}

export const Ghost: Story = {
  args: { variant: 'ghost' },
}

export const Purple: Story = {
  args: { variant: 'purple' },
}

export const Small: Story = {
  args: { variant: 'primary', size: 'sm' },
}

export const Medium: Story = {
  args: { variant: 'primary', size: 'md' },
}

export const Large: Story = {
  args: { variant: 'primary', size: 'lg' },
}

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button label="Button" variant="primary" />
      <Button label="Button" variant="secondary" />
      <Button label="Button" variant="ghost" />
      <Button label="Button" variant="purple" />
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Button label="Button" variant="primary" size="sm" />
      <Button label="Button" variant="primary" size="md" />
      <Button label="Button" variant="primary" size="lg" />
    </div>
  ),
}

export const AllDisabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button label="Button" variant="primary" disabled />
      <Button label="Button" variant="secondary" disabled />
      <Button label="Button" variant="ghost" disabled />
      <Button label="Button" variant="purple" disabled />
    </div>
  ),
}
