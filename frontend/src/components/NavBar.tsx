import { Box, Typography, Toolbar, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import theme from "../theme";

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
    <Box position="fixed" width="100%">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "right",
        }}
      >
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

        <NavButton to="/" label="Home" />
        <NavButton to="/about" label="About Me" />
        <NavButton to="/experience" label="Experience" />
        <NavButton to="/projects" label="Projects" />
        <Link to="/contact">
          <Button
            color="primary"
            sx={{ border: `1px solid ${theme.palette.primary.main}` }}
          >
            Contact
          </Button>
        </Link>
      </Toolbar>
    </Box>
  );
};

export default Navbar;
