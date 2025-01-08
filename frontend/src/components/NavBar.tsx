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
import Footer from "./Footer";

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
    <Box
      position="fixed"
      width="100%"
      zIndex={2}
      sx={{ backgroundColor: theme.palette.background.paper }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            position: "relative",
            left: { sm: 0, md: 20 },
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.5rem", sm: "2rem" },
              }}
              noWrap
            >
              Josh Keisler
            </Typography>
          </Link>
          <Footer />
        </Box>

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
            {/* <MenuItem onClick={handleMenuClose}>
              <NavButton to="/about" label="About Me" />
            </MenuItem> */}
            <MenuItem onClick={handleMenuClose}>
              <NavButton to="/experience" label="Experience" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <NavButton to="/projects" label="Technical Skills" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <NavButton to="/contact" label="Contact" />
            </MenuItem>
          </Menu>
        </Box>

        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <NavButton to="/" label="Home" />
          {/* <NavButton to="/about" label="About Me" /> */}
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
