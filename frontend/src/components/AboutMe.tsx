import { Box } from "@mui/material";
import React from "react";

import DetailedParagraphs from "./DetailedParagraphs";
import Header from "./Header";
import { PageData } from "../App";

const AboutMe: React.FC<{ data: PageData }> = ({ data }) => (
  <>
    <Header data={data.heading[0]} />
    <Box
      sx={{
        padding: "5vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
      }}
    >
      <DetailedParagraphs cards={data.body[0].cards} />
    </Box>
  </>
);

export default AboutMe;
