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
  title: "Theme Neotech/UI/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    theme: "neotech",
    layout: "centered",
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
        <CardTitle>Access Portal</CardTitle>
        <CardDescription>Enter your credentials to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <p>Footer text</p>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card>
      <CardContent>
        <p className="text-sm text-foreground">
          A simple card with only content.
        </p>
      </CardContent>
    </Card>
  ),
};

export const WithCustomPadding: Story = {
  render: () => (
    <Card className="p-4">
      <CardHeader className="mb-4">
        <CardTitle className="text-base">Compact Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Override padding for tighter layouts.
        </p>
      </CardContent>
    </Card>
  ),
};
