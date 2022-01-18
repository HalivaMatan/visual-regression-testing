import { Typography } from "@mui/material";
import * as React from "react";
// import { Doughnut } from "react-chartjs-2";

interface IDoughnutChartProps {}
// const colors = ["#563BF4", "#30266F", "#7269F3"];

// const doughnutData = {
//   responsive: true,
//   maintainAspectRatio: true,
//   labels: ["a", "b", "c", "d"],
//   datasets: [
//     {
//       data: [13, 47, 40],
//       backgroundColor: colors,
//     },
//   ],
// };

const DoughnutChart: React.FunctionComponent<IDoughnutChartProps> = () => {
  // return <Doughnut data={doughnutData} />;
  return <Typography color="error">Click to try again</Typography>;
};

export default DoughnutChart;
