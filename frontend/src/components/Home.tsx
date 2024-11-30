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

interface Project {
  title: string;
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Psychology",
    imageUrl: "/Mountain.jpg",
    link: "#Psychology",
  },
  {
    title: "Self-taught",
    imageUrl: "/Mountain.jpg",
    link: "#Self-taught",
  },
  {
    title: "Infosys/BHP",
    imageUrl: "/Mountain.jpg",
    link: "#Work Experience",
  },
  {
    title: "Web Resume",
    imageUrl: "/Mountain.jpg",
    link: "#Web Resume",
  },
  {
    title: "Next Adventure",
    imageUrl: "/Mountain.jpg",
    link: "#Contact",
  },
];

const Home: React.FC = () => {
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

  const headerIsolation = "131vh";
  const headerFromBottom = "27vh";
  const headerFromTop = "6vh";
  const transformRate = 150;
  const cardsOpacity = Math.max(1 - scrollY / transformRate, -1);
  return (
    <>
      <Paper sx={{ position: "sticky", top: `-${headerIsolation}`, zIndex: 1 }}>
        <Box minHeight={`${headerIsolation}`}></Box>

        {/* Cards*/}
        {cardsOpacity > 0 && (
          <Container
            sx={{
              position: "fixed",
              bottom: "18vh",
              left: "10vw",
              right: "10vw",
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
                    height: `${size - 40}px`,
                    opacity: Math.max(1 - scrollY / transformRate, -1),
                    transform: `scaleX(${1 - Math.min(scrollY / (transformRate + 30), 0.9)}) scaleY(${1 - Math.min(scrollY / transformRate, 0.9)})`,
                    transition: "opacity 0.1s ease, transform 0.1s ease",
                  }}
                >
                  <CardActionArea href={project.link}>
                    <CardMedia
                      component="img"
                      height="40%"
                      image={project.imageUrl}
                      alt={project.title}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        component="div"
                        display="flex"
                        justifyContent="center"
                      >
                        {project.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })}
          </Container>
        )}

        {/* Header  */}
        <Container
          sx={{
            position: "sticky",
            bottom: headerFromBottom,
            minHeight: headerFromTop,
            padding: "2% 20%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "flex-end",
            opacity: Math.min((scrollY - transformRate) / transformRate, 1),
            transform: `scale(${Math.min(scrollY / 400, 1)})`,
            transition: "opacity 0.1s ease, transform 0.1s ease",
          }}
        >
          {projects.map((project) => {
            return (
              <CardActionArea
                href={project.link}
                sx={{ width: "fit-content", borderRadius: "3px" }}
              >
                <CardContent>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555",
                      textAlign: "center",
                    }}
                  >
                    {project.title}
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
