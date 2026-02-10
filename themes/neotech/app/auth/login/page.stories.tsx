import type { Meta, StoryObj } from "@storybook/react";
import Layout from "../layout";
import LoginPage from "./page";

const meta: Meta<typeof LoginPage> = {
  title: "Theme Neotech/Pages/Login",
  component: LoginPage,
  tags: ["autodocs"],
  parameters: {
    theme: "neotech",
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
type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {};
