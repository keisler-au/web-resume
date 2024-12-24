import { Box, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ErrorBoundary } from "react-error-boundary";
import { useTranslation } from "react-i18next";
import { useLocation, Routes, Route } from "react-router-dom";

import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import theme from "./theme";

export const ErrorFallback = ({ error }: any) => {
  const { t } = useTranslation();
  return (
    <Container>
      <h2>{t("error")}</h2>
      <pre>{error.message}</pre>
    </Container>
  );
};

const App = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/experience" element={<WorkExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/contact"
          element={
            <Contact
              description={[{ sections: [{ header: "", content: "" }] }]}
            />
          }
        />
      </Routes>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
