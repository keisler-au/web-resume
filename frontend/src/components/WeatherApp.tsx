import { Box, CircularProgress, Typography, Button } from "@mui/material";
import { useState } from "react";

interface EmbedStaticSiteProps {
  src: string;
  title?: string;
}

const WeatherApp: React.FC<EmbedStaticSiteProps> = ({ src, title }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  const retry = () => {
    setLoading(true);
    setError(false);
  };

  return (
    <Box
      position="relative"
      width="100%"
      height="80vh"
      borderRadius={2}
      overflow="hidden"
    >
      {loading && !error && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <CircularProgress />
          <Typography variant="body2" sx={{ marginLeft: 1 }}>
            Loading content...
          </Typography>
        </Box>
      )}

      {!loading && error && (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <Typography variant="body1" color="error">
            Failed to load content.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={retry}
            sx={{ mt: 2 }}
          >
            Retry
          </Button>
        </Box>
      )}

      <iframe
        title={title || "Embedded Content"}
        src={src}
        width="100%"
        height="100%"
        style={{
          border: "none",
          display: loading || error ? "none" : "block",
        }}
        onLoad={handleLoad}
        onError={handleError}
      />
    </Box>
  );
};

export default WeatherApp;
