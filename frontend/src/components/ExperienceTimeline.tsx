import { Box, Button, Typography } from "@mui/material";

import data from "../fixtures/data.json";
import theme from "../theme";

const sHorizontal = {
  position: "absolute",
  height: 2,
  width: "50%",
  backgroundColor: "white",
};
const sVertical = {
  position: "absolute",
  left: "50%",
  width: 2,
  height: "6rem",
  backgroundColor: "white",
};

const experiences = data.experience[0].body;

const ExperienceTimeline = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "15%",
        height: `${(experiences.length + 1) * 6}rem`,
      }}
    >
      {experiences.map((item, index) => {
        index += 1;
        const side = index % 2 ? { left: 0 } : { right: 0 };
        const itemSide = index % 2 ? { right: "100%" } : { left: "100%" };
        return (
          <>
            <Box sx={{ ...sVertical, top: 0 }}></Box>
            <Button
              variant="outlined"
              sx={{
                flexDirection: "column",
                position: "absolute",
                bottom: `${(experiences.length - (index - 1)) * 6}rem`,
                ...itemSide,
                color: theme.palette.secondary.main,
                fontSize: { xs: "0.9rem", sm: "1rem" },
                "&:hover": {
                  border: `1px solid ${theme.palette.secondary.main}`,
                },
                padding: "0 5%",
                alignItems: index % 2 ? "flex-start" : "flex-end",
              }}
            >
              <Typography
                variant="body1"
                color="white"
                sx={{
                  textAlign: index % 2 ? "left" : "right",
                  minWidth: "7rem",
                  fontSize: "small",
                }}
              >
                {item.year}
              </Typography>
              <Typography
                variant="body1"
                color="white"
                sx={{
                  textAlign: index % 2 ? "left" : "right",
                  minWidth: "7rem",
                  fontSize: "medium",
                }}
              >
                {item.label}
              </Typography>
              <Typography
                variant="body1"
                color="white"
                sx={{
                  textAlign: index % 2 ? "left" : "right",
                  top: "100%",
                  left: 0,
                  right: 0,
                  fontSize: ".7rem",
                }}
              >
                {item.cards[0].title}
              </Typography>
            </Button>
            <Box
              sx={{ ...sHorizontal, ...side, top: `${index * 6 - 0.15}rem` }}
            ></Box>
            <Box sx={{ ...sVertical, top: `${index * 6}rem` }}></Box>
          </>
        );
      })}
      {/* <Box sx={{ ...sHorizontal, top: 0, left: 0 }}></Box>
      <Box sx={{ ...sVertical, top: 0 }}></Box> */}
      {/* <Box sx={{ ...sHorizontal, top: "5.85rem", right: 0 }}></Box>
      <Box sx={{ ...sVertical, top: "6rem" }}></Box>
      <Box sx={{ ...sHorizontal, top: "11.85rem", left: 0 }}></Box>
      <Box sx={{ ...sVertical, top: "12rem" }}></Box>
      <Box sx={{ ...sHorizontal, top: "17.85rem", right: 0 }}></Box>
      <Box sx={{ ...sVertical, top: "18rem" }}></Box>
      <Box sx={{ ...sHorizontal, top: "24.85rem", left: 0 }}></Box>
      <Box sx={{ ...sVertical, top: "24rem" }}></Box>
      <Box sx={{ ...sHorizontal, top: "29.85rem", right: 0 }}></Box>
      <Box sx={{ ...sVertical, top: "24rem" }}></Box> */}
    </Box>
  );
};

export default ExperienceTimeline;
