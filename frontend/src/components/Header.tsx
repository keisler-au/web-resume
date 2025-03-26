import { Box, Typography } from "@mui/material";
import React from "react";

import { HeadingData } from "../App";
import theme from "../theme";

const Header: React.FC<{
  data: HeadingData;
  placeholder?: true;
  children?: any;
}> = ({ data, placeholder, children }) => {
  const placeholderSytles = placeholder
    ? { visibility: "hidden" }
    : { position: "fixed", top: 0, left: 0, right: 0, bottom: 100 };
  return (
    <Box
      sx={{
        ...placeholderSytles,
        zIndex: -10,
        paddingTop: { xs: "12vh", sm: "19vh" },
        paddingBottom: { xs: "6vh", sm: "14vh" },
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
};

export default Header;
