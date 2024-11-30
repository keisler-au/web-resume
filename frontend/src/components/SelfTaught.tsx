import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { CardLayout, TextLayout } from "./CardLayout";
import { Description } from "./Descriptions";

interface EmbedStaticSiteProps {
  description: Description[];
  src: string;
  title?: string;
}

const WeatherApp: React.FC<EmbedStaticSiteProps> = ({
  description,
  src,
  title,
}) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [failedLoad, setFailedLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        setLoading(false);
        setFailedLoad(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <Box display="flex">
      <Box display="flex" flexDirection="column">
        {description[0].sections.map((section, index) => (
          <TextLayout key={index} section={section} />
        ))}
      </Box>
      {(loading || failedLoad) && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          {loading ? (
            <>
              <CircularProgress />
              <Typography variant="body2" sx={{ marginLeft: 1 }}>
                {`${t("loadingContent")}...`}
              </Typography>
            </>
          ) : (
            <Typography variant="body1" sx={{ color: "error" }}>
              {`${t("failedLoad")}...`}
            </Typography>
          )}
        </Box>
      )}

      <iframe
        title={title || "embeddedWeatherApp"}
        src={src}
        width="40%"
        height="100%"
        style={{
          border: "none",
          display: loading || failedLoad ? "none" : "block",
        }}
        onLoad={() => setLoading(false)}
      />
    </Box>
  );
};

export default WeatherApp;
