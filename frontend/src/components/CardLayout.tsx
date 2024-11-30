import { Paper, CardContent, Typography } from "@mui/material";
import React from "react";

import Descriptions from "./Descriptions";

export const TextLayout: React.FC<any> = ({ section, styles = {} }) => {
  const contentItems = section.content.split("\n");
  return (
    <CardContent sx={{ ...styles, paddingTop: 0 }}>
      <Typography
        variant="h5"
        sx={{
          color: "#333",
          fontWeight: "bold",
          fontSize: "1.1rem",
        }}
      >
        {section.header}
      </Typography>
      {contentItems.map((item: string) => (
        <Typography
          variant="body1"
          sx={{
            color: "#555",
            fontSize: "1rem",
          }}
        >
          {item}
        </Typography>
      ))}
    </CardContent>
  );
};

interface CardLayoutProps {
  dMultiplier: number;
  renderFunction: Function;
  pageReference: string;
}

export const CardLayout: React.FC<CardLayoutProps> = ({
  dMultiplier,
  renderFunction,
  pageReference,
}) => (
  <Paper
    id={pageReference}
    sx={{
      width: "100%",
      height: `calc(80vh * ${dMultiplier})`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#F5B700",
      borderRadius: "0",
      boxShadow: "none",
      scrollMarginTop: 80,
    }}
  >
    {/* Outer White Border */}
    <Paper
      sx={{
        backgroundColor: "#FFFFFF",
        padding: "2px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Inner Card */}
      <Paper
        sx={{
          height: `calc(52vh * ${dMultiplier})`,
          width: `calc(60vw * ${dMultiplier})`,
          backgroundColor: "#F5B700",
          boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          padding: "3%",
        }}
      >
        <Descriptions render={renderFunction} pageReference={pageReference} />
      </Paper>
    </Paper>
  </Paper>
);
