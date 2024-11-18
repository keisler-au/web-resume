import {
  Box,
  Link,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
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
    link: "#psychology",
  },
  {
    title: "Self-taught",
    imageUrl: "/Mountain.jpg",
    link: "#selfTaught",
  },
  {
    title: "Infosys/BHP",
    imageUrl: "/Mountain.jpg",
    link: "#infosysBHP",
  },
  {
    title: "Web Resume",
    imageUrl: "/Mountain.jpg",
    link: "#webResume",
  },
  {
    title: "Next Adventure",
    imageUrl: "/Mountain.jpg",
    link: "#contact",
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
  const headerIsolation = "131vh";
  const headerFromBottom = "27vh";
  const headerFromTop = "6vh";
  const transformRate = 150;
  return (
    <>
      <Box position="sticky" top={`-${headerIsolation}`} zIndex={1}>
        <Box minHeight={`${headerIsolation}`}></Box>

        {/* Cards*/}
        <Box
          position="fixed"
          bottom="18vh"
          left="10vw"
          right="10vw"
          display="flex"
          justifyContent="space-evenly"
          alignItems="flex-end"
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
        </Box>

        {/* Header  */}
        <Box
          position="sticky"
          bottom={headerFromBottom}
          minHeight={headerFromTop}
          padding="2% 20%"
          display="flex"
          justifyContent="space-evenly"
          alignItems="flex-end"
          sx={{
            background: "white",
            opacity: Math.min((scrollY - transformRate) / transformRate, 1),
            transform: `scale(${Math.min(scrollY / 400, 1)})`,
            transition: "opacity 0.1s ease, transform 0.1s ease",
          }}
        >
          {projects.map((project) => {
            return (
              <Link key={project.link} href={project.link} color="inherit">
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  {project.title}
                </Typography>
              </Link>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Home;
