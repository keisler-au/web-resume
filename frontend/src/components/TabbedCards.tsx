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
          <Tab key={index} label={tab.label} sx={{ flexShrink: 1 }} />
        ))}
      </Tabs>

      {data.body.map((tab, index) =>
        activeTab === index ? (
          <Box key={index}>
            {tab.cards.map((card, cardIndex) => (
              <Box key={cardIndex}>
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
                  <CardContent>
                    {card.content.map(({ description }, lineIndex) => {
                      if (description[description.length - 1] === ":") {
                        return (
                          <Typography
                            key={lineIndex}
                            variant="body2"
                            id={description}
                          >
                            {description}
                          </Typography>
                        );
                      }
                      if (description.includes("http")) {
                        return (
                          <Link
                            key={lineIndex}
                            href={description}
                            color="secondary"
                            sx={{ margin: "2vh 4vh" }}
                          >
                            {description}
                          </Link>
                        );
                      }
                      return (
                        <Typography
                          key={lineIndex}
                          variant="body2"
                          sx={{ margin: "2vh 4vh" }}
                        >
                          {description}
                        </Typography>
                      );
                    })}
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        ) : null,
      )}
    </>
  );
};

export default TabbedCards;
