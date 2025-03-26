import { Divider, Typography, Box } from "@mui/material";
import React, { useState, useEffect } from "react";

import { BodyData, PageData } from "../App";
import CardStack, { References } from "./GenericCard";
import Header from "./Header";
import theme from "../theme";

interface CardStacksProps {
  data: BodyData[];
  photoPosition: boolean;
  displayCardTitle: boolean;
}
const CardStacks = ({
  data,
  photoPosition,
  displayCardTitle,
}: CardStacksProps) => {
  return (
    <Box
      sx={{
        paddingTop: "5%",
        backgroundColor: theme.palette.primary.main,
        boxShadow: "0px -4px 4px rgba(0, 0, 0, 0.5)",
      }}
    >
      {data.map((item, itemInd) => {
        const references = item.cards[0].references;
        return (
          <Box sx={{ margin: "0 15%" }}>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", marginBottom: "2%" }}
            >
              {item.label}
            </Typography>
            <CardStack
              item={item}
              itemInd={itemInd}
              photoPosition={photoPosition}
              displayCardTitle={displayCardTitle}
            />
            {references && <References references={references} />}
            <Box sx={{ padding: "4% 0" }}>
              <Divider
                sx={{
                  backgroundColor: "white",
                  width: "100%",
                  height: 1,
                }}
              />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

const GenericPage: React.FC<{ data: PageData }> = ({ data }) => {
  const [photoPosition, setPhotoPosition] = useState(window.innerWidth < 600);
  const displayCardTitle = data.heading[0].main_heading === "Technical Skills";

  useEffect(() => {
    window.addEventListener("resize", () => {
      setPhotoPosition(window.innerWidth < 600);
    });
  }, [photoPosition]);

  return (
    <>
      <Header data={data.heading[0]} placeholder={true} />
      <Header data={data.heading[0]} />
      <CardStacks
        data={data.body}
        photoPosition={photoPosition}
        displayCardTitle={displayCardTitle}
      />
    </>
  );
};

export default GenericPage;
