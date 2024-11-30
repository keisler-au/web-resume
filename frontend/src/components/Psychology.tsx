import { CardMedia, Box } from "@mui/material";
import React from "react";

import { CardLayout, TextLayout } from "./CardLayout";
import { Description } from "./Descriptions";

const Psychology: React.FC<{ description: Description[] }> = ({
  description,
}) => (
  <>
    <TextLayout section={description[0].sections[0]} />
    <Box display="flex" paddingTop="1vh">
      <TextLayout section={description[0].sections[1]} />
      <CardMedia
        component="img"
        image="/Mountain.jpg"
        alt="Image2"
        height="35%"
      />
    </Box>
  </>
);

export default Psychology;
