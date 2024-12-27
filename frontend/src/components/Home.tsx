import { Box, Button, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import theme from "../theme";

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
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        height: "60vh",
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
        <NavButton to="/about" label="About Me" />
        <NavButton to="/experience" label="Experience" />
        <NavButton to="/projects" label="Projects" />
      </Box>
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
  );
};

export default Home;
