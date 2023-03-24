import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import axios from 'axios';
import Card from "./Card";
import { useRecoilState } from "recoil";
import { userAtom } from "../App";


const theme = createTheme();

export default function Home() {
const [items,setItems] = useState<any>([]);
const [user] = useRecoilState(userAtom);


useEffect(()=>{
  axios.get("http://restapi.adequateshop.com/api/Tourist").then(res=>{
    setItems(res.data.data);
  });
},[]);

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
          <Box sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
              <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                  {items && items.length > 0 && items.map((value:any) => (
                    <Grid key={value.id} item sx={{padding: "10px"}}>
                      <Card title={value.tourist_name} email={value.tourist_email} id={value.id}></Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
