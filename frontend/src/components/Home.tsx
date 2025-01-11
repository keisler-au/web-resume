import { Typography, Box, Button, useTheme } from "@mui/material";
import React, { useState } from "react";
import { IconType } from "react-icons";
import { DiPostgresql } from "react-icons/di";
import { FaAws, FaDocker, FaReact, FaLinux } from "react-icons/fa";
import { SiPrecommit, SiGithubactions } from "react-icons/si";
import { Link } from "react-router-dom";

import { BodyData } from "../App";
import theme from "../theme";

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
          fontSize: { xs: "1rem", sm: "1.2rem" },
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

const Home: React.FC<{ data: BodyData[] }> = ({ data }) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePhotoClick = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        paddingTop: "5vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: { xs: 20, sm: 10 },
          maxWidth: "60vw",
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
          {data[0]?.cards[0]?.content[0]?.description}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          maxWidth: "60vw",
          flexWrap: "wrap",
          marginBottom: { xs: 2, sm: 3 },
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
              variant="outlined"
              sx={{
                color: theme.palette.secondary.main,
                "&:hover": {
                  border: `1px solid ${theme.palette.secondary.main}`,
                },
                fontSize: { xs: "0.9rem", sm: "1rem" },
                padding: { xs: "0.6rem 1.2rem", sm: "0.8rem 1.5rem" },
              }}
            >
              {label}
            </Button>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
