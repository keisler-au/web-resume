import { WavingHand } from "@mui/icons-material";
import { Box, Typography, Link } from "@mui/material";
import React, { useState } from "react";

import theme from "../theme";
import Navbar from "./NavBar";
import { HeadingData } from "../App";

interface PageLayoutProps {
  data: HeadingData;
  pageType: string;
  children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  data,
  pageType,
  children,
}) => {
  return (
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
          // maxHeight: { xs: "33vh", sm: "40vh" },
          textAlign: "center",
          paddingTop: "2vh",
          marginBottom: pageType === "home" ? 0 : "4vh",
        }}
      >
        <Typography
          variant={pageType === "home" ? "h2" : "h3"}
          sx={{
            color: theme.palette.primary.main,
            marginTop: { xs: "3rem", sm: "5rem" },
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            // overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {data.main_heading}
          {/* {pageType === "home" && (
            <WavingHand
              sx={{
                marginLeft: "2vw",
                color: "yellow",
                fontSize: { xs: 30, sm: 50 },
              }}
            />
          )} */}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.primary,
            maxWidth: { xs: "90%", sm: "70%", md: "50%" },
            paddingTop: "3vh",
            // overflow: "hidden",
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
};

export default PageLayout;
