import { WavingHand } from "@mui/icons-material";
import { Box, Typography, Link } from "@mui/material";
import React, { ReactNode } from "react";

import theme from "../theme";
import Footer from "./Footer";
import Navbar from "./NavBar";
import { HeadingData } from "../App";

interface PageLayoutProps {
  data: HeadingData;
  pageType: string;
  children?: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  data,
  pageType,
  children,
}) => (
  <>
    {pageType !== "home" && <Navbar />}
    <Box
      sx={{
        backgroundColor:
          pageType === "home" ? "primary" : theme.palette.background.paper,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "40vh",
        maxHeight: "40vh",
        textAlign: "center",
        marginBottom: "4vh",
      }}
    >
      <Typography
        variant={pageType === "home" ? "h2" : "h3"}
        sx={{
          color:
            pageType === "home"
              ? theme.palette.background.paper
              : theme.palette.text.primary,
          marginTop: "5rem",
          fontWeight: "bold",
          height: "6rem",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.main_heading}
        {pageType === "home" && (
          <WavingHand
            sx={{ marginLeft: "2rem", color: "yellow", fontSize: 50 }}
          />
        )}
      </Typography>
      {/* {pageType === "home" && (
        <Typography variant="h5">{data.sub_heading}</Typography>
      )} */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: "40%",
          height: "4rem",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {pageType === "projects" && (
          <Link
            href="https://github.com/keisler-au/web-resume"
            sx={{ marginBottom: 2 }}
          >
            GITHUB - WEB RESUME
          </Link>
        )}
        {data.description}
      </Typography>
    </Box>
    {children}
    <Footer homeStyling={pageType === "home"} />
  </>
);

export default PageLayout;
