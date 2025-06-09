---
to: src/components/ui/<%= name %>/<%= name %>.stories.tsx
---
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { <%= name %> } from "./<%= name %>";

const meta: Meta<typeof <%= name %>> = {
  title: "UI/<%= name %>",
  component: <%= name %>,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof <%= name %>>;

export const Default: Story = {
  args: {
<% if (children) { %>    children: "<%= name %> content",
<% } %><% if (withVariants) { %>    tone: "default",
<% } %>  },
};

<% if (withVariants) { %>
export const Info: Story = {
  args: {
<% if (children) { %>    children: "Info variant",
<% } %>    tone: "info",
  },
};

export const Warning: Story = {
  args: {
<% if (children) { %>    children: "Warning variant",
<% } %>    tone: "warning",
  },
};
<% } %>