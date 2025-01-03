import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Typography,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  };

  return (
    <Box position="fixed" width="100%" zIndex={1000}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: theme.spacing(1, 2),
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            position: "relative",
            left: { xs: "0", sm: "20px" }, // Adjust logo position for mobile
            fontSize: { xs: "1.5rem", sm: "2rem" }, // Adjust font size for mobile
          }}
        >
          Josh Keisler
        </Typography>

        {/* Mobile hamburger menu */}
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <IconButton
            color="primary"
            onClick={handleMenuClick}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
            sx={{
              "& .MuiMenu-paper": {
                backgroundColor: theme.palette.background.paper,
              },
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <NavButton to="/" label="Home" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <NavButton to="/about" label="About Me" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <NavButton to="/experience" label="Experience" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <NavButton to="/projects" label="Projects" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <NavButton to="/contact" label="Contact" />
            </MenuItem>
          </Menu>
        </Box>

        {/* Desktop Menu */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: 2,
          }}
        >
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
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Navbar;
