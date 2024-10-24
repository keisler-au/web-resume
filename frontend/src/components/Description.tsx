import {
  List,
  ListItem,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { BASE_URL } from "../constants";

interface Description {
  id: number;
  content: string;
  pageReference: number;
}

const DescriptionList: React.FC<{ [key: string]: number }> = ({
  pageReference,
}) => {
  const [descriptions, setDescriptions] = useState<Description[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/descriptions/${pageReference}/`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setDescriptions(data);
        setError(null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageReference]);

  if (loading) {
    return <CircularProgress data-testid="loading-spinner" />;
  }

  if (error) {
    return (
      <Alert severity="error" data-testid="error-message">
        {error}
      </Alert>
    );
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Descriptions
      </Typography>
      <List>
        {descriptions.map((description) => (
          <ListItem key={description.id}>
            <Typography>{description.content}</Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DescriptionList;
