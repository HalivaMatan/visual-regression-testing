import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import PlayArrow from "@mui/icons-material/PlayArrow";

interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#22242D" }}>
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          color="blue"
          sx={{ flexGrow: 1 }}
        >
          Dashboard
        </Typography>
        <PlayArrow sx={{ fontSize: "57px", marginRight: 2 }} />
        <Button color="inherit">Login Now</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
