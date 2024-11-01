import {
  List,
  ListItem,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { BASE_URL } from "../constants";

interface Description {
  id: number;
  content: string;
  pageReference: number;
}

const DescriptionList: React.FC<Record<string, number>> = ({
  pageReference,
}) => {
  const { t } = useTranslation();
  const [descriptions, setDescriptions] = useState<Description[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/descriptions/${pageReference}/`,
        );
        if (!response.ok) {
          throw new Error(t("failedFetch"));
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
  }, [t, pageReference]);

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
    <List>
      {descriptions.map((description) => (
        <ListItem key={description.id}>
          <Typography>{description.content}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default DescriptionList;
