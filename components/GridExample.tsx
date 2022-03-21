import { Divider, Grid } from "@mui/material";

const GridExample = () => {
  return (
    <Grid container spacing={4} direction="column">
      <Grid item container xs={2}>
        Hello, Umamahesh
        <Grid item xs={8}></Grid>
        <Grid item xs={2}>
          Logout
        </Grid>
        <Grid item xs={12}>
          <Divider></Divider>
        </Grid>
      </Grid>
      <Grid item container xs={12} spacing={2}>
        <Grid item xs={6}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Grid>

        <Grid item xs={6}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GridExample;
