import { createTheme } from "@mui/material/styles";

const darkBlue = "#1D3557";
const white = "#FFFFFF";
const offWhite = "#E8E8E8";
const mediumGray = "#9A9A9A";
const lightGray = "#D1D1D1";

const theme = createTheme({
  palette: {
    primary: {
      main: darkBlue,
    },
    secondary: {
      main: white,
    },
    text: {
      primary: mediumGray,
      secondary: lightGray,
    },
    background: {
      default: darkBlue,
      paper: offWhite,
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: {
      color: lightGray,
    },

    h3: {
      color: white,
    },
    body1: {
      color: mediumGray,
    },
  },
});

export default theme;
