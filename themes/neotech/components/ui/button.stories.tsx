import type { Meta, StoryObj } from '@storybook/react';
import { Zap } from 'lucide-react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Theme Neotech/UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    theme: 'neotech',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'xs', 'sm', 'lg', 'icon'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Initialize',
    variant: 'default',
  },
};

export const Outline: Story = {
  args: {
    children: 'Scan System',
    variant: 'outline',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Terminate',
    variant: 'destructive',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Configure',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Bypass',
    variant: 'ghost',
  },
};

export const Icon: Story = {
  args: {
    size: 'icon',
    variant: 'default',
    children: <Zap className="size-4" />,
  },
};
