import type { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "./index";

const meta: Meta<typeof SearchInput> = {
  title: "Widgets/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onChange: { action: "changed" },
  },
};
export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    value: "",
  },
};

export const WithValue: Story = {
  args: {
    value: "Иван",
  },
};
