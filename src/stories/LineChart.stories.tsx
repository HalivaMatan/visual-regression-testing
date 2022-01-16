import { ComponentStory, ComponentMeta } from "@storybook/react";
import LineChart from "../components/LineChart";

export default {
  title: "Features/Line Chart/Line Chart",
  component: LineChart,
} as ComponentMeta<typeof LineChart>;

const Template: ComponentStory<typeof LineChart> = (args) => (
  <LineChart {...args} />
);

export const Default = Template.bind({});
Default.args = {};
