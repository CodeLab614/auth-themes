import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";
import { Input } from "./input";

const meta: Meta<typeof Label> = {
  title: "Theme Brutalism/UI/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    theme: "brutalism",
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Email Address",
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="w-[320px] space-y-1.5">
      <Label htmlFor="demo">Email</Label>
      <Input id="demo" type="email" placeholder="you@example.com" />
    </div>
  ),
};
