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
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>

      {data.map((tab, index) =>
        value === index ? (
          <Box key={index}>
            <Slider {...sliderSettings}>
              {tab.cards.map((card, cardIndex) => (
                <Box
                  key={cardIndex}
                  sx={{
                    position: "relative",
                    height: "40vh",
                  }}
                >
                  <Card
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      maxWidth: "35%",
                      width: "70%",
                      height: "70%",
                      backgroundColor: theme.palette.text.secondary,
                    }}
                  >
                    <CardHeader title={card.title} sx={{ paddingBottom: 0 }} />
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
