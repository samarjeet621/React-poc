import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useRecoilState } from "recoil";
import { userAtom } from "../App";

const theme = createTheme();
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Details() {
  const [data, setData] = useState<any>([]);
  const [user] = useRecoilState(userAtom);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://restapi.adequateshop.com/api/Tourist/" + id)
      .then((res) => {
        setData(res.data);
      });
  }, [id]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Hi {user}
          </Typography>
          <Box
            sx={{
              marginTop: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
              <Grid item xs={12}>
                {data && (
                  <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={6}>
                      <Item>Name</Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>{data.tourist_name}</Item>
                    </Grid>

                    <Grid item xs={6}>
                      <Item>Email</Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>{data.tourist_email}</Item>
                    </Grid>

                    <Grid item xs={6}>
                      <Item>Location</Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>{data.tourist_location}</Item>
                    </Grid>

                    <Grid item xs={6}>
                      <Item>Date</Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>{data.createdat}</Item>
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
