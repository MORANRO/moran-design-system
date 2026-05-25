import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './Typography'
import '../../tokens/tokens.css'

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  args: { children: 'The quick brown fox' },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'displayXl',
        'displayLg',
        'displayMd',
        'bodyLgBold',
        'bodyLg',
        'bodyMdBold',
        'bodyMd',
        'bodySm',
        'labelLg',
        'labelMd',
      ],
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'p', 'span'],
    },
  },
}
export default meta
type Story = StoryObj<typeof Typography>

export const DisplayXL: Story = {
  args: { variant: 'displayXl', children: 'Display XL', as: 'h1' },
}

export const DisplayLG: Story = {
  args: { variant: 'displayLg', children: 'Display LG', as: 'h2' },
}

export const DisplayMD: Story = {
  args: { variant: 'displayMd', children: 'Display MD', as: 'h3' },
}

export const BodyLGBold: Story = {
  args: { variant: 'bodyLgBold', children: 'Body LG Bold' },
}

export const BodyLG: Story = {
  args: { variant: 'bodyLg', children: 'Body LG Regular' },
}

export const BodyMDBold: Story = {
  args: { variant: 'bodyMdBold', children: 'Body MD Bold' },
}

export const BodyMD: Story = {
  args: { variant: 'bodyMd', children: 'Body MD Regular' },
}

export const BodySM: Story = {
  args: { variant: 'bodySm', children: 'Body SM Regular' },
}

export const LabelLG: Story = {
  args: { variant: 'labelLg', children: 'Label LG' },
}

export const LabelMD: Story = {
  args: { variant: 'labelMd', children: 'Label MD' },
}

export const AllStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Typography variant="displayXl" as="h1">Display XL — Bebas Neue 36px</Typography>
      <Typography variant="displayLg" as="h2">Display LG — Bebas Neue 30px</Typography>
      <Typography variant="displayMd" as="h3">Display MD — Bebas Neue 24px</Typography>
      <Typography variant="bodyLgBold">Body LG Bold — Space Grotesk 18px 700</Typography>
      <Typography variant="bodyLg">Body LG Regular — Space Grotesk 18px 400</Typography>
      <Typography variant="bodyMdBold">Body MD Bold — Space Grotesk 16px 700</Typography>
      <Typography variant="bodyMd">Body MD Regular — Space Grotesk 16px 400</Typography>
      <Typography variant="bodySm">Body SM Regular — Space Grotesk 14px 400</Typography>
      <Typography variant="labelLg">Label LG</Typography>
      <Typography variant="labelMd">Label MD</Typography>
    </div>
  ),
}
