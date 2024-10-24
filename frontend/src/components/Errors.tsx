import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export function ErrorFallback({ error }: any) {
  const { t } = useTranslation();
  return (
    <Container>
      <h2>{t("error")}</h2>
      <pre>{error.message}</pre>
    </Container>
  );
}

export const NotFound = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Typography variant="h2" component="h2" gutterBottom>
        {t("notFound")}
      </Typography>
      <Typography variant="body1">{t("doesNotExist")}</Typography>
    </Container>
  );
};
