import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

import { BASE_URL } from "../constants";
import data from "../fixtureData.json";

type ContentProps = {
  render: Function;
  pageReference: string;
};

const Content: React.FC<ContentProps> = ({ render, pageReference }) => {
  const [content, setContent] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/content/${pageReference}/`);
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        const data = await response.json();
        setContent(data);
      } finally {
        setLoading(false);
      }
    };

    // This fetching data implementation is for demonstrative purposes, and works. However practically speaking it makes more sense to being using json for this static data.
    // fetchData();
    setContent((data as any)[pageReference][0]);
    setLoading(false);
  }, [pageReference]);

  if (loading) {
    return <CircularProgress data-testid="loading-spinner" />;
  }

  return render(content);
};

export default Content;
