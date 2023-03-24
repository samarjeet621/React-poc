import { Button, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

interface CardProps {
  title: string;
  email: string;
  id: string;
}

export default function Card(props: CardProps) {
  const textStyle = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
  const navigate = useNavigate();

  const getDetail = () =>{
    navigate("/details/"+ props.id);
  }

  return (
    <Paper
      sx={{
        padding: "15px",
        height: 140,
        width: 250,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Typography component="h2" sx={{ fontWeight: "Bold" }}>
        {props.title}
      </Typography>
      <Typography component="div" sx={textStyle}>
        {props.email}
      </Typography>
      <Button type="button" onClick={getDetail}>
        Details
      </Button>
    </Paper>
  );
}
