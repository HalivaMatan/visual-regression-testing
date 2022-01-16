import {
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Grid,
} from "@mui/material";
import * as React from "react";

interface IToggleButtonProps {
  title: string;
}

const Toggle: React.FunctionComponent<IToggleButtonProps> = (props) => {
  const [alignment, setAlignment] = React.useState("on");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    console.log(event);
    setAlignment(newAlignment);
  };

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      marginBottom={1}
    >
      <Typography sx={{ flexGrow: 1 }}>{props.title}</Typography>
      <ToggleButtonGroup
        color="success"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="on" sx={{ color: "white" }}>
          ON
        </ToggleButton>
        <ToggleButton value="off" sx={{ color: "white" }}>
          OFF
        </ToggleButton>
      </ToggleButtonGroup>
    </Grid>
  );
};

export default Toggle;
