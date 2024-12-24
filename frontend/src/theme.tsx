// theme.ts
import { createTheme } from "@mui/material/styles";

const darkBlue = "#1D3557";
const white = "#FFFFFF";
const offWhite = "#E8E8E8"; // Darker than original off-white but lighter than light gray
const mediumGray = "#9A9A9A"; // Lighter than original medium gray
const lightGray = "#D1D1D1"; // Darker than original light gray but still lighter than medium gray

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
    // h2: {
    //   fontWeight: "bold",
    //   color: white,
    // },
    // h3: {
    //   fontWeight: "bold",
    //   color: mediumGray,
    // },
    h4: {
      color: lightGray,
    },

    h5: {
      color: mediumGray,
    },
    body1: {
      color: mediumGray,
    },
  },
});

export default theme;
