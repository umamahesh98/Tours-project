import { Grid, ThemeProvider, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { Box } from "@mui/material";
import { Rating } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Switch from "@mui/material/Switch";

// const theme = createTheme({
//   components: {
//     // Name of the component
//     MuiTypography: {
//       defaultProps: {
//         // The props to change the default for.
//         // disableRipple: true,
//         //maxWidth: 100,
//         fontSize: 18,
//       },
//     },
//   },
// });

const theme = createTheme({
  palette: {
    mode: "light",
  },
});
const Tour = ({ tour }) => {
  const theme1 = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} sm={4}>
        <Paper sx={{ bgcolor: theme?.palette?.background?.default }}>
          <img src={tour.image} width="100%" height="120rem"></img>
          <Box paddingLeft={1}>
            <Typography variant="h6">{tour.name}</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="half-rating-read"
                defaultValue={tour.rating}
                precision={0.5}
                readOnly
                sx={{ fontSize: "18px", marginRight: "10px" }}
              />
              <Typography variant="h6">{tour.numberOfReviews}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTimeIcon sx={{ width: "18px", marginRight: "10px" }} />
              <Typography variant="h6">{tour.duration}hrs</Typography>
              <Typography variant="h6"></Typography>
            </Box>
            <Typography variant="subtitle1">
              Lorem ipsum is a pseudo-Latin text used in web design, typography,
              layout, and printing.
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </ThemeProvider>
  );
};

export default Tour;
