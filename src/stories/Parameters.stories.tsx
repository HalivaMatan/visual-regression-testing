import { ComponentStory, ComponentMeta } from "@storybook/react";
import Parameters from "../components/Parameters";

export default {
  title: "Features/Parameters/Parameters",
  component: Parameters,
} as ComponentMeta<typeof Parameters>;

const Template: ComponentStory<typeof Parameters> = (args) => (
  <Parameters {...args} />
);

export const Default = Template.bind({});
Default.args = {};
