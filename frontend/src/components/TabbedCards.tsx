import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Tabs,
  Tab,
} from "@mui/material";
import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import theme from "../theme";
import "slick-carousel/slick/slick-theme.css";
import "../slider-styles.css";

interface TabData {
  tabs: {
    label: string;
    cards: {
      title: string;
      content: string[];
    }[];
  }[];
}

const TabbedCards: React.FC<TabData> = ({ tabs }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const sliderSettings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop scrolling
    speed: 500, // Transition speed between slides
    slidesToShow: 1, // Show only one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    centerMode: true,
    centerPadding: "0", // No extra padding around the center slide
    nextArrow: <ArrowForwardIos />,
    prevArrow: <ArrowBackIos />,
    swipe: false, // Disable mouse swipe
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        textColor="secondary"
        indicatorColor="secondary"
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>

      {/* Tab Content */}
      {tabs.map((tab, index) =>
        value === index ? (
          <Box key={index}>
            <Slider {...sliderSettings}>
              {/* <Box sx={{ display: "flex", justifyContent: "center" }}> */}
              {tab.cards.map((card, cardIndex) => (
                <Box
                  key={cardIndex}
                  sx={{
                    position: "relative", // Make the container relative
                    height: "40vh", // Set a fixed height to define the layout
                  }}
                >
                  <Card
                    sx={{
                      position: "absolute", // Absolute positioning
                      top: "50%", // Position from the top
                      left: "50%", // Position from the left
                      transform: "translate(-50%, -50%)", // Center the card
                      maxWidth: "55%", // Set max width for the card
                      width: "70%", // Allow responsive resizing
                      height: "70%",
                      backgroundColor: theme.palette.text.secondary, // Optional: Styling
                    }}
                  >
                    <CardHeader title={card.title} />
                    <CardContent>
                      {card.content.map((line, lineIndex) => (
                        <Typography key={lineIndex} variant="body2">
                          {line}
                        </Typography>
                      ))}
                    </CardContent>
                  </Card>
                </Box>
              ))}
              {/* </Box> */}
            </Slider>
          </Box>
        ) : null,
      )}
    </>
  );
};

export default TabbedCards;
