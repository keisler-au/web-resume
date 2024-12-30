import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { IconType } from "react-icons";
import { DiPostgresql } from "react-icons/di";
import { FaAws, FaDocker, FaReact, FaLinux } from "react-icons/fa";
import { SiPrecommit, SiGithubactions } from "react-icons/si";

import { BodyData } from "../App";

const techIcons: { [key: string]: IconType } = {
  "Django and Postgres": DiPostgresql,
  AWS: FaAws,
  Docker: FaDocker,
  "Pre-commit": SiPrecommit,
  "GitHub Actions": SiGithubactions,
  React: FaReact,
  WSL: FaLinux,
};

const getContent = (
  data: BodyData[],
  selectedTech: string,
): { description: string }[] =>
  data.find((obj) => obj.label === selectedTech)?.cards[0]?.content || [];

const Projects: React.FC<{ data: BodyData[] }> = ({ data }) => {
  const [selectedTech, setSelectedTech] = useState<string>("AWS");
  const [selectedCardContent, setSelectedCardContent] = useState<any[]>([]);
  const theme = useTheme();

  useEffect(() => {
    if (data?.length > 0) {
      const content = getContent(data, selectedTech);
      setSelectedCardContent(content);
    }
  }, [data, selectedTech]);

  const handleOpen = (tech: string) => setSelectedTech(tech);

  const SelectedIcon = techIcons[selectedTech];
  console.log(data);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {data.map(({ label }) => (
          <Button
            key={label}
            onClick={() => handleOpen(label)}
            variant="outlined"
            sx={{
              color: theme.palette.secondary.main,
              border: `1px solid ${
                selectedTech === label
                  ? theme.palette.secondary.main
                  : theme.palette.primary.main
              }`,
              "&:hover": {
                border: `1px solid ${theme.palette.secondary.main}`,
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            {label}
          </Button>
        ))}
      </Box>

      {selectedCardContent.length > 0 && (
        <Card
          sx={{ marginTop: "2rem", maxWidth: 600, marginX: "auto", padding: 2 }}
        >
          <CardContent>
            <Typography variant="h6">
              <SelectedIcon
                style={{
                  marginBottom: "1rem",
                  minHeight: "1.5rem",
                  minWidth: "1.5rem",
                }}
              />
            </Typography>
            {selectedCardContent.map((content, index: number) => (
              <Typography
                key={index}
                variant="body1"
                sx={{ marginBottom: 1, marginLeft: index === 0 ? 0 : 2 }}
              >
                {content.description}
              </Typography>
            ))}
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Projects;
