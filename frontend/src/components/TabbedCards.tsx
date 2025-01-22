import { Description } from "@mui/icons-material";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
  Link,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { PageData } from "../App";
import theme from "../theme";
import Header from "./Header";
import { techIcons } from "./Home";

const TabbedCards: React.FC<{ data: PageData }> = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tab = Number(searchParams.get("tab")) || 0;

    setActiveTab(+tab);
  }, [location]);

  const handleChange = (event: React.SyntheticEvent, newactiveTab: number) => {
    setActiveTab(newactiveTab);
  };

  return (
    <>
      <Header data={data.heading[0]} />
      <Tabs
        value={activeTab}
        onChange={handleChange}
        centered
        textColor="secondary"
        indicatorColor="secondary"
      >
        {data.body.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            sx={{
              flexShrink: 1,
              fontSize: {
                xs: activeTab === index ? "" : ".6rem",
                sm: "",
              },
              padding: { xs: 0.5, md: 2.5 },
              minWidth: "auto",
              wordBreak: "break-word",
            }}
          />
        ))}
      </Tabs>

      {data.body.map((tab, index) =>
        activeTab === index ? (
          <Box key={index}>
            {tab.cards.map((card, cardIndex) => (
              <Box
                key={cardIndex}
                position="relative"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Card
                  sx={{
                    margin: "auto",
                    maxWidth: { xs: "90%", sm: "20%" },
                    minWidth: { xs: "90%", sm: "40%" },
                    minHeight: { xs: "16rem", sm: "70%" },
                    boxShadow: "none",
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.secondary.main,
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    {card.content.map(({ description }, lineIndex) => {
                      if (techIcons[description]) {
                        const TechIcon = techIcons[description].icon;
                        return (
                          <Typography
                            key={lineIndex}
                            variant="h5"
                            id={description}
                            paddingTop="2vh"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            gap={2}
                          >
                            {description}
                            {TechIcon && <TechIcon />}
                          </Typography>
                        );
                      }
                      if (description.includes("http")) {
                        return (
                          <Link
                            key={lineIndex}
                            href={description}
                            color="secondary"
                          >
                            {description}
                          </Link>
                        );
                      }
                      return (
                        <Typography
                          key={lineIndex}
                          variant="body2"
                          sx={{
                            marginLeft:
                              description[description.length - 1] === ":"
                                ? "0"
                                : "2vw",
                          }}
                        >
                          {description}
                        </Typography>
                      );
                    })}
                  </CardContent>
                </Card>
                {card.image && (
                  <Box
                    component="img"
                    src={card.image}
                    alt={`${card.image} Photo`}
                    sx={{
                      position: { md: "absolute" },
                      top: "5vh",
                      left: "10vw",
                      width: { xs: "8rem", sm: "10rem", lg: "13rem" },
                      height: { xs: "8rem", sm: "10rem", lg: "13rem" },
                      borderRadius: "50%",
                    }}
                  />
                )}
                {card.references && (
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    color={theme.palette.secondary.main}
                  >
                    <Typography variant="h5">References</Typography>
                    {card.references.map((reference) => (
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                      >
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          marginTop="2vh"
                          color={theme.palette.secondary.main}
                        >
                          {reference.position}
                        </Typography>
                        <Typography variant="body2">
                          {reference.name}
                        </Typography>
                        <Typography variant="body2">
                          {reference.email}
                        </Typography>
                        <Typography variant="body2">
                          {reference.number}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        ) : null,
      )}
    </>
  );
};

export default TabbedCards;
