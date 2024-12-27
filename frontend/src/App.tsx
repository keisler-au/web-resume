import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useTranslation } from "react-i18next";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Contact from "./components/Contact";
import Content from "./components/Content";
import Home from "./components/Home";
import PageLayout from "./components/PageLayout";
import Projects from "./components/Projects";
import TabbedCards from "./components/TabbedCards";
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

// data returned from view will likely be a list -> data: {...}[]
export interface Data {
  data: {
    heading: string;
    subHeading?: string;
    descriptions: string;
    body?: {
      label: string;
      cards: {
        title: string;
        content: string[];
      }[];
    }[];
  };
}
interface PageConfig {
  path: string;
  page: React.FC<any>;
  props?: any;
}
const pageConfigs: PageConfig[] = [
  {
    path: "home",
    page: Home,
  },
  {
    path: "about",
    page: TabbedCards,
    props: { defaultTab: 0 },
  },
  { path: "experience", page: TabbedCards, props: { defaultTab: 2 } },
  { path: "projects", page: Projects },
  { path: "contact", page: Contact },
];

const App = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {pageConfigs.map((pageConfig) => (
            <Route
              key={pageConfig.path}
              path={pageConfig.path === "home" ? "/" : pageConfig.path}
              element={
                <Content
                  render={(page) => {
                    const PageComponent = pageConfig.page;
                    const props = page[0].body
                      ? { data: page[0].body, ...pageConfig.props }
                      : {};
                    return (
                      <PageLayout data={page[0].heading[0]}>
                        <PageComponent {...props} />
                      </PageLayout>
                    );
                  }}
                  pageReference={pageConfig.path}
                />
              }
            />
          ))}
        </Routes>
      </Router>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
