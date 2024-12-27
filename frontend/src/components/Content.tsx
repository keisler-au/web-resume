import { CircularProgress, Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { BASE_URL } from "../constants";

type ContentProps = {
  render: Function;
  pageReference: string;
};

const Content: React.FC<ContentProps> = ({ render, pageReference }) => {
  const { t } = useTranslation();
  // TODO: Add typing to content
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/content/${pageReference}/`);
        if (!response.ok) {
          throw new Error(t("failedFetch"));
        }
        const data = await response.json();
        setContent(data);
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

  return render(content);
};

export default Content;
