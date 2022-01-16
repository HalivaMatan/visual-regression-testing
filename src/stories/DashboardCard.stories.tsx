import { ComponentStory, ComponentMeta } from "@storybook/react";
import DashboardCard from "../components/DashboardCard";

export default {
  title: "Features/Dashboard Card/Dashboard Card",
  component: DashboardCard,
} as ComponentMeta<typeof DashboardCard>;

const Template: ComponentStory<typeof DashboardCard> = (args) => (
  <DashboardCard {...args} />
);

export const WithHeader = Template.bind({});
WithHeader.args = {
  withHeader: true,
  title: "Test",
};

export const WithoutHeader = Template.bind({});
WithoutHeader.args = {};
