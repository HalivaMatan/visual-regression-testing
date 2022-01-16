import "./App.css";
import { Grid } from "@mui/material";
import Header from "./components/Header";
import Notifications from "./components/Notifications";
import DashboardCard from "./components/DashboardCard";
import Toggle from "./components/Toggle";
import ProgressBar from "./components/ProgressBar";
import LineChart from "./components/LineChart";
import Parameters from "./components/Parameters";
import DoughnutChart from "./components/DoughnutChart";

function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid item container spacing={2} xs={12} padding={4}>
        <Grid item md={8} xs={12}>
          <DashboardCard title="Users" withHeader>
            <LineChart />
          </DashboardCard>
        </Grid>

        <Grid item md={4} xs={12}>
          <DashboardCard title="Notifications" withHeader>
            <Notifications />
          </DashboardCard>
        </Grid>

        <Grid item md={2} xs={12} container spacing={2}>
          <Parameters />
        </Grid>

        <Grid item md={2} xs={12}>
          <DashboardCard>
            <DoughnutChart />
          </DashboardCard>
        </Grid>

        <Grid item md={4} xs={12}>
          <DashboardCard title="Notifications" withHeader>
            <Grid
              marginTop={2}
              height="100%"
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <ProgressBar
                title="Speed"
                value={90}
                maxValue={100}
              ></ProgressBar>
              <ProgressBar
                title="Speed"
                value={50}
                maxValue={100}
              ></ProgressBar>
              <ProgressBar
                title="Speed"
                value={80}
                maxValue={100}
              ></ProgressBar>
            </Grid>
          </DashboardCard>
        </Grid>
        <Grid item md={4} xs={12}>
          <DashboardCard>
            <Toggle title="Lorem ipsum" />
            <Toggle title="Lorem ipsum" />
            <Toggle title="Lorem ipsum" />
            <Toggle title="Lorem ipsum" />
            <Toggle title="Lorem ipsum" />
            <Toggle title="Lorem ipsum" />
          </DashboardCard>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
