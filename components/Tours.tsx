import { Typography, Paper, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import cities from "../pages/data.json";
import Tour from "../pages/tour";
const Tours = () => {
  return (
    <>
      {cities.map((city) => {
        return (
          <>
            <Typography marginTop={8} sx={{ fontSize: " 30px", backgroundColor:(theme) =>
      theme.palette.mode === 'dark' ? '#1A2027' : '#fff'}}>
              {city.name}
            </Typography>
            <Grid container spacing={3} columnSpacing={4}>
              {city.tours.map((tour) => {
                return <Tour tour={tour}></Tour>;
              })}
            </Grid>
          </>
        );
      })}
    </>
  );
};

export default Tours;
