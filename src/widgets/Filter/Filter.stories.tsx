import type { Meta, StoryObj } from "@storybook/react";
import { Filter } from "./index";

const meta: Meta<typeof Filter> = {
  title: "Widgets/Filter",
  component: Filter,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onChange: { action: "changed" },
  },
};
export default meta;

type Story = StoryObj<typeof Filter>;

export const Default: Story = {
  args: {
    onChange: (value: string) => console.log("Selected:", value),
    options: [
      { label: "IT", id: "it" },
      { label: "HR", id: "hr" },
      { label: "Marketing", id: "marketing" },
      { label: "Support", id: "support" },
    ],
  },
};

export const Empty: Story = {
  args: {
    onChange: (value: string) => console.log("Selected:", value),
    options: [],
  },
};
