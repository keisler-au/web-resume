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
        minHeight: { xs: "33vh", sm: "40vh" },
        maxHeight: { xs: "33vh", sm: "40vh" },
        textAlign: "center",
        marginBottom: pageType === "home" ? 0 : "4vh",
        // padding: { xs: 2, sm: 4 },
      }}
    >
      <Typography
        variant={pageType === "home" ? "h2" : "h3"}
        sx={{
          color:
            pageType === "home"
              ? theme.palette.background.paper
              : theme.palette.text.primary,
          marginTop: { xs: "3rem", sm: "5rem" },
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {data.main_heading}
        {pageType === "home" && (
          <WavingHand
            sx={{
              marginLeft: "1rem",
              color: "yellow",
              fontSize: { xs: 30, sm: 50 },
            }}
          />
        )}
      </Typography>
      {/* {pageType === "home" && (
        <Typography variant="h5">{data.sub_heading}</Typography>
      )} */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: { xs: "90%", sm: "70%", md: "40%" },
          paddingTop: "3vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: { xs: "2.5vh", sm: "1rem" },
          textAlign: "center",
        }}
      >
        {pageType === "projects" && (
          <Link
            href="https://github.com/keisler-au/web-resume"
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem" },
            }}
          >
            GITHUB - WEB RESUME
          </Link>
        )}
        {data.description}
      </Typography>
    </Box>
    {children}
  </>
);

export default PageLayout;
