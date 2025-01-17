import { Box, Button } from "@mui/material";
import React from "react";
import { IconType } from "react-icons";
import { DiPostgresql } from "react-icons/di";
import { FaAws, FaDocker, FaReact, FaLinux } from "react-icons/fa";
import { SiPrecommit, SiGithubactions } from "react-icons/si";
import { Link } from "react-router-dom";

import { PageData } from "../App";
import Header from "./Header";
import theme from "../theme";
import DetailedParagraphs from "./DetailedParagraphs";

interface TechIcon {
  [key: string]: {
    heading: string;
    icon: IconType | null;
    tabNumber: number;
  };
}

const techIcons: TechIcon = {
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

const Home: React.FC<{ data: PageData }> = ({ data }) => (
  <>
    <Header data={data.heading[0]} />
    <Box
      sx={{
        paddingTop: "5vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
      }}
    >
      <DetailedParagraphs
        photoPaths={["/cv_photo.jpg"]}
        cards={data.body[0].cards}
      />
      <Box
        sx={{
          maxWidth: "60vw",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 3,
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
                fontSize: { xs: "0.9rem", sm: "1rem" },
                "&:hover": {
                  border: `1px solid ${theme.palette.secondary.main}`,
                },
              }}
            >
              {label}
            </Button>
          </Link>
        ))}
      </Box>
    </Box>
  </>
);

export default Home;
