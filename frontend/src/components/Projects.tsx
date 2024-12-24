import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import React, { useState, useEffect } from "react";

import PageLayout from "./PageLayout";

// Technology descriptions
const technologyDescriptions = {
  AWS: "AWS was used to deploy the application on the cloud, utilizing services like EC2 and S3 for scalable infrastructure.",
  Docker:
    "Docker was used to containerize the application, making it portable and easy to deploy across environments.",
  Linux:
    "The project was hosted on a Linux VPS for better control and performance in a production environment.",
  Django:
    "Django was used as the backend framework to build a REST API and manage the database interactions.",
  React:
    "React was used for building the frontend user interface, providing a dynamic and responsive web experience.",
  Postgres:
    "PostgreSQL was used as the relational database to store data, providing strong data integrity and scalability.",
};

// Reusable TechButton component
const TechButton: React.FC<{
  tech: string;
  handleOpen: (tech: string) => void;
  selectedTech: string | null;
  variant?: "outlined" | "contained";
}> = ({ tech, handleOpen, selectedTech, variant = "outlined" }) => {
  const theme = useTheme();
  const isSelected = selectedTech === tech;

  return (
    <Button
      onClick={() => handleOpen(tech)}
      variant={variant}
      sx={{
        color: theme.palette.secondary.main,
        border: `1px solid ${isSelected ? theme.palette.secondary.main : theme.palette.primary.main}`,
        "&:hover": {
          border: `1px solid ${theme.palette.secondary.main}`,
          backgroundColor: theme.palette.primary.dark,
        },
      }}
    >
      {tech}
    </Button>
  );
};

// Reusable TechCard component
const TechCard: React.FC<{
  tech: string;
  description: string;
}> = ({ tech, description }) => (
  <Card sx={{ marginTop: "2rem", maxWidth: 600, marginX: "auto", padding: 2 }}>
    <CardContent>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        {tech}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const Projects: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>("AWS");

  const handleOpen = (tech: string) => setSelectedTech(tech);

  return (
    <PageLayout
      heading="Technology Stack"
      description="Explore the different technologies I have used in my projects."
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {/* Render each tech button */}
        {Object.keys(technologyDescriptions).map((tech) => (
          <TechButton
            key={tech}
            tech={tech}
            handleOpen={handleOpen}
            selectedTech={selectedTech}
          />
        ))}
      </Box>

      {/* Render the selected technology card */}
      {selectedTech && (
        <TechCard
          tech={selectedTech}
          description={
            technologyDescriptions[
              selectedTech as keyof typeof technologyDescriptions
            ]
          }
        />
      )}
    </PageLayout>
  );
};

export default Projects;
