import { Divider, Typography, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { BodyData, PageData } from "../App";
import CardStack, { References } from "./GenericCard";
import Header from "./Header";
import theme from "../theme";

interface BodyProps {
  data: BodyData[];
  photoPosition: boolean;
  displayCardTitle: boolean;
}
const Body = ({ data, photoPosition, displayCardTitle }: BodyProps) => {
  const location = useLocation();
  const [hashRender, setHashRender] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: location.hash
        ? document?.querySelector(location.hash)?.offsetTop - 80
        : 0,
      behavior: "smooth",
    });
    setHashRender(location.hash);
  }, [hashRender, location]);

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
              id={item.label.replace(/[\s.]/g, "-")}
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
      <Body
        data={data.body}
        photoPosition={photoPosition}
        displayCardTitle={displayCardTitle}
      />
    </>
  );
};

export default GenericPage;
