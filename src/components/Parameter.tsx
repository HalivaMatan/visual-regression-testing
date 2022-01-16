import { Typography, Grid } from "@mui/material";
import * as React from "react";

interface IParameterProps {
  title: string;
  value: string;
}

const Parameter: React.FunctionComponent<IParameterProps> = (props) => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      height="100%"
    >
      <Typography>{props.title}</Typography>
      <Typography sx={{ color: "#B8BACD" }}>{props.value}</Typography>
    </Grid>
  );
};

export default Parameter;
