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

import { BodyData } from "../App";
import theme from "../theme";

const TabbedCards: React.FC<{ data: BodyData[] }> = ({ data }) => {
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
            {tab.cards.map((card, cardIndex) => (
              <Box key={cardIndex}>
                <Card
                  sx={{
                    position: "relative",
                    maxWidth: { xs: "90%", sm: "20%" },
                    minWidth: { xs: "90%", sm: "40%" },
                    minHeight: { xs: "16rem", sm: "70%" },
                    color: theme.palette.secondary.main,
                    width: "100%",
                    backgroundColor: theme.palette.primary.main,
                    margin: "auto",
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
          </Box>
        ) : null,
      )}
    </>
  );
};

export default TabbedCards;
