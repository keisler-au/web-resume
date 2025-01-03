import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Tabs,
  Tab,
  Link,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import { BodyData } from "../App";
import theme from "../theme";
import "slick-carousel/slick/slick-theme.css";
import "../slider-styles.css";

const TabbedCards: React.FC<{ data: BodyData[]; defaultTab: number }> = ({
  data,
  defaultTab,
}) => {
  const [value, setValue] = useState(defaultTab);

  useEffect(() => {
    setValue(defaultTab);
  }, [defaultTab]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const sliderSettings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    nextArrow: <ArrowForwardIos />,
    prevArrow: <ArrowBackIos />,
    swipe: true,
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
          <Tab
            key={index}
            label={tab.label}
            sx={{ padding: "0.5rem", flexShrink: 1 }}
          />
        ))}
      </Tabs>

      {data.map((tab, index) =>
        value === index ? (
          <Box key={index} sx={{ padding: { xs: "0.5rem", sm: "1rem" } }}>
            <Slider {...sliderSettings}>
              {tab.cards.map((card, cardIndex) => (
                <Box
                  key={cardIndex}
                  sx={{
                    // position: "relative",
                    // height: "auto", // Adjust height to be more flexible
                    padding: { xs: "1rem", sm: "2rem" }, // Adjust padding for smaller screens
                  }}
                >
                  <Card
                    sx={{
                      position: "relative",
                      maxWidth: { xs: "90%", sm: "40%" },
                      minWidth: { xs: "90%", sm: "40%" },
                      minHeight: { xs: "16rem", sm: "70%" },
                      maxHeight: "16rem",

                      width: "100%",
                      backgroundColor: theme.palette.text.secondary,
                      margin: "auto",
                      padding: { xs: "0.5rem", sm: "1rem" },
                    }}
                  >
                    <CardHeader
                      title={card.title}
                      sx={{
                        paddingBottom: 0,
                      }}
                    />
                    <CardContent>
                      {card.content.map((content, lineIndex) =>
                        content.description.includes("http") ? (
                          <Link key={lineIndex} href={content.description}>
                            {content.description}
                          </Link>
                        ) : (
                          <Typography key={lineIndex} variant="body2">
                            {content.description}
                          </Typography>
                        ),
                      )}
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Slider>
          </Box>
        ) : null,
      )}
    </>
  );
};

export default TabbedCards;
