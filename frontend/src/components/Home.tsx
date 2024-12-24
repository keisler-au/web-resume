import { WavingHand } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Typography, Button, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import theme from "../theme";
import PageLayout from "./PageLayout";

// Reusable Button Component
export const NavButton: React.FC<{
  to: string;
  label: string;
}> = ({ to, label }) => {
  return (
    <Link
      to={to}
      style={{
        textDecoration: "none",
      }}
    >
      <Button
        color="primary"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          fontSize: "1.2rem",
        }}
      >
        {label}
        <div
          style={{
            backgroundColor: theme.palette.primary.main,
            width: "8rem",
            height: 1,
          }}
        ></div>
      </Button>
    </Link>
  );
};

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "space-between",
    //     textAlign: "center",
    //     padding: "5rem 1rem", // Increased padding for more space
    //     color: theme.palette.text.primary,
    //     minHeight: "40vh",
    //     maxHeight: "40vh",
    //   }}
    // >
    //   {/* Main Heading */}
    //   <Typography
    //     variant="h2"
    //     sx={{ marginBottom: "2.5rem", marginTop: "2.5rem", height: "6rem" }}
    //   >
    // Josh Keisler
    // <WavingHand
    //   sx={{ marginLeft: "2rem", color: "yellow", fontSize: 50 }}
    // />
    //   </Typography>

    //   {/* Subheading */}
    //   <Typography variant="h5" sx={{ marginBottom: ".5rem" }}>
    //     Full-Stack Developer | CI/CD Enthusiast | Scalable Web Solutions
    //   </Typography>

    //   {/* Brief Description */}
    //   <Typography
    //     variant="body1"
    //     sx={{
    //       marginBottom: "2.5rem",
    //       maxWidth: "50%",
    //     }}
    //   >
    // Passionate about building efficient and scalable web applications, with
    // experience in full-stack development, CI/CD pipelines, and
    // containerization technologies.
    //   </Typography>

    <PageLayout
      homeStyling={true}
      heading="Josh Keisler"
      description="Passionate about building efficient and scalable web applications, with
          experience in full-stack development, CI/CD pipelines, and
          containerization technologies."
    >
      {/* Buttons Section */}
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          height: "56vh",
          paddingTop: "10vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Reusable Nav Buttons */}
          <NavButton to="/about" label="About Me" />
          <NavButton to="/experience" label="Experience" />
          <NavButton to="/projects" label="Projects" />
        </Box>

        {/* Contact Me Button */}
        <Box
          sx={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}
        >
          <Link to="/contact">
            <Button
              color="primary"
              sx={{
                "&:hover": {
                  backgroundColor: theme.palette.text.primary,
                },
                fontSize: "1.2rem",
                border: 1,
                borderColor: theme.palette.primary.main,
              }}
            >
              Contact Me
            </Button>
          </Link>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default Home;
