import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";

const meta: Meta<typeof Card> = {
  title: "Theme Brutalism/UI/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    theme: "brutalism",
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a brutalist card.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Card content goes here.</p>
      </CardContent>
      <CardFooter>Footer text</CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card>
      <CardContent>
        <p className="text-sm font-medium">Just content, nothing else.</p>
      </CardContent>
    </Card>
  ),
};
