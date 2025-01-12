import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Contact from "./components/Contact";
import Content from "./components/Content";
import Home from "./components/Home";
import PageLayout from "./components/PageLayout";
import TabbedCards from "./components/TabbedCards";
import theme from "./theme";

export const ErrorFallback = () => (
  <div style={{ width: "100vw", height: "100vh", backgroundColor: "#1D3557" }}>
    <div
      style={{
        paddingTop: "20vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#E8E8E8",
      }}
    >
      <h2 style={{ fontWeight: "bold" }}>Something's gone wrong...</h2>
      <div>
        Please reach out to joshkeisler.au@gmail.com and try again later, thank
        you!
      </div>
    </div>
  </div>
);

export interface HeadingData {
  main_heading: string;
  sub_heading?: string;
  description: string;
}
export interface BodyData {
  label: string;
  cards: {
    title: string;
    content: {
      description: string;
    }[];
  }[];
}
interface PageData {
  heading: HeadingData[];
  body?: BodyData[];
}

interface PageConfig {
  path: string;
  page: React.FC<any>;
}
const pageConfigs: PageConfig[] = [
  {
    path: "/",
    page: Home,
  },
  { path: "experience", page: TabbedCards },
  { path: "technical", page: TabbedCards },
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
              path={pageConfig.path}
              element={
                <Content
                  render={(pageData: PageData) => {
                    const PageComponent = pageConfig.page;
                    return (
                      <PageLayout data={pageData.heading[0]}>
                        <PageComponent data={pageData.body} />
                      </PageLayout>
                    );
                  }}
                  pageReference={
                    pageConfig.path === "/" ? "home" : pageConfig.path
                  }
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
