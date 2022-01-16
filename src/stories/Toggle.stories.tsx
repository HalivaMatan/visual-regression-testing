import { ComponentStory, ComponentMeta } from "@storybook/react";
import Toggle from "../components/Toggle";

export default {
  title: "Features/Toggle/Toggle",
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Toggle",
};
