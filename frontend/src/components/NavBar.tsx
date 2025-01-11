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
      zIndex={4}
      sx={{ backgroundColor: theme.palette.background.paper }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            left: { sm: 0, md: 20 },
            display: "flex",
            alignItems: "flex-end",
            gap: 1,
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
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "45px",
              gap: 1,
            }}
          >
            <MUILink
              href={`https://linkedin.com/${LINKEDIN_URL}`}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              sx={{
                display: { xs: "flex", sm: "inline-flex" },
                alignItems: "center",
              }}
            >
              <LinkedIn fontSize="large" />
            </MUILink>
            <MUILink
              href={`https://${GITHUB_URL}`}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              sx={{
                display: { xs: "flex", sm: "inline-flex" },
                alignItems: "center",
                gap: 2,
              }}
            >
              <GitHub fontSize="large" />
            </MUILink>
            <Link
              to="/contact"
              style={{
                color: theme.palette.text.primary,
                display: "flex",
                gap: 10,
                alignItems: "center",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <FaPhoneAlt fontSize="1.6rem" />
            </Link>
            <Link
              to="/contact"
              style={{
                color: theme.palette.text.primary,
                display: "flex",
                gap: 10,
                alignItems: "center",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <MdEmail fontSize="2rem" />
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
              <NavButton to="/technical" label="Technical" />
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
          <NavButton to="/technical" label="Technology" />
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
