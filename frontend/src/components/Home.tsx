import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Paper,
  Container,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Logo from "./Logo";

const Home: React.FC<{ projects: string[] }> = ({ projects }) => {
  const { t } = useTranslation();

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // TODO: Fix responsitivity
  // TODO: Fix card height
  // TODO: Check CSS
  // TODO: CardLayout responsive styles

  const nextSectionScrollsIntoView = "131vh";
  const distanceOfHeaderFromTop = "14vh";
  const headerFromBottom = "36.5vh";
  const transformRate = 150;
  const cardsOpacity = Math.max(1 - scrollY / transformRate, -1);
  return (
    <>
      <Paper
        sx={{
          position: "sticky",
          top: `-${nextSectionScrollsIntoView}`,
          zIndex: 1,
          background: "radial-gradient(circle, #d8d8d8, #151515)",
          backgroundAttachment: "fixed",
        }}
      >
        <Logo scrollY={scrollY} />
        <Box
          minHeight={`calc(${nextSectionScrollsIntoView} - ${distanceOfHeaderFromTop})`}
        ></Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            position: "sticky",
            bottom: "73vh",
            marginLeft: "24vw",
          }}
        >
          <Typography
            variant="h1" // Or h2, h3, etc. based on your heading level
            sx={{
              fontSize: "3rem", // Adjust font size
              fontWeight: "bold", // Make the header bold
              color: "#333", // Dark gray color
              textAlign: "center", // Center-align the text
              textTransform: "uppercase", // Uppercase text
              letterSpacing: "0.1em", // Add spacing between letters
              lineHeight: 1.2, // Adjust line height for better readability
              fontFamily: "'Playfair Display', serif", // Fancy font
              marginBottom: "1rem", // Add some spacing below the header
              padding: "0.5rem", // Optional padding
            }}
          >
            {t("joshKeisler")}
          </Typography>
          <Typography
            sx={{
              opacity: Math.max(1 - scrollY / 800, -1),
              // transform: `scaleX(${1 - Math.min(scrollY / (transformRate + 30), 0.9)}) scaleY(${1 - Math.min(scrollY / transformRate, 0.9)})`,
              transition: "opacity 0.1s ease, transform 0.1s ease",
              marginLeft: "1.8rem",
            }}
          >
            {t("hello")}
          </Typography>
        </Box>

        {/* Cards*/}
        {cardsOpacity > 0 && (
          <Container
            sx={{
              position: "fixed",
              bottom: "18vh",
              left: "10vw",
              right: "10vw",
              display: "flex",
              flexDirection: "column",
              opacity: Math.max(1 - scrollY / transformRate, -1),
              transform: `scaleX(${1 - Math.min(scrollY / (transformRate + 30), 0.9)}) scaleY(${1 - Math.min(scrollY / transformRate, 0.9)})`,
              transition: "opacity 0.1s ease, transform 0.1s ease",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "flex-end",
              }}
            >
              {projects.map((project, index) => {
                const size = 200 + index * 30;
                return (
                  <Card
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      width: `calc(${size}px / 1.2)`,
                      height: `${size}px`,

                      background: "transparent",
                    }}
                  >
                    <CardActionArea href={`#${project}`}>
                      <CardMedia
                        component="img"
                        height="40%"
                        image={`/${project}.webp`}
                        alt={project}
                      />
                      <CardContent>
                        <Typography
                          variant="h6"
                          component="div"
                          display="flex"
                          justifyContent="center"
                          sx={{ color: "white" }}
                        >
                          {t(`${project}`)}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                );
              })}
            </Box>
          </Container>
        )}

        {/* Header  */}
        <Container
          sx={{
            position: "sticky",
            bottom: headerFromBottom,
            // minHeight: headerFromTop,
            // padding: "10% 20%",
            paddingBottom: "2vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            opacity: Math.min((scrollY - transformRate) / transformRate, 1),
            transform: `scale(${Math.min(scrollY / 400, 1)})`,
            transition: "opacity 0.1s ease, transform 0.1s ease",
          }}
        >
          {projects.map((project, index) => {
            return (
              <CardActionArea
                key={index}
                href={`#${project}`}
                sx={{
                  width: "fit-content",
                  borderRadius: "3px",
                }}
              >
                {/* Background layer */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // filter: "blur(3)", // Blurs the background
                    opacity: 0.3, // Makes it slightly faded
                    zIndex: 1, // Behind the child
                    backgroundImage: `url('/${project}.webp')`, // Replace with your image URL
                    backgroundRepeat: "no-repeat",
                  }}
                />

                {/* Content layer */}

                <CardContent
                  sx={{
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "white",
                      textAlign: "center",
                      padding: "0 2.7vh",
                    }}
                  >
                    {t(project)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            );
          })}
        </Container>
      </Paper>
    </>
  );
};

export default Home;
