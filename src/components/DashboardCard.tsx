import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Divider,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface IDashboardCardProps {
  withHeader?: boolean;
  title?: string;
}

const DashboardCard: React.FunctionComponent<IDashboardCardProps> = (props) => {
  return (
    <Card
      sx={{
        height: "100%",
        width: "100%",
        backgroundColor: "#18191D",
        border: "solid 2px #22242D",
        color: "white",
        borderRadius: "16px",
      }}
    >
      {props.withHeader && (
        <>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon sx={{ color: "white" }} />
              </IconButton>
            }
            title={props.title}
          />{" "}
          <Divider sx={{ backgroundColor: "#22242D", height: "2px" }} />
        </>
      )}

      <CardContent>{props.children}</CardContent>
    </Card>
  );
};

export default DashboardCard;
