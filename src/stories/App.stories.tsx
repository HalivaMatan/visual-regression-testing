import { ComponentStory, ComponentMeta } from "@storybook/react";
import App from "../App";

export default {
  title: "Features/App/App",
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App />;

export const Default = Template.bind({});
