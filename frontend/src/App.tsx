import { Container } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import { useTranslation } from "react-i18next";

import Contact from "./components/Contact";
import Home from "./components/Home";
import Infosys from "./components/Infosys";
import WeatherApp from "./components/WeatherApp";

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
      {/* <WeatherApp
        src={process.env.REACT_APP_WEATHER_APP_URL as string}
        title={"First Project"}
      /> */}
      <Infosys />
      <Contact />
    </ErrorBoundary>
  );
}

export default App;
