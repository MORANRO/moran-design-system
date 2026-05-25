import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import '../../tokens/tokens.css'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    supportingText: 'Supporting text',
  },
  argTypes: {
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {}

export const Focus: Story = {
  render: (args) => (
    <Input {...args} />
  ),
  parameters: {
    pseudo: { focus: true },
  },
}

export const Filled: Story = {
  args: { value: 'User input text' },
}

export const Error: Story = {
  args: { error: true, supportingText: 'This field is required' },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 320 }}>
      <Input label="Label" placeholder="Placeholder" supportingText="Default state" />
      <Input label="Label" value="User input text" supportingText="Filled state" onChange={() => {}} />
      <Input label="Label" placeholder="Placeholder" supportingText="Error state" error />
      <Input label="Label" placeholder="Placeholder" supportingText="Disabled state" disabled />
    </div>
  ),
}
