import { CircularProgress, Alert } from "@mui/material";
import React, { useEffect, useState } from "react";

import { BASE_URL } from "../constants";

type ContentProps = {
  render: Function;
  pageReference: string;
};

const Content: React.FC<ContentProps> = ({ render, pageReference }) => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/content/${pageReference}/`);
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
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

  return render(content);
};

export default Content;
