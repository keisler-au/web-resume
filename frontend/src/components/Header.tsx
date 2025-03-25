import { Box, Typography } from "@mui/material";
import React from "react";

import { HeadingData } from "../App";
import theme from "../theme";

const Header: React.FC<{ data: HeadingData; children?: any }> = ({
  data,
  children,
}) => (
  <Box
    sx={{
      paddingTop: { xs: "12vh", sm: "19vh" },
      paddingBottom: { xs: "6vh", sm: "15vh" },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 3,
      backgroundColor: theme.palette.background.paper,
    }}
  >
    <Typography
      variant="h1"
      color="primary"
      sx={{
        fontWeight: "bold",
        fontSize: { xs: "1.8rem", md: "2.5rem" },
      }}
    >
      {data.main_heading}
    </Typography>
    {data.description && (
      <Typography
        variant="body1"
        color="primary"
        sx={{
          maxWidth: { xs: "90%", sm: "70%", md: "50%" },
          textAlign: "center",
          fontSize: { xs: "1rem", sm: "1.1rem" },
        }}
      >
        {data.description}
      </Typography>
    )}
    {children}
  </Box>
);

export default Header;
