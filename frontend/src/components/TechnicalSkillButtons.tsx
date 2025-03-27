import { Box, Button, Typography } from "@mui/material";
import { IconType } from "react-icons";
import { DiPostgresql, DiRedis } from "react-icons/di";
import {
  FaAngular,
  FaAws,
  FaDocker,
  FaReact,
  FaLinux,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { GoWorkflow } from "react-icons/go";
import { GrMysql } from "react-icons/gr";
import { SiDjango, SiPrecommit, SiGithubactions } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { Link } from "react-router-dom";

import theme from "../theme";

export const techIcons: {
  [key: string]: IconType;
} = {
  React: FaReact,
  Django: SiDjango,
  "Express.js": FaNodeJs,
  Postgres: DiPostgresql,
  Mysql: GrMysql,
  Redis: DiRedis,
  "React Native": TbBrandReactNative,
  Angular: FaAngular,
  Agile: GoWorkflow,
  Git: FaGithub,
  "Pre-Commit": SiPrecommit,
  GitLab: FaGitlab,
  "Github Actions": SiGithubactions,
  AWS: FaAws,
  Docker: FaDocker,
  WSL: FaLinux,
};

const TechnicalSkillButtons = () => {
  return (
    <>
      <Typography variant="h4" color="secondary">
        Technical Skills
      </Typography>
      <Box
        sx={{
          maxWidth: "50vw",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 3,
          marginBottom: "5%",
        }}
      >
        {Object.keys(techIcons).map((label) => {
          const TechIcon = techIcons[label];
          return (
            <Link
              key={label}
              to={`/technical#${label.replace(/[\s.]/g, "-")}`}
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
