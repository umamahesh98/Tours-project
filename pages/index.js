import { Container, Grid,ThemeProvider,Switch, Paper } from "@mui/material";
import PrimarySearchAppBar from "../components/Header";
import Tours from "../components/Tours";
import { Box } from "@mui/material";
import Typo from "../components/Typographytrial";
import { useTheme } from "@mui/material/styles";
import Text1 from "../components/TextFields";
import { useState } from "react";
import { createTheme } from "@mui/material";
import styled from "@emotion/styled";
import GridExample from '../components/GridExample'

import CardComponent from '../components/CardComponent'

export default function Home() {
  
  const [dark, setDark] = useState(false);
  const theme = createTheme({
    palette: {
      mode: dark? "light": 'dark',
    },
  });

  return (
    <>
     {/* <ThemeProvider theme={theme}>

      <PrimarySearchAppBar />
      <Paper>
      <Switch onChange={()=>{setDark(!dark)}}/>
      <Container>
        <Grid container spacing={3}>
          <Tours />
        </Grid>

        <Typo />
         <Text1 /> 
       </Container>
      </Paper>
      </ThemeProvider>   
      <GridExample></GridExample> */}

      <CardComponent></CardComponent>
      
      
    </>

  );
}
