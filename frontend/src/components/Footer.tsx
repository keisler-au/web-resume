import { LinkedIn, GitHub } from "@mui/icons-material";
import { Box, Link } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  const linkedInUrl = "https://www.linkedin.com/in/josh-keisler-93b070a1/";
  const gitHubUrl = "https://github.com/keisler-au/";

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "45px",
        gap: 2, // Spacing between the icons
      }}
    >
      <Link
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
        sx={{
          display: { xs: "flex", sm: "inline-flex" },
          alignItems: "center",
        }}
      >
        <LinkedIn fontSize="large" />
        <span style={{ display: "none" }}>LinkedIn</span>{" "}
      </Link>
      <Link
        href={gitHubUrl}
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
        sx={{
          display: { xs: "flex", sm: "inline-flex" },
          alignItems: "center",
        }}
      >
        <GitHub fontSize="large" />
        <span style={{ display: "none" }}>GitHub</span>
      </Link>
    </Box>
  );
};

export default Footer;
