import type { Meta, StoryObj } from "@storybook/react";
import Layout from "../layout";
import RegisterPage from "./page";

const meta: Meta<typeof RegisterPage> = {
  title: "Theme Brutalism/Pages/Register",
  component: RegisterPage,
  tags: ["autodocs"],
  parameters: {
    theme: "brutalism",
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RegisterPage>;

export const Default: Story = {};
