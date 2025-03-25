import { Box, Button, Typography } from "@mui/material";
import { IconType } from "react-icons";
import { DiPostgresql, DiRedis } from "react-icons/di";
import { FaAws, FaDocker, FaReact, FaLinux, FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { GoWorkflow } from "react-icons/go";
import { SiDjango, SiPrecommit, SiGithubactions } from "react-icons/si";
import { Link } from "react-router-dom";

import theme from "../theme";

interface TechIcon {
  [key: string]: {
    heading: string;
    icon: IconType;
    tabNumber: number;
  };
}

export const techIcons: TechIcon = {
  React: { heading: "React", icon: FaReact, tabNumber: 0 },
  Django: { heading: "Django", icon: SiDjango, tabNumber: 0 },
  Postgres: { heading: "Django", icon: DiPostgresql, tabNumber: 0 },
  Redis: { heading: "Redis", icon: DiRedis, tabNumber: 0 },
  Agile: { heading: "Agile Methodology", icon: GoWorkflow, tabNumber: 1 },
  Git: { heading: "Git", icon: FaGithub, tabNumber: 1 },
  "Pre-Commit": { heading: "Pre-Commit", icon: SiPrecommit, tabNumber: 1 },
  GitLab: { heading: "GitLab", icon: FaGitlab, tabNumber: 2 },
  "Github Actions": {
    heading: "Github Actions",
    icon: SiGithubactions,
    tabNumber: 2,
  },
  AWS: { heading: "AWS", icon: FaAws, tabNumber: 3 },
  Docker: { heading: "Docker", icon: FaDocker, tabNumber: 3 },
  WSL: { heading: "WSL", icon: FaLinux, tabNumber: 3 },
};

const TechnicalSkillButtons = () => {
  return (
    <>
      <Typography variant="h4" color="secondary">
        Technical Skills
      </Typography>
      <Box
        sx={{
          maxWidth: "60vw",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 3,
          marginBottom: "5%",
        }}
      >
        {Object.keys(techIcons).map((label) => {
          const TechIcon = techIcons[label].icon;
          return (
            <Link
              key={label}
              to={`/technical?tab=${techIcons[label].tabNumber}#${techIcons[label].heading}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                key={label}
                variant="outlined"
                sx={{
                  display: "flex",
                  gap: 2,
                  color: theme.palette.secondary.main,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  "&:hover": {
                    border: `1px solid ${theme.palette.secondary.main}`,
                  },
                }}
              >
                {label}
                <TechIcon />
              </Button>
            </Link>
          );
        })}
      </Box>
    </>
  );
};

export default TechnicalSkillButtons;
