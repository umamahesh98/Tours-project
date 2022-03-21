import { createTheme, TextField, ThemeProvider } from "@mui/material";
import { Typography } from "@mui/material";
import { useState } from "react";
import { Button } from "@mui/material";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
});

const Text1 = () => {
  const [note, setNote] = useState("");
  const [details, setDetails] = useState("");
  const [noteError, setNoteError] = useState(false);
  const [detailError, setDetailerror] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNoteError(false);
    setDetailerror(false);
    if (note == "") {
      setNoteError(true);
    }
    if (details == "") {
      setDetailerror(true);
    }
    if (note && details) {
      console.log(note, details);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography
          variant="subtitle2"
          margin={2}
          color="secounday"
          gutterBottom
        >
          Create a new Note
        </Typography>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setNote(e.target.value)}
            label="Note Title"
            color="secondary"
            variant="outlined"
            fullWidth
            required
            error={noteError}
            sx={{ margin: "10px" }}
          ></TextField>
          <TextField
            onChange={(e) => setDetails(e.target.value)}
            label="Details"
            color="secondary"
            variant="outlined"
            fullWidth
            required
            multiline
            rows={4}
            sx={{ margin: "10px" }}
            error={detailError}
          ></TextField>
          <Button type="submit" color="secondary" variant="outlined">
            Click me
          </Button>
        </form>
      </ThemeProvider>
    </>
  );
};

export default Text1;
