import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface EmbedStaticSiteProps {
  src: string;
  title?: string;
}

const WeatherApp: React.FC<EmbedStaticSiteProps> = ({ src, title }) => {
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
    <Box
      id="selfTaught"
      position="relative"
      width="100%"
      height="80vh"
      borderRadius={2}
      overflow="hidden"
    >
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
        width="100%"
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
