import { CardMedia, Box } from "@mui/material";
import React from "react";

import { CardLayout, TextLayout } from "./CardLayout";
import { Description } from "./Descriptions";

const Psychology: React.FC = () => (
  <Box sx={{ paddingTop: "5vh", backgroundColor: "rgb(245, 183, 0)" }}>
    <CardLayout
      dMultiplier={1}
      pageReference="Psychology"
      renderFunction={(description: Description[]) => (
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
      )}
    />
  </Box>
);

export default Psychology;
