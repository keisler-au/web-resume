import { LinkedIn, GitHub } from "@mui/icons-material";
import { Box, Link, useTheme } from "@mui/material";
import React from "react";

const Footer: React.FC<{ homeStyling?: boolean }> = ({ homeStyling }) => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        position: "fixed", // Fix the footer at the bottom
        bottom: homeStyling ? 20 : 0,
        width: "100%",
        padding: theme.spacing(1, 2), // Reduced padding for a smaller height
        textAlign: "center",
        display: "flex",
        justifyContent: homeStyling ? "center" : "right", // Center the icons horizontally
        alignItems: "center", // Align the icons vertically
        height: "45px", // Reduced height for a compact footer
      }}
    >
      <Link
        href="https://www.linkedin.com/in/your-profile/"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
        sx={{ marginRight: theme.spacing(2) }}
      >
        <LinkedIn fontSize="large" />
        https://www.linkedin.com/in/your-profile/
      </Link>
      <Link
        href="https://github.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
      >
        <GitHub fontSize="large" />
        https://github.com/your-profile
      </Link>
    </Box>
  );
};

export default Footer;
