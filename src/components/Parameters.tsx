import { Grid } from "@mui/material";
import * as React from "react";
import DashboardCard from "./DashboardCard";
import Parameter from "./Parameter";

interface IParametersProps {}

const Parameters: React.FunctionComponent<IParametersProps> = () => {
  return (
    <>
      <Grid item xs={12}>
        <DashboardCard>
          <Parameter title="Parameter" value="20" />
        </DashboardCard>
      </Grid>

      <Grid item xs={12}>
        <DashboardCard>
          <Parameter title="Speed" value="3000 KM/H" />
        </DashboardCard>
      </Grid>
      <Grid item xs={12}>
        <DashboardCard>
          <Parameter title="Temperture" value="32 °c" />
        </DashboardCard>
      </Grid>
      <Grid item xs={12}>
        <DashboardCard>
          <Parameter title="Events" value="4569" />
        </DashboardCard>
      </Grid>
    </>
  );
};

export default Parameters;
