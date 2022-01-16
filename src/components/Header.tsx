import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#22242D" }}>
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Dashboard2
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
