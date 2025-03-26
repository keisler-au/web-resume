import { Box, Divider } from "@mui/material";
import React from "react";

import { PageData } from "../App";
import ExperienceTimeline from "./ExperienceTimeline";
import GenericPage from "./GenericPage";
import TechnicalSkillButtons from "./TechnicalSkillButtons";
import theme from "../theme";

const Home: React.FC<{ data: PageData }> = ({ data }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <GenericPage data={data} />
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <ExperienceTimeline />
      <Divider sx={{ backgroundColor: "white", width: "80%", height: 1 }} />
      <TechnicalSkillButtons />
    </Box>
  </Box>
);

export default Home;
