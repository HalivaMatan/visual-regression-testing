import { Grid, Typography } from "@mui/material";
import * as React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface IProgressBarProps {
  title: string;
  value: number;
  maxValue: number;
}

const ProgressBar: React.FunctionComponent<IProgressBarProps> = (props) => {
  return (
    <Grid item xs={3} textAlign="center">
      <CircularProgressbar
        value={props.value}
        maxValue={props.maxValue}
        text={`${props.value}%`}
      />
      <Typography sx={{ fontWight: 400 }} marginTop={1}>
        {props.title}
      </Typography>
    </Grid>
  );
};

export default ProgressBar;
