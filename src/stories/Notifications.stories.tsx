import { ComponentStory, ComponentMeta } from "@storybook/react";
import Notifications from "../components/Notifications";

export default {
  title: "Features/Notifications/Notifications",
  component: Notifications,
} as ComponentMeta<typeof Notifications>;

const Template: ComponentStory<typeof Notifications> = (args) => (
  <Notifications {...args} />
);

export const Default = Template.bind({});
Default.args = {};
