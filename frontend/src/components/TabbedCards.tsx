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
import { useLocation } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import { BodyData } from "../App";
import theme from "../theme";
import "slick-carousel/slick/slick-theme.css";
import "../slider-styles.css";

const TabbedCards: React.FC<{ data: BodyData[] }> = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get("tab"); // Get the tab identifier
    // const hash = location.hash.replace("#", ""); // Get the heading ID

    if (tab) {
      setActiveTab(+tab);
    }
    // console.log(hash);
    // if (hash) {
    //   const element = document.getElementById(hash);
    //   if (element) {
    //     element.scrollIntoView({ behavior: "smooth" });
    //   }
    // }
  }, [location]);

  const handleChange = (event: React.SyntheticEvent, newactiveTab: number) => {
    setActiveTab(newactiveTab);
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
        value={activeTab}
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
        activeTab === index ? (
          <Box key={index}>
            {/* <Slider {...sliderSettings}> */}
            {tab.cards.map((card, cardIndex) => (
              <Box key={cardIndex}>
                <Card
                  sx={{
                    position: "relative",
                    maxWidth: { xs: "90%", sm: "20%" },
                    minWidth: { xs: "90%", sm: "40%" },
                    minHeight: { xs: "16rem", sm: "70%" },
                    // maxHeight: "16rem",
                    color: theme.palette.secondary.main,
                    width: "100%",
                    backgroundColor: theme.palette.primary.main,
                    margin: "auto",
                    // padding: { xs: "0.5rem", sm: "1rem" },
                    boxShadow: "none",
                  }}
                >
                  <CardContent>
                    {card.content.map((content, lineIndex) => {
                      if (content.description.includes("http")) {
                        return (
                          <Link
                            key={lineIndex}
                            href={content.description}
                            color="secondary"
                            sx={{ margin: "2vh 4vh" }}
                          >
                            {content.description}
                          </Link>
                        );
                      } else if (
                        content.description[content.description.length - 1] ===
                        ":"
                      ) {
                        return (
                          <Typography
                            key={lineIndex}
                            variant="body2"
                            id={content.description}
                            // sx={{ padding: "1rem" }}
                          >
                            {content.description}
                          </Typography>
                        );
                      }
                      return (
                        <Typography
                          key={lineIndex}
                          variant="body2"
                          sx={{ margin: "2vh 4vh" }}
                        >
                          {content.description}
                        </Typography>
                      );
                    })}
                  </CardContent>
                </Card>
              </Box>
            ))}
            {/* </Slider> */}
          </Box>
        ) : null,
      )}
    </>
  );
};

export default TabbedCards;
