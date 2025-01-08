import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Contact from "./components/Contact";
import Content from "./components/Content";
import Home from "./components/Home";
import PageLayout from "./components/PageLayout";
import Projects from "./components/Projects";
import TabbedCards from "./components/TabbedCards";
import data from "./fixtureData.json";
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
    path: "home",
    page: Home,
  },
  { path: "experience", page: TabbedCards },
  { path: "projects", page: TabbedCards },
  { path: "contact", page: Contact },
];

const App = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {pageConfigs.map((pageConfig) => {
            const PageComponent = pageConfig.page;
            const pageData = data[pageConfig.path][0];

            return (
              <Route
                key={pageConfig.path}
                path={pageConfig.path === "home" ? "/" : pageConfig.path}
                // element={
                //   <Content
                //     render={(pageData: PageData[]) => {
                //       const PageComponent = pageConfig.page;
                //       return (
                //         <PageLayout
                //           data={pageData[0].heading[0]}
                //           pageType={pageConfig.path}
                //         >
                //           <PageComponent data={pageData[0].body} />
                //         </PageLayout>
                //       );
                //     }}
                //     pageReference={pageConfig.path}
                //   />
                // }
                element={
                  <PageLayout
                    data={pageData.heading[0]}
                    pageType={pageConfig.path}
                  >
                    <PageComponent data={pageData.body?.[0].tabs} />
                  </PageLayout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
