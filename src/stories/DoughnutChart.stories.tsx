import { Box } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DoughnutChart from "../components/DoughnutChart";

export default {
  title: "Features/Doughnut Chart/Doughnut Chart",
  component: DoughnutChart,
} as ComponentMeta<typeof DoughnutChart>;

const Template: ComponentStory<typeof DoughnutChart> = (args) => (
  <Box width={250}>
    <DoughnutChart {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {};
