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

const technologyDescriptions = {
  AWS: [
    "Due to pricing I moved to a Linux VPS, but I successfully deployed to AWS by:",
    "1. Pushing images to ECR and configuring them into Task Definitions to utilise Fargate.",
    "2. Creating Services to run Tasks within ECS.",
    "3. Configuring an ALB with HTTP:80 and HTTPS:443 Listeners and Routing rules to connect to the appropriate Target Groups.",
    "4. Creating Security Group Inbound and Outbound rules, and modifying it's Roles and defined VPC endpoints to allow the tasks to access Parameter Store Secrets.",
    "5. Creating a separate admin account using IAM rather than defaulting to the root user account.",
    "6. Connecting to a Postgres database hosted in RDS.",
    "7. Using CloudWatch Logs for debugging Target Health Check failures.",
  ],
  Docker: [
    "In containerizing this application with docker I learnt:",
    "Dockerfile structures and multi-stage builds.",
    "How networks can be orchestrated between containers and the host, and the role of docker-compose, Kubernetes, and Docker Swarm in development and production",
    "Docker volumes, and it's interaction between containers and the host",
  ],
  WSL: [
    "Working with WSL has helped me understand:",
    "The differences between Windows and Linux.",
    "The Linux file structure and where things are run and stored.",
    "How package managers and dependencies are both a miracle and a nightmare.",
  ],
  "Django and Postgres": [
    "This resume uses a Django and Postgres backend to serve up its text content.",
    "This implementation is only for demonstration, but a lot of my experience with Django comes from my previous experience at BHP, where I completed a lot of development tickets concerning query optimisation in Django and Graphene.",
  ],
  React: [
    "In building the frontend I learnt a lot about:",
    "Implementing code designs like render propping.",
    "CSS styling techniques and interactions.",
    "UI design with technologies like MUI components.",
  ],
  "GitHub Actions": [
    "In creating a pipeline I became exposed to:",
    "Automating unit test runs within a docker setup.",
    "Yaml files and the different settings and configurations.",
    "The many servers, infrastructure and deployments options available for the different size and scalability of applications.",
  ],
  "Pre-commit": [
    "Building this into the workflow and using it to enforce linting and styling rules.",
  ],
};

const Projects: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>("AWS");
  const theme = useTheme();

  const handleOpen = (tech: string) => setSelectedTech(tech);

  return (
    <PageLayout
      heading="Web Resume Tech Stack"
      description="Explore the different technologies I have used in building this website."
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {Object.keys(technologyDescriptions).map((tech) => (
          <Button
            onClick={() => handleOpen(tech)}
            variant="outlined"
            sx={{
              color: theme.palette.secondary.main,
              border: `1px solid ${selectedTech === tech ? theme.palette.secondary.main : theme.palette.primary.main}`,
              "&:hover": {
                border: `1px solid ${theme.palette.secondary.main}`,
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            {tech}
          </Button>
        ))}
      </Box>

      {selectedTech && (
        <Card
          sx={{ marginTop: "2rem", maxWidth: 600, marginX: "auto", padding: 2 }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ marginBottom: 1 }}>
              {selectedTech}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              {technologyDescriptions[
                selectedTech as keyof typeof technologyDescriptions
              ].map((description: string, index: number) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{ marginBottom: 1, marginLeft: index === 0 ? 0 : 2 }}
                >
                  {description}
                </Typography>
              ))}
            </Typography>
          </CardContent>
        </Card>
      )}
    </PageLayout>
  );
};

export default Projects;
