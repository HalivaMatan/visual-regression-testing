import { ComponentStory, ComponentMeta } from "@storybook/react";
import Image from "../components/Image";

export default {
  title: "Features/Image/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {};
