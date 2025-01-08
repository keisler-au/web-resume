import { Typography, Box, Button, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import theme from "../theme";
import Footer from "./Footer";

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
          fontSize: { xs: "1rem", sm: "1.2rem" }, // Adjusted for mobile and laptop
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

const Home: React.FC = (data) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePhotoClick = () => {
    setIsExpanded((prev) => !prev);
  };
  console.log(data);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 20,
        maxWidth: "50vw",
        margin: "7rem auto",
      }}
    >
      <Box>
        <Box
          component="img"
          src="/cv_photo.jpg"
          alt="Profile Photo"
          onClick={handlePhotoClick}
          sx={{
            position: "absolute",
            // top: "55vh",
            // left: "20vw",
            width: isExpanded
              ? { xs: "12rem", sm: "15rem", md: "18rem" }
              : { xs: "2.3rem", sm: "4rem", md: "8rem" },
            height: isExpanded
              ? { xs: "12rem", sm: "15rem", md: "18rem" }
              : { xs: "2.3rem", sm: "4rem", md: "8rem" },
            borderRadius: "50%",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            boxShadow: isExpanded
              ? `0 0 15px ${theme.palette.primary.main}`
              : "none",
            zIndex: 20,
          }}
        />
      </Box>
      <Typography color="secondary">
        {data.data[0].cards[0].content[0].description}
      </Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        minHeight: { xs: "67vh", sm: "60vh" }, // Ensure full height of the screen
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly", // Distribute space between content
        paddingTop: "6vh",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "6vh",
          fontSize: { xs: "1.2rem", sm: "1.5rem" }, // Adjust font size for mobile
        }}
      >
        Functional, Scaleable, Maintainable, Automating, Accessible,
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: { xs: "1rem", sm: "2rem" }, // Adjust gap for mobile
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <NavButton to="/about" label="About Me" />
        <NavButton to="/experience" label="Experience" />
        <NavButton to="/projects" label="Projects" />
      </Box>
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/contact">
          <Button
            color="primary"
            sx={{
              "&:hover": {
                backgroundColor: theme.palette.text.primary,
              },
              fontSize: { xs: "1rem", sm: "1.2rem" }, // Adjust font size for mobile
              border: 1,
              borderColor: theme.palette.primary.main,
            }}
          >
            Contact Me
          </Button>
        </Link>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
