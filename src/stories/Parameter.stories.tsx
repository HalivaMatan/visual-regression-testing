import { ComponentStory, ComponentMeta } from "@storybook/react";
import Parameter from "../components/Parameter";

export default {
  title: "Features/Parameter/Parameter",
  component: Parameter,
} as ComponentMeta<typeof Parameter>;

const Template: ComponentStory<typeof Parameter> = (args) => (
  <Parameter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Speed",
  value: "2500",
};
