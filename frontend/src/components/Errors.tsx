import { Container, Typography } from "@mui/material";

export function ErrorFallback({ error }: any) {
  return (
    <Container>
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
    </Container>
  );
}

export const NotFound = () => {
  return (
    <Container>
      <Typography variant="h2" component="h2" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1">
        The page you're looking for does not exist.
      </Typography>
    </Container>
  );
};
