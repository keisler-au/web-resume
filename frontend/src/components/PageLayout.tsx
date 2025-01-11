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
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: { xs: "33vh", sm: "40vh" },
        textAlign: "center",
        paddingTop: "2vh",
        marginBottom: "4vh",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: theme.palette.primary.main,
          marginTop: { xs: "3rem", sm: "5rem" },
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {data.main_heading}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: theme.palette.text.primary,
          maxWidth: { xs: "90%", sm: "70%", md: "50%" },
          paddingTop: { xs: "1vh", sm: "3vh" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: { xs: "2.5vh", sm: "1rem" },
          textAlign: "center",
        }}
      >
        {data.description}
      </Typography>
    </Box>
    {children}
  </>
);

export default PageLayout;
