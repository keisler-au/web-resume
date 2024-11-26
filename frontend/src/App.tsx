import { Container } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import { useTranslation } from "react-i18next";

import Contact from "./components/Contact";
import Home from "./components/Home";
import Psychology from "./components/Psychology";
import SelfTaught from "./components/SelfTaught";
import WebResume from "./components/WebResume";
import WorkExperience from "./components/WorkExperience";

export const ErrorFallback = ({ error }: any) => {
  const { t } = useTranslation();
  return (
    <Container>
      <h2>{t("error")}</h2>
      <pre>{error.message}</pre>
    </Container>
  );
};

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Home />
      <Psychology />
      <SelfTaught
        src={process.env.REACT_APP_WEATHER_APP_URL as string}
        title={"First Project"}
      />
      <WorkExperience />
      <WebResume />
      <Contact />
    </ErrorBoundary>
  );
}

export default App;
