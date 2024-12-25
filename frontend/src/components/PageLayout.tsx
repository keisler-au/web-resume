import { WavingHand } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

import theme from "../theme";
import Footer from "./Footer";
import Navbar from "./NavBar";

interface PageLayoutProps {
  heading: string;
  description: string;
  children?: any;
  homeStyling?: boolean;
  subHeading?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  homeStyling,
  heading,
  subHeading,
  description,
  children,
}) => (
  <>
    {!homeStyling && <Navbar />}
    <Box
      sx={{
        backgroundColor: homeStyling
          ? "primary"
          : theme.palette.background.paper,
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
        variant={homeStyling ? "h2" : "h3"}
        sx={{
          color: homeStyling
            ? theme.palette.secondary.main
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
        {heading}
        {homeStyling && (
          <WavingHand
            sx={{ marginLeft: "2rem", color: "yellow", fontSize: 50 }}
          />
        )}
      </Typography>
      {homeStyling && <Typography variant="h5">{subHeading}</Typography>}
      <Typography
        variant="body1"
        sx={{
          maxWidth: "40%",
          height: "4rem", // Fixed height for description
          overflow: "hidden", // Prevent text overflow
          display: "flex",
          alignItems: "center", // Centering the text vertically
          justifyContent: "center", // Centering horizontally
        }}
      >
        {description}
      </Typography>
    </Box>

    {/* Render children below */}
    {children}
    <Footer homeStyling={homeStyling} />
  </>
);

export default PageLayout;
