import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'
import '../../tokens/tokens.css'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'accent', 'purple'],
    },
  },
}
export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: { variant: 'default', label: 'featured' },
}

export const Accent: Story = {
  args: { variant: 'accent', label: 'new' },
}

export const Purple: Story = {
  args: { variant: 'purple', label: 'beta' },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Badge variant="default" label="featured" />
      <Badge variant="accent" label="new" />
      <Badge variant="purple" label="beta" />
    </div>
  ),
}
