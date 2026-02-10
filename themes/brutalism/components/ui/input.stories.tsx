import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Theme Brutalism/UI/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    theme: "brutalism",
  },
  decorators: [
    (Story) => (
      <div className="w-[320px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Type something...",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled",
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: "brutalist@example.com",
    type: "email",
  },
};
