import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { DiPostgresql } from "react-icons/di";
import { FaAws, FaDocker, FaReact, FaLinux } from "react-icons/fa";
import { SiPrecommit, SiGithubactions } from "react-icons/si";

const techIcons = {
  "Django and Postgres": DiPostgresql,
  AWS: FaAws,
  Docker: FaDocker,
  "Pre-commit": SiPrecommit,
  "GitHub Actions": SiGithubactions,
  React: FaReact,
  WSL: FaLinux,
};

const getContent = (data, selectedTech) =>
  data.find((obj) => obj.label === selectedTech)?.cards[0]?.content;

const Projects: React.FC = ({ data }) => {
  const [selectedTech, setSelectedTech] = useState<string>("AWS");
  const [selectedCardContent, setSelectedCardContent] = useState<any[]>([]);
  const theme = useTheme();

  useEffect(() => {
    if (data?.length > 0) {
      const content = getContent(data, selectedTech);
      setSelectedCardContent(content || []); // Default to empty array
    }
  }, [data, selectedTech]);

  const handleOpen = (tech: string) => setSelectedTech(tech);

  const SelectedIcon = techIcons[selectedTech];

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
            <Typography
              variant="h6"
              // sx={{ display: "flex", justifyContent: "center" }}
            >
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
