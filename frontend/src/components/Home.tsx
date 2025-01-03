import { Typography, Box, Button, useTheme } from "@mui/material";
import React, { useState } from "react";
import { IconType } from "react-icons";
import { DiPostgresql } from "react-icons/di";
import { FaAws, FaDocker, FaReact, FaLinux } from "react-icons/fa";
import { SiPrecommit, SiGithubactions } from "react-icons/si";
import { Link } from "react-router-dom";

import theme from "../theme";
import Footer from "./Footer";

export const NavButton: React.FC<{
  to: string;
  label: string;
}> = ({ to, label }) => {
  return (
    <Link
      to={to}
      style={{
        textDecoration: "none",
      }}
    >
      <Button
        color="primary"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          fontSize: { xs: "1rem", sm: "1.2rem" }, // Adjusted for mobile and laptop
        }}
      >
        {label}
        <div
          style={{
            backgroundColor: theme.palette.primary.main,
            width: "8rem",
            height: 1,
          }}
        ></div>
      </Button>
    </Link>
  );
};

const Home: React.FC = (data) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePhotoClick = () => {
    setIsExpanded((prev) => !prev);
  };
  const techIcons: {
    [key: string]: {
      heading: string;
      icon: IconType | null;
      tabNumber: number;
    };
  } = {
    Django: { heading: "Django:", icon: null, tabNumber: 0 },
    Git: { heading: "Git:", icon: null, tabNumber: 1 },
    Docker: { heading: "Docker:", icon: FaDocker, tabNumber: 2 },
    AWS: { heading: "AWS:", icon: FaAws, tabNumber: 3 },
    Postgres: { heading: "Django:", icon: DiPostgresql, tabNumber: 0 },
    Redis: { heading: "Redis:", icon: null, tabNumber: 3 },
    TypeScript: { heading: "React:", icon: null, tabNumber: 0 },
    "CI/CD": {
      heading: "CI/CD:",
      icon: SiGithubactions,
      tabNumber: 2,
    },
    "Pre-commit": { heading: "Pre-Commit:", icon: SiPrecommit, tabNumber: 1 },

    React: { heading: "React:", icon: FaReact, tabNumber: 0 },
    WSL: { heading: "Dependency Management:", icon: FaLinux, tabNumber: 2 },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: { xs: 20, sm: 10 },
          maxWidth: "60vw",
          margin: "4rem auto",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "space-between",
        }}
      >
        <Box width="100%" display="flex" justifyContent="center">
          <Box
            component="img"
            src="/cv_photo.jpg"
            alt="Profile Photo"
            onClick={handlePhotoClick}
            sx={{
              position: "absolute",
              // top: "55vh",
              // left: "20vw",
              width: isExpanded
                ? { xs: "12rem", sm: "15rem", md: "18rem" }
                : { xs: "8rem", sm: "10rem" },
              height: isExpanded
                ? { xs: "12rem", sm: "15rem", md: "18rem" }
                : { xs: "8rem", sm: "10rem" },
              borderRadius: "50%",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              boxShadow: isExpanded
                ? `0 0 15px ${theme.palette.primary.main}`
                : "none",
              zIndex: 2,
            }}
          />
        </Box>
        <Typography
          color="secondary"
          sx={{ maxWidth: "45vw", textAlign: { xs: "center", sm: "justify" } }}
        >
          {data.data[0].cards[0].content[0].description}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          maxWidth: "60vw",
          flexWrap: "wrap", // Allow buttons to wrap on smaller screens
          marginBottom: { xs: 2, sm: 3 }, // Adjust margin on smaller screens
        }}
      >
        {Object.keys(techIcons).map((label) => (
          <Link
            key={label}
            to={`/technical?tab=${techIcons[label].tabNumber}#${techIcons[label].heading}`}
            style={{ textDecoration: "none" }}
          >
            <Button
              key={label}
              // onClick={() => handleOpen(label)}
              variant="outlined"
              sx={{
                color: theme.palette.secondary.main,
                "&:hover": {
                  border: `1px solid ${theme.palette.secondary.main}`,
                  // backgroundColor: theme.palette.primary.dark,
                },
                fontSize: { xs: "0.9rem", sm: "1rem" }, // Adjust font size for mobile
                padding: { xs: "0.6rem 1.2rem", sm: "0.8rem 1.5rem" }, // Adjust padding for mobile
              }}
            >
              {label}
            </Button>
          </Link>
        ))}
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        minHeight: { xs: "67vh", sm: "60vh" }, // Ensure full height of the screen
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly", // Distribute space between content
        paddingTop: "6vh",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "6vh",
          fontSize: { xs: "1.2rem", sm: "1.5rem" }, // Adjust font size for mobile
        }}
      >
        Functional, Scaleable, Maintainable, Automating, Accessible,
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: { xs: "1rem", sm: "2rem" }, // Adjust gap for mobile
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <NavButton to="/about" label="About Me" />
        <NavButton to="/experience" label="Experience" />
        <NavButton to="/projects" label="Projects" />
      </Box>
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/contact">
          <Button
            color="primary"
            sx={{
              "&:hover": {
                backgroundColor: theme.palette.text.primary,
              },
              fontSize: { xs: "1rem", sm: "1.2rem" }, // Adjust font size for mobile
              border: 1,
              borderColor: theme.palette.primary.main,
            }}
          >
            Contact Me
          </Button>
        </Link>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
