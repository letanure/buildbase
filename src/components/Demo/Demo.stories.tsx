import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Demo } from "./Demo";

const meta: Meta<typeof Demo> = {
  title: "UI/Demo",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Demo>;

export const Default: Story = {
  args: {
  },
};

