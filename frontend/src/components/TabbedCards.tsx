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
import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import theme from "../theme";
import "slick-carousel/slick/slick-theme.css";
import "../slider-styles.css";

interface TabData {
  data: {
    label: string;
    cards: {
      title: string;
      content: string[];
    }[];
  }[];
  defaultTab: number;
}

const TabbedCards: React.FC<TabData> = ({ data, defaultTab }) => {
  const [value, setValue] = useState(defaultTab);

  useEffect(() => {
    setValue(defaultTab);
  }, [defaultTab]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const sliderSettings = {
    // className: "center",
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop scrolling
    speed: 500, // Transition speed between slides
    slidesToShow: 1, // Show only one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    // centerMode: true,
    centerPadding: "0", // No extra padding around the center slide
    nextArrow: <ArrowForwardIos />,
    prevArrow: <ArrowBackIos />,
    swipe: true, // Disable mouse swipe
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
        {data.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>

      {/* Tab Content */}
      {data.map((tab, index) =>
        value === index ? (
          <Box key={index}>
            <Slider {...sliderSettings}>
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
                      maxWidth: "35%", // Set max width for the card
                      width: "70%", // Allow responsive resizing
                      height: "70%",
                      backgroundColor: theme.palette.text.secondary, // Optional: Styling
                    }}
                  >
                    <CardHeader title={card.title} sx={{ paddingBottom: 0 }} />
                    <CardContent>
                      {card.content.map((content, lineIndex) => (
                        <Typography key={lineIndex} variant="body2">
                          {content.description}
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
