import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Theme Neotech/UI/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    theme: 'neotech',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter access code...',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'System locked',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'admin@neotech.io',
    type: 'email',
  },
};

export const Password: Story = {
  args: {
    placeholder: 'Password',
    type: 'password',
  },
};
