import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { getEmployees } from "@/mock-api";

const meta: Meta<typeof Table> = {
  title: "Widgets/Table",
  component: Table,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const employees = getEmployees();

export const Default: Story = {
  args: {
    employees: employees,
  },
};
