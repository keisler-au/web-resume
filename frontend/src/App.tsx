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
        backgroundColor: "#1D3557",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          color: "#E8E8E8",
          marginTop: "5rem",
          fontWeight: "bold",
          height: "6rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        Something's gone wrong...
      </h2>
      <div
        style={{
          color: "#E8E8E8",
          height: "4rem",
          display: "flex",
          alignItems: "center",
        }}
      >
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
                    console.log(pageConfig.path, pageData.body);
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
