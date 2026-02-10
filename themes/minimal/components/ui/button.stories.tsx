import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button'; // Importa TU botón modificado

const meta: Meta<typeof Button> = {
  title: 'Theme Minimal/UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    theme: 'minimal',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Click me',
    variant: 'default',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};