import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import * as React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

interface INotificationsProps {}

const notifications = [
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    title: "15/2/2021 15:00",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    title: "15/2/2021 15:00",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    title: "15/2/2021 15:00",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    title: "15/2/2021 15:00",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    title: "15/2/2021 15:00",
  },
];

const Notifications: React.FunctionComponent<INotificationsProps> = () => {
  return (
    <List
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      {notifications.map((user: any) => {
        return (
          <ListItem
            sx={{
              backgroundColor: "#22242F",
              borderRadius: "11px",
              marginTop: 1,
            }}
          >
            <ListItemAvatar>
              <ErrorOutlineIcon sx={{ fontSize: "57px", marginRight: 2 }} />
            </ListItemAvatar>
            <ListItemText
              secondaryTypographyProps={{ style: { color: "#B8BACD" } }}
              primary={user.name}
              secondary={user.title}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default Notifications;
