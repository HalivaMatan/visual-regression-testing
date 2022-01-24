import * as React from "react";
// import { Line } from "react-chartjs-2";

import {
  Chart,
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Typography } from "@mui/material";

Chart.register(
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

interface ILineChartProps {}

// const lineData = {
//   labels: ["January", "February", "March", "April", "May", "June", "July"],
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: [13, 47, 40, 20, 47, 40, 30],
//       borderColor: "#7269F4",
//       backgroundColor: "white",
//     },
//   ],
// };

const LineChart: React.FunctionComponent<ILineChartProps> = () => {
  // return <Line data={lineData} />;
  return <Typography color="error">Error</Typography>;
};

export default LineChart;
