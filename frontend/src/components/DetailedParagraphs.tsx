import { Typography, Box } from "@mui/material";
import React, { useState, useEffect } from "react";

import { BodyData } from "../App";
import theme from "../theme";

const Photo: React.FC<{ path: string }> = ({ path }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePhotoClick = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <Box width="100%" display="flex">
      <Box
        width="100%"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: { xs: "stretch", sm: "center" },
        }}
      >
        <Box
          component="img"
          src={path}
          alt={`${path} Photo`}
          onClick={handlePhotoClick}
          sx={{
            position: "absolute",
            width: isExpanded
              ? { xs: "12rem", sm: "15rem", md: "18rem" }
              : { xs: "8rem", sm: "10rem" },
            height: isExpanded
              ? { xs: "12rem", sm: "15rem", md: "18rem" }
              : { xs: "8rem", sm: "10rem" },
            transition: "all 0.3s ease-in-out",
            boxShadow: isExpanded
              ? `0 0 15px ${theme.palette.primary.main}`
              : "none",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: 2,
          }}
        />
      </Box>
    </Box>
  );
};
const Paragraph: React.FC<{ description: string }> = ({ description }) => (
  <Typography
    color="secondary"
    sx={{
      maxWidth: "45vw",
      textAlign: { xs: "center", sm: "justify" },
    }}
  >
    {description}
  </Typography>
);

const DetailedParagraphs: React.FC<{ cards: BodyData["cards"] }> = ({
  cards,
}) => {
  const [photoPosition, setPhotoPosition] = useState(window.innerWidth < 600);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setPhotoPosition(window.innerWidth < 600);
    });
  }, [photoPosition]);

  return cards.map((card, index) => (
    <Box
      key={index}
      sx={{
        maxWidth: "60vw",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 20, sm: 10 },
      }}
    >
      {index % 2 === 0 || photoPosition ? (
        <>
          <Photo path={card.image} />
          <Paragraph description={card.content[0].description} />
        </>
      ) : (
        <>
          <Paragraph description={card.content[0].description} />
          <Photo path={card.image} />
        </>
      )}
    </Box>
  ));
};

export default DetailedParagraphs;
