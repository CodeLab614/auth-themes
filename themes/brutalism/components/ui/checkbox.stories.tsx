import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";
import { Label } from "./label";

const meta: Meta<typeof Checkbox> = {
  title: "Theme Brutalism/UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    theme: "brutalism",
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="remember" />
      <Label htmlFor="remember">Remember me</Label>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
