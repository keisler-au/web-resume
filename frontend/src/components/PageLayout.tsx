import { Box, Typography } from "@mui/material";
import React from "react";

import theme from "../theme";
import Navbar from "./NavBar";
import { HeadingData } from "../App";

interface PageLayoutProps {
  data: HeadingData;
  children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ data, children }) => (
  <>
    <Navbar />
    <Box
      sx={{
        paddingTop: "14vh",
        paddingBottom: "6vh",
        marginBottom: "3vh",
        // position: "relative",
        minHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        gap: 3,
        backgroundColor: theme.palette.background.paper,
        // textAlign: "center",
      }}
    >
      <Typography
        variant="h1"
        color="primary"
        sx={{
          // marginTop: { xs: "3rem", sm: "5rem" },
          // display: "flex",
          // justifyContent: "space-between",
          // alignItems: "center",
          fontWeight: "bold",
          fontSize: { xs: "1.8rem", md: "2.5rem" },
          // color: theme.palette.primary.main,
        }}
      >
        {data.main_heading}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          // paddingTop: { xs: "1vh", sm: "3vh" },
          maxWidth: { xs: "90%", sm: "70%", md: "50%" },
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",
          // justifyContent: "center",
          textAlign: "center",
          fontSize: { xs: "1rem", sm: "1.1rem" },
          color: theme.palette.text.primary,
        }}
      >
        {data.description}
      </Typography>
    </Box>
    {children}
  </>
);

export default PageLayout;
