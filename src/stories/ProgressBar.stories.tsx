import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProgressBar from "../components/ProgressBar";

export default {
  title: "Features/Progress Bar/Progress Bar",
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Speed",
  value: 25,
  maxValue: 100,
};
