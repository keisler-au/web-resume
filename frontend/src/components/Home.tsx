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
  description: string;
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Psychology",
    description: "Redesigning the Parks Canada camping reservation system",
    imageUrl: "/Mountain.jpg",
    link: "#",
  },
  {
    title: "Self-taught",
    description: "Designing an Airtable dashboard for a non-profit",
    imageUrl: "/Mountain.jpg",
    link: "#",
  },
  {
    title: "Infosys/BHP",
    description:
      "A lightmeter app to help beginner photographers take photos with confidence",
    imageUrl: "/Mountain.jpg",
    link: "#",
  },
  {
    title: "Web Resume",
    description:
      "A lightmeter app to help beginner photographers take photos with confidence",
    imageUrl: "/Mountain.jpg",
    link: "#",
  },
  {
    title: "Next Adventure",
    description:
      "A lightmeter app to help beginner photographers take photos with confidence",
    imageUrl: "/Mountain.jpg",
    link: "#",
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
      <Box
        sx={{
          position: "sticky",
          top: `-${headerIsolation}`,
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            minHeight: `${headerIsolation}`,
          }}
        ></Box>

        {/* Cards*/}
        <Box
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
                  width: `calc(${size}px / 1.2)`,
                  height: `${size - 40}px`,
                  display: "flex",
                  alignItems: "flex-end",
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
                      sx={{ display: "flex", justifyContent: "center" }}
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
          sx={{
            position: "sticky",
            bottom: headerFromBottom,
            minHeight: headerFromTop,
            padding: "2% 20%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "flex-end",
            zIndex: 1,
            background: "white",
            opacity: Math.min((scrollY - transformRate) / transformRate, 1),
            transform: `scale(${Math.min(scrollY / 400, 1)})`,
            transition: "opacity 0.1s ease, transform 0.1s ease",
          }}
        >
          {projects.map((project) => {
            return (
              <Link href={project.link} color="inherit">
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
