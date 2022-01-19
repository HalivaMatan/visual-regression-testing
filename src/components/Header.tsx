import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#22242D" }}>
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          color="green"
          sx={{ flexGrow: 1 }}
        >
          Dashboard
        </Typography>
        <ErrorOutlineIcon sx={{ fontSize: "57px", marginRight: 2 }} />
        <Button color="inherit">Login Now</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
