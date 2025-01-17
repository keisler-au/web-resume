import { LinkedIn, GitHub } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Typography,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Link as MUILink,
} from "@mui/material";
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

import { GITHUB_URL, LINKEDIN_URL } from "../constants";
import theme from "../theme";

interface NavButtonProps {
  to: string;
  label: string;
}
const NavButton: React.FC<NavButtonProps> = ({ to, label }) => (
  <Link to={to}>
    <Button color="primary">{label}</Button>
  </Link>
);

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
      zIndex={4}
      sx={{ backgroundColor: theme.palette.background.paper }}
    >
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.5rem", sm: "2rem" },
              }}
            >
              Josh Keisler
            </Typography>
          </Link>
          <Box sx={{ display: "flex", gap: 1 }}>
            <MUILink
              href={`https://linkedin.com/${LINKEDIN_URL}`}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <LinkedIn fontSize="large" sx={{ marginTop: 0.2 }} />
            </MUILink>
            <MUILink
              href={`https://${GITHUB_URL}`}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <GitHub fontSize="large" />
            </MUILink>
            <Link to="/contact" style={{ color: theme.palette.text.primary }}>
              <FaPhoneAlt fontSize="1.6rem" style={{ marginTop: 7 }} />
            </Link>
            <Link to="/contact" style={{ color: theme.palette.text.primary }}>
              <MdEmail fontSize="2rem" style={{ marginTop: 5 }} />
            </Link>
          </Box>
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
            <MenuItem onClick={handleMenuClose}>
              <NavButton to="/experience" label="Experience" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <NavButton to="/technical" label="Technical Skills" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <NavButton to="/about" label="About Me" />
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
          <NavButton to="/experience" label="Experience" />
          <NavButton to="/technical" label="Technical Skills" />
          <NavButton to="/about" label="About Me" />
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
