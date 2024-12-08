import { Box, Container } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import { useTranslation } from "react-i18next";

import { CardLayout } from "./components/CardLayout";
import Contact from "./components/Contact";
import { Description } from "./components/Descriptions";
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
  const projects = [
    "psychology",
    "selfTaught",
    "workExperience",
    "webResume",
    "contact",
  ];
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Home projects={projects} />
      {/* <Box sx={{ paddingTop: "5vh", backgroundColor: "rgb(245, 183, 0)" }}> */}
      <Box
        sx={{
          background:
            "linear-gradient(to bottom, rgb(240, 240, 240), rgb(30, 30, 30))",
        }}
      >
        <CardLayout
          dMultiplier={1.1}
          pageReference={projects[0]}
          renderFunction={(d: Description[]) => <Psychology description={d} />}
        />
        {/* </Box> */}
        <CardLayout
          dMultiplier={1.2}
          pageReference={projects[1]}
          renderFunction={(d: Description[]) => (
            <SelfTaught
              description={d}
              src={process.env.REACT_APP_WEATHER_APP_URL as string}
              title={"First Project"}
            />
          )}
        />
        <CardLayout
          dMultiplier={1.3}
          pageReference={projects[2]}
          renderFunction={(d: Description[]) => (
            <WorkExperience description={d} />
          )}
        />
        <CardLayout
          dMultiplier={1.4}
          pageReference={projects[3]}
          renderFunction={(d: Description[]) => <WebResume description={d} />}
        />
        <CardLayout
          dMultiplier={1.5}
          pageReference={projects[4]}
          renderFunction={(d: Description[]) => <Contact description={d} />}
        />
      </Box>
    </ErrorBoundary>
  );
}

export default App;
