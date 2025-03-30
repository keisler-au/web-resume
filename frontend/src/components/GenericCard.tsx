import { Typography, Box, List, ListSubheader, ListItem } from "@mui/material";
import React, { useState } from "react";

import { BodyData } from "../App";
import theme from "../theme";
import { techIcons } from "./TechnicalSkillButtons";

const rectanglePhotos = [
  "/calm_and_connected.jpg",
  "/bingo_home.jpg",
  "/bingo_publish.jpg",
  "/bingo_play.jpg",
];

const Photo: React.FC<{ path: string }> = ({ path }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sized = rectanglePhotos.includes(path);

  const handlePhotoClick = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <Box
      width="100%"
      display="flex"
      position="relative"
      sx={{ margin: { xs: "2vh 0", sm: 0 } }}
    >
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
          sx={{
            width: { xs: "8rem", sm: sized ? "10rem" : "15rem" },
            height: "auto",
            visibility: "hidden",
          }}
        ></Box>
        <Box
          component="img"
          src={path}
          alt={`${path} Photo`}
          onClick={handlePhotoClick}
          sx={{
            position: "absolute",
            width: isExpanded
              ? { xs: "12rem", sm: "15rem", md: "20rem" }
              : { xs: "8rem", sm: sized ? "10rem" : "15rem" },
            height: "auto",
            transition: "all 0.3s ease-in-out",
            boxShadow: isExpanded
              ? `0 0 15px ${theme.palette.primary.main}`
              : "none",
            borderRadius: sized ? "0" : "50%",
            cursor: "pointer",
            zIndex: 2,
          }}
        />
      </Box>
    </Box>
  );
};
const Paragraph: React.FC<{ card: BodyData["cards"][0]; justify: boolean }> = ({
  card,
  justify,
}) => {
  console.log(card.content[0].description.split("-"));

  return (
    <Box sx={{ flexDirection: "column" }}>
      {card.content.map((item) => {
        const justifiedStyle = justify
          ? { maxWidth: "85vw" }
          : { width: "35vw" };
        return (
          <Typography
            color="secondary"
            sx={{
              ...justifiedStyle,
              textAlign: { xs: "center", sm: "justify" },
              margin: "5%",
            }}
          >
            {item.listheader ? (
              <List
                sx={{
                  color: theme.palette.secondary.main,
                  listStyleType: "disc",
                }}
                subheader={
                  item.listheader ? (
                    <ListSubheader
                      sx={{
                        color: theme.palette.secondary.main,
                        backgroundColor: "transparent",
                        fontSize: "1.3rem",
                        padding: 0,
                        marginBottom: "0.5rem",
                        lineHeight: "2rem",
                      }}
                    >
                      {item.listheader}
                    </ListSubheader>
                  ) : null
                }
              >
                {item.description.split("**").map((line, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      display: "list-item",
                      padding: 0,
                      margin: "0 2rem",
                    }}
                  >
                    <Typography color="secondary">{line}</Typography>
                  </ListItem>
                ))}
              </List>
            ) : (
              <Box>
                {item.description}
                <br />
              </Box>
            )}
          </Typography>
        );
      })}
    </Box>
  );
};

interface ReferenceProp {
  position: string;
  name: string;
  email: string;
  number: string;
}
export const References: React.FC<{ references: ReferenceProp[] }> = ({
  references,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      color={theme.palette.secondary.main}
    >
      <Typography variant="h5">References</Typography>
      {references.map((reference) => (
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography
            variant="body1"
            fontWeight="bold"
            marginTop="2vh"
            textAlign="center"
            color={theme.palette.secondary.main}
          >
            {reference.position}
          </Typography>
          <Typography variant="body2">{reference.name}</Typography>
          <Typography variant="body2">{reference.email}</Typography>
          <Typography variant="body2">{reference.number}</Typography>
        </Box>
      ))}
    </Box>
  );
};

interface CardStackProps {
  item: BodyData["cards"];
  itemInd: number;
  photoPosition: boolean;
  displayCardTitle: boolean;
}
const CardStack = ({
  item,
  itemInd,
  photoPosition,
  displayCardTitle,
}: CardStackProps) => {
  return (
    <Box
      key={itemInd}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: { xs: 4, sm: 0 },
      }}
    >
      {item.cards.map((card, cardInd) => {
        const TechIcon = techIcons[card.title] && techIcons[card.title];
        const photoOnLeft = (itemInd + cardInd) % 2 === 0 || photoPosition;
        return (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {displayCardTitle && (
              <Typography
                id={card.title.replace(/[\s.]/g, "-")}
                variant="h5"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  marginTop: !cardInd ? "3%" : 0,
                  gap: 1,
                }}
              >
                {card.title}
                {TechIcon && <TechIcon />}
              </Typography>
            )}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              {card.image && photoOnLeft && <Photo path={card.image} />}
              <Paragraph card={card} justify={!displayCardTitle} />
              {card.image && !photoOnLeft && <Photo path={card.image} />}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default CardStack;
