import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Button,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

// Reusable NavButton Component with Props for route and label
interface NavButtonProps {
  to: string;
  label: string;
}

const NavButton: React.FC<NavButtonProps> = ({ to, label }) => {
  return (
    <Link to={to}>
      <Button color="primary">{label}</Button>
    </Link>
  );
};

const Navbar: React.FC = () => {
  return (
    // <AppBar position="fixed" color="secondary">
    <Box position="fixed" width="100%">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "right",
        }}
      >
        {/* Left-aligned Typography */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            position: "absolute",
            left: 20,
          }}
        >
          Josh Keisler
        </Typography>
        <Box
          sx={
            {
              // width: "50%",
              // display: "flex",
              // justifyContent: "space-evenly",
            }
          }
        >
          <NavButton to="/" label="Home" />
          <NavButton to="/about" label="About Me" />
          <NavButton to="/experience" label="Experience" />
          <NavButton to="/projects" label="Projects" />
          <NavButton to="/contact" label="Contact Me" />
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Navbar;
