import { WavingHand } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";

import theme from "../theme";
import Footer from "./Footer";
import Navbar from "./NavBar";
import { HeadingData } from "../App";

interface PageLayoutProps {
  data: HeadingData;
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ data, children }) => (
  <>
    {!data.sub_heading && <Navbar />}
    <Box
      sx={{
        backgroundColor: data.sub_heading
          ? "primary"
          : theme.palette.background.paper,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "40vh",
        maxHeight: "40vh",
        textAlign: "center",
        marginBottom: data.sub_heading ? "0" : "4vh",
      }}
    >
      <Typography
        variant={data.sub_heading ? "h2" : "h3"}
        sx={{
          color: data.sub_heading
            ? theme.palette.background.paper
            : theme.palette.text.primary,
          marginTop: "5rem",
          fontWeight: "bold",
          height: "6rem",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.main_heading}
        {data.sub_heading && (
          <WavingHand
            sx={{ marginLeft: "2rem", color: "yellow", fontSize: 50 }}
          />
        )}
      </Typography>
      {data.sub_heading && (
        <Typography variant="h5">{data.sub_heading}</Typography>
      )}
      <Typography
        variant="body1"
        sx={{
          maxWidth: "40%",
          height: "4rem", // Fixed height for description
          overflow: "hidden", // Prevent text overflow
          display: "flex",
          alignItems: "center", // Centering the text vertically
          justifyContent: "center", // Centering horizontally
        }}
      >
        {data.description}
      </Typography>
    </Box>
    {children}
    <Footer homeStyling={data.sub_heading} />
  </>
);

export default PageLayout;
