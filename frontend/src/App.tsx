import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Contact from "./components/Contact";
import { ErrorFallback, NotFound } from "./components/Errors";
import Home from "./components/Home";
import InfosysBHP from "./components/InfosysBHP";
import WeatherApp from "./components/WeatherApp";

interface RoutesConfig {
  label: string;
  path: string;
  element: React.FC<any>;
  props?: Record<string, any>;
}

// Internal helper function to create routes config
const _createRoutesConfig = (t: (key: string) => string): RoutesConfig[] => [
  {
    label: t("home"),
    path: "/",
    element: Home,
  },
  {
    label: t("weatherApp"),
    path: "/weather",
    element: WeatherApp,
    props: {
      src: process.env.REACT_APP_WEATHER_APP_URL,
      title: "First Project",
    },
  },
  {
    label: t("infosysBHP"),
    path: "/infosys",
    element: InfosysBHP,
  },
  {
    label: t("contact"),
    path: "/contact",
    element: Contact,
  },
];

interface NavBarProp {
  routesConfig: RoutesConfig[];
}
const NavBar: React.FC<NavBarProp> = ({ routesConfig }) => {
  const { t } = useTranslation();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Box>{t("joshKeisler")}</Box>
          <Box>{t("webResume")}</Box>
        </Typography>
        <Box>
          {routesConfig.map(({ path, label }) => (
            <Button key={path} color="inherit" component={Link} to={path}>
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

function App() {
  const { t } = useTranslation();
  const routesConfig = _createRoutesConfig(t);
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <NavBar routesConfig={routesConfig} />
        <Routes>
          {routesConfig.map(({ path, element: Element, props }) => (
            <Route key={path} path={path} element={<Element {...props} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
